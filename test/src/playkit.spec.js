import playkit from 'playkit-js';
import shaka from '../../src/shaka';

describe('playkit:playkit', function() {

  this.timeout(4000);

  it('should play dash stream', (done) => {
    let player = playkit({
      mimeType: "dash",
      source: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"
    });
    let video = document.getElementsByTagName("video")[0];
    video.onplaying = function () {
      player.destroy();
      done();
    };
    video.addEventListener('error', function (err) {
      player.destroy();
      should.fail();
    });
    player.play();
  });

});
