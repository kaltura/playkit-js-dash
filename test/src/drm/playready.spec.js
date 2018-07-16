import PlayReady from '../../../src/drm/playready';
import {BaseDrmProtocol, Env} from 'playkit-js';
import {wwDrmData, prDrmData} from './fake-drm-data';

const DrmSupport = BaseDrmProtocol.DrmSupport;
const DrmScheme = BaseDrmProtocol.DrmScheme;
const BROWSER: string = Env.browser.name;

function isValidEnvForPlayReady() {
  return (
    (BROWSER === 'Edge' || BROWSER === 'IE') &&
    (DrmSupport._Browsers['Edge']() === DrmScheme.PLAYREADY || DrmSupport._Browsers['IE']() === DrmScheme.PLAYREADY)
  );
}

describe('PlayReady', function() {
  describe('canPlayDrm', function() {
    it('should return true for playready data on valid playready env and false otherwise', function() {
      if (isValidEnvForPlayReady()) {
        PlayReady.canPlayDrm(prDrmData).should.be.true;
      } else {
        PlayReady.canPlayDrm(prDrmData).should.be.false;
      }
    });

    it('should return false for non-playready data any case', function() {
      PlayReady.canPlayDrm(wwDrmData).should.be.false;
    });
  });

  describe('setDrmPlayback', function() {
    let config = {};
    let expectedConfig = {
      drm: {
        servers: {
          [DrmScheme.PLAYREADY]: prDrmData[0].licenseUrl
        }
      }
    };

    afterEach(function() {
      config = {};
    });

    it('sets the correct shaka drm config for playready data', function() {
      PlayReady.setDrmPlayback(config, prDrmData);
      config.should.deep.equal(expectedConfig);
    });

    it('sets nothing for non-playready data', function() {
      PlayReady.setDrmPlayback(config, wwDrmData);
      config.should.deep.equal({});
    });
  });
});
