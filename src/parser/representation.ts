import {EssentialProperty} from './essential-property';
import {MpdUtils, XmlUtils} from './parser-utils';

class Representation {
  private _id: string;
  private _bandwidth: number;
  private _width: number;
  private _height: number;
  private _essentialProperty: EssentialProperty | undefined;

  constructor(elem: HTMLElement) {
    this._id = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.ID);
    this._bandwidth = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.BANDWIDTH, parseInt);
    this._width = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.WIDTH, parseInt);
    this._height = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.HEIGHT, parseInt);
    const essPropElem = XmlUtils.findChild(elem, MpdUtils.TagTypes.ESSENTIAL_PROPERTY);
    if (essPropElem) {
      this._essentialProperty = new EssentialProperty(essPropElem);
    }
  }

  public get bandwidth(): number {
    return this._bandwidth;
  }

  public get id(): string {
    return this._id;
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public get essentialProperty(): EssentialProperty | undefined {
    return this._essentialProperty;
  }
}

export {Representation};
