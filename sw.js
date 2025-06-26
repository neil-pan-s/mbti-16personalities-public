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
    "url": "assets/app-Bc7-pnSv.js",
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
    "url": "assets/BF1sH0Md.js",
    "revision": null
  }, {
    "url": "assets/BjnNLqVx.js",
    "revision": null
  }, {
    "url": "assets/Bl0zWvo-.css",
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
    "url": "assets/C6rnkjJU.js",
    "revision": null
  }, {
    "url": "assets/CBXunnjh.js",
    "revision": null
  }, {
    "url": "assets/CDXMSumu.js",
    "revision": null
  }, {
    "url": "assets/CfgA1tQO.js",
    "revision": null
  }, {
    "url": "assets/Cj_ghclW.js",
    "revision": null
  }, {
    "url": "assets/CJWvpnsb.css",
    "revision": null
  }, {
    "url": "assets/CNZXjKOq.js",
    "revision": null
  }, {
    "url": "assets/CP3iFwBu.js",
    "revision": null
  }, {
    "url": "assets/CPMdm_zy.js",
    "revision": null
  }, {
    "url": "assets/CQNNl_wP.js",
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
    "url": "assets/DgruqFN-.js",
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
    "url": "assets/DynjCqPw.js",
    "revision": null
  }, {
    "url": "assets/DYuxCbwf.js",
    "revision": null
  }, {
    "url": "assets/DZWGFCVr.js",
    "revision": null
  }, {
    "url": "assets/eI4qCn_z.js",
    "revision": null
  }, {
    "url": "assets/gmVkOCBX.css",
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
    "url": "assets/oHL70HEs.css",
    "revision": null
  }, {
    "url": "assets/people-CCsKVy4-.svg",
    "revision": null
  }, {
    "url": "assets/pIwD7FTM.js",
    "revision": null
  }, {
    "url": "assets/Ql8p2Dk4.js",
    "revision": null
  }, {
    "url": "assets/RTKFCJmK.js",
    "revision": null
  }, {
    "url": "assets/Ua3JlNGb.js",
    "revision": null
  }, {
    "url": "assets/upgrade-CkrSpVnk.svg",
    "revision": null
  }, {
    "url": "assets/VDCXkP4u.js",
    "revision": null
  }, {
    "url": "assets/VqVODLTx.js",
    "revision": null
  }, {
    "url": "assets/vSIRV_E6.js",
    "revision": null
  }, {
    "url": "assets/wx-Bfv1OeoY.png",
    "revision": null
  }, {
    "url": "assets/x7H6yciF.css",
    "revision": null
  }, {
    "url": "assets/YD3zjl_D.js",
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
    "revision": "021c752cb67b9333de79af4ed003a400"
  }, {
    "url": "enfj.html",
    "revision": "4604e281df81cab9ca039d61edef7c0c"
  }, {
    "url": "enfp.html",
    "revision": "57ed2ae4a30c709fb4489a1fdc05ff47"
  }, {
    "url": "entj.html",
    "revision": "e2a7fdc362711c772315bf4994fde1af"
  }, {
    "url": "entp.html",
    "revision": "feab1a1858807b148a4f32947f12833b"
  }, {
    "url": "esfj.html",
    "revision": "61f620e6283c0c0e1147dddcad082f0b"
  }, {
    "url": "esfp.html",
    "revision": "dd9d67bde76d3fda222c5cdb107be017"
  }, {
    "url": "estj.html",
    "revision": "5babd6dee96211a9b488a898e9b7ceaa"
  }, {
    "url": "estp.html",
    "revision": "96410091dc7bebe6f9e062f980816d32"
  }, {
    "url": "index.html",
    "revision": "f5b3555a461c1cab4b7e8df48d21e4af"
  }, {
    "url": "infj.html",
    "revision": "d352b4b155327f570ac8f04354d82bdd"
  }, {
    "url": "infp.html",
    "revision": "f8936f3a1df93efa26078eeb7f8b2e72"
  }, {
    "url": "intj.html",
    "revision": "bea931da4a29bbf5c2306657ce4d63dd"
  }, {
    "url": "intp.html",
    "revision": "aff627d111d5682c114570929082143f"
  }, {
    "url": "isfj.html",
    "revision": "75617cb886cdbfbd8c591e4e6a48f6bf"
  }, {
    "url": "isfp.html",
    "revision": "73570dea226fb02fdc1f428ee07d0497"
  }, {
    "url": "istj.html",
    "revision": "1dfa5ff6a7f82f8c6b893eedef0ac1b9"
  }, {
    "url": "istp.html",
    "revision": "c9ef1b8d31a8f1879a7d4ffba2504596"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "result.html",
    "revision": "048d2e19116a0e2c82c7eedefedb5481"
  }, {
    "url": "test.html",
    "revision": "0bb9837f52243f5eb9030cd9d57bf6bf"
  }, {
    "url": "types.html",
    "revision": "8a7c3226e6ffe436e7385fa00167f3c0"
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
