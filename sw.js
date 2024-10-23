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
    "url": "assets/app-D3NfZlLs.js",
    "revision": null
  }, {
    "url": "assets/AUb8BxGU.js",
    "revision": null
  }, {
    "url": "assets/B0a173p5.js",
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
    "url": "assets/BDjqznI0.css",
    "revision": null
  }, {
    "url": "assets/BjnNLqVx.js",
    "revision": null
  }, {
    "url": "assets/Bl0zWvo-.css",
    "revision": null
  }, {
    "url": "assets/BPZL1741.js",
    "revision": null
  }, {
    "url": "assets/BquGyE27.js",
    "revision": null
  }, {
    "url": "assets/BRoWSGHI.css",
    "revision": null
  }, {
    "url": "assets/BW4iemBa.js",
    "revision": null
  }, {
    "url": "assets/BWEhohXz.js",
    "revision": null
  }, {
    "url": "assets/BymVHglh.js",
    "revision": null
  }, {
    "url": "assets/BZMM7cf2.js",
    "revision": null
  }, {
    "url": "assets/C-UO50Uj.js",
    "revision": null
  }, {
    "url": "assets/C39qY3MF.css",
    "revision": null
  }, {
    "url": "assets/C3OJiXsV.js",
    "revision": null
  }, {
    "url": "assets/C6rnkjJU.js",
    "revision": null
  }, {
    "url": "assets/CAKqO938.js",
    "revision": null
  }, {
    "url": "assets/CfgA1tQO.js",
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
    "url": "assets/Cs8ia3yB.js",
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
    "url": "assets/DQ5Zupmz.js",
    "revision": null
  }, {
    "url": "assets/DQicnYhK.js",
    "revision": null
  }, {
    "url": "assets/Dqysg9Ig.js",
    "revision": null
  }, {
    "url": "assets/DtfnXpzP.js",
    "revision": null
  }, {
    "url": "assets/DuSKeNiB.css",
    "revision": null
  }, {
    "url": "assets/DV-HlBPO.js",
    "revision": null
  }, {
    "url": "assets/Dx3U6qo9.js",
    "revision": null
  }, {
    "url": "assets/DZWGFCVr.js",
    "revision": null
  }, {
    "url": "assets/gencF6XU.js",
    "revision": null
  }, {
    "url": "assets/GLDiwqE3.js",
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
    "url": "assets/logo-DG9Mi4BC.svg",
    "revision": null
  }, {
    "url": "assets/model-CFsaf2GQ.jpg",
    "revision": null
  }, {
    "url": "assets/nXmhecTI.js",
    "revision": null
  }, {
    "url": "assets/OZXCy9tG.js",
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
    "revision": "afec7503d21ce05189d43faedf461c5f"
  }, {
    "url": "icons/apple-touch-icon.png",
    "revision": "61dea1c20742b36e7d7c027ec8316e7a"
  }, {
    "url": "icons/favicon.ico",
    "revision": "be6e5c5ca64497226387bc628a5ed0d3"
  }, {
    "url": "icons/icon.svg",
    "revision": "13cea5a25a7eaee5ee3366d6ad6e9955"
  }, {
    "url": "icons/maskable-icon-512x512.png",
    "revision": "bd537be15c94897fdcb14b5ce0acbcff"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "6479efa2375828a17a7e00e2cee453af"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "6bf172e452d788c5053fc8afd0f53833"
  }, {
    "url": "icons/pwa-64x64.png",
    "revision": "bdcfe23999a1d5f998517bf82efa2e52"
  }, {
    "url": "404.html",
    "revision": "2b5a1c32d4811bb34a4bf5d0db3b6acf"
  }, {
    "url": "enfj.html",
    "revision": "32048e8908e9b4bfca361d62a24de888"
  }, {
    "url": "enfp.html",
    "revision": "0d60a33e287cbcce99e4a2edabd1465f"
  }, {
    "url": "entj.html",
    "revision": "5acc2bcb53a4ef4d3d6ad9d1bfe4f7f0"
  }, {
    "url": "entp.html",
    "revision": "db30338bae0a5f09dd911cccb8e1e878"
  }, {
    "url": "esfj.html",
    "revision": "a94b47350f8a1805ebd05db852337a33"
  }, {
    "url": "esfp.html",
    "revision": "25a9f0c0814629e04adb10749fb17104"
  }, {
    "url": "estj.html",
    "revision": "f7a0aa32bbc2d79c978cdd2f127f7a16"
  }, {
    "url": "estp.html",
    "revision": "e7603b0cf3f0745657d98415ec51944a"
  }, {
    "url": "index.html",
    "revision": "db56dc48a976379e4a6889cf44323999"
  }, {
    "url": "infj.html",
    "revision": "e33064c98f25f4c501b1d50e049662ba"
  }, {
    "url": "infp.html",
    "revision": "c5ee18a64c519d279176180a2c40b870"
  }, {
    "url": "intj.html",
    "revision": "4d21fb0958e7663a5157938ec5e01be0"
  }, {
    "url": "intp.html",
    "revision": "27645b5fd3b888143768f0dfb87f44ac"
  }, {
    "url": "isfj.html",
    "revision": "504b32a5974672fc94efb844d90ad715"
  }, {
    "url": "isfp.html",
    "revision": "5d5fea4782dc09e453770e0700ca02e9"
  }, {
    "url": "istj.html",
    "revision": "c9fae75c37be6cf987c9f8aff601b19b"
  }, {
    "url": "istp.html",
    "revision": "cfb21242b5c2c44f9d786b442d2f855a"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "result.html",
    "revision": "f5c1975199f28c8fd11a41ed5872930f"
  }, {
    "url": "test.html",
    "revision": "3ed1d3aef967a46b3a6c8b05598ab67e"
  }, {
    "url": "types.html",
    "revision": "a2b4eaee9aafb6b156d00a467cc3cb91"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "6479efa2375828a17a7e00e2cee453af"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "6bf172e452d788c5053fc8afd0f53833"
  }, {
    "url": "manifest.webmanifest",
    "revision": "b2ced5a6cd4884bef3bcd99a3b3c171a"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
