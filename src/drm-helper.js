// @flow
import {Env} from 'playkit-js'
import DashAdapter from './dash-adapter'

const DEVICE: ?string = Env.device.type;
const OS: string = Env.os.name;
const BROWSER: string = Env.browser.name;
const OS_VERSION: string = Env.os.version;

export default class DrmHelper {
  static DrmSchemes: Object = {
    WIDEVINE: 'com.widevine.alpha',
    PLAYREADY: 'com.microsoft.playready'
  };

  static DrmSupport: Object = {
    Chrome: () => {
      if (!DEVICE || (DEVICE === 'mobile' && OS === 'Android')) {
        return DrmHelper.DrmSchemes.WIDEVINE;
      }
    },
    Firefox: () => {
      if (!DEVICE) {
        return DrmHelper.DrmSchemes.WIDEVINE
      }
    },
    Edge: () => {
      if (!DEVICE) {
        return DrmHelper.DrmSchemes.PLAYREADY;
      }
    },
    IE: () => {
      if (!DEVICE && OS === 'Windows' && Number.parseFloat(OS_VERSION) >= 8.1) {
        return DrmHelper.DrmSchemes.PLAYREADY;
      }
    }
  };

  static canPlayDrm(drmData: Array<Object>): boolean {
    if (typeof DrmHelper.DrmSupport[BROWSER] === 'function') {
      let drmScheme = DrmHelper.DrmSupport[BROWSER]();
      let drmEntry = (drmData.find((drmEntry) => drmEntry.scheme === drmScheme));
      let canPlayDrm = !!drmEntry;
      if (canPlayDrm) {
        DashAdapter._logger.debug(`Can play ${drmEntry.scheme} drm since running env is ${BROWSER}/${OS}`, drmEntry);
      } else {
        DashAdapter._logger.debug(`Cannot play any drm since running env is ${BROWSER}/${OS}`);
      }
      return canPlayDrm;
    }
    return false;
  }

  static setDrmConfig(config: Object, drmData: Object): void {
    config.drm = {servers: {}};
    drmData.forEach((drmEntry) => {
      if (drmEntry.scheme === DrmHelper.DrmSchemes.WIDEVINE) {
        config.drm.servers[DrmHelper.DrmSchemes.WIDEVINE] = drmEntry.licenseUrl;
        if (BROWSER === 'Chrome') {
          config.drm.advanced = {
            [DrmHelper.DrmSchemes.WIDEVINE]: {
              'videoRobustness': 'SW_SECURE_CRYPTO',
              'audioRobustness': 'SW_SECURE_CRYPTO'
            }
          };
        }
      } else if (drmEntry.scheme === DrmHelper.DrmSchemes.PLAYREADY) {
        config.drm.servers[DrmHelper.DrmSchemes.PLAYREADY] = drmEntry.licenseUrl;
      }
    });
  }
}
