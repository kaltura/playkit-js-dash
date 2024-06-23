/**
 * Creates a dom element.
 * @param {string} type - The element type.
 * @param {string} id - The element id.
 * @param {string} opt_parentId - Optional parent id.
 * @returns {HTMLDivElement}
 */
function createElement(type, id, opt_parentId) {
  const element = document.createElement(type);
  element.id = id;
  if (!opt_parentId) {
    document.body.appendChild(element);
  } else {
    const parent = document.getElementById(opt_parentId);
    if (parent) {
      parent.appendChild(element);
    } else {
      document.body.appendChild(element);
    }
  }
  return element;
}

/**
 * Removes a dom element.
 * @param {string} id - The element id.
 * @returns {void}
 */
function removeElement(id) {
  const element = document.getElementById(id);
  element.parentNode.removeChild(element);
}

/**
 * Removes all the video elements that created by the test from the document.
 * @returns {void}
 */
function removeVideoElementsFromTestPage() {
  const element = document.getElementsByTagName('video');
  for (let i = element.length - 1; i >= 0; i--) {
    element[i].parentNode.removeChild(element[i]);
  }
}

/**
 * Creates a given title.
 * @param {string} title - The title text.
 * @returns {void}
 */
function createTitle(title) {
  const header = document.createElement('header');
  const h4 = document.createElement('h4');
  h4.textContent = title;
  header.appendChild(h4);
  document.body.appendChild(header);
}

/**
 * Create a button which represents a track element.
 * @param {string} innerText - The inner text.
 * @param {number} id - The id.
 * @returns {Element} - The track button element.
 */
function createTrackButton(innerText, id) {
  const element = document.createElement('BUTTON');
  element.innerText = innerText;
  element.id = id;
  document.body.appendChild(element);
  return element;
}

/**
 * Create buttons for all video tracks.
 * @param {Player} player - The player instance.
 * @param {VideoTrack} videoTracks - The video track instances.
 * @returns {void}
 */
function createVideoTrackButtons(player, videoTracks) {
  createTitle('Video Tracks');
  for (let i = 0; i < videoTracks.length; i++) {
    const element = createTrackButton(videoTracks[i].label || videoTracks[i].bandwidth || videoTracks[i].language, videoTracks[i].index);
    element.onclick = function () {
      player.selectTrack(videoTracks[i]);
    };
  }
}

/**
 * Create buttons for all audio tracks.
 * @param {Player} player - The player instance.
 * @param {AudioTrack} audioTracks - The audio track instances.
 * @returns {void}
 */
function createAudioTrackButtons(player, audioTracks) {
  createTitle('Audio Tracks');
  for (let i = 0; i < audioTracks.length; i++) {
    const element = createTrackButton(audioTracks[i].label || audioTracks[i].language, audioTracks[i].index);
    element.onclick = function () {
      player.selectTrack(audioTracks[i]);
    };
  }
}

/**
 * Create buttons for all text tracks.
 * @param {Player} player - The player instance.
 * @param {TextTrack} textTracks - The text track instances.
 * @returns {void}
 */
function createTextTrackButtons(player, textTracks) {
  createTitle('Text Tracks');
  for (let i = 0; i < textTracks.length; i++) {
    const element = createTrackButton(textTracks[i].label || textTracks[i].language, textTracks[i].index);
    element.onclick = function () {
      player.selectTrack(textTracks[i]);
    };
  }
}

export {removeVideoElementsFromTestPage, createElement, removeElement, createVideoTrackButtons, createAudioTrackButtons, createTextTrackButtons};
