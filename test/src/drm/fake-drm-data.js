import {BaseDrmProtocol} from 'playkit-js'

export const wwDrmData = [{
  licenseUrl: 'LICENSE_URL',
  scheme: BaseDrmProtocol.DrmScheme.WIDEVINE
}];

export const prDrmData = [{
  licenseUrl: 'LICENSE_URL',
  scheme: BaseDrmProtocol.DrmScheme.PLAYREADY
}];
