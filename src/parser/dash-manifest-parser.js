// @flow
import {MpdUtils, ParserUtils, XmlUtils} from './parser-utils';
import {AdaptationSet} from './adaptation-set';
import {getLogger} from '@playkit-js/playkit-js';

class DashManifestParser {
  _logger: any = getLogger('DashManifestParser');
  _xmlDoc: Document;
  _adaptationSets: Array<AdaptationSet>;

  static isValid(): boolean {
    return window.TextEncoder && window.TextDecoder;
  }

  constructor(manifest: ArrayBuffer | string) {
    this._logger.debug('Initialize manifest parser');
    this._adaptationSets = [];
    let xmlStr;
    if (manifest instanceof ArrayBuffer) {
      xmlStr = ParserUtils.BufferToStr(manifest);
    } else {
      xmlStr = manifest;
    }
    if (xmlStr) {
      this._xmlDoc = XmlUtils.parseXml(xmlStr);
    }
  }

  parseManifest() {
    try {
      this._logger.debug('Start parsing dash manifest');
      // For now parse only adaptation sets
      this._parseAdaptionSets();
      this._logger.debug('Manifest parsing finished successfully');
    } catch (e) {
      this._logger.warn('Manifest parsing failed', e);
    }
  }

  getImageSet(): ?AdaptationSet {
    return this._adaptationSets.find((adaptationSet: AdaptationSet) => adaptationSet.contentType === AdaptationSet.ContentType.IMAGE);
  }

  hasImageSet(): boolean {
    return !!this.getImageSet();
  }

  get adaptationSets(): Array<AdaptationSet> {
    return this._adaptationSets;
  }

  _parseAdaptionSets = () => {
    const adaptationNodes = XmlUtils.findElements(this._xmlDoc, MpdUtils.TagTypes.ADAPTATION_SET);
    // For now parse only image adaptation sets
    const imageAdaptationsNodes = Array.from(adaptationNodes).filter(
      adaptation => XmlUtils.parseAttr(adaptation, MpdUtils.AttributeTypes.CONTENT_TYPE) === AdaptationSet.ContentType.IMAGE
    );
    if (imageAdaptationsNodes.length > 0) {
      this._adaptationSets = imageAdaptationsNodes.map(adaptation => new AdaptationSet(adaptation));
      this._logger.debug('Found image adaptation set', this._adaptationSets);
    } else {
      this._logger.debug('No image adaptations were found in manifest');
    }
  };
}

export {DashManifestParser};
