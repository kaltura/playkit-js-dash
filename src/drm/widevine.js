// @flow
import {BaseDrmProtocol, Env} from 'playkit-js'

const DrmSupport = BaseDrmProtocol.DrmSupport;
const DrmScheme = BaseDrmProtocol.DrmScheme;

export default class Widevine extends BaseDrmProtocol {
  static _logger = BaseDrmProtocol.getLogger('Widevine');

  /**
   * Widevine playback supports in case 2 conditions are met:
   * 1. The environment supports Widevine playback.
   * 2. The drm data of the source object contains entry with Widevine scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether FairPlay can be play on the current environment.
   */
  static canPlayDrm(drmData: Array<Object>): boolean {
    Widevine._logger.debug("Can play DRM scheme of: " + DrmScheme.WIDEVINE);
    return DrmSupport.isProtocolSupported(DrmScheme.WIDEVINE, drmData);
  }

  /**
   * Sets the Widevine playback.
   * @param {Object} config - The shaka player config.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  static setDrmPlayback(config: Object, drmData: Array<Object>): void {
    Widevine._logger.debug("Sets drm playback");
    let browser = Env.browser.name;
    let wwDrmEntry = drmData.find((drmEntry) => drmEntry.scheme === DrmScheme.WIDEVINE);
    if (wwDrmEntry) {
      config.drm = {
        servers: {
          [DrmScheme.WIDEVINE]: wwDrmEntry.licenseUrl
        }
      };
      if (browser === 'Chrome') {
        config.drm.advanced = {
          [DrmScheme.WIDEVINE]: {
            'videoRobustness': 'SW_SECURE_CRYPTO',
            'audioRobustness': 'SW_SECURE_CRYPTO'
          }
        };
      }
    }
  }
}
