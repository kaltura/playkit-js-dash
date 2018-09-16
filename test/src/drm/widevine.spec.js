import Widevine from '../../../src/drm/widevine';
import {BaseDrmProtocol, Env} from '@playkit-js/playkit-js';
import {wwDrmData, prDrmData} from './fake-drm-data';

const DrmSupport = BaseDrmProtocol.DrmSupport;
const DrmScheme = BaseDrmProtocol.DrmScheme;
const BROWSER: string = Env.browser.name;

function isValidEnvForWidevine() {
  return (
    (BROWSER === 'Chrome' || BROWSER === 'Firefox') &&
    (DrmSupport._Browsers['Chrome']() === DrmScheme.WIDEVINE || DrmSupport._Browsers['Firefox']() === DrmScheme.WIDEVINE)
  );
}

describe('Widevine', function() {
  describe('canPlayDrm', function() {
    it('should return true for widevine data on valid widevine env and false otherwise', function() {
      if (isValidEnvForWidevine()) {
        Widevine.canPlayDrm(wwDrmData).should.be.true;
      } else {
        Widevine.canPlayDrm(wwDrmData).should.be.false;
      }
    });

    it('should return false for non-widevine data any case', function() {
      Widevine.canPlayDrm(prDrmData).should.be.false;
    });
  });

  describe('setDrmPlayback', function() {
    let config = {};
    let expectedConfig = {
      drm: {
        servers: {
          [DrmScheme.WIDEVINE]: wwDrmData[0].licenseUrl
        }
      }
    };

    afterEach(function() {
      config = {};
    });

    it('sets the correct shaka drm config for widevine data', function() {
      Widevine.setDrmPlayback(config, wwDrmData);
      if (BROWSER === 'Chrome') {
        expectedConfig.drm.advanced = {
          [DrmScheme.WIDEVINE]: {
            videoRobustness: 'SW_SECURE_CRYPTO',
            audioRobustness: 'SW_SECURE_CRYPTO'
          }
        };
      }
      config.should.deep.equal(expectedConfig);
    });

    it('sets nothing for non-widevine data', function() {
      Widevine.setDrmPlayback(config, prDrmData);
      config.should.deep.equal({});
    });
  });
});
