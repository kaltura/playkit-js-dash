import shaka from 'shaka-player';
import {
  AudioTrack,
  BaseMediaSourceAdapter,
  Error,
  EventType,
  RequestType,
  TextTrack as PKTextTrack,
  Track,
  TimedMetadata,
  createTextTrackCue,
  Utils,
  VideoTrack,
  ImageTrack,
  ThumbnailInfo,
  PKABRRestrictionObject,
  filterTracksByRestriction,
  PKDrmDataObject,
  PKMediaSourceObject,
  IMediaSourceAdapter,
  FakeEvent,
  IDrmProtocol,
  PKResponseObject,
  PKRequestObject,
  PKDrmConfigObject
} from '@playkit-js/playkit-js';
import {Widevine} from './drm/widevine';
import {PlayReady} from './drm/playready';
import DefaultConfig from './default-config.json';
import './assets/style.css';
import {DashManifestParser} from './parser/dash-manifest-parser';
import {DashThumbnailController} from './dash-thumbnail-controller';
import {AssetCache} from './cache/asset-cache';

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
  DRM_SESSION_UPDATE: 'drmsessionupdate',
  EMSG: 'emsg'
};

type ErrorEventsType = {[errorCode: string]: {timeStamp: number; count: number}};

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
 * the minimal threshold for stall detection in seconds
 * @type {number}
 * @const
 */
const MIN_STALL_DETECTION_THRESHOLD = 2;

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
  public static id = 'DashAdapter';
  /**
   * The adapter logger
   * @member {any} _logger
   * @private
   * @static
   */
  protected static _logger = BaseMediaSourceAdapter.getLogger(DashAdapter.id);

  public static textContainerClass = 'shaka-text-container';

  /**
   * The supported mime type by the dash adapter
   * @member {string} _dashMimeType
   * @static
   * @private
   */
  private static _dashMimeType = 'application/dash+xml';
  /**
   * The DRM protocols implementations for dash adapter.
   * @type {Array<Function>}
   * @private
   * @static
   */
  private static _drmProtocols: Array<IDrmProtocol> = [Widevine, PlayReady];
  /**
   * The DRM protocols available for the current playback.
   * @type {Array<Function>}
   * @private
   * @static
   */
  private static _availableDrmProtocol: Array<IDrmProtocol> = [];
  /**
   * The shaka Lib
   * @member {any} _shakaLib
   * @private
   */
  private _shakaLib: typeof shaka = shaka;

  /**
   * an object containing all the events we bind and unbind to.
   * @member {Object} - _adapterEventsBindings
   * @type {Object}
   * @private
   */
  private _adapterEventsBindings: {[name: string]: (event: FakeEvent) => any} = {
    [ShakaEvent.ERROR]: event => this._onError(event),
    [ShakaEvent.ADAPTATION]: () => this._onAdaptation(),
    [ShakaEvent.BUFFERING]: event => this._onBuffering(event),
    [ShakaEvent.DRM_SESSION_UPDATE]: () => this._onDrmSessionUpdate(),
    [ShakaEvent.EMSG]: event => this._onEmsg(event),
    [EventType.WAITING]: () => this._onWaiting(),
    [EventType.PLAYING]: () => this._onPlaying()
  };
  /**
   * The buffering state flag
   * @member {boolean} - _buffering
   * @type {boolean}
   * @private
   */
  private _buffering: boolean = false;
  /**
   * Whether 'waiting' event has been sent by the HTMLVideoElement
   * @member {boolean} - _waitingSent
   * @type {boolean}
   * @private
   */
  private _waitingSent: boolean = false;
  /**
   * Whether 'playing' event has been sent by the HTMLVideoElement
   * @member {boolean} - _playingSent
   * @type {boolean}
   * @private
   */
  private _playingSent: boolean = false;

  /**
   * Video size update timer
   * @type {null|number}
   * @private
   */
  private _videoSizeUpdateTimer: number | null = null;

  /**
   * stall interval to break the stall on Smart TV
   * @type {null|IntervalID}
   * @private
   */
  private _stallInterval: number | null = null;

  /**
   * 3016 is the number of the video error at shaka, we already listens to it in the html5 class
   * @member {number} - VIDEO_ERROR_CODE
   * @type {number}
   * @private
   */
  public VIDEO_ERROR_CODE: number = 3016;
  /**
   * The last time detach occurred
   * @type {number}
   * @private
   */
  private _lastTimeDetach: number = NaN;
  /**
   * Whether the request filter threw an error
   * @type {boolean}
   * @private
   */
  private _requestFilterError: boolean = false;
  /**
   * Whether the response filter threw an error
   * @type {boolean}
   * @private
   */
  private _responseFilterError: boolean = false;
  /**
   * Whether async destroy is in progress
   * @type {boolean}
   * @private
   */
  private _isDestroyInProgress: boolean = false;
  /**
   * Custom dash manifest parser.
   * @type {DashManifestParser}
   * @private
   */
  private _manifestParser: DashManifestParser | null | undefined;

  /**
   * error counter to change severity
   * @type ErrorEventsType
   * @private
   */
  private _errorCounter: ErrorEventsType = {};
  /**
   * Dash thumbnail controller.
   * @type {DashThumbnailController}
   * @private
   */
  private _thumbnailController: DashThumbnailController | undefined | null;
  private _isStartOver: boolean = true;
  private _seekRangeStart: number = 0;
  private _startOverTimeout!: number;
  private _isLive: boolean = false;
  private _isStaticLive: boolean = false;
  private _selectedVideoTrack: VideoTrack | undefined | null = null;
  private _playbackActualUri: string | undefined;

  private static _assetCacheMap = new Map<string, AssetCache>();
  private static _shakaInstanceMap = new Map<string, shaka.Player>();

  public applyTextTrackStyles(sheet: CSSStyleSheet, styles: any, containerId: string): void {
    const flexAlignment = {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end'
    };
    sheet.insertRule(`#${containerId} .${DashAdapter.textContainerClass} { align-items: ${flexAlignment[styles.textAlign]}!important; }`, 0);
    sheet.insertRule(`#${containerId} .${DashAdapter.textContainerClass} > * { ${styles.toCSS()} }`, 0);
  }

  /**
   * Factory method to create media source adapter.
   * @function createAdapter
   * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
   * @param {PKMediaSourceObject} source - The source Object.
   * @param {Object} config - The player configuration.
   * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
   * @static
   */
  public static createAdapter(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: any): IMediaSourceAdapter {
    const adapterConfig: any = Utils.Object.copyDeep(DefaultConfig);
    if (Utils.Object.hasPropertyPath(config, 'text.useNativeTextTrack')) {
      adapterConfig.textTrackVisibile = Utils.Object.getPropertyPath(config, 'text.useNativeTextTrack');
    }
    if (Utils.Object.hasPropertyPath(config, 'text.useShakaTextTrackDisplay')) {
      adapterConfig.useShakaTextTrackDisplay = Utils.Object.getPropertyPath(config, 'text.useShakaTextTrackDisplay');
      adapterConfig.textTrackVisibile = adapterConfig.textTrackVisibile || adapterConfig.useShakaTextTrackDisplay;
    }
    if (Utils.Object.hasPropertyPath(config, 'streaming')) {
      const {streaming} = config;
      if (typeof streaming.forceBreakStall === 'boolean') {
        adapterConfig.forceBreakStall = streaming.forceBreakStall;
      }
      if (typeof streaming.stallDetectionThreshold === 'number') {
        adapterConfig.stallDetectionThreshold = Math.max(MIN_STALL_DETECTION_THRESHOLD, streaming.stallDetectionThreshold);
      }

      if (typeof streaming.lowLatencyMode === 'boolean') {
        adapterConfig.lowLatencyMode = streaming.lowLatencyMode;
      }
      if (typeof streaming.trackEmsgEvents === 'boolean') {
        adapterConfig.trackEmsgEvents = streaming.trackEmsgEvents;
      }
      if (typeof streaming.switchDynamicToStatic === 'boolean') {
        adapterConfig.switchDynamicToStatic = streaming.switchDynamicToStatic;
      }
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

      //for backward compatibility with shaka version < 4
      if (Utils.Object.hasPropertyPath(adapterConfig.shakaConfig, 'manifest.dash.defaultPresentationDelay')) {
        adapterConfig.shakaConfig.manifest.defaultPresentationDelay = adapterConfig.shakaConfig.manifest.dash.defaultPresentationDelay;
        delete adapterConfig.shakaConfig.manifest.dash.defaultPresentationDelay;
      }
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
  public static canPlayType(mimeType: string): boolean {
    const canPlayType = typeof mimeType === 'string' ? mimeType.toLowerCase() === DashAdapter._dashMimeType && DashAdapter.isMSESupported() : false;
    DashAdapter._logger.debug('canPlayType result for mimeType: ' + mimeType + ' is ' + canPlayType.toString());
    return canPlayType;
  }

  /**
   * set 'bitrate' the max bandwidth (if possible)
   * @param {number} bitrate the max bitrate allowed
   * @returns {void}
   */
  public setMaxBitrate(bitrate: number): void {
    if (this.shaka && this._hasLowerOrEqualBitrate(bitrate)) {
      this.shaka?.configure({abr: {restrictions: {maxBandwidth: bitrate}}});
    }
  }

  private _getSortedTracks(): Array<{id: number; bandwidth: number; active: boolean}> {
    const tracks = this.shaka!.getVariantTracks();
    const sortedTracks = tracks
      .map(obj => ({
        id: obj.id,
        bandwidth: obj.bandwidth,
        active: obj.active
      }))
      .sort((obj1, obj2) => obj1.bandwidth - obj2.bandwidth);
    return sortedTracks;
  }

  private _hasLowerOrEqualBitrate(maxBitrate: number): boolean {
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
  public static canPlayDrm(drmData: Array<PKDrmDataObject>, drmConfig: PKDrmConfigObject): boolean {
    DashAdapter._availableDrmProtocol = [];
    for (const drmProtocol of DashAdapter._drmProtocols) {
      if (drmProtocol.isConfigured(drmData, drmConfig)) {
        DashAdapter._availableDrmProtocol.push(drmProtocol);
        break;
      }
    }
    if (!DashAdapter._availableDrmProtocol.length) {
      for (const drmProtocol of DashAdapter._drmProtocols) {
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
  public static isSupported(): boolean {
    const isSupported = shaka.Player.isBrowserSupported();
    DashAdapter._logger.debug('isSupported:' + isSupported);
    return isSupported;
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to the dash adapter
   * @param {PKMediaSourceObject} source - The source object
   * @param {Object} config - The media source adapter configuration
   */
  constructor(videoElement: HTMLVideoElement, source: PKMediaSourceObject, config: any = {}) {
    super(videoElement, source, config);
    DashAdapter._logger.debug('Creating adapter. Shaka version: ' + shaka.Player.version);
    this._config = Utils.Object.mergeDeep({}, DefaultConfig, this._config);
    this._init();
  }

  /**
   * Runs the initialization actions of the dash adapter.
   * @private
   * @returns {void}
   */
  private _init(): void {
    //Need to call this again cause we are uninstalling the VTTCue polyfill to avoid collisions with other libs
    shaka.polyfill.installAll();

    if (!this.shaka || !this.assetCache?.list().length) {
      const shakaInstance = new shaka.Player();
      const assetCache = new AssetCache();
      assetCache.init(shakaInstance);

      DashAdapter._assetCacheMap.set(this._videoElement.id, assetCache);
      DashAdapter._shakaInstanceMap.set(this._videoElement.id, shakaInstance);
    }

    // This will force the player to use shaka UITextDisplayer plugin to render text tracks.
    if (this._config.useShakaTextTrackDisplay) {
      this.shaka!.setVideoContainer(Utils.Dom.getElementBySelector('.playkit-subtitles'));
    }
    this._maybeSetFilters();
    this._maybeSetDrmConfig();
    this._maybeBreakStalls();

    this.shaka!.configure(this._config.shakaConfig);

    this._addBindings();
  }

  private _clearStallInterval(): void {
    if (this._stallInterval) {
      clearInterval(this._stallInterval);
      this._stallInterval = null;
    }
  }

  private _stallHandler(): void {
    this._clearStallInterval();

    const getCurrentTimeInSeconds = (): number => {
      return Date.now() / 1000;
    };
    const lastUpdateTime = getCurrentTimeInSeconds();
    let lastCurrentTime = this._videoElement.currentTime;

    this._stallInterval = window.setInterval(() => {
      const stallSeconds = getCurrentTimeInSeconds() - lastUpdateTime;
      //waiting for 3 sec until checking stalling
      if (stallSeconds > this._config.stallDetectionThreshold && !this._videoElement.paused) {
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
  private _maybeBreakStalls(): void {
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
  private _maybeGetRedirectedUrl(url: string): Promise<string> {
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

  private _maybeSetFilters(): void {
    this.shaka!.getNetworkingEngine()?.clearAllRequestFilters();
    this.shaka!.getNetworkingEngine()?.clearAllResponseFilters();

    if (typeof Utils.Object.getPropertyPath(this._config, 'network.requestFilter') === 'function') {
      DashAdapter._logger.debug('Register request filter');

      this.shaka!.getNetworkingEngine()?.registerRequestFilter((type, request) => {
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
      this.shaka!.getNetworkingEngine()?.registerResponseFilter((type, response) => {
        if (Object.values(RequestType).includes(type)) {
          const {uri: url, data, headers} = response;

          const pkResponse: PKResponseObject = {url, originalUrl: this._sourceObj!.url, data, headers};
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
  private _maybeSetDrmConfig(): void {
    if (this._sourceObj && this._sourceObj.drmData) {
      const config: any = {};
      for (const drmProtocol of DashAdapter._availableDrmProtocol) {
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
  private _maybeCapLevelToPlayerSize(): void {
    if (this._config.capLevelToPlayerSize) {
      const getRestrictions = (): any => {
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
      this._videoSizeUpdateTimer = window.setInterval(() => this._updateRestriction(getRestrictions()), ABR_RESTRICTION_UPDATE_INTERVAL);
      this._updateRestriction(getRestrictions());
    }
  }

  /**
   * apply ABR restrictions
   * @private
   * @returns {void}
   */
  private _maybeApplyAbrRestrictions(): void {
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
  private _updateRestriction(restrictions: PKABRRestrictionObject): void {
    const shakaRestrictionsConfig = this._getRestrictionShakaConfig(restrictions);
    this.shaka?.configure({
      abr: {
        restrictions: shakaRestrictionsConfig
      }
    });
  }

  private _getRestrictionShakaConfig(restrictions: PKABRRestrictionObject): any {
    const getMinDimensions = (dim): number => {
      const videoTracks = this._getVideoTracks();
      return Math.min.apply(
        null,
        videoTracks.map(variant => variant[dim])
      );
    };
    const restrictionsShakaConfig: any = {};
    if (restrictions) {
      const {maxHeight, maxWidth, maxBitrate, minHeight, minWidth, minBitrate} = restrictions;
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
  public attachMediaSource(): void {
    if (this.shaka) {
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
   * @returns {Promise<void>} - detach promise
   */
  public detachMediaSource(): Promise<void> {
    if (this.shaka) {
      // 1 second different between duration and current time will signal as end - will enable replay button
      // @ts-expect-error - ????
      if (Math.floor(this.duration - this.currentTime) === 0) {
        this._lastTimeDetach = 0;
      } else if (this['currentTime'] > 0) {
        // @ts-expect-error - ????
        this._lastTimeDetach = this.currentTime;
      }
      return this._reset().then(() => {
        this._loadPromise = undefined;
      });
    } else {
      return Promise.resolve();
    }
  }

  /**
   * Clear the video update timer
   * @private
   * @returns {void}
   */
  private _clearVideoUpdateTimer(): void {
    if (this._videoSizeUpdateTimer) {
      clearInterval(this._videoSizeUpdateTimer);
      this._videoSizeUpdateTimer = null;
    }
  }

  private get _videoWidth(): number {
    let width;
    const videoElement = this._videoElement;
    if (videoElement) {
      width = videoElement.width || videoElement.clientWidth || videoElement.offsetWidth;
      width *= this._contentScaleFactor;
    }
    return width;
  }

  private get _videoHeight(): number {
    let height;
    const videoElement = this._videoElement;
    if (videoElement) {
      height = videoElement.height || videoElement.clientHeight || videoElement.offsetHeight;
      height *= this._contentScaleFactor;
    }
    return height;
  }

  private get _contentScaleFactor(): number {
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
  private _addBindings(): void {
    this._eventManager.listen(this.shaka!, ShakaEvent.ADAPTATION, this._adapterEventsBindings.adaptation);
    this._eventManager.listen(this.shaka!, ShakaEvent.ERROR, this._adapterEventsBindings.error);
    this._eventManager.listen(this.shaka!, ShakaEvent.DRM_SESSION_UPDATE, this._adapterEventsBindings.drmsessionupdate);
    this._eventManager.listen(this._videoElement, EventType.WAITING, this._adapterEventsBindings.waiting);
    this._eventManager.listen(this._videoElement, EventType.PLAYING, this._adapterEventsBindings.playing);
    this._eventManager.listen(this._videoElement, EventType.LOADED_DATA, () => this._onLoadedData());
    this._eventManager.listenOnce(this._videoElement, EventType.PLAYING, () => {
      this._eventManager.listen(this.shaka!, ShakaEvent.BUFFERING, this._adapterEventsBindings.buffering);
    });
    if (this._config.trackEmsgEvents) {
      this._eventManager.listen(this.shaka!, ShakaEvent.EMSG, this._adapterEventsBindings.emsg);
    }

    // called when a resource is downloaded
    this.shaka!.getNetworkingEngine()?.registerResponseFilter((type, response) => {
      switch (type) {
        case shaka.net.NetworkingEngine.RequestType.SEGMENT:
          this._trigger(EventType.FRAG_LOADED, {
            miliSeconds: response.timeMs,
            bytes: response.data.byteLength,
            url: response.uri
          });
          if (this.isLive()) {
            this._dispatchNativeEvent(EventType.DURATION_CHANGE);
          }
          break;
        case shaka.net.NetworkingEngine.RequestType.MANIFEST:
          this._parseManifest(response.data);
          this._playbackActualUri = response.uri;
          this._trigger(EventType.MANIFEST_LOADED, {miliSeconds: response.timeMs});
          setTimeout(() => {
            this._isLive = this._isLive || (this.shaka?.isLive() as boolean);
            if (this._isLive && !this.shaka?.isLive() && !this._isStaticLive && this._config.switchDynamicToStatic) {
              this._sourceObj!.url = response.uri;
              this._switchFromDynamicToStatic();
            }
          });
          break;
      }
    });
  }

  private _onLoadedData(): void {
    this._setLowLatencyMode();
    const segmentDuration = this.getSegmentDuration();
    this._seekRangeStart = this.shaka!.seekRange().start;
    this._startOverTimeout = window.setTimeout(
      () => {
        if (this.shaka!.seekRange().start - this._seekRangeStart >= segmentDuration) {
          // in start over the seekRange().start should be permanent
          this._isStartOver = false;
        }
      },
      (segmentDuration + 1) * 1000
    );
  }

  public async _switchFromDynamicToStatic(): Promise<void> {
    DashAdapter._logger.info('Switching from dynamic manifest to static');
    this._dispatchNativeEvent(EventType.WAITING);

    const newCurrentTime = this._videoElement.currentTime - this._seekRangeStart;
    const isAdaptiveBitrateEnabled = this.isAdaptiveBitrateEnabled();
    const isPaused = this._videoElement.paused;

    await this.detachMediaSource();

    this._isStaticLive = true;
    this._isLive = true;
    this.attachMediaSource();

    await this.load();

    this._videoElement.currentTime = newCurrentTime;
    if (!isPaused) {
      this._videoElement.play();
    }

    if (isAdaptiveBitrateEnabled) {
      this._onAdaptation();
    } else if (this._selectedVideoTrack) {
      this.selectVideoTrack(this._selectedVideoTrack);
    }
  }

  private _setLowLatencyMode(): void {
    this.shaka?.configure({
      streaming: {
        lowLatencyMode: typeof this._config.lowLatencyMode === 'boolean' ? this._config.lowLatencyMode : this.isLive()
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
  private _parseManifest(manifestBuffer: ArrayBuffer | ArrayBufferView): void {
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
  public async load(startTime?: number): Promise<any> {
    if (!this.shaka) return Promise.reject('Shaka instance not set');

    if (!this._loadPromise) {
      await this._removeMediaKeys();

      if (!this.shaka.getMediaElement()) {
        this.shaka.attach(this._videoElement);
      }

      this._loadPromise = new Promise((resolve, reject) => {
        if (this._sourceObj && this._sourceObj.url) {
          this._trigger(EventType.ABR_MODE_CHANGED, {mode: this.isAdaptiveBitrateEnabled() ? 'auto' : 'manual'});
          let shakaStartTime = typeof startTime === 'number' && startTime > -1 ? startTime : undefined;
          shakaStartTime = isNaN(this._lastTimeDetach) ? shakaStartTime : this._lastTimeDetach;
          this._lastTimeDetach = NaN;
          this._maybeGetRedirectedUrl(this._sourceObj.url)
            .then(async url => {
              const assetPromise = this.assetCache!.get(url);
              if (!assetPromise) {
                return this.shaka!.load(url, shakaStartTime);
              } else {
                this.assetCache!.remove(url);
                const preloadMgr = await assetPromise;
                return this.shaka!.load(preloadMgr, shakaStartTime);
              }
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
  public destroy(): Promise<void> {
    this._isDestroyInProgress = true;

    return new Promise(async (resolve, reject) => {
      let shakaInstanceToDestroy;

      if (this.shaka) {
        // explicitly pass undefined to restore the default drm configuration
        this.shaka.configure('drm', undefined);

        if (this.assetCache?.list().length) {
          if (this._videoElement.src) {
            await this.shaka.unload();
          }
          await this.shaka.detach();
        } else {
          shakaInstanceToDestroy = this.shaka;
          DashAdapter._shakaInstanceMap.delete(this._videoElement.id);
          DashAdapter._assetCacheMap.delete(this._videoElement.id);
        }
      }

      super.destroy().then(() => {
        DashAdapter._logger.debug('destroy');
        this._loadPromise = undefined;
        this._adapterEventsBindings = {};
        this._reset(shakaInstanceToDestroy)
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
  public getThumbnail(time: number): ThumbnailInfo | null {
    if (this._thumbnailController) {
      return this._thumbnailController.getThumbnail(time);
    }
    return null;
  }

  /**
   * Reset shaka instance and its bindings
   * @function _reset
   * @private
   * @returns {Promise<*>} - The destroy promise.
   */
  private _reset(shakaInstance?: shaka.Player): Promise<void> {
    this._buffering = false;
    this._waitingSent = false;
    this._playingSent = false;
    this._isLive = false;
    this._isStaticLive = false;
    this._requestFilterError = false;
    this._responseFilterError = false;
    this._manifestParser = null;
    this._thumbnailController = null;
    this._errorCounter = {};
    this._clearStallInterval();
    this._clearVideoUpdateTimer();
    clearTimeout(this._startOverTimeout);
    if (this._eventManager) {
      this._eventManager.removeAll();
    }

    if (shakaInstance) {
      return shakaInstance.destroy();
    }
    return Promise.resolve();
  }

  /**
   * Remove mediaKeys from the video element.
   * mediaKeys are set if an encrypted media was previously played, and must be removed before a new encrypted media can be played.
   * If mediaKeys are not null it means that shaka reset wasn't called or that it failed to remove them.
   * @returns {Promise<void>} Promise that resolves when the operation finishes.
   */
  public async _removeMediaKeys(): Promise<void> {
    if (this._videoElement && this._videoElement.mediaKeys) {
      try {
        DashAdapter._logger.debug('Removing mediaKeys from the video element');
        await this._videoElement.setMediaKeys(null);
        DashAdapter._logger.debug('mediaKeys removed');
      } catch (e) {
        // non encrypted playback should still work, so we don't reject
        DashAdapter._logger.warn('mediaKeys not cleared');
      } finally {
        // eslint-disable-next-line no-unsafe-finally
        return Promise.resolve();
      }
    } else {
      return Promise.resolve();
    }
  }

  /**
   * Get the original video tracks
   * @function _getVideoTracks
   * @returns {Array<Object>} - The original video tracks
   * @private
   */
  private _getVideoTracks(): Array<any> {
    const variantTracks = this.shaka!.getVariantTracks();
    const activeVariantTrack = this._getActiveTrack();
    const videoTracks = variantTracks.filter(variantTrack => {
      return variantTrack.audioId === activeVariantTrack.audioId;
    });
    return videoTracks;
  }

  private _getActiveTrack(): shaka.extern.Track {
    return this.shaka!.getVariantTracks().find(variantTrack => variantTrack.active)!;
  }

  /**
   * Get the original audio tracks
   * @function _getAudioTracks
   * @returns {Array<Object>} - Array of objects with unique language and label.
   * @private
   */
  private _getAudioTracks(): (shaka.extern.LanguageRole & {active: boolean; id: number})[] {
    const variantTracks = this.shaka!.getVariantTracks();
    const audioTracks = this.shaka!.getAudioLanguagesAndRoles();
    audioTracks.forEach(track => {
      const sameLangAudioVariants = variantTracks.filter(vt => vt.language === track.language);
      const id = sameLangAudioVariants.map(variant => variant.id).join('_');
      const active = sameLangAudioVariants.some(variant => variant.active);
      track['id'] = id;
      track.label = sameLangAudioVariants[0].label;
      track['active'] = active;
    });
    return audioTracks as (shaka.extern.LanguageRole & {active: boolean; id: number})[];
  }

  /**
   * Get the parsed tracks
   * @function _getParsedTracks
   * @returns {Array<Track>} - The parsed tracks
   * @private
   */
  private _getParsedTracks(): Array<Track> {
    if (this.shaka) {
      const videoTracks = this._getParsedVideoTracks();
      const audioTracks = this._getParsedAudioTracks();
      const textTracks = this._getParsedTextTracks();
      const imageTracks = this._getParsedImageTracks();
      return [...videoTracks, ...audioTracks, ...textTracks, ...imageTracks];
    }
    return [];
  }

  /**
   * Get the parsed video tracks
   * @function _getParsedVideoTracks
   * @returns {Array<VideoTrack>} - The parsed video tracks
   * @private
   */
  private _getParsedVideoTracks(): VideoTrack[] {
    const videoTracks = this._getVideoTracks();
    const parsedTracks: VideoTrack[] = [];
    if (videoTracks) {
      for (let i = 0; i < videoTracks.length; i++) {
        const settings = {
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
  private _getParsedAudioTracks(): AudioTrack[] {
    const audioTracks = this._getAudioTracks();
    const parsedTracks: AudioTrack[] = [];
    if (audioTracks) {
      for (let i = 0; i < audioTracks.length; i++) {
        const settings = {
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
  private _getParsedTextTracks(): Array<PKTextTrack> {
    const parsedTracks: PKTextTrack[] = [];
    for (const textTrack of this.shaka!.getTextTracks()) {
      let kind = textTrack.kind ? textTrack.kind + 's' : '';
      kind = kind === '' && this._config.useShakaTextTrackDisplay ? 'captions' : kind;
      const settings = {
        id: textTrack.id,
        kind: kind,
        active: false,
        default: textTrack.primary,
        label: textTrack.label as string,
        language: textTrack.language
      };
      parsedTracks.push(new PKTextTrack(settings));
    }
    return parsedTracks;
  }

  /**
   * Get the parsed image tracks
   * @function _getParsedImageTracks
   * @returns {Array<ImageTrack>} - The parsed image tracks
   * @private
   */
  private _getParsedImageTracks(): ImageTrack[] {
    const imageSet = this._manifestParser?.getImageSet();
    const mediaTemplatePrefix = this._manifestParser?.getBaseUrl() || '';
    if (imageSet) {
      this._thumbnailController = new DashThumbnailController(imageSet, this._playbackActualUri!, mediaTemplatePrefix);
      return this._thumbnailController.getTracks();
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
  public selectVideoTrack(videoTrack: VideoTrack): void {
    if (this.shaka) {
      const videoTracks = this._getVideoTracks();
      if (videoTrack instanceof VideoTrack && videoTracks) {
        const selectedVideoTrack = videoTracks[videoTrack.index];
        if (selectedVideoTrack) {
          if (this.isAdaptiveBitrateEnabled()) {
            this.shaka.configure({abr: {enabled: false}});
            this._trigger(EventType.ABR_MODE_CHANGED, {mode: 'manual'});
          }
          if (!selectedVideoTrack.active) {
            this._selectedVideoTrack = videoTrack;
            this.shaka.selectVariantTrack(videoTracks[videoTrack.index], true);
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
  public selectAudioTrack(audioTrack: AudioTrack): void {
    if (this.shaka && audioTrack instanceof AudioTrack && !audioTrack.active) {
      this.shaka.selectAudioLanguage(audioTrack.language);
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
  public selectTextTrack(textTrack: PKTextTrack): void {
    if (this.shaka && textTrack instanceof PKTextTrack && !textTrack.active && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions')) {
      this.shaka.setTextTrackVisibility(this._config.textTrackVisibile);
      this.shaka.selectTextLanguage(textTrack.language);
      this._onTrackChanged(textTrack);
    }
  }

  public selectImageTrack(imageTrack: ImageTrack): void {
    if (this.shaka && this._thumbnailController && imageTrack instanceof ImageTrack && !imageTrack.active) {
      this._thumbnailController.selectTrack(imageTrack);
      this._onTrackChanged(imageTrack);
    }
  }

  /**
   * Hide the text track
   * @function hideTextTrack
   * @returns {void}
   * @public
   */
  public hideTextTrack(): void {
    if (this.shaka) {
      this.shaka.setTextTrackVisibility(false);
    }
  }

  /**
   * Enables adaptive bitrate switching
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  public enableAdaptiveBitrate(): void {
    if (this.shaka && !this.isAdaptiveBitrateEnabled()) {
      this._trigger(EventType.ABR_MODE_CHANGED, {mode: 'auto'});
      this.shaka.configure({abr: {enabled: true}});
    }
  }

  /**
   * Checking if adaptive bitrate switching is enabled.
   * @function isAdaptiveBitrateEnabled
   * @returns {boolean} - Whether adaptive bitrate is enabled.
   * @public
   */
  public isAdaptiveBitrateEnabled(): boolean {
    if (this.shaka) {
      const shakaConfig = this.shaka.getConfiguration();
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
  public applyABRRestriction(restrictions: PKABRRestrictionObject): void {
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
  protected _getLiveEdge(): number {
    return this.shaka ? this.shaka.seekRange().end : NaN;
  }

  /**
   * Seeking to live edge.
   * @function seekToLiveEdge
   * @returns {void}
   * @public
   */
  public seekToLiveEdge(): void {
    if (this.shaka && this._videoElement.readyState > 0) {
      this._videoElement.currentTime = this._getLiveEdge();
    }
  }

  /**
   * Checking if the current playback is live.
   * @function isLive
   * @returns {boolean} - Whether playback is live.
   * @public
   */
  public isLive(): boolean {
    return this.shaka?.isLive() || this._isLive;
  }

  /**
   * Gets the segment duration of the stream
   * @return {number} - Segment duration in seconds
   */
  public get liveDuration(): number {
    return this._getLiveEdge();
  }

  /**
   * Gets the live duration
   * @return {number} - live duration
   */
  public getSegmentDuration(): number {
    if (this.shaka) {
      return this.shaka.getStats().maxSegmentDuration;
    }
    return 0;
  }

  /**
   * An handler to shaka adaptation event
   * @function _onAdaptation
   * @returns {void}
   * @private
   */
  private _onAdaptation(): void {
    const selectedVideoTrack = this._getParsedVideoTracks().find(videoTrack => videoTrack.active)!;
    this._onTrackChanged(selectedVideoTrack);
  }

  /**
   * An handler to shaka error event
   * @function _onError
   * @param {any} event - the error event
   * @returns {void}
   * @private
   */
  private _onError(event: any): void {
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

      error.severity = this._shouldErrorChangeSeverity(error.code) ? Error.Severity.CRITICAL : error.severity;
      this._trigger(EventType.ERROR, new Error(error.severity, error.category, error.code, error.data));
      DashAdapter._logger.error(error);

      if (error.severity === Error.Severity.CRITICAL) {
        this.destroy();
      }
    }
  }

  private _shouldErrorChangeSeverity(errorCode): boolean {
    const secondsErrorRepeat = 30;
    const errorsCounterToChangeSeverity = 3;
    const getCurrentTimeInSeconds = (): number => {
      return Date.now() / 1000;
    };
    if (!(errorCode in this._errorCounter)) {
      this._errorCounter[errorCode] = {
        count: 1,
        timeStamp: getCurrentTimeInSeconds()
      };
      return false;
    }

    this._errorCounter[errorCode].count += 1;
    if (this._errorCounter[errorCode].count > errorsCounterToChangeSeverity) {
      delete this._errorCounter[errorCode];
      return true;
    }

    const interval = getCurrentTimeInSeconds() - this._errorCounter[errorCode].timeStamp;
    if (interval > secondsErrorRepeat) {
      this._errorCounter[errorCode].timeStamp = getCurrentTimeInSeconds();
      this._errorCounter[errorCode].count = 1;
      return false;
    }
    return false;
  }

  /**
   * An handler to shaka buffering event
   * @function _onBuffering
   * @param {any} event - the buffering event
   * @returns {void}
   * @private
   */
  private _onBuffering(event: any): void {
    if (event.buffering) {
      if (!this._waitingSent) {
        // The player enters the buffering state and 'waiting' event hasn't been sent by the HTMLVideoElement.
        this._dispatchNativeEvent(EventType.WAITING);
        this._buffering = true;
      }
    } else {
      this._buffering = false;
      if (!this._videoElement.paused && !this._playingSent) {
        //the player leaves the buffering state. and 'playing' event hasn't been sent by the HTMLVideoElement.
        this._dispatchNativeEvent(EventType.PLAYING);
      }
    }
  }

  private _dispatchNativeEvent(type: string): void {
    let event;
    if (typeof window['Event'] === 'function') {
      event = new Event(type);
    } else {
      event = document.createEvent('Event');
      event.initEvent(type, true, true);
    }
    this._videoElement.dispatchEvent(event);
  }

  /**
   * An handler to shaka drm session update event
   * @function _onDrmSessionUpdate
   * @returns {void}
   * @private
   */
  private _onDrmSessionUpdate(): void {
    this._trigger(EventType.DRM_LICENSE_LOADED, {
      licenseTime: this.shaka?.getStats().licenseTime,
      scheme: this.shaka?.drmInfo()?.keySystem
    });
  }

  /**
   * An handler to shaka emsg event
   * @function _onEmsg
   * @param {any} event - the emsg event
   * @returns {void}
   * @private
   */
  private _onEmsg(event: any): void {
    const {detail, type} = event;
    let metadataTrack = Array.from<TextTrack>(this._videoElement.textTracks).find(track => track.label === type);
    if (!metadataTrack) {
      metadataTrack = this._videoElement.addTextTrack(PKTextTrack.KIND.METADATA, type);
    }
    const {startTime, endTime, id, ...metadata} = detail;

    const timedMetadata = new TimedMetadata(startTime, endTime, id, TimedMetadata.TYPE.EMSG, metadata);
    const textTrackCue = createTextTrackCue(timedMetadata);
    metadataTrack.addCue(textTrackCue!);
    this._trigger(EventType.TIMED_METADATA_ADDED, {cues: [timedMetadata]});
  }

  /**
   * An handler to HTMLVideoElement waiting event
   * @function _onWaiting
   * @returns {void}
   * @private
   */
  private _onWaiting(): void {
    this._waitingSent = true;
    this._playingSent = false;
  }

  /**
   * An handler to HTMLVideoElement playing event
   * @function _onPlaying
   * @returns {void}
   * @private
   */
  private _onPlaying(): void {
    this._playingSent = true;
    this._waitingSent = false;
    if (this._buffering) {
      // The player is in buffering state.
      this._dispatchNativeEvent(EventType.WAITING);
    }
  }

  /**
   * Get the start time of DVR window in live playback in seconds.
   * @returns {Number} - start time of DVR window.
   * @public
   */
  public getStartTimeOfDvrWindow(): number {
    if (this.isLive() && this.shaka) {
      return (this._isStartOver ? this._seekRangeStart : this.shaka.seekRange().start) + this.shaka.getConfiguration().streaming.safeSeekOffset;
    }
    return 0;
  }

  /**
   * gets the target buffer of the player
   * @returns {number} - buffer length target in seconds
   */
  public get targetBuffer(): number {
    let targetBufferVal = NaN;
    if (!this.shaka) return NaN;
    if (this.isLive()) {
      targetBufferVal = this._getLiveEdge() - this._videoElement.currentTime;
    } else {
      // consideration of the end of the playback in the target buffer calc
      targetBufferVal = this._videoElement.duration - this._videoElement.currentTime;
    }

    targetBufferVal = Math.min(targetBufferVal, this.shaka.getConfiguration().streaming.bufferingGoal + this.shaka.getStats().maxSegmentDuration);
    return targetBufferVal;
  }

  public getDrmInfo(): PKDrmDataObject | null {
    const drmInfo = this.shaka?.drmInfo();
    if (!drmInfo) {
      return null;
    } else {
      const {licenseServerUri, keySystem, serverCertificateUri} = drmInfo;
      const drmDataObject: PKDrmDataObject = {
        licenseUrl: licenseServerUri,
        scheme: keySystem
      };
      if (serverCertificateUri) drmDataObject.certificate = serverCertificateUri;
      return drmDataObject;
    }
  }

  public setCachedUrls(cachedUrls: string[]): void {
    if (!Array.isArray(cachedUrls) || !this.assetCache) return;

    const existingUrls = this.assetCache.list();

    for (const url of cachedUrls) {
      if (!existingUrls.includes(url)) {
        this.assetCache.add(url);
      }
    }
    for (const url of existingUrls) {
      if (!cachedUrls.includes(url)) {
        this.assetCache.remove(url, true);
      }
    }
  }

  private get assetCache(): AssetCache | null {
    const assetCache = DashAdapter._assetCacheMap.get(this._videoElement.id);
    if (!assetCache) {
      DashAdapter._logger.warn('Failed to fetch asset cache for video element ', this._videoElement.id);
      return null;
    }
    return assetCache;
  }

  private get shaka(): shaka.Player | null {
    const shakaInstance = DashAdapter._shakaInstanceMap.get(this._videoElement.id);
    if (!shakaInstance) {
      DashAdapter._logger.warn('Failed to fetch shaka instance for video element ', this._videoElement.id);
      return null;
    }

    return shakaInstance;
  }
}
