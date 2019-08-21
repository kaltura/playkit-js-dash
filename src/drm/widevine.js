// @flow
import {BaseDrmProtocol, Env} from '@playkit-js/playkit-js';

// const DrmSupport = BaseDrmProtocol.DrmSupport;
const DrmScheme = BaseDrmProtocol.DrmScheme;

export default class Widevine extends BaseDrmProtocol {
  static _logger = BaseDrmProtocol.getLogger('Widevine');

  /**
   * Widevine is the configure key system.
   * @param {Array<Object>} drmData - The drm data.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @return {boolean} - Whether Widevine is the configure key system.
   */
  static isConfigured(drmData: Array<Object>, drmConfig: PKDrmConfigObject): boolean {
    return DrmScheme.WIDEVINE === drmConfig.keySystem && !!drmData.find(drmEntry => drmEntry.scheme === drmConfig.keySystem);
  }

  /**
   * Widevine playback supports in case 2 conditions are met:
   * 1. The environment supports Widevine playback.
   * 2. The drm data of the source object contains entry with Widevine scheme.
   * @return {boolean} - Whether Widevine can be play on the current environment.
   */
  static canPlayDrm(): boolean {
    return true;
  }

  /**
   * Sets the Widevine playback.
   * @param {Object} config - The shaka player config.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  static setDrmPlayback(config: Object, drmData: Array<Object>): void {
    Widevine._logger.debug('Sets drm playback');
    let browser = Env.browser.name;
    let wwDrmEntry = drmData.find(drmEntry => drmEntry.scheme === DrmScheme.WIDEVINE);
    if (wwDrmEntry) {
      config.drm = {
        servers: {
          [DrmScheme.WIDEVINE]: wwDrmEntry.licenseUrl
        },
        advanced: {}
      };
      if (browser === 'Chrome') {
        config.drm.advanced = {
          [DrmScheme.WIDEVINE]: {
            videoRobustness: 'SW_SECURE_CRYPTO',
            audioRobustness: 'SW_SECURE_CRYPTO'
          }
        };
      }
    }
  }
}
