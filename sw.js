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
    "url": "assets/app-BODvx4vo.js",
    "revision": null
  }, {
    "url": "assets/AUb8BxGU.js",
    "revision": null
  }, {
    "url": "assets/B1dwTgru.js",
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
    "url": "assets/Bg4vH-nv.js",
    "revision": null
  }, {
    "url": "assets/BjnNLqVx.js",
    "revision": null
  }, {
    "url": "assets/Bl0zWvo-.css",
    "revision": null
  }, {
    "url": "assets/Bna6XEEU.js",
    "revision": null
  }, {
    "url": "assets/BquGyE27.js",
    "revision": null
  }, {
    "url": "assets/BWEhohXz.js",
    "revision": null
  }, {
    "url": "assets/BymVHglh.js",
    "revision": null
  }, {
    "url": "assets/C-UO50Uj.js",
    "revision": null
  }, {
    "url": "assets/C3OJiXsV.js",
    "revision": null
  }, {
    "url": "assets/C4IMJvEF.js",
    "revision": null
  }, {
    "url": "assets/C6rnkjJU.js",
    "revision": null
  }, {
    "url": "assets/CfELQ2_V.js",
    "revision": null
  }, {
    "url": "assets/CfgA1tQO.js",
    "revision": null
  }, {
    "url": "assets/Chd5p58K.js",
    "revision": null
  }, {
    "url": "assets/CJWvpnsb.css",
    "revision": null
  }, {
    "url": "assets/CP3iFwBu.js",
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
    "url": "assets/D41A7MGu.js",
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
    "url": "assets/DcrFtwC-.js",
    "revision": null
  }, {
    "url": "assets/DDO2Ugl1.css",
    "revision": null
  }, {
    "url": "assets/Dfm9vSnD.js",
    "revision": null
  }, {
    "url": "assets/DKdk3dSF.js",
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
    "url": "assets/DxK5gNeG.js",
    "revision": null
  }, {
    "url": "assets/Dxo7rgHi.js",
    "revision": null
  }, {
    "url": "assets/DZWGFCVr.js",
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
    "url": "assets/iKvDTEYR.js",
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
    "url": "assets/Ofd9QlAk.js",
    "revision": null
  }, {
    "url": "assets/oHL70HEs.css",
    "revision": null
  }, {
    "url": "assets/people-CCsKVy4-.svg",
    "revision": null
  }, {
    "url": "assets/pIwD7FTM.js",
    "revision": null
  }, {
    "url": "assets/qbNitr8O.js",
    "revision": null
  }, {
    "url": "assets/Ql8p2Dk4.js",
    "revision": null
  }, {
    "url": "assets/rhKgFIEI.css",
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
    "revision": "58622519d914fc3dfa5931ddbace13a5"
  }, {
    "url": "enfj.html",
    "revision": "ad7e32ba58b2028dc5397c2c1ebfcb2c"
  }, {
    "url": "enfp.html",
    "revision": "3b0b2da6ee8fee07e234b793f04b90b6"
  }, {
    "url": "entj.html",
    "revision": "8af63db4969ef82566417f21ec6624be"
  }, {
    "url": "entp.html",
    "revision": "72c58cfc5a0a1324f1919a55a300243f"
  }, {
    "url": "esfj.html",
    "revision": "5e83bdecb3d969c04e39eef6debae829"
  }, {
    "url": "esfp.html",
    "revision": "e484f62d3f830078d3dfaea9e9049c92"
  }, {
    "url": "estj.html",
    "revision": "3b8dc67ffe8f321af42c99fa93ddd139"
  }, {
    "url": "estp.html",
    "revision": "d138857062e5a27287dd8791714d5298"
  }, {
    "url": "index.html",
    "revision": "c7095c937877ec9074b4bba4ec5c5cd5"
  }, {
    "url": "infj.html",
    "revision": "3a4794a294011ba26755512e476233f2"
  }, {
    "url": "infp.html",
    "revision": "0c90686fe8ecc25aa652144d89f6a982"
  }, {
    "url": "intj.html",
    "revision": "d9d8b868a6062e2dc674e2429866f795"
  }, {
    "url": "intp.html",
    "revision": "98356c2ade062be71a995c6c3ed5d773"
  }, {
    "url": "isfj.html",
    "revision": "9bbba2709834e6e84c67c5d310f2992c"
  }, {
    "url": "isfp.html",
    "revision": "3c0e3677d0105fc8a816c110b4414d47"
  }, {
    "url": "istj.html",
    "revision": "56fd1cf62fae637317f6e055ec9beb89"
  }, {
    "url": "istp.html",
    "revision": "0a350a4c1f4ee1be80a0a543ef459d0f"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "result.html",
    "revision": "400eba9d7c4ef4cd750bfb8177c62533"
  }, {
    "url": "test.html",
    "revision": "489df08245324a4c4a2b47f74d42421e"
  }, {
    "url": "types.html",
    "revision": "ec5379b29c2e6cdea85a015a09f41e09"
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
