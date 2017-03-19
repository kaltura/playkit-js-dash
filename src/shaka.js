// @flow
import shaka from 'shaka-player';
import {BaseMediaSourceHandler} from 'playkit-js';
import * as Playkit from 'playkit-js';

export default class Shaka extends BaseMediaSourceHandler {

  static _mimeTypes = ['dash'];
  static _name = 'Shaka';

  static isSupported(): boolean {
    if (!window.Promise) {
      shaka.polyfill.installAll();
    }
    return shaka.Player.isBrowserSupported();
  }

  static onError(error: Object) {
    super.onError(error);
  }

  constructor(videoElement: HTMLVideoElement, config: Object): BaseMediaSourceHandler {
    super(Shaka._name);
    this._msPlayer = new shaka.Player(videoElement);
    // this._msPlayer.configure(config.shaka);
  }

  load(source: string) {
    this._msPlayer.load(source).then(() => {
      // This runs if the asynchronous load is successful.
      this._logger.info('The manifest has been loaded');
    }).catch(Shaka.onError.bind(this));
  }
}

if (Shaka.isSupported()) {
  Playkit.registerHandler(Shaka);
}
