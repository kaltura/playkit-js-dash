// @flow
import {MpdUtils, XmlUtils} from './parser-utils';

class SegmentTemplate {
  _media: string;
  _duration: number;
  _startNumber: number;
  // Live related
  _timescale: number;
  _presentationTimeOffset: number;
  _endNumber: number;

  constructor(elem: HTMLElement) {
    this._media = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.MEDIA);
    this._startNumber = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.START_NUMBER, XmlUtils.parsePositiveInt);
    this._duration = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.DURATION, XmlUtils.parseFloat);
    this._timescale = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.TIMESCALE, XmlUtils.parsePositiveInt);
    this._presentationTimeOffset = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.PRESENTATION_TIME_OFFSET, XmlUtils.parsePositiveInt);
    this._endNumber = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.END_NUMBER, XmlUtils.parsePositiveInt);
  }

  get media(): string {
    return this._media;
  }

  get startNumber(): number {
    return this._startNumber;
  }

  get duration(): number {
    return this._duration;
  }

  get timescale(): number {
    return this._timescale;
  }

  get presentationTimeOffset(): number {
    return this._presentationTimeOffset;
  }

  get endNumber(): number {
    return this._endNumber;
  }
}

export {SegmentTemplate};
