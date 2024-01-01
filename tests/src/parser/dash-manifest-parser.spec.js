import { DashManifestParser } from '../../../src/parser/dash-manifest-parser';
import { AdaptationSet } from '../../../src/parser/adaptation-set';
import { SegmentTemplate } from '../../../src/parser/segment-template';
import { EssentialProperty } from '../../../src/parser/essential-property';
import {
  ImageAdaptationSetWithMultipleRepresentations,
  ImageAdaptationSetWithOneRepresentation,
  ImageAdaptationWithEssentialUnderAdaptation
} from './manifests';

describe('DashManifestParser', () => {
  let manifestParser;

  it('should parse successfully manifest with image adaptation set and one representation', () => {
    manifestParser = new DashManifestParser(ImageAdaptationSetWithOneRepresentation);
    manifestParser.parseManifest();
    manifestParser.adaptationSets.should.have.lengthOf(1);

    const imageSet = manifestParser.getImageSet();
    imageSet.should.be.an.instanceof(AdaptationSet);
    (imageSet.essentialProperty === undefined).should.be.true;
    imageSet.id.should.equal('3');
    imageSet.contentType.should.equal(AdaptationSet.ContentType.IMAGE);
    imageSet.mimeType.should.equal('image/jpeg');

    const { segmentTemplate } = imageSet;
    segmentTemplate.should.be.an.instanceof(SegmentTemplate);
    segmentTemplate.media.should.equal('$RepresentationID$/tile_$Number$.jpg');
    segmentTemplate.duration.should.equal(100);
    segmentTemplate.startNumber.should.equal(1);

    const { representations } = imageSet;
    representations.should.have.lengthOf(1);

    const representation = representations[0];
    representation.bandwidth.should.equal(12288);
    representation.id.should.equal('thumbnails_320x180');
    representation.width.should.equal(3200);
    representation.height.should.equal(180);

    const { essentialProperty } = representation;
    essentialProperty.should.be.exist;
    essentialProperty.should.be.an.instanceof(EssentialProperty);
    essentialProperty.schemeIdUri.should.equal('http://dashif.org/thumbnail_tile');
    essentialProperty.value.should.equal('10x1');
  });

  it('should parse successfully manifest with image adaptation set and multiple representation', () => {
    manifestParser = new DashManifestParser(ImageAdaptationSetWithMultipleRepresentations);
    manifestParser.parseManifest();
    manifestParser.adaptationSets.should.have.lengthOf(1);

    const imageSet = manifestParser.getImageSet();
    imageSet.should.be.an.instanceof(AdaptationSet);
    (imageSet.essentialProperty === undefined).should.be.true;
    imageSet.id.should.equal('3');
    imageSet.contentType.should.equal(AdaptationSet.ContentType.IMAGE);
    imageSet.mimeType.should.equal('image/jpeg');

    const { segmentTemplate } = imageSet;
    segmentTemplate.should.be.an.instanceof(SegmentTemplate);
    segmentTemplate.media.should.equal('$RepresentationID$/tile_$Number$.jpg');
    segmentTemplate.duration.should.equal(634.566);
    segmentTemplate.startNumber.should.equal(1);

    const { representations } = imageSet;
    representations.should.have.lengthOf(2);

    const representation1 = representations[0];
    representation1.bandwidth.should.equal(12000);
    representation1.id.should.equal('thumbnails_102x58');
    representation1.width.should.equal(1024);
    representation1.height.should.equal(1152);

    const essentialProperty1 = representation1.essentialProperty;
    essentialProperty1.should.be.exist;
    essentialProperty1.should.be.an.instanceof(EssentialProperty);
    essentialProperty1.schemeIdUri.should.equal('http://dashif.org/thumbnail_tile');
    essentialProperty1.value.should.equal('10x20');

    const representation2 = representations[1];
    representation2.bandwidth.should.equal(24000);
    representation2.id.should.equal('thumbnails_256x144');
    representation2.width.should.equal(2048);
    representation2.height.should.equal(1152);

    const essentialProperty2 = representation2.essentialProperty;
    essentialProperty2.should.be.exist;
    essentialProperty2.should.be.an.instanceof(EssentialProperty);
    essentialProperty2.schemeIdUri.should.equal('http://dashif.org/thumbnail_tile');
    essentialProperty2.value.should.equal('8x8');
  });

  it('should parse successfully manifest with essential property under image adaptation', () => {
    manifestParser = new DashManifestParser(ImageAdaptationWithEssentialUnderAdaptation);
    manifestParser.parseManifest();
    manifestParser.adaptationSets.should.have.lengthOf(1);

    const imageSet = manifestParser.getImageSet();
    imageSet.should.be.an.instanceof(AdaptationSet);
    imageSet.id.should.equal('thumbnails');
    imageSet.contentType.should.equal(AdaptationSet.ContentType.IMAGE);
    imageSet.mimeType.should.equal('image/jpeg');

    const { essentialProperty } = imageSet;
    essentialProperty.should.be.exist;
    essentialProperty.should.be.an.instanceof(EssentialProperty);
    essentialProperty.schemeIdUri.should.equal('http://dashif.org/guidelines/thumbnails');
    essentialProperty.value.should.equal('10');

    const { segmentTemplate } = imageSet;
    segmentTemplate.should.be.an.instanceof(SegmentTemplate);
    segmentTemplate.media.should.equal('$RepresentationID$/thumb$Number$.jpg');
    segmentTemplate.duration.should.equal(5);
    segmentTemplate.startNumber.should.equal(1);
    segmentTemplate.timescale.should.equal(1);

    const { representations } = imageSet;
    representations.should.have.lengthOf(1);

    const representation = representations[0];
    representation.id.should.equal('thumbnails_320x180');
    representation.width.should.equal(320);
    representation.height.should.equal(180);
  });
});
