import {MpdUtils, XmlUtils} from './parser-utils';

class EssentialProperty {
  private _schemeIdUri: string;
  private _value: string;

  constructor(elem: HTMLElement) {
    this._schemeIdUri = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.SCHEME_ID_URI);
    this._value = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.VALUE);
  }

  public get schemeIdUri(): string {
    return this._schemeIdUri;
  }

  public get value(): string {
    return this._value;
  }
}

export {EssentialProperty};
