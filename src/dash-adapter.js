// @flow
import shaka from 'shaka-player';
import {AudioTrack, BaseMediaSourceAdapter, Error, EventType, TextTrack, Track, Utils, VideoTrack} from 'playkit-js';
import {Widevine} from './drm/widevine';
import {PlayReady} from './drm/playready';
import DefaultConfig from './default-config';
import {TextDisplayer} from './text-displayer';

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
 * Adapter of shaka lib for dash content
 * @classdesc
 */
class DashAdapter extends BaseMediaSourceAdapter {
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
   * 3016 is the number of the video error at shaka, we already listens to it in the html5 class
   * @member {number} - VIDEO_ERROR_CODE
   * @type {number}
   * @private
   */
  VIDEO_ERROR_CODE: number = 3016;

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
    let dashConfig = {};
    if (Utils.Object.hasPropertyPath(config, 'playback.options.html5.dash')) {
      dashConfig = config.playback.options.html5.dash;
    }
    if (Utils.Object.hasPropertyPath(config, 'playback.useNativeTextTrack')) {
      dashConfig.textTrackVisibile = Utils.Object.getPropertyPath(config, 'playback.useNativeTextTrack');
    }
    return new this(videoElement, source, dashConfig);
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
   * Checks if dash adapter can play a given drm data.
   * @param {Array<Object>} drmData - The drm data to check.
   * @returns {boolean} - Whether the dash adapter can play a specific drm data.
   * @static
   */
  static canPlayDrm(drmData: Array<Object>): boolean {
    let canPlayDrm = false;
    for (let drmProtocol of DashAdapter._drmProtocols) {
      if (drmProtocol.canPlayDrm(drmData)) {
        DashAdapter._drmProtocol = drmProtocol;
        canPlayDrm = true;
        break;
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
      textDisplayFactory: function(videoEl) {
        return new TextDisplayer(videoEl);
      }.bind(null, this._videoElement)
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
    this._maybeSetDrmConfig();
    this._shaka.configure(this._config);
    this._addBindings();
  }

  /**
   * Configure drm for shaka player.
   * @private
   * @returns {void}
   */
  _maybeSetDrmConfig(): void {
    if (DashAdapter._drmProtocol && this._sourceObj && this._sourceObj.drmData) {
      DashAdapter._drmProtocol.setDrmPlayback(this._config, this._sourceObj.drmData);
    }
  }

  /**
   * Add the required bindings to shaka.
   * @function _addBindings
   * @private
   * @returns {void}
   */
  _addBindings(): void {
    this._shaka.addEventListener(ShakaEvent.ADAPTATION, this._adapterEventsBindings.adaptation);
    this._shaka.addEventListener(ShakaEvent.ERROR, this._adapterEventsBindings.error);
    this._shaka.addEventListener(ShakaEvent.BUFFERING, this._adapterEventsBindings.buffering);
    this._videoElement.addEventListener(EventType.WAITING, this._adapterEventsBindings.waiting);
    this._videoElement.addEventListener(EventType.PLAYING, this._adapterEventsBindings.playing);
  }

  /**
   * Remove the bindings to shaka.
   * @function _removeBindings
   * @private
   * @returns {void}
   */
  _removeBindings(): void {
    this._shaka.removeEventListener(ShakaEvent.ADAPTATION, this._adapterEventsBindings.adaptation);
    this._shaka.removeEventListener(ShakaEvent.ERROR, this._adapterEventsBindings.error);
    this._shaka.removeEventListener(ShakaEvent.BUFFERING, this._adapterEventsBindings.buffering);
    this._videoElement.removeEventListener(EventType.WAITING, this._adapterEventsBindings.waiting);
    this._videoElement.removeEventListener(EventType.PLAYING, this._adapterEventsBindings.playing);
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
          this._shaka
            .load(this._sourceObj.url, shakaStartTime)
            .then(() => {
              let data = {tracks: this._getParsedTracks()};
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
      this._buffering = false;
      this._waitingSent = false;
      this._playingSent = false;
      if (this._shaka) {
        this._removeBindings();
        this._adapterEventsBindings = {};
        return this._shaka.destroy();
      }
    });
  }

  /**
   * Get the original video tracks
   * @function _getVideoTracks
   * @returns {Array<Object>} - The original video tracks
   * @private
   */
  _getVideoTracks(): Array<Object> {
    let variantTracks = this._shaka.getVariantTracks();
    let activeVariantTrack = variantTracks.filter(variantTrack => {
      return variantTrack.active;
    })[0];
    let videoTracks = variantTracks.filter(variantTrack => {
      return variantTrack.audioId === activeVariantTrack.audioId;
    });
    return videoTracks;
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
    if (this._shaka) {
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
      const error = event.detail;
      //don't handle video element errors, they are already handled by the player
      if (error.code === this.VIDEO_ERROR_CODE) {
        return;
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
}

export {DashAdapter};
