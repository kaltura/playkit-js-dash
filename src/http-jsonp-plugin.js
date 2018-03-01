//@flow

import {jsonp} from 'playkit-js'
import {Error} from 'playkit-js'

/**
 *  A networking plugin to handle http and https URIs via XHR and for playmanifest using jsonp
 * @param {string} uri - url pf the request
 * @param {Object} request - request object
 * @param {Function} callback - external redirect callback function
 * @return {Promise<*>} - a promise with the response
 * @export
 */
export default function (uri: string, request: Object, callback: Function): Promise<*> {
  const _executeXHR = function (uri, request) {
    return new Promise((resolve, reject) => {
      let xhr = new window.XMLHttpRequest();
      xhr.responseType = 'arraybuffer';

      xhr.open(request.method, uri, true);

      xhr.timeout = request.retryParameters.timeout;
      xhr.withCredentials = request.allowCrossSiteCredentials;

      xhr.onload = event => {
        const target = event.target;
        // character ('\n'), we trim the header here.
        const headers = target.getAllResponseHeaders().trim().split('\r\n').reduce(
          function (all, part) {
            /** @type {!Array.<string>} */
            const header = part.split(': ');
            all[header[0].toLowerCase()] = header.slice(1).join(': ');
            return all;
          },
          {});
        if (target.status >= 200 && target.status <= 299 &&
          target.status != 202) {
          // Most 2xx HTTP codes are success cases.
          if (target.responseURL) {
            uri = target.responseURL;
          }
          /** @type {shakaExtern.Response} */
          const response = {
            uri: uri,
            data: target.response,
            headers: headers,
            fromCache: !!headers['x-shaka-from-cache']
          };
          resolve(response);
        } else {
          const severity = target.status == 401 || target.status == 403 ?
            Error.Severity.CRITICAL :
            Error.Severity.RECOVERABLE;
          reject(new Error(
            severity,
            Error.Category.NETWORK,
            Error.Code.BAD_HTTP_STATUS,
            uri));
        }
      };
      xhr.onerror = () => {
        reject(new Error(
          Error.Severity.CRITICAL,
          Error.Category.NETWORK,
          Error.Code.HTTP_ERROR,
          uri));
      };
      xhr.ontimeout = () => {
        reject(new Error(
          Error.Severity.CRITICAL,
          Error.Category.NETWORK,
          Error.Code.TIMEOUT,
          uri));
      };
      for (var k in request.headers) {
        xhr.setRequestHeader(k, request.headers[k]);
      }
      xhr.send(request.body);
    })
  };

  const _getDirectUri = uri => {
    return new Promise(function (resolve) {
      if (uri.indexOf("playManifest") > -1 && true) {
        jsonp(uri, callback).then(url => {
          resolve(url);
        });
      } else {
        resolve(uri);
      }
    })
  };

  return _getDirectUri(uri)
    .then(uri => {
      return _executeXHR(uri, request);
    });
}
