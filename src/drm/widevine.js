// @flow
import {DrmSupport, DrmScheme, Env} from 'playkit-js'
import DashAdapter from '../dash-adapter'

const BROWSER: string = Env.browser.name;

export default class Widevine {
  /**
   * Widevine playback supports in case 2 conditions are met:
   * 1. The environment supports Widevine playback.
   * 2. The drm data of the source object contains entry with Widevine scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether FairPlay can be play on the current environment.
   */
  static canPlayDrm(drmData: Array<Object>): boolean {
    DashAdapter._logger.debug("Can play DRM scheme of: " + DrmScheme.WIDEVINE);
    if (typeof DrmSupport[BROWSER] === 'function') {
      let drmScheme = DrmSupport[BROWSER]();
      DashAdapter._logger.debug("Supported DRM scheme for current environment is: " + drmScheme);
      return (drmScheme === DrmScheme.WIDEVINE && !!(drmData.find((drmEntry) => drmEntry.scheme === DrmScheme.WIDEVINE)));
    }
    return false;
  }

  /**
   * Sets the Widevine playback.
   * @param {Object} config - The shaka player config.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  static setDrmPlayback(config: Object, drmData: Array<Object>): void {
    let wwDrmEntry = drmData.find((drmEntry) => drmEntry.scheme === DrmScheme.WIDEVINE);
    config.drm = {
      servers: {
        [DrmScheme.WIDEVINE]: wwDrmEntry.licenseUrl
      }
    };
    if (BROWSER === 'Chrome') {
      config.drm.advanced = {
        [DrmScheme.WIDEVINE]: {
          'videoRobustness': 'SW_SECURE_CRYPTO',
          'audioRobustness': 'SW_SECURE_CRYPTO'
        }
      };
    }
  }
}
