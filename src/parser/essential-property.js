// @flow
import {MpdUtils, XmlUtils} from './parser-utils';

class EssentialProperty {
  _schemeIdUri: string;
  _value: string;

  constructor(elem: HTMLElement) {
    this._schemeIdUri = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.SCHEME_ID_URI);
    this._value = XmlUtils.parseAttr(elem, MpdUtils.AttributeTypes.VALUE);
  }

  get schemeIdUri(): string {
    return this._schemeIdUri;
  }

  get value(): string {
    return this._value;
  }
}

export {EssentialProperty};
