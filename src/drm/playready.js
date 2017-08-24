// @flow
import {DrmSupport, DrmScheme, Env} from 'playkit-js'
import DashAdapter from '../dash-adapter'

const BROWSER: string = Env.browser.name;

export default class PlayReady {
  /**
   * PlayReady playback supports in case 2 conditions are met:
   * 1. The environment supports PlayReady playback.
   * 2. The drm data of the source object contains entry with PlayReady scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether FairPlay can be play on the current environment.
   */
  static canPlayDrm(drmData: Array<Object>): boolean {
    DashAdapter._logger.debug("Can play DRM scheme of: " + DrmScheme.PLAYREADY);
    if (typeof DrmSupport[BROWSER] === 'function') {
      let drmScheme = DrmSupport[BROWSER]();
      DashAdapter._logger.debug("Supported DRM scheme for current environment is: " + drmScheme);
      return (drmScheme === DrmScheme.PLAYREADY && !!(drmData.find((drmEntry) => drmEntry.scheme === DrmScheme.PLAYREADY)));
    }
    return false;
  }

  /**
   * Sets the PlayReady playback.
   * @param {Object} config - The shaka player config.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  static setDrmPlayback(config: Object, drmData: Array<Object>): void {
    let prDrmEntry = drmData.find((drmEntry) => drmEntry.scheme === DrmScheme.PLAYREADY);
    config.drm = {
      servers: {
        [DrmScheme.PLAYREADY]: prDrmEntry.licenseUrl
      }
    };
  }
}
