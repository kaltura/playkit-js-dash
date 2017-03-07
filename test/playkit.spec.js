import chai from 'chai';
import playkit from 'PlayKit.js/src/playkit';
import shaka from '../src/shaka';

chai.should();

describe('playkit:playkit', function() {

  this.timeout(4000);

  it('should play dash stream', (done) => {
    let player = playkit({
      mimeType: "dash",
      source: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"
    });
    let video = document.getElementsByTagName("video")[0];
    video.onplaying = function () {
      true.should.be.true;
      done();
    };
    video.addEventListener('error', function (err) {
      true.should.be.false;
      done();
    });
    player.play();
  });

});
