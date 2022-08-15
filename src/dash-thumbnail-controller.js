// @flow
import {AdaptationSet} from './parser/adaptation-set';
import {Representation} from './parser/representation';
import {UrlUtils} from './parser/parser-utils';
import {ImageTrack, ThumbnailInfo} from '@playkit-js/playkit-js';
import {EssentialProperty} from './parser/essential-property';

class DashThumbnailController {
  _tracks: Array<ImageTrack> = [];

  constructor(set: AdaptationSet, playerUrl: string, mediaTemplatePrefix: string) {
    this._parseTracks(set, playerUrl, mediaTemplatePrefix);
    if (this._tracks.length > 0) {
      this._tracks.sort((t1: ImageTrack, t2: ImageTrack) => t1.customData.bitrate - t2.customData.bitrate);
      this.selectTrack(this._tracks[this._tracks.length - 1]);
    }
  }

  selectTrack(track: ImageTrack): void {
    this._tracks.forEach((t: ImageTrack) => (t.index === track.index ? (t.active = true) : (t.active = false)));
  }

  getTracks(): Array<ImageTrack> {
    return this._tracks;
  }

  getActiveTrack(): ImageTrack {
    return this._tracks.find((t: ImageTrack) => t.active);
  }

  getThumbnail(time: number): ThumbnailInfo {
    const activeTrack = this.getActiveTrack();
    const {duration, rows, cols, sliceWidth, sliceHeight, customData} = activeTrack;
    const page = Math.floor(time / duration) + customData.startNumber;
    const offset = time % duration;
    const thumbIndex = Math.floor((offset * rows * cols) / duration);
    return new ThumbnailInfo({
      width: Math.floor(sliceWidth),
      height: Math.floor(sliceHeight),
      x: Math.floor(thumbIndex % rows) * sliceWidth,
      y: Math.floor(thumbIndex / rows) * sliceHeight,
      url: this._buildUrlFromTemplate(activeTrack, page)
    });
  }

  _parseTracks = (set: AdaptationSet, playerUrl: string, mediaTemplatePrefix: string): void => {
    const {representations, segmentTemplate, essentialProperty} = set;
    representations.forEach((representation: Representation, index: number) => {
      const {id, bandwidth, width, height} = representation;
      const {startNumber, duration, media, timescale, presentationTimeOffset} = segmentTemplate;
      const value = this._getEssentialValue(essentialProperty, representation);
      const [rows, cols] = this._getDimensions(value);
      this._tracks.push(
        new ImageTrack({
          id,
          index,
          active: false,
          width,
          height,
          duration,
          rows,
          cols,
          url: this._buildTemplateUrl(media, id, playerUrl, mediaTemplatePrefix),
          customData: {
            bitrate: bandwidth,
            startNumber,
            timescale,
            presentationTimeOffset
          }
        })
      );
    });
  };

  _getDimensions = (value: string): Array<number> => {
    let rows = 1,
      cols = 1;
    if (value.includes('x')) {
      const values = value.split('x');
      rows = parseInt(values[0]);
      cols = parseInt(values[1]);
    }
    return [rows, cols];
  };

  _getEssentialValue = (essentialProperty: ?EssentialProperty, representation: Representation): string => {
    return essentialProperty ? essentialProperty.value : representation.essentialProperty ? representation.essentialProperty.value : '';
  };

  _buildTemplateUrl = (mediaTemplate: string, id: string, url: string, mediaTemplatePrefix: string): string => {
    const last = url.split('/').pop();
    const baseUrl = url.replace(last, '');
    const regex = /^\.\/|^\./;
    mediaTemplatePrefix = mediaTemplatePrefix.replace(regex, '');
    if (mediaTemplatePrefix.length > 0 && !mediaTemplatePrefix.endsWith('/')) {
      mediaTemplatePrefix += '/';
    }
    const urlTemplate = `${baseUrl}${mediaTemplatePrefix}${mediaTemplate}`;
    return UrlUtils.resolve(urlTemplate, {id});
  };

  _buildUrlFromTemplate = (track: ImageTrack, index: number): string => {
    return UrlUtils.resolve(track.url, {
      index,
      time: (index - 1) * track.duration * track.customData.timescale,
      bitrate: track.customData.bitrate
    });
  };
}

export {DashThumbnailController};
