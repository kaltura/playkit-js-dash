import DashAdapter from '../../src';
import * as TestUtils from './utils/test-utils';
import {loadPlayer, VideoTrack, AudioTrack, TextTrack, Utils, RequestType, EventType, Error, createTimedMetadata} from '@playkit-js/playkit-js';
import {Widevine} from '../../src/drm/widevine';
import {PlayReady} from '../../src/drm/playready';
import {wwDrmData, prDrmData} from './drm/fake-drm-data';
import shaka from 'shaka-player';
import {ImageTrack, ThumbnailInfo} from '@playkit-js/playkit-js/dist/playkit';

const targetId = 'player-placeholder_dash-adapter.spec';

const vodSource = {
  mimetype: 'application/dash+xml',
  url: 'https://cfvod.kaltura.com/dasha/p/1740481/sp/174048100/serveFlavor/entryId/1_ez6mf1n8/v/,1/ev/3/flavorId/1_fwvuvqym,1/ev/3/flavorId/1_5zyuykzo,1/ev/3/flavorId/1_4xul4cg0,1/ev/3/flavorId/1_5jovgwnt,1/ev/3/flavorId/1_dt7bjb0q,2/ev/3/flavorId/0_og64h1z3,2/ev/3/flavorId/0_mgociiko,2/ev/3/flavorId/0_dxxbalt0,/forceproxy/true/name/a.mp4.urlset/manifest.mpd'
};

const liveSource = {
  mimetype: 'application/dash+xml',
  url: 'https://akamaibroadcasteruseast.akamaized.net/cmaf/live/657078/akasource/out.mpd'
};

const dvrSource = {
  mimetype: 'application/dash+xml',
  url: 'http://klive-a.akamaihd.net/dc-1/live/dash/p/1897241/e/1_gffgxm38/t/e83cor13pmTGTQ7kPZiopg/manifest.mpd'
};

const vodInStreamThumbnailSource = {
  mimetype: 'application/dash+xml',
  url: 'http://dash.edgesuite.net/akamai/bbb_30fps/bbb_with_multiple_tiled_thumbnails.mpd'
};

const dvrInStreamThumbnailSource = {
  mimetype: 'application/dash+xml',
  url: 'http://pf5.broadpeak-vcdn.com/bpk-tv/tvr/default/index.mpd'
};

describe.skip('DashAdapter [debugging and testing manually]', () => {
  let player, tracks, videoTracks, textTracks, audioTracks;

  before(function () {
    TestUtils.createElement('DIV', targetId);
  });

  /**
   * @function displayTracksOnScreen
   * @return {void}
   */
  function displayTracksOnScreen() {
    tracks = player.getTracks() || [];
    videoTracks = [];
    textTracks = [];
    audioTracks = [];
    tracks.filter(track => {
      if (track instanceof AudioTrack) {
        audioTracks.push(track);
      } else if (track instanceof VideoTrack) {
        videoTracks.push(track);
      } else if (track instanceof TextTrack) {
        textTracks.push(track);
      }
    });
    TestUtils.createVideoTrackButtons(player, videoTracks);
    TestUtils.createAudioTrackButtons(player, audioTracks);
    TestUtils.createTextTrackButtons(player, textTracks);
  }

  it('should play dash stream', () => {
    player = loadPlayer(targetId, {
      sources: {
        dash: [liveSource]
      }
    });
    player.ready().then(() => {
      displayTracksOnScreen();
    });
    player.load();
    window.player = player;
  });
});

describe('DashAdapter: canPlayDrm', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should return true since widevine configured', function () {
    sandbox.stub(Widevine, 'canPlayDrm').value(() => true);
    sandbox.stub(Widevine, 'isConfigured').value(() => true);
    sandbox.stub(PlayReady, 'canPlayDrm').value(() => false);
    sandbox.stub(PlayReady, 'isConfigured').value(() => false);
    DashAdapter.canPlayDrm().should.be.true;
    DashAdapter._availableDrmProtocol.length.should.equal(1);
    (DashAdapter._availableDrmProtocol.find(entry => entry === Widevine) !== null).should.be.true;
  });

  it('should return true since playready configured', function () {
    sandbox.stub(Widevine, 'canPlayDrm').value(() => false);
    sandbox.stub(Widevine, 'isConfigured').value(() => false);
    sandbox.stub(PlayReady, 'canPlayDrm').value(() => true);
    sandbox.stub(PlayReady, 'isConfigured').value(() => true);
    DashAdapter.canPlayDrm().should.be.true;
    DashAdapter._availableDrmProtocol.length.should.equal(1);
    (DashAdapter._availableDrmProtocol.find(entry => entry === PlayReady) !== null).should.be.true;
  });

  it('should return true for widevine and playready sources without config', function () {
    sandbox.stub(Widevine, 'isConfigured').value(() => false);
    sandbox.stub(PlayReady, 'isConfigured').value(() => false);
    DashAdapter.canPlayDrm(wwDrmData.concat(prDrmData)).should.be.true;
    DashAdapter._availableDrmProtocol.length.should.equal(2);
  });

  it('should return true for widevine source only', function () {
    sandbox.stub(Widevine, 'isConfigured').value(() => false);
    sandbox.stub(PlayReady, 'isConfigured').value(() => false);
    DashAdapter.canPlayDrm(wwDrmData).should.be.true;
    DashAdapter._availableDrmProtocol.length.should.equal(1);
  });

  it('should return true for playready source only', function () {
    sandbox.stub(Widevine, 'isConfigured').value(() => false);
    sandbox.stub(PlayReady, 'isConfigured').value(() => false);
    DashAdapter.canPlayDrm(prDrmData).should.be.true;
    DashAdapter._availableDrmProtocol.length.should.equal(1);
  });
});

describe('DashAdapter: canPlayType', () => {
  it('should return true for application/dash+xml', () => {
    DashAdapter.canPlayType('application/dash+xml').should.be.true;
  });

  it('should return true for APPLICATION/DASH+XML', () => {
    DashAdapter.canPlayType('APPLICATION/DASH+XML').should.be.true;
  });

  it('should return false to video/mp4', function () {
    DashAdapter.canPlayType('video/mp4').should.be.false;
  });

  it('should return false to invalid mimetype', function () {
    DashAdapter.canPlayType('dummy').should.be.false;
  });

  it('should return false to null mimetype', function () {
    DashAdapter.canPlayType(null).should.be.false;
  });

  it('should return false to empty mimetype', function () {
    DashAdapter.canPlayType('').should.be.false;
  });

  it('should return false to no mimetype', function () {
    DashAdapter.canPlayType().should.be.false;
  });
});

describe('DashAdapter: isSupported', () => {
  it('should return true', function () {
    DashAdapter.isSupported().should.be.true;
  });
});

describe('DashAdapter: id', () => {
  it('should be named DashAdapter', function () {
    DashAdapter.id.should.equal('DashAdapter');
  });
});

describe('DashAdapter: load', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(done => {
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should create all dash adapter properties', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance
      .load()
      .then(() => {
        try {
          dashInstance._shaka.should.exist;
          dashInstance._config.should.exist;
          dashInstance._videoElement.should.exist;
          dashInstance._sourceObj.should.exist;
        } catch (e) {
          done(e);
        }
        done();
      })
      .catch(e => {
        done(e);
      });
  });

  it('should set streaming.lowLatencyMode config to false on vod by default', done => {
    try {
      dashInstance = DashAdapter.createAdapter(video, vodSource, config);
      video.addEventListener(EventType.LOADED_DATA, () => {
        dashInstance._shaka.getConfiguration().streaming.lowLatencyMode.should.equal(false);
        done();
      });

      dashInstance.load().then(() => {
        video.play();
      });
    } catch (e) {
      done(e);
    }
  });

  it('should set streaming.lowLatencyMode config to true on live by default', done => {
    try {
      dashInstance = DashAdapter.createAdapter(video, liveSource, config);
      video.addEventListener(EventType.LOADED_DATA, () => {
        dashInstance._shaka.getConfiguration().streaming.lowLatencyMode.should.equal(true);
        done();
      });

      dashInstance.load().then(() => {
        video.play();
      });
    } catch (e) {
      done(e);
    }
  });

  it('should take the streaming.lowLatencyMode value from config when configured manually - vod', done => {
    try {
      const playerConfig = {...config, streaming: {lowLatencyMode: true}};
      dashInstance = DashAdapter.createAdapter(video, vodSource, playerConfig);
      video.addEventListener(EventType.LOADED_DATA, () => {
        dashInstance._shaka.getConfiguration().streaming.lowLatencyMode.should.equal(true);
        done();
      });

      dashInstance.load().then(() => {
        video.play();
      });
    } catch (e) {
      done(e);
    }
  });

  it('should take the streaming.lowLatencyMode value from config when configured manually - live', done => {
    try {
      const playerConfig = {...config, streaming: {lowLatencyMode: false}};
      dashInstance = DashAdapter.createAdapter(video, vodSource, playerConfig);
      video.addEventListener(EventType.LOADED_DATA, () => {
        dashInstance._shaka.getConfiguration().streaming.lowLatencyMode.should.equal(false);
        done();
      });

      dashInstance.load().then(() => {
        video.play();
      });
    } catch (e) {
      done(e);
    }
  });

  it('should load successfully when given a valid video to play', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance
      .load()
      .then(() => {
        done();
      })
      .catch(e => {
        done(e);
      });
  });

  it('should fire MANIFEST_LOADED', done => {
    try {
      dashInstance = DashAdapter.createAdapter(video, vodSource, config);
      dashInstance.addEventListener(EventType.MANIFEST_LOADED, event => {
        event.payload.miliSeconds.should.exist;
        done();
      });
    } catch (e) {
      done(e);
    }
    dashInstance.load();
  });

  it('should fire FRAG_LOADED', done => {
    try {
      const fragLoadedFunc = event => {
        event.payload.miliSeconds.should.exist;
        event.payload.bytes.should.exist;
        event.payload.url.should.not.be.empty;
        dashInstance.removeEventListener(EventType.FRAG_LOADED, fragLoadedFunc);
        done();
      };
      dashInstance = DashAdapter.createAdapter(video, vodSource, config);
      dashInstance.addEventListener(EventType.FRAG_LOADED, fragLoadedFunc);
      dashInstance.load();
    } catch (e) {
      done(e);
    }
  });

  it('should fail load if URL is corrupted/return 403', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      {
        mimetype: 'application/dash+xml',
        url: 'some/corrupted/url'
      },
      config
    );

    dashInstance.load().catch(error => {
      error.should.be.exist;
      done();
    });
  });

  it('should try to remove media keys on load', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    const removeMediaKeys = global.sinon.spy(dashInstance, '_removeMediaKeys');
    dashInstance.load();
    removeMediaKeys.should.have.callCount(1);
    removeMediaKeys.restore();
    done();
  });
});

describe('DashAdapter: targetBuffer', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(done => {
    dashInstance.destroy().then(() => {
      video = null;
      dashInstance = null;
      done();
    });
  });

  it('should check targetBuffer in VOD far from end of stream', done => {
    try {
      dashInstance = DashAdapter.createAdapter(video, vodSource, config);
      video.addEventListener(EventType.PLAYING, () => {
        const targetBufferVal =
          dashInstance._shaka.getConfiguration().streaming.bufferingGoal +
          dashInstance._shaka.getManifest().presentationTimeline.getMaxSegmentDuration();
        Math.round(dashInstance.targetBuffer - targetBufferVal).should.equal(0);

        done();
      });
      dashInstance.load().then(() => {
        video.play();
      });
    } catch (e) {
      done(e);
    }
  });

  it('should check targetBuffer in VOD close to end of stream (time left to end of stream is less than targetBuffer)', done => {
    try {
      dashInstance = DashAdapter.createAdapter(video, vodSource, config);
      dashInstance._eventManager.listenOnce(video, EventType.PLAYING, () => {
        video.currentTime = video.duration - 1;
        dashInstance._eventManager.listenOnce(video, EventType.SEEKED, () => {
          Math.round(dashInstance.targetBuffer - video.duration + video.currentTime).should.equal(0);
          done();
        });
      });

      dashInstance.load().then(() => {
        video.play();
      });
    } catch (e) {
      done(e);
    }
  });

  it('should check targetBuffer in LIVE', done => {
    try {
      dashInstance = DashAdapter.createAdapter(
        video,
        liveSource,
        Utils.Object.mergeDeep(config, {playback: {options: {html5: {dash: {streaming: {bufferingGoal: 120}}}}}})
      );
      video.addEventListener(EventType.PLAYING, () => {
        let targetBufferVal = dashInstance._getLiveEdge() - video.currentTime;
        Math.round(dashInstance.targetBuffer - targetBufferVal).should.equal(0);
        done();
      });

      dashInstance.load().then(() => {
        video.play();
      });
    } catch (e) {
      done(e);
    }
  });

  it('should check targetBuffer in LIVE and restricted by bufferingGoal', done => {
    try {
      dashInstance = DashAdapter.createAdapter(
        video,
        liveSource,
        Utils.Object.mergeDeep(config, {playback: {options: {html5: {dash: {streaming: {bufferingGoal: 10}}}}}})
      );
      video.addEventListener(EventType.PLAYING, () => {
        let targetBufferVal = dashInstance._getLiveEdge() - video.currentTime;
        Math.round(dashInstance.targetBuffer - targetBufferVal).should.equal(0);
        done();
      });

      dashInstance.load().then(() => {
        video.play();
      });
    } catch (e) {
      done(e);
    }
  });
});

describe('DashAdapter: destroy', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(() => {
    dashInstance = null;
  });

  after(function () {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should preform cleanup', done => {
    dashInstance
      .load()
      .then(() => {
        try {
          dashInstance._loadPromise.should.be.exist;
          dashInstance._sourceObj.should.be.exist;
          dashInstance._config.should.be.exist;
          dashInstance._buffering = true;
        } catch (e) {
          return done(e);
        }
        dashInstance
          .destroy()
          .then(() => {
            try {
              (!dashInstance._loadPromise).should.be.true;
              (!dashInstance._sourceObj).should.be.true;
              Object.keys(dashInstance._config).length.should.equal(0);
              dashInstance._buffering.should.be.false;
              dashInstance._waitingSent.should.be.false;
              dashInstance._playingSent.should.be.false;
              Object.keys(dashInstance._adapterEventsBindings).length.should.equal(0);
              done();
            } catch (e) {
              done(e);
            }
          })
          .catch(e => {
            done(e);
          });
      })
      .catch(e => {
        done(e);
      });
  });
});

describe('DashAdapter: _getParsedTracks', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(done => {
    dashInstance
      .destroy()
      .then(() => {
        dashInstance = null;
        done();
      })
      .catch(e => {
        done(e);
      });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should return the parsed tracks', done => {
    dashInstance
      .load()
      .then(data => {
        let videoTracks = dashInstance._getVideoTracks();
        let audioTracks = dashInstance._getAudioTracks();
        let textTracks = dashInstance._shaka.getTextTracks();
        let totalTracksLength = videoTracks.length + audioTracks.length + textTracks.length;
        try {
          data.tracks.length.should.be.equal(totalTracksLength);
          data.tracks.map(track => {
            if (track instanceof VideoTrack) {
              track.id.should.equal(videoTracks[track.index].id);
              track.active.should.equal(videoTracks[track.index].active);
              track.bandwidth.should.equal(videoTracks[track.index].videoBandwidth);
            }
            if (track instanceof AudioTrack) {
              track.id.should.equal(audioTracks[track.index].id);
              track.active.should.equal(audioTracks[track.index].active);
              track.language.should.equal(audioTracks[track.index].language);
              (track.label === audioTracks[track.index].label).should.be.true;
            }
            if (track instanceof TextTrack) {
              const dashTrack = textTracks.find(textTrack => textTrack.id === track.id && textTrack.label === track.label);
              track.kind.should.equal(dashTrack.kind + 's');
              track.active.should.be.false;
              track.language.should.equal(dashTrack.language);
            }
          });
          done();
        } catch (e) {
          done(e);
        }
      })
      .catch(e => {
        done(e);
      });
  });

  it('should return empty array before loading', () => {
    let tracks = dashInstance._getParsedTracks();
    tracks.length.should.be.equal(0);
  });
});

describe('DashAdapter: check config overriding', () => {
  let video, dashInstance, config;
  const source = {
    drmData: wwDrmData
  };

  beforeEach(() => {
    video = document.createElement('video');
  });

  afterEach(done => {
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should set drm security level to HW', done => {
    config = {playback: {options: {html5: {dash: {drm: {advanced: {'com.widevine.alpha': {videoRobustness: 'HW_SECURE_ALL'}}}}}}}};
    DashAdapter._availableDrmProtocol.push(Widevine);
    dashInstance = DashAdapter.createAdapter(video, source, config);
    dashInstance._config.shakaConfig.drm.advanced['com.widevine.alpha'].videoRobustness.should.equal('HW_SECURE_ALL');
    done();
  });
});

describe('DashAdapter: selectVideoTrack', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {abr: {enabled: false}}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(done => {
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should select a new video track', done => {
    let error = false;
    let inactiveTrack;
    let onVideoTrackChanged = event => {
      try {
        if (!error) {
          dashInstance.removeEventListener('videotrackchanged', onVideoTrackChanged);
          event.payload.selectedVideoTrack.id.should.be.equal(inactiveTrack.id);
          done();
        }
      } catch (e) {
        done(e);
      }
    };
    dashInstance
      .load()
      .then(() => {
        dashInstance.addEventListener('videotrackchanged', onVideoTrackChanged);
        inactiveTrack = dashInstance._getParsedVideoTracks().filter(track => {
          return !track.active;
        })[0];
        dashInstance.selectVideoTrack(inactiveTrack);
        let activeTrack = dashInstance._getVideoTracks().filter(track => {
          return track.active;
        })[0];
        try {
          activeTrack.id.should.be.equal(inactiveTrack.id);
        } catch (e) {
          error = true;
          done(e);
        }
      })
      .catch(e => {
        error = true;
        done(e);
      });
  });

  it('should not change the already selected video track but disable ABR', done => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('videotrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedVideoTracks().filter(track => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectVideoTrack(activeTrack);
      activeTrack.id.should.be.equal(
        dashInstance._getVideoTracks().filter(track => {
          return track.active;
        })[0].id
      );
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000);
    });
  });

  it('should not change the selected and ABR enabling for non exist video track', done => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('videotrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedVideoTracks().filter(track => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectVideoTrack(new VideoTrack({index: 5}));
      activeTrack.id.should.be.equal(
        dashInstance._getVideoTracks().filter(track => {
          return track.active;
        })[0].id
      );
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000);
    });
  });

  it('should not change the selected and ABR enabling for audio track given', done => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('videotrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedVideoTracks().filter(track => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectVideoTrack(new AudioTrack({index: 0}));
      activeTrack.id.should.be.equal(
        dashInstance._getVideoTracks().filter(track => {
          return track.active;
        })[0].id
      );
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000);
    });
  });

  it('should not change the selected and ABR enabling for no video track given', done => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('videotrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedVideoTracks().filter(track => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectVideoTrack();
      activeTrack.id.should.be.equal(
        dashInstance._getVideoTracks().filter(track => {
          return track.active;
        })[0].id
      );
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000);
    });
  });
});

describe('DashAdapter: selectAudioTrack', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(done => {
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should select a new audio track', done => {
    dashInstance
      .load()
      .then(() => {
        dashInstance.addEventListener('audiotrackchanged', event => {
          try {
            event.payload.selectedAudioTrack.id.should.be.equal(inactiveTrack.id);
            done();
          } catch (e) {
            done(e);
          }
        });
        let inactiveTrack = dashInstance._getParsedAudioTracks().filter(track => {
          return !track.active;
        })[0];
        dashInstance.selectAudioTrack(inactiveTrack);
      })
      .catch(e => {
        done(e);
      });
  });

  it('should not change the already selected audio track', done => {
    dashInstance
      .load()
      .then(() => {
        dashInstance.addEventListener('audiotrackchanged', () => {
          eventIsFired = true;
        });
        const activeTrack = dashInstance._getParsedAudioTracks().filter(track => {
          return track.active;
        })[0];
        let eventIsFired = false;
        dashInstance.selectAudioTrack(activeTrack);
        const activeTrack2 = dashInstance._getParsedAudioTracks().filter(track => {
          return track.active;
        })[0];
        try {
          activeTrack.id.should.be.equal(activeTrack2.id);
        } catch (e) {
          return done(e);
        }
        setTimeout(() => {
          try {
            eventIsFired.should.be.false;
            done();
          } catch (e) {
            done(e);
          }
        }, 1000);
      })
      .catch(e => {
        done(e);
      });
  });

  it('should not change the selected for video track given', done => {
    dashInstance
      .load()
      .then(() => {
        dashInstance.addEventListener('audiotrackchanged', () => {
          eventIsFired = true;
        });
        const activeTrack = dashInstance._getParsedAudioTracks().filter(track => {
          return track.active;
        })[0];
        let eventIsFired = false;
        dashInstance.selectAudioTrack(new VideoTrack({index: 0}));
        const activeTrack2 = dashInstance._getParsedAudioTracks().filter(track => {
          return track.active;
        })[0];
        try {
          activeTrack.id.should.be.equal(activeTrack2.id);
        } catch (e) {
          return done(e);
        }
        setTimeout(() => {
          try {
            eventIsFired.should.be.false;
            done();
          } catch (e) {
            done(e);
          }
        }, 1000);
      })
      .catch(e => {
        done(e);
      });
  });

  it('should not change the selected for no audio track given', done => {
    dashInstance
      .load()
      .then(() => {
        dashInstance.addEventListener('audiotrackchanged', () => {
          eventIsFired = true;
        });
        const activeTrack = dashInstance._getParsedAudioTracks().filter(track => {
          return track.active;
        })[0];
        let eventIsFired = false;
        dashInstance.selectAudioTrack();
        const activeTrack2 = dashInstance._getParsedAudioTracks().filter(track => {
          return track.active;
        })[0];
        try {
          activeTrack.id.should.be.equal(activeTrack2.id);
        } catch (e) {
          return done(e);
        }
        setTimeout(() => {
          try {
            eventIsFired.should.be.false;
            done();
          } catch (e) {
            done(e);
          }
        }, 1000);
      })
      .catch(e => {
        done(e);
      });
  });
});

describe('DashAdapter: selectTextTrack', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(done => {
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should select a new text track', done => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', event => {
        event.payload.selectedTextTrack.language.should.be.equal(inactiveTrack.language);
        done();
      });
      let inactiveTrack = dashInstance._getParsedTextTracks().filter(track => {
        return !track.active;
      })[0];
      dashInstance.selectTextTrack(inactiveTrack);
      let activeTrack = dashInstance._shaka.getTextTracks().filter(track => {
        return track.active;
      })[0];
      activeTrack.language.should.be.equal(inactiveTrack.language);
    });
  });

  it('should not change the already selected text track', done => {
    let eventCounter = 0;
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventCounter++;
        activeTrack.active = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks()[0];
      dashInstance.selectTextTrack(activeTrack);
      dashInstance.selectTextTrack(activeTrack);
      activeTrack.language.should.be.equal(
        dashInstance._shaka.getTextTracks().filter(track => {
          return track.active;
        })[0].language
      );
      setTimeout(() => {
        eventCounter.should.equals(1);
        done();
      }, 1000);
    });
  });

  it('should not change the selected for video track given', done => {
    let eventCounter = 0;
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventCounter++;
        activeTrack.active = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks()[0];
      dashInstance.selectTextTrack(activeTrack);
      dashInstance.selectTextTrack(new VideoTrack({index: 0}));
      activeTrack.language.should.be.equal(
        dashInstance._shaka.getTextTracks().filter(track => {
          return track.active;
        })[0].language
      );
      setTimeout(() => {
        eventCounter.should.equals(1);
        done();
      }, 1000);
    });
  });

  it('should not change the selected for no text track given', done => {
    let eventCounter = 0;
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventCounter++;
        activeTrack.active = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks()[0];
      dashInstance.selectTextTrack(activeTrack);
      dashInstance.selectTextTrack();
      activeTrack.language.should.be.equal(
        dashInstance._shaka.getTextTracks().filter(track => {
          return track.active;
        })[0].language
      );
      setTimeout(() => {
        eventCounter.should.equals(1);
        done();
      }, 1000);
    });
  });

  it('should not change the selected for no subtitle or captions given', done => {
    let eventCounter = 0;
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventCounter++;
        activeTrack.active = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks()[0];
      dashInstance.selectTextTrack(activeTrack);
      dashInstance.selectTextTrack(new TextTrack({kind: 'metadata'}));
      activeTrack.language.should.be.equal(
        dashInstance._shaka.getTextTracks().filter(track => {
          return track.active;
        })[0].language
      );
      setTimeout(() => {
        eventCounter.should.equals(1);
        done();
      }, 1000);
    });
  });
});

describe('DashAdapter: enableAdaptiveBitrate', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {abr: {enabled: false}}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(done => {
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should enable ABR', done => {
    dashInstance
      .load()
      .then(() => {
        dashInstance._shaka.getConfiguration().abr.enabled.should.be.false;
        dashInstance.enableAdaptiveBitrate();
        dashInstance._shaka.getConfiguration().abr.enabled.should.be.true;
        dashInstance.isAdaptiveBitrateEnabled().should.be.true;
        done();
      })
      .catch(e => {
        done(e);
      });
  });

  it('should fire abr mode changed event', done => {
    let error = false;
    let mode = 'manual';
    let counter = 0;
    dashInstance.addEventListener('abrmodechanged', event => {
      event.payload.mode.should.equal(mode);
      counter++;
      if (!error && counter === 3) {
        done();
      }
    });
    dashInstance
      .load()
      .then(() => {
        mode = 'auto';
        dashInstance.enableAdaptiveBitrate();
        let inactiveTrack = dashInstance._getParsedVideoTracks().filter(track => {
          return !track.active;
        })[0];
        mode = 'manual';
        dashInstance.selectVideoTrack(inactiveTrack);
      })
      .catch(e => {
        error = true;
        done(e);
      });
  });
});

describe('DashAdapter: isLive', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(done => {
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should return false for VOD', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance
      .load()
      .then(() => {
        dashInstance.isLive().should.be.false;
        done();
      })
      .catch(e => {
        done(e);
      });
  });

  it('should return false for live before load', () => {
    dashInstance = DashAdapter.createAdapter(video, liveSource, config);
    dashInstance.isLive().should.be.false;
  });

  it('should return true for live', done => {
    dashInstance = DashAdapter.createAdapter(video, liveSource, config);
    dashInstance
      .load()
      .then(() => {
        dashInstance.isLive().should.be.true;
        done();
      })
      .catch(e => {
        done(e);
      });
  });

  it.skip('should return true for live + DVR', done => {
    dashInstance = DashAdapter.createAdapter(video, dvrSource, config);
    dashInstance
      .load()
      .then(() => {
        dashInstance.isLive().should.be.true;
        done();
      })
      .catch(e => {
        done(e);
      });
  });
});

describe('DashAdapter: _getLiveEdge', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(done => {
    dashInstance
      .destroy()
      .then(() => {
        dashInstance = null;
        done();
      })
      .catch(e => {
        done(e);
      });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should return the live edge', done => {
    dashInstance = DashAdapter.createAdapter(video, liveSource, config);
    dashInstance
      .load()
      .then(() => {
        try {
          Math.floor(Math.abs(dashInstance._getLiveEdge() - dashInstance._shaka.seekRange().end)).should.equal(0);
          done();
        } catch (e) {
          done(e);
        }
      })
      .catch(e => {
        done(e);
      });
  });
});

describe('DashAdapter: seekToLiveEdge', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(done => {
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should seek to live edge', done => {
    dashInstance = DashAdapter.createAdapter(video, liveSource, config);
    dashInstance
      .load()
      .then(() => {
        try {
          video.play().then(() => {
            video.currentTime = dashInstance._shaka.seekRange().start;
            const initialTimeShift = dashInstance._shaka.seekRange().end - video.currentTime;
            dashInstance.seekToLiveEdge();
            const timeShift = dashInstance._shaka.seekRange().end - video.currentTime;
            timeShift.should.be.lessThan(3);
            timeShift.should.be.lessThan(initialTimeShift);
            done();
          });
        } catch (e) {
          done(e);
        }
      })
      .catch(e => {
        done(e);
      });
  });

  it.skip('should seek to live edge - DVR', done => {
    dashInstance = DashAdapter.createAdapter(video, dvrSource, config);
    dashInstance
      .load()
      .then(() => {
        try {
          video.currentTime = dashInstance._shaka.seekRange().start;
          (dashInstance._shaka.seekRange().end - video.currentTime > 30).should.be.true;
          dashInstance.seekToLiveEdge();
          (dashInstance._shaka.seekRange().end - video.currentTime < 1).should.be.true;
          done();
        } catch (e) {
          done(e);
        }
      })
      .catch(e => {
        done(e);
      });
  });
});

describe('DashAdapter: _onBuffering', () => {
  let video, dashInstance, config, sandbox;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
    sandbox.restore();
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should dispatch waiting event when buffering is true', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance._videoElement.addEventListener(EventType.WAITING, () => {
      done();
    });
    dashInstance._onBuffering({buffering: true});
  });

  it('should not dispatch waiting event when buffering is true but it has already been sent by the video element', done => {
    let waitingCount = 0;
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance._init();
    dashInstance._videoElement.addEventListener(EventType.WAITING, () => {
      waitingCount++;
      waitingCount.should.equals(1);
      setTimeout(done, 0);
    });
    dashInstance._videoElement.dispatchEvent(new window.Event(EventType.WAITING));
    dashInstance._onBuffering({buffering: true});
  });

  it('should dispatch playing event when buffering is false and video is playing after waiting event', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    let hasPlaying = false;
    let onPlaying = () => {
      if (hasPlaying) {
        dashInstance._videoElement.removeEventListener(EventType.PLAYING, onPlaying);
        done();
      } else {
        hasPlaying = true;
        dashInstance._onBuffering({buffering: true});
      }
    };
    const onWaiting = () => {
      dashInstance._videoElement.removeEventListener(EventType.WAITING, onWaiting);
      dashInstance._onBuffering({buffering: false});
    };
    dashInstance._videoElement.addEventListener(EventType.PLAYING, onPlaying);
    dashInstance._videoElement.addEventListener(EventType.WAITING, onWaiting);
    dashInstance
      .load()
      .then(() => {
        dashInstance._videoElement.play();
      })
      .catch(e => {
        done(e);
      });
  });

  it('should not dispatch playing event when buffering is false and video is playing but it has already been sent by the video element', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    sandbox.stub(dashInstance._videoElement, 'paused').get(() => false);
    let t = setTimeout(done, 0);
    dashInstance._videoElement.addEventListener(EventType.PLAYING, () => {
      done(new Error('test fail'));
      clearTimeout(t);
    });
    dashInstance._onPlaying();
    dashInstance._onBuffering({buffering: false});
  });

  it('should not dispatch playing event when buffering is false but video is paused', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    let t = setTimeout(done, 0);
    dashInstance._videoElement.addEventListener(EventType.PLAYING, () => {
      done(new Error('test fail'));
      clearTimeout(t);
    });
    dashInstance._onBuffering({buffering: false});
  });
});

describe('DashAdapter: _onPlaying', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should dispatch waiting event when buffering is true', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance._videoElement.addEventListener(EventType.WAITING, () => {
      done();
    });
    dashInstance._buffering = true;
    dashInstance._onPlaying();
  });

  it('should not dispatch waiting event when buffering is false', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    let t = setTimeout(done, 0);
    dashInstance._videoElement.addEventListener(EventType.WAITING, () => {
      done(new Error('test fail'));
      clearTimeout(t);
    });
    dashInstance._onPlaying();
  });
});

describe('DashAdapter: getStartTimeOfDvrWindow', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(done => {
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should return 0 for VOD', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance
      .load()
      .then(() => {
        try {
          dashInstance.getStartTimeOfDvrWindow().should.equal(0);
          done();
        } catch (e) {
          done(e);
        }
      })
      .catch(e => {
        done(e);
      });
  });

  it('should return the start time of Dvr window for live', done => {
    dashInstance = DashAdapter.createAdapter(video, liveSource, config);
    video.addEventListener(EventType.LOADED_DATA, () => {
      setTimeout(() => {
        try {
          Math.floor(dashInstance.getStartTimeOfDvrWindow()).should.equal(
            Math.floor(dashInstance._shaka.seekRange().start + dashInstance._shaka.getConfiguration().streaming.safeSeekOffset)
          );
          done();
        } catch (e) {
          done(e);
        }
      }, (dashInstance.getSegmentDuration() + 2) * 1000);
    });
    dashInstance.load();
  });
});

describe('DashAdapter: request filter', () => {
  let video, dashInstance, config, sandbox;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
    sandbox = sinon.createSandbox();
  });

  afterEach(done => {
    sandbox.restore();
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  const validateFilterError = e => {
    e.severity.should.equal(Error.Severity.CRITICAL);
    e.category.should.equal(Error.Category.NETWORK);
    e.code.should.equal(Error.Code.REQUEST_FILTER_ERROR);
    e.data[0].should.equal('error');
  };

  it('should pass the params to the request filter', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      vodSource,
      Utils.Object.mergeDeep(config, {
        network: {
          requestFilter: function (type, request) {
            try {
              type.should.equal(RequestType.MANIFEST);
              request.url.should.equal(vodSource.url);
              Object.prototype.hasOwnProperty.call(request, 'body').should.be.true;
              request.headers.should.be.exist;
              done();
            } catch (e) {
              done(e);
            }
          }
        }
      })
    );
    dashInstance.load();
  });

  it('should handle error thrown from void filter', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      vodSource,
      Utils.Object.mergeDeep(config, {
        network: {
          requestFilter: function () {
            throw 'error';
          }
        }
      })
    );
    dashInstance.load().catch(e => {
      try {
        validateFilterError(e);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('should handle error thrown from promise filter', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      vodSource,
      Utils.Object.mergeDeep(config, {
        network: {
          requestFilter: function () {
            return new Promise(() => {
              throw 'error';
            });
          }
        }
      })
    );
    dashInstance.load().catch(e => {
      try {
        validateFilterError(e);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('should handle error rejected from promise filter', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      vodSource,
      Utils.Object.mergeDeep(config, {
        network: {
          requestFilter: function () {
            return new Promise((resolve, reject) => {
              reject('error');
            });
          }
        }
      })
    );
    dashInstance.load().catch(e => {
      try {
        validateFilterError(e);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('should handle error rejected from promise filter - segment', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      vodSource,
      Utils.Object.mergeDeep(config, {
        network: {
          requestFilter: function (type) {
            if (type === RequestType.SEGMENT) {
              return new Promise((resolve, reject) => {
                reject('error');
              });
            }
          }
        }
      })
    );
    dashInstance.addEventListener(EventType.ERROR, event => {
      try {
        validateFilterError(event.payload);
        done();
      } catch (e) {
        done(e);
      }
    });
    dashInstance.load();
  });

  describe('http request', () => {
    after(() => {
      shaka.net.NetworkingEngine.registerScheme('http', shaka.net.HttpFetchPlugin.parse, shaka.net.NetworkingEngine.PluginPriority.PREFERRED);
      shaka.net.NetworkingEngine.registerScheme('https', shaka.net.HttpFetchPlugin.parse, shaka.net.NetworkingEngine.PluginPriority.PREFERRED);
    });

    it('should apply void filter for manifest', done => {
      dashInstance = DashAdapter.createAdapter(
        video,
        vodSource,
        Utils.Object.mergeDeep(config, {
          network: {
            requestFilter: function (type, request) {
              if (type === RequestType.MANIFEST) {
                request.url += '?test';
              }
            }
          }
        })
      );
      const httpFetchRequest = url => {
        try {
          url.indexOf('?test').should.be.gt(-1);
          done();
        } catch (e) {
          done(e);
        }
      };
      shaka.net.NetworkingEngine.registerScheme('http', httpFetchRequest, shaka.net.NetworkingEngine.PluginPriority.PREFERRED);
      shaka.net.NetworkingEngine.registerScheme('https', httpFetchRequest, shaka.net.NetworkingEngine.PluginPriority.PREFERRED);
      dashInstance.load();
    });

    it('should apply promise filter for manifest', done => {
      dashInstance = DashAdapter.createAdapter(
        video,
        vodSource,
        Utils.Object.mergeDeep(config, {
          network: {
            requestFilter: function (type, request) {
              if (type === RequestType.MANIFEST) {
                return new Promise(resolve => {
                  request.url += '?test';
                  resolve(request);
                });
              }
            }
          }
        })
      );
      const httpFetchRequest = url => {
        try {
          url.indexOf('?test').should.be.gt(-1);
          done();
        } catch (e) {
          done(e);
        }
      };
      shaka.net.NetworkingEngine.registerScheme('http', httpFetchRequest, shaka.net.NetworkingEngine.PluginPriority.PREFERRED);
      shaka.net.NetworkingEngine.registerScheme('https', httpFetchRequest, shaka.net.NetworkingEngine.PluginPriority.PREFERRED);
      dashInstance.load();
    });
  });
});

describe('DashAdapter: response filter', () => {
  let video, dashInstance, config, sandbox;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
    sandbox = sinon.createSandbox();
  });

  afterEach(done => {
    sandbox.restore();
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  const validateFilterError = e => {
    e.severity.should.equal(Error.Severity.CRITICAL);
    e.category.should.equal(Error.Category.NETWORK);
    e.code.should.equal(Error.Code.RESPONSE_FILTER_ERROR);
    e.data[0].should.equal('error');
  };

  it('should pass the params to the response filter', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      vodSource,
      Utils.Object.mergeDeep(config, {
        network: {
          responseFilter: function (type, response) {
            try {
              type.should.equal(RequestType.MANIFEST);
              response.url.should.equal(vodSource.url);
              response.originalUrl.should.equal(vodSource.url);
              response.data.byteLength.should.be.exist;
              response.headers['content-type'].should.equal('application/dash+xml');
              done();
            } catch (e) {
              done(e);
            }
          }
        }
      })
    );
    dashInstance.load();
  });

  it('should apply void filter for manifest', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      vodSource,
      Utils.Object.mergeDeep(config, {
        network: {
          responseFilter: function (type, response) {
            if (type === RequestType.MANIFEST) {
              response.data['test'] = 'test';
            }
          }
        }
      })
    );
    sandbox.stub(window, 'Uint8Array').callsFake(value => {
      try {
        if (value instanceof ArrayBuffer) {
          value['test'].should.equal('test');
          done();
        }
      } catch (e) {
        done(e);
      }
    });
    dashInstance.load();
  });

  it('should apply promise filter for manifest', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      vodSource,
      Utils.Object.mergeDeep(config, {
        network: {
          responseFilter: function (type, response) {
            if (type === RequestType.MANIFEST) {
              return new Promise(resolve => {
                response.data['test'] = 'test';
                resolve(response);
              });
            }
          }
        }
      })
    );
    sandbox.stub(window, 'Uint8Array').callsFake(value => {
      try {
        if (value instanceof ArrayBuffer) {
          value['test'].should.equal('test');
          done();
        }
      } catch (e) {
        done(e);
      }
    });
    dashInstance.load();
  });

  it('should handle error thrown from void filter', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      vodSource,
      Utils.Object.mergeDeep(config, {
        network: {
          responseFilter: function () {
            throw 'error';
          }
        }
      })
    );
    dashInstance.load().catch(e => {
      try {
        validateFilterError(e);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('should handle error thrown from promise filter', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      vodSource,
      Utils.Object.mergeDeep(config, {
        network: {
          responseFilter: function () {
            return new Promise(() => {
              throw 'error';
            });
          }
        }
      })
    );
    dashInstance.load().catch(e => {
      try {
        validateFilterError(e);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it('should handle error rejected from promise filter', done => {
    dashInstance = DashAdapter.createAdapter(
      video,
      vodSource,
      Utils.Object.mergeDeep(config, {
        network: {
          responseFilter: function () {
            return new Promise((resolve, reject) => {
              reject('error');
            });
          }
        }
      })
    );
    dashInstance.load().catch(e => {
      try {
        validateFilterError(e);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});

describe('DashAdapter: in-stream thumbnails', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(done => {
    dashInstance.destroy().then(() => {
      dashInstance = null;
      done();
    });
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should load vod stream successfully', done => {
    dashInstance = DashAdapter.createAdapter(video, vodInStreamThumbnailSource, config);
    dashInstance
      .load()
      .then(result => {
        try {
          dashInstance._shaka.should.exist;
          dashInstance._config.should.exist;
          dashInstance._videoElement.should.exist;
          dashInstance._sourceObj.should.exist;
          dashInstance._manifestParser.should.exist;
          dashInstance._thumbnailController.should.exist;
          result.tracks.filter(t => t instanceof ImageTrack).should.have.lengthOf(2);
          dashInstance._manifestParser.hasImageSet().should.be.true;
          dashInstance._manifestParser.getImageSet().should.exist;
          dashInstance._manifestParser._adaptationSets.should.have.lengthOf(1);
          dashInstance._thumbnailController.getTracks().should.have.lengthOf(2);
          dashInstance.getThumbnail(1000).should.be.instanceOf(ThumbnailInfo);
          done();
        } catch (e) {
          done(e);
        }
      })
      .catch(done);
  });

  it.skip('should load dvr stream successfully', done => {
    dashInstance = DashAdapter.createAdapter(video, dvrInStreamThumbnailSource, config);
    dashInstance
      .load()
      .then(result => {
        try {
          dashInstance._shaka.should.exist;
          dashInstance._config.should.exist;
          dashInstance._videoElement.should.exist;
          dashInstance._sourceObj.should.exist;
          dashInstance._manifestParser.should.exist;
          dashInstance._thumbnailController.should.exist;
          result.tracks.filter(t => t instanceof ImageTrack).should.have.lengthOf(1);
          dashInstance._manifestParser.hasImageSet().should.be.true;
          dashInstance._manifestParser.getImageSet().should.exist;
          dashInstance._manifestParser._adaptationSets.should.have.lengthOf(1);
          dashInstance._thumbnailController.getTracks().should.have.lengthOf(1);
          dashInstance.getThumbnail(1000).should.be.instanceOf(ThumbnailInfo);
          done();
        } catch (e) {
          done(e);
        }
      })
      .catch(done);
  });
});

describe('DashAdapter: on emsg', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement('video');
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should dispatch TIMED_METADATA_ADDED event on emsg and push to metadata track', done => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    const startTime = 10;
    const endTime = 20;
    const id = 'id';
    const info1 = 'info1';
    const info2 = 'info12';
    const type = 'emsg';
    const timedMetadata = {
      startTime,
      endTime,
      id,
      type,
      metadata: {info1, info2}
    };
    dashInstance.addEventListener(EventType.TIMED_METADATA_ADDED, event => {
      try {
        event.payload.cues[0].should.deep.equal(timedMetadata);
        createTimedMetadata(video.textTracks[0].cues[0]).should.deep.equal(timedMetadata);
        done();
      } catch (e) {
        done(e);
      }
    });
    dashInstance._onEmsg({
      detail: {
        startTime,
        endTime,
        id,
        info1,
        info2
      },
      type
    });
  });
});
