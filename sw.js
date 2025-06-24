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
    "url": "assets/_2GS0dK6.js",
    "revision": null
  }, {
    "url": "assets/404-COw5hksb.png",
    "revision": null
  }, {
    "url": "assets/7sx6j6O9.css",
    "revision": null
  }, {
    "url": "assets/ahbhI-1g.js",
    "revision": null
  }, {
    "url": "assets/app-BqP5rur9.js",
    "revision": null
  }, {
    "url": "assets/AUb8BxGU.js",
    "revision": null
  }, {
    "url": "assets/B3bqWjHR.js",
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
    "url": "assets/BlBhDyQ-.js",
    "revision": null
  }, {
    "url": "assets/BPN_KASY.js",
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
    "url": "assets/CfgA1tQO.js",
    "revision": null
  }, {
    "url": "assets/CJ-gpcgq.js",
    "revision": null
  }, {
    "url": "assets/CJWvpnsb.css",
    "revision": null
  }, {
    "url": "assets/CMt8h44W.css",
    "revision": null
  }, {
    "url": "assets/CP3iFwBu.js",
    "revision": null
  }, {
    "url": "assets/CqAwq_er.js",
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
    "url": "assets/CZz-2bVj.js",
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
    "url": "assets/DDFS_v9y.js",
    "revision": null
  }, {
    "url": "assets/DDO2Ugl1.css",
    "revision": null
  }, {
    "url": "assets/DdUVIW9b.js",
    "revision": null
  }, {
    "url": "assets/DPUUWY_i.js",
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
    "url": "assets/DrlhHtj9.js",
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
    "revision": "8e5aaf303738df707553a3e493840379"
  }, {
    "url": "enfj.html",
    "revision": "92653706a6deccf7374a2a0497403a16"
  }, {
    "url": "enfp.html",
    "revision": "af0668e3c5c3d0a63db4d775082a92ca"
  }, {
    "url": "entj.html",
    "revision": "f5533dcf003bd085aeb766257d2887e7"
  }, {
    "url": "entp.html",
    "revision": "519046a3fbf681b9e9232da8825419fd"
  }, {
    "url": "esfj.html",
    "revision": "2a1a0bee2b8ca2bf590c82a03c32ea34"
  }, {
    "url": "esfp.html",
    "revision": "8dd7841c937181833948962286c7e081"
  }, {
    "url": "estj.html",
    "revision": "6e08285867dcb9125008467138ff44de"
  }, {
    "url": "estp.html",
    "revision": "5c20ab64c484e05cef459f5126d96191"
  }, {
    "url": "index.html",
    "revision": "794c0e94e95566bc546e545d2fdeae6b"
  }, {
    "url": "infj.html",
    "revision": "55473184bece4875a3e47402ea29b399"
  }, {
    "url": "infp.html",
    "revision": "40cbe473e27ecb3b5d7d401853e70b13"
  }, {
    "url": "intj.html",
    "revision": "4386dd9d0d3b197ed250d0207f9d701f"
  }, {
    "url": "intp.html",
    "revision": "acb9bbdcc8d1f50d4a265c50db4237f4"
  }, {
    "url": "isfj.html",
    "revision": "8a60d0012f21c1a979ae012ccde44178"
  }, {
    "url": "isfp.html",
    "revision": "41473d7ab08c911184f6ddc1d39cbf7c"
  }, {
    "url": "istj.html",
    "revision": "ff58ee0681ead6a596cc4aa68c1b3268"
  }, {
    "url": "istp.html",
    "revision": "d24e19adb5145dba5046563a2c5fb56a"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "result.html",
    "revision": "df40be49e18e51bbed2fc9d11826a5c8"
  }, {
    "url": "test.html",
    "revision": "dd2ab6131318b817a33a367d77c38567"
  }, {
    "url": "types.html",
    "revision": "033fa27b1e935c935de96d29d347188b"
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
