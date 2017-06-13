import playkit from 'playkit-js'
//eslint-disable-next-line no-unused-vars
import DashAdapter from '../../src/dash-adapter';
import * as TestUtils from 'playkit-js/test/src/utils/test-utils'
import {VideoTrack, AudioTrack, TextTrack} from 'playkit-js';

let source = {
  mimetype: "application/dash+xml",
  url: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"
};
let config = {abr: {enabled: false}};

describe.skip('DashAdapter [debugging and testing manually]', () => {

  let player, tracks, videoTracks, textTracks, audioTracks;

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
    player = playkit({
      sources: [source]
    });
    player.load().then(() => {
      displayTracksOnScreen();
      player.play();
    });
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

describe('DashAdapter: name', () => {
  it('should be named DashAdapter', function () {
    DashAdapter.name.should.equal('DashAdapter');
  });
});

describe('DashAdapter: constructor', () => {
  let video;
  let dashInstance;

  before(() => {
    video = document.createElement('video');
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  beforeEach(() => {
    dashInstance = DashAdapter.createAdapter(video, {url: ''}, {});
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  it('should create all dash adapter properties', () => {
    dashInstance._shaka.should.exist;
    dashInstance._config.should.exist;
    dashInstance._videoElement.should.exist;
    dashInstance._sourceObj.should.exist;
  });
});

describe('DashAdapter: load', () => {
  let video, dashInstance;

  beforeEach(() => {
    video = document.createElement("video");
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should success', (done) => {
    dashInstance = DashAdapter.createAdapter(video, source, {});

    dashInstance.load().then(() => {
      done();
    });
  });

  it('should failed', (done) => {
    dashInstance = DashAdapter.createAdapter(video, {
      mimetype: 'application/dash+xml',
      url: 'some corrupted_url'
    }, {});

    dashInstance.load().catch((error) => {
      error.should.be.exist;
      done();
    });
  });
});

describe('DashAdapter: destroy', () => {
  let video, dashInstance;

  beforeEach(() => {
    video = document.createElement("video");
    dashInstance = DashAdapter.createAdapter(video, source, {});
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
      dashInstance.destroy();
      (!dashInstance._loadPromise).should.be.true;
      (!dashInstance._sourceObj).should.be.true;
      (!dashInstance._config).should.be.true;
      done();
    });
  });
});

describe('DashAdapter: _getParsedTracks', () => {
  let video;
  let dashInstance;

  beforeEach(() => {
    video = document.createElement("video");
    dashInstance = DashAdapter.createAdapter(video, source, {});
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
          track.active.should.equal(textTracks[track.index].active);
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
  let video;
  let dashInstance;

  beforeEach(() => {
    video = document.createElement("video");
    dashInstance = DashAdapter.createAdapter(video, source, config);
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should select a new video track', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('videotrackchanged', (event) => {
        event.payload.selectedVideoTrack.id.should.be.equal(inactiveTrack.id);
        done();
      });
      let inactiveTrack = dashInstance._getParsedVideoTracks().filter((track) => {
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
    //TODO this is a bug in shaka which fires 'adaptation' when disabling adaptation. see https://github.com/google/shaka-player/issues/856
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
        //TODO should be false once shaka will fix the issue above
        eventIsFired.should.be.true;
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
  let video;
  let dashInstance;

  beforeEach(() => {
    video = document.createElement("video");
    dashInstance = DashAdapter.createAdapter(video, source, {});
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
  let video;
  let dashInstance;

  beforeEach(() => {
    video = document.createElement("video");
    dashInstance = DashAdapter.createAdapter(video, source, {});
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
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks().filter((track) => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectTextTrack(activeTrack);
      activeTrack.language.should.be.equal(dashInstance._shaka.getTextTracks().filter((track) => {
        return track.active;
      })[0].language);
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000)
    });
  });

  it('should not change the selected for video track given', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks().filter((track) => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectTextTrack(new VideoTrack({index: 0}));
      activeTrack.language.should.be.equal(dashInstance._shaka.getTextTracks().filter((track) => {
        return track.active;
      })[0].language);
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000)
    });
  });

  it('should not change the selected for no text track given', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks().filter((track) => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectTextTrack();
      activeTrack.language.should.be.equal(dashInstance._shaka.getTextTracks().filter((track) => {
        return track.active;
      })[0].language);
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000)
    });
  });

  it('should not change the selected for no subtitle or captions given', (done) => {
    dashInstance.load().then(() => {
      dashInstance.addEventListener('texttrackchanged', () => {
        eventIsFired = true;
      });
      let activeTrack = dashInstance._getParsedTextTracks().filter((track) => {
        return track.active;
      })[0];
      let eventIsFired = false;
      dashInstance.selectTextTrack(new TextTrack({kind: 'metadata'}));
      activeTrack.language.should.be.equal(dashInstance._shaka.getTextTracks().filter((track) => {
        return track.active;
      })[0].language);
      setTimeout(() => {
        eventIsFired.should.be.false;
        done();
      }, 1000)
    });
  });
});

describe('DashAdapter: enableAdaptiveBitrate', () => {
  let video;
  let dashInstance;

  beforeEach(() => {
    video = document.createElement("video");
    dashInstance = DashAdapter.createAdapter(video, source, config);
  });

  afterEach(() => {
    dashInstance.destroy();
    dashInstance = null;
  });

  after(() => {
    TestUtils.removeVideoElementsFromTestPage();
  });

  it('should enable ABR', () => {
    dashInstance._shaka.getConfiguration().abr.enabled.should.be.false;
    dashInstance.enableAdaptiveBitrate();
    dashInstance._shaka.getConfiguration().abr.enabled.should.be.true;
  });
});

