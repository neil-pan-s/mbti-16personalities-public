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
    "url": "assets/app-wlIW065s.js",
    "revision": null
  }, {
    "url": "assets/AUb8BxGU.js",
    "revision": null
  }, {
    "url": "assets/B3dSay_D.js",
    "revision": null
  }, {
    "url": "assets/B7pB0_fA.css",
    "revision": null
  }, {
    "url": "assets/B9k3MDNK.js",
    "revision": null
  }, {
    "url": "assets/BAFGZPca.js",
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
    "url": "assets/Bu-dMKXs.js",
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
    "url": "assets/CqGuPvza.js",
    "revision": null
  }, {
    "url": "assets/CqzHAeJK.js",
    "revision": null
  }, {
    "url": "assets/cvAtn-sq.js",
    "revision": null
  }, {
    "url": "assets/CweRP3zE.js",
    "revision": null
  }, {
    "url": "assets/CxBnUIjN.js",
    "revision": null
  }, {
    "url": "assets/d_43GtIr.js",
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
    "url": "assets/DIakEBzM.js",
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
    "url": "assets/DZWGFCVr.js",
    "revision": null
  }, {
    "url": "assets/egEy9FmC.js",
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
    "url": "assets/pait7WPj.js",
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
    "url": "assets/ZVTO2-R9.js",
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
    "revision": "5fcfe2e62495dffe3002716760744fb8"
  }, {
    "url": "enfj.html",
    "revision": "a012f3e1e1f657c4457d5b01a9c821b8"
  }, {
    "url": "enfp.html",
    "revision": "76e77ccef9a74d306392bb2f3e085f57"
  }, {
    "url": "entj.html",
    "revision": "22602ec36814567c332e31fdc618233c"
  }, {
    "url": "entp.html",
    "revision": "a009c771e1370c0c4b9a4e855ed3cd4f"
  }, {
    "url": "esfj.html",
    "revision": "a416bcc889f686b665f4948db1b51de2"
  }, {
    "url": "esfp.html",
    "revision": "ec3c74904fb345435623bc96248f5c5d"
  }, {
    "url": "estj.html",
    "revision": "c24fa086c8c96c6b1af57806f11cfb91"
  }, {
    "url": "estp.html",
    "revision": "e3bfc8126c28d59d4d5bd027484090d9"
  }, {
    "url": "index.html",
    "revision": "314f06da79d6c7445a500529de59e17c"
  }, {
    "url": "infj.html",
    "revision": "1c8910a8a1ec3b5caff12e516473a34b"
  }, {
    "url": "infp.html",
    "revision": "699e0e3a122368a6021f5bdbf12dc238"
  }, {
    "url": "intj.html",
    "revision": "c3d4e608f812e8a7307adb00c83cf13b"
  }, {
    "url": "intp.html",
    "revision": "71bb5b63ae65fd8b6a0c20365e7f2fb7"
  }, {
    "url": "isfj.html",
    "revision": "be73661461712eaf8c4229b5e6c6ce82"
  }, {
    "url": "isfp.html",
    "revision": "2aecb5779dbee415b2ed61ee7356f86f"
  }, {
    "url": "istj.html",
    "revision": "c598c962a4ddf0eca0a070dcea3d18d9"
  }, {
    "url": "istp.html",
    "revision": "2c7006856f2a27b36452dd1d36f2e71c"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "result.html",
    "revision": "c99d0d8af130b1fc601fd55ff11307f3"
  }, {
    "url": "test.html",
    "revision": "e9dd544a8b9bad7d97cc5ef0b4ca1a78"
  }, {
    "url": "types.html",
    "revision": "137c3871ef12eec84262e708aeb7eb0e"
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
