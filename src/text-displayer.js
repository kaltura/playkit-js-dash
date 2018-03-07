// @flow
import shaka from 'shaka-player';

/**
 * shaka doesn't handle hidden caption see https://github.com/google/shaka-player/issues/1058.
 * This stops us to handle the caption by ourself by setting the native caption hidden.
 * So we have to override the shaka text displayer to cause shaka handles hidden caption.
 */
export default class TextDisplayer extends shaka.text.SimpleTextDisplayer {
  /**
   *
   * @return {boolean} - isTextVisible
   */
  isTextVisible(): boolean {
    return true;
  }
}
