import { MpdUtils, XmlUtils } from './parser-utils';

class SegmentTemplate {
  public static MediaTemplateType: { [key: string]: string } = {
    REPRESENTATION: '$RepresentationID$',
    NUMBER: '$Number$',
    BANDWIDTH: '$Bandwidth$',
    TIME: '$Time$'
  };

  private _media: string;
  private _duration: number;
  private _startNumber: number;
  // Live related
  private _timescale: number;
  private _presentationTimeOffset: number;
  private _endNumber: number;

  constructor(elem: HTMLElement) {
    this._media = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.MEDIA);
    this._startNumber = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.START_NUMBER, XmlUtils.parseInt, 1);
    this._duration = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.DURATION, XmlUtils.parseFloat);
    this._timescale = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.TIMESCALE, XmlUtils.parsePositiveInt, 1);
    this._presentationTimeOffset = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.PRESENTATION_TIME_OFFSET, XmlUtils.parseInt, 0);
    this._endNumber = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.END_NUMBER, XmlUtils.parsePositiveInt);
  }

  public get media(): string {
    return this._media;
  }

  public get startNumber(): number {
    return this._startNumber;
  }

  public get duration(): number {
    return this._duration;
  }

  public get timescale(): number {
    return this._timescale;
  }

  public get presentationTimeOffset(): number {
    return this._presentationTimeOffset;
  }

  public get endNumber(): number {
    return this._endNumber;
  }
}

export { SegmentTemplate };
