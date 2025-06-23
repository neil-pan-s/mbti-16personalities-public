/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-9637eeee'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/404-COw5hksb.png",
    "revision": null
  }, {
    "url": "assets/7sx6j6O9.css",
    "revision": null
  }, {
    "url": "assets/ahbhI-1g.js",
    "revision": null
  }, {
    "url": "assets/app-CkFHfTSb.js",
    "revision": null
  }, {
    "url": "assets/AUb8BxGU.js",
    "revision": null
  }, {
    "url": "assets/B9k3MDNK.js",
    "revision": null
  }, {
    "url": "assets/BCeqVwJ2.css",
    "revision": null
  }, {
    "url": "assets/BCL5yW7Q.js",
    "revision": null
  }, {
    "url": "assets/BjnNLqVx.js",
    "revision": null
  }, {
    "url": "assets/Bl0zWvo-.css",
    "revision": null
  }, {
    "url": "assets/blj1BaxF.css",
    "revision": null
  }, {
    "url": "assets/BquGyE27.js",
    "revision": null
  }, {
    "url": "assets/BSm8QL3Z.js",
    "revision": null
  }, {
    "url": "assets/BWEhohXz.js",
    "revision": null
  }, {
    "url": "assets/BwnZxTdu.js",
    "revision": null
  }, {
    "url": "assets/BymVHglh.js",
    "revision": null
  }, {
    "url": "assets/C_At1gMU.js",
    "revision": null
  }, {
    "url": "assets/C_MWfKUa.js",
    "revision": null
  }, {
    "url": "assets/C-UO50Uj.js",
    "revision": null
  }, {
    "url": "assets/C1SBjDAs.js",
    "revision": null
  }, {
    "url": "assets/C3OJiXsV.js",
    "revision": null
  }, {
    "url": "assets/C4ykfLOU.js",
    "revision": null
  }, {
    "url": "assets/C6rnkjJU.js",
    "revision": null
  }, {
    "url": "assets/CfgA1tQO.js",
    "revision": null
  }, {
    "url": "assets/CIeM9jA_.js",
    "revision": null
  }, {
    "url": "assets/CJWvpnsb.css",
    "revision": null
  }, {
    "url": "assets/CP3iFwBu.js",
    "revision": null
  }, {
    "url": "assets/CPoJEG-3.js",
    "revision": null
  }, {
    "url": "assets/CqBgDqD_.js",
    "revision": null
  }, {
    "url": "assets/CqzHAeJK.js",
    "revision": null
  }, {
    "url": "assets/cvAtn-sq.js",
    "revision": null
  }, {
    "url": "assets/CxBnUIjN.js",
    "revision": null
  }, {
    "url": "assets/DAFdu9Q-.js",
    "revision": null
  }, {
    "url": "assets/DawlIFS4.js",
    "revision": null
  }, {
    "url": "assets/DCBIG-s4.js",
    "revision": null
  }, {
    "url": "assets/DDO2Ugl1.css",
    "revision": null
  }, {
    "url": "assets/dEK6828k.js",
    "revision": null
  }, {
    "url": "assets/DQ5Zupmz.js",
    "revision": null
  }, {
    "url": "assets/DQicnYhK.js",
    "revision": null
  }, {
    "url": "assets/DqMKcHGd.css",
    "revision": null
  }, {
    "url": "assets/DtfnXpzP.js",
    "revision": null
  }, {
    "url": "assets/DuSKeNiB.css",
    "revision": null
  }, {
    "url": "assets/Dx3U6qo9.js",
    "revision": null
  }, {
    "url": "assets/DZWGFCVr.js",
    "revision": null
  }, {
    "url": "assets/fn4mqATS.js",
    "revision": null
  }, {
    "url": "assets/header-mountains-desktop-CVBy9rgG.svg",
    "revision": null
  }, {
    "url": "assets/header-mountains-mobile-G1eVZBnf.svg",
    "revision": null
  }, {
    "url": "assets/HX3MPmxt.js",
    "revision": null
  }, {
    "url": "assets/iEwDEPZd.js",
    "revision": null
  }, {
    "url": "assets/jJ6pMX5Y.js",
    "revision": null
  }, {
    "url": "assets/model-CFsaf2GQ.jpg",
    "revision": null
  }, {
    "url": "assets/nXmhecTI.js",
    "revision": null
  }, {
    "url": "assets/people-CCsKVy4-.svg",
    "revision": null
  }, {
    "url": "assets/pIwD7FTM.js",
    "revision": null
  }, {
    "url": "assets/PU7dFeMz.css",
    "revision": null
  }, {
    "url": "assets/Ql8p2Dk4.js",
    "revision": null
  }, {
    "url": "assets/RTKFCJmK.js",
    "revision": null
  }, {
    "url": "assets/upgrade-CkrSpVnk.svg",
    "revision": null
  }, {
    "url": "assets/VqVODLTx.js",
    "revision": null
  }, {
    "url": "assets/wx-Bfv1OeoY.png",
    "revision": null
  }, {
    "url": "assets/x7H6yciF.css",
    "revision": null
  }, {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "0f02d04bc13747a9384804bdecede707"
  }, {
    "url": "icons/apple-touch-icon.png",
    "revision": "0f02d04bc13747a9384804bdecede707"
  }, {
    "url": "icons/favicon.ico",
    "revision": "a47e7107368b81fc8eb2261997531365"
  }, {
    "url": "icons/icon.svg",
    "revision": "51a74fc9656836a57a34148ad9d21e88"
  }, {
    "url": "icons/maskable-icon-512x512.png",
    "revision": "785f81e32f48fe8a509fe3afab720972"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "05e58ac6b470825df4b4a48116fad88f"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "552cec71795bea7aa962a118a7e2fd3c"
  }, {
    "url": "icons/pwa-64x64.png",
    "revision": "029524d1b9f12b9c35663938b59ab87c"
  }, {
    "url": "404.html",
    "revision": "8d4685852381ab2cf25f8e32112b439f"
  }, {
    "url": "enfj.html",
    "revision": "fd017da0f77d2aa72cc1017c5feb3e48"
  }, {
    "url": "enfp.html",
    "revision": "4a90d4e221702ed832d83f4d4ab52b60"
  }, {
    "url": "entj.html",
    "revision": "4ea53fb083d91ead54d04f38bd55bfb3"
  }, {
    "url": "entp.html",
    "revision": "d5d7af95718b069ed86e8b93cb181b7a"
  }, {
    "url": "esfj.html",
    "revision": "c66bf9987c8376f41968bbbbdfa93fe8"
  }, {
    "url": "esfp.html",
    "revision": "3ee8977e6f21a65e0925985d2378ec8c"
  }, {
    "url": "estj.html",
    "revision": "5a8c1f03626f9d2072bc22365779f57f"
  }, {
    "url": "estp.html",
    "revision": "ae1390cd61894e61278ce2299eb2a10c"
  }, {
    "url": "index.html",
    "revision": "83aad4390b92b06ee64f494e396fcf70"
  }, {
    "url": "infj.html",
    "revision": "406ea362fbd0a086da4c5d8cbf0d1c43"
  }, {
    "url": "infp.html",
    "revision": "91a05c8a600b2da515ad115957690452"
  }, {
    "url": "intj.html",
    "revision": "95889472e13523ebd78af919db684ebb"
  }, {
    "url": "intp.html",
    "revision": "09e1f69cd670346274c311a067ab42fc"
  }, {
    "url": "isfj.html",
    "revision": "899c944eea917d047998b0364658d631"
  }, {
    "url": "isfp.html",
    "revision": "350b1fa8680e472a4afbddcb8a007c70"
  }, {
    "url": "istj.html",
    "revision": "6e37374df6d4980896edd21e919011a4"
  }, {
    "url": "istp.html",
    "revision": "84f04e2d885bfd3e786967991e77b02f"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "result.html",
    "revision": "63dd425da3bde7617c5082ddb0958908"
  }, {
    "url": "test.html",
    "revision": "0b468cfe829dd4965cb11358f20ca5f1"
  }, {
    "url": "types.html",
    "revision": "9eb9adbaf068802615a0e3092b445251"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "05e58ac6b470825df4b4a48116fad88f"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "552cec71795bea7aa962a118a7e2fd3c"
  }, {
    "url": "manifest.webmanifest",
    "revision": "b2ced5a6cd4884bef3bcd99a3b3c171a"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
