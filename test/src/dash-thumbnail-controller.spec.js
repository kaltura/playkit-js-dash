import {DashManifestParser} from '../../src/parser/dash-manifest-parser';
import {ImageAdaptationSetWithMultipleRepresentations, ImageAdaptationSetWithOneRepresentation} from './parser/manifests';
import {DashThumbnailController} from '../../src/dash-thumbnail-controller';
import {ImageTrack} from '@playkit-js/playkit-js/dist/playkit';

describe('DashThumbnailController', () => {
  let thumbnailController, manifestParser;
  const url = 'my/stream/url';

  it('should parse tracks successfully - one representation', () => {
    manifestParser = new DashManifestParser(ImageAdaptationSetWithOneRepresentation);
    manifestParser.parseManifest();
    thumbnailController = new DashThumbnailController(manifestParser.getImageSet(), url);

    const imageTracks = thumbnailController.getTracks();
    imageTracks.should.have.lengthOf(1);

    const imageTrack = imageTracks[0];
    imageTrack.should.be.an.instanceof(ImageTrack);
    imageTrack.active.should.be.true;
    imageTrack.index.should.equal(0);
    imageTrack.id.should.equal('thumbnails_320x180');
    imageTrack.duration.should.equal(100);
    imageTrack.cols.should.equal(1);
    imageTrack.rows.should.equal(10);
    imageTrack.height.should.equal(180);
    imageTrack.width.should.equal(3200);
    imageTrack.url.should.equal('my/stream/thumbnails_320x180/tile_$Number$.jpg');
    imageTrack.customData.should.deep.equal({
      bitrate: 12288,
      startNumber: 1,
      timescale: 1,
      presentationTimeOffset: 0
    });
  });

  it('should parse tracks successfully - multiple representations', () => {
    manifestParser = new DashManifestParser(ImageAdaptationSetWithMultipleRepresentations);
    manifestParser.parseManifest();
    thumbnailController = new DashThumbnailController(manifestParser.getImageSet(), url);

    const imageTracks = thumbnailController.getTracks();
    imageTracks.should.have.lengthOf(2);

    const imageTrack1 = imageTracks[0];
    imageTrack1.should.be.an.instanceof(ImageTrack);
    imageTrack1.active.should.be.false;
    imageTrack1.index.should.equal(0);
    imageTrack1.id.should.equal('thumbnails_102x58');
    imageTrack1.duration.should.equal(634.566);
    imageTrack1.cols.should.equal(20);
    imageTrack1.rows.should.equal(10);
    imageTrack1.height.should.equal(1152);
    imageTrack1.width.should.equal(1024);
    imageTrack1.url.should.equal('my/stream/thumbnails_102x58/tile_$Number$.jpg');
    imageTrack1.customData.should.deep.equal({
      bitrate: 12000,
      presentationTimeOffset: 0,
      startNumber: 1,
      timescale: 1
    });

    const imageTrack2 = imageTracks[1];
    imageTrack2.should.be.an.instanceof(ImageTrack);
    imageTrack2.active.should.be.true;
    imageTrack2.index.should.equal(1);
    imageTrack2.id.should.equal('thumbnails_256x144');
    imageTrack2.duration.should.equal(634.566);
    imageTrack2.cols.should.equal(8);
    imageTrack2.rows.should.equal(8);
    imageTrack2.height.should.equal(1152);
    imageTrack2.width.should.equal(2048);
    imageTrack2.url.should.equal('my/stream/thumbnails_256x144/tile_$Number$.jpg');
    imageTrack2.customData.should.deep.equal({
      bitrate: 24000,
      presentationTimeOffset: 0,
      startNumber: 1,
      timescale: 1
    });
  });

  it('should select track successfully for multiple representations', () => {
    manifestParser = new DashManifestParser(ImageAdaptationSetWithMultipleRepresentations);
    manifestParser.parseManifest();
    thumbnailController = new DashThumbnailController(manifestParser.getImageSet(), url);

    let imageTracks;
    imageTracks = thumbnailController.getTracks();
    imageTracks.should.have.lengthOf(2);
    imageTracks[0].active.should.be.false;
    imageTracks[1].active.should.be.true;

    thumbnailController.selectTrack(imageTracks[0]);

    imageTracks = thumbnailController.getTracks();
    imageTracks[0].active.should.be.true;
    imageTracks[1].active.should.be.false;

    thumbnailController.getActiveTrack().should.deep.equal(imageTracks[0]);
  });

  it('should get thumbnail successfully - one representation', () => {
    manifestParser = new DashManifestParser(ImageAdaptationSetWithOneRepresentation);
    manifestParser.parseManifest();
    thumbnailController = new DashThumbnailController(manifestParser.getImageSet(), url);

    let thumbnailInfo;
    thumbnailInfo = thumbnailController.getThumbnail(10);
    thumbnailInfo.height.should.equal(180);
    thumbnailInfo.url.should.equal('my/stream/thumbnails_320x180/tile_1.jpg');
    thumbnailInfo.width.should.equal(320);
    thumbnailInfo.x.should.equal(320);
    thumbnailInfo.y.should.equal(0);

    thumbnailInfo = thumbnailController.getThumbnail(100);
    thumbnailInfo.height.should.equal(180);
    thumbnailInfo.url.should.equal('my/stream/thumbnails_320x180/tile_2.jpg');
    thumbnailInfo.width.should.equal(320);
    thumbnailInfo.x.should.equal(0);
    thumbnailInfo.y.should.equal(0);

    thumbnailInfo = thumbnailController.getThumbnail(2500);
    thumbnailInfo.height.should.equal(180);
    thumbnailInfo.url.should.equal('my/stream/thumbnails_320x180/tile_26.jpg');
    thumbnailInfo.width.should.equal(320);
    thumbnailInfo.x.should.equal(0);
    thumbnailInfo.y.should.equal(0);
  });

  it('should get thumbnail successfully - multiple representations', () => {
    manifestParser = new DashManifestParser(ImageAdaptationSetWithMultipleRepresentations);
    manifestParser.parseManifest();
    thumbnailController = new DashThumbnailController(manifestParser.getImageSet(), url);

    let thumbnailInfo;
    thumbnailInfo = thumbnailController.getThumbnail(1500);
    thumbnailInfo.height.should.equal(144);
    thumbnailInfo.url.should.equal('my/stream/thumbnails_256x144/tile_3.jpg');
    thumbnailInfo.width.should.equal(256);
    thumbnailInfo.x.should.equal(1792);
    thumbnailInfo.y.should.equal(288);

    const inactiveTrack = thumbnailController.getTracks()[0];
    thumbnailController.selectTrack(inactiveTrack);

    thumbnailInfo = thumbnailController.getThumbnail(1500);
    thumbnailInfo.height.should.equal(57);
    thumbnailInfo.url.should.equal('my/stream/thumbnails_102x58/tile_3.jpg');
    thumbnailInfo.width.should.equal(102);
    thumbnailInfo.x.should.equal(204.8);
    thumbnailInfo.y.should.equal(403.2);
  });
});
