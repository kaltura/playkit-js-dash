// @flow
import shaka from 'shaka-player';
import {BaseMediaSourceAdapter} from 'playkit-js';
import * as Playkit from 'playkit-js';

/**
 * Adapter of shaka lib for dash content
 * @classdesc
 * @extends BaseMediaSourceAdapter
 */
export default class Shaka extends BaseMediaSourceAdapter {
  /**
   * The name of Adapter
   * @member {string} _name
   * @static
   * @private
   */
  static _name = 'Shaka';
  /**
   * The supported mime types by the Shaka
   * @member {Array<string>} _mimeTypes
   * @static
   * @private
   */
  static _mimeTypes = ['application/dash+xml'];

  /**
   * Checks if the Shaka is supported
   * @function isSupported
   * @returns {boolean}
   * @static
   */
  static isSupported(): boolean {
    if (!window.Promise) {
      shaka.polyfill.installAll();
    }
    return shaka.Player.isBrowserSupported();
  }

  /**
   * Error handler
   * @function onError
   * @param {Object} error
   * @static
   */
  static onError(error: Object) {
    super.onError(error);
  }

  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to Shaka
   * @param {Object} config - The engines entry on the player config
   */
  constructor(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceAdapter {
    super(Shaka._name);
    this._msPlayer = new shaka.Player(videoElement);
    // this._msPlayer.configure(config.shaka);
  }

  /**
   * Load the video source
   * @function load
   * @param {Object} source - The source to load
   * @override
   */
  load(source: Object) {
    this._msPlayer.load(source.src).then(() => {
      // This runs if the asynchronous load is successful.
      this._logger.info('The manifest has been loaded');
    }).catch(Shaka.onError.bind(this));
  }

  /**
   * Destroying the _msPlayer
   * @function destroy
   */
  destroy() {
    this._msPlayer.destroy();
  }
}

// Register Shaka to the media source adapter manager
if (Shaka.isSupported()) {
  Playkit.registerAdapter(Shaka);
}
