// @flow
const ParserUtils = {
  BufferToStr: (buffer: ArrayBuffer): string => {
    const textDecoder = new TextDecoder();
    return textDecoder.decode(buffer);
  }
};

const MpdUtils = {
  TagsTypes: {
    SEGMENT_TEMPLATE: 'SegmentTemplate',
    REPRESENTATION: 'Representation',
    ESSENTIAL_PROPERTY: 'EssentialProperty',
    ADAPTATION_SET: 'AdaptationSet'
  }
};

const XmlUtils = {
  parseXml: (text: string): Document => {
    const domParser = new DOMParser();
    return domParser.parseFromString(text, 'text/xml');
  },
  parseAttr: (elem: HTMLElement, name: string, parseFunction?: Function, defaultValue: any): any => {
    let parsedValue = null;
    const value = elem.getAttribute(name);
    if (value !== null) {
      parsedValue = parseFunction ? parseFunction(value) : value;
    }
    return parsedValue == null ? defaultValue : parsedValue;
  },
  findElement: (node: HTMLElement, name: string): HTMLCollection<HTMLElement> => {
    return node.getElementsByTagName(name);
  },
  findChild(elem: HTMLElement, name: string): ?HTMLElement {
    const children = this.findChildren(elem, name);
    if (children.length !== 1) {
      return null;
    }
    return children[0];
  },
  findChildren: (elem: HTMLElement, name: string): Array<HTMLElement> => {
    return Array.from(elem.childNodes).filter(child => {
      return child instanceof Element && child.tagName === name;
    });
  },
  parsePositiveInt: (intString: string): ?number => {
    const n = Number(intString);
    return n % 1 === 0 && n > 0 ? n : null;
  },
  parseFloat: (floatString: string): ?number => {
    const n = Number(floatString);
    return !isNaN(n) ? n : null;
  }
};

export {ParserUtils, MpdUtils, XmlUtils};
