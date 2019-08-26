// @flow
import shaka from 'shaka-player';
import {AudioTrack, BaseMediaSourceAdapter, Error, EventType, TextTrack, Track, Utils, VideoTrack, RequestType} from '@playkit-js/playkit-js';
import Widevine from './drm/widevine';
import PlayReady from './drm/playready';
import DefaultConfig from './default-config';
import TextDisplayer from './text-displayer';

type ShakaEventType = {[event: string]: string};

/**
 * Shaka events enum
 * @type {Object}
 * @const
 */
const ShakaEvent: ShakaEventType = {
  ERROR: 'error',
  ADAPTATION: 'adaptation',
  BUFFERING: 'buffering'
};

/**
 * the interval in which to sample player size changes
 * @type {number}
 * @const
 */
const ABR_RESTRICTION_UPDATE_INTERVAL = 1000;

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
   * The DRM protocol for the current playback.
   * @type {?Function}
   * @private
   * @static
   */
  static _drmProtocol: ?Function = null;
  /**
   * The shaka player instance
   * @member {any} _shaka
   * @private
   */
  _shaka: any;
  /**
   * attached the media events after attachMediaSource
   * @member {boolean} _isMediaAttached
   * @private
   */
  _isMediaAttached: boolean = false;
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
  _videoSizeUpdateTimer: ?number = null;

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
  _lastTimeDetach: number = 0;
  /**
   * Whether the request filter threw an error
   * @type {boolean}
   * @private
   */
  _requestFilterError: boolean = false;
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
    if (Utils.Object.hasPropertyPath(config, 'playback.useNativeTextTrack')) {
      adapterConfig.textTrackVisibile = Utils.Object.getPropertyPath(config, 'playback.useNativeTextTrack');
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
        if (abr.restrictions.minBitrate > 0) {
          adapterConfig.shakaConfig.abr.restrictions.minBandwidth = abr.restrictions.minBitrate;
        }
        if (abr.restrictions.maxBitrate < Infinity) {
          //You can either set capping by size or bitrate, if bitrate is set then disable size capping
          adapterConfig.capLevelToPlayerSize = false;
          adapterConfig.shakaConfig.abr.restrictions.maxBandwidth = abr.restrictions.maxBitrate;
        }
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
    let canPlayType = typeof mimeType === 'string' ? mimeType.toLowerCase() === DashAdapter._dashMimeType : false;
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
    let canPlayDrm = false;
    for (let drmProtocol of DashAdapter._drmProtocols) {
      if (drmProtocol.isConfigured(drmData, drmConfig)) {
        DashAdapter._drmProtocol = drmProtocol;
        canPlayDrm = true;
        break;
      }
    }
    if (!canPlayDrm) {
      for (let drmProtocol of DashAdapter._drmProtocols) {
        if (drmProtocol.canPlayDrm(drmData)) {
          DashAdapter._drmProtocol = drmProtocol;
          canPlayDrm = true;
          break;
        }
      }
    }
    DashAdapter._logger.debug('canPlayDrm result is ' + canPlayDrm.toString(), drmData);
    return canPlayDrm;
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
    this._setShakaConfig();
  }

  /**
   * Sets the shaka config.
   * @private
   * @returns {void}
   */
  _setShakaConfig(): void {
    const textDisplayerConfig = {
      shakaConfig: {
        textDisplayFactory: function(videoEl) {
          return new TextDisplayer(videoEl);
        }.bind(null, this._videoElement)
      }
    };
    this._config = Utils.Object.mergeDeep(textDisplayerConfig, DefaultConfig, this._config);
  }

  /**
   * Runs the initialization actions of the dash adapter.
   * @private
   * @returns {void}
   */
  _init(): void {
    //Need to call this again cause we are uninstalling the VTTCue polyfill to avoid collisions with other libs
    shaka.polyfill.installAll();
    this._shaka = new shaka.Player(this._videoElement);
    this._maybeSetFilters();
    this._maybeSetDrmConfig();
    this._shaka.configure(this._config.shakaConfig);
    this._isMediaAttached = true;
    this._addBindings();
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
          try {
            this._config.network.requestFilter(type, pkRequest);
            request.uris = [pkRequest.url];
            request.headers = pkRequest.headers;
            if (request.method === 'POST') {
              request.body = pkRequest.body;
            } else if (pkRequest.body) {
              DashAdapter._logger.warn(`Request with ${request.method} method cannot have body`);
            }
          } catch (error) {
            this._requestFilterError = true;
            throw error;
          }
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
    if (DashAdapter._drmProtocol && this._sourceObj && this._sourceObj.drmData) {
      DashAdapter._drmProtocol.setDrmPlayback(this._config.shakaConfig, this._sourceObj.drmData);
    }
  }

  /**
   * apply ABR restrictions
   * @private
   * @returns {void}
   */
  _maybeApplyAbrRestrictions(): void {
    if (this._config.capLevelToPlayerSize) {
      const videoTracks = this._getVideoTracks();
      const getMinDimensions = (dim): number => Math.min.apply(null, videoTracks.map(variant => variant[dim]));
      //Get minimal allowed dimensions
      const minWidth = getMinDimensions('width');
      const minHeight = getMinDimensions('height');
      const updateAbrRestrictions = () => {
        const curHeight = this._videoHeight;
        const curWidth = this._videoWidth;
        if (typeof curWidth === 'number' && typeof curHeight === 'number') {
          //check if current player size is smaller than smallest rendition
          //setting restriction below smallest rendition size will result in shaka emitting restriction unmet error
          if (curHeight >= minHeight && curWidth >= minWidth) {
            DashAdapter._logger.debug(`applying dimension restriction: width < ${curWidth}, height < ${curHeight}`);
            this._shaka.configure({
              abr: {
                restrictions: {
                  maxHeight: curHeight,
                  maxWidth: curWidth
                }
              }
            });
          } else {
            DashAdapter._logger.debug(`applying dimension restriction: width < ${minHeight}, height < ${minWidth}`);
            this._shaka.configure({
              abr: {
                restrictions: {
                  maxHeight: minHeight,
                  maxWidth: minWidth
                }
              }
            });
          }
        }
      };
      this._clearVideoUpdateTimer();
      this._videoSizeUpdateTimer = setInterval(updateAbrRestrictions, ABR_RESTRICTION_UPDATE_INTERVAL);
      updateAbrRestrictions();
    }
  }

  /**
   * attach media - return the media source to handle the video tag
   * @public
   * @returns {void}
   */
  attachMediaSource(): void {
    if (!this._isMediaAttached) {
      if (this._videoElement && this._videoElement.src) {
        Utils.Dom.setAttribute(this._videoElement, 'src', '');
        Utils.Dom.removeAttribute(this._videoElement, 'src');
      }
      const _seekAfterDetach = () => {
        if (parseInt(this._lastTimeDetach) === parseInt(this.duration)) {
          this.currentTime = 0;
        } else {
          this.currentTime = this._lastTimeDetach;
        }
        this._lastTimeDetach = NaN;
      };
      if (!isNaN(this._lastTimeDetach)) {
        this._eventManager.listenOnce(this._videoElement, EventType.LOADED_DATA, () => _seekAfterDetach());
      }
      this._isMediaAttached = true;
    }
  }
  /**
   * detach media - will remove the media source from handling the video
   * @public
   * @returns {void}
   */
  detachMediaSource(): void {
    if (this._isMediaAttached) {
      this._lastTimeDetach = this.currentTime;
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
    this._eventManager.listen(this._shaka, ShakaEvent.BUFFERING, this._adapterEventsBindings.buffering);
    this._eventManager.listen(this._videoElement, EventType.WAITING, this._adapterEventsBindings.waiting);
    this._eventManager.listen(this._videoElement, EventType.PLAYING, this._adapterEventsBindings.playing);
    // called when a resource is downloaded
    this._shaka.getNetworkingEngine().registerResponseFilter((type, response) => {
      switch (type) {
        case shaka.net.NetworkingEngine.RequestType.SEGMENT:
          this._trigger(EventType.FRAG_LOADED, {miliSeconds: response.timeMs, bytes: response.data.byteLength, url: response.uri});
          break;
        case shaka.net.NetworkingEngine.RequestType.MANIFEST:
          this._trigger(EventType.MANIFEST_LOADED, {miliSeconds: response.timeMs});
          break;
      }
    });
  }

  /**
   * Load the video source
   * @param {number} startTime - Optional time to start the video from.
   * @function load
   * @override
   */
  load(startTime: ?number): Promise<Object> {
    if (!this._loadPromise) {
      this._init();
      this._loadPromise = new Promise((resolve, reject) => {
        if (this._sourceObj && this._sourceObj.url) {
          this._trigger(EventType.ABR_MODE_CHANGED, {mode: this.isAdaptiveBitrateEnabled() ? 'auto' : 'manual'});
          const shakaStartTime = startTime && startTime > -1 ? startTime : undefined;
          this._maybeGetRedirectedUrl(this._sourceObj.url)
            .then(url => {
              return this._shaka.load(url, shakaStartTime);
            })
            .then(() => {
              let data = {tracks: this._getParsedTracks()};
              this._maybeApplyAbrRestrictions();
              DashAdapter._logger.debug('The source has been loaded successfully');
              resolve(data);
            })
            .catch(error => {
              reject(new Error(error.severity, error.category, error.code, error.data));
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
    return super.destroy().then(() => {
      DashAdapter._logger.debug('destroy');
      this._loadPromise = null;
      return this._reset();
    });
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
    this._isMediaAttached = false;
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
    return this._shaka.getVariantTracks().filter(variantTrack => {
      return variantTrack.active;
    })[0];
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
      let videoTracks = this._getParsedVideoTracks();
      let audioTracks = this._getParsedAudioTracks();
      let textTracks = this._getParsedTextTracks();
      return videoTracks.concat(audioTracks).concat(textTracks);
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
          bandwidth: videoTracks[i].bandwidth,
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
        let settings = {
          kind: textTracks[i].kind ? textTracks[i].kind + 's' : '',
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
    let selectedVideoTrack = this._getParsedVideoTracks().filter(function(videoTrack) {
      return videoTrack.active;
    })[0];
    DashAdapter._logger.debug('Video track changed', selectedVideoTrack);
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
      if (this._requestFilterError && error.data[0] instanceof shaka.util.Error) {
        // When the request filter of the license request throws an error,
        // shaka wraps the request filter error (code 1006) with a license request error (code 6007)
        // so extract the inner error
        error = error.data[0];
        this._requestFilterError = false;
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
      if (this._shaka.getManifest()) {
        targetBufferVal =
          this._shaka.getManifest().presentationTimeline.getSegmentAvailabilityEnd() -
          this._shaka.getManifest().presentationTimeline.getSeekRangeEnd() -
          (this._videoElement.currentTime - this._getLiveEdge());
      }
    } else {
      // consideration of the end of the playback in the target buffer calc
      targetBufferVal = this._videoElement.duration - this._videoElement.currentTime;
    }

    targetBufferVal = Math.min(targetBufferVal, this._shaka.getConfiguration().streaming.bufferingGoal + this._getCurrentSegmentLength());
    return targetBufferVal;
  }

  _getCurrentSegmentLength(): number {
    const activeTrack = this._getActiveTrack();
    const activeTrackId = activeTrack ? activeTrack.id : NaN;
    let segmentLength = 0;
    const periods = this._shaka.getManifest().periods;
    if (!isNaN(activeTrackId)) {
      for (let i = 0; i < periods.length; i++) {
        for (let j = 0; j < periods[i].variants.length; j++) {
          const variant = periods[i].variants[j];
          if (variant.id === activeTrackId) {
            const segmentPosition = variant.video.findSegmentPosition(this._videoElement.currentTime);
            let seg = variant.video.getSegmentReference(segmentPosition);
            segmentLength = seg.endTime - seg.startTime;
          }
        }
      }
    }
    return segmentLength;
  }
}
