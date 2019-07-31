import PlayReady from '../../../src/drm/playready';
import {BaseDrmProtocol} from '@playkit-js/playkit-js';
import {wwDrmData, prDrmData} from './fake-drm-data';

const DrmScheme = BaseDrmProtocol.DrmScheme;

describe('PlayReady', function() {
  describe('isConfigured', function() {
    it('should return true for playready data if configured', function() {
      PlayReady.isConfigured(prDrmData, {keySystem: DrmScheme.PLAYREADY}).should.be.true;
    });

    it('should return false for playready data if not configured', function() {
      PlayReady.isConfigured(prDrmData, {keySystem: DrmScheme.WIDEVINE}).should.be.false;
    });

    it('should return false for non-playready data even configured', function() {
      PlayReady.isConfigured(wwDrmData, {keySystem: DrmScheme.PLAYREADY}).should.be.false;
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
