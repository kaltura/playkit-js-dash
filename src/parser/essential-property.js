// @flow
import {XmlUtils} from './parser-utils';

class EssentialProperty {
  _schemeIdUri: string;
  _value: string;

  constructor(elem: HTMLElement) {
    this._schemeIdUri = XmlUtils.parseAttr(elem, 'schemeIdUri');
    this._value = XmlUtils.parseAttr(elem, 'value');
  }

  get schemeIdUri(): string {
    return this._schemeIdUri;
  }

  get value(): string {
    return this._value;
  }
}

export {EssentialProperty};
