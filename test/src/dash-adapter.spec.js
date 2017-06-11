import playkit from 'playkit-js'
//eslint-disable-next-line no-unused-vars
import DashAdapter from '../../src/dash-adapter';
import * as TestUtils from 'playkit-js/test/src/utils/test-utils'
import {Track, VideoTrack, AudioTrack, TextTrack} from 'playkit-js';

let sources = [{
  mimetype: "application/dash+xml",
  url: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"
}];

describe.skip('DashAdapter [debugging and testing manually]', () => {

  let player, tracks, videoTracks, textTracks, audioTracks;

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
      sources: sources
    });
    player.load().then((data) => {
      displayTracksOnScreen();
      player.play();
    });
  });
});

describe('DashAdapter:canPlayType', () => {

  it('should return true for application/dash+xml', () => {
    DashAdapter.canPlayType('application/dash+xml').should.be.true;
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

describe('DashAdapter.isSupported', function () {
  it('should return true', function () {
    DashAdapter.isSupported().should.be.true;
  });
});

describe('DashAdapter.name', function () {
  it('should be named DashAdapter', function () {
    DashAdapter.name.should.equal('DashAdapter');
  });
});


