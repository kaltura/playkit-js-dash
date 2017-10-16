import loadPlayer from 'playkit-js'
import DashAdapter from '../../src/dash-adapter';
import * as TestUtils from 'playkit-js/test/src/utils/test-utils'
import {VideoTrack, AudioTrack, TextTrack} from 'playkit-js';
import Widevine from '../../src/drm/widevine'
import PlayReady from '../../src/drm/playready'

const targetId = 'player-placeholder_dash-adapter.spec';

let vodSource = {
  mimetype: "application/dash+xml",
  url: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"
};

let liveSource = {
  mimetype: "application/dash+xml",
  url: "https://wowzaec2demo.streamlock.net/live/bigbuckbunny/manifest_mpm4sav_mvtime.mpd"
};

let dvrSource = {
  mimetype: "application/dash+xml",
  url: "http://klive-a.akamaihd.net/dc-1/live/dash/p/1897241/e/1_gffgxm38/t/e83cor13pmTGTQ7kPZiopg/manifest.mpd"
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
    tracks.filter((track) => {
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
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
    DashAdapter._drmProtocol = null;
  });

  it('should return true since widevine can play drm', function () {
    sandbox.stub(Widevine, 'canPlayDrm', () => true);
    sandbox.stub(PlayReady, 'canPlayDrm', () => false);
    DashAdapter.canPlayDrm().should.be.true;
    DashAdapter._drmProtocol.should.equal(Widevine);
  });

  it('should return true since playready can play drm', function () {
    sandbox.stub(Widevine, 'canPlayDrm', () => false);
    sandbox.stub(PlayReady, 'canPlayDrm', () => true);
    DashAdapter.canPlayDrm().should.be.true;
    DashAdapter._drmProtocol.should.equal(PlayReady);
  });

  it('should return false since no drm can be played', function () {
    sandbox.stub(Widevine, 'canPlayDrm', () => false);
    sandbox.stub(PlayReady, 'canPlayDrm', () => false);
    DashAdapter.canPlayDrm().should.be.false;
    (DashAdapter._drmProtocol === null).should.be.true;
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
    DashAdapter.canPlayType("").should.be.false;
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
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should create all dash adapter properties', () => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance.load().then(() => {
      dashInstance._shaka.should.exist;
      dashInstance._config.should.exist;
      dashInstance._videoElement.should.exist;
      dashInstance._sourceObj.should.exist;
    });
  });

  it('should success', (done) => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance.load().then(() => {
      done();
    });
  });

  it('should failed', (done) => {
    dashInstance = DashAdapter.createAdapter(video, {
      mimetype: 'application/dash+xml',
      url: 'some/corrupted/url'
    }, config);

    dashInstance.load().catch((error) => {
      error.should.be.exist;
      done();
    });
  });
});

describe('DashAdapter: destroy', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(() => {
    dashInstance = null;
  });

  after(function () {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should destroyed', (done) => {
    dashInstance.load().then(() => {
      dashInstance._loadPromise.should.be.exist;
      dashInstance._sourceObj.should.be.exist;
      dashInstance._config.should.be.exist;
      dashInstance._buffering = true;
      dashInstance.destroy();
      (!dashInstance._loadPromise).should.be.true;
      (!dashInstance._sourceObj).should.be.true;
      (!dashInstance._config).should.be.true;
      dashInstance._buffering.should.be.false;
      done();
    });
  });
});

describe('DashAdapter: _getParsedTracks', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should return the parsed tracks', (done) => {
    dashInstance.load().then((data) => {
      let videoTracks = dashInstance._getVideoTracks();
      let audioTracks = dashInstance._getAudioTracks();
      let textTracks = dashInstance._shaka.getTextTracks();
      let totalTracksLength = videoTracks.length + audioTracks.length + textTracks.length;
      data.tracks.length.should.be.equal(totalTracksLength);
      data.tracks.map((track) => {
        if (track instanceof VideoTrack) {
          track.id.should.equal(videoTracks[track.index].id);
          track.active.should.equal(videoTracks[track.index].active);
          track.bandwidth.should.equal(videoTracks[track.index].bandwidth);
          (track.label === videoTracks[track.index].label).should.be.true;
        }
        if (track instanceof AudioTrack) {
          track.id.should.equal(audioTracks[track.index].id);
          track.active.should.equal(audioTracks[track.index].active);
          track.language.should.equal(audioTracks[track.index].language);
          (track.label === audioTracks[track.index].label).should.be.true;
        }
        if (track instanceof TextTrack) {
          track.kind.should.equal(textTracks[track.index].kind + 's');
          track.active.should.be.false;
          track.language.should.equal(textTracks[track.index].language);
          (track.label === textTracks[track.index].label).should.be.true;
        }
      });
      done();
    });
  });

  it('should return empty array before loading', () => {
    let tracks = dashInstance._getParsedTracks();
    tracks.length.should.be.equal(0);
  });
});

describe('DashAdapter: selectVideoTrack', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {abr: {enabled: false}}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should select a new video track', (done) => {
    let inactiveTrack;
    let onVideoTrackChanged = (event) => {
      dashInstance.removeEventListener('videotrackchanged', onVideoTrackChanged);
      event.payload.selectedVideoTrack.id.should.be.equal(inactiveTrack.id);
      done();
    };
    dashInstance.load().then(() => {
      dashInstance.addEventListener('videotrackchanged', onVideoTrackChanged);
      inactiveTrack = dashInstance._getParsedVideoTracks().filter((track) => {
        return !track.active;
      })[0];
      dashInstance.selectVideoTrack(inactiveTrack);
      let activeTrack = dashInstance._getVideoTracks().filter((track) => {
        return track.active;
      })[0];
      activeTrack.id.should.be.equal(inactiveTrack.id);
    });
  });

  it('should not change the already selected video track but disable ABR', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('videotrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedVideoTracks().filter((track) => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectVideoTrack(activeTrack);
      activeTrack.id.should.be.equal(dashInstance._getVideoTracks().filter((track) => {
        return track.active;
      })[0].id);
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000)
    });
  });

  it('should not change the selected and ABR enabling for non exist video track', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('videotrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedVideoTracks().filter((track) => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectVideoTrack(new VideoTrack({index: 5}));
      activeTrack.id.should.be.equal(dashInstance._getVideoTracks().filter((track) => {
        return track.active;
      })[0].id);
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000)
    });
  });

  it('should not change the selected and ABR enabling for audio track given', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('videotrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedVideoTracks().filter((track) => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectVideoTrack(new AudioTrack({index: 0}));
      activeTrack.id.should.be.equal(dashInstance._getVideoTracks().filter((track) => {
        return track.active;
      })[0].id);
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000)
    });
  });

  it('should not change the selected and ABR enabling for no video track given', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('videotrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedVideoTracks().filter((track) => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectVideoTrack();
      activeTrack.id.should.be.equal(dashInstance._getVideoTracks().filter((track) => {
        return track.active;
      })[0].id);
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000)
    });
  });
});

describe('DashAdapter: selectAudioTrack', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should select a new audio track', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('audiotrackchanged', (event) => {
        event.payload.selectedAudioTrack.id.should.be.equal(inactiveTrack.id);
        done();
      });
      let inactiveTrack = dashInstance._getParsedAudioTracks().filter((track) => {
        return !track.active;
      })[0];
      dashInstance.selectAudioTrack(inactiveTrack);
    });
  });

  it('should not change the already selected audio track', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('audiotrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedAudioTracks().filter((track) => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectAudioTrack(activeTrack);
      activeTrack.id.should.be.equal(dashInstance._shaka.getVariantTracks().filter((track) => {
        return track.active;
      })[0].id);
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000)
    });
  });

  it('should not change the selected for video track given', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('audiotrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedAudioTracks().filter((track) => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectAudioTrack(new VideoTrack({index: 0}));
      activeTrack.id.should.be.equal(dashInstance._shaka.getVariantTracks().filter((track) => {
        return track.active;
      })[0].id);
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000)
    });
  });

  it('should not change the selected for no audio track given', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('audiotrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedAudioTracks().filter((track) => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectAudioTrack();
      activeTrack.id.should.be.equal(dashInstance._shaka.getVariantTracks().filter((track) => {
        return track.active;
      })[0].id);
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000)
    });
  });
});

describe('DashAdapter: selectTextTrack', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should select a new text track', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', (event) => {
        event.payload.selectedTextTrack.language.should.be.equal(inactiveTrack.language);
        done();
      });
      let inactiveTrack = dashInstance._getParsedTextTracks().filter((track) => {
        return !track.active;
      })[0];
      dashInstance.selectTextTrack(inactiveTrack);
      let activeTrack = dashInstance._shaka.getTextTracks().filter((track) => {
        return track.active;
      })[0];
      activeTrack.language.should.be.equal(inactiveTrack.language);
    });
  });

  it('should not change the already selected text track', (done) => {
    let eventCounter = 0;
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventCounter++;
        activeTrack.active = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks()[0];
      dashInstance.selectTextTrack(activeTrack);
      dashInstance.selectTextTrack(activeTrack);
      activeTrack.language.should.be.equal(dashInstance._shaka.getTextTracks().filter((track) => {
        return track.active;
      })[0].language);
      setTimeout(() => {
        eventCounter.should.equals(1);
        done();
      }, 1000)
    });
  });

  it('should not change the selected for video track given', (done) => {
    let eventCounter = 0;
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventCounter++;
        activeTrack.active = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks()[0];
      dashInstance.selectTextTrack(activeTrack);
      dashInstance.selectTextTrack(new VideoTrack({index: 0}));
      activeTrack.language.should.be.equal(dashInstance._shaka.getTextTracks().filter((track) => {
        return track.active;
      })[0].language);
      setTimeout(() => {
        eventCounter.should.equals(1);
        done();
      }, 1000)
    });
  });

  it('should not change the selected for no text track given', (done) => {
    let eventCounter = 0;
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventCounter++;
        activeTrack.active = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks()[0];
      dashInstance.selectTextTrack(activeTrack);
      dashInstance.selectTextTrack();
      activeTrack.language.should.be.equal(dashInstance._shaka.getTextTracks().filter((track) => {
        return track.active;
      })[0].language);
      setTimeout(() => {
        eventCounter.should.equals(1);
        done();
      }, 1000)
    });
  });

  it('should not change the selected for no subtitle or captions given', (done) => {
    let eventCounter = 0;
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventCounter++;
        activeTrack.active = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks()[0];
      dashInstance.selectTextTrack(activeTrack);
      dashInstance.selectTextTrack(new TextTrack({kind: 'metadata'}));
      activeTrack.language.should.be.equal(dashInstance._shaka.getTextTracks().filter((track) => {
        return track.active;
      })[0].language);
      setTimeout(() => {
        eventCounter.should.equals(1);
        done();
      }, 1000)
    });
  });
});

describe('DashAdapter: enableAdaptiveBitrate', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {abr: {enabled: false}}}}}};
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should enable ABR', () => {
    dashInstance.load().then(() => {
      dashInstance._shaka.getConfiguration().abr.enabled.should.be.false;
      dashInstance.enableAdaptiveBitrate();
      dashInstance._shaka.getConfiguration().abr.enabled.should.be.true;
      dashInstance.isAdaptiveBitrateEnabled().should.be.true;
    });
  });

  it('should fire abr mode changed event', (done) => {
    let mode = 'manual';
    let counter = 0;
    dashInstance.addEventListener('abrmodechanged', (event) => {
      event.payload.mode.should.equal(mode);
      counter++;
      if (counter === 3) {
        done();
      }
    });
    dashInstance.load().then(() => {
      mode = 'auto';
      dashInstance.enableAdaptiveBitrate();
      let inactiveTrack = dashInstance._getParsedVideoTracks().filter((track) => {
        return !track.active;
      })[0];
      mode = 'manual';
      dashInstance.selectVideoTrack(inactiveTrack);
    });
  });
});

describe('DashAdapter: isLive', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should return false for VOD', (done) => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance.load().then(() => {
      dashInstance.isLive().should.be.false;
      done();
    });
  });

  it('should return false for live before load', () => {
    dashInstance = DashAdapter.createAdapter(video, liveSource, config);
    dashInstance.isLive().should.be.false;
  });

  it('should return true for live', (done) => {
    dashInstance = DashAdapter.createAdapter(video, liveSource, config);
    dashInstance.load().then(() => {
      dashInstance.isLive().should.be.true;
      done();
    });
  });

  it.skip('should return true for live + DVR', (done) => {
    dashInstance = DashAdapter.createAdapter(video, dvrSource, config);
    dashInstance.load().then(() => {
      dashInstance.isLive().should.be.true;
      done();
    });
  });
});

describe('DashAdapter: seekToLiveEdge', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should seek to live edge', (done) => {
    dashInstance = DashAdapter.createAdapter(video, liveSource, config);
    dashInstance.load().then(() => {
      video.currentTime = dashInstance._shaka.seekRange().start;
      ((dashInstance._shaka.seekRange().end - video.currentTime) > 30).should.be.true;
      dashInstance.seekToLiveEdge();
      ((dashInstance._shaka.seekRange().end - video.currentTime) < 1).should.be.true;
      done();
    });
  });

  it.skip('should seek to live edge - DVR', (done) => {
    dashInstance = DashAdapter.createAdapter(video, dvrSource, config);
    dashInstance.load().then(() => {
      video.currentTime = dashInstance._shaka.seekRange().start;
      ((dashInstance._shaka.seekRange().end - video.currentTime) > 30).should.be.true;
      dashInstance.seekToLiveEdge();
      ((dashInstance._shaka.seekRange().end - video.currentTime) < 1).should.be.true;
      done();
    });
  });
});

describe('DashAdapter: get currentTime', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should return video tag current time for VOD', (done) => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance.load().then(() => {
      dashInstance.currentTime.should.be.equal(video.currentTime);
      video.currentTime += 15;
      dashInstance.currentTime.should.be.equal(video.currentTime);
      done();
    });
  });

  it('should return live current time for live', (done) => {
    dashInstance = DashAdapter.createAdapter(video, liveSource, config);
    dashInstance.load().then(() => {
      dashInstance.currentTime.should.be.equal(video.currentTime - dashInstance._shaka.seekRange().start);
      video.currentTime += 15;
      dashInstance.currentTime.should.be.equal(video.currentTime - dashInstance._shaka.seekRange().start);
      done();
    });
  });

  it.skip('should return live current time for live + DVR', (done) => {
    dashInstance = DashAdapter.createAdapter(video, dvrSource, config);
    dashInstance.load().then(() => {
      dashInstance.currentTime.should.be.equal(video.currentTime - dashInstance._shaka.seekRange().start);
      video.currentTime += 15;
      dashInstance.currentTime.should.be.equal(video.currentTime - dashInstance._shaka.seekRange().start);
      done();
    });
  });
});

describe('DashAdapter: set currentTime', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should set current time for VOD', (done) => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance.load().then(() => {
      let ct = video.currentTime;
      dashInstance.currentTime += 15;
      video.currentTime.should.be.equal(ct + 15);
      done();
    });
  });

  it('should set live current time for live', (done) => {
    dashInstance = DashAdapter.createAdapter(video, liveSource, config);
    dashInstance.load().then(() => {
      let ct = video.currentTime;
      dashInstance.currentTime += 15;
      video.currentTime.should.be.equal(ct + 15);
      done();
    });
  });

  it.skip('should set live current time for live + DVR', (done) => {
    dashInstance = DashAdapter.createAdapter(video, dvrSource, config);
    dashInstance.load().then(() => {
      let ct = video.currentTime;
      dashInstance.currentTime += 15;
      video.currentTime.should.be.equal(ct + 15);
      done();
    });
  });
});

describe('DashAdapter: get duration', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should return video tag duration for VOD', (done) => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance.load().then(() => {
      dashInstance.duration.should.be.equal(video.duration);
      done();
    });
  });

  it('should return live duration for live', (done) => {
    dashInstance = DashAdapter.createAdapter(video, liveSource, config);
    dashInstance.load().then(() => {
      dashInstance.duration.should.be.equal(dashInstance._shaka.seekRange().end - dashInstance._shaka.seekRange().start);
      done();
    });
  });

  it.skip('should return live duration for live + DVR', (done) => {
    dashInstance = DashAdapter.createAdapter(video, dvrSource, config);
    dashInstance.load().then(() => {
      dashInstance.duration.should.be.equal(dashInstance._shaka.seekRange().end - dashInstance._shaka.seekRange().start);
      done();
    });
  });
});

describe('DashAdapter: _onBuffering', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should dispatch waiting event when buffering is true', (done) => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance._videoElement.addEventListener('waiting', () => {
      done();
    });
    dashInstance._onBuffering({buffering: true});
  });

  it('should dispatch playing event when buffering is false and video is playing', (done) => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    let hasPlaying = false;
    let onPlaying = () => {
      if (hasPlaying) {
        dashInstance._videoElement.removeEventListener('playing', onPlaying);
        done();
      } else {
        hasPlaying = true;
        dashInstance._onBuffering({buffering: false});
      }
    };
    dashInstance._videoElement.addEventListener('playing', onPlaying);
    dashInstance.load().then(() => {
      dashInstance._videoElement.play();
    });
  });

  it('should not dispatch playing event when buffering is false but video is paused', (done) => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    let t = setTimeout(done, 0);
    dashInstance._videoElement.addEventListener('playing', () => {
      done(new Error("test fail"));
      clearTimeout(t);
    });
    dashInstance._onBuffering({buffering: false});
  });
});

describe('DashAdapter: _onPlaying', () => {
  let video, dashInstance, config;

  beforeEach(() => {
    video = document.createElement("video");
    config = {playback: {options: {html5: {dash: {}}}}};
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should dispatch waiting event when buffering is true', (done) => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    dashInstance._videoElement.addEventListener('waiting', () => {
      done();
    });
    dashInstance._buffering = true;
    dashInstance._onPlaying();
  });

  it('should not dispatch waiting event when buffering is false', (done) => {
    dashInstance = DashAdapter.createAdapter(video, vodSource, config);
    let t = setTimeout(done, 0);
    dashInstance._videoElement.addEventListener('waiting', () => {
      done(new Error("test fail"));
      clearTimeout(t);
    });
    dashInstance._onPlaying();
  });
});



