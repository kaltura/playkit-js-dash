// @flow
import {EssentialProperty} from './essential-property';
import {MpdUtils, XmlUtils} from './parser-utils';

class Representation {
  _id: string;
  _bandwidth: number;
  _width: number;
  _height: number;
  _essentialProperty: EssentialProperty;

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

  get bandwidth(): number {
    return this._bandwidth;
  }

  get id(): string {
    return this._id;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  get essentialProperty(): EssentialProperty {
    return this._essentialProperty;
  }
}

export {Representation};
