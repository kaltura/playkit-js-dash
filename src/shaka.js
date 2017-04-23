// @flow
import shaka from 'shaka-player';
import {BaseMediaSourceAdapter, registerAdapter} from 'playkit-js';

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
   * @returns {boolean} -
   * @static
   */
  static isSupported(): boolean {
    if (!window.Promise) {
      shaka.polyfill.installAll();
    }
    return shaka.Player.isBrowserSupported();
  }

  /**
   * @constructor
   * @param {IEngine} engine - The video element which bind to Shaka
   * @param {Object} source - The source object
   * @param {Object} config - The media source adapter configuration
   */
  constructor(engine: IEngine, source: Object, config: Object) {
    super(engine, source, config);
    this._source = source.url;
    this._msPlayer = new shaka.Player(engine.getVideoElement());
    // this._msPlayer.configure(config.shaka);
  }

  /**
   * Load the video source
   * @function load
   * @override
   */
  load(): void {
    this._msPlayer.load(this._source).then(() => {
      // This runs if the asynchronous load is successful.
    });
  }

  /**
   * Destroying the _msPlayer
   * @function destroy
   * @override
   */
  destroy(): void {
    this._msPlayer.destroy();
  }
}

// Register Shaka to the media source adapter manager
if (Shaka.isSupported()) {
  registerAdapter(Shaka);
}
