import playkit from 'playkit-js';
//eslint-disable-next-line no-unused-vars
import DashAdapter from '../../src/dash-adapter';

describe('playkit:playkit', function () {

  this.timeout(4000);

  it('should play dash stream - preload none', (done) => {
    let player = playkit({
      sources: [{
        mimetype: "application/dash+xml",
        url: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"
      }]
    });
    let video = document.getElementsByTagName("video")[0];
    video.onplaying = function () {
      player.destroy();
      done();
    };
    player.load();
    player.play();
  });

  it('should play dash stream - preload auto', (done) => {
    let player = playkit({
      preload: "auto",
      sources: [{
        mimetype: "application/dash+xml",
        url: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"
      }]
    });
    let video = document.getElementsByTagName("video")[0];
    video.onplaying = function () {
      player.destroy();
      done();
    };
    player.play();
  });
});
