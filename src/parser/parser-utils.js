// @flow
import {SegmentTemplate} from './segment-template';

const UrlUtils = {
  resolve: (url: string, data: {id?: string, index?: number, bitrate?: number, time?: number}): string => {
    const {id, index, bitrate, time} = data;
    const regExp = /\$([a-zA-Z]+)\$/g;
    const expressions = url.match(regExp);
    const replaceTokens = (url: string, exp: string, token: any) => (token ? url.replace(exp, token) : url);
    if (expressions) {
      expressions.forEach((exp: string) => {
        switch (exp) {
          case SegmentTemplate.MediaTemplateType.REPRESENTATION:
            url = replaceTokens(url, exp, id);
            break;
          case SegmentTemplate.MediaTemplateType.NUMBER:
            url = replaceTokens(url, exp, index);
            break;
          case SegmentTemplate.MediaTemplateType.BANDWIDTH:
            url = replaceTokens(url, exp, bitrate);
            break;
          case SegmentTemplate.MediaTemplateType.TIME:
            url = replaceTokens(url, exp, time);
            break;
        }
      });
    }
    return url;
  }
};

const ParserUtils = {
  BufferToStr: (buffer: ArrayBuffer): ?string => {
    if (TextDecoder) {
      const textDecoder = new TextDecoder();
      return textDecoder.decode(new Uint8Array(buffer));
    }
    return null;
  },
  StrToBuffer: (str: string): ?Uint8Array => {
    if (TextEncoder) {
      const textEncoder = new TextEncoder();
      return textEncoder.encode(str);
    }
    return null;
  }
};

const MpdUtils = {
  TagTypes: {
    BASE_URL: 'BaseURL',
    SEGMENT_TEMPLATE: 'SegmentTemplate',
    REPRESENTATION: 'Representation',
    ESSENTIAL_PROPERTY: 'EssentialProperty',
    ADAPTATION_SET: 'AdaptationSet'
  },
  AttributeTypes: {
    BASE_URL: 'BaseURL',
    ID: 'id',
    CONTENT_TYPE: 'contentType',
    MIME_TYPE: 'mimeType',
    MEDIA: 'media',
    DURATION: 'duration',
    START_NUMBER: 'startNumber',
    TIMESCALE: 'timescale',
    PRESENTATION_TIME_OFFSET: 'presentationTimeOffset',
    END_NUMBER: 'endNumber',
    BANDWIDTH: 'bandwidth',
    WIDTH: 'width',
    HEIGHT: 'height',
    SCHEME_ID_URI: 'schemeIdUri',
    VALUE: 'value'
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
  findElements: (node: HTMLElement, name: string): HTMLCollection<HTMLElement> => {
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
  parseInt: (intString: string): ?number => {
    const n = Number(intString);
    return n % 1 === 0 ? n : null;
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

export {ParserUtils, MpdUtils, XmlUtils, UrlUtils};
