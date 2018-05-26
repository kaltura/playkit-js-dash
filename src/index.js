// @flow
import {registerMediaSourceAdapter} from 'playkit-js'
import {Adapter, shaka} from './dash-adapter'

declare var __VERSION__: string;
declare var __NAME__: string;

const VERSION = __VERSION__;
const NAME = __NAME__;

export {VERSION, NAME};
export {Adapter, shaka};

// Register DashAdapter to the media source adapter manager
if (Adapter.isSupported()) {
  registerMediaSourceAdapter(Adapter);
}
