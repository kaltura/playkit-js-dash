// @flow
import shaka from 'shaka-player';
import {registerMediaSourceAdapter} from 'playkit-js';

/**
 * Adapter of shaka lib for dash content
 * @classdesc
 */
export default class DashAdapter implements IMediaSourceAdapter {
  /**
   * The name of Adapter
   * @member {string} _name
   * @static
   * @private
   */
  static _name = 'DashAdapter';

  /**
   * The supported mime type by the DashAdapter
   * @member {string} _dashMimeType
   * @static
   * @private
   */
  static _dashMimeType = 'application/dash+xml';

  /**
   * The adapter config
   * @member {Object} _config
   * @private
   */
  _config: Object;

  /**
   * The owning engine
   * @member {IEngine} _engine
   * @private
   */
  _engine: IEngine;

  /**
   * The source url
   * @member {string} _source
   * @private
   */
  _source: string;

  /**
   * The shaka player instance
   * @member {any} _shaka
   * @private
   */
  _shaka: any;

  /**
   * Checks if DashAdapter can play a given mime type
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the native adapter can play a specific mime type
   * @static
   */
  static canPlayType(mimeType: string): boolean {
    return (mimeType === DashAdapter._dashMimeType);
  }

  /**
   * Factory method to create media source adapter
   * @function createAdapter
   * @param {IEngine} engine - The video engine that the media source adapter work with
   * @param {Object} source - The source Object
   * @param {Object} config - The media source adapter configuration
   * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter
   * @static
   */
  static createAdapter(engine: IEngine, source: Object, config: Object): IMediaSourceAdapter {
    return new this(engine, source, config);
  }

  /**
   * Getter for the adapter name
   * @returns {string} - The adapter name
   */
  static get name(): string {
    return DashAdapter._name;
  }

  /**
   * Checks if the DashAdapter is supported
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
   * @param {IEngine} engine - The video element which bind to DashAdapter
   * @param {Object} source - The source object
   * @param {Object} config - The media source adapter configuration
   */
  constructor(engine: IEngine, source: Object, config: Object) {
    this._engine = engine;
    this._config = config;
    this._source = source.url;
    this._shaka = new shaka.Player(engine.getVideoElement());
  }

  /**
   * Load the video source
   * @function load
   * @override
   */
  load(): void {
    this._shaka.load(this._source).then(() => {
      // This runs if the asynchronous load is successful.
    });
  }

  /**
   * Destroying the dash adapter
   * @function destroy
   * @override
   */
  destroy(): void {
    this._shaka.destroy();
  }
}

// Register DashAdapter to the media source adapter manager
if (DashAdapter.isSupported()) {
  registerMediaSourceAdapter(DashAdapter);
}
