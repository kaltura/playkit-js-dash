// @flow
import {IDrmProtocol, getLogger, DrmScheme} from '@playkit-js/playkit-js';

const _logger = getLogger('PlayReady');

const PlayReady: IDrmProtocol = class PlayReady {
  /**
   * PLAYREADY is the configure key system.
   * @param {Array<Object>} drmData - The drm data.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @return {boolean} - Whether PLAYREADY is the configure key system.
   */
  static isConfigured(drmData: Array<Object>, drmConfig: PKDrmConfigObject): boolean {
    return DrmScheme.PLAYREADY === drmConfig.keySystem && !!drmData.find(drmEntry => drmEntry.scheme === drmConfig.keySystem);
  }

  /**
   * PlayReady playback supports in case 2 conditions are met:
   * 1. The environment supports PlayReady playback.
   * 2. The drm data of the source object contains entry with PlayReady scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether PlayReady can be play on the current environment.
   */
  static canPlayDrm(drmData: Array<Object>): boolean {
    _logger.debug('Can play DRM scheme of: ' + DrmScheme.PLAYREADY);
    return !!drmData.find(drmEntry => drmEntry.scheme === DrmScheme.PLAYREADY);
  }

  /**
   * Sets the PlayReady playback.
   * @param {Object} config - The shaka player config.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  static setDrmPlayback(config: Object, drmData: Array<Object>): void {
    _logger.debug('Sets drm playback');
    let prDrmEntry = drmData.find(drmEntry => drmEntry.scheme === DrmScheme.PLAYREADY);
    if (prDrmEntry) {
      config.drm = {
        servers: {
          [DrmScheme.PLAYREADY]: prDrmEntry.licenseUrl
        }
      };
    }
  }
};

export {PlayReady};
