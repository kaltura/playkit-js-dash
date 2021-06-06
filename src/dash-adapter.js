// @flow
import shaka from 'shaka-player';
import {
  AudioTrack,
  BaseMediaSourceAdapter,
  Error,
  EventType,
  RequestType,
  TextTrack,
  Track,
  Utils,
  VideoTrack,
  ImageTrack,
  ThumbnailInfo,
  PKABRRestrictionObject,
  filterTracksByRestriction
} from '@playkit-js/playkit-js';
import {Widevine} from './drm/widevine';
import {PlayReady} from './drm/playready';
import DefaultConfig from './default-config';
import './assets/syle.css';
import {DashManifestParser} from './parser/dash-manifest-parser';
import {DashThumbnailController} from './dash-thumbnail-controller';

type ShakaEventType = {[event: string]: string};

/**
 * Shaka events enum
 * @type {Object}
 * @const
 */
const ShakaEvent: ShakaEventType = {
  ERROR: 'error',
  ADAPTATION: 'adaptation',
  BUFFERING: 'buffering',
  DRM_SESSION_UPDATE: 'drmsessionupdate'
};

/**
 * the interval in which to sample player size changes
 * @type {number}
 * @const
 */
const ABR_RESTRICTION_UPDATE_INTERVAL = 1000;

/**
 * the interval for stall detection in milliseconds
 * @type {number}
 * @const
 */
const STALL_DETECTION_INTERVAL = 500;

/**
 * the threshold for stall detection in seconds
 * @type {number}
 * @const
 */
const STALL_DETECTION_THRESHOLD = 3;

/**
 * the threshold needed to break the stall
 * @type {number}
 * @const
 */
const STALL_BREAK_THRESHOLD = 0.1;

/**
 * Adapter of shaka lib for dash content
 * @classdesc
 */
export default class DashAdapter extends BaseMediaSourceAdapter {
  /**
   * The id of Adapter
   * @member {string} id
   * @static
   * @public
   */
  static id = 'DashAdapter';
  /**
   * The adapter logger
   * @member {any} _logger
   * @private
   * @static
   */
  static _logger = BaseMediaSourceAdapter.getLogger(DashAdapter.id);
  /**
   * The supported mime type by the dash adapter
   * @member {string} _dashMimeType
   * @static
   * @private
   */
  static _dashMimeType = 'application/dash+xml';
  /**
   * The DRM protocols implementations for dash adapter.
   * @type {Array<Function>}
   * @private
   * @static
   */
  static _drmProtocols: Array<Function> = [Widevine, PlayReady];
  /**
   * The DRM protocols available for the current playback.
   * @type {Array<Function>}
   * @private
   * @static
   */
  static _availableDrmProtocol: Array<Function> = [];
  /**
   * The shaka Lib
   * @member {any} _shakaLib
   * @private
   */
  _shakaLib: any = shaka;
  /**
   * The shaka player instance
   * @member {any} _shaka
   * @private
   */
  _shaka: any;
  /**
   * an object containing all the events we bind and unbind to.
   * @member {Object} - _adapterEventsBindings
   * @type {Object}
   * @private
   */
  _adapterEventsBindings: {[name: string]: Function} = {
    [ShakaEvent.ERROR]: event => this._onError(event),
    [ShakaEvent.ADAPTATION]: () => this._onAdaptation(),
    [ShakaEvent.BUFFERING]: event => this._onBuffering(event),
    [ShakaEvent.DRM_SESSION_UPDATE]: () => this._onDrmSessionUpdate(),
    [EventType.WAITING]: () => this._onWaiting(),
    [EventType.PLAYING]: () => this._onPlaying()
  };
  /**
   * The load promise
   * @member {Promise<Object>} - _loadPromise
   * @type {Promise<Object>}
   * @private
   */
  _loadPromise: ?Promise<Object>;
  /**
   * The buffering state flag
   * @member {boolean} - _buffering
   * @type {boolean}
   * @private
   */
  _buffering: boolean = false;
  /**
   * Whether 'waiting' event has been sent by the HTMLVideoElement
   * @member {boolean} - _waitingSent
   * @type {boolean}
   * @private
   */
  _waitingSent: boolean = false;
  /**
   * Whether 'playing' event has been sent by the HTMLVideoElement
   * @member {boolean} - _playingSent
   * @type {boolean}
   * @private
   */
  _playingSent: boolean = false;

  /**
   * Video size update timer
   * @type {null|number}
   * @private
   */
  _videoSizeUpdateTimer: ?IntervalID = null;

  /**
   * stall interval to break the stall on Smart TV
   * @type {null|IntervalID}
   * @private
   */
  _stallInterval: ?IntervalID = null;

  /**
   * 3016 is the number of the video error at shaka, we already listens to it in the html5 class
   * @member {number} - VIDEO_ERROR_CODE
   * @type {number}
   * @private
   */
  VIDEO_ERROR_CODE: number = 3016;
  /**
   * The last time detach occurred
   * @type {number}
   * @private
   */
  _lastTimeDetach: number = NaN;
  /**
   * Whether the request filter threw an error
   * @type {boolean}
   * @private
   */
  _requestFilterError: boolean = false;
  /**
   * Whether the response filter threw an error
   * @type {boolean}
   * @private
   */
  _responseFilterError: boolean = false;
  /**
   * Whether async destroy is in progress
   * @type {boolean}
   * @private
   */
  _isDestroyInProgress: boolean = false;
  /**
   * Custom dash manifest parser.
   * @type {DashManifestParser}
   * @private
   */
  _manifestParser: ?DashManifestParser;
  /**
   * Dash thumbnail controller.
   * @type {DashThumbnailController}
   * @private
   */
  _thumbnailController: ?DashThumbnailController;

  /**
   * Factory method to create media source adapter.
   * @function createAdapter
   * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
   * @param {PKMediaSourceObject} source - The source Object.
   * @param {Object} config - The player configuration.
   * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
   * @static
   */
  static createAdapter(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: Object): IMediaSourceAdapter {
    let adapterConfig: Object = Utils.Object.copyDeep(DefaultConfig);
    if (Utils.Object.hasPropertyPath(config, 'text.useNativeTextTrack')) {
      adapterConfig.textTrackVisibile = Utils.Object.getPropertyPath(config, 'text.useNativeTextTrack');
    }
    if (Utils.Object.hasPropertyPath(config, 'text.useShakaTextTrackDisplay')) {
      adapterConfig.useShakaTextTrackDisplay = Utils.Object.getPropertyPath(config, 'text.useShakaTextTrackDisplay');
    }
    if (Utils.Object.hasPropertyPath(config, 'streaming.forceBreakStall')) {
      adapterConfig.forceBreakStall = Utils.Object.getPropertyPath(config, 'streaming.forceBreakStall');
    }
    if (Utils.Object.hasPropertyPath(config, 'sources.options')) {
      const options = config.sources.options;
      adapterConfig.forceRedirectExternalStreams = options.forceRedirectExternalStreams;
      adapterConfig.redirectExternalStreamsHandler = options.redirectExternalStreamsHandler;
      adapterConfig.redirectExternalStreamsTimeout = options.redirectExternalStreamsTimeout;
    }
    if (Utils.Object.hasPropertyPath(config, 'abr')) {
      const abr = config.abr;
      if (typeof abr.enabled === 'boolean') {
        adapterConfig.shakaConfig.abr.enabled = abr.enabled;
      }
      if (typeof abr.capLevelToPlayerSize === 'boolean') {
        adapterConfig.capLevelToPlayerSize = abr.capLevelToPlayerSize;
      }
      if (abr.defaultBandwidthEstimate) {
        adapterConfig.shakaConfig.abr.defaultBandwidthEstimate = abr.defaultBandwidthEstimate;
      }
      if (abr.restrictions) {
        Utils.Object.createPropertyPath(adapterConfig, 'abr.restrictions', abr.restrictions);
      }
    }

    //Merge shaka config with override config, override takes precedence
    if (Utils.Object.hasPropertyPath(config, 'playback.options.html5.dash')) {
      Utils.Object.mergeDeep(adapterConfig.shakaConfig, config.playback.options.html5.dash);
    }
    adapterConfig.network = config.network;
    return new this(videoElement, source, adapterConfig);
  }

  /**
   * Checks if dash adapter can play a given mime type
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the dash adapter can play a specific mime type
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    let canPlayType = typeof mimeType === 'string' ? mimeType.toLowerCase() === DashAdapter._dashMimeType && DashAdapter.isMSESupported() : false;
    DashAdapter._logger.debug('canPlayType result for mimeType: ' + mimeType + ' is ' + canPlayType.toString());
    return canPlayType;
  }

  /**
   * set 'bitrate' the max bandwidth (if possible)
   * @param {number} bitrate the max bitrate allowed
   * @returns {void}
   */
  setMaxBitrate(bitrate: number): void {
    if (this._hasLowerOrEqualBitrate(bitrate)) {
      this._shaka.configure({abr: {restrictions: {maxBandwidth: bitrate}}});
    }
  }

  _getSortedTracks(): Array<Object> {
    const tracks = this._shaka.getVariantTracks();
    const sortedTracks = tracks
      .map(obj => ({
        id: obj.id,
        bandwidth: obj.bandwidth,
        active: obj.active
      }))
      .sort((obj1, obj2) => obj1.bandwidth - obj2.bandwidth);
    return sortedTracks;
  }

  _hasLowerOrEqualBitrate(maxBitrate: number): boolean {
    const sortedTracks = this._getSortedTracks();
    if (sortedTracks[0].bandwidth <= maxBitrate) {
      return true;
    }
    return false;
  }

  /**
   * Checks if dash adapter can play a given drm data.
   * @param {Array<Object>} drmData - The drm data to check.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @returns {boolean} - Whether the dash adapter can play a specific drm data.
   * @static
   */
  static canPlayDrm(drmData: Array<Object>, drmConfig: PKDrmConfigObject): boolean {
    DashAdapter._availableDrmProtocol = [];
    for (let drmProtocol of DashAdapter._drmProtocols) {
      if (drmProtocol.isConfigured(drmData, drmConfig)) {
        DashAdapter._availableDrmProtocol.push(drmProtocol);
        break;
      }
    }
    if (!DashAdapter._availableDrmProtocol.length) {
      for (let drmProtocol of DashAdapter._drmProtocols) {
        if (drmProtocol.canPlayDrm(drmData)) {
          DashAdapter._availableDrmProtocol.push(drmProtocol);
        }
      }
    }

    return !!DashAdapter._availableDrmProtocol.length;
  }

  /**
   * Checks if the dash adapter is supported
   * @function isSupported
   * @returns {boolean} -  Whether dash is supported.
   * @static
   */
  static isSupported(): boolean {
    /*
    for browsers which don't have VTT cue we need to install a polyfill for both isBrowserSupported
    check and also for playback, but we might not use Shaka so if we install the polyfill now just for browser support
    check then uninstall it after, and call it again if we actually use DASH adapter for playback on init
    this is in order to avoid collisions with other libs
     */
    let resetVttPolyfill = false;
    if (!window.VTTCue) {
      resetVttPolyfill = true;
    }
    shaka.polyfill.installAll();
    let isSupported = shaka.Player.isBrowserSupported();
    if (resetVttPolyfill) {
      window.VTTCue = undefined;
    }
    DashAdapter._logger.debug('isSupported:' + isSupported);
    return isSupported;
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to the dash adapter
   * @param {PKMediaSourceObject} source - The source object
   * @param {Object} config - The media source adapter configuration
   */
  constructor(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: Object = {}) {
    DashAdapter._logger.debug('Creating adapter. Shaka version: ' + shaka.Player.version);
    super(videoElement, source, config);
    this._config = Utils.Object.mergeDeep({}, DefaultConfig, this._config);
    this._init();
  }

  /**
   * Runs the initialization actions of the dash adapter.
   * @private
   * @returns {void}
   */
  _init(): void {
    //Need to call this again cause we are uninstalling the VTTCue polyfill to avoid collisions with other libs
    shaka.polyfill.installAll();
    this._shaka = new shaka.Player();
    //render text tracks to our own container
    if (this._config.useShakaTextTrackDisplay) {
      this._shaka.setVideoContainer(Utils.Dom.getElementBySelector('.playkit-subtitles'));
    }
    this._maybeSetFilters();
    this._maybeSetDrmConfig();
    this._maybeBreakStalls();
    this._shaka.configure(this._config.shakaConfig);
    this._addBindings();
  }

  _clearStallInterval(): void {
    if (this._stallInterval) {
      clearInterval(this._stallInterval);
      this._stallInterval = null;
    }
  }

  _stallHandler(): void {
    this._clearStallInterval();

    const getCurrentTimeInSeconds = () => {
      return Date.now() / 1000;
    };
    const lastUpdateTime = getCurrentTimeInSeconds();
    let lastCurrentTime = this._videoElement.currentTime;

    this._stallInterval = setInterval(() => {
      const stallSeconds = getCurrentTimeInSeconds() - lastUpdateTime;
      //waiting for 3 sec until checking stalling
      if (stallSeconds > STALL_DETECTION_THRESHOLD && !this._videoElement.paused) {
        if (lastCurrentTime === this._videoElement.currentTime) {
          DashAdapter._logger.debug('stall found, break the stall');
          this._videoElement.currentTime = parseFloat(this._videoElement.currentTime.toFixed(1)) + STALL_BREAK_THRESHOLD;
        }
        this._clearStallInterval();
      }
      lastCurrentTime = this._videoElement.currentTime;
    }, STALL_DETECTION_INTERVAL);
  }

  /**
   * register to event to break the stalls on smart TV
   * @returns {void}
   * @private
   */
  _maybeBreakStalls(): void {
    if (this._config.forceBreakStall) {
      this._eventManager.listen(this._videoElement, EventType.SEEKING, () => this._stallHandler());
    }
  }

  /**
   * get the redirected URL
   * @param {string} url - The url to check for redirection
   * @returns {Promise<string>} - the resolved url
   * @private
   */
  _maybeGetRedirectedUrl(url: string): Promise<string> {
    const shouldRedirect = this._config.forceRedirectExternalStreams;
    const timeout = this._config.redirectExternalStreamsTimeout;
    const callback = this._config.redirectExternalStreamsHandler;
    return new Promise(resolve => {
      if (!shouldRedirect) {
        return resolve(url);
      }
      Utils.Http.jsonp(url, callback, {
        timeout: timeout
      })
        .then(uri => {
          resolve(uri);
        })
        .catch(() => resolve(url));
    });
  }

  _maybeSetFilters(): void {
    if (typeof Utils.Object.getPropertyPath(this._config, 'network.requestFilter') === 'function') {
      DashAdapter._logger.debug('Register request filter');
      this._shaka.getNetworkingEngine().registerRequestFilter((type, request) => {
        if (Object.values(RequestType).includes(type)) {
          const pkRequest: PKRequestObject = {url: request.uris[0], body: request.body, headers: request.headers};
          let requestFilterPromise;
          try {
            requestFilterPromise = this._config.network.requestFilter(type, pkRequest);
          } catch (error) {
            requestFilterPromise = Promise.reject(error);
          }
          requestFilterPromise = requestFilterPromise || Promise.resolve(pkRequest);
          return requestFilterPromise
            .then(updatedRequest => {
              request.uris = [updatedRequest.url];
              request.headers = updatedRequest.headers;
              if (typeof updatedRequest.withCredentials === 'boolean') {
                request.allowCrossSiteCredentials = updatedRequest.withCredentials;
              }
              if (request.method === 'POST') {
                request.body = updatedRequest.body;
              } else if (updatedRequest.body) {
                DashAdapter._logger.warn(`Request with ${request.method} method cannot have body`);
              }
            })
            .catch(error => {
              this._requestFilterError = true;
              throw error;
            });
        }
      });
    }
    if (typeof Utils.Object.getPropertyPath(this._config, 'network.responseFilter') === 'function') {
      DashAdapter._logger.debug('Register response filter');
      this._shaka.getNetworkingEngine().registerResponseFilter((type, response) => {
        if (Object.values(RequestType).includes(type)) {
          const {uri: url, data, headers} = response;
          const pkResponse: PKResponseObject = {url, originalUrl: this._sourceObj.url, data, headers};
          let responseFilterPromise;
          try {
            responseFilterPromise = this._config.network.responseFilter(type, pkResponse);
          } catch (error) {
            responseFilterPromise = Promise.reject(error);
          }
          responseFilterPromise = responseFilterPromise || Promise.resolve(pkResponse);
          return responseFilterPromise
            .then(updatedResponse => {
              response.data = updatedResponse.data;
            })
            .catch(error => {
              this._responseFilterError = true;
              throw error;
            });
        }
      });
    }
  }

  /**
   * Configure drm for shaka player.
   * @private
   * @returns {void}
   */
  _maybeSetDrmConfig(): void {
    if (this._sourceObj && this._sourceObj.drmData) {
      let config = {};
      for (let drmProtocol of DashAdapter._availableDrmProtocol) {
        drmProtocol.setDrmPlayback(config, this._sourceObj.drmData);
        // If shaka config already has some drm configuration override the config defaults with it
        if (this._config.shakaConfig.drm) {
          Utils.Object.mergeDeep(config.drm, this._config.shakaConfig.drm);
        }
        Utils.Object.mergeDeep(this._config.shakaConfig, config);
      }
    }
  }

  /**
   * apply Capping to player size restrictions
   * @private
   * @returns {void}
   */
  _maybeCapLevelToPlayerSize(): void {
    if (this._config.capLevelToPlayerSize) {
      const getRestrictions = () => {
        return {
          minHeight: 0,
          maxHeight: this._videoHeight,
          minWidth: 0,
          maxWidth: this._videoWidth,
          minBitrate: 0,
          maxBitrate: Infinity
        };
      };
      this._clearVideoUpdateTimer();
      this._videoSizeUpdateTimer = setInterval(() => this._updateRestriction(getRestrictions()), ABR_RESTRICTION_UPDATE_INTERVAL);
      this._updateRestriction(getRestrictions());
    }
  }

  /**
   * apply ABR restrictions
   * @private
   * @returns {void}
   */
  _maybeApplyAbrRestrictions(): void {
    if (!this._config.capLevelToPlayerSize) {
      this._clearVideoUpdateTimer();
      if (Utils.Object.hasPropertyPath(this._config, 'abr.restrictions')) {
        this._updateRestriction(this._config.abr.restrictions);
      }
    }
  }

  /**
   * apply ABR restrictions by size
   * @private
   * @param {PKABRRestrictionObject} restrictions - abr restrictions config
   * @returns {void}
   */
  _updateRestriction(restrictions: PKABRRestrictionObject): void {
    const shakaRestrictionsConfig = this._getRestrictionShakaConfig(restrictions);
    this._shaka.configure({
      abr: {
        restrictions: shakaRestrictionsConfig
      }
    });
  }

  _getRestrictionShakaConfig(restrictions: PKABRRestrictionObject): Object {
    const getMinDimensions = (dim): number => {
      const videoTracks = this._getVideoTracks();
      return Math.min.apply(
        null,
        videoTracks.map(variant => variant[dim])
      );
    };
    let restrictionsShakaConfig = {};
    if (restrictions) {
      let {maxHeight, maxWidth, maxBitrate, minHeight, minWidth, minBitrate} = restrictions;
      const minHeightValue = Math.max(minHeight, 0);
      const maxHeightValue = Math.max(maxHeight, getMinDimensions('height'));
      if (maxHeightValue >= minHeightValue) {
        restrictionsShakaConfig.minHeight = minHeightValue;
        restrictionsShakaConfig.maxHeight = maxHeightValue;
      } else {
        DashAdapter._logger.warn('Invalid maxHeight restriction, maxHeight must be greater than minHeight', minHeight, maxHeight);
      }
      const minWidthValue = Math.max(minWidth, 0);
      const maxWidthValue = Math.max(maxWidth, getMinDimensions('width'));
      if (maxWidthValue >= minWidthValue) {
        restrictionsShakaConfig.minWidth = minWidthValue;
        restrictionsShakaConfig.maxWidth = maxWidthValue;
      } else {
        DashAdapter._logger.warn('Invalid maxWidth restriction, maxWidth must be greater than minWidth', minWidth, maxWidth);
      }
      const minBitrateValue = Math.max(minBitrate, 0);
      const maxBitrateValue = Math.max(maxBitrate, getMinDimensions('bandwidth'));
      if (maxBitrateValue >= minBitrateValue) {
        restrictionsShakaConfig.minBandwidth = minBitrateValue;
        restrictionsShakaConfig.maxBandwidth = maxBitrateValue;
      } else {
        DashAdapter._logger.warn('Invalid maxBitrate restriction, maxBitrate must be greater than minBitrate', minBitrate, maxBitrate);
      }
    }
    return restrictionsShakaConfig;
  }

  /**
   * attach media - return the media source to handle the video tag
   * @public
   * @returns {void}
   */
  attachMediaSource(): void {
    if (!this._shaka) {
      if (this._videoElement && this._videoElement.src) {
        Utils.Dom.setAttribute(this._videoElement, 'src', '');
        Utils.Dom.removeAttribute(this._videoElement, 'src');
      }
      this._init();
    }
  }

  /**
   * detach media - will remove the media source from handling the video
   * @public
   * @returns {void}
   */
  detachMediaSource(): void {
    if (this._shaka) {
      // 1 second different between duration and current time will signal as end - will enable replay button
      if (Math.floor(this.duration - this.currentTime) === 0) {
        this._lastTimeDetach = 0;
      } else if (this.currentTime > 0) {
        this._lastTimeDetach = this.currentTime;
      }
      this._reset().then(() => {
        this._shaka = null;
        this._loadPromise = null;
      });
    }
  }

  /**
   * Clear the video update timer
   * @private
   * @returns {void}
   */
  _clearVideoUpdateTimer(): void {
    if (this._videoSizeUpdateTimer) {
      clearInterval(this._videoSizeUpdateTimer);
      this._videoSizeUpdateTimer = null;
    }
  }

  get _videoWidth(): ?number {
    let width;
    const videoElement = this._videoElement;
    if (videoElement) {
      width = videoElement.width || videoElement.clientWidth || videoElement.offsetWidth;
      width *= this._contentScaleFactor;
    }
    return width;
  }

  get _videoHeight(): ?number {
    let height;
    const videoElement = this._videoElement;
    if (videoElement) {
      height = videoElement.height || videoElement.clientHeight || videoElement.offsetHeight;
      height *= this._contentScaleFactor;
    }
    return height;
  }

  get _contentScaleFactor(): number {
    let pixelRatio = 1;
    try {
      pixelRatio = window.devicePixelRatio;
    } catch (e) {
      DashAdapter._logger.debug('failed reading devicePixelRatio, assume 1');
    }
    return pixelRatio;
  }

  /**
   * Add the required bindings to shaka.
   * @function _addBindings
   * @private
   * @returns {void}
   */
  _addBindings(): void {
    this._eventManager.listen(this._shaka, ShakaEvent.ADAPTATION, this._adapterEventsBindings.adaptation);
    this._eventManager.listen(this._shaka, ShakaEvent.ERROR, this._adapterEventsBindings.error);
    this._eventManager.listen(this._shaka, ShakaEvent.DRM_SESSION_UPDATE, this._adapterEventsBindings.drmsessionupdate);
    this._eventManager.listen(this._videoElement, EventType.WAITING, this._adapterEventsBindings.waiting);
    this._eventManager.listen(this._videoElement, EventType.PLAYING, this._adapterEventsBindings.playing);
    this._eventManager.listenOnce(this._videoElement, EventType.PLAYING, () => {
      this._eventManager.listen(this._shaka, ShakaEvent.BUFFERING, this._adapterEventsBindings.buffering);
    });

    // called when a resource is downloaded
    this._shaka.getNetworkingEngine().registerResponseFilter((type, response) => {
      switch (type) {
        case shaka.net.NetworkingEngine.RequestType.SEGMENT:
          this._trigger(EventType.FRAG_LOADED, {
            miliSeconds: response.timeMs,
            bytes: response.data.byteLength,
            url: response.uri
          });
          break;
        case shaka.net.NetworkingEngine.RequestType.MANIFEST:
          this._parseManifest(response.data);
          this._trigger(EventType.MANIFEST_LOADED, {miliSeconds: response.timeMs});
          break;
      }
    });
  }

  /**
   * Custom parser to retrieve image adaptation sets.
   * @param {ArrayBuffer} manifestBuffer - The array buffer manifest from the response.
   * @function _parseManifest
   * @private
   * @returns {void}
   */
  _parseManifest(manifestBuffer: ArrayBuffer): void {
    if (!this._manifestParser && DashManifestParser.isValid()) {
      DashAdapter._logger.debug('Creating parser for the first time');
      this._manifestParser = new DashManifestParser(manifestBuffer);
      this._manifestParser.parseManifest();
    }
  }

  /**
   * Load the video source
   * @param {number} startTime - Optional time to start the video from.
   * @function load
   * @override
   */
  load(startTime: ?number): Promise<Object> {
    if (!this._loadPromise) {
      this._shaka.attach(this._videoElement);
      this._loadPromise = new Promise((resolve, reject) => {
        if (this._sourceObj && this._sourceObj.url) {
          this._trigger(EventType.ABR_MODE_CHANGED, {mode: this.isAdaptiveBitrateEnabled() ? 'auto' : 'manual'});
          let shakaStartTime = startTime && startTime > -1 ? startTime : undefined;
          shakaStartTime = isNaN(this._lastTimeDetach) ? shakaStartTime : this._lastTimeDetach;
          this._lastTimeDetach = NaN;
          this._maybeGetRedirectedUrl(this._sourceObj.url)
            .then(url => {
              return this._shaka.load(url, shakaStartTime);
            })
            .then(() => {
              const data = {tracks: this._getParsedTracks()};
              this._maybeCapLevelToPlayerSize();
              DashAdapter._logger.debug('The source has been loaded successfully');
              resolve(data);
            })
            .catch(error => {
              reject(new Error(this._isDestroyInProgress ? Error.Severity.RECOVERABLE : error.severity, error.category, error.code, error.data));
            });
        }
      });
    }
    return this._loadPromise;
  }

  /**
   * Destroys the dash adapter
   * @function destroy
   * @override
   * @returns {Promise<*>} - The destroy promise.
   */
  destroy(): Promise<*> {
    this._isDestroyInProgress = true;
    return new Promise((resolve, reject) => {
      super.destroy().then(() => {
        DashAdapter._logger.debug('destroy');
        this._loadPromise = null;
        this._reset()
          .then(resetResult => {
            this._isDestroyInProgress = false;
            resolve(resetResult);
          })
          .catch(error => {
            this._isDestroyInProgress = false;
            reject(error);
          });
      });
    });
  }

  /**
   *  Returns in-stream thumbnail for a chosen time.
   * @param {number} time - playback time.
   * @public
   * @return {?ThumbnailInfo} - Thumbnail info
   */
  getThumbnail(time: number): ?ThumbnailInfo {
    if (this._thumbnailController) {
      return this._thumbnailController.getThumbnail(time);
    }
  }

  /**
   * reset shaka instance and its bindings
   * @function _reset
   * @private
   * @returns {Promise<*>} - The destroy promise.
   */
  _reset(): Promise<*> {
    this._buffering = false;
    this._waitingSent = false;
    this._playingSent = false;
    this._requestFilterError = false;
    this._responseFilterError = false;
    this._manifestParser = null;
    this._thumbnailController = null;
    this._clearStallInterval();
    this._clearVideoUpdateTimer();
    if (this._eventManager) {
      this._eventManager.removeAll();
    }
    if (this._shaka) {
      this._adapterEventsBindings = {};
      return this._shaka.destroy();
    }
    return Promise.resolve();
  }

  /**
   * Get the original video tracks
   * @function _getVideoTracks
   * @returns {Array<Object>} - The original video tracks
   * @private
   */
  _getVideoTracks(): Array<Object> {
    let variantTracks = this._shaka.getVariantTracks();
    let activeVariantTrack = this._getActiveTrack();
    let videoTracks = variantTracks.filter(variantTrack => {
      return variantTrack.audioId === activeVariantTrack.audioId;
    });
    return videoTracks;
  }

  _getActiveTrack(): Object {
    return this._shaka.getVariantTracks().find(variantTrack => variantTrack.active);
  }

  /**
   * Get the original audio tracks
   * @function _getAudioTracks
   * @returns {Array<Object>} - Array of objects with unique language and label.
   * @private
   */
  _getAudioTracks(): Array<Object> {
    const variantTracks = this._shaka.getVariantTracks();
    let audioTracks = this._shaka.getAudioLanguagesAndRoles();
    audioTracks.forEach(track => {
      const sameLangAudioVariants = variantTracks.filter(vt => vt.language === track.language);
      const id = sameLangAudioVariants.map(variant => variant.id).join('_');
      const active = sameLangAudioVariants.some(variant => variant.active);
      track.id = id;
      track.label = sameLangAudioVariants[0].label;
      track.active = active;
    });
    return audioTracks;
  }

  /**
   * Get the parsed tracks
   * @function _getParsedTracks
   * @returns {Array<Track>} - The parsed tracks
   * @private
   */
  _getParsedTracks(): Array<Track> {
    if (this._shaka) {
      const videoTracks = this._getParsedVideoTracks();
      const audioTracks = this._getParsedAudioTracks();
      const textTracks = this._getParsedTextTracks();
      const imageTracks = this._getParsedImageTracks();
      return videoTracks.concat(audioTracks).concat(textTracks).concat(imageTracks);
    }
    return [];
  }

  /**
   * Get the parsed video tracks
   * @function _getParsedVideoTracks
   * @returns {Array<VideoTrack>} - The parsed video tracks
   * @private
   */
  _getParsedVideoTracks(): Array<VideoTrack> {
    let videoTracks = this._getVideoTracks();
    let parsedTracks = [];
    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        let settings = {
          id: videoTracks[i].id,
          bandwidth: videoTracks[i].videoBandwidth || videoTracks[i].bandwidth,
          width: videoTracks[i].width,
          height: videoTracks[i].height,
          active: videoTracks[i].active,
          index: i
        };
        parsedTracks.push(new VideoTrack(settings));
      }
    }
    return parsedTracks;
  }

  /**
   * Get the parsed audio tracks
   * @function _getParsedAudioTracks
   * @returns {Array<AudioTrack>} - The parsed audio tracks
   * @private
   */
  _getParsedAudioTracks(): Array<AudioTrack> {
    let audioTracks = this._getAudioTracks();
    let parsedTracks = [];
    if (audioTracks) {
      for (let i = 0; i < audioTracks.length; i++) {
        let settings = {
          id: audioTracks[i].id,
          active: audioTracks[i].active,
          label: audioTracks[i].label,
          language: audioTracks[i].language,
          index: i
        };
        parsedTracks.push(new AudioTrack(settings));
      }
    }
    return parsedTracks;
  }

  /**
   * Get the parsed text tracks
   * @function _getParsedTextTracks
   * @returns {Array<TextTrack>} - The parsed text tracks
   * @private
   */
  _getParsedTextTracks(): Array<TextTrack> {
    let textTracks = this._shaka.getTextTracks();
    let parsedTracks = [];
    if (textTracks) {
      for (let i = 0; i < textTracks.length; i++) {
        let kind = textTracks[i].kind ? textTracks[i].kind + 's' : '';
        kind = kind === '' && this._config.useShakaTextTrackDisplay ? 'captions' : kind;
        let settings = {
          kind: kind,
          active: false,
          label: textTracks[i].label,
          language: textTracks[i].language,
          index: i
        };
        parsedTracks.push(new TextTrack(settings));
      }
    }
    return parsedTracks;
  }

  /**
   * Get the parsed image tracks
   * @function _getParsedImageTracks
   * @returns {Array<ImageTrack>} - The parsed image tracks
   * @private
   */
  _getParsedImageTracks(): Array<ImageTrack> {
    if (this._manifestParser) {
      const imageSet = this._manifestParser.getImageSet();
      if (imageSet) {
        this._thumbnailController = new DashThumbnailController(imageSet, this.src);
        return this._thumbnailController.getTracks();
      }
    }
    return [];
  }

  /**
   * Select a video track
   * @function selectVideoTrack
   * @param {VideoTrack} videoTrack - the video track to select
   * @returns {void}
   * @public
   */
  selectVideoTrack(videoTrack: VideoTrack): void {
    if (this._shaka) {
      let videoTracks = this._getVideoTracks();
      if (videoTrack instanceof VideoTrack && videoTracks) {
        let selectedVideoTrack = videoTracks[videoTrack.index];
        if (selectedVideoTrack) {
          if (this.isAdaptiveBitrateEnabled()) {
            this._shaka.configure({abr: {enabled: false}});
            this._trigger(EventType.ABR_MODE_CHANGED, {mode: 'manual'});
          }
          if (!selectedVideoTrack.active) {
            this._shaka.selectVariantTrack(videoTracks[videoTrack.index], true);
            this._onTrackChanged(videoTrack);
          }
        }
      }
    }
  }

  /**
   * Select an audio track
   * @function selectAudioTrack
   * @param {AudioTrack} audioTrack - the audio track to select
   * @returns {void}
   * @public
   */
  selectAudioTrack(audioTrack: AudioTrack): void {
    if (this._shaka && audioTrack instanceof AudioTrack && !audioTrack.active) {
      this._shaka.selectAudioLanguage(audioTrack.language);
      this._onTrackChanged(audioTrack);
    }
  }

  /**
   * Select a text track
   * @function selectTextTrack
   * @param {TextTrack} textTrack - the track to select
   * @returns {void}
   * @public
   */
  selectTextTrack(textTrack: TextTrack): void {
    if (this._shaka && textTrack instanceof TextTrack && !textTrack.active && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions')) {
      this._shaka.setTextTrackVisibility(this._config.textTrackVisibile);
      this._shaka.selectTextLanguage(textTrack.language);
      this._onTrackChanged(textTrack);
    }
  }

  selectImageTrack(imageTrack: ImageTrack): void {
    if (this._shaka && this._thumbnailController && imageTrack instanceof ImageTrack && !imageTrack.active) {
      this._thumbnailController.selectTrack(imageTrack);
      this._onTrackChanged(ImageTrack);
    }
  }

  /**
   * Hide the text track
   * @function hideTextTrack
   * @returns {void}
   * @public
   */
  hideTextTrack(): void {
    if (this._shaka) {
      this._shaka.setTextTrackVisibility(false);
    }
  }

  /**
   * Enables adaptive bitrate switching
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  enableAdaptiveBitrate(): void {
    if (this._shaka && !this.isAdaptiveBitrateEnabled()) {
      this._trigger(EventType.ABR_MODE_CHANGED, {mode: 'auto'});
      this._shaka.configure({abr: {enabled: true}});
    }
  }

  /**
   * Checking if adaptive bitrate switching is enabled.
   * @function isAdaptiveBitrateEnabled
   * @returns {boolean} - Whether adaptive bitrate is enabled.
   * @public
   */
  isAdaptiveBitrateEnabled(): boolean {
    if (this._shaka) {
      let shakaConfig = this._shaka.getConfiguration();
      return shakaConfig.abr.enabled;
    }
    return false;
  }

  /**
   * Apply ABR restriction.
   * @function applyABRRestriction
   * @param {PKABRRestrictionObject} restrictions - abr restrictions config
   * @returns {void}
   * @public
   */
  applyABRRestriction(restrictions: PKABRRestrictionObject): void {
    Utils.Object.createPropertyPath(this._config, 'abr.restrictions', restrictions);
    this._maybeApplyAbrRestrictions();
    if (!this.isAdaptiveBitrateEnabled()) {
      const videoTracks = this._getParsedVideoTracks();
      const availableTracks = filterTracksByRestriction(videoTracks, this._config.abr.restrictions);
      if (availableTracks.length) {
        const activeTrackInRange = availableTracks.find(track => track.active);
        if (!activeTrackInRange) {
          this.selectVideoTrack(availableTracks[0]);
        }
      }
    }
  }

  /**
   * Returns the live edge
   * @returns {number} - live edge
   * @private
   */
  _getLiveEdge(): number {
    return this._shaka ? this._shaka.seekRange().end : NaN;
  }

  /**
   * Seeking to live edge.
   * @function seekToLiveEdge
   * @returns {void}
   * @public
   */
  seekToLiveEdge(): void {
    if (this._shaka && this._videoElement.readyState > 0) {
      this._videoElement.currentTime = this._shaka.seekRange().end;
    }
  }

  /**
   * Checking if the current playback is live.
   * @function isLive
   * @returns {boolean} - Whether playback is live.
   * @public
   */
  isLive(): boolean {
    if (this._shaka) {
      return this._shaka.isLive();
    }
    return false;
  }

  /**
   * An handler to shaka adaptation event
   * @function _onAdaptation
   * @returns {void}
   * @private
   */
  _onAdaptation(): void {
    let selectedVideoTrack = this._getParsedVideoTracks().find(videoTrack => videoTrack.active);
    this._onTrackChanged(selectedVideoTrack);
  }

  /**
   * An handler to shaka error event
   * @function _onError
   * @param {any} event - the error event
   * @returns {void}
   * @private
   */
  _onError(event: any): void {
    if (event && event.detail) {
      let error = event.detail;
      //don't handle video element errors, they are already handled by the player
      if (error.code === this.VIDEO_ERROR_CODE) {
        return;
      }
      if ((this._requestFilterError || this._responseFilterError) && error.data[0] instanceof shaka.util.Error) {
        // When the request/response filter of the license request throws an error,
        // shaka wraps the request/response filter error (code 1006/1007) with a license request error (code 6007)
        // so extract the inner error
        error = error.data[0];
        this._requestFilterError ? (this._requestFilterError = false) : (this._responseFilterError = false);
      }
      this._trigger(EventType.ERROR, new Error(error.severity, error.category, error.code, error.data));
      DashAdapter._logger.error(error);
    }
  }

  /**
   * An handler to shaka buffering event
   * @function _onBuffering
   * @param {any} event - the buffering event
   * @returns {void}
   * @private
   */
  _onBuffering(event: any): void {
    if (event.buffering) {
      if (!this._waitingSent) {
        // The player enters the buffering state and 'waiting' event hasn't been sent by the HTMLVideoElement.
        this._videoElement.dispatchEvent(new window.Event(EventType.WAITING));
        this._buffering = true;
      }
    } else {
      this._buffering = false;
      if (!this._videoElement.paused && !this._playingSent) {
        //the player leaves the buffering state. and 'playing' event hasn't been sent by the HTMLVideoElement.
        this._videoElement.dispatchEvent(new window.Event(EventType.PLAYING));
      }
    }
  }

  /**
   * An handler to shaka drm session update event
   * @function _onDrmSessionUpdate
   * @returns {void}
   * @private
   */
  _onDrmSessionUpdate(): void {
    this._trigger(EventType.DRM_LICENSE_LOADED, {
      licenseTime: this._shaka.getStats().licenseTime,
      scheme: this._shaka.drmInfo().keySystem
    });
  }

  /**
   * An handler to HTMLVideoElement waiting event
   * @function _onWaiting
   * @returns {void}
   * @private
   */
  _onWaiting(): void {
    this._waitingSent = true;
    this._playingSent = false;
  }

  /**
   * An handler to HTMLVideoElement playing event
   * @function _onPlaying
   * @returns {void}
   * @private
   */
  _onPlaying(): void {
    this._playingSent = true;
    this._waitingSent = false;
    if (this._buffering) {
      // The player is in buffering state.
      this._videoElement.dispatchEvent(new window.Event(EventType.WAITING));
    }
  }

  /**
   * Get the start time of DVR window in live playback in seconds.
   * @returns {Number} - start time of DVR window.
   * @public
   */
  getStartTimeOfDvrWindow(): number {
    if (this.isLive() && this._shaka) {
      return this._shaka.seekRange().start;
    } else {
      return 0;
    }
  }

  /**
   * gets the target buffer of the player
   * @returns {number} - buffer length target in seconds
   */
  get targetBuffer(): number {
    let targetBufferVal = NaN;
    if (!this._shaka) return NaN;
    if (this.isLive()) {
      if (this._shaka.getManifest() && this._shaka.getManifest().presentationTimeline) {
        targetBufferVal =
          this._shaka.getManifest().presentationTimeline.getSegmentAvailabilityEnd() -
          this._shaka.getManifest().presentationTimeline.getSeekRangeEnd() -
          (this._videoElement.currentTime - this._getLiveEdge());
      }
    } else {
      // consideration of the end of the playback in the target buffer calc
      targetBufferVal = this._videoElement.duration - this._videoElement.currentTime;
    }

    if (this._shaka.getManifest() && this._shaka.getManifest().presentationTimeline) {
      targetBufferVal = Math.min(
        targetBufferVal,
        this._shaka.getConfiguration().streaming.bufferingGoal + this._shaka.getManifest().presentationTimeline.getMaxSegmentDuration()
      );
    }
    return targetBufferVal;
  }
}
