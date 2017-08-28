// @flow
import {BaseDrmProtocol} from 'playkit-js'
import DashAdapter from '../dash-adapter'

const DrmSupport = BaseDrmProtocol.DrmSupport;
const DrmScheme = BaseDrmProtocol.DrmScheme;

export default class PlayReady extends BaseDrmProtocol {
  /**
   * PlayReady playback supports in case 2 conditions are met:
   * 1. The environment supports PlayReady playback.
   * 2. The drm data of the source object contains entry with PlayReady scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether FairPlay can be play on the current environment.
   */
  static canPlayDrm(drmData: Array<Object>): boolean {
    DashAdapter._logger.debug("Can play DRM scheme of: " + DrmScheme.PLAYREADY);
    return DrmSupport.isProtocolSupported(DrmScheme.PLAYREADY, drmData);
  }

  /**
   * Sets the PlayReady playback.
   * @param {Object} config - The shaka player config.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  static setDrmPlayback(config: Object, drmData: Array<Object>): void {
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
