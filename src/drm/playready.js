// @flow
import {BaseDrmProtocol} from 'playkit-js'

const DrmSupport = BaseDrmProtocol.DrmSupport;
const DrmScheme = BaseDrmProtocol.DrmScheme;

export class PlayReady extends BaseDrmProtocol {
  static _logger = BaseDrmProtocol.getLogger('PlayReady');

  /**
   * PlayReady playback supports in case 2 conditions are met:
   * 1. The environment supports PlayReady playback.
   * 2. The drm data of the source object contains entry with PlayReady scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether FairPlay can be play on the current environment.
   */
  static canPlayDrm(drmData: Array<Object>): boolean {
    PlayReady._logger.debug("Can play DRM scheme of: " + DrmScheme.PLAYREADY);
    return DrmSupport.isProtocolSupported(DrmScheme.PLAYREADY, drmData);
  }

  /**
   * Sets the PlayReady playback.
   * @param {Object} config - The shaka player config.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  static setDrmPlayback(config: Object, drmData: Array<Object>): void {
    PlayReady._logger.debug("Sets drm playback");
    let prDrmEntry = drmData.find((drmEntry) => drmEntry.scheme === DrmScheme.PLAYREADY);
    if (prDrmEntry) {
      config.drm = {
        servers: {
          [DrmScheme.PLAYREADY]: prDrmEntry.licenseUrl
        }
      };
    }
  }
}
