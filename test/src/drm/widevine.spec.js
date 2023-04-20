import {Widevine} from '../../../src/drm/widevine';
import {DrmScheme, Env} from '@playkit-js/playkit-js';
import {wwDrmData, prDrmData} from './fake-drm-data';

const BROWSER: string = Env.browser.name;

describe('Widevine', function () {
  describe('isConfigured', function () {
    it('should return true for widevine data if configured', function () {
      Widevine.isConfigured(wwDrmData, {keySystem: DrmScheme.WIDEVINE}).should.be.true;
    });

    it('should return false for widevine data if not configured', function () {
      Widevine.isConfigured(wwDrmData, {keySystem: DrmScheme.PLAYREADY}).should.be.false;
    });

    it('should return false for non-widevine data even configured', function () {
      Widevine.isConfigured(prDrmData, {keySystem: DrmScheme.WIDEVINE}).should.be.false;
    });
  });

  describe('canPlayDrm', function () {
    it('should return true for widevine data', function () {
      Widevine.canPlayDrm(wwDrmData).should.be.true;
    });

    it('should return false for non-widevine data any case', function () {
      Widevine.canPlayDrm(prDrmData).should.be.false;
    });
  });

  describe('setDrmPlayback', function () {
    let config = {};
    let expectedConfig = {
      drm: {
        servers: {
          [DrmScheme.WIDEVINE]: wwDrmData[0].licenseUrl
        }
      }
    };

    afterEach(function () {
      config = {};
    });

    it('sets the correct shaka drm config for widevine data', function () {
      Widevine.setDrmPlayback(config, wwDrmData);
      if (BROWSER === 'Chrome') {
        expectedConfig.drm.advanced = {};
        //     [DrmScheme.WIDEVINE]: {
        //       videoRobustness: 'SW_SECURE_CRYPTO',
        //       audioRobustness: 'SW_SECURE_CRYPTO'
        //     }
        //   };
      }
      config.should.deep.equal(expectedConfig);
    });

    it('sets nothing for non-widevine data', function () {
      Widevine.setDrmPlayback(config, prDrmData);
      config.should.deep.equal({});
    });
  });
});
