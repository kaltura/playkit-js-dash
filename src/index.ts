import { registerMediaSourceAdapter } from '@playkit-js/playkit-js';
import DashAdapter from './dash-adapter';

const VERSION = __VERSION__;
const NAME = __NAME__;

export default DashAdapter;
export { VERSION, NAME };

// Register DashAdapter to the media source adapter manager
if (DashAdapter.isSupported()) {
  registerMediaSourceAdapter(DashAdapter);
}
