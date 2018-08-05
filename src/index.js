// @flow
import {registerMediaSourceAdapter} from 'playkit-js';
import DashAdapter from './dash-adapter';

declare var __VERSION__: string;
declare var __NAME__: string;

export default DashAdapter;
export {__VERSION__ as VERSION, __NAME__ as NAME};

// Register DashAdapter to the media source adapter manager
if (DashAdapter.isSupported()) {
  registerMediaSourceAdapter(DashAdapter);
}
