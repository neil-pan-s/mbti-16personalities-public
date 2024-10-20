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
    "url": "assets/-uDlBL-_.js",
    "revision": null
  }, {
    "url": "assets/0Ek5E7cM.js",
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
    "url": "assets/app-BRznMBxB.js",
    "revision": null
  }, {
    "url": "assets/AUb8BxGU.js",
    "revision": null
  }, {
    "url": "assets/B7pB0_fA.css",
    "revision": null
  }, {
    "url": "assets/B8-RkRVy.js",
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
    "url": "assets/BquGyE27.js",
    "revision": null
  }, {
    "url": "assets/BRoWSGHI.css",
    "revision": null
  }, {
    "url": "assets/BRSnYHbg.css",
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
    "url": "assets/C39qY3MF.css",
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
    "url": "assets/DAFdu9Q-.js",
    "revision": null
  }, {
    "url": "assets/DAuHkT6H.js",
    "revision": null
  }, {
    "url": "assets/DawlIFS4.js",
    "revision": null
  }, {
    "url": "assets/DAZo7Dpt.js",
    "revision": null
  }, {
    "url": "assets/DCBIG-s4.js",
    "revision": null
  }, {
    "url": "assets/DcRZFEuQ.js",
    "revision": null
  }, {
    "url": "assets/DDO2Ugl1.css",
    "revision": null
  }, {
    "url": "assets/Dj08n4xB.js",
    "revision": null
  }, {
    "url": "assets/DQ5Zupmz.js",
    "revision": null
  }, {
    "url": "assets/DQicnYhK.js",
    "revision": null
  }, {
    "url": "assets/DtfnXpzP.js",
    "revision": null
  }, {
    "url": "assets/Dx3U6qo9.js",
    "revision": null
  }, {
    "url": "assets/dXhz_TBl.js",
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
    "url": "assets/L3svHPRV.js",
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
    "url": "assets/people-CCsKVy4-.svg",
    "revision": null
  }, {
    "url": "assets/pIwD7FTM.js",
    "revision": null
  }, {
    "url": "assets/qIouh27q.js",
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
    "revision": "e6672fab4f3f202d7f8a02c41170f16c"
  }, {
    "url": "enfj.html",
    "revision": "d74c0cc1342c4f99dba629fa5bbd2ca5"
  }, {
    "url": "enfp.html",
    "revision": "04e60ed487abd364e395572162d1d185"
  }, {
    "url": "entj.html",
    "revision": "f7f4211345162c1a7710b53d8ae92b49"
  }, {
    "url": "entp.html",
    "revision": "312cc9e84a4a18c4a0c06fa24f753308"
  }, {
    "url": "esfj.html",
    "revision": "819bb1e1b4ab5b9f9a4ba6d5c5010496"
  }, {
    "url": "esfp.html",
    "revision": "56eaab81410e567a5d952f314249201e"
  }, {
    "url": "estj.html",
    "revision": "298a0e7ff017a1f86dd0a4a90b417b41"
  }, {
    "url": "estp.html",
    "revision": "b542ca2590a34350043cbd7ebdf18f07"
  }, {
    "url": "index.html",
    "revision": "2fd94a39e5471f987c192593c6921bfb"
  }, {
    "url": "infj.html",
    "revision": "d0cd0c49b3b9d02628a59ba2aa29830a"
  }, {
    "url": "infp.html",
    "revision": "9fe93fcdf3ab0d937731de6964da1c98"
  }, {
    "url": "intj.html",
    "revision": "8ce5abd199ca54306096106d68964db5"
  }, {
    "url": "intp.html",
    "revision": "eb93be25a58f8eb88c3f2d455d49a62a"
  }, {
    "url": "isfj.html",
    "revision": "25cf147dcd0962ac7d48cc2f379821cc"
  }, {
    "url": "isfp.html",
    "revision": "c2b18babf4baa725ac75a56d02fdc36a"
  }, {
    "url": "istj.html",
    "revision": "8cce00e0e2fed9658a4b76f7a638a854"
  }, {
    "url": "istp.html",
    "revision": "7efff965aca99617a09ab8a4a4f1e2bb"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "result.html",
    "revision": "8a2e8d5005d47e3412cc77429c716b09"
  }, {
    "url": "test.html",
    "revision": "5ea8cb99b3fd381149d7e430892faced"
  }, {
    "url": "types.html",
    "revision": "0b3e9becf17b96c5e7228a77b532ffdc"
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
