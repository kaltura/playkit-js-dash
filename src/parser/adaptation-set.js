// @flow
import {SegmentTemplate} from './segment-template';
import {Representation} from './representation';
import {MpdUtils, XmlUtils} from './parser-utils';

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
  _segmentTemplate: SegmentTemplate;
  _representations: Array<Representation>;

  constructor(elem: HTMLElement) {
    this._id = XmlUtils.parseAttr(elem, 'id');
    this._mimeType = XmlUtils.parseAttr(elem, 'mimeType');
    this._contentType = XmlUtils.parseAttr(elem, 'contentType');
    this._representations = Array.from(XmlUtils.findChildren(elem, MpdUtils.TagsTypes.REPRESENTATION)).map(repElem => new Representation(repElem));
    const segTempElem = XmlUtils.findChild(elem, MpdUtils.TagsTypes.SEGMENT_TEMPLATE);
    if (segTempElem) {
      this._segmentTemplate = new SegmentTemplate(segTempElem);
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

  get segmentTemplate(): SegmentTemplate {
    return this._segmentTemplate;
  }

  get representations(): Array<Representation> {
    return this._representations;
  }
}

export {AdaptationSet};
