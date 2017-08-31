// @flow
import shaka from 'shaka-player';
import {registerMediaSourceAdapter, BaseMediaSourceAdapter} from 'playkit-js'
import {Track, VideoTrack, AudioTrack, TextTrack} from 'playkit-js'
import {Utils} from 'playkit-js'

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
   * The shaka player instance
   * @member {any} _shaka
   * @private
   */
  _shaka: any;
  /**
   * The load promise
   * @member {Promise<Object>} - _loadPromise
   * @type {Promise<Object>}
   * @private
   */
  _loadPromise: ?Promise<Object>;

  /**
   * Factory method to create media source adapter.
   * @function createAdapter
   * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
   * @param {Object} source - The source Object.
   * @param {Object} config - The player configuration.
   * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
   * @static
   */
  static createAdapter(videoElement: HTMLVideoElement, source: Source, config: Object): IMediaSourceAdapter {
    let dashConfig = {};
    if (Utils.Object.hasPropertyPath(config, 'playback.options.html5.dash')) {
      dashConfig = config.playback.options.html5.dash;
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
   * Checks if the dash adapter is supported
   * @function isSupported
   * @returns {boolean} -  Whether dash is supported.
   * @static
   */
  static isSupported(): boolean {
    shaka.polyfill.installAll();
    let isSupported = shaka.Player.isBrowserSupported();
    DashAdapter._logger.debug('isSupported:' + isSupported);
    return isSupported;
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to the dash adapter
   * @param {Object} source - The source object
   * @param {Object} config - The media source adapter configuration
   */
  constructor(videoElement: HTMLVideoElement, source: Object, config: Object = {}) {
    DashAdapter._logger.debug('Creating adapter. Shaka version: ' + shaka.Player.version);
    super(videoElement, source, config);
    this._shaka = new shaka.Player(videoElement);
    this._shaka.configure(config);
    this._shaka.setTextTrackVisibility(true);
    this._addBindings();
  }

  /**
   * Add the required bindings to shaka.
   * @function _addBindings
   * @private
   * @returns {void}
   */
  _addBindings(): void {
    this._shaka.addEventListener('adaptation', this._onAdaptation.bind(this));
    this._shaka.addEventListener('error', this._onError.bind(this));
  }

  /**
   * Remove the bindings to shaka.
   * @function _removeBindings
   * @private
   * @returns {void}
   */
  _removeBindings(): void {
    this._shaka.removeEventListener('adaptation', this._onAdaptation);
    this._shaka.removeEventListener('error', this._onError);
  }

  /**
   * Load the video source
   * @param {number} startTime - Optional time to start the video from.
   * @function load
   * @override
   */
  load(startTime: ?number): Promise<Object> {
    if (!this._loadPromise) {
      this._loadPromise = new Promise((resolve, reject) => {
        if (this._sourceObj && this._sourceObj.url) {
          this._trigger(BaseMediaSourceAdapter.CustomEvents.ABR_MODE_CHANGED, {mode: this.isAdaptiveBitrateEnabled() ? 'auto' : 'manual'});
          this._shaka.load(this._sourceObj.url, startTime).then(() => {
            let data = {tracks: this._getParsedTracks()};
            DashAdapter._logger.debug('The source has been loaded successfully');
            resolve(data);
          }).catch((error) => {
            reject(error);
            this._onError(error);
          });
        }
      });
    }
    return this._loadPromise;
  }

  /**
   * Destroying the dash adapter
   * @function destroy
   * @override
   */
  destroy(): void {
    DashAdapter._logger.debug('destroy');
    super.destroy();
    this._loadPromise = null;
    this._sourceObj = null;
    this._removeBindings();
    this._shaka.destroy();
  }

  /**
   * Get the original video tracks
   * @function _getVideoTracks
   * @returns {Array<Object>} - The original video tracks
   * @private
   */
  _getVideoTracks(): Array<Object> {
    let variantTracks = this._shaka.getVariantTracks();
    let activeVariantTrack = variantTracks.filter((variantTrack) => {
      return variantTrack.active;
    })[0];
    let videoTracks = variantTracks.filter((variantTrack) => {
      return variantTrack.audioId === activeVariantTrack.audioId;
    });
    return videoTracks;
  }

  /**
   * Get the original audio tracks
   * @function _getAudioTracks
   * @returns {Array<Object>} - The original audio tracks
   * @private
   */
  _getAudioTracks(): Array<Object> {
    let variantTracks = this._shaka.getVariantTracks();
    let activeVariantTrack = variantTracks.filter((variantTrack) => {
      return variantTrack.active;
    })[0];
    let audioTracks = variantTracks.filter((variantTrack) => {
      return variantTrack.videoId === activeVariantTrack.videoId;
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
    let videoTracks = this._getParsedVideoTracks();
    let audioTracks = this._getParsedAudioTracks();
    let textTracks = this._getParsedTextTracks();
    return videoTracks.concat(audioTracks).concat(textTracks);
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
          label: videoTracks[i].label,
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
          kind: textTracks[i].kind ? textTracks[i].kind + 's' : "",
          active: textTracks[i].active,
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
    let videoTracks = this._getVideoTracks();
    if ((videoTrack instanceof VideoTrack) && videoTracks) {
      let selectedVideoTrack = videoTracks[videoTrack.index];
      if (selectedVideoTrack) {
        if (this.isAdaptiveBitrateEnabled()) {
          this._shaka.configure({abr: {enabled: false}});
          this._trigger(BaseMediaSourceAdapter.CustomEvents.ABR_MODE_CHANGED, {mode: 'manual'});
        }
        if (!selectedVideoTrack.active) {
          this._shaka.selectVariantTrack(videoTracks[videoTrack.index], true);
          this._onTrackChanged(videoTrack);
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
    if ((audioTrack instanceof AudioTrack) && !audioTrack.active) {
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
    if ((textTrack instanceof TextTrack) && !textTrack.active && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions')) {
      this._shaka.selectTextLanguage(textTrack.language);
      this._shaka.setTextTrackVisibility(false);
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
    this._shaka.setTextTrackVisibility(false);
  }

  /**
   * Enables adaptive bitrate switching
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  enableAdaptiveBitrate(): void {
    if (!this.isAdaptiveBitrateEnabled()) {
      this._trigger(BaseMediaSourceAdapter.CustomEvents.ABR_MODE_CHANGED, {mode: 'auto'});
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
    let shakaConfig = this._shaka.getConfiguration();
    return shakaConfig.abr.enabled;
  }

  /**
   * An handler to shaka adaptation event
   * @function _onAdaptation
   * @returns {void}
   * @private
   */
  _onAdaptation(): void {
    let selectedVideoTrack = this._getParsedVideoTracks().filter(function (videoTrack) {
      return videoTrack.active;
    })[0];
    this._onTrackChanged(selectedVideoTrack);
  }

  /**
   * An handler to shaka error event
   * @function _onError
   * @param {any} error - the error
   * @returns {void}
   * @private
   */
  _onError(error: any): void {
    DashAdapter._logger.error(error);
  }

  /**
   * Getter for the src that the adapter plays on the video element.
   * In case the adapter preformed a load it will return the manifest url.
   * @public
   * @returns {string} - The src url.
   */
  get src(): string {
    if (this._loadPromise && this._sourceObj) {
      return this._sourceObj.url;
    }
    return "";
  }
}

// Register DashAdapter to the media source adapter manager
if (DashAdapter.isSupported()) {
  registerMediaSourceAdapter(DashAdapter);
}
