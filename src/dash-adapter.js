// @flow
import shaka from 'shaka-player';
import {registerMediaSourceAdapter, BaseMediaSourceAdapter} from 'playkit-js'
import {Track, VideoTrack, AudioTrack, TextTrack} from 'playkit-js'

/**
 * Adapter of shaka lib for dash content
 * @classdesc
 */
export default class DashAdapter extends BaseMediaSourceAdapter {
  /**
   * The name of Adapter
   * @member {string} _name
   * @static
   * @private
   */
  static _name = 'DashAdapter';
  /**
   * The adapter logger
   * @member {any} _logger
   * @private
   * @static
   */
  static _logger = BaseMediaSourceAdapter.getLogger(DashAdapter._name);
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
   * Checks if dash adapter can play a given mime type
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the dash adapter can play a specific mime type
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    let canPlayType = (mimeType === DashAdapter._dashMimeType);
    DashAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
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
   * @function load
   * @override
   */
  load(): Promise<Object> {
    if (!this._loadPromise) {
      this._loadPromise = new Promise((resolve, reject) => {
        if (this._sourceObj && this._sourceObj.url) {
          this._shaka.load(this._sourceObj.url).then(() => {
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
    this._removeBindings();
    this._shaka.destroy();
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
          active: videoTracks[i].active,
          label: videoTracks[i].label,
          index: i
        };
        parsedTracks.push(new VideoTrack(settings));
      }
    }
    return parsedTracks;
  }

  _getVideoTracks() {
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
   * Get the parsed audio tracks
   * @function _getParsedAudioTracks
   * @returns {Array<AudioTrack>} - The parsed audio tracks
   * @private
   */
  _getParsedAudioTracks(): Array<AudioTrack> {
    let variantTracks = this._shaka.getVariantTracks();
    let activeVariantTrack = variantTracks.filter((variantTrack) => {
      return variantTrack.active;
    })[0];
    let audioTracks = variantTracks.filter((variantTrack) => {
      return variantTrack.videoId === activeVariantTrack.videoId;
    });
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
        this._shaka.configure({abr:{enabled: false}});
        if (!selectedVideoTrack.active) {
          this._shaka.selectVariantTrack(videoTracks[videoTrack.index], true);
          super._onTrackChanged(videoTrack);
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
      super._onTrackChanged(audioTrack);
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
      super._onTrackChanged(textTrack);
    }
  }

  /**
   * Enables adaptive bitrate switching
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  enableAdaptiveBitrate(): void {
    this._shaka.configure({abr:{enabled: true}});
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
    super._onTrackChanged(selectedVideoTrack);
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
