import {SegmentTemplate} from './segment-template';
import {Representation} from './representation';
import {MpdUtils, XmlUtils} from './parser-utils';
import {EssentialProperty} from './essential-property';

class AdaptationSet {
  static ContentType: {[type: string]: string} = {
    VIDEO: 'video',
    AUDIO: 'audio',
    TEXT: 'text',
    IMAGE: 'image'
  };

  _id: string;
  _mimeType: string;
  _contentType: string;
  _segmentTemplate: SegmentTemplate | undefined;
  _essentialProperty: EssentialProperty | undefined;
  _representations: Array<Representation>;

  constructor(elem: Element) {
    this._id = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.ID);
    this._mimeType = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.MIME_TYPE);
    this._contentType = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.CONTENT_TYPE);
    this._representations = Array.from(XmlUtils.findChildren(elem, MpdUtils.TagTypes.REPRESENTATION)).map(repElem => new Representation(repElem as HTMLElement));
    const segTempElem = XmlUtils.findChild(elem, MpdUtils.TagTypes.SEGMENT_TEMPLATE);
    if (segTempElem) {
      this._segmentTemplate = new SegmentTemplate(segTempElem);
    }
    const essPropElem = XmlUtils.findChild(elem, MpdUtils.TagTypes.ESSENTIAL_PROPERTY);
    if (essPropElem) {
      this._essentialProperty = new EssentialProperty(essPropElem);
    }
  }

  get id(): string {
    return this._id;
  }

  get mimeType(): string {
    return this._mimeType;
  }

  get contentType(): string {
    return this._contentType;
  }

  get segmentTemplate(): SegmentTemplate | undefined {
    return this._segmentTemplate;
  }

  get essentialProperty(): EssentialProperty | undefined {
    return this._essentialProperty;
  }

  get representations(): Array<Representation> {
    return this._representations;
  }
}

export {AdaptationSet};
