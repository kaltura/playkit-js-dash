// @flow
import {ParserUtils, XmlUtils, MpdUtils} from './parser-utils';
import {AdaptationSet} from './adaptation-set';
import {getLogger} from '@playkit-js/playkit-js';

class DashManifestParser {
  _logger: any = getLogger('DashManifestParser');
  _xmlDoc: Document;
  _adaptationSets: Array<AdaptationSet>;

  constructor(manifest: ArrayBuffer) {
    const xmlStr = ParserUtils.BufferToStr(manifest);
    this._xmlDoc = XmlUtils.parseXml(xmlStr);
    this._adaptationSets = [];
  }

  parseManifest() {
    try {
      // for now parse only adaptation sets
      this._parseAdaptionSets();
    } catch (e) {
      this._logger.error('Manifest parsing failed.', e);
    }
  }

  _parseAdaptionSets() {
    const adaptationNodes = XmlUtils.findElement(this._xmlDoc, MpdUtils.TagsTypes.ADAPTATION_SET);
    // for now parse only image adaptation sets
    const imageAdaptationsNodes = Array.from(adaptationNodes).filter(
      adaptation => XmlUtils.parseAttr(adaptation, 'contentType') === AdaptationSet.ContentType.IMAGE
    );
    if (imageAdaptationsNodes.length > 0) {
      this._adaptationSets = imageAdaptationsNodes.map(adaptation => new AdaptationSet(adaptation));
    }
  }

  getAdaptationSet(type: string): ?AdaptationSet {
    if (type) {
      const adaptationSets = this._adaptationSets.filter((adaptationSet: AdaptationSet) => adaptationSet.contentType === type);
      if (adaptationSets) {
        return adaptationSets[0];
      }
    }
    return null;
  }

  get adaptationSets(): Array<AdaptationSet> {
    return this._adaptationSets;
  }
}

export {DashManifestParser};
