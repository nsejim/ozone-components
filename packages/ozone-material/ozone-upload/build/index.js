/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {



(function () {
  'use strict';

  const userPolymer = window.Polymer;

  /**
   * @namespace Polymer
   * @summary Polymer is a lightweight library built on top of the web
   *   standards-based Web Components API's, and makes it easy to build your
   *   own custom HTML elements.
   * @param {!PolymerInit} info Prototype for the custom element. It must contain
   *   an `is` property to specify the element name. Other properties populate
   *   the element prototype. The `properties`, `observers`, `hostAttributes`,
   *   and `listeners` properties are processed to create element features.
   * @return {!Object} Returns a custom element class for the given provided
   *   prototype `info` object. The name of the element if given by `info.is`.
   */
  window.Polymer = function (info) {
    return window.Polymer._polymerFn(info);
  };

  // support user settings on the Polymer object
  if (userPolymer) {
    Object.assign(Polymer, userPolymer);
  }

  // To be plugged by legacy implementation if loaded
  /* eslint-disable valid-jsdoc */
  /**
   * @param {!PolymerInit} info Prototype for the custom element. It must contain
   *   an `is` property to specify the element name. Other properties populate
   *   the element prototype. The `properties`, `observers`, `hostAttributes`,
   *   and `listeners` properties are processed to create element features.
   * @return {!Object} Returns a custom element class for the given provided
   *   prototype `info` object. The name of the element if given by `info.is`.
   */
  window.Polymer._polymerFn = function (info) {
    // eslint-disable-line no-unused-vars
    throw new Error('Load polymer.html to use the Polymer() function.');
  };
  /* eslint-enable */

  window.Polymer.version = '2.5.0';

  /* eslint-disable no-unused-vars */
  /*
  When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
  We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
  */
  window.JSCompiler_renameProperty = function (prop, obj) {
    return prop;
  };
  /* eslint-enable */
})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* eslint-env browser */

class RegisterHtmlTemplate {
  /**
   * Create a `<template>` element to hold `<dom-module>` content.
   * This bit of code will execute in the context of the main document,
   * calling `importNode` on the `<template>`, which in turn triggers
   * the lifecycle of the `<dom-module>` and allows it to insert its
   * content into Polymer's global module map. When a Polymer element
   * boots up it will fetch its template from this module map.
   * https://github.com/Polymer/polymer/blob/master/lib/mixins/element-mixin.html#L501-L538
   * @param {string} val A `<dom-module>` as an HTML string
   */
  static register(val) {
    let content;
    const template = document.createElement('template');
    template.innerHTML = val;
    if (template.content) {
      content = template.content; // eslint-disable-line prefer-destructuring
    } else {
      content = document.createDocumentFragment();
      while (template.firstChild) {
        content.appendChild(template.firstChild);
      }
    }
    document.importNode(content, true);
  }
  /**
   * Content that will be injected into the main document. This is primarily
   * for things like `<iron-iconset>` and `<custom-style>` which do not have
   * templates but rely on HTML Imports ability to apply content to the main
   * document.
   * @param {string} val An HTML string
   */
  static toBody(val) {
    const trimmedVal = val.trim();
    if (trimmedVal) {
      const div = document.createElement('div');
      div.innerHTML = trimmedVal;
      if (div.firstChild) {
        if (document.body) {
          document.body.insertBefore(div.firstChild, document.body.firstChild);
        } else {
          document.addEventListener('DOMContentLoaded', () => {
            document.body.insertBefore(div.firstChild, document.body.firstChild);
          });
        }
      }
    }
  }
}

module.exports = RegisterHtmlTemplate;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

(function () {

  'use strict';

  // unique global id for deduping mixins.

  let dedupeId = 0;

  /**
   * @constructor
   * @extends {Function}
   */
  function MixinFunction() {}
  /** @type {(WeakMap | undefined)} */
  MixinFunction.prototype.__mixinApplications;
  /** @type {(Object | undefined)} */
  MixinFunction.prototype.__mixinSet;

  /* eslint-disable valid-jsdoc */
  /**
   * Wraps an ES6 class expression mixin such that the mixin is only applied
   * if it has not already been applied its base argument. Also memoizes mixin
   * applications.
   *
   * @memberof Polymer
   * @template T
   * @param {T} mixin ES6 class expression mixin to wrap
   * @return {T}
   * @suppress {invalidCasts}
   */
  Polymer.dedupingMixin = function (mixin) {
    let mixinApplications = /** @type {!MixinFunction} */mixin.__mixinApplications;
    if (!mixinApplications) {
      mixinApplications = new WeakMap();
      /** @type {!MixinFunction} */mixin.__mixinApplications = mixinApplications;
    }
    // maintain a unique id for each mixin
    let mixinDedupeId = dedupeId++;
    function dedupingMixin(base) {
      let baseSet = /** @type {!MixinFunction} */base.__mixinSet;
      if (baseSet && baseSet[mixinDedupeId]) {
        return base;
      }
      let map = mixinApplications;
      let extended = map.get(base);
      if (!extended) {
        extended = /** @type {!Function} */mixin(base);
        map.set(base, extended);
      }
      // copy inherited mixin set from the extended class, or the base class
      // NOTE: we avoid use of Set here because some browser (IE11)
      // cannot extend a base Set via the constructor.
      let mixinSet = Object.create( /** @type {!MixinFunction} */extended.__mixinSet || baseSet || null);
      mixinSet[mixinDedupeId] = true;
      /** @type {!MixinFunction} */extended.__mixinSet = mixinSet;
      return extended;
    }

    return (/** @type {T} */dedupingMixin
    );
  };
  /* eslint-enable valid-jsdoc */
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.toBody("<custom-style> <style is=custom-style>[hidden]{display:none!important}</style> </custom-style>");

RegisterHtmlTemplate.toBody("<custom-style> <style is=custom-style>html{--layout:{display:-ms-flexbox;display:-webkit-flex;display:flex};--layout-inline:{display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex};--layout-horizontal:{@apply --layout;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row};--layout-horizontal-reverse:{@apply --layout;-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse};--layout-vertical:{@apply --layout;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column};--layout-vertical-reverse:{@apply --layout;-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse};--layout-wrap:{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap};--layout-wrap-reverse:{-ms-flex-wrap:wrap-reverse;-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse};--layout-flex-auto:{-ms-flex:1 1 auto;-webkit-flex:1 1 auto;flex:1 1 auto};--layout-flex-none:{-ms-flex:none;-webkit-flex:none;flex:none};--layout-flex:{-ms-flex:1 1 .000000001px;-webkit-flex:1;flex:1;-webkit-flex-basis:.000000001px;flex-basis:.000000001px};--layout-flex-2:{-ms-flex:2;-webkit-flex:2;flex:2};--layout-flex-3:{-ms-flex:3;-webkit-flex:3;flex:3};--layout-flex-4:{-ms-flex:4;-webkit-flex:4;flex:4};--layout-flex-5:{-ms-flex:5;-webkit-flex:5;flex:5};--layout-flex-6:{-ms-flex:6;-webkit-flex:6;flex:6};--layout-flex-7:{-ms-flex:7;-webkit-flex:7;flex:7};--layout-flex-8:{-ms-flex:8;-webkit-flex:8;flex:8};--layout-flex-9:{-ms-flex:9;-webkit-flex:9;flex:9};--layout-flex-10:{-ms-flex:10;-webkit-flex:10;flex:10};--layout-flex-11:{-ms-flex:11;-webkit-flex:11;flex:11};--layout-flex-12:{-ms-flex:12;-webkit-flex:12;flex:12};--layout-start:{-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start};--layout-center:{-ms-flex-align:center;-webkit-align-items:center;align-items:center};--layout-end:{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end};--layout-baseline:{-ms-flex-align:baseline;-webkit-align-items:baseline;align-items:baseline};--layout-start-justified:{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start};--layout-center-justified:{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center};--layout-end-justified:{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end};--layout-around-justified:{-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around};--layout-justified:{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between};--layout-center-center:{@apply --layout-center;@apply --layout-center-justified;};--layout-self-start:{-ms-align-self:flex-start;-webkit-align-self:flex-start;align-self:flex-start};--layout-self-center:{-ms-align-self:center;-webkit-align-self:center;align-self:center};--layout-self-end:{-ms-align-self:flex-end;-webkit-align-self:flex-end;align-self:flex-end};--layout-self-stretch:{-ms-align-self:stretch;-webkit-align-self:stretch;align-self:stretch};--layout-self-baseline:{-ms-align-self:baseline;-webkit-align-self:baseline;align-self:baseline};--layout-start-aligned:{-ms-flex-line-pack:start;-ms-align-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start};--layout-end-aligned:{-ms-flex-line-pack:end;-ms-align-content:flex-end;-webkit-align-content:flex-end;align-content:flex-end};--layout-center-aligned:{-ms-flex-line-pack:center;-ms-align-content:center;-webkit-align-content:center;align-content:center};--layout-between-aligned:{-ms-flex-line-pack:justify;-ms-align-content:space-between;-webkit-align-content:space-between;align-content:space-between};--layout-around-aligned:{-ms-flex-line-pack:distribute;-ms-align-content:space-around;-webkit-align-content:space-around;align-content:space-around};--layout-block:{display:block};--layout-invisible:{visibility:hidden!important};--layout-relative:{position:relative};--layout-fit:{position:absolute;top:0;right:0;bottom:0;left:0};--layout-scroll:{-webkit-overflow-scrolling:touch;overflow:auto};--layout-fullbleed:{margin:0;height:100vh};--layout-fixed-top:{position:fixed;top:0;left:0;right:0};--layout-fixed-right:{position:fixed;top:0;right:0;bottom:0};--layout-fixed-bottom:{position:fixed;right:0;bottom:0;left:0};--layout-fixed-left:{position:fixed;top:0;bottom:0;left:0};}</style> </custom-style>");

// This is left only for backward compatibility with projects
// that incorrectly relied on unscoped global [hidden] rules;
// removing would be a breaking change, but new projects
// should never rely on this.
(function () {
  var style = document.createElement('style');
  style.textContent = '[hidden] { display: none !important; }';
  document.head.appendChild(style);
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

(function () {
  'use strict';

  let CSS_URL_RX = /(url\()([^)]*)(\))/g;
  let ABS_URL = /(^\/)|(^#)|(^[\w-\d]*:)/;
  let workingURL;
  let resolveDoc;
  /**
   * Resolves the given URL against the provided `baseUri'.
   * 
   * Note that this function performs no resolution for URLs that start
   * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
   * URL resolution, use `window.URL`.
   *
   * @memberof Polymer.ResolveUrl
   * @param {string} url Input URL to resolve
   * @param {?string=} baseURI Base URI to resolve the URL against
   * @return {string} resolved URL
   */
  function resolveUrl(url, baseURI) {
    if (url && ABS_URL.test(url)) {
      return url;
    }
    // Lazy feature detection.
    if (workingURL === undefined) {
      workingURL = false;
      try {
        const u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        workingURL = u.href === 'http://a/c%20d';
      } catch (e) {
        // silently fail
      }
    }
    if (!baseURI) {
      baseURI = document.baseURI || window.location.href;
    }
    if (workingURL) {
      return new URL(url, baseURI).href;
    }
    // Fallback to creating an anchor into a disconnected document.
    if (!resolveDoc) {
      resolveDoc = document.implementation.createHTMLDocument('temp');
      resolveDoc.base = resolveDoc.createElement('base');
      resolveDoc.head.appendChild(resolveDoc.base);
      resolveDoc.anchor = resolveDoc.createElement('a');
      resolveDoc.body.appendChild(resolveDoc.anchor);
    }
    resolveDoc.base.href = baseURI;
    resolveDoc.anchor.href = url;
    return resolveDoc.anchor.href || url;
  }

  /**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @memberof Polymer.ResolveUrl
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */
  function resolveCss(cssText, baseURI) {
    return cssText.replace(CSS_URL_RX, function (m, pre, url, post) {
      return pre + '\'' + resolveUrl(url.replace(/["']/g, ''), baseURI) + '\'' + post;
    });
  }

  /**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @memberof Polymer.ResolveUrl
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */
  function pathFromUrl(url) {
    return url.substring(0, url.lastIndexOf('/') + 1);
  }

  /**
   * Module with utilities for resolving relative URL's.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module with utilities for resolving relative URL's.
   */
  Polymer.ResolveUrl = {
    resolveCss: resolveCss,
    resolveUrl: resolveUrl,
    pathFromUrl: pathFromUrl
  };
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

(function () {

  'use strict';

  // Microtask implemented using Mutation Observer

  let microtaskCurrHandle = 0;
  let microtaskLastHandle = 0;
  let microtaskCallbacks = [];
  let microtaskNodeContent = 0;
  let microtaskNode = document.createTextNode('');
  new window.MutationObserver(microtaskFlush).observe(microtaskNode, { characterData: true });

  function microtaskFlush() {
    const len = microtaskCallbacks.length;
    for (let i = 0; i < len; i++) {
      let cb = microtaskCallbacks[i];
      if (cb) {
        try {
          cb();
        } catch (e) {
          setTimeout(() => {
            throw e;
          });
        }
      }
    }
    microtaskCallbacks.splice(0, len);
    microtaskLastHandle += len;
  }

  /**
   * Module that provides a number of strategies for enqueuing asynchronous
   * tasks.  Each sub-module provides a standard `run(fn)` interface that returns a
   * handle, and a `cancel(handle)` interface for canceling async tasks before
   * they run.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module that provides a number of strategies for enqueuing asynchronous
   * tasks.
   */
  Polymer.Async = {

    /**
     * Async interface wrapper around `setTimeout`.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface wrapper around `setTimeout`.
     */
    timeOut: {
      /**
       * Returns a sub-module with the async interface providing the provided
       * delay.
       *
       * @memberof Polymer.Async.timeOut
       * @param {number=} delay Time to wait before calling callbacks in ms
       * @return {!AsyncInterface} An async timeout interface
       */
      after(delay) {
        return {
          run(fn) {
            return window.setTimeout(fn, delay);
          },
          cancel(handle) {
            window.clearTimeout(handle);
          }
        };
      },
      /**
       * Enqueues a function called in the next task.
       *
       * @memberof Polymer.Async.timeOut
       * @param {!Function} fn Callback to run
       * @param {number=} delay Delay in milliseconds
       * @return {number} Handle used for canceling task
       */
      run(fn, delay) {
        return window.setTimeout(fn, delay);
      },
      /**
       * Cancels a previously enqueued `timeOut` callback.
       *
       * @memberof Polymer.Async.timeOut
       * @param {number} handle Handle returned from `run` of callback to cancel
       * @return {void}
       */
      cancel(handle) {
        window.clearTimeout(handle);
      }
    },

    /**
     * Async interface wrapper around `requestAnimationFrame`.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface wrapper around `requestAnimationFrame`.
     */
    animationFrame: {
      /**
       * Enqueues a function called at `requestAnimationFrame` timing.
       *
       * @memberof Polymer.Async.animationFrame
       * @param {function(number):void} fn Callback to run
       * @return {number} Handle used for canceling task
       */
      run(fn) {
        return window.requestAnimationFrame(fn);
      },
      /**
       * Cancels a previously enqueued `animationFrame` callback.
       *
       * @memberof Polymer.Async.animationFrame
       * @param {number} handle Handle returned from `run` of callback to cancel
       * @return {void}
       */
      cancel(handle) {
        window.cancelAnimationFrame(handle);
      }
    },

    /**
     * Async interface wrapper around `requestIdleCallback`.  Falls back to
     * `setTimeout` on browsers that do not support `requestIdleCallback`.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface wrapper around `requestIdleCallback`.
     */
    idlePeriod: {
      /**
       * Enqueues a function called at `requestIdleCallback` timing.
       *
       * @memberof Polymer.Async.idlePeriod
       * @param {function(!IdleDeadline):void} fn Callback to run
       * @return {number} Handle used for canceling task
       */
      run(fn) {
        return window.requestIdleCallback ? window.requestIdleCallback(fn) : window.setTimeout(fn, 16);
      },
      /**
       * Cancels a previously enqueued `idlePeriod` callback.
       *
       * @memberof Polymer.Async.idlePeriod
       * @param {number} handle Handle returned from `run` of callback to cancel
       * @return {void}
       */
      cancel(handle) {
        window.cancelIdleCallback ? window.cancelIdleCallback(handle) : window.clearTimeout(handle);
      }
    },

    /**
     * Async interface for enqueuing callbacks that run at microtask timing.
     *
     * Note that microtask timing is achieved via a single `MutationObserver`,
     * and thus callbacks enqueued with this API will all run in a single
     * batch, and not interleaved with other microtasks such as promises.
     * Promises are avoided as an implementation choice for the time being
     * due to Safari bugs that cause Promises to lack microtask guarantees.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface for enqueuing callbacks that run at microtask
     *   timing.
     */
    microTask: {

      /**
       * Enqueues a function called at microtask timing.
       *
       * @memberof Polymer.Async.microTask
       * @param {!Function=} callback Callback to run
       * @return {number} Handle used for canceling task
       */
      run(callback) {
        microtaskNode.textContent = microtaskNodeContent++;
        microtaskCallbacks.push(callback);
        return microtaskCurrHandle++;
      },

      /**
       * Cancels a previously enqueued `microTask` callback.
       *
       * @memberof Polymer.Async.microTask
       * @param {number} handle Handle returned from `run` of callback to cancel
       * @return {void}
       */
      cancel(handle) {
        const idx = handle - microtaskLastHandle;
        if (idx >= 0) {
          if (!microtaskCallbacks[idx]) {
            throw new Error('invalid async handle: ' + handle);
          }
          microtaskCallbacks[idx] = null;
        }
      }

    }
  };
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(2);

(function () {
  'use strict';

  // Common implementation for mixin & behavior

  function mutablePropertyChange(inst, property, value, old, mutableData) {
    let isObject;
    if (mutableData) {
      isObject = typeof value === 'object' && value !== null;
      // Pull `old` for Objects from temp cache, but treat `null` as a primitive
      if (isObject) {
        old = inst.__dataTemp[property];
      }
    }
    // Strict equality check, but return false for NaN===NaN
    let shouldChange = old !== value && (old === old || value === value);
    // Objects are stored in temporary cache (cleared at end of
    // turn), which is used for dirty-checking
    if (isObject && shouldChange) {
      inst.__dataTemp[property] = value;
    }
    return shouldChange;
  }

  /**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `Polymer.PropertyEffects`
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this mixin or enable the
   * `Polymer.OptionalMutableData` mixin.
   *
   * In order to make the dirty check strategy configurable, see
   * `Polymer.OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @memberof Polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   */
  Polymer.MutableData = Polymer.dedupingMixin(superClass => {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_MutableData}
     */
    class MutableData extends superClass {
      /**
       * Overrides `Polymer.PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * This method pulls the value to dirty check against from the `__dataTemp`
       * cache (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */
      _shouldPropertyChange(property, value, old) {
        return mutablePropertyChange(this, property, value, old, true);
      }

    }
    /** @type {boolean} */
    MutableData.prototype.mutableData = false;

    return MutableData;
  });

  /**
   * Element class mixin to add the optional ability to skip strict
   * dirty-checking for objects and arrays (always consider them to be
   * "dirty") by setting a `mutable-data` attribute on an element instance.
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will allow Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must enable this mixin or apply the
   * `Polymer.MutableData` mixin.
   *
   * While this mixin adds the ability to forgo Object/Array dirty checking,
   * the `mutableData` flag defaults to false and must be set on the instance.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse by relying on `mutableData: true` as opposed to using
   * strict dirty checking with immutable patterns or Polymer's path notification
   * API.
   *
   * @mixinFunction
   * @polymer
   * @memberof Polymer
   * @summary Element class mixin to optionally skip strict dirty-checking
   *   for objects and arrays
   */
  Polymer.OptionalMutableData = Polymer.dedupingMixin(superClass => {

    /**
     * @mixinClass
     * @polymer
     * @implements {Polymer_OptionalMutableData}
     */
    class OptionalMutableData extends superClass {

      static get properties() {
        return {
          /**
           * Instance-level flag for configuring the dirty-checking strategy
           * for this element.  When true, Objects and Arrays will skip dirty
           * checking, otherwise strict equality checking will be used.
           */
          mutableData: Boolean
        };
      }

      /**
       * Overrides `Polymer.PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * When `this.mutableData` is true on this instance, this method
       * pulls the value to dirty check against from the `__dataTemp` cache
       * (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */
      _shouldPropertyChange(property, value, old) {
        return mutablePropertyChange(this, property, value, old, this.mutableData);
      }
    }

    return OptionalMutableData;
  });

  // Export for use by legacy behavior
  Polymer.MutableData._mutablePropertyChange = mutablePropertyChange;
})();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(2);

__webpack_require__(38);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(39);

(function () {

  'use strict';

  /** @const {Object} */

  const CaseMap = Polymer.CaseMap;

  // Monotonically increasing unique ID used for de-duping effects triggered
  // from multiple properties in the same turn
  let dedupeId = 0;

  /**
   * Property effect types; effects are stored on the prototype using these keys
   * @enum {string}
   */
  const TYPES = {
    COMPUTE: '__computeEffects',
    REFLECT: '__reflectEffects',
    NOTIFY: '__notifyEffects',
    PROPAGATE: '__propagateEffects',
    OBSERVE: '__observeEffects',
    READ_ONLY: '__readOnly'
  };

  /**
   * @typedef {{
   * name: (string | undefined),
   * structured: (boolean | undefined),
   * wildcard: (boolean | undefined)
   * }}
   */
  let DataTrigger; //eslint-disable-line no-unused-vars

  /**
   * @typedef {{
   * info: ?,
   * trigger: (!DataTrigger | undefined),
   * fn: (!Function | undefined)
   * }}
   */
  let DataEffect; //eslint-disable-line no-unused-vars

  let PropertyEffectsType; //eslint-disable-line no-unused-vars

  /**
   * Ensures that the model has an own-property map of effects for the given type.
   * The model may be a prototype or an instance.
   *
   * Property effects are stored as arrays of effects by property in a map,
   * by named type on the model. e.g.
   *
   *   __computeEffects: {
   *     foo: [ ... ],
   *     bar: [ ... ]
   *   }
   *
   * If the model does not yet have an effect map for the type, one is created
   * and returned.  If it does, but it is not an own property (i.e. the
   * prototype had effects), the the map is deeply cloned and the copy is
   * set on the model and returned, ready for new effects to be added.
   *
   * @param {Object} model Prototype or instance
   * @param {string} type Property effect type
   * @return {Object} The own-property map of effects for the given type
   * @private
   */
  function ensureOwnEffectMap(model, type) {
    let effects = model[type];
    if (!effects) {
      effects = model[type] = {};
    } else if (!model.hasOwnProperty(type)) {
      effects = model[type] = Object.create(model[type]);
      for (let p in effects) {
        let protoFx = effects[p];
        let instFx = effects[p] = Array(protoFx.length);
        for (let i = 0; i < protoFx.length; i++) {
          instFx[i] = protoFx[i];
        }
      }
    }
    return effects;
  }

  // -- effects ----------------------------------------------

  /**
   * Runs all effects of a given type for the given set of property changes
   * on an instance.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {Object} props Bag of current property changes
   * @param {Object=} oldProps Bag of previous values for changed properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */
  function runEffects(inst, effects, props, oldProps, hasPaths, extraArgs) {
    if (effects) {
      let ran = false;
      let id = dedupeId++;
      for (let prop in props) {
        if (runEffectsForProperty(inst, effects, id, prop, props, oldProps, hasPaths, extraArgs)) {
          ran = true;
        }
      }
      return ran;
    }
    return false;
  }

  /**
   * Runs a list of effects for a given property.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */
  function runEffectsForProperty(inst, effects, dedupeId, prop, props, oldProps, hasPaths, extraArgs) {
    let ran = false;
    let rootProperty = hasPaths ? Polymer.Path.root(prop) : prop;
    let fxs = effects[rootProperty];
    if (fxs) {
      for (let i = 0, l = fxs.length, fx; i < l && (fx = fxs[i]); i++) {
        if ((!fx.info || fx.info.lastRun !== dedupeId) && (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
          if (fx.info) {
            fx.info.lastRun = dedupeId;
          }
          fx.fn(inst, prop, props, oldProps, fx.info, hasPaths, extraArgs);
          ran = true;
        }
      }
    }
    return ran;
  }

  /**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */
  function pathMatchesTrigger(path, trigger) {
    if (trigger) {
      let triggerPath = trigger.name;
      return triggerPath == path || trigger.structured && Polymer.Path.isAncestor(triggerPath, path) || trigger.wildcard && Polymer.Path.isDescendant(triggerPath, path);
    } else {
      return true;
    }
  }

  /**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */
  function runObserverEffect(inst, property, props, oldProps, info) {
    let fn = typeof info.method === "string" ? inst[info.method] : info.method;
    let changedProp = info.property;
    if (fn) {
      fn.call(inst, inst.__data[changedProp], oldProps[changedProp]);
    } else if (!info.dynamicFn) {
      console.warn('observer method `' + info.method + '` not defined');
    }
  }

  /**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */
  function runNotifyEffects(inst, notifyProps, props, oldProps, hasPaths) {
    // Notify
    let fxs = inst[TYPES.NOTIFY];
    let notified;
    let id = dedupeId++;
    // Try normal notify effects; if none, fall back to try path notification
    for (let prop in notifyProps) {
      if (notifyProps[prop]) {
        if (fxs && runEffectsForProperty(inst, fxs, id, prop, props, oldProps, hasPaths)) {
          notified = true;
        } else if (hasPaths && notifyPath(inst, prop, props)) {
          notified = true;
        }
      }
    }
    // Flush host if we actually notified and host was batching
    // And the host has already initialized clients; this prevents
    // an issue with a host observing data changes before clients are ready.
    let host;
    if (notified && (host = inst.__dataHost) && host._invalidateProperties) {
      host._invalidateProperties();
    }
  }

  /**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */
  function notifyPath(inst, path, props) {
    let rootProperty = Polymer.Path.root(path);
    if (rootProperty !== path) {
      let eventName = Polymer.CaseMap.camelToDashCase(rootProperty) + '-changed';
      dispatchNotifyEvent(inst, eventName, props[path], path);
      return true;
    }
    return false;
  }

  /**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} eventName The name of the event to send ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property changed, the path
   *   that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */
  function dispatchNotifyEvent(inst, eventName, value, path) {
    let detail = {
      value: value,
      queueProperty: true
    };
    if (path) {
      detail.path = path;
    }
    /** @type {!HTMLElement} */inst.dispatchEvent(new CustomEvent(eventName, { detail }));
  }

  /**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */
  function runNotifyEffect(inst, property, props, oldProps, info, hasPaths) {
    let rootProperty = hasPaths ? Polymer.Path.root(property) : property;
    let path = rootProperty != property ? property : null;
    let value = path ? Polymer.Path.get(inst, path) : inst.__data[property];
    if (path && value === undefined) {
      value = props[property]; // specifically for .splices
    }
    dispatchNotifyEvent(inst, info.eventName, value, path);
  }

  /**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!PropertyEffectsType} inst Host element instance handling the notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */
  function handleNotification(event, inst, fromProp, toPath, negate) {
    let value;
    let detail = /** @type {Object} */event.detail;
    let fromPath = detail && detail.path;
    if (fromPath) {
      toPath = Polymer.Path.translate(fromProp, toPath, fromPath);
      value = detail && detail.value;
    } else {
      value = event.target[fromProp];
    }
    value = negate ? !value : value;
    if (!inst[TYPES.READ_ONLY] || !inst[TYPES.READ_ONLY][toPath]) {
      if (inst._setPendingPropertyOrPath(toPath, value, true, Boolean(fromPath)) && (!detail || !detail.queueProperty)) {
        inst._invalidateProperties();
      }
    }
  }

  /**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */
  function runReflectEffect(inst, property, props, oldProps, info) {
    let value = inst.__data[property];
    if (Polymer.sanitizeDOMValue) {
      value = Polymer.sanitizeDOMValue(value, info.attrName, 'attribute', /** @type {Node} */inst);
    }
    inst._propertyToAttribute(property, info.attrName, value);
  }

  /**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {!Object} changedProps Bag of changed properties
   * @param {!Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */
  function runComputedEffects(inst, changedProps, oldProps, hasPaths) {
    let computeEffects = inst[TYPES.COMPUTE];
    if (computeEffects) {
      let inputProps = changedProps;
      while (runEffects(inst, computeEffects, inputProps, oldProps, hasPaths)) {
        Object.assign(oldProps, inst.__dataOld);
        Object.assign(changedProps, inst.__dataPending);
        inputProps = inst.__dataPending;
        inst.__dataPending = null;
      }
    }
  }

  /**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */
  function runComputedEffect(inst, property, props, oldProps, info) {
    let result = runMethodEffect(inst, property, props, oldProps, info);
    let computedProp = info.methodInfo;
    if (inst.__dataHasAccessor && inst.__dataHasAccessor[computedProp]) {
      inst._setPendingProperty(computedProp, result, true);
    } else {
      inst[computedProp] = result;
    }
  }

  /**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!PropertyEffectsType} inst The instance whose props are changing
   * @param {string | !Array<(string|number)>} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */
  function computeLinkedPaths(inst, path, value) {
    let links = inst.__dataLinkedPaths;
    if (links) {
      let link;
      for (let a in links) {
        let b = links[a];
        if (Polymer.Path.isDescendant(a, path)) {
          link = Polymer.Path.translate(a, b, path);
          inst._setPendingPropertyOrPath(link, value, true, true);
        } else if (Polymer.Path.isDescendant(b, path)) {
          link = Polymer.Path.translate(b, a, path);
          inst._setPendingPropertyOrPath(link, value, true, true);
        }
      }
    }
  }

  // -- bindings ----------------------------------------------

  /**
   * Adds binding metadata to the current `nodeInfo`, and binding effects
   * for all part dependencies to `templateInfo`.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {NodeInfo} nodeInfo Node metadata for current template node
   * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
   * @param {string} target Target property name
   * @param {!Array<!BindingPart>} parts Array of binding part metadata
   * @param {string=} literal Literal text surrounding binding parts (specified
   *   only for 'property' bindings, since these must be initialized as part
   *   of boot-up)
   * @return {void}
   * @private
   */
  function addBinding(constructor, templateInfo, nodeInfo, kind, target, parts, literal) {
    // Create binding metadata and add to nodeInfo
    nodeInfo.bindings = nodeInfo.bindings || [];
    let /** Binding */binding = { kind, target, parts, literal, isCompound: parts.length !== 1 };
    nodeInfo.bindings.push(binding);
    // Add listener info to binding metadata
    if (shouldAddListener(binding)) {
      let { event, negate } = binding.parts[0];
      binding.listenerEvent = event || CaseMap.camelToDashCase(target) + '-changed';
      binding.listenerNegate = negate;
    }
    // Add "propagate" property effects to templateInfo
    let index = templateInfo.nodeInfoList.length;
    for (let i = 0; i < binding.parts.length; i++) {
      let part = binding.parts[i];
      part.compoundIndex = i;
      addEffectForBindingPart(constructor, templateInfo, binding, part, index);
    }
  }

  /**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */
  function addEffectForBindingPart(constructor, templateInfo, binding, part, index) {
    if (!part.literal) {
      if (binding.kind === 'attribute' && binding.target[0] === '-') {
        console.warn('Cannot set attribute ' + binding.target + ' because "-" is not a valid attribute starting character');
      } else {
        let dependencies = part.dependencies;
        let info = { index, binding, part, evaluator: constructor };
        for (let j = 0; j < dependencies.length; j++) {
          let trigger = dependencies[j];
          if (typeof trigger == 'string') {
            trigger = parseArg(trigger);
            trigger.wildcard = true;
          }
          constructor._addTemplatePropertyEffect(templateInfo, trigger.rootProperty, {
            fn: runBindingEffect,
            info, trigger
          });
        }
      }
    }
  }

  /**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */
  function runBindingEffect(inst, path, props, oldProps, info, hasPaths, nodeList) {
    let node = nodeList[info.index];
    let binding = info.binding;
    let part = info.part;
    // Subpath notification: transform path and set to client
    // e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
    if (hasPaths && part.source && path.length > part.source.length && binding.kind == 'property' && !binding.isCompound && node.__dataHasAccessor && node.__dataHasAccessor[binding.target]) {
      let value = props[path];
      path = Polymer.Path.translate(part.source, binding.target, path);
      if (node._setPendingPropertyOrPath(path, value, false, true)) {
        inst._enqueueClient(node);
      }
    } else {
      let value = info.evaluator._evaluateBinding(inst, part, path, props, oldProps, hasPaths);
      // Propagate value to child
      applyBindingValue(inst, node, binding, part, value);
    }
  }

  /**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!PropertyEffectsType} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */
  function applyBindingValue(inst, node, binding, part, value) {
    value = computeBindingValue(node, value, binding, part);
    if (Polymer.sanitizeDOMValue) {
      value = Polymer.sanitizeDOMValue(value, binding.target, binding.kind, node);
    }
    if (binding.kind == 'attribute') {
      // Attribute binding
      inst._valueToNodeAttribute( /** @type {Element} */node, value, binding.target);
    } else {
      // Property binding
      let prop = binding.target;
      if (node.__dataHasAccessor && node.__dataHasAccessor[prop]) {
        if (!node[TYPES.READ_ONLY] || !node[TYPES.READ_ONLY][prop]) {
          if (node._setPendingProperty(prop, value)) {
            inst._enqueueClient(node);
          }
        }
      } else {
        inst._setUnmanagedPropertyToNode(node, prop, value);
      }
    }
  }

  /**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */
  function computeBindingValue(node, value, binding, part) {
    if (binding.isCompound) {
      let storage = node.__dataCompoundStorage[binding.target];
      storage[part.compoundIndex] = value;
      value = storage.join('');
    }
    if (binding.kind !== 'attribute') {
      // Some browsers serialize `undefined` to `"undefined"`
      if (binding.target === 'textContent' || binding.target === 'value' && (node.localName === 'input' || node.localName === 'textarea')) {
        value = value == undefined ? '' : value;
      }
    }
    return value;
  }

  /**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */
  function shouldAddListener(binding) {
    return Boolean(binding.target) && binding.kind != 'attribute' && binding.kind != 'text' && !binding.isCompound && binding.parts[0].mode === '{';
  }

  /**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!PropertyEffectsType} inst Instance that bas been previously bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */
  function setupBindings(inst, templateInfo) {
    // Setup compound storage, dataHost, and notify listeners
    let { nodeList, nodeInfoList } = templateInfo;
    if (nodeInfoList.length) {
      for (let i = 0; i < nodeInfoList.length; i++) {
        let info = nodeInfoList[i];
        let node = nodeList[i];
        let bindings = info.bindings;
        if (bindings) {
          for (let i = 0; i < bindings.length; i++) {
            let binding = bindings[i];
            setupCompoundStorage(node, binding);
            addNotifyListener(node, inst, binding);
          }
        }
        node.__dataHost = inst;
      }
    }
  }

  /**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */
  function setupCompoundStorage(node, binding) {
    if (binding.isCompound) {
      // Create compound storage map
      let storage = node.__dataCompoundStorage || (node.__dataCompoundStorage = {});
      let parts = binding.parts;
      // Copy literals from parts into storage for this binding
      let literals = new Array(parts.length);
      for (let j = 0; j < parts.length; j++) {
        literals[j] = parts[j].literal;
      }
      let target = binding.target;
      storage[target] = literals;
      // Configure properties with their literal parts
      if (binding.literal && binding.kind == 'property') {
        node[target] = binding.literal;
      }
    }
  }

  /**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!PropertyEffectsType} inst Host element instance to handle notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */
  function addNotifyListener(node, inst, binding) {
    if (binding.listenerEvent) {
      let part = binding.parts[0];
      node.addEventListener(binding.listenerEvent, function (e) {
        handleNotification(e, inst, binding.target, part.source, part.negate);
      });
    }
  }

  // -- for method-based effects (complexObserver & computed) --------------

  /**
   * Adds property effects for each argument in the method signature (and
   * optionally, for the method name if `dynamic` is true) that calls the
   * provided effect function.
   *
   * @param {Element | Object} model Prototype or instance
   * @param {!MethodSignature} sig Method signature metadata
   * @param {string} type Type of property effect to add
   * @param {Function} effectFn Function to run when arguments change
   * @param {*=} methodInfo Effect-specific information to be included in
   *   method effect metadata
   * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
   *   method names should be included as a dependency to the effect. Note,
   *   defaults to true if the signature is static (sig.static is true).
   * @return {void}
   * @private
   */
  function createMethodEffect(model, sig, type, effectFn, methodInfo, dynamicFn) {
    dynamicFn = sig.static || dynamicFn && (typeof dynamicFn !== 'object' || dynamicFn[sig.methodName]);
    let info = {
      methodName: sig.methodName,
      args: sig.args,
      methodInfo,
      dynamicFn
    };
    for (let i = 0, arg; i < sig.args.length && (arg = sig.args[i]); i++) {
      if (!arg.literal) {
        model._addPropertyEffect(arg.rootProperty, type, {
          fn: effectFn, info: info, trigger: arg
        });
      }
    }
    if (dynamicFn) {
      model._addPropertyEffect(sig.methodName, type, {
        fn: effectFn, info: info
      });
    }
  }

  /**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */
  function runMethodEffect(inst, property, props, oldProps, info) {
    // Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    let context = inst._methodHost || inst;
    let fn = context[info.methodName];
    if (fn) {
      let args = marshalArgs(inst.__data, info.args, property, props);
      return fn.apply(context, args);
    } else if (!info.dynamicFn) {
      console.warn('method `' + info.methodName + '` not defined');
    }
  }

  const emptyArray = [];

  // Regular expressions used for binding
  const IDENT = '(?:' + '[a-zA-Z_$][\\w.:$\\-*]*' + ')';
  const NUMBER = '(?:' + '[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?' + ')';
  const SQUOTE_STRING = '(?:' + '\'(?:[^\'\\\\]|\\\\.)*\'' + ')';
  const DQUOTE_STRING = '(?:' + '"(?:[^"\\\\]|\\\\.)*"' + ')';
  const STRING = '(?:' + SQUOTE_STRING + '|' + DQUOTE_STRING + ')';
  const ARGUMENT = '(?:(' + IDENT + '|' + NUMBER + '|' + STRING + ')\\s*' + ')';
  const ARGUMENTS = '(?:' + ARGUMENT + '(?:,\\s*' + ARGUMENT + ')*' + ')';
  const ARGUMENT_LIST = '(?:' + '\\(\\s*' + '(?:' + ARGUMENTS + '?' + ')' + '\\)\\s*' + ')';
  const BINDING = '(' + IDENT + '\\s*' + ARGUMENT_LIST + '?' + ')'; // Group 3
  const OPEN_BRACKET = '(\\[\\[|{{)' + '\\s*';
  const CLOSE_BRACKET = '(?:]]|}})';
  const NEGATE = '(?:(!)\\s*)?'; // Group 2
  const EXPRESSION = OPEN_BRACKET + NEGATE + BINDING + CLOSE_BRACKET;
  const bindingRegex = new RegExp(EXPRESSION, "g");

  /**
   * Create a string from binding parts of all the literal parts
   *
   * @param {!Array<BindingPart>} parts All parts to stringify
   * @return {string} String made from the literal parts
   */
  function literalFromParts(parts) {
    let s = '';
    for (let i = 0; i < parts.length; i++) {
      let literal = parts[i].literal;
      s += literal || '';
    }
    return s;
  }

  /**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */
  function parseMethod(expression) {
    // tries to match valid javascript property names
    let m = expression.match(/([^\s]+?)\(([\s\S]*)\)/);
    if (m) {
      let methodName = m[1];
      let sig = { methodName, static: true, args: emptyArray };
      if (m[2].trim()) {
        // replace escaped commas with comma entity, split on un-escaped commas
        let args = m[2].replace(/\\,/g, '&comma;').split(',');
        return parseArgs(args, sig);
      } else {
        return sig;
      }
    }
    return null;
  }

  /**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */
  function parseArgs(argList, sig) {
    sig.args = argList.map(function (rawArg) {
      let arg = parseArg(rawArg);
      if (!arg.literal) {
        sig.static = false;
      }
      return arg;
    }, this);
    return sig;
  }

  /**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */
  function parseArg(rawArg) {
    // clean up whitespace
    let arg = rawArg.trim()
    // replace comma entity with comma
    .replace(/&comma;/g, ',')
    // repair extra escape sequences; note only commas strictly need
    // escaping, but we allow any other char to be escaped since its
    // likely users will do this
    .replace(/\\(.)/g, '\$1');
    // basic argument descriptor
    let a = {
      name: arg,
      value: '',
      literal: false
    };
    // detect literal value (must be String or Number)
    let fc = arg[0];
    if (fc === '-') {
      fc = arg[1];
    }
    if (fc >= '0' && fc <= '9') {
      fc = '#';
    }
    switch (fc) {
      case "'":
      case '"':
        a.value = arg.slice(1, -1);
        a.literal = true;
        break;
      case '#':
        a.value = Number(arg);
        a.literal = true;
        break;
    }
    // if not literal, look for structured path
    if (!a.literal) {
      a.rootProperty = Polymer.Path.root(arg);
      // detect structured path (has dots)
      a.structured = Polymer.Path.isPath(arg);
      if (a.structured) {
        a.wildcard = arg.slice(-2) == '.*';
        if (a.wildcard) {
          a.name = arg.slice(0, -2);
        }
      }
    }
    return a;
  }

  /**
   * Gather the argument values for a method specified in the provided array
   * of argument metadata.
   *
   * The `path` and `value` arguments are used to fill in wildcard descriptor
   * when the method is being called as a result of a path notification.
   *
   * @param {Object} data Instance data storage object to read properties from
   * @param {!Array<!MethodArg>} args Array of argument metadata
   * @param {string} path Property/path name that triggered the method effect
   * @param {Object} props Bag of current property changes
   * @return {Array<*>} Array of argument values
   * @private
   */
  function marshalArgs(data, args, path, props) {
    let values = [];
    for (let i = 0, l = args.length; i < l; i++) {
      let arg = args[i];
      let name = arg.name;
      let v;
      if (arg.literal) {
        v = arg.value;
      } else {
        if (arg.structured) {
          v = Polymer.Path.get(data, name);
          // when data is not stored e.g. `splices`
          if (v === undefined) {
            v = props[name];
          }
        } else {
          v = data[name];
        }
      }
      if (arg.wildcard) {
        // Only send the actual path changed info if the change that
        // caused the observer to run matched the wildcard
        let baseChanged = name.indexOf(path + '.') === 0;
        let matches = path.indexOf(name) === 0 && !baseChanged;
        values[i] = {
          path: matches ? path : name,
          value: matches ? props[path] : v,
          base: v
        };
      } else {
        values[i] = v;
      }
    }
    return values;
  }

  // data api

  /**
   * Sends array splice notifications (`.splices` and `.length`)
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {Array} splices Array of splice records
   * @return {void}
   * @private
   */
  function notifySplices(inst, array, path, splices) {
    let splicesPath = path + '.splices';
    inst.notifyPath(splicesPath, { indexSplices: splices });
    inst.notifyPath(path + '.length', array.length);
    // Null here to allow potentially large splice records to be GC'ed.
    inst.__data[splicesPath] = { indexSplices: null };
  }

  /**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */
  function notifySplice(inst, array, path, index, addedCount, removed) {
    notifySplices(inst, array, path, [{
      index: index,
      addedCount: addedCount,
      removed: removed,
      object: array,
      type: 'splice'
    }]);
  }

  /**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */
  function upper(name) {
    return name[0].toUpperCase() + name.substring(1);
  }

  /**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin Polymer.TemplateStamp
   * @appliesMixin Polymer.PropertyAccessors
   * @memberof Polymer
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */
  Polymer.PropertyEffects = Polymer.dedupingMixin(superClass => {

    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertyAccessors}
     * @implements {Polymer_TemplateStamp}
     * @unrestricted
     */
    const propertyEffectsBase = Polymer.TemplateStamp(Polymer.PropertyAccessors(superClass));

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyEffects}
     * @extends {propertyEffectsBase}
     * @unrestricted
     */
    class PropertyEffects extends propertyEffectsBase {

      constructor() {
        super();
        /** @type {number} */
        // NOTE: used to track re-entrant calls to `_flushProperties`
        // path changes dirty check against `__dataTemp` only during one "turn"
        // and are cleared when `__dataCounter` returns to 0.
        this.__dataCounter = 0;
        /** @type {boolean} */
        this.__dataClientsReady;
        /** @type {Array} */
        this.__dataPendingClients;
        /** @type {Object} */
        this.__dataToNotify;
        /** @type {Object} */
        this.__dataLinkedPaths;
        /** @type {boolean} */
        this.__dataHasPaths;
        /** @type {Object} */
        this.__dataCompoundStorage;
        /** @type {Polymer_PropertyEffects} */
        this.__dataHost;
        /** @type {!Object} */
        this.__dataTemp;
        /** @type {boolean} */
        this.__dataClientsInitialized;
        /** @type {!Object} */
        this.__data;
        /** @type {!Object} */
        this.__dataPending;
        /** @type {!Object} */
        this.__dataOld;
        /** @type {Object} */
        this.__computeEffects;
        /** @type {Object} */
        this.__reflectEffects;
        /** @type {Object} */
        this.__notifyEffects;
        /** @type {Object} */
        this.__propagateEffects;
        /** @type {Object} */
        this.__observeEffects;
        /** @type {Object} */
        this.__readOnly;
        /** @type {!TemplateInfo} */
        this.__templateInfo;
      }

      get PROPERTY_EFFECT_TYPES() {
        return TYPES;
      }

      /**
       * @return {void}
       */
      _initializeProperties() {
        super._initializeProperties();
        hostStack.registerHost(this);
        this.__dataClientsReady = false;
        this.__dataPendingClients = null;
        this.__dataToNotify = null;
        this.__dataLinkedPaths = null;
        this.__dataHasPaths = false;
        // May be set on instance prior to upgrade
        this.__dataCompoundStorage = this.__dataCompoundStorage || null;
        this.__dataHost = this.__dataHost || null;
        this.__dataTemp = {};
        this.__dataClientsInitialized = false;
      }

      /**
       * Overrides `Polymer.PropertyAccessors` implementation to provide a
       * more efficient implementation of initializing properties from
       * the prototype on the instance.
       *
       * @override
       * @param {Object} props Properties to initialize on the prototype
       * @return {void}
       */
      _initializeProtoProperties(props) {
        this.__data = Object.create(props);
        this.__dataPending = Object.create(props);
        this.__dataOld = {};
      }

      /**
       * Overrides `Polymer.PropertyAccessors` implementation to avoid setting
       * `_setProperty`'s `shouldNotify: true`.
       *
       * @override
       * @param {Object} props Properties to initialize on the instance
       * @return {void}
       */
      _initializeInstanceProperties(props) {
        let readOnly = this[TYPES.READ_ONLY];
        for (let prop in props) {
          if (!readOnly || !readOnly[prop]) {
            this.__dataPending = this.__dataPending || {};
            this.__dataOld = this.__dataOld || {};
            this.__data[prop] = this.__dataPending[prop] = props[prop];
          }
        }
      }

      // Prototype setup ----------------------------------------

      /**
       * Equivalent to static `addPropertyEffect` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property that should trigger the effect
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       */
      _addPropertyEffect(property, type, effect) {
        this._createPropertyAccessor(property, type == TYPES.READ_ONLY);
        // effects are accumulated into arrays per property based on type
        let effects = ensureOwnEffectMap(this, type)[property];
        if (!effects) {
          effects = this[type][property] = [];
        }
        effects.push(effect);
      }

      /**
       * Removes the given property effect.
       *
       * @param {string} property Property the effect was associated with
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object to remove
       * @return {void}
       */
      _removePropertyEffect(property, type, effect) {
        let effects = ensureOwnEffectMap(this, type)[property];
        let idx = effects.indexOf(effect);
        if (idx >= 0) {
          effects.splice(idx, 1);
        }
      }

      /**
       * Returns whether the current prototype/instance has a property effect
       * of a certain type.
       *
       * @param {string} property Property name
       * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */
      _hasPropertyEffect(property, type) {
        let effects = this[type];
        return Boolean(effects && effects[property]);
      }

      /**
       * Returns whether the current prototype/instance has a "read only"
       * accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */
      _hasReadOnlyEffect(property) {
        return this._hasPropertyEffect(property, TYPES.READ_ONLY);
      }

      /**
       * Returns whether the current prototype/instance has a "notify"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */
      _hasNotifyEffect(property) {
        return this._hasPropertyEffect(property, TYPES.NOTIFY);
      }

      /**
       * Returns whether the current prototype/instance has a "reflect to attribute"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */
      _hasReflectEffect(property) {
        return this._hasPropertyEffect(property, TYPES.REFLECT);
      }

      /**
       * Returns whether the current prototype/instance has a "computed"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */
      _hasComputedEffect(property) {
        return this._hasPropertyEffect(property, TYPES.COMPUTE);
      }

      // Runtime ----------------------------------------

      /**
       * Sets a pending property or path.  If the root property of the path in
       * question had no accessor, the path is set, otherwise it is enqueued
       * via `_setPendingProperty`.
       *
       * This function isolates relatively expensive functionality necessary
       * for the public API (`set`, `setProperties`, `notifyPath`, and property
       * change listeners via {{...}} bindings), such that it is only done
       * when paths enter the system, and not at every propagation step.  It
       * also sets a `__dataHasPaths` flag on the instance which is used to
       * fast-path slower path-matching code in the property effects host paths.
       *
       * `path` can be a path string or array of path parts as accepted by the
       * public API.
       *
       * @param {string | !Array<number|string>} path Path to set
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify Set to true if this change should
       *  cause a property notification event dispatch
       * @param {boolean=} isPathNotification If the path being set is a path
       *   notification of an already changed value, as opposed to a request
       *   to set and notify the change.  In the latter `false` case, a dirty
       *   check is performed and then the value is set to the path before
       *   enqueuing the pending property change.
       * @return {boolean} Returns true if the property/path was enqueued in
       *   the pending changes bag.
       * @protected
       */
      _setPendingPropertyOrPath(path, value, shouldNotify, isPathNotification) {
        if (isPathNotification || Polymer.Path.root(Array.isArray(path) ? path[0] : path) !== path) {
          // Dirty check changes being set to a path against the actual object,
          // since this is the entry point for paths into the system; from here
          // the only dirty checks are against the `__dataTemp` cache to prevent
          // duplicate work in the same turn only. Note, if this was a notification
          // of a change already set to a path (isPathNotification: true),
          // we always let the change through and skip the `set` since it was
          // already dirty checked at the point of entry and the underlying
          // object has already been updated
          if (!isPathNotification) {
            let old = Polymer.Path.get(this, path);
            path = /** @type {string} */Polymer.Path.set(this, path, value);
            // Use property-accessor's simpler dirty check
            if (!path || !super._shouldPropertyChange(path, value, old)) {
              return false;
            }
          }
          this.__dataHasPaths = true;
          if (this._setPendingProperty( /**@type{string}*/path, value, shouldNotify)) {
            computeLinkedPaths(this, path, value);
            return true;
          }
        } else {
          if (this.__dataHasAccessor && this.__dataHasAccessor[path]) {
            return this._setPendingProperty( /**@type{string}*/path, value, shouldNotify);
          } else {
            this[path] = value;
          }
        }
        return false;
      }

      /**
       * Applies a value to a non-Polymer element/node's property.
       *
       * The implementation makes a best-effort at binding interop:
       * Some native element properties have side-effects when
       * re-setting the same value (e.g. setting `<input>.value` resets the
       * cursor position), so we do a dirty-check before setting the value.
       * However, for better interop with non-Polymer custom elements that
       * accept objects, we explicitly re-set object changes coming from the
       * Polymer world (which may include deep object changes without the
       * top reference changing), erring on the side of providing more
       * information.
       *
       * Users may override this method to provide alternate approaches.
       *
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */
      _setUnmanagedPropertyToNode(node, prop, value) {
        // It is a judgment call that resetting primitives is
        // "bad" and resettings objects is also "good"; alternatively we could
        // implement a whitelist of tag & property values that should never
        // be reset (e.g. <input>.value && <select>.value)
        if (value !== node[prop] || typeof value == 'object') {
          node[prop] = value;
        }
      }

      /**
       * Overrides the `PropertiesChanged` implementation to introduce special
       * dirty check logic depending on the property & value being set:
       *
       * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
       *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
       * 2. Object set to simple property (e.g. 'prop': {...})
       *    Stored in `__dataTemp` and `__data`, dirty checked against
       *    `__dataTemp` by default implementation of `_shouldPropertyChange`
       * 3. Primitive value set to simple property (e.g. 'prop': 42)
       *    Stored in `__data`, dirty checked against `__data`
       *
       * The dirty-check is important to prevent cycles due to two-way
       * notification, but paths and objects are only dirty checked against any
       * previous value set during this turn via a "temporary cache" that is
       * cleared when the last `_propertiesChanged` exits. This is so:
       * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
       *    due to array mutations like shift/unshift/splice; this is fine
       *    since path changes are dirty-checked at user entry points like `set`
       * b. dirty-checking for objects only lasts one turn to allow the user
       *    to mutate the object in-place and re-set it with the same identity
       *    and have all sub-properties re-propagated in a subsequent turn.
       *
       * The temp cache is not necessarily sufficient to prevent invalid array
       * paths, since a splice can happen during the same turn (with pathological
       * user code); we could introduce a "fixup" for temporarily cached array
       * paths if needed: https://github.com/Polymer/polymer/issues/4227
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify True if property should fire notification
       *   event (applies only for `notify: true` properties)
       * @return {boolean} Returns true if the property changed
       */
      _setPendingProperty(property, value, shouldNotify) {
        let isPath = this.__dataHasPaths && Polymer.Path.isPath(property);
        let prevProps = isPath ? this.__dataTemp : this.__data;
        if (this._shouldPropertyChange(property, value, prevProps[property])) {
          if (!this.__dataPending) {
            this.__dataPending = {};
            this.__dataOld = {};
          }
          // Ensure old is captured from the last turn
          if (!(property in this.__dataOld)) {
            this.__dataOld[property] = this.__data[property];
          }
          // Paths are stored in temporary cache (cleared at end of turn),
          // which is used for dirty-checking, all others stored in __data
          if (isPath) {
            this.__dataTemp[property] = value;
          } else {
            this.__data[property] = value;
          }
          // All changes go into pending property bag, passed to _propertiesChanged
          this.__dataPending[property] = value;
          // Track properties that should notify separately
          if (isPath || this[TYPES.NOTIFY] && this[TYPES.NOTIFY][property]) {
            this.__dataToNotify = this.__dataToNotify || {};
            this.__dataToNotify[property] = shouldNotify;
          }
          return true;
        }
        return false;
      }

      /**
       * Overrides base implementation to ensure all accessors set `shouldNotify`
       * to true, for per-property notification tracking.
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       */
      _setProperty(property, value) {
        if (this._setPendingProperty(property, value, true)) {
          this._invalidateProperties();
        }
      }

      /**
       * Overrides `PropertyAccessor`'s default async queuing of
       * `_propertiesChanged`: if `__dataReady` is false (has not yet been
       * manually flushed), the function no-ops; otherwise flushes
       * `_propertiesChanged` synchronously.
       *
       * @override
       * @return {void}
       */
      _invalidateProperties() {
        if (this.__dataReady) {
          this._flushProperties();
        }
      }

      /**
       * Enqueues the given client on a list of pending clients, whose
       * pending property changes can later be flushed via a call to
       * `_flushClients`.
       *
       * @param {Object} client PropertyEffects client to enqueue
       * @return {void}
       * @protected
       */
      _enqueueClient(client) {
        this.__dataPendingClients = this.__dataPendingClients || [];
        if (client !== this) {
          this.__dataPendingClients.push(client);
        }
      }

      /**
       * Overrides superclass implementation.
       *
       * @return {void}
       * @protected
       */
      _flushProperties() {
        this.__dataCounter++;
        super._flushProperties();
        this.__dataCounter--;
      }

      /**
       * Flushes any clients previously enqueued via `_enqueueClient`, causing
       * their `_flushProperties` method to run.
       *
       * @return {void}
       * @protected
       */
      _flushClients() {
        if (!this.__dataClientsReady) {
          this.__dataClientsReady = true;
          this._readyClients();
          // Override point where accessors are turned on; importantly,
          // this is after clients have fully readied, providing a guarantee
          // that any property effects occur only after all clients are ready.
          this.__dataReady = true;
        } else {
          this.__enableOrFlushClients();
        }
      }

      // NOTE: We ensure clients either enable or flush as appropriate. This
      // handles two corner cases:
      // (1) clients flush properly when connected/enabled before the host
      // enables; e.g.
      //   (a) Templatize stamps with no properties and does not flush and
      //   (b) the instance is inserted into dom and
      //   (c) then the instance flushes.
      // (2) clients enable properly when not connected/enabled when the host
      // flushes; e.g.
      //   (a) a template is runtime stamped and not yet connected/enabled
      //   (b) a host sets a property, causing stamped dom to flush
      //   (c) the stamped dom enables.
      __enableOrFlushClients() {
        let clients = this.__dataPendingClients;
        if (clients) {
          this.__dataPendingClients = null;
          for (let i = 0; i < clients.length; i++) {
            let client = clients[i];
            if (!client.__dataEnabled) {
              client._enableProperties();
            } else if (client.__dataPending) {
              client._flushProperties();
            }
          }
        }
      }

      /**
       * Perform any initial setup on client dom. Called before the first
       * `_flushProperties` call on client dom and before any element
       * observers are called.
       *
       * @return {void}
       * @protected
       */
      _readyClients() {
        this.__enableOrFlushClients();
      }

      /**
       * Sets a bag of property changes to this instance, and
       * synchronously processes all effects of the properties as a batch.
       *
       * Property names must be simple properties, not paths.  Batched
       * path propagation is not supported.
       *
       * @param {Object} props Bag of one or more key-value pairs whose key is
       *   a property and value is the new value to set for that property.
       * @param {boolean=} setReadOnly When true, any private values set in
       *   `props` will be set. By default, `setProperties` will not set
       *   `readOnly: true` root properties.
       * @return {void}
       * @public
       */
      setProperties(props, setReadOnly) {
        for (let path in props) {
          if (setReadOnly || !this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][path]) {
            //TODO(kschaaf): explicitly disallow paths in setProperty?
            // wildcard observers currently only pass the first changed path
            // in the `info` object, and you could do some odd things batching
            // paths, e.g. {'foo.bar': {...}, 'foo': null}
            this._setPendingPropertyOrPath(path, props[path], true);
          }
        }
        this._invalidateProperties();
      }

      /**
       * Overrides `PropertyAccessors` so that property accessor
       * side effects are not enabled until after client dom is fully ready.
       * Also calls `_flushClients` callback to ensure client dom is enabled
       * that was not enabled as a result of flushing properties.
       *
       * @override
       * @return {void}
       */
      ready() {
        // It is important that `super.ready()` is not called here as it
        // immediately turns on accessors. Instead, we wait until `readyClients`
        // to enable accessors to provide a guarantee that clients are ready
        // before processing any accessors side effects.
        this._flushProperties();
        // If no data was pending, `_flushProperties` will not `flushClients`
        // so ensure this is done.
        if (!this.__dataClientsReady) {
          this._flushClients();
        }
        // Before ready, client notifications do not trigger _flushProperties.
        // Therefore a flush is necessary here if data has been set.
        if (this.__dataPending) {
          this._flushProperties();
        }
      }

      /**
       * Implements `PropertyAccessors`'s properties changed callback.
       *
       * Runs each class of effects for the batch of changed properties in
       * a specific order (compute, propagate, reflect, observe, notify).
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {!Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {!Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       */
      _propertiesChanged(currentProps, changedProps, oldProps) {
        // ----------------------------
        // let c = Object.getOwnPropertyNames(changedProps || {});
        // window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
        // if (window.debug) { debugger; }
        // ----------------------------
        let hasPaths = this.__dataHasPaths;
        this.__dataHasPaths = false;
        // Compute properties
        runComputedEffects(this, changedProps, oldProps, hasPaths);
        // Clear notify properties prior to possible reentry (propagate, observe),
        // but after computing effects have a chance to add to them
        let notifyProps = this.__dataToNotify;
        this.__dataToNotify = null;
        // Propagate properties to clients
        this._propagatePropertyChanges(changedProps, oldProps, hasPaths);
        // Flush clients
        this._flushClients();
        // Reflect properties
        runEffects(this, this[TYPES.REFLECT], changedProps, oldProps, hasPaths);
        // Observe properties
        runEffects(this, this[TYPES.OBSERVE], changedProps, oldProps, hasPaths);
        // Notify properties to host
        if (notifyProps) {
          runNotifyEffects(this, notifyProps, changedProps, oldProps, hasPaths);
        }
        // Clear temporary cache at end of turn
        if (this.__dataCounter == 1) {
          this.__dataTemp = {};
        }
        // ----------------------------
        // window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
        // ----------------------------
      }

      /**
       * Called to propagate any property changes to stamped template nodes
       * managed by this element.
       *
       * @param {Object} changedProps Bag of changed properties
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {void}
       * @protected
       */
      _propagatePropertyChanges(changedProps, oldProps, hasPaths) {
        if (this[TYPES.PROPAGATE]) {
          runEffects(this, this[TYPES.PROPAGATE], changedProps, oldProps, hasPaths);
        }
        let templateInfo = this.__templateInfo;
        while (templateInfo) {
          runEffects(this, templateInfo.propertyEffects, changedProps, oldProps, hasPaths, templateInfo.nodeList);
          templateInfo = templateInfo.nextTemplateInfo;
        }
      }

      /**
       * Aliases one data path as another, such that path notifications from one
       * are routed to the other.
       *
       * @param {string | !Array<string|number>} to Target path to link.
       * @param {string | !Array<string|number>} from Source path to link.
       * @return {void}
       * @public
       */
      linkPaths(to, from) {
        to = Polymer.Path.normalize(to);
        from = Polymer.Path.normalize(from);
        this.__dataLinkedPaths = this.__dataLinkedPaths || {};
        this.__dataLinkedPaths[to] = from;
      }

      /**
       * Removes a data path alias previously established with `_linkPaths`.
       *
       * Note, the path to unlink should be the target (`to`) used when
       * linking the paths.
       *
       * @param {string | !Array<string|number>} path Target path to unlink.
       * @return {void}
       * @public
       */
      unlinkPaths(path) {
        path = Polymer.Path.normalize(path);
        if (this.__dataLinkedPaths) {
          delete this.__dataLinkedPaths[path];
        }
      }

      /**
       * Notify that an array has changed.
       *
       * Example:
       *
       *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
       *     ...
       *     this.items.splice(1, 1, {name: 'Sam'});
       *     this.items.push({name: 'Bob'});
       *     this.notifySplices('items', [
       *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1, object: this.items, type: 'splice' },
       *       { index: 3, removed: [], addedCount: 1, object: this.items, type: 'splice'}
       *     ]);
       *
       * @param {string} path Path that should be notified.
       * @param {Array} splices Array of splice records indicating ordered
       *   changes that occurred to the array. Each record should have the
       *   following fields:
       *    * index: index at which the change occurred
       *    * removed: array of items that were removed from this index
       *    * addedCount: number of new items added at this index
       *    * object: a reference to the array in question
       *    * type: the string literal 'splice'
       *
       *   Note that splice records _must_ be normalized such that they are
       *   reported in index order (raw results from `Object.observe` are not
       *   ordered and must be normalized/merged before notifying).
       * @return {void}
       * @public
      */
      notifySplices(path, splices) {
        let info = { path: '' };
        let array = /** @type {Array} */Polymer.Path.get(this, path, info);
        notifySplices(this, array, info.path, splices);
      }

      /**
       * Convenience method for reading a value from a path.
       *
       * Note, if any part in the path is undefined, this method returns
       * `undefined` (this method does not throw when dereferencing undefined
       * paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `users.12.name` or `['users', 12, 'name']`).
       * @param {Object=} root Root object from which the path is evaluated.
       * @return {*} Value at the path, or `undefined` if any part of the path
       *   is undefined.
       * @public
       */
      get(path, root) {
        return Polymer.Path.get(root || this, path);
      }

      /**
       * Convenience method for setting a value to a path and notifying any
       * elements bound to the same path.
       *
       * Note, if any part in the path except for the last is undefined,
       * this method does nothing (this method does not throw when
       * dereferencing undefined paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
       * @param {*} value Value to set at the specified path.
       * @param {Object=} root Root object from which the path is evaluated.
       *   When specified, no notification will occur.
       * @return {void}
       * @public
      */
      set(path, value, root) {
        if (root) {
          Polymer.Path.set(root, path, value);
        } else {
          if (!this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][/** @type {string} */path]) {
            if (this._setPendingPropertyOrPath(path, value, true)) {
              this._invalidateProperties();
            }
          }
        }
      }

      /**
       * Adds items onto the end of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to push onto array
       * @return {number} New length of the array.
       * @public
       */
      push(path, ...items) {
        let info = { path: '' };
        let array = /** @type {Array}*/Polymer.Path.get(this, path, info);
        let len = array.length;
        let ret = array.push(...items);
        if (items.length) {
          notifySplice(this, array, info.path, len, items.length, []);
        }
        return ret;
      }

      /**
       * Removes an item from the end of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */
      pop(path) {
        let info = { path: '' };
        let array = /** @type {Array} */Polymer.Path.get(this, path, info);
        let hadLength = Boolean(array.length);
        let ret = array.pop();
        if (hadLength) {
          notifySplice(this, array, info.path, array.length, 0, [ret]);
        }
        return ret;
      }

      /**
       * Starting from the start index specified, removes 0 or more items
       * from the array and inserts 0 or more new items in their place.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.splice`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {number} start Index from which to start removing/inserting.
       * @param {number} deleteCount Number of items to remove.
       * @param {...*} items Items to insert into array.
       * @return {Array} Array of removed items.
       * @public
       */
      splice(path, start, deleteCount, ...items) {
        let info = { path: '' };
        let array = /** @type {Array} */Polymer.Path.get(this, path, info);
        // Normalize fancy native splice handling of crazy start values
        if (start < 0) {
          start = array.length - Math.floor(-start);
        } else if (start) {
          start = Math.floor(start);
        }
        // array.splice does different things based on the number of arguments
        // you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
        // do different things. In the former, the whole array is cleared. In the
        // latter, no items are removed.
        // This means that we need to detect whether 1. one of the arguments
        // is actually passed in and then 2. determine how many arguments
        // we should pass on to the native array.splice
        //
        let ret;
        // Omit any additional arguments if they were not passed in
        if (arguments.length === 2) {
          ret = array.splice(start);
          // Either start was undefined and the others were defined, but in this
          // case we can safely pass on all arguments
          //
          // Note: this includes the case where none of the arguments were passed in,
          // e.g. this.splice('array'). However, if both start and deleteCount
          // are undefined, array.splice will not modify the array (as expected)
        } else {
          ret = array.splice(start, deleteCount, ...items);
        }
        // At the end, check whether any items were passed in (e.g. insertions)
        // or if the return array contains items (e.g. deletions).
        // Only notify if items were added or deleted.
        if (items.length || ret.length) {
          notifySplice(this, array, info.path, start, items.length, ret);
        }
        return ret;
      }

      /**
       * Removes an item from the beginning of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */
      shift(path) {
        let info = { path: '' };
        let array = /** @type {Array} */Polymer.Path.get(this, path, info);
        let hadLength = Boolean(array.length);
        let ret = array.shift();
        if (hadLength) {
          notifySplice(this, array, info.path, 0, 0, [ret]);
        }
        return ret;
      }

      /**
       * Adds items onto the beginning of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to insert info array
       * @return {number} New length of the array.
       * @public
       */
      unshift(path, ...items) {
        let info = { path: '' };
        let array = /** @type {Array} */Polymer.Path.get(this, path, info);
        let ret = array.unshift(...items);
        if (items.length) {
          notifySplice(this, array, info.path, 0, items.length, []);
        }
        return ret;
      }

      /**
       * Notify that a path has changed.
       *
       * Example:
       *
       *     this.item.user.name = 'Bob';
       *     this.notifyPath('item.user.name');
       *
       * @param {string} path Path that should be notified.
       * @param {*=} value Value at the path (optional).
       * @return {void}
       * @public
      */
      notifyPath(path, value) {
        /** @type {string} */
        let propPath;
        if (arguments.length == 1) {
          // Get value if not supplied
          let info = { path: '' };
          value = Polymer.Path.get(this, path, info);
          propPath = info.path;
        } else if (Array.isArray(path)) {
          // Normalize path if needed
          propPath = Polymer.Path.normalize(path);
        } else {
          propPath = /** @type{string} */path;
        }
        if (this._setPendingPropertyOrPath(propPath, value, true, true)) {
          this._invalidateProperties();
        }
      }

      /**
       * Equivalent to static `createReadOnlyProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */
      _createReadOnlyProperty(property, protectedSetter) {
        this._addPropertyEffect(property, TYPES.READ_ONLY);
        if (protectedSetter) {
          this['_set' + upper(property)] = /** @this {PropertyEffects} */function (value) {
            this._setProperty(property, value);
          };
        }
      }

      /**
       * Equivalent to static `createPropertyObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */
      _createPropertyObserver(property, method, dynamicFn) {
        let info = { property, method, dynamicFn: Boolean(dynamicFn) };
        this._addPropertyEffect(property, TYPES.OBSERVE, {
          fn: runObserverEffect, info, trigger: { name: property }
        });
        if (dynamicFn) {
          this._addPropertyEffect( /** @type {string} */method, TYPES.OBSERVE, {
            fn: runObserverEffect, info, trigger: { name: method }
          });
        }
      }

      /**
       * Equivalent to static `createMethodObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */
      _createMethodObserver(expression, dynamicFn) {
        let sig = parseMethod(expression);
        if (!sig) {
          throw new Error("Malformed observer expression '" + expression + "'");
        }
        createMethodEffect(this, sig, TYPES.OBSERVE, runMethodEffect, null, dynamicFn);
      }

      /**
       * Equivalent to static `createNotifyingProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */
      _createNotifyingProperty(property) {
        this._addPropertyEffect(property, TYPES.NOTIFY, {
          fn: runNotifyEffect,
          info: {
            eventName: CaseMap.camelToDashCase(property) + '-changed',
            property: property
          }
        });
      }

      /**
       * Equivalent to static `createReflectedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */
      _createReflectedProperty(property) {
        let attr = this.constructor.attributeNameForProperty(property);
        if (attr[0] === '-') {
          console.warn('Property ' + property + ' cannot be reflected to attribute ' + attr + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.');
        } else {
          this._addPropertyEffect(property, TYPES.REFLECT, {
            fn: runReflectEffect,
            info: {
              attrName: attr
            }
          });
        }
      }

      /**
       * Equivalent to static `createComputedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */
      _createComputedProperty(property, expression, dynamicFn) {
        let sig = parseMethod(expression);
        if (!sig) {
          throw new Error("Malformed computed expression '" + expression + "'");
        }
        createMethodEffect(this, sig, TYPES.COMPUTE, runComputedEffect, property, dynamicFn);
      }

      // -- static class methods ------------

      /**
       * Ensures an accessor exists for the specified property, and adds
       * to a list of "property effects" that will run when the accessor for
       * the specified property is set.  Effects are grouped by "type", which
       * roughly corresponds to a phase in effect processing.  The effect
       * metadata should be in the following form:
       *
       *     {
       *       fn: effectFunction, // Reference to function to call to perform effect
       *       info: { ... }       // Effect metadata passed to function
       *       trigger: {          // Optional triggering metadata; if not provided
       *         name: string      // the property is treated as a wildcard
       *         structured: boolean
       *         wildcard: boolean
       *       }
       *     }
       *
       * Effects are called from `_propertiesChanged` in the following order by
       * type:
       *
       * 1. COMPUTE
       * 2. PROPAGATE
       * 3. REFLECT
       * 4. OBSERVE
       * 5. NOTIFY
       *
       * Effect functions are called with the following signature:
       *
       *     effectFunction(inst, path, props, oldProps, info, hasPaths)
       *
       * @param {string} property Property that should trigger the effect
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       */
      static addPropertyEffect(property, type, effect) {
        this.prototype._addPropertyEffect(property, type, effect);
      }

      /**
       * Creates a single-property observer for the given property.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */
      static createPropertyObserver(property, method, dynamicFn) {
        this.prototype._createPropertyObserver(property, method, dynamicFn);
      }

      /**
       * Creates a multi-property "method observer" based on the provided
       * expression, which should be a string in the form of a normal JavaScript
       * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
       * should correspond to a property or path in the context of this
       * prototype (or instance), or may be a literal string or number.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       * @return {void}
       *   whether method names should be included as a dependency to the effect.
       * @protected
       */
      static createMethodObserver(expression, dynamicFn) {
        this.prototype._createMethodObserver(expression, dynamicFn);
      }

      /**
       * Causes the setter for the given property to dispatch `<property>-changed`
       * events to notify of changes to the property.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */
      static createNotifyingProperty(property) {
        this.prototype._createNotifyingProperty(property);
      }

      /**
       * Creates a read-only accessor for the given property.
       *
       * To set the property, use the protected `_setProperty` API.
       * To create a custom protected setter (e.g. `_setMyProp()` for
       * property `myProp`), pass `true` for `protectedSetter`.
       *
       * Note, if the property will have other property effects, this method
       * should be called first, before adding other effects.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */
      static createReadOnlyProperty(property, protectedSetter) {
        this.prototype._createReadOnlyProperty(property, protectedSetter);
      }

      /**
       * Causes the setter for the given property to reflect the property value
       * to a (dash-cased) attribute of the same name.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */
      static createReflectedProperty(property) {
        this.prototype._createReflectedProperty(property);
      }

      /**
       * Creates a computed property whose value is set to the result of the
       * method described by the given `expression` each time one or more
       * arguments to the method changes.  The expression should be a string
       * in the form of a normal JavaScript function signature:
       * `'methodName(arg1, [..., argn])'`
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
       *   method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */
      static createComputedProperty(property, expression, dynamicFn) {
        this.prototype._createComputedProperty(property, expression, dynamicFn);
      }

      /**
       * Parses the provided template to ensure binding effects are created
       * for them, and then ensures property accessors are created for any
       * dependent properties in the template.  Binding effects for bound
       * templates are stored in a linked list on the instance so that
       * templates can be efficiently stamped and unstamped.
       *
       * @param {!HTMLTemplateElement} template Template containing binding
       *   bindings
       * @return {!TemplateInfo} Template metadata object
       * @protected
       */
      static bindTemplate(template) {
        return this.prototype._bindTemplate(template);
      }

      // -- binding ----------------------------------------------

      /**
       * Equivalent to static `bindTemplate` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * This method may be called on the prototype (for prototypical template
       * binding, to avoid creating accessors every instance) once per prototype,
       * and will be called with `runtimeBinding: true` by `_stampTemplate` to
       * create and link an instance of the template metadata associated with a
       * particular stamping.
       *
       * @param {!HTMLTemplateElement} template Template containing binding
       *   bindings
       * @param {boolean=} instanceBinding When false (default), performs
       *   "prototypical" binding of the template and overwrites any previously
       *   bound template for the class. When true (as passed from
       *   `_stampTemplate`), the template info is instanced and linked into
       *   the list of bound templates.
       * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
       *   this is an instance of the prototypical template info
       * @protected
       */
      _bindTemplate(template, instanceBinding) {
        let templateInfo = this.constructor._parseTemplate(template);
        let wasPreBound = this.__templateInfo == templateInfo;
        // Optimization: since this is called twice for proto-bound templates,
        // don't attempt to recreate accessors if this template was pre-bound
        if (!wasPreBound) {
          for (let prop in templateInfo.propertyEffects) {
            this._createPropertyAccessor(prop);
          }
        }
        if (instanceBinding) {
          // For instance-time binding, create instance of template metadata
          // and link into list of templates if necessary
          templateInfo = /** @type {!TemplateInfo} */Object.create(templateInfo);
          templateInfo.wasPreBound = wasPreBound;
          if (!wasPreBound && this.__templateInfo) {
            let last = this.__templateInfoLast || this.__templateInfo;
            this.__templateInfoLast = last.nextTemplateInfo = templateInfo;
            templateInfo.previousTemplateInfo = last;
            return templateInfo;
          }
        }
        return this.__templateInfo = templateInfo;
      }

      /**
       * Adds a property effect to the given template metadata, which is run
       * at the "propagate" stage of `_propertiesChanged` when the template
       * has been bound to the element via `_bindTemplate`.
       *
       * The `effect` object should match the format in `_addPropertyEffect`.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       */
      static _addTemplatePropertyEffect(templateInfo, prop, effect) {
        let hostProps = templateInfo.hostProps = templateInfo.hostProps || {};
        hostProps[prop] = true;
        let effects = templateInfo.propertyEffects = templateInfo.propertyEffects || {};
        let propEffects = effects[prop] = effects[prop] || [];
        propEffects.push(effect);
      }

      /**
       * Stamps the provided template and performs instance-time setup for
       * Polymer template features, including data bindings, declarative event
       * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
       * is returned containing the stamped DOM, ready for insertion into the
       * DOM.
       *
       * This method may be called more than once; however note that due to
       * `shadycss` polyfill limitations, only styles from templates prepared
       * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
       * to the shadow root and support CSS custom properties), and note that
       * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
       * any styles required by in runtime-stamped templates must be included
       * in the main element template.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       * @override
       * @protected
       */
      _stampTemplate(template) {
        // Ensures that created dom is `_enqueueClient`'d to this element so
        // that it can be flushed on next call to `_flushProperties`
        hostStack.beginHosting(this);
        let dom = super._stampTemplate(template);
        hostStack.endHosting(this);
        let templateInfo = /** @type {!TemplateInfo} */this._bindTemplate(template, true);
        // Add template-instance-specific data to instanced templateInfo
        templateInfo.nodeList = dom.nodeList;
        // Capture child nodes to allow unstamping of non-prototypical templates
        if (!templateInfo.wasPreBound) {
          let nodes = templateInfo.childNodes = [];
          for (let n = dom.firstChild; n; n = n.nextSibling) {
            nodes.push(n);
          }
        }
        dom.templateInfo = templateInfo;
        // Setup compound storage, 2-way listeners, and dataHost for bindings
        setupBindings(this, templateInfo);
        // Flush properties into template nodes if already booted
        if (this.__dataReady) {
          runEffects(this, templateInfo.propertyEffects, this.__data, null, false, templateInfo.nodeList);
        }
        return dom;
      }

      /**
       * Removes and unbinds the nodes previously contained in the provided
       * DocumentFragment returned from `_stampTemplate`.
       *
       * @param {!StampedTemplate} dom DocumentFragment previously returned
       *   from `_stampTemplate` associated with the nodes to be removed
       * @return {void}
       * @protected
       */
      _removeBoundDom(dom) {
        // Unlink template info
        let templateInfo = dom.templateInfo;
        if (templateInfo.previousTemplateInfo) {
          templateInfo.previousTemplateInfo.nextTemplateInfo = templateInfo.nextTemplateInfo;
        }
        if (templateInfo.nextTemplateInfo) {
          templateInfo.nextTemplateInfo.previousTemplateInfo = templateInfo.previousTemplateInfo;
        }
        if (this.__templateInfoLast == templateInfo) {
          this.__templateInfoLast = templateInfo.previousTemplateInfo;
        }
        templateInfo.previousTemplateInfo = templateInfo.nextTemplateInfo = null;
        // Remove stamped nodes
        let nodes = templateInfo.childNodes;
        for (let i = 0; i < nodes.length; i++) {
          let node = nodes[i];
          node.parentNode.removeChild(node);
        }
      }

      /**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */
      static _parseTemplateNode(node, templateInfo, nodeInfo) {
        let noted = super._parseTemplateNode(node, templateInfo, nodeInfo);
        if (node.nodeType === Node.TEXT_NODE) {
          let parts = this._parseBindings(node.textContent, templateInfo);
          if (parts) {
            // Initialize the textContent with any literal parts
            // NOTE: default to a space here so the textNode remains; some browsers
            // (IE) omit an empty textNode following cloneNode/importNode.
            node.textContent = literalFromParts(parts) || ' ';
            addBinding(this, templateInfo, nodeInfo, 'text', 'textContent', parts);
            noted = true;
          }
        }
        return noted;
      }

      /**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from attributes.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */
      static _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
        let parts = this._parseBindings(value, templateInfo);
        if (parts) {
          // Attribute or property
          let origName = name;
          let kind = 'property';
          if (name[name.length - 1] == '$') {
            name = name.slice(0, -1);
            kind = 'attribute';
          }
          // Initialize attribute bindings with any literal parts
          let literal = literalFromParts(parts);
          if (literal && kind == 'attribute') {
            node.setAttribute(name, literal);
          }
          // Clear attribute before removing, since IE won't allow removing
          // `value` attribute if it previously had a value (can't
          // unconditionally set '' before removing since attributes with `$`
          // can't be set using setAttribute)
          if (node.localName === 'input' && origName === 'value') {
            node.setAttribute(origName, '');
          }
          // Remove annotation
          node.removeAttribute(origName);
          // Case hackery: attributes are lower-case, but bind targets
          // (properties) are case sensitive. Gambit is to map dash-case to
          // camel-case: `foo-bar` becomes `fooBar`.
          // Attribute bindings are excepted.
          if (kind === 'property') {
            name = Polymer.CaseMap.dashToCamelCase(name);
          }
          addBinding(this, templateInfo, nodeInfo, kind, name, parts, literal);
          return true;
        } else {
          return super._parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value);
        }
      }

      /**
       * Overrides default `TemplateStamp` implementation to add support for
       * binding the properties that a nested template depends on to the template
       * as `_host_<property>`.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */
      static _parseTemplateNestedTemplate(node, templateInfo, nodeInfo) {
        let noted = super._parseTemplateNestedTemplate(node, templateInfo, nodeInfo);
        // Merge host props into outer template and add bindings
        let hostProps = nodeInfo.templateInfo.hostProps;
        let mode = '{';
        for (let source in hostProps) {
          let parts = [{ mode, source, dependencies: [source] }];
          addBinding(this, templateInfo, nodeInfo, 'property', '_host_' + source, parts);
        }
        return noted;
      }

      /**
       * Called to parse text in a template (either attribute values or
       * textContent) into binding metadata.
       *
       * Any overrides of this method should return an array of binding part
       * metadata  representing one or more bindings found in the provided text
       * and any "literal" text in between.  Any non-literal parts will be passed
       * to `_evaluateBinding` when any dependencies change.  The only required
       * fields of each "part" in the returned array are as follows:
       *
       * - `dependencies` - Array containing trigger metadata for each property
       *   that should trigger the binding to update
       * - `literal` - String containing text if the part represents a literal;
       *   in this case no `dependencies` are needed
       *
       * Additional metadata for use by `_evaluateBinding` may be provided in
       * each part object as needed.
       *
       * The default implementation handles the following types of bindings
       * (one or more may be intermixed with literal strings):
       * - Property binding: `[[prop]]`
       * - Path binding: `[[object.prop]]`
       * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
       * - Two-way property or path bindings (supports negation):
       *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
       * - Inline computed method (supports negation):
       *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
       *
       * @param {string} text Text to parse from attribute or textContent
       * @param {Object} templateInfo Current template metadata
       * @return {Array<!BindingPart>} Array of binding part metadata
       * @protected
       */
      static _parseBindings(text, templateInfo) {
        let parts = [];
        let lastIndex = 0;
        let m;
        // Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
        // Regex matches:
        //        Iteration 1:  Iteration 2:
        // m[1]: '{{'          '[['
        // m[2]: ''            '!'
        // m[3]: 'prop'        'compute(foo,bar)'
        while ((m = bindingRegex.exec(text)) !== null) {
          // Add literal part
          if (m.index > lastIndex) {
            parts.push({ literal: text.slice(lastIndex, m.index) });
          }
          // Add binding part
          let mode = m[1][0];
          let negate = Boolean(m[2]);
          let source = m[3].trim();
          let customEvent = false,
              notifyEvent = '',
              colon = -1;
          if (mode == '{' && (colon = source.indexOf('::')) > 0) {
            notifyEvent = source.substring(colon + 2);
            source = source.substring(0, colon);
            customEvent = true;
          }
          let signature = parseMethod(source);
          let dependencies = [];
          if (signature) {
            // Inline computed function
            let { args, methodName } = signature;
            for (let i = 0; i < args.length; i++) {
              let arg = args[i];
              if (!arg.literal) {
                dependencies.push(arg);
              }
            }
            let dynamicFns = templateInfo.dynamicFns;
            if (dynamicFns && dynamicFns[methodName] || signature.static) {
              dependencies.push(methodName);
              signature.dynamicFn = true;
            }
          } else {
            // Property or path
            dependencies.push(source);
          }
          parts.push({
            source, mode, negate, customEvent, signature, dependencies,
            event: notifyEvent
          });
          lastIndex = bindingRegex.lastIndex;
        }
        // Add a final literal part
        if (lastIndex && lastIndex < text.length) {
          let literal = text.substring(lastIndex);
          if (literal) {
            parts.push({
              literal: literal
            });
          }
        }
        if (parts.length) {
          return parts;
        } else {
          return null;
        }
      }

      /**
       * Called to evaluate a previously parsed binding part based on a set of
       * one or more changed dependencies.
       *
       * @param {this} inst Element that should be used as scope for
       *   binding dependencies
       * @param {BindingPart} part Binding part metadata
       * @param {string} path Property/path that triggered this effect
       * @param {Object} props Bag of current property changes
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {*} Value the binding part evaluated to
       * @protected
       */
      static _evaluateBinding(inst, part, path, props, oldProps, hasPaths) {
        let value;
        if (part.signature) {
          value = runMethodEffect(inst, path, props, oldProps, part.signature);
        } else if (path != part.source) {
          value = Polymer.Path.get(inst, part.source);
        } else {
          if (hasPaths && Polymer.Path.isPath(path)) {
            value = Polymer.Path.get(inst, path);
          } else {
            value = inst.__data[path];
          }
        }
        if (part.negate) {
          value = !value;
        }
        return value;
      }

    }

    // make a typing for closure :P
    PropertyEffectsType = PropertyEffects;

    return PropertyEffects;
  });

  /**
   * Helper api for enqueuing client dom created by a host element.
   *
   * By default elements are flushed via `_flushProperties` when
   * `connectedCallback` is called. Elements attach their client dom to
   * themselves at `ready` time which results from this first flush.
   * This provides an ordering guarantee that the client dom an element
   * creates is flushed before the element itself (i.e. client `ready`
   * fires before host `ready`).
   *
   * However, if `_flushProperties` is called *before* an element is connected,
   * as for example `Templatize` does, this ordering guarantee cannot be
   * satisfied because no elements are connected. (Note: Bound elements that
   * receive data do become enqueued clients and are properly ordered but
   * unbound elements are not.)
   *
   * To maintain the desired "client before host" ordering guarantee for this
   * case we rely on the "host stack. Client nodes registers themselves with
   * the creating host element when created. This ensures that all client dom
   * is readied in the proper order, maintaining the desired guarantee.
   *
   * @private
   */
  let hostStack = {

    stack: [],

    /**
     * @param {*} inst Instance to add to hostStack
     * @return {void}
     * @this {hostStack}
     */
    registerHost(inst) {
      if (this.stack.length) {
        let host = this.stack[this.stack.length - 1];
        host._enqueueClient(inst);
      }
    },

    /**
     * @param {*} inst Instance to begin hosting
     * @return {void}
     * @this {hostStack}
     */
    beginHosting(inst) {
      this.stack.push(inst);
    },

    /**
     * @param {*} inst Instance to end hosting
     * @return {void}
     * @this {hostStack}
     */
    endHosting(inst) {
      let stackLen = this.stack.length;
      if (stackLen && this.stack[stackLen - 1] == inst) {
        this.stack.pop();
      }
    }

  };
})();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(2);

__webpack_require__(5);

(function () {
  'use strict';

  /**
   * @summary Collapse multiple callbacks into one invocation after a timer.
   * @memberof Polymer
   */

  class Debouncer {
    constructor() {
      this._asyncModule = null;
      this._callback = null;
      this._timer = null;
    }
    /**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */
    setConfig(asyncModule, callback) {
      this._asyncModule = asyncModule;
      this._callback = callback;
      this._timer = this._asyncModule.run(() => {
        this._timer = null;
        this._callback();
      });
    }
    /**
     * Cancels an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */
    cancel() {
      if (this.isActive()) {
        this._asyncModule.cancel(this._timer);
        this._timer = null;
      }
    }
    /**
     * Flushes an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */
    flush() {
      if (this.isActive()) {
        this.cancel();
        this._callback();
      }
    }
    /**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */
    isActive() {
      return this._timer != null;
    }
    /**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * _debounceWork() {
     *   this._debounceJob = Polymer.Debouncer.debounce(this._debounceJob,
     *       Polymer.Async.microTask, () => {
     *     this._doWork();
     *   });
     * }
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `Polymer.enqueueDebouncer` and
     * `Polymer.flush`. For example, extend the above example by adding
     * `Polymer.enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `Polymer.flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncInterface} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */
    static debounce(debouncer, asyncModule, callback) {
      if (debouncer instanceof Debouncer) {
        debouncer.cancel();
      } else {
        debouncer = new Debouncer();
      }
      debouncer.setConfig(asyncModule, callback);
      return debouncer;
    }
  }

  Polymer.Debouncer = Debouncer;
})();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

(function () {
  'use strict';

  let debouncerQueue = [];

  /**
   * Adds a `Polymer.Debouncer` to a list of globally flushable tasks.
   *
   * @memberof Polymer
   * @param {!Polymer.Debouncer} debouncer Debouncer to enqueue
   * @return {void}
   */
  Polymer.enqueueDebouncer = function (debouncer) {
    debouncerQueue.push(debouncer);
  };

  function flushDebouncers() {
    const didFlush = Boolean(debouncerQueue.length);
    while (debouncerQueue.length) {
      try {
        debouncerQueue.shift().flush();
      } catch (e) {
        setTimeout(() => {
          throw e;
        });
      }
    }
    return didFlush;
  }

  /**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * @memberof Polymer
   * @return {void}
   */
  Polymer.flush = function () {
    let shadyDOM, debouncers;
    do {
      shadyDOM = window.ShadyDOM && ShadyDOM.flush();
      if (window.ShadyCSS && window.ShadyCSS.ScopingShim) {
        window.ShadyCSS.ScopingShim.flush();
      }
      debouncers = flushDebouncers();
    } while (shadyDOM || debouncers);
  };
})();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(7);

__webpack_require__(6);

(function () {
  'use strict';

  // Base class for HTMLTemplateElement extension that has property effects
  // machinery for propagating host properties to children. This is an ES5
  // class only because Babel (incorrectly) requires super() in the class
  // constructor even though no `this` is used and it returns an instance.

  let newInstance = null;
  /**
   * @constructor
   * @extends {HTMLTemplateElement}
   */
  function HTMLTemplateElementExtension() {
    return newInstance;
  }
  HTMLTemplateElementExtension.prototype = Object.create(HTMLTemplateElement.prototype, {
    constructor: {
      value: HTMLTemplateElementExtension,
      writable: true
    }
  });
  /**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @extends {HTMLTemplateElementExtension}
   */
  const DataTemplate = Polymer.PropertyEffects(HTMLTemplateElementExtension);
  /**
   * @constructor
   * @implements {Polymer_MutableData}
   * @extends {DataTemplate}
   */
  const MutableDataTemplate = Polymer.MutableData(DataTemplate);

  // Applies a DataTemplate subclass to a <template> instance
  function upgradeTemplate(template, constructor) {
    newInstance = template;
    Object.setPrototypeOf(template, constructor.prototype);
    new constructor();
    newInstance = null;
  }

  // Base class for TemplateInstance's
  /**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   */
  const base = Polymer.PropertyEffects(class {});

  /**
   * @polymer
   * @customElement
   * @appliesMixin Polymer.PropertyEffects
   * @unrestricted
   */
  class TemplateInstanceBase extends base {
    constructor(props) {
      super();
      this._configureProperties(props);
      this.root = this._stampTemplate(this.__dataHost);
      // Save list of stamped children
      let children = this.children = [];
      for (let n = this.root.firstChild; n; n = n.nextSibling) {
        children.push(n);
        n.__templatizeInstance = this;
      }
      if (this.__templatizeOwner && this.__templatizeOwner.__hideTemplateChildren__) {
        this._showHideChildren(true);
      }
      // Flush props only when props are passed if instance props exist
      // or when there isn't instance props.
      let options = this.__templatizeOptions;
      if (props && options.instanceProps || !options.instanceProps) {
        this._enableProperties();
      }
    }
    /**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     * @return {void}
     */
    _configureProperties(props) {
      let options = this.__templatizeOptions;
      if (options.forwardHostProp) {
        for (let hprop in this.__hostProps) {
          this._setPendingProperty(hprop, this.__dataHost['_host_' + hprop]);
        }
      }
      // Any instance props passed in the constructor will overwrite host props;
      // normally this would be a user error but we don't specifically filter them
      for (let iprop in props) {
        this._setPendingProperty(iprop, props[iprop]);
      }
    }
    /**
     * Forwards a host property to this instance.  This method should be
     * called on instances from the `options.forwardHostProp` callback
     * to propagate changes of host properties to each instance.
     *
     * Note this method enqueues the change, which are flushed as a batch.
     *
     * @param {string} prop Property or path name
     * @param {*} value Value of the property to forward
     * @return {void}
     */
    forwardHostProp(prop, value) {
      if (this._setPendingPropertyOrPath(prop, value, false, true)) {
        this.__dataHost._enqueueClient(this);
      }
    }

    /**
     * Override point for adding custom or simulated event handling.
     *
     * @param {!Node} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     */
    _addEventListenerToNode(node, eventName, handler) {
      if (this._methodHost && this.__templatizeOptions.parentModel) {
        // If this instance should be considered a parent model, decorate
        // events this template instance as `model`
        this._methodHost._addEventListenerToNode(node, eventName, e => {
          e.model = this;
          handler(e);
        });
      } else {
        // Otherwise delegate to the template's host (which could be)
        // another template instance
        let templateHost = this.__dataHost.__dataHost;
        if (templateHost) {
          templateHost._addEventListenerToNode(node, eventName, handler);
        }
      }
    }
    /**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @param {boolean} hide Set to true to hide the children;
     * set to false to show them.
     * @return {void}
     * @protected
     */
    _showHideChildren(hide) {
      let c = this.children;
      for (let i = 0; i < c.length; i++) {
        let n = c[i];
        // Ignore non-changes
        if (Boolean(hide) != Boolean(n.__hideTemplateChildren__)) {
          if (n.nodeType === Node.TEXT_NODE) {
            if (hide) {
              n.__polymerTextContent__ = n.textContent;
              n.textContent = '';
            } else {
              n.textContent = n.__polymerTextContent__;
            }
            // remove and replace slot
          } else if (n.localName === 'slot') {
            if (hide) {
              n.__polymerReplaced__ = document.createComment('hidden-slot');
              n.parentNode.replaceChild(n.__polymerReplaced__, n);
            } else {
              const replace = n.__polymerReplaced__;
              if (replace) {
                replace.parentNode.replaceChild(n, replace);
              }
            }
          } else if (n.style) {
            if (hide) {
              n.__polymerDisplay__ = n.style.display;
              n.style.display = 'none';
            } else {
              n.style.display = n.__polymerDisplay__;
            }
          }
        }
        n.__hideTemplateChildren__ = hide;
        if (n._showHideChildren) {
          n._showHideChildren(hide);
        }
      }
    }
    /**
     * Overrides default property-effects implementation to intercept
     * textContent bindings while children are "hidden" and cache in
     * private storage for later retrieval.
     *
     * @param {!Node} node The node to set a property on
     * @param {string} prop The property to set
     * @param {*} value The value to set
     * @return {void}
     * @protected
     */
    _setUnmanagedPropertyToNode(node, prop, value) {
      if (node.__hideTemplateChildren__ && node.nodeType == Node.TEXT_NODE && prop == 'textContent') {
        node.__polymerTextContent__ = value;
      } else {
        super._setUnmanagedPropertyToNode(node, prop, value);
      }
    }
    /**
     * Find the parent model of this template instance.  The parent model
     * is either another templatize instance that had option `parentModel: true`,
     * or else the host element.
     *
     * @return {!Polymer_PropertyEffects} The parent model of this instance
     */
    get parentModel() {
      let model = this.__parentModel;
      if (!model) {
        let options;
        model = this;
        do {
          // A template instance's `__dataHost` is a <template>
          // `model.__dataHost.__dataHost` is the template's host
          model = model.__dataHost.__dataHost;
        } while ((options = model.__templatizeOptions) && !options.parentModel);
        this.__parentModel = model;
      }
      return model;
    }

    /**
     * Stub of HTMLElement's `dispatchEvent`, so that effects that may
     * dispatch events safely no-op.
     *
     * @param {Event} event Event to dispatch
     */
    dispatchEvent(event) {// eslint-disable-line no-unused-vars
    }
  }

  /** @type {!DataTemplate} */
  TemplateInstanceBase.prototype.__dataHost;
  /** @type {!TemplatizeOptions} */
  TemplateInstanceBase.prototype.__templatizeOptions;
  /** @type {!Polymer_PropertyEffects} */
  TemplateInstanceBase.prototype._methodHost;
  /** @type {!Object} */
  TemplateInstanceBase.prototype.__templatizeOwner;
  /** @type {!Object} */
  TemplateInstanceBase.prototype.__hostProps;

  /**
   * @constructor
   * @extends {TemplateInstanceBase}
   * @implements {Polymer_MutableData}
   */
  const MutableTemplateInstanceBase = Polymer.MutableData(TemplateInstanceBase);

  function findMethodHost(template) {
    // Technically this should be the owner of the outermost template.
    // In shadow dom, this is always getRootNode().host, but we can
    // approximate this via cooperation with our dataHost always setting
    // `_methodHost` as long as there were bindings (or id's) on this
    // instance causing it to get a dataHost.
    let templateHost = template.__dataHost;
    return templateHost && templateHost._methodHost || templateHost;
  }

  /* eslint-disable valid-jsdoc */
  /**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */
  function createTemplatizerClass(template, templateInfo, options) {
    // Anonymous class created by the templatize
    let base = options.mutableData ? MutableTemplateInstanceBase : TemplateInstanceBase;
    /**
     * @constructor
     * @extends {base}
     * @private
     */
    let klass = class extends base {};
    klass.prototype.__templatizeOptions = options;
    klass.prototype._bindTemplate(template);
    addNotifyEffects(klass, template, templateInfo, options);
    return klass;
  }

  /**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */
  function addPropagateEffects(template, templateInfo, options) {
    let userForwardHostProp = options.forwardHostProp;
    if (userForwardHostProp) {
      // Provide data API and property effects on memoized template class
      let klass = templateInfo.templatizeTemplateClass;
      if (!klass) {
        let base = options.mutableData ? MutableDataTemplate : DataTemplate;
        klass = templateInfo.templatizeTemplateClass = class TemplatizedTemplate extends base {};
        // Add template - >instances effects
        // and host <- template effects
        let hostProps = templateInfo.hostProps;
        for (let prop in hostProps) {
          klass.prototype._addPropertyEffect('_host_' + prop, klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, { fn: createForwardHostPropEffect(prop, userForwardHostProp) });
          klass.prototype._createNotifyingProperty('_host_' + prop);
        }
      }
      upgradeTemplate(template, klass);
      // Mix any pre-bound data into __data; no need to flush this to
      // instances since they pull from the template at instance-time
      if (template.__dataProto) {
        // Note, generally `__dataProto` could be chained, but it's guaranteed
        // to not be since this is a vanilla template we just added effects to
        Object.assign(template.__data, template.__dataProto);
      }
      // Clear any pending data for performance
      template.__dataTemp = {};
      template.__dataPending = null;
      template.__dataOld = null;
      template._enableProperties();
    }
  }
  /* eslint-enable valid-jsdoc */

  function createForwardHostPropEffect(hostProp, userForwardHostProp) {
    return function forwardHostProp(template, prop, props) {
      userForwardHostProp.call(template.__templatizeOwner, prop.substring('_host_'.length), props[prop]);
    };
  }

  function addNotifyEffects(klass, template, templateInfo, options) {
    let hostProps = templateInfo.hostProps || {};
    for (let iprop in options.instanceProps) {
      delete hostProps[iprop];
      let userNotifyInstanceProp = options.notifyInstanceProp;
      if (userNotifyInstanceProp) {
        klass.prototype._addPropertyEffect(iprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: createNotifyInstancePropEffect(iprop, userNotifyInstanceProp) });
      }
    }
    if (options.forwardHostProp && template.__dataHost) {
      for (let hprop in hostProps) {
        klass.prototype._addPropertyEffect(hprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: createNotifyHostPropEffect() });
      }
    }
  }

  function createNotifyInstancePropEffect(instProp, userNotifyInstanceProp) {
    return function notifyInstanceProp(inst, prop, props) {
      userNotifyInstanceProp.call(inst.__templatizeOwner, inst, prop, props[prop]);
    };
  }

  function createNotifyHostPropEffect() {
    return function notifyHostProp(inst, prop, props) {
      inst.__dataHost._setPendingPropertyOrPath('_host_' + prop, props[prop], true, true);
    };
  }

  /**
   * Module for preparing and stamping instances of templates that utilize
   * Polymer's data-binding and declarative event listener features.
   *
   * Example:
   *
   *     // Get a template from somewhere, e.g. light DOM
   *     let template = this.querySelector('template');
   *     // Prepare the template
   *     let TemplateClass = Polymer.Templatize.templatize(template);
   *     // Instance the template with an initial data model
   *     let instance = new TemplateClass({myProp: 'initial'});
   *     // Insert the instance's DOM somewhere, e.g. element's shadow DOM
   *     this.shadowRoot.appendChild(instance.root);
   *     // Changing a property on the instance will propagate to bindings
   *     // in the template
   *     instance.myProp = 'new value';
   *
   * The `options` dictionary passed to `templatize` allows for customizing
   * features of the generated template class, including how outer-scope host
   * properties should be forwarded into template instances, how any instance
   * properties added into the template's scope should be notified out to
   * the host, and whether the instance should be decorated as a "parent model"
   * of any event handlers.
   *
   *     // Customize property forwarding and event model decoration
   *     let TemplateClass = Polymer.Templatize.templatize(template, this, {
   *       parentModel: true,
   *       forwardHostProp(property, value) {...},
   *       instanceProps: {...},
   *       notifyInstanceProp(instance, property, value) {...},
   *     });
   *
   * @namespace
   * @memberof Polymer
   * @summary Module for preparing and stamping instances of templates
   *   utilizing Polymer templating features.
   */

  const Templatize = {

    /**
     * Returns an anonymous `Polymer.PropertyEffects` class bound to the
     * `<template>` provided.  Instancing the class will result in the
     * template being stamped into a document fragment stored as the instance's
     * `root` property, after which it can be appended to the DOM.
     *
     * Templates may utilize all Polymer data-binding features as well as
     * declarative event listeners.  Event listeners and inline computing
     * functions in the template will be called on the host of the template.
     *
     * The constructor returned takes a single argument dictionary of initial
     * property values to propagate into template bindings.  Additionally
     * host properties can be forwarded in, and instance properties can be
     * notified out by providing optional callbacks in the `options` dictionary.
     *
     * Valid configuration in `options` are as follows:
     *
     * - `forwardHostProp(property, value)`: Called when a property referenced
     *   in the template changed on the template's host. As this library does
     *   not retain references to templates instanced by the user, it is the
     *   templatize owner's responsibility to forward host property changes into
     *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
     *    method on the generated class should be called to forward host
     *   properties into the template to prevent unnecessary property-changed
     *   notifications. Any properties referenced in the template that are not
     *   defined in `instanceProps` will be notified up to the template's host
     *   automatically.
     * - `instanceProps`: Dictionary of property names that will be added
     *   to the instance by the templatize owner.  These properties shadow any
     *   host properties, and changes within the template to these properties
     *   will result in `notifyInstanceProp` being called.
     * - `mutableData`: When `true`, the generated class will skip strict
     *   dirty-checking for objects and arrays (always consider them to be
     *   "dirty").
     * - `notifyInstanceProp(instance, property, value)`: Called when
     *   an instance property changes.  Users may choose to call `notifyPath`
     *   on e.g. the owner to notify the change.
     * - `parentModel`: When `true`, events handled by declarative event listeners
     *   (`on-event="handler"`) will be decorated with a `model` property pointing
     *   to the template instance that stamped it.  It will also be returned
     *   from `instance.parentModel` in cases where template instance nesting
     *   causes an inner model to shadow an outer model.
     *
     * When `options.forwardHostProp` is declared as an option, any properties
     * referenced in the template will be automatically forwarded from the host of
     * the `<template>` to instances, with the exception of any properties listed in
     * the `options.instanceProps` object.  `instanceProps` are assumed to be
     * managed by the owner of the instances, either passed into the constructor
     * or set after the fact.  Note, any properties passed into the constructor will
     * always be set to the instance (regardless of whether they would normally
     * be forwarded from the host).
     *
     * Note that the class returned from `templatize` is generated only once
     * for a given `<template>` using `options` from the first call for that
     * template, and the cached class is returned for all subsequent calls to
     * `templatize` for that template.  As such, `options` callbacks should not
     * close over owner-specific properties since only the first `options` is
     * used; rather, callbacks are called bound to the `owner`, and so context
     * needed from the callbacks (such as references to `instances` stamped)
     * should be stored on the `owner` such that they can be retrieved via `this`.
     *
     * @memberof Polymer.Templatize
     * @param {!HTMLTemplateElement} template Template to templatize
     * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
     *   any optional callbacks will be bound to this owner.
     * @param {Object=} options Options dictionary (see summary for details)
     * @return {function(new:TemplateInstanceBase)} Generated class bound to the template
     *   provided
     * @suppress {invalidCasts}
     */
    templatize(template, owner, options) {
      options = /** @type {!TemplatizeOptions} */options || {};
      if (template.__templatizeOwner) {
        throw new Error('A <template> can only be templatized once');
      }
      template.__templatizeOwner = owner;
      const ctor = owner ? owner.constructor : TemplateInstanceBase;
      let templateInfo = ctor._parseTemplate(template);
      // Get memoized base class for the prototypical template, which
      // includes property effects for binding template & forwarding
      let baseClass = templateInfo.templatizeInstanceClass;
      if (!baseClass) {
        baseClass = createTemplatizerClass(template, templateInfo, options);
        templateInfo.templatizeInstanceClass = baseClass;
      }
      // Host property forwarding must be installed onto template instance
      addPropagateEffects(template, templateInfo, options);
      // Subclass base class and add reference for this specific template
      /** @private */
      let klass = class TemplateInstance extends baseClass {};
      klass.prototype._methodHost = findMethodHost(template);
      klass.prototype.__dataHost = template;
      klass.prototype.__templatizeOwner = owner;
      klass.prototype.__hostProps = templateInfo.hostProps;
      klass = /** @type {function(new:TemplateInstanceBase)} */klass; //eslint-disable-line no-self-assign
      return klass;
    },

    /**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model is an instance of
     * `TemplateInstanceBase`, and should be used to manipulate data
     * associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @memberof Polymer.Templatize
     * @param {HTMLTemplateElement} template The model will be returned for
     *   elements stamped from this template
     * @param {Node=} node Node for which to return a template model.
     * @return {TemplateInstanceBase} Template instance representing the
     *   binding scope for the element
     */
    modelForElement(template, node) {
      let model;
      while (node) {
        // An element with a __templatizeInstance marks the top boundary
        // of a scope; walk up until we find one, and then ensure that
        // its __dataHost matches `this`, meaning this dom-repeat stamped it
        if (model = node.__templatizeInstance) {
          // Found an element stamped by another template; keep walking up
          // from its __dataHost
          if (model.__dataHost != template) {
            node = model.__dataHost;
          } else {
            return model;
          }
        } else {
          // Still in a template scope, keep going up until
          // a __templatizeInstance is found
          node = node.parentNode;
        }
      }
      return null;
    }
  };

  Polymer.Templatize = Templatize;
  Polymer.TemplateInstanceBase = TemplateInstanceBase;
})();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(15);

__webpack_require__(23);

(function () {
  'use strict';

  /**
   * Base class that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * @customElement
   * @polymer
   * @memberof Polymer
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends HTMLElement
   * @appliesMixin Polymer.ElementMixin
   * @summary Custom element base class that provides the core API for Polymer's
   *   key meta-programming features including template stamping, data-binding,
   *   attribute deserialization, and property change observation
   */

  const Element = Polymer.ElementMixin(HTMLElement);
  /**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends {HTMLElement}
   */
  Polymer.Element = Element;

  // NOTE: this is here for modulizer to export `html` for the module version of this file
  Polymer.html = Polymer.html;
})();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(26);

__webpack_require__(63);

/**
 * @demo demo/index.html
 * @polymerBehavior Polymer.IronButtonState
 */
Polymer.IronButtonStateImpl = {

  properties: {

    /**
     * If true, the user is currently holding down the button.
     */
    pressed: {
      type: Boolean,
      readOnly: true,
      value: false,
      reflectToAttribute: true,
      observer: '_pressedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, the button is a toggle and is currently in the active state.
     */
    active: {
      type: Boolean,
      value: false,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */
    pointerDown: {
      type: Boolean,
      readOnly: true,
      value: false
    },

    /**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */
    receivedFocusFromKeyboard: {
      type: Boolean,
      readOnly: true
    },

    /**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */
    ariaActiveAttribute: {
      type: String,
      value: 'aria-pressed',
      observer: '_ariaActiveAttributeChanged'
    }
  },

  listeners: {
    down: '_downHandler',
    up: '_upHandler',
    tap: '_tapHandler'
  },

  observers: ['_focusChanged(focused)', '_activeChanged(active, ariaActiveAttribute)'],

  /**
   * @type {!Object}
   */
  keyBindings: {
    'enter:keydown': '_asyncClick',
    'space:keydown': '_spaceKeyDownHandler',
    'space:keyup': '_spaceKeyUpHandler'
  },

  _mouseEventRe: /^mouse/,

  _tapHandler: function () {
    if (this.toggles) {
      // a tap is needed to toggle the active state
      this._userActivate(!this.active);
    } else {
      this.active = false;
    }
  },

  _focusChanged: function (focused) {
    this._detectKeyboardFocus(focused);

    if (!focused) {
      this._setPressed(false);
    }
  },

  _detectKeyboardFocus: function (focused) {
    this._setReceivedFocusFromKeyboard(!this.pointerDown && focused);
  },

  // to emulate native checkbox, (de-)activations from a user interaction fire
  // 'change' events
  _userActivate: function (active) {
    if (this.active !== active) {
      this.active = active;
      this.fire('change');
    }
  },

  _downHandler: function (event) {
    this._setPointerDown(true);
    this._setPressed(true);
    this._setReceivedFocusFromKeyboard(false);
  },

  _upHandler: function () {
    this._setPointerDown(false);
    this._setPressed(false);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyDownHandler: function (event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = Polymer.dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant( /** @type {Node} */target)) return;

    keyboardEvent.preventDefault();
    keyboardEvent.stopImmediatePropagation();
    this._setPressed(true);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyUpHandler: function (event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = Polymer.dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant( /** @type {Node} */target)) return;

    if (this.pressed) {
      this._asyncClick();
    }
    this._setPressed(false);
  },

  // trigger click asynchronously, the asynchrony is useful to allow one
  // event handler to unwind before triggering another event
  _asyncClick: function () {
    this.async(function () {
      this.click();
    }, 1);
  },

  // any of these changes are considered a change to button state

  _pressedChanged: function (pressed) {
    this._changedButtonState();
  },

  _ariaActiveAttributeChanged: function (value, oldValue) {
    if (oldValue && oldValue != value && this.hasAttribute(oldValue)) {
      this.removeAttribute(oldValue);
    }
  },

  _activeChanged: function (active, ariaActiveAttribute) {
    if (this.toggles) {
      this.setAttribute(this.ariaActiveAttribute, active ? 'true' : 'false');
    } else {
      this.removeAttribute(this.ariaActiveAttribute);
    }
    this._changedButtonState();
  },

  _controlStateChanged: function () {
    if (this.disabled) {
      this._setPressed(false);
    } else {
      this._changedButtonState();
    }
  },

  // provide hook for follow-on behaviors to react to button-state

  _changedButtonState: function () {
    if (this._buttonStateChanged) {
      this._buttonStateChanged(); // abstract
    }
  }

};

/** @polymerBehavior */
Polymer.IronButtonState = [Polymer.IronA11yKeysBehavior, Polymer.IronButtonStateImpl];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(73), __webpack_require__(76), __webpack_require__(77), __webpack_require__(78), __webpack_require__(79), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });
    function customElement(tagname) {
        return clazz => {
            clazz.is = tagname;
            window[clazz.name] = clazz; // Register class in windows se that is can be use without IMD module loading.
            // Useful for import in pure JS project.
            window.customElements.define(tagname, clazz);
        };
    }
    exports.customElement = customElement;
    /**
     * A TypeScript class decorator that declare a global class
     * `tagname` and the decorated class.
     */
    function jsElement() {
        return clazz => {
            window[clazz.name] = clazz; // Register class in windows se that is can be use without IMD module loading.
            // Useful for import in pure JS project.
        };
    }
    exports.jsElement = jsElement;
    function createProperty(proto, name, options) {
        const notify = options && options.notify || false;
        const reflectToAttribute = options && options.reflectToAttribute || false;
        const readOnly = options && options.readOnly || false;
        const computed = options && options.computed || "";
        const observer = options && options.observer || "";
        let type;
        if (options && options.hasOwnProperty("type")) {
            type = options.type;
        } else if (window.Reflect && Reflect.hasMetadata && Reflect.getMetadata && Reflect.hasMetadata("design:type", proto, name)) {
            type = Reflect.getMetadata("design:type", proto, name);
        } else {
            console.error(`A type could not be found for ${name}. ` + "Set a type or configure Metadata Reflection API support.");
        }
        if (!proto.constructor.hasOwnProperty("properties")) {
            Object.defineProperty(proto.constructor, "properties", { value: {} });
        }
        const finalOpts = { type, notify, reflectToAttribute, readOnly, computed, observer };
        proto.constructor.properties[name] = finalOpts;
    }
    /**
     * A TypeScript property decorator factory that defines this as a Polymer
     * property.
     *
     * This function must be invoked to return a decorator.
     */
    function property(options) {
        return (proto, propName) => {
            createProperty(proto, propName, options);
        };
    }
    exports.property = property;
    function domElement() {
        return (proto, propName) => {};
    }
    exports.domElement = domElement;
    /**
     * A TypeScript property decorator factory that causes the decorated method to
     * be called when a property changes. `targets` is either a single property
     * name, or a list of property names.
     *
     * This function must be invoked to return a decorator.
     */
    function observe(...targets) {
        return (proto, propName) => {
            if (!proto.constructor.hasOwnProperty("observers")) {
                proto.constructor.observers = [];
            }
            proto.constructor.observers.push(`${propName}(${targets.join(",")})`);
        };
    }
    exports.observe = observe;
    function _ensureConfig(proto) {
        const ctor = proto.constructor;
        if (ctor.hasOwnProperty("__polymer_ts_config")) {
            return ctor.__polymer_ts_config;
        }
        Object.defineProperty(ctor, "config", {
            get() {
                return ctor.__polymer_ts_config;
            }
        });
        const config = ctor.__polymer_ts_config = ctor.__polymer_ts_config || {};
        config.properties = config.properties || {};
        config.observers = config.observers || [];
        return config;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(35);

__webpack_require__(15);

__webpack_require__(21);

__webpack_require__(42);

__webpack_require__(2);

__webpack_require__(43);

__webpack_require__(44);

__webpack_require__(45);

__webpack_require__(46);

(function () {

  'use strict';

  let styleInterface = window.ShadyCSS;

  /**
   * Element class mixin that provides Polymer's "legacy" API intended to be
   * backward-compatible to the greatest extent possible with the API
   * found on the Polymer 1.x `Polymer.Base` prototype applied to all elements
   * defined using the `Polymer({...})` function.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin Polymer.ElementMixin
   * @appliesMixin Polymer.GestureEventListeners
   * @property isAttached {boolean} Set to `true` in this element's
   *   `connectedCallback` and `false` in `disconnectedCallback`
   * @memberof Polymer
   * @summary Element class mixin that provides Polymer's "legacy" API
   */
  Polymer.LegacyElementMixin = Polymer.dedupingMixin(base => {

    /**
     * @constructor
     * @extends {base}
     * @implements {Polymer_ElementMixin}
     * @implements {Polymer_GestureEventListeners}
     * @implements {Polymer_DirMixin}
     */
    const legacyElementBase = Polymer.DirMixin(Polymer.GestureEventListeners(Polymer.ElementMixin(base)));

    /**
     * Map of simple names to touch action names
     * @dict
     */
    const DIRECTION_MAP = {
      'x': 'pan-x',
      'y': 'pan-y',
      'none': 'none',
      'all': 'auto'
    };

    /**
     * @polymer
     * @mixinClass
     * @extends {legacyElementBase}
     * @implements {Polymer_LegacyElementMixin}
     * @unrestricted
     */
    class LegacyElement extends legacyElementBase {

      constructor() {
        super();
        this.root = this;
        /** @type {boolean} */
        this.isAttached;
        /** @type {WeakMap<!Element, !Object<string, !Function>>} */
        this.__boundListeners;
        /** @type {Object<string, Function>} */
        this._debouncers;
        this.created();
        // Ensure listeners are applied immediately so that they are
        // added before declarative event listeners. This allows an element to
        // decorate itself via an event prior to any declarative listeners
        // seeing the event. Note, this ensures compatibility with 1.x ordering.
        this._applyListeners();
      }

      /**
       * Legacy callback called during the `constructor`, for overriding
       * by the user.
       * @return {void}
       */
      created() {}

      /**
       * Provides an implementation of `connectedCallback`
       * which adds Polymer legacy API's `attached` method.
       * @return {void}
       * @override
       */
      connectedCallback() {
        super.connectedCallback();
        this.isAttached = true;
        this.attached();
      }

      /**
       * Legacy callback called during `connectedCallback`, for overriding
       * by the user.
       * @return {void}
       */
      attached() {}

      /**
       * Provides an implementation of `disconnectedCallback`
       * which adds Polymer legacy API's `detached` method.
       * @return {void}
       * @override
       */
      disconnectedCallback() {
        super.disconnectedCallback();
        this.isAttached = false;
        this.detached();
      }

      /**
       * Legacy callback called during `disconnectedCallback`, for overriding
       * by the user.
       * @return {void}
       */
      detached() {}

      /**
       * Provides an override implementation of `attributeChangedCallback`
       * which adds the Polymer legacy API's `attributeChanged` method.
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @return {void}
       * @override
       */
      attributeChangedCallback(name, old, value) {
        if (old !== value) {
          super.attributeChangedCallback(name, old, value);
          this.attributeChanged(name, old, value);
        }
      }

      /**
       * Legacy callback called during `attributeChangedChallback`, for overriding
       * by the user.
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @return {void}
       */
      attributeChanged(name, old, value) {} // eslint-disable-line no-unused-vars

      /**
       * Overrides the default `Polymer.PropertyEffects` implementation to
       * add support for class initialization via the `_registered` callback.
       * This is called only when the first instance of the element is created.
       *
       * @return {void}
       * @override
       */
      _initializeProperties() {
        let proto = Object.getPrototypeOf(this);
        if (!proto.hasOwnProperty('__hasRegisterFinished')) {
          proto.__hasRegisterFinished = true;
          this._registered();
        }
        super._initializeProperties();
      }

      /**
       * Called automatically when an element is initializing.
       * Users may override this method to perform class registration time
       * work. The implementation should ensure the work is performed
       * only once for the class.
       * @protected
       * @return {void}
       */
      _registered() {}

      /**
       * Overrides the default `Polymer.PropertyEffects` implementation to
       * add support for installing `hostAttributes` and `listeners`.
       *
       * @return {void}
       * @override
       */
      ready() {
        this._ensureAttributes();
        super.ready();
      }

      /**
       * Ensures an element has required attributes. Called when the element
       * is being readied via `ready`. Users should override to set the
       * element's required attributes. The implementation should be sure
       * to check and not override existing attributes added by
       * the user of the element. Typically, setting attributes should be left
       * to the element user and not done here; reasonable exceptions include
       * setting aria roles and focusability.
       * @protected
       * @return {void}
       */
      _ensureAttributes() {}

      /**
       * Adds element event listeners. Called when the element
       * is being readied via `ready`. Users should override to
       * add any required element event listeners.
       * In performance critical elements, the work done here should be kept
       * to a minimum since it is done before the element is rendered. In
       * these elements, consider adding listeners asynchronously so as not to
       * block render.
       * @protected
       * @return {void}
       */
      _applyListeners() {}

      /**
       * Converts a typed JavaScript value to a string.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features. To customize
       * how properties are serialized to attributes for attribute bindings and
       * `reflectToAttribute: true` properties as well as this method, override
       * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
       *
       * @param {*} value Value to deserialize
       * @return {string | undefined} Serialized value
       */
      serialize(value) {
        return this._serializeValue(value);
      }

      /**
       * Converts a string to a typed JavaScript value.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.  To customize
       * how attributes are deserialized to properties for in
       * `attributeChangedCallback`, override `_deserializeValue` method
       * provided by `Polymer.PropertyAccessors`.
       *
       * @param {string} value String to deserialize
       * @param {*} type Type to deserialize the string to
       * @return {*} Returns the deserialized value in the `type` given.
       */
      deserialize(value, type) {
        return this._deserializeValue(value, type);
      }

      /**
       * Serializes a property to its associated attribute.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect.
       * @param {*=} value Property value to reflect.
       * @return {void}
       */
      reflectPropertyToAttribute(property, attribute, value) {
        this._propertyToAttribute(property, attribute, value);
      }

      /**
       * Sets a typed value to an HTML attribute on a node.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @param {Element} node Element to set attribute to.
       * @return {void}
       */
      serializeValueToAttribute(value, attribute, node) {
        this._valueToNodeAttribute( /** @type {Element} */node || this, value, attribute);
      }

      /**
       * Copies own properties (including accessor descriptors) from a source
       * object to a target object.
       *
       * @param {Object} prototype Target object to copy properties to.
       * @param {Object} api Source object to copy properties from.
       * @return {Object} prototype object that was passed as first argument.
       */
      extend(prototype, api) {
        if (!(prototype && api)) {
          return prototype || api;
        }
        let n$ = Object.getOwnPropertyNames(api);
        for (let i = 0, n; i < n$.length && (n = n$[i]); i++) {
          let pd = Object.getOwnPropertyDescriptor(api, n);
          if (pd) {
            Object.defineProperty(prototype, n, pd);
          }
        }
        return prototype;
      }

      /**
       * Copies props from a source object to a target object.
       *
       * Note, this method uses a simple `for...in` strategy for enumerating
       * properties.  To ensure only `ownProperties` are copied from source
       * to target and that accessor implementations are copied, use `extend`.
       *
       * @param {!Object} target Target object to copy properties to.
       * @param {!Object} source Source object to copy properties from.
       * @return {!Object} Target object that was passed as first argument.
       */
      mixin(target, source) {
        for (let i in source) {
          target[i] = source[i];
        }
        return target;
      }

      /**
       * Sets the prototype of an object.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       * @param {Object} object The object on which to set the prototype.
       * @param {Object} prototype The prototype that will be set on the given
       * `object`.
       * @return {Object} Returns the given `object` with its prototype set
       * to the given `prototype` object.
       */
      chainObject(object, prototype) {
        if (object && prototype && object !== prototype) {
          object.__proto__ = prototype;
        }
        return object;
      }

      /* **** Begin Template **** */

      /**
       * Calls `importNode` on the `content` of the `template` specified and
       * returns a document fragment containing the imported content.
       *
       * @param {HTMLTemplateElement} template HTML template element to instance.
       * @return {!DocumentFragment} Document fragment containing the imported
       *   template content.
      */
      instanceTemplate(template) {
        let content = this.constructor._contentForTemplate(template);
        let dom = /** @type {!DocumentFragment} */
        document.importNode(content, true);
        return dom;
      }

      /* **** Begin Events **** */

      /**
       * Dispatches a custom event with an optional detail value.
       *
       * @param {string} type Name of event type.
       * @param {*=} detail Detail value containing event-specific
       *   payload.
       * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined), composed: (boolean|undefined) }=}
       *  options Object specifying options.  These may include:
       *  `bubbles` (boolean, defaults to `true`),
       *  `cancelable` (boolean, defaults to false), and
       *  `node` on which to fire the event (HTMLElement, defaults to `this`).
       * @return {!Event} The new event that was fired.
       */
      fire(type, detail, options) {
        options = options || {};
        detail = detail === null || detail === undefined ? {} : detail;
        let event = new Event(type, {
          bubbles: options.bubbles === undefined ? true : options.bubbles,
          cancelable: Boolean(options.cancelable),
          composed: options.composed === undefined ? true : options.composed
        });
        event.detail = detail;
        let node = options.node || this;
        node.dispatchEvent(event);
        return event;
      }

      /**
       * Convenience method to add an event listener on a given element,
       * late bound to a named method on this element.
       *
       * @param {Element} node Element to add event listener to.
       * @param {string} eventName Name of event to listen for.
       * @param {string} methodName Name of handler method on `this` to call.
       * @return {void}
       */
      listen(node, eventName, methodName) {
        node = /** @type {!Element} */node || this;
        let hbl = this.__boundListeners || (this.__boundListeners = new WeakMap());
        let bl = hbl.get(node);
        if (!bl) {
          bl = {};
          hbl.set(node, bl);
        }
        let key = eventName + methodName;
        if (!bl[key]) {
          bl[key] = this._addMethodEventListenerToNode(node, eventName, methodName, this);
        }
      }

      /**
       * Convenience method to remove an event listener from a given element,
       * late bound to a named method on this element.
       *
       * @param {Element} node Element to remove event listener from.
       * @param {string} eventName Name of event to stop listening to.
       * @param {string} methodName Name of handler method on `this` to not call
       anymore.
       * @return {void}
       */
      unlisten(node, eventName, methodName) {
        node = /** @type {!Element} */node || this;
        let bl = this.__boundListeners && this.__boundListeners.get(node);
        let key = eventName + methodName;
        let handler = bl && bl[key];
        if (handler) {
          this._removeEventListenerFromNode(node, eventName, handler);
          bl[key] = null;
        }
      }

      /**
       * Override scrolling behavior to all direction, one direction, or none.
       *
       * Valid scroll directions:
       *   - 'all': scroll in any direction
       *   - 'x': scroll only in the 'x' direction
       *   - 'y': scroll only in the 'y' direction
       *   - 'none': disable scrolling for this node
       *
       * @param {string=} direction Direction to allow scrolling
       * Defaults to `all`.
       * @param {Element=} node Element to apply scroll direction setting.
       * Defaults to `this`.
       * @return {void}
       */
      setScrollDirection(direction, node) {
        Polymer.Gestures.setTouchAction( /** @type {Element} */node || this, DIRECTION_MAP[direction] || 'auto');
      }
      /* **** End Events **** */

      /**
       * Convenience method to run `querySelector` on this local DOM scope.
       *
       * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
       *
       * @param {string} slctr Selector to run on this local DOM scope
       * @return {Element} Element found by the selector, or null if not found.
       */
      $$(slctr) {
        return this.root.querySelector(slctr);
      }

      /**
       * Return the element whose local dom within which this element
       * is contained. This is a shorthand for
       * `this.getRootNode().host`.
       * @this {Element}
       */
      get domHost() {
        let root = this.getRootNode();
        return root instanceof DocumentFragment ? /** @type {ShadowRoot} */root.host : root;
      }

      /**
       * Force this element to distribute its children to its local dom.
       * This should not be necessary as of Polymer 2.0.2 and is provided only
       * for backwards compatibility.
       * @return {void}
       */
      distributeContent() {
        if (window.ShadyDOM && this.shadowRoot) {
          ShadyDOM.flush();
        }
      }

      /**
       * Returns a list of nodes that are the effective childNodes. The effective
       * childNodes list is the same as the element's childNodes except that
       * any `<content>` elements are replaced with the list of nodes distributed
       * to the `<content>`, the result of its `getDistributedNodes` method.
       * @return {!Array<!Node>} List of effective child nodes.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */
      getEffectiveChildNodes() {
        const thisEl = /** @type {Element} */this;
        const domApi = /** @type {Polymer.DomApi} */Polymer.dom(thisEl);
        return domApi.getEffectiveChildNodes();
      }

      /**
       * Returns a list of nodes distributed within this element that match
       * `selector`. These can be dom children or elements distributed to
       * children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of distributed elements that match selector.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */
      queryDistributedElements(selector) {
        const thisEl = /** @type {Element} */this;
        const domApi = /** @type {Polymer.DomApi} */Polymer.dom(thisEl);
        return domApi.queryDistributedElements(selector);
      }

      /**
       * Returns a list of elements that are the effective children. The effective
       * children list is the same as the element's children except that
       * any `<content>` elements are replaced with the list of elements
       * distributed to the `<content>`.
       *
       * @return {!Array<!Node>} List of effective children.
       */
      getEffectiveChildren() {
        let list = this.getEffectiveChildNodes();
        return list.filter(function ( /** @type {!Node} */n) {
          return n.nodeType === Node.ELEMENT_NODE;
        });
      }

      /**
       * Returns a string of text content that is the concatenation of the
       * text content's of the element's effective childNodes (the elements
       * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
       *
       * @return {string} List of effective children.
       */
      getEffectiveTextContent() {
        let cn = this.getEffectiveChildNodes();
        let tc = [];
        for (let i = 0, c; c = cn[i]; i++) {
          if (c.nodeType !== Node.COMMENT_NODE) {
            tc.push(c.textContent);
          }
        }
        return tc.join('');
      }

      /**
       * Returns the first effective childNode within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {Node} First effective child node that matches selector.
       */
      queryEffectiveChildren(selector) {
        let e$ = this.queryDistributedElements(selector);
        return e$ && e$[0];
      }

      /**
       * Returns a list of effective childNodes within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of effective child nodes that match selector.
       */
      queryAllEffectiveChildren(selector) {
        return this.queryDistributedElements(selector);
      }

      /**
       * Returns a list of nodes distributed to this element's `<slot>`.
       *
       * If this element contains more than one `<slot>` in its local DOM,
       * an optional selector may be passed to choose the desired content.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<slot>`.  Defaults to `content`.
       * @return {!Array<!Node>} List of distributed nodes for the `<slot>`.
       */
      getContentChildNodes(slctr) {
        let content = this.root.querySelector(slctr || 'slot');
        return content ? /** @type {Polymer.DomApi} */Polymer.dom(content).getDistributedNodes() : [];
      }

      /**
       * Returns a list of element children distributed to this element's
       * `<slot>`.
       *
       * If this element contains more than one `<slot>` in its
       * local DOM, an optional selector may be passed to choose the desired
       * content.  This method differs from `getContentChildNodes` in that only
       * elements are returned.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<content>`.  Defaults to `content`.
       * @return {!Array<!HTMLElement>} List of distributed nodes for the
       *   `<slot>`.
       * @suppress {invalidCasts}
       */
      getContentChildren(slctr) {
        let children = /** @type {!Array<!HTMLElement>} */this.getContentChildNodes(slctr).filter(function (n) {
          return n.nodeType === Node.ELEMENT_NODE;
        });
        return children;
      }

      /**
       * Checks whether an element is in this element's light DOM tree.
       *
       * @param {?Node} node The element to be checked.
       * @return {boolean} true if node is in this element's light DOM tree.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */
      isLightDescendant(node) {
        const thisNode = /** @type {Node} */this;
        return thisNode !== node && thisNode.contains(node) && thisNode.getRootNode() === node.getRootNode();
      }

      /**
       * Checks whether an element is in this element's local DOM tree.
       *
       * @param {!Element} node The element to be checked.
       * @return {boolean} true if node is in this element's local DOM tree.
       */
      isLocalDescendant(node) {
        return this.root === node.getRootNode();
      }

      /**
       * No-op for backwards compatibility. This should now be handled by
       * ShadyCss library.
       * @param  {*} container Unused
       * @param  {*} shouldObserve Unused
       * @return {void}
       */
      scopeSubtree(container, shouldObserve) {} // eslint-disable-line no-unused-vars


      /**
       * Returns the computed style value for the given property.
       * @param {string} property The css property name.
       * @return {string} Returns the computed css property value for the given
       * `property`.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */
      getComputedStyleValue(property) {
        return styleInterface.getComputedStyleValue( /** @type {!Element} */this, property);
      }

      // debounce

      /**
       * Call `debounce` to collapse multiple requests for a named task into
       * one invocation which is made after the wait time has elapsed with
       * no new request.  If no wait time is given, the callback will be called
       * at microtask timing (guaranteed before paint).
       *
       *     debouncedClickAction(e) {
       *       // will not call `processClick` more than once per 100ms
       *       this.debounce('click', function() {
       *        this.processClick();
       *       } 100);
       *     }
       *
       * @param {string} jobName String to identify the debounce job.
       * @param {function():void} callback Function that is called (with `this`
       *   context) when the wait time elapses.
       * @param {number} wait Optional wait time in milliseconds (ms) after the
       *   last signal that must elapse before invoking `callback`
       * @return {!Object} Returns a debouncer object on which exists the
       * following methods: `isActive()` returns true if the debouncer is
       * active; `cancel()` cancels the debouncer if it is active;
       * `flush()` immediately invokes the debounced callback if the debouncer
       * is active.
       */
      debounce(jobName, callback, wait) {
        this._debouncers = this._debouncers || {};
        return this._debouncers[jobName] = Polymer.Debouncer.debounce(this._debouncers[jobName], wait > 0 ? Polymer.Async.timeOut.after(wait) : Polymer.Async.microTask, callback.bind(this));
      }

      /**
       * Returns whether a named debouncer is active.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {boolean} Whether the debouncer is active (has not yet fired).
       */
      isDebouncerActive(jobName) {
        this._debouncers = this._debouncers || {};
        let debouncer = this._debouncers[jobName];
        return !!(debouncer && debouncer.isActive());
      }

      /**
       * Immediately calls the debouncer `callback` and inactivates it.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       */
      flushDebouncer(jobName) {
        this._debouncers = this._debouncers || {};
        let debouncer = this._debouncers[jobName];
        if (debouncer) {
          debouncer.flush();
        }
      }

      /**
       * Cancels an active debouncer.  The `callback` will not be called.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       */
      cancelDebouncer(jobName) {
        this._debouncers = this._debouncers || {};
        let debouncer = this._debouncers[jobName];
        if (debouncer) {
          debouncer.cancel();
        }
      }

      /**
       * Runs a callback function asynchronously.
       *
       * By default (if no waitTime is specified), async callbacks are run at
       * microtask timing, which will occur before paint.
       *
       * @param {!Function} callback The callback function to run, bound to `this`.
       * @param {number=} waitTime Time to wait before calling the
       *   `callback`.  If unspecified or 0, the callback will be run at microtask
       *   timing (before paint).
       * @return {number} Handle that may be used to cancel the async job.
       */
      async(callback, waitTime) {
        return waitTime > 0 ? Polymer.Async.timeOut.run(callback.bind(this), waitTime) : ~Polymer.Async.microTask.run(callback.bind(this));
      }

      /**
       * Cancels an async operation started with `async`.
       *
       * @param {number} handle Handle returned from original `async` call to
       *   cancel.
       * @return {void}
       */
      cancelAsync(handle) {
        handle < 0 ? Polymer.Async.microTask.cancel(~handle) : Polymer.Async.timeOut.cancel(handle);
      }

      // other

      /**
       * Convenience method for creating an element and configuring it.
       *
       * @param {string} tag HTML element tag to create.
       * @param {Object=} props Object of properties to configure on the
       *    instance.
       * @return {!Element} Newly created and configured element.
       */
      create(tag, props) {
        let elt = document.createElement(tag);
        if (props) {
          if (elt.setProperties) {
            elt.setProperties(props);
          } else {
            for (let n in props) {
              elt[n] = props[n];
            }
          }
        }
        return elt;
      }

      /**
       * Convenience method for importing an HTML document imperatively.
       *
       * This method creates a new `<link rel="import">` element with
       * the provided URL and appends it to the document to start loading.
       * In the `onload` callback, the `import` property of the `link`
       * element will contain the imported document contents.
       *
       * @param {string} href URL to document to load.
       * @param {?function(!Event):void=} onload Callback to notify when an import successfully
       *   loaded.
       * @param {?function(!ErrorEvent):void=} onerror Callback to notify when an import
       *   unsuccessfully loaded.
       * @param {boolean=} optAsync True if the import should be loaded `async`.
       *   Defaults to `false`.
       * @return {!HTMLLinkElement} The link element for the URL to be loaded.
       */
      importHref(href, onload, onerror, optAsync) {
        // eslint-disable-line no-unused-vars
        let loadFn = onload ? onload.bind(this) : null;
        let errorFn = onerror ? onerror.bind(this) : null;
        return Polymer.importHref(href, loadFn, errorFn, optAsync);
      }

      /**
       * Polyfill for Element.prototype.matches, which is sometimes still
       * prefixed.
       *
       * @param {string} selector Selector to test.
       * @param {!Element=} node Element to test the selector against.
       * @return {boolean} Whether the element matches the selector.
       */
      elementMatches(selector, node) {
        return Polymer.dom.matchesSelector( /** @type {!Element} */node || this, selector);
      }

      /**
       * Toggles an HTML attribute on or off.
       *
       * @param {string} name HTML attribute name
       * @param {boolean=} bool Boolean to force the attribute on or off.
       *    When unspecified, the state of the attribute will be reversed.
       * @param {Element=} node Node to target.  Defaults to `this`.
       * @return {void}
       */
      toggleAttribute(name, bool, node) {
        node = /** @type {Element} */node || this;
        if (arguments.length == 1) {
          bool = !node.hasAttribute(name);
        }
        if (bool) {
          node.setAttribute(name, '');
        } else {
          node.removeAttribute(name);
        }
      }

      /**
       * Toggles a CSS class on or off.
       *
       * @param {string} name CSS class name
       * @param {boolean=} bool Boolean to force the class on or off.
       *    When unspecified, the state of the class will be reversed.
       * @param {Element=} node Node to target.  Defaults to `this`.
       * @return {void}
       */
      toggleClass(name, bool, node) {
        node = /** @type {Element} */node || this;
        if (arguments.length == 1) {
          bool = !node.classList.contains(name);
        }
        if (bool) {
          node.classList.add(name);
        } else {
          node.classList.remove(name);
        }
      }

      /**
       * Cross-platform helper for setting an element's CSS `transform` property.
       *
       * @param {string} transformText Transform setting.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`
       * @return {void}
       */
      transform(transformText, node) {
        node = /** @type {Element} */node || this;
        node.style.webkitTransform = transformText;
        node.style.transform = transformText;
      }

      /**
       * Cross-platform helper for setting an element's CSS `translate3d`
       * property.
       *
       * @param {number} x X offset.
       * @param {number} y Y offset.
       * @param {number} z Z offset.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`.
       * @return {void}
       */
      translate3d(x, y, z, node) {
        node = /** @type {Element} */node || this;
        this.transform('translate3d(' + x + ',' + y + ',' + z + ')', node);
      }

      /**
       * Removes an item from an array, if it exists.
       *
       * If the array is specified by path, a change notification is
       * generated, so that observers, data bindings and computed
       * properties watching that path can update.
       *
       * If the array is passed directly, **no change
       * notification is generated**.
       *
       * @param {string | !Array<number|string>} arrayOrPath Path to array from which to remove the item
       *   (or the array itself).
       * @param {*} item Item to remove.
       * @return {Array} Array containing item removed.
       */
      arrayDelete(arrayOrPath, item) {
        let index;
        if (Array.isArray(arrayOrPath)) {
          index = arrayOrPath.indexOf(item);
          if (index >= 0) {
            return arrayOrPath.splice(index, 1);
          }
        } else {
          let arr = Polymer.Path.get(this, arrayOrPath);
          index = arr.indexOf(item);
          if (index >= 0) {
            return this.splice(arrayOrPath, index, 1);
          }
        }
        return null;
      }

      // logging

      /**
       * Facades `console.log`/`warn`/`error` as override point.
       *
       * @param {string} level One of 'log', 'warn', 'error'
       * @param {Array} args Array of strings or objects to log
       * @return {void}
       */
      _logger(level, args) {
        // accept ['foo', 'bar'] and [['foo', 'bar']]
        if (Array.isArray(args) && args.length === 1 && Array.isArray(args[0])) {
          args = args[0];
        }
        switch (level) {
          case 'log':
          case 'warn':
          case 'error':
            console[level](...args);
        }
      }

      /**
       * Facades `console.log` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */
      _log(...args) {
        this._logger('log', args);
      }

      /**
       * Facades `console.warn` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */
      _warn(...args) {
        this._logger('warn', args);
      }

      /**
       * Facades `console.error` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */
      _error(...args) {
        this._logger('error', args);
      }

      /**
       * Formats a message using the element type an a method name.
       *
       * @param {string} methodName Method name to associate with message
       * @param {...*} args Array of strings or objects to log
       * @return {Array} Array with formatting information for `console`
       *   logging.
       */
      _logf(methodName, ...args) {
        return ['[%s::%s]', this.is, methodName, ...args];
      }

    }

    LegacyElement.prototype.is = '';

    return LegacyElement;
  });
})();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(16);

__webpack_require__(2);

__webpack_require__(17);

__webpack_require__(4);

__webpack_require__(37);

__webpack_require__(7);

__webpack_require__(40);

(function () {
  'use strict';

  /**
   * Element class mixin that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * Subclassers may provide the following static getters to return metadata
   * used to configure Polymer's features for the class:
   *
   * - `static get is()`: When the template is provided via a `dom-module`,
   *   users should return the `dom-module` id from a static `is` getter.  If
   *   no template is needed or the template is provided directly via the
   *   `template` getter, there is no need to define `is` for the element.
   *
   * - `static get template()`: Users may provide the template directly (as
   *   opposed to via `dom-module`) by implementing a static `template` getter.
   *   The getter may return an `HTMLTemplateElement` or a string, which will
   *   automatically be parsed into a template.
   *
   * - `static get properties()`: Should return an object describing
   *   property-related metadata used by Polymer features (key: property name
   *   value: object containing property metadata). Valid keys in per-property
   *   metadata include:
   *   - `type` (String|Number|Object|Array|...): Used by
   *     `attributeChangedCallback` to determine how string-based attributes
   *     are deserialized to JavaScript property values.
   *   - `notify` (boolean): Causes a change in the property to fire a
   *     non-bubbling event called `<property>-changed`. Elements that have
   *     enabled two-way binding to the property use this event to observe changes.
   *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *     To set a read-only property, use the private setter method
   *     `_setProperty(property, value)`.
   *   - `observer` (string): Observer method name that will be called when
   *     the property changes. The arguments of the method are
   *     `(value, previousValue)`.
   *   - `computed` (string): String describing method and dependent properties
   *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *     Computed properties are read-only by default and can only be changed
   *     via the return value of the computing method.
   *
   * - `static get observers()`: Array of strings describing multi-property
   *   observer methods and their dependent properties (e.g.
   *   `'observeABC(a, b, c)'`).
   *
   * The base class provides default implementations for the following standard
   * custom element lifecycle callbacks; users may override these, but should
   * call the super method to ensure
   * - `constructor`: Run when the element is created or upgraded
   * - `connectedCallback`: Run each time the element is connected to the
   *   document
   * - `disconnectedCallback`: Run each time the element is disconnected from
   *   the document
   * - `attributeChangedCallback`: Run each time an attribute in
   *   `observedAttributes` is set or removed (note: this element's default
   *   `observedAttributes` implementation will automatically return an array
   *   of dash-cased attributes based on `properties`)
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin Polymer.PropertyEffects
   * @appliesMixin Polymer.PropertiesMixin
   * @memberof Polymer
   * @property rootPath {string} Set to the value of `Polymer.rootPath`,
   *   which defaults to the main document path
   * @property importPath {string} Set to the value of the class's static
   *   `importPath` property, which defaults to the path of this element's
   *   `dom-module` (when `is` is used), but can be overridden for other
   *   import strategies.
   * @summary Element class mixin that provides the core API for Polymer's
   * meta-programming features.
   */

  Polymer.ElementMixin = Polymer.dedupingMixin(base => {

    /**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyEffects}
     * @implements {Polymer_PropertiesMixin}
     */
    const polymerElementBase = Polymer.PropertiesMixin(Polymer.PropertyEffects(base));

    /**
     * Returns a list of properties with default values.
     * This list is created as an optimization since it is a subset of
     * the list returned from `_properties`.
     * This list is used in `_initializeProperties` to set property defaults.
     *
     * @param {PolymerElementConstructor} constructor Element class
     * @return {PolymerElementProperties} Flattened properties for this class
     *   that have default values
     * @private
     */
    function propertyDefaults(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__propertyDefaults', constructor))) {
        constructor.__propertyDefaults = null;
        let props = constructor._properties;
        for (let p in props) {
          let info = props[p];
          if ('value' in info) {
            constructor.__propertyDefaults = constructor.__propertyDefaults || {};
            constructor.__propertyDefaults[p] = info;
          }
        }
      }
      return constructor.__propertyDefaults;
    }

    /**
     * Returns a memoized version of the the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */
    function ownObservers(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownObservers', constructor))) {
        constructor.__ownObservers = constructor.hasOwnProperty(JSCompiler_renameProperty('observers', constructor)) ?
        /** @type {PolymerElementConstructor} */constructor.observers : null;
      }
      return constructor.__ownObservers;
    }

    /**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should may contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * also automatically is set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     * Also consider adding warnings when an effect cannot be changed.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */
    function createPropertyFromConfig(proto, name, info, allProps) {
      // computed forces readOnly...
      if (info.computed) {
        info.readOnly = true;
      }
      // Note, since all computed properties are readOnly, this prevents
      // adding additional computed property effects (which leads to a confusing
      // setup where multiple triggers for setting a property)
      // While we do have `hasComputedEffect` this is set on the property's
      // dependencies rather than itself.
      if (info.computed && !proto._hasReadOnlyEffect(name)) {
        proto._createComputedProperty(name, info.computed, allProps);
      }
      if (info.readOnly && !proto._hasReadOnlyEffect(name)) {
        proto._createReadOnlyProperty(name, !info.computed);
      }
      if (info.reflectToAttribute && !proto._hasReflectEffect(name)) {
        proto._createReflectedProperty(name);
      }
      if (info.notify && !proto._hasNotifyEffect(name)) {
        proto._createNotifyingProperty(name);
      }
      // always add observer
      if (info.observer) {
        proto._createPropertyObserver(name, info.observer, allProps[info.observer]);
      }
      // always create the mapping from attribute back to property for deserialization.
      proto._addPropertyToAttributeMap(name);
    }

    /**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */
    function processElementStyles(klass, template, is, baseURI) {
      const templateStyles = template.content.querySelectorAll('style');
      const stylesWithImports = Polymer.StyleGather.stylesFromTemplate(template);
      // insert styles from <link rel="import" type="css"> at the top of the template
      const linkedStyles = Polymer.StyleGather.stylesFromModuleImports(is);
      const firstTemplateChild = template.content.firstElementChild;
      for (let idx = 0; idx < linkedStyles.length; idx++) {
        let s = linkedStyles[idx];
        s.textContent = klass._processStyleText(s.textContent, baseURI);
        template.content.insertBefore(s, firstTemplateChild);
      }
      // keep track of the last "concrete" style in the template we have encountered
      let templateStyleIndex = 0;
      // ensure all gathered styles are actually in this template.
      for (let i = 0; i < stylesWithImports.length; i++) {
        let s = stylesWithImports[i];
        let templateStyle = templateStyles[templateStyleIndex];
        // if the style is not in this template, it's been "included" and
        // we put a clone of it in the template before the style that included it
        if (templateStyle !== s) {
          s = s.cloneNode(true);
          templateStyle.parentNode.insertBefore(s, templateStyle);
        } else {
          templateStyleIndex++;
        }
        s.textContent = klass._processStyleText(s.textContent, baseURI);
      }
      if (window.ShadyCSS) {
        window.ShadyCSS.prepareTemplate(template, is);
      }
    }

    /**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     */
    class PolymerElement extends polymerElementBase {

      /**
       * Override of PropertiesMixin _finalizeClass to create observers and
       * find the template.
       * @return {void}
       * @protected
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */
      static _finalizeClass() {
        super._finalizeClass();
        if (this.hasOwnProperty(JSCompiler_renameProperty('is', this)) && this.is) {
          Polymer.telemetry.register(this.prototype);
        }
        const observers = ownObservers(this);
        if (observers) {
          this.createObservers(observers, this._properties);
        }
        // note: create "working" template that is finalized at instance time
        let template = /** @type {PolymerElementConstructor} */this.template;
        if (template) {
          if (typeof template === 'string') {
            let t = document.createElement('template');
            t.innerHTML = template;
            template = t;
          } else {
            template = template.cloneNode(true);
          }
          this.prototype._template = template;
        }
      }

      /**
       * Override of PropertiesChanged createProperties to create accessors
       * and property effects for all of the properties.
       * @return {void}
       * @protected
       * @override
       */
      static createProperties(props) {
        for (let p in props) {
          createPropertyFromConfig(this.prototype, p, props[p], props);
        }
      }

      /**
       * Creates observers for the given `observers` array.
       * Leverages `PropertyEffects` to create observers.
       * @param {Object} observers Array of observer descriptors for
       *   this class
       * @param {Object} dynamicFns Object containing keys for any properties
       *   that are functions and should trigger the effect when the function
       *   reference is changed
       * @return {void}
       * @protected
       */
      static createObservers(observers, dynamicFns) {
        const proto = this.prototype;
        for (let i = 0; i < observers.length; i++) {
          proto._createMethodObserver(observers[i], dynamicFns);
        }
      }

      /**
       * Returns the template that will be stamped into this element's shadow root.
       *
       * If a `static get is()` getter is defined, the default implementation
       * will return the first `<template>` in a `dom-module` whose `id`
       * matches this element's `is`.
       *
       * Users may override this getter to return an arbitrary template
       * (in which case the `is` getter is unnecessary). The template returned
       * may be either an `HTMLTemplateElement` or a string that will be
       * automatically parsed into a template.
       *
       * Note that when subclassing, if the super class overrode the default
       * implementation and the subclass would like to provide an alternate
       * template via a `dom-module`, it should override this getter and
       * return `Polymer.DomModule.import(this.is, 'template')`.
       *
       * If a subclass would like to modify the super class template, it should
       * clone it rather than modify it in place.  If the getter does expensive
       * work such as cloning/modifying a template, it should memoize the
       * template for maximum performance:
       *
       *   let memoizedTemplate;
       *   class MySubClass extends MySuperClass {
       *     static get template() {
       *       if (!memoizedTemplate) {
       *         memoizedTemplate = super.template.cloneNode(true);
       *         let subContent = document.createElement('div');
       *         subContent.textContent = 'This came from MySubClass';
       *         memoizedTemplate.content.appendChild(subContent);
       *       }
       *       return memoizedTemplate;
       *     }
       *   }
       *
       * @return {HTMLTemplateElement|string} Template to be stamped
       */
      static get template() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_template', this))) {
          this._template = Polymer.DomModule && Polymer.DomModule.import(
          /** @type {PolymerElementConstructor}*/this.is, 'template') ||
          // note: implemented so a subclass can retrieve the super
          // template; call the super impl this way so that `this` points
          // to the superclass.
          Object.getPrototypeOf( /** @type {PolymerElementConstructor}*/this.prototype).constructor.template;
        }
        return this._template;
      }

      /**
       * Path matching the url from which the element was imported.
       * This path is used to resolve url's in template style cssText.
       * The `importPath` property is also set on element instances and can be
       * used to create bindings relative to the import path.
       * Defaults to the path matching the url containing a `dom-module` element
       * matching this element's static `is` property.
       * Note, this path should contain a trailing `/`.
       *
       * @return {string} The import path for this element class
       */
      static get importPath() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_importPath', this))) {
          const module = Polymer.DomModule && Polymer.DomModule.import( /** @type {PolymerElementConstructor} */this.is);
          this._importPath = module ? module.assetpath : '' || Object.getPrototypeOf( /** @type {PolymerElementConstructor}*/this.prototype).constructor.importPath;
        }
        return this._importPath;
      }

      constructor() {
        super();
        /** @type {HTMLTemplateElement} */
        this._template;
        /** @type {string} */
        this._importPath;
        /** @type {string} */
        this.rootPath;
        /** @type {string} */
        this.importPath;
        /** @type {StampedTemplate | HTMLElement | ShadowRoot} */
        this.root;
        /** @type {!Object<string, !Element>} */
        this.$;
      }

      /**
       * Overrides the default `Polymer.PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts}
       */
      _initializeProperties() {
        Polymer.telemetry.instanceCount++;
        this.constructor.finalize();
        const importPath = this.constructor.importPath;
        // note: finalize template when we have access to `localName` to
        // avoid dependence on `is` for polyfilling styling.
        this.constructor._finalizeTemplate( /** @type {!HTMLElement} */this.localName);
        super._initializeProperties();
        // set path defaults
        this.rootPath = Polymer.rootPath;
        this.importPath = importPath;
        // apply property defaults...
        let p$ = propertyDefaults(this.constructor);
        if (!p$) {
          return;
        }
        for (let p in p$) {
          let info = p$[p];
          // Don't set default value if there is already an own property, which
          // happens when a `properties` property with default but no effects had
          // a property set (e.g. bound) by its host before upgrade
          if (!this.hasOwnProperty(p)) {
            let value = typeof info.value == 'function' ? info.value.call(this) : info.value;
            // Set via `_setProperty` if there is an accessor, to enable
            // initializing readOnly property defaults
            if (this._hasAccessor(p)) {
              this._setPendingProperty(p, value, true);
            } else {
              this[p] = value;
            }
          }
        }
      }

      /**
       * Gather style text for a style element in the template.
       *
       * @param {string} cssText Text containing styling to process
       * @param {string} baseURI Base URI to rebase CSS paths against
       * @return {string} The processed CSS text
       * @protected
       */
      static _processStyleText(cssText, baseURI) {
        return Polymer.ResolveUrl.resolveCss(cssText, baseURI);
      }

      /**
      * Configures an element `proto` to function with a given `template`.
      * The element name `is` and extends `ext` must be specified for ShadyCSS
      * style scoping.
      *
      * @param {string} is Tag name (or type extension name) for this element
      * @return {void}
      * @protected
      */
      static _finalizeTemplate(is) {
        /** @const {HTMLTemplateElement} */
        const template = this.prototype._template;
        if (template && !template.__polymerFinalized) {
          template.__polymerFinalized = true;
          const importPath = this.importPath;
          const baseURI = importPath ? Polymer.ResolveUrl.resolveUrl(importPath) : '';
          // e.g. support `include="module-name"`, and ShadyCSS
          processElementStyles(this, template, is, baseURI);
          this.prototype._bindTemplate(template);
        }
      }

      /**
       * Provides a default implementation of the standard Custom Elements
       * `connectedCallback`.
       *
       * The default implementation enables the property effects system and
       * flushes any pending properties, and updates shimmed CSS properties
       * when using the ShadyCSS scoping/custom properties polyfill.
       *
       * @suppress {missingProperties, invalidCasts} Super may or may not implement the callback
       * @return {void}
       */
      connectedCallback() {
        if (window.ShadyCSS && this._template) {
          window.ShadyCSS.styleElement( /** @type {!HTMLElement} */this);
        }
        super.connectedCallback();
      }

      /**
       * Stamps the element template.
       *
       * @return {void}
       * @override
       */
      ready() {
        if (this._template) {
          this.root = this._stampTemplate(this._template);
          this.$ = this.root.$;
        }
        super.ready();
      }

      /**
       * Implements `PropertyEffects`'s `_readyClients` call. Attaches
       * element dom by calling `_attachDom` with the dom stamped from the
       * element's template via `_stampTemplate`. Note that this allows
       * client dom to be attached to the element prior to any observers
       * running.
       *
       * @return {void}
       * @override
       */
      _readyClients() {
        if (this._template) {
          this.root = this._attachDom( /** @type {StampedTemplate} */this.root);
        }
        // The super._readyClients here sets the clients initialized flag.
        // We must wait to do this until after client dom is created/attached
        // so that this flag can be checked to prevent notifications fired
        // during this process from being handled before clients are ready.
        super._readyClients();
      }

      /**
       * Attaches an element's stamped dom to itself. By default,
       * this method creates a `shadowRoot` and adds the dom to it.
       * However, this method may be overridden to allow an element
       * to put its dom in another location.
       *
       * @throws {Error}
       * @suppress {missingReturn}
       * @param {StampedTemplate} dom to attach to the element.
       * @return {ShadowRoot} node to which the dom has been attached.
       */
      _attachDom(dom) {
        if (this.attachShadow) {
          if (dom) {
            if (!this.shadowRoot) {
              this.attachShadow({ mode: 'open' });
            }
            this.shadowRoot.appendChild(dom);
            return this.shadowRoot;
          }
          return null;
        } else {
          throw new Error('ShadowDOM not available. ' +
          // TODO(sorvell): move to compile-time conditional when supported
          'Polymer.Element can create dom as children instead of in ' + 'ShadowDOM by setting `this.root = this;\` before \`ready\`.');
        }
      }

      /**
       * When using the ShadyCSS scoping and custom property shim, causes all
       * shimmed styles in this element (and its subtree) to be updated
       * based on current custom property values.
       *
       * The optional parameter overrides inline custom property styles with an
       * object of properties where the keys are CSS properties, and the values
       * are strings.
       *
       * Example: `this.updateStyles({'--color': 'blue'})`
       *
       * These properties are retained unless a value of `null` is set.
       *
       * @param {Object=} properties Bag of custom property key/values to
       *   apply to this element.
       * @return {void}
       * @suppress {invalidCasts}
       */
      updateStyles(properties) {
        if (window.ShadyCSS) {
          window.ShadyCSS.styleSubtree( /** @type {!HTMLElement} */this, properties);
        }
      }

      /**
       * Rewrites a given URL relative to a base URL. The base URL defaults to
       * the original location of the document containing the `dom-module` for
       * this element. This method will return the same URL before and after
       * bundling.
       *
       * Note that this function performs no resolution for URLs that start
       * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
       * URL resolution, use `window.URL`.
       *
       * @param {string} url URL to resolve.
       * @param {string=} base Optional base URL to resolve against, defaults
       * to the element's `importPath`
       * @return {string} Rewritten URL relative to base
       */
      resolveUrl(url, base) {
        if (!base && this.importPath) {
          base = Polymer.ResolveUrl.resolveUrl(this.importPath);
        }
        return Polymer.ResolveUrl.resolveUrl(url, base);
      }

      /**
       * Overrides `PropertyAccessors` to add map of dynamic functions on
       * template info, for consumption by `PropertyEffects` template binding
       * code. This map determines which method templates should have accessors
       * created for them.
       *
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */
      static _parseTemplateContent(template, templateInfo, nodeInfo) {
        templateInfo.dynamicFns = templateInfo.dynamicFns || this._properties;
        return super._parseTemplateContent(template, templateInfo, nodeInfo);
      }

    }

    return PolymerElement;
  });

  /**
   * Provides basic tracking of element definitions (registrations) and
   * instance counts.
   *
   * @namespace
   * @summary Provides basic tracking of element definitions (registrations) and
   * instance counts.
   */
  Polymer.telemetry = {
    /**
     * Total number of Polymer element instances created.
     * @type {number}
     */
    instanceCount: 0,
    /**
     * Array of Polymer element classes that have been finalized.
     * @type {Array<Polymer.Element>}
     */
    registrations: [],
    /**
     * @param {!PolymerElementConstructor} prototype Element prototype to log
     * @this {this}
     * @private
     */
    _regLog: function (prototype) {
      console.log('[' + prototype.is + ']: registered');
    },
    /**
     * Registers a class prototype for telemetry purposes.
     * @param {HTMLElement} prototype Element prototype to register
     * @this {this}
     * @protected
     */
    register: function (prototype) {
      this.registrations.push(prototype);
      Polymer.log && this._regLog(prototype);
    },
    /**
     * Logs all elements registered with an `is` to the console.
     * @public
     * @this {this}
     */
    dumpRegistrations: function () {
      this.registrations.forEach(this._regLog);
    }
  };

  /**
   * When using the ShadyCSS scoping and custom property shim, causes all
   * shimmed `styles` (via `custom-style`) in the document (and its subtree)
   * to be updated based on current custom property values.
   *
   * The optional parameter overrides inline custom property styles with an
   * object of properties where the keys are CSS properties, and the values
   * are strings.
   *
   * Example: `Polymer.updateStyles({'--color': 'blue'})`
   *
   * These properties are retained unless a value of `null` is set.
   *
   * @param {Object=} props Bag of custom property key/values to
   *   apply to the document.
   * @return {void}
   */
  Polymer.updateStyles = function (props) {
    if (window.ShadyCSS) {
      window.ShadyCSS.styleDocument(props);
    }
  };
})();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(4);

/** @suppress {deprecated} */
(function () {
  'use strict';

  /**
   * Sets the global, legacy settings.
   *
   * @deprecated
   * @namespace
   * @memberof Polymer
   */

  Polymer.Settings = Polymer.Settings || {};

  Polymer.Settings.useShadow = !window.ShadyDOM;
  Polymer.Settings.useNativeCSSProperties = Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss);
  Polymer.Settings.useNativeCustomElements = !window.customElements.polyfillWrapFlushCallback;

  /**
   * Globally settable property that is automatically assigned to
   * `Polymer.ElementMixin` instances, useful for binding in templates to
   * make URL's relative to an application's root.  Defaults to the main
   * document URL, but can be overridden by users.  It may be useful to set
   * `Polymer.rootPath` to provide a stable application mount path when
   * using client side routing.
   *
   * @memberof Polymer
   */
  let rootPath = Polymer.rootPath || Polymer.ResolveUrl.pathFromUrl(document.baseURI || window.location.href);

  Polymer.rootPath = rootPath;

  /**
   * Sets the global rootPath property used by `Polymer.ElementMixin` and
   * available via `Polymer.rootPath`.
   *
   * @memberof Polymer
   * @param {string} path The new root path
   * @return {void}
   */
  Polymer.setRootPath = function (path) {
    Polymer.rootPath = path;
  };

  /**
   * A global callback used to sanitize any value before inserting it into the DOM. The callback signature is:
   *
   *     Polymer = {
   *       sanitizeDOMValue: function(value, name, type, node) { ... }
   *     }
   *
   * Where:
   *
   * `value` is the value to sanitize.
   * `name` is the name of an attribute or property (for example, href).
   * `type` indicates where the value is being inserted: one of property, attribute, or text.
   * `node` is the node where the value is being inserted.
   *
   * @type {(function(*,string,string,Node):*)|undefined}
   * @memberof Polymer
   */
  let sanitizeDOMValue = Polymer.sanitizeDOMValue;

  // This is needed for tooling
  Polymer.sanitizeDOMValue = sanitizeDOMValue;

  /**
   * Sets the global sanitizeDOMValue available via `Polymer.sanitizeDOMValue`.
   *
   * @memberof Polymer
   * @param {(function(*,string,string,Node):*)|undefined} newSanitizeDOMValue the global sanitizeDOMValue callback
   * @return {void}
   */
  Polymer.setSanitizeDOMValue = function (newSanitizeDOMValue) {
    Polymer.sanitizeDOMValue = newSanitizeDOMValue;
  };

  /**
   * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
   * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
   * scrolling performance.
   * Defaults to `false` for backwards compatibility.
   *
   * @memberof Polymer
   */
  let passiveTouchGestures = false;

  Polymer.passiveTouchGestures = passiveTouchGestures;

  /**
   * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
   *
   * @memberof Polymer
   * @param {boolean} usePassive enable or disable passive touch gestures globally
   * @return {void}
   */
  Polymer.setPassiveTouchGestures = function (usePassive) {
    Polymer.passiveTouchGestures = usePassive;
  };
})();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(4);

(function () {
  'use strict';

  const MODULE_STYLE_LINK_SELECTOR = 'link[rel=import][type~=css]';
  const INCLUDE_ATTR = 'include';
  const SHADY_UNSCOPED_ATTR = 'shady-unscoped';

  function importModule(moduleId) {
    const /** Polymer.DomModule */PolymerDomModule = customElements.get('dom-module');
    if (!PolymerDomModule) {
      return null;
    }
    return PolymerDomModule.import(moduleId);
  }

  function styleForImport(importDoc) {
    // NOTE: polyfill affordance.
    // under the HTMLImports polyfill, there will be no 'body',
    // but the import pseudo-doc can be used directly.
    let container = importDoc.body ? importDoc.body : importDoc;
    const importCss = Polymer.ResolveUrl.resolveCss(container.textContent, importDoc.baseURI);
    const style = document.createElement('style');
    style.textContent = importCss;
    return style;
  }

  /** @typedef {{assetpath: string}} */
  let templateWithAssetPath; // eslint-disable-line no-unused-vars

  /**
   * Module with utilities for collection CSS text from `<templates>`, external
   * stylesheets, and `dom-module`s.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module with utilities for collection CSS text from various sources.
   */
  const StyleGather = {

    /**
     * Returns a list of <style> elements in a space-separated list of `dom-module`s.
     *
     * @memberof Polymer.StyleGather
     * @param {string} moduleIds List of dom-module id's within which to
     * search for css.
     * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
     * @this {StyleGather}
     */
    stylesFromModules(moduleIds) {
      const modules = moduleIds.trim().split(/\s+/);
      const styles = [];
      for (let i = 0; i < modules.length; i++) {
        styles.push(...this.stylesFromModule(modules[i]));
      }
      return styles;
    },

    /**
     * Returns a list of <style> elements in a given `dom-module`.
     * Styles in a `dom-module` can come either from `<style>`s within the
     * first `<template>`, or else from one or more
     * `<link rel="import" type="css">` links outside the template.
     *
     * @memberof Polymer.StyleGather
     * @param {string} moduleId dom-module id to gather styles from
     * @return {!Array<!HTMLStyleElement>} Array of contained styles.
     * @this {StyleGather}
     */
    stylesFromModule(moduleId) {
      const m = importModule(moduleId);
      if (m && m._styles === undefined) {
        const styles = [];
        // module imports: <link rel="import" type="css">
        styles.push(...this._stylesFromModuleImports(m));
        // include css from the first template in the module
        const template = m.querySelector('template');
        if (template) {
          styles.push(...this.stylesFromTemplate(template,
          /** @type {templateWithAssetPath} */m.assetpath));
        }
        m._styles = styles;
      }
      if (!m) {
        console.warn('Could not find style data in module named', moduleId);
      }
      return m ? m._styles : [];
    },

    /**
     * Returns the `<style>` elements within a given template.
     *
     * @memberof Polymer.StyleGather
     * @param {!HTMLTemplateElement} template Template to gather styles from
     * @param {string} baseURI baseURI for style content
     * @return {!Array<!HTMLStyleElement>} Array of styles
     * @this {StyleGather}
     */
    stylesFromTemplate(template, baseURI) {
      if (!template._styles) {
        const styles = [];
        // if element is a template, get content from its .content
        const e$ = template.content.querySelectorAll('style');
        for (let i = 0; i < e$.length; i++) {
          let e = e$[i];
          // support style sharing by allowing styles to "include"
          // other dom-modules that contain styling
          let include = e.getAttribute(INCLUDE_ATTR);
          if (include) {
            styles.push(...this.stylesFromModules(include));
          }
          if (baseURI) {
            e.textContent = Polymer.ResolveUrl.resolveCss(e.textContent, baseURI);
          }
          styles.push(e);
        }
        template._styles = styles;
      }
      return template._styles;
    },

    /**
     * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
     *
     * @memberof Polymer.StyleGather
     * @param {string} moduleId Id of `dom-module` to gather CSS from
     * @return {!Array<!HTMLStyleElement>} Array of contained styles.
     * @this {StyleGather}
     */
    stylesFromModuleImports(moduleId) {
      let m = importModule(moduleId);
      return m ? this._stylesFromModuleImports(m) : [];
    },

    /**
     * @memberof Polymer.StyleGather
     * @this {StyleGather}
     * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
     * @return {!Array<!HTMLStyleElement>} Array of contained styles
     */
    _stylesFromModuleImports(module) {
      const styles = [];
      const p$ = module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);
      for (let i = 0; i < p$.length; i++) {
        let p = p$[i];
        if (p.import) {
          const importDoc = p.import;
          const unscoped = p.hasAttribute(SHADY_UNSCOPED_ATTR);
          if (unscoped && !importDoc._unscopedStyle) {
            const style = styleForImport(importDoc);
            style.setAttribute(SHADY_UNSCOPED_ATTR, '');
            importDoc._unscopedStyle = style;
          } else if (!importDoc._style) {
            importDoc._style = styleForImport(importDoc);
          }
          styles.push(unscoped ? importDoc._unscopedStyle : importDoc._style);
        }
      }
      return styles;
    },

    /**
     *
     * Returns CSS text of styles in a space-separated list of `dom-module`s.
     * Note: This method is deprecated, use `stylesFromModules` instead.
     *
     * @deprecated
     * @memberof Polymer.StyleGather
     * @param {string} moduleIds List of dom-module id's within which to
     * search for css.
     * @return {string} Concatenated CSS content from specified `dom-module`s
     * @this {StyleGather}
     */
    cssFromModules(moduleIds) {
      let modules = moduleIds.trim().split(/\s+/);
      let cssText = '';
      for (let i = 0; i < modules.length; i++) {
        cssText += this.cssFromModule(modules[i]);
      }
      return cssText;
    },

    /**
     * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
     * can come either from `<style>`s within the first `<template>`, or else
     * from one or more `<link rel="import" type="css">` links outside the
     * template.
     *
     * Any `<styles>` processed are removed from their original location.
     * Note: This method is deprecated, use `styleFromModule` instead.
     *
     * @deprecated
     * @memberof Polymer.StyleGather
     * @param {string} moduleId dom-module id to gather styles from
     * @return {string} Concatenated CSS content from specified `dom-module`
     * @this {StyleGather}
     */
    cssFromModule(moduleId) {
      let m = importModule(moduleId);
      if (m && m._cssText === undefined) {
        // module imports: <link rel="import" type="css">
        let cssText = this._cssFromModuleImports(m);
        // include css from the first template in the module
        let t = m.querySelector('template');
        if (t) {
          cssText += this.cssFromTemplate(t,
          /** @type {templateWithAssetPath} */m.assetpath);
        }
        m._cssText = cssText || null;
      }
      if (!m) {
        console.warn('Could not find style data in module named', moduleId);
      }
      return m && m._cssText || '';
    },

    /**
     * Returns CSS text of `<styles>` within a given template.
     *
     * Any `<styles>` processed are removed from their original location.
     * Note: This method is deprecated, use `styleFromTemplate` instead.
     *
     * @deprecated
     * @memberof Polymer.StyleGather
     * @param {!HTMLTemplateElement} template Template to gather styles from
     * @param {string} baseURI Base URI to resolve the URL against
     * @return {string} Concatenated CSS content from specified template
     * @this {StyleGather}
     */
    cssFromTemplate(template, baseURI) {
      let cssText = '';
      const e$ = this.stylesFromTemplate(template, baseURI);
      // if element is a template, get content from its .content
      for (let i = 0; i < e$.length; i++) {
        let e = e$[i];
        if (e.parentNode) {
          e.parentNode.removeChild(e);
        }
        cssText += e.textContent;
      }
      return cssText;
    },

    /**
     * Returns CSS text from stylesheets loaded via `<link rel="import" type="css">`
     * links within the specified `dom-module`.
     *
     * Note: This method is deprecated, use `stylesFromModuleImports` instead.
     *
     * @deprecated
     *
     * @memberof Polymer.StyleGather
     * @param {string} moduleId Id of `dom-module` to gather CSS from
     * @return {string} Concatenated CSS content from links in specified `dom-module`
     * @this {StyleGather}
     */
    cssFromModuleImports(moduleId) {
      let m = importModule(moduleId);
      return m ? this._cssFromModuleImports(m) : '';
    },

    /**
     * @deprecated
     * @memberof Polymer.StyleGather
     * @this {StyleGather}
     * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
     * @return {string} Concatenated CSS content from links in the dom-module
     */
    _cssFromModuleImports(module) {
      let cssText = '';
      let styles = this._stylesFromModuleImports(module);
      for (let i = 0; i < styles.length; i++) {
        cssText += styles[i].textContent;
      }
      return cssText;
    }
  };

  Polymer.StyleGather = StyleGather;
})();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

(function () {
  'use strict';

  const caseMap = {};
  const DASH_TO_CAMEL = /-[a-z]/g;
  const CAMEL_TO_DASH = /([A-Z])/g;

  /**
   * Module with utilities for converting between "dash-case" and "camelCase"
   * identifiers.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module that provides utilities for converting between "dash-case"
   *   and "camelCase".
   */
  const CaseMap = {

    /**
     * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
     * (e.g. `fooBarBaz`).
     *
     * @memberof Polymer.CaseMap
     * @param {string} dash Dash-case identifier
     * @return {string} Camel-case representation of the identifier
     */
    dashToCamelCase(dash) {
      return caseMap[dash] || (caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL, m => m[1].toUpperCase()));
    },

    /**
     * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
     * (e.g. `foo-bar-baz`).
     *
     * @memberof Polymer.CaseMap
     * @param {string} camel Camel-case identifier
     * @return {string} Dash-case representation of the identifier
     */
    camelToDashCase(camel) {
      return caseMap[camel] || (caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase());
    }

  };

  Polymer.CaseMap = CaseMap;
})();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(2);

__webpack_require__(18);

__webpack_require__(20);

(function () {

  'use strict';

  let caseMap = Polymer.CaseMap;

  // Save map of native properties; this forms a blacklist or properties
  // that won't have their values "saved" by `saveAccessorValue`, since
  // reading from an HTMLElement accessor from the context of a prototype throws
  const nativeProperties = {};
  let proto = HTMLElement.prototype;
  while (proto) {
    let props = Object.getOwnPropertyNames(proto);
    for (let i = 0; i < props.length; i++) {
      nativeProperties[props[i]] = true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  /**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */
  function saveAccessorValue(model, property) {
    // Don't read/store value for any native properties since they could throw
    if (!nativeProperties[property]) {
      let value = model[property];
      if (value !== undefined) {
        if (model.__data) {
          // Adding accessor to instance; update the property
          // It is the user's responsibility to call _flushProperties
          model._setPendingProperty(property, value);
        } else {
          // Adding accessor to proto; save proto's value for instance-time use
          if (!model.__dataProto) {
            model.__dataProto = {};
          } else if (!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto', model))) {
            model.__dataProto = Object.create(model.__dataProto);
          }
          model.__dataProto[property] = value;
        }
      }
    }
  }

  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   * 
   * -   Declare attributes to observe via the standard `static get observedAttributes()`. Use
   *     `dash-case` attribute names to represent `camelCase` property names. 
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to generate 
   *     property accessors for each observed attribute. This must be called before the first 
   *     instance is created, for example, by calling it before calling `customElements.define`.
   *     It can also be called lazily from the element's `constructor`, as long as it's guarded so
   *     that the call is only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to enable 
   *     the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin Polymer.PropertiesChanged
   * @memberof Polymer
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */
  Polymer.PropertyAccessors = Polymer.dedupingMixin(superClass => {

    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     */
    const base = Polymer.PropertiesChanged(superClass);

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyAccessors}
     * @extends {base}
     * @unrestricted
     */
    class PropertyAccessors extends base {

      /**
       * Generates property accessors for all attributes in the standard
       * static `observedAttributes` array.
       *
       * Attribute names are mapped to property names using the `dash-case` to
       * `camelCase` convention
       *
       * @return {void}
       */
      static createPropertiesForAttributes() {
        let a$ = this.observedAttributes;
        for (let i = 0; i < a$.length; i++) {
          this.prototype._createPropertyAccessor(caseMap.dashToCamelCase(a$[i]));
        }
      }

      /**
       * Returns an attribute name that corresponds to the given property.
       * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       */
      static attributeNameForProperty(property) {
        return caseMap.camelToDashCase(property);
      }

      /**
       * Overrides PropertiesChanged implementation to initialize values for
       * accessors created for values that already existed on the element
       * prototype.
       *
       * @return {void}
       * @protected
       */
      _initializeProperties() {
        if (this.__dataProto) {
          this._initializeProtoProperties(this.__dataProto);
          this.__dataProto = null;
        }
        super._initializeProperties();
      }

      /**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       */
      _initializeProtoProperties(props) {
        for (let p in props) {
          this._setProperty(p, props[p]);
        }
      }

      /**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is infact an element
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       * @return {void}
       */
      _ensureAttribute(attribute, value) {
        const el = /** @type {!HTMLElement} */this;
        if (!el.hasAttribute(attribute)) {
          this._valueToNodeAttribute(el, value, attribute);
        }
      }

      /**
       * Overrides PropertiesChanged implemention to serialize objects as JSON.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property value.
       */
      _serializeValue(value) {
        /* eslint-disable no-fallthrough */
        switch (typeof value) {
          case 'object':
            if (value instanceof Date) {
              return value.toString();
            } else if (value) {
              try {
                return JSON.stringify(value);
              } catch (x) {
                return '';
              }
            }

          default:
            return super._serializeValue(value);
        }
      }

      /**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       *
       * @param {?string} value Attribute value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       */
      _deserializeValue(value, type) {
        /**
         * @type {*}
         */
        let outValue;
        switch (type) {
          case Object:
            try {
              outValue = JSON.parse( /** @type {string} */value);
            } catch (x) {
              // allow non-JSON literals like Strings and Numbers
              outValue = value;
            }
            break;
          case Array:
            try {
              outValue = JSON.parse( /** @type {string} */value);
            } catch (x) {
              outValue = null;
              console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${value}`);
            }
            break;
          case Date:
            outValue = isNaN(value) ? String(value) : Number(value);
            outValue = new Date(outValue);
            break;
          default:
            outValue = super._deserializeValue(value, type);
            break;
        }
        return outValue;
      }
      /* eslint-enable no-fallthrough */

      /**
       * Overrides PropertiesChanged implementation to save existing prototype
       * property value so that it can be reset.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       *
       * When calling on a prototype, any overwritten values are saved in
       * `__dataProto`, and it is up to the subclasser to decide how/when
       * to set those properties back into the accessor.  When calling on an
       * instance, the overwritten value is set via `_setPendingProperty`,
       * and the user should call `_invalidateProperties` or `_flushProperties`
       * for the values to take effect.
       * @protected
       * @return {void}
       */
      _definePropertyAccessor(property, readOnly) {
        saveAccessorValue(this, property);
        super._definePropertyAccessor(property, readOnly);
      }

      /**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       */
      _hasAccessor(property) {
        return this.__dataHasAccessor && this.__dataHasAccessor[property];
      }

      /**
       * Returns true if the specified property has a pending change.
       *
       * @param {string} prop Property name
       * @return {boolean} True if property has a pending change
       * @protected
       */
      _isPropertyPending(prop) {
        return Boolean(this.__dataPending && prop in this.__dataPending);
      }

    }

    return PropertyAccessors;
  });
})();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(2);

__webpack_require__(5);

(function () {

  'use strict';

  /** @const {!AsyncInterface} */

  const microtask = Polymer.Async.microTask;

  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin, call `MyClass.createProperties(props)`
   * once at class definition time to create property accessors for properties
   * named in props, implement `_propertiesChanged` to react as desired to
   * property changes, and implement `static get observedAttributes()` and
   * include lowercase versions of any property names that should be set from
   * attributes. Last, call `this._enableProperties()` in the element's
   * `connectedCallback` to enable the accessors.
   *
   * @mixinFunction
   * @polymer
   * @memberof Polymer
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */
  Polymer.PropertiesChanged = Polymer.dedupingMixin(superClass => {

    /**
     * @polymer
     * @mixinClass
     * @extends {superClass}
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     */
    class PropertiesChanged extends superClass {

      /**
       * Creates property accessors for the given property names.
       * @param {!Object} props Object whose keys are names of accessors.
       * @return {void}
       * @protected
       */
      static createProperties(props) {
        const proto = this.prototype;
        for (let prop in props) {
          // don't stomp an existing accessor
          if (!(prop in proto)) {
            proto._createPropertyAccessor(prop);
          }
        }
      }

      /**
       * Returns an attribute name that corresponds to the given property.
       * The attribute name is the lowercased property name. Override to
       * customize this mapping.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       */
      static attributeNameForProperty(property) {
        return property.toLowerCase();
      }

      /**
       * Override point to provide a type to which to deserialize a value to
       * a given property.
       * @param {string} name Name of property
       *
       * @protected
       */
      static typeForProperty(name) {} //eslint-disable-line no-unused-vars

      /**
       * Creates a setter/getter pair for the named property with its own
       * local storage.  The getter returns the value in the local storage,
       * and the setter calls `_setProperty`, which updates the local storage
       * for the property and enqueues a `_propertiesChanged` callback.
       *
       * This method may be called on a prototype or an instance.  Calling
       * this method may overwrite a property value that already exists on
       * the prototype/instance by creating the accessor.
       *
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created; the
       *   protected `_setProperty` function must be used to set the property
       * @return {void}
       * @protected
       */
      _createPropertyAccessor(property, readOnly) {
        this._addPropertyToAttributeMap(property);
        if (!this.hasOwnProperty('__dataHasAccessor')) {
          this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
        }
        if (!this.__dataHasAccessor[property]) {
          this.__dataHasAccessor[property] = true;
          this._definePropertyAccessor(property, readOnly);
        }
      }

      /**
       * Adds the given `property` to a map matching attribute names
       * to property names, using `attributeNameForProperty`. This map is
       * used when deserializing attribute values to properties.
       *
       * @param {string} property Name of the property
       */
      _addPropertyToAttributeMap(property) {
        if (!this.hasOwnProperty('__dataAttributes')) {
          this.__dataAttributes = Object.assign({}, this.__dataAttributes);
        }
        if (!this.__dataAttributes[property]) {
          const attr = this.constructor.attributeNameForProperty(property);
          this.__dataAttributes[attr] = property;
        }
      }

      /**
       * Defines a property accessor for the given property.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       * @return {void}
       */
      _definePropertyAccessor(property, readOnly) {
        Object.defineProperty(this, property, {
          /* eslint-disable valid-jsdoc */
          /** @this {PropertiesChanged} */
          get() {
            return this.__data[property];
          },
          /** @this {PropertiesChanged} */
          set: readOnly ? function () {} : function (value) {
            this._setProperty(property, value);
          }
          /* eslint-enable */
        });
      }

      constructor() {
        super();
        this.__dataEnabled = false;
        this.__dataReady = false;
        this.__dataInvalid = false;
        this.__data = {};
        this.__dataPending = null;
        this.__dataOld = null;
        this.__dataInstanceProps = null;
        this.__serializing = false;
        this._initializeProperties();
      }

      /**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       */
      ready() {
        this.__dataReady = true;
        this._flushProperties();
      }

      /**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @return {void}
       * @protected
       */
      _initializeProperties() {
        // Capture instance properties; these will be set into accessors
        // during first flush. Don't set them here, since we want
        // these to overwrite defaults/constructor assignments
        for (let p in this.__dataHasAccessor) {
          if (this.hasOwnProperty(p)) {
            this.__dataInstanceProps = this.__dataInstanceProps || {};
            this.__dataInstanceProps[p] = this[p];
            delete this[p];
          }
        }
      }

      /**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       */
      _initializeInstanceProperties(props) {
        Object.assign(this, props);
      }

      /**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       * @protected
       */
      _setProperty(property, value) {
        if (this._setPendingProperty(property, value)) {
          this._invalidateProperties();
        }
      }

      /**
       * Returns the value for the given property.
       * @param {string} property Name of property
       * @return {*} Value for the given property
       * @protected
       */
      _getProperty(property) {
        return this.__data[property];
      }

      /* eslint-disable no-unused-vars */
      /**
       * Updates the local storage for a property, records the previous value,
       * and adds it to the set of "pending changes" that will be passed to the
       * `_propertiesChanged` callback.  This method does not enqueue the
       * `_propertiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} ext Not used here; affordance for closure
       * @return {boolean} Returns true if the property changed
       * @protected
       */
      _setPendingProperty(property, value, ext) {
        let old = this.__data[property];
        let changed = this._shouldPropertyChange(property, value, old);
        if (changed) {
          if (!this.__dataPending) {
            this.__dataPending = {};
            this.__dataOld = {};
          }
          // Ensure old is captured from the last turn
          if (this.__dataOld && !(property in this.__dataOld)) {
            this.__dataOld[property] = old;
          }
          this.__data[property] = value;
          this.__dataPending[property] = value;
        }
        return changed;
      }
      /* eslint-enable */

      /**
       * Marks the properties as invalid, and enqueues an async
       * `_propertiesChanged` callback.
       *
       * @return {void}
       * @protected
       */
      _invalidateProperties() {
        if (!this.__dataInvalid && this.__dataReady) {
          this.__dataInvalid = true;
          microtask.run(() => {
            if (this.__dataInvalid) {
              this.__dataInvalid = false;
              this._flushProperties();
            }
          });
        }
      }

      /**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       *
       * @return {void}
       * @protected
       */
      _enableProperties() {
        if (!this.__dataEnabled) {
          this.__dataEnabled = true;
          if (this.__dataInstanceProps) {
            this._initializeInstanceProperties(this.__dataInstanceProps);
            this.__dataInstanceProps = null;
          }
          this.ready();
        }
      }

      /**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       * @return {void}
       * @protected
       */
      _flushProperties() {
        if (this.__dataPending && this.__dataOld) {
          let changedProps = this.__dataPending;
          this.__dataPending = null;
          this._propertiesChanged(this.__data, changedProps, this.__dataOld);
        }
      }

      /**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {!Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {!Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       * @protected
       */
      _propertiesChanged(currentProps, changedProps, oldProps) {} // eslint-disable-line no-unused-vars


      /**
       * Method called to determine whether a property value should be
       * considered as a change and cause the `_propertiesChanged` callback
       * to be enqueued.
       *
       * The default implementation returns `true` if a strict equality
       * check fails. The method always returns false for `NaN`.
       *
       * Override this method to e.g. provide stricter checking for
       * Objects/Arrays when using immutable patterns.
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       *   and enqueue a `_proeprtiesChanged` callback
       * @protected
       */
      _shouldPropertyChange(property, value, old) {
        return (
          // Strict equality check
          old !== value && (
          // This ensures (old==NaN, value==NaN) always returns false
          old === old || value === value)
        );
      }

      /**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @return {void}
       * @suppress {missingProperties} Super may or may not implement the callback
       */
      attributeChangedCallback(name, old, value) {
        if (old !== value) {
          this._attributeToProperty(name, value);
        }
        if (super.attributeChangedCallback) {
          super.attributeChangedCallback(name, old, value);
        }
      }

      /**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to, defaults to the value
       * returned from `typeForProperty`
       * @return {void}
       */
      _attributeToProperty(attribute, value, type) {
        if (!this.__serializing) {
          const map = this.__dataAttributes;
          const property = map && map[attribute] || attribute;
          this[property] = this._deserializeValue(value, type || this.constructor.typeForProperty(property));
        }
      }

      /**
       * Serializes a property to its associated attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is an element.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect to.
       * @param {*=} value Property value to refect.
       * @return {void}
       */
      _propertyToAttribute(property, attribute, value) {
        this.__serializing = true;
        value = arguments.length < 3 ? this[property] : value;
        this._valueToNodeAttribute( /** @type {!HTMLElement} */this, value, attribute || this.constructor.attributeNameForProperty(property));
        this.__serializing = false;
      }

      /**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @return {void}
       */
      _valueToNodeAttribute(node, value, attribute) {
        const str = this._serializeValue(value);
        if (str === undefined) {
          node.removeAttribute(attribute);
        } else {
          node.setAttribute(attribute, str);
        }
      }

      /**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called when setting JS property values to
       * HTML attributes.  Users may override this method to provide
       * serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided
       * property  value.
       */
      _serializeValue(value) {
        switch (typeof value) {
          case 'boolean':
            return value ? '' : undefined;
          default:
            return value != null ? value.toString() : undefined;
        }
      }

      /**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called when reading HTML attribute values to
       * JS properties.  Users may override this method to provide
       * deserialization for custom `type`s. Types for `Boolean`, `String`,
       * and `Number` convert attributes to the expected types.
       *
       * @param {?string} value Value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       */
      _deserializeValue(value, type) {
        switch (type) {
          case Boolean:
            return value !== null;
          case Number:
            return Number(value);
          default:
            return value;
        }
      }

    }

    return PropertiesChanged;
  });
})();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(2);

__webpack_require__(41);

(function () {

  'use strict';

  /**
   * @const {Polymer.Gestures}
   */

  const gestures = Polymer.Gestures;

  /**
   * Element class mixin that provides API for adding Polymer's cross-platform
   * gesture events to nodes.
   *
   * The API is designed to be compatible with override points implemented
   * in `Polymer.TemplateStamp` such that declarative event listeners in
   * templates will support gesture events when this mixin is applied along with
   * `Polymer.TemplateStamp`.
   *
   * @mixinFunction
   * @polymer
   * @memberof Polymer
   * @summary Element class mixin that provides API for adding Polymer's cross-platform
   * gesture events to nodes
   */
  Polymer.GestureEventListeners = Polymer.dedupingMixin(superClass => {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_GestureEventListeners}
     */
    class GestureEventListeners extends superClass {

      /**
       * Add the event listener to the node if it is a gestures event.
       *
       * @param {!Node} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       */
      _addEventListenerToNode(node, eventName, handler) {
        if (!gestures.addListener(node, eventName, handler)) {
          super._addEventListenerToNode(node, eventName, handler);
        }
      }

      /**
       * Remove the event listener to the node if it is a gestures event.
       *
       * @param {!Node} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       */
      _removeEventListenerFromNode(node, eventName, handler) {
        if (!gestures.removeListener(node, eventName, handler)) {
          super._removeEventListenerFromNode(node, eventName, handler);
        }
      }

    }

    return GestureEventListeners;
  });
})();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

(function () {

  'use strict';

  function newSplice(index, removed, addedCount) {
    return {
      index: index,
      removed: removed,
      addedCount: addedCount
    };
  }

  const EDIT_LEAVE = 0;
  const EDIT_UPDATE = 1;
  const EDIT_ADD = 2;
  const EDIT_DELETE = 3;

  // Note: This function is *based* on the computation of the Levenshtein
  // "edit" distance. The one change is that "updates" are treated as two
  // edits - not one. With Array splices, an update is really a delete
  // followed by an add. By retaining this, we optimize for "keeping" the
  // maximum array items in the original array. For example:
  //
  //   'xxxx123' -> '123yyyy'
  //
  // With 1-edit updates, the shortest path would be just to update all seven
  // characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
  // leaves the substring '123' intact.
  function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    // "Deletion" columns
    let rowCount = oldEnd - oldStart + 1;
    let columnCount = currentEnd - currentStart + 1;
    let distances = new Array(rowCount);

    // "Addition" rows. Initialize null column.
    for (let i = 0; i < rowCount; i++) {
      distances[i] = new Array(columnCount);
      distances[i][0] = i;
    }

    // Initialize null row
    for (let j = 0; j < columnCount; j++) distances[0][j] = j;

    for (let i = 1; i < rowCount; i++) {
      for (let j = 1; j < columnCount; j++) {
        if (equals(current[currentStart + j - 1], old[oldStart + i - 1])) distances[i][j] = distances[i - 1][j - 1];else {
          let north = distances[i - 1][j] + 1;
          let west = distances[i][j - 1] + 1;
          distances[i][j] = north < west ? north : west;
        }
      }
    }

    return distances;
  }

  // This starts at the final weight, and walks "backward" by finding
  // the minimum previous weight recursively until the origin of the weight
  // matrix.
  function spliceOperationsFromEditDistances(distances) {
    let i = distances.length - 1;
    let j = distances[0].length - 1;
    let current = distances[i][j];
    let edits = [];
    while (i > 0 || j > 0) {
      if (i == 0) {
        edits.push(EDIT_ADD);
        j--;
        continue;
      }
      if (j == 0) {
        edits.push(EDIT_DELETE);
        i--;
        continue;
      }
      let northWest = distances[i - 1][j - 1];
      let west = distances[i - 1][j];
      let north = distances[i][j - 1];

      let min;
      if (west < north) min = west < northWest ? west : northWest;else min = north < northWest ? north : northWest;

      if (min == northWest) {
        if (northWest == current) {
          edits.push(EDIT_LEAVE);
        } else {
          edits.push(EDIT_UPDATE);
          current = northWest;
        }
        i--;
        j--;
      } else if (min == west) {
        edits.push(EDIT_DELETE);
        i--;
        current = west;
      } else {
        edits.push(EDIT_ADD);
        j--;
        current = north;
      }
    }

    edits.reverse();
    return edits;
  }

  /**
   * Splice Projection functions:
   *
   * A splice map is a representation of how a previous array of items
   * was transformed into a new array of items. Conceptually it is a list of
   * tuples of
   *
   *   <index, removed, addedCount>
   *
   * which are kept in ascending index order of. The tuple represents that at
   * the |index|, |removed| sequence of items were removed, and counting forward
   * from |index|, |addedCount| items were added.
   */

  /**
   * Lacking individual splice mutation information, the minimal set of
   * splices can be synthesized given the previous state and final state of an
   * array. The basic approach is to calculate the edit distance matrix and
   * choose the shortest path through it.
   *
   * Complexity: O(l * p)
   *   l: The length of the current array
   *   p: The length of the old array
   *
   * @param {!Array} current The current "changed" array for which to
   * calculate splices.
   * @param {number} currentStart Starting index in the `current` array for
   * which splices are calculated.
   * @param {number} currentEnd Ending index in the `current` array for
   * which splices are calculated.
   * @param {!Array} old The original "unchanged" array to compare `current`
   * against to determine splices.
   * @param {number} oldStart Starting index in the `old` array for
   * which splices are calculated.
   * @param {number} oldEnd Ending index in the `old` array for
   * which splices are calculated.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */
  function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    let prefixCount = 0;
    let suffixCount = 0;
    let splice;

    let minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
    if (currentStart == 0 && oldStart == 0) prefixCount = sharedPrefix(current, old, minLength);

    if (currentEnd == current.length && oldEnd == old.length) suffixCount = sharedSuffix(current, old, minLength - prefixCount);

    currentStart += prefixCount;
    oldStart += prefixCount;
    currentEnd -= suffixCount;
    oldEnd -= suffixCount;

    if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0) return [];

    if (currentStart == currentEnd) {
      splice = newSplice(currentStart, [], 0);
      while (oldStart < oldEnd) splice.removed.push(old[oldStart++]);

      return [splice];
    } else if (oldStart == oldEnd) return [newSplice(currentStart, [], currentEnd - currentStart)];

    let ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));

    splice = undefined;
    let splices = [];
    let index = currentStart;
    let oldIndex = oldStart;
    for (let i = 0; i < ops.length; i++) {
      switch (ops[i]) {
        case EDIT_LEAVE:
          if (splice) {
            splices.push(splice);
            splice = undefined;
          }

          index++;
          oldIndex++;
          break;
        case EDIT_UPDATE:
          if (!splice) splice = newSplice(index, [], 0);

          splice.addedCount++;
          index++;

          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;
        case EDIT_ADD:
          if (!splice) splice = newSplice(index, [], 0);

          splice.addedCount++;
          index++;
          break;
        case EDIT_DELETE:
          if (!splice) splice = newSplice(index, [], 0);

          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;
      }
    }

    if (splice) {
      splices.push(splice);
    }
    return splices;
  }

  function sharedPrefix(current, old, searchLength) {
    for (let i = 0; i < searchLength; i++) if (!equals(current[i], old[i])) return i;
    return searchLength;
  }

  function sharedSuffix(current, old, searchLength) {
    let index1 = current.length;
    let index2 = old.length;
    let count = 0;
    while (count < searchLength && equals(current[--index1], old[--index2])) count++;

    return count;
  }

  function calculateSplices(current, previous) {
    return calcSplices(current, 0, current.length, previous, 0, previous.length);
  }

  function equals(currentValue, previousValue) {
    return currentValue === previousValue;
  }

  /**
   * @namespace
   * @memberof Polymer
   * @summary Module that provides utilities for diffing arrays.
   */
  Polymer.ArraySplice = {
    /**
     * Returns an array of splice records indicating the minimum edits required
     * to transform the `previous` array into the `current` array.
     *
     * Splice records are ordered by index and contain the following fields:
     * - `index`: index where edit started
     * - `removed`: array of removed items from this index
     * - `addedCount`: number of items added at this index
     *
     * This function is based on the Levenshtein "minimum edit distance"
     * algorithm. Note that updates are treated as removal followed by addition.
     *
     * The worst-case time complexity of this algorithm is `O(l * p)`
     *   l: The length of the current array
     *   p: The length of the previous array
     *
     * However, the worst-case complexity is reduced by an `O(n)` optimization
     * to detect any shared prefix & suffix between the two arrays and only
     * perform the more expensive minimum edit distance calculation over the
     * non-shared portions of the arrays.
     *
     * @function
     * @memberof Polymer.ArraySplice
     * @param {!Array} current The "changed" array for which splices will be
     * calculated.
     * @param {!Array} previous The "unchanged" original array to compare
     * `current` against to determine the splices.
     * @return {!Array} Returns an array of splice record objects. Each of these
     * contains: `index` the location where the splice occurred; `removed`
     * the array of removed items from this location; `addedCount` the number
     * of items added at this location.
     */
    calculateSplices
  };
})();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

(function () {
  'use strict';

  /**
   * Class representing a static string value which can be used to filter
   * strings by asseting that they have been created via this class. The
   * `value` property returns the string passed to the constructor.
   */

  class LiteralString {
    constructor(string) {
      /** @type {string} */
      this.value = string.toString();
    }
    /**
     * @return {string} LiteralString string value
     */
    toString() {
      return this.value;
    }
  }

  /**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */
  function literalValue(value) {
    if (value instanceof LiteralString) {
      return (/** @type {!LiteralString} */value.value
      );
    } else {
      throw new Error(`non-literal value passed to Polymer.htmlLiteral: ${value}`);
    }
  }

  /**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */
  function htmlValue(value) {
    if (value instanceof HTMLTemplateElement) {
      return (/** @type {!HTMLTemplateElement } */value.innerHTML
      );
    } else if (value instanceof LiteralString) {
      return literalValue(value);
    } else {
      throw new Error(`non-template value passed to Polymer.html: ${value}`);
    }
  }

  /**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `Polymer.htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `Polymer.htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *   static get template() {
   *     return Polymer.html`
   *       <style>:host{ content:"..." }</style>
   *       <div class="shadowed">${this.partialTemplate}</div>
   *       ${super.template}
   *     `;
   *   }
   *   static get partialTemplate() { return Polymer.html`<span>Partial!</span>`; }
   *
   * @memberof Polymer
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */
  Polymer.html = function html(strings, ...values) {
    const template = /** @type {!HTMLTemplateElement} */document.createElement('template');
    template.innerHTML = values.reduce((acc, v, idx) => acc + htmlValue(v) + strings[idx + 1], strings[0]);
    return template;
  };

  /**
   * An html literal tag that can be used with `Polymer.html` to compose.
   * a literal string.
   *
   * Example:
   *
   *   static get template() {
   *     return Polymer.html`
   *       <style>
   *         :host { display: block; }
   *         ${styleTemplate}
   *       </style>
   *       <div class="shadowed">${staticValue}</div>
   *       ${super.template}
   *     `;
   *   }
   *   static get styleTemplate() { return Polymer.htmlLiteral`.shadowed { background: gray; }`; }
   *
   * @memberof Polymer
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!LiteralString} Constructed literal string
   */
  Polymer.htmlLiteral = function (strings, ...values) {
    return new LiteralString(values.reduce((acc, v, idx) => acc + literalValue(v) + strings[idx + 1], strings[0]));
  };
})();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(60);

const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.toBody("<custom-style> <style is=custom-style>html{--paper-font-common-base:{font-family:Roboto,Noto,sans-serif;-webkit-font-smoothing:antialiased};--paper-font-common-code:{font-family:'Roboto Mono',Consolas,Menlo,monospace;-webkit-font-smoothing:antialiased};--paper-font-common-expensive-kerning:{text-rendering:optimizeLegibility};--paper-font-common-nowrap:{white-space:nowrap;overflow:hidden;text-overflow:ellipsis};--paper-font-display4:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:112px;font-weight:300;letter-spacing:-.044em;line-height:120px};--paper-font-display3:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:56px;font-weight:400;letter-spacing:-.026em;line-height:60px};--paper-font-display2:{@apply --paper-font-common-base;font-size:45px;font-weight:400;letter-spacing:-.018em;line-height:48px};--paper-font-display1:{@apply --paper-font-common-base;font-size:34px;font-weight:400;letter-spacing:-.01em;line-height:40px};--paper-font-headline:{@apply --paper-font-common-base;font-size:24px;font-weight:400;letter-spacing:-.012em;line-height:32px};--paper-font-title:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:20px;font-weight:500;line-height:28px};--paper-font-subhead:{@apply --paper-font-common-base;font-size:16px;font-weight:400;line-height:24px};--paper-font-body2:{@apply --paper-font-common-base;font-size:14px;font-weight:500;line-height:24px};--paper-font-body1:{@apply --paper-font-common-base;font-size:14px;font-weight:400;line-height:20px};--paper-font-caption:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:12px;font-weight:400;letter-spacing:.011em;line-height:20px};--paper-font-menu:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:13px;font-weight:500;line-height:24px};--paper-font-button:{@apply --paper-font-common-base;@apply --paper-font-common-nowrap;font-size:14px;font-weight:500;letter-spacing:.018em;line-height:24px;text-transform:uppercase};--paper-font-code2:{@apply --paper-font-common-code;font-size:14px;font-weight:700;line-height:20px};--paper-font-code1:{@apply --paper-font-common-code;font-size:14px;font-weight:500;line-height:20px};}</style> </custom-style>");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(26);

const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=paper-ripple> <template> <style>:host{display:block;position:absolute;border-radius:inherit;overflow:hidden;top:0;left:0;right:0;bottom:0;pointer-events:none}:host([animating]){-webkit-transform:translate(0,0);transform:translate3d(0,0,0)}#background,#waves,.wave,.wave-container{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}#background,.wave{opacity:0}#waves,.wave{overflow:hidden}.wave,.wave-container{border-radius:50%}:host(.circle) #background,:host(.circle) #waves{border-radius:50%}:host(.circle) .wave-container{overflow:hidden}</style> <div id=background></div> <div id=waves></div> </template> </dom-module>");

(function () {
  'use strict';

  var Utility = {
    distance: function (x1, y1, x2, y2) {
      var xDelta = x1 - x2;
      var yDelta = y1 - y2;

      return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
    },

    now: window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now
  };

  /**
   * @param {HTMLElement} element
   * @constructor
   */
  function ElementMetrics(element) {
    this.element = element;
    this.width = this.boundingRect.width;
    this.height = this.boundingRect.height;

    this.size = Math.max(this.width, this.height);
  }

  ElementMetrics.prototype = {
    get boundingRect() {
      return this.element.getBoundingClientRect();
    },

    furthestCornerDistanceFrom: function (x, y) {
      var topLeft = Utility.distance(x, y, 0, 0);
      var topRight = Utility.distance(x, y, this.width, 0);
      var bottomLeft = Utility.distance(x, y, 0, this.height);
      var bottomRight = Utility.distance(x, y, this.width, this.height);

      return Math.max(topLeft, topRight, bottomLeft, bottomRight);
    }
  };

  /**
   * @param {HTMLElement} element
   * @constructor
   */
  function Ripple(element) {
    this.element = element;
    this.color = window.getComputedStyle(element).color;

    this.wave = document.createElement('div');
    this.waveContainer = document.createElement('div');
    this.wave.style.backgroundColor = this.color;
    this.wave.classList.add('wave');
    this.waveContainer.classList.add('wave-container');
    Polymer.dom(this.waveContainer).appendChild(this.wave);

    this.resetInteractionState();
  }

  Ripple.MAX_RADIUS = 300;

  Ripple.prototype = {
    get recenters() {
      return this.element.recenters;
    },

    get center() {
      return this.element.center;
    },

    get mouseDownElapsed() {
      var elapsed;

      if (!this.mouseDownStart) {
        return 0;
      }

      elapsed = Utility.now() - this.mouseDownStart;

      if (this.mouseUpStart) {
        elapsed -= this.mouseUpElapsed;
      }

      return elapsed;
    },

    get mouseUpElapsed() {
      return this.mouseUpStart ? Utility.now() - this.mouseUpStart : 0;
    },

    get mouseDownElapsedSeconds() {
      return this.mouseDownElapsed / 1000;
    },

    get mouseUpElapsedSeconds() {
      return this.mouseUpElapsed / 1000;
    },

    get mouseInteractionSeconds() {
      return this.mouseDownElapsedSeconds + this.mouseUpElapsedSeconds;
    },

    get initialOpacity() {
      return this.element.initialOpacity;
    },

    get opacityDecayVelocity() {
      return this.element.opacityDecayVelocity;
    },

    get radius() {
      var width2 = this.containerMetrics.width * this.containerMetrics.width;
      var height2 = this.containerMetrics.height * this.containerMetrics.height;
      var waveRadius = Math.min(Math.sqrt(width2 + height2), Ripple.MAX_RADIUS) * 1.1 + 5;

      var duration = 1.1 - 0.2 * (waveRadius / Ripple.MAX_RADIUS);
      var timeNow = this.mouseInteractionSeconds / duration;
      var size = waveRadius * (1 - Math.pow(80, -timeNow));

      return Math.abs(size);
    },

    get opacity() {
      if (!this.mouseUpStart) {
        return this.initialOpacity;
      }

      return Math.max(0, this.initialOpacity - this.mouseUpElapsedSeconds * this.opacityDecayVelocity);
    },

    get outerOpacity() {
      // Linear increase in background opacity, capped at the opacity
      // of the wavefront (waveOpacity).
      var outerOpacity = this.mouseUpElapsedSeconds * 0.3;
      var waveOpacity = this.opacity;

      return Math.max(0, Math.min(outerOpacity, waveOpacity));
    },

    get isOpacityFullyDecayed() {
      return this.opacity < 0.01 && this.radius >= Math.min(this.maxRadius, Ripple.MAX_RADIUS);
    },

    get isRestingAtMaxRadius() {
      return this.opacity >= this.initialOpacity && this.radius >= Math.min(this.maxRadius, Ripple.MAX_RADIUS);
    },

    get isAnimationComplete() {
      return this.mouseUpStart ? this.isOpacityFullyDecayed : this.isRestingAtMaxRadius;
    },

    get translationFraction() {
      return Math.min(1, this.radius / this.containerMetrics.size * 2 / Math.sqrt(2));
    },

    get xNow() {
      if (this.xEnd) {
        return this.xStart + this.translationFraction * (this.xEnd - this.xStart);
      }

      return this.xStart;
    },

    get yNow() {
      if (this.yEnd) {
        return this.yStart + this.translationFraction * (this.yEnd - this.yStart);
      }

      return this.yStart;
    },

    get isMouseDown() {
      return this.mouseDownStart && !this.mouseUpStart;
    },

    resetInteractionState: function () {
      this.maxRadius = 0;
      this.mouseDownStart = 0;
      this.mouseUpStart = 0;

      this.xStart = 0;
      this.yStart = 0;
      this.xEnd = 0;
      this.yEnd = 0;
      this.slideDistance = 0;

      this.containerMetrics = new ElementMetrics(this.element);
    },

    draw: function () {
      var scale;
      var translateString;
      var dx;
      var dy;

      this.wave.style.opacity = this.opacity;

      scale = this.radius / (this.containerMetrics.size / 2);
      dx = this.xNow - this.containerMetrics.width / 2;
      dy = this.yNow - this.containerMetrics.height / 2;

      // 2d transform for safari because of border-radius and overflow:hidden clipping bug.
      // https://bugs.webkit.org/show_bug.cgi?id=98538
      this.waveContainer.style.webkitTransform = 'translate(' + dx + 'px, ' + dy + 'px)';
      this.waveContainer.style.transform = 'translate3d(' + dx + 'px, ' + dy + 'px, 0)';
      this.wave.style.webkitTransform = 'scale(' + scale + ',' + scale + ')';
      this.wave.style.transform = 'scale3d(' + scale + ',' + scale + ',1)';
    },

    /** @param {Event=} event */
    downAction: function (event) {
      var xCenter = this.containerMetrics.width / 2;
      var yCenter = this.containerMetrics.height / 2;

      this.resetInteractionState();
      this.mouseDownStart = Utility.now();

      if (this.center) {
        this.xStart = xCenter;
        this.yStart = yCenter;
        this.slideDistance = Utility.distance(this.xStart, this.yStart, this.xEnd, this.yEnd);
      } else {
        this.xStart = event ? event.detail.x - this.containerMetrics.boundingRect.left : this.containerMetrics.width / 2;
        this.yStart = event ? event.detail.y - this.containerMetrics.boundingRect.top : this.containerMetrics.height / 2;
      }

      if (this.recenters) {
        this.xEnd = xCenter;
        this.yEnd = yCenter;
        this.slideDistance = Utility.distance(this.xStart, this.yStart, this.xEnd, this.yEnd);
      }

      this.maxRadius = this.containerMetrics.furthestCornerDistanceFrom(this.xStart, this.yStart);

      this.waveContainer.style.top = (this.containerMetrics.height - this.containerMetrics.size) / 2 + 'px';
      this.waveContainer.style.left = (this.containerMetrics.width - this.containerMetrics.size) / 2 + 'px';

      this.waveContainer.style.width = this.containerMetrics.size + 'px';
      this.waveContainer.style.height = this.containerMetrics.size + 'px';
    },

    /** @param {Event=} event */
    upAction: function (event) {
      if (!this.isMouseDown) {
        return;
      }

      this.mouseUpStart = Utility.now();
    },

    remove: function () {
      Polymer.dom(this.waveContainer.parentNode).removeChild(this.waveContainer);
    }
  };

  Polymer({
    is: 'paper-ripple',

    behaviors: [Polymer.IronA11yKeysBehavior],

    properties: {
      /**
       * The initial opacity set on the wave.
       *
       * @attribute initialOpacity
       * @type number
       * @default 0.25
       */
      initialOpacity: {
        type: Number,
        value: 0.25
      },

      /**
       * How fast (opacity per second) the wave fades out.
       *
       * @attribute opacityDecayVelocity
       * @type number
       * @default 0.8
       */
      opacityDecayVelocity: {
        type: Number,
        value: 0.8
      },

      /**
       * If true, ripples will exhibit a gravitational pull towards
       * the center of their container as they fade away.
       *
       * @attribute recenters
       * @type boolean
       * @default false
       */
      recenters: {
        type: Boolean,
        value: false
      },

      /**
       * If true, ripples will center inside its container
       *
       * @attribute recenters
       * @type boolean
       * @default false
       */
      center: {
        type: Boolean,
        value: false
      },

      /**
       * A list of the visual ripples.
       *
       * @attribute ripples
       * @type Array
       * @default []
       */
      ripples: {
        type: Array,
        value: function () {
          return [];
        }
      },

      /**
       * True when there are visible ripples animating within the
       * element.
       */
      animating: {
        type: Boolean,
        readOnly: true,
        reflectToAttribute: true,
        value: false
      },

      /**
       * If true, the ripple will remain in the "down" state until `holdDown`
       * is set to false again.
       */
      holdDown: {
        type: Boolean,
        value: false,
        observer: '_holdDownChanged'
      },

      /**
       * If true, the ripple will not generate a ripple effect
       * via pointer interaction.
       * Calling ripple's imperative api like `simulatedRipple` will
       * still generate the ripple effect.
       */
      noink: {
        type: Boolean,
        value: false
      },

      _animating: {
        type: Boolean
      },

      _boundAnimate: {
        type: Function,
        value: function () {
          return this.animate.bind(this);
        }
      }
    },

    get target() {
      return this.keyEventTarget;
    },

    /**
     * @type {!Object}
     */
    keyBindings: {
      'enter:keydown': '_onEnterKeydown',
      'space:keydown': '_onSpaceKeydown',
      'space:keyup': '_onSpaceKeyup'
    },

    attached: function () {
      // Set up a11yKeysBehavior to listen to key events on the target,
      // so that space and enter activate the ripple even if the target doesn't
      // handle key events. The key handlers deal with `noink` themselves.
      if (this.parentNode.nodeType == 11) {
        // DOCUMENT_FRAGMENT_NODE
        this.keyEventTarget = Polymer.dom(this).getOwnerRoot().host;
      } else {
        this.keyEventTarget = this.parentNode;
      }
      var keyEventTarget = /** @type {!EventTarget} */this.keyEventTarget;
      this.listen(keyEventTarget, 'up', 'uiUpAction');
      this.listen(keyEventTarget, 'down', 'uiDownAction');
    },

    detached: function () {
      this.unlisten(this.keyEventTarget, 'up', 'uiUpAction');
      this.unlisten(this.keyEventTarget, 'down', 'uiDownAction');
      this.keyEventTarget = null;
    },

    get shouldKeepAnimating() {
      for (var index = 0; index < this.ripples.length; ++index) {
        if (!this.ripples[index].isAnimationComplete) {
          return true;
        }
      }

      return false;
    },

    simulatedRipple: function () {
      this.downAction(null);

      // Please see polymer/polymer#1305
      this.async(function () {
        this.upAction();
      }, 1);
    },

    /**
     * Provokes a ripple down effect via a UI event,
     * respecting the `noink` property.
     * @param {Event=} event
     */
    uiDownAction: function (event) {
      if (!this.noink) {
        this.downAction(event);
      }
    },

    /**
     * Provokes a ripple down effect via a UI event,
     * *not* respecting the `noink` property.
     * @param {Event=} event
     */
    downAction: function (event) {
      if (this.holdDown && this.ripples.length > 0) {
        return;
      }

      var ripple = this.addRipple();

      ripple.downAction(event);

      if (!this._animating) {
        this._animating = true;
        this.animate();
      }
    },

    /**
     * Provokes a ripple up effect via a UI event,
     * respecting the `noink` property.
     * @param {Event=} event
     */
    uiUpAction: function (event) {
      if (!this.noink) {
        this.upAction(event);
      }
    },

    /**
     * Provokes a ripple up effect via a UI event,
     * *not* respecting the `noink` property.
     * @param {Event=} event
     */
    upAction: function (event) {
      if (this.holdDown) {
        return;
      }

      this.ripples.forEach(function (ripple) {
        ripple.upAction(event);
      });

      this._animating = true;
      this.animate();
    },

    onAnimationComplete: function () {
      this._animating = false;
      this.$.background.style.backgroundColor = null;
      this.fire('transitionend');
    },

    addRipple: function () {
      var ripple = new Ripple(this);

      Polymer.dom(this.$.waves).appendChild(ripple.waveContainer);
      this.$.background.style.backgroundColor = ripple.color;
      this.ripples.push(ripple);

      this._setAnimating(true);

      return ripple;
    },

    removeRipple: function (ripple) {
      var rippleIndex = this.ripples.indexOf(ripple);

      if (rippleIndex < 0) {
        return;
      }

      this.ripples.splice(rippleIndex, 1);

      ripple.remove();

      if (!this.ripples.length) {
        this._setAnimating(false);
      }
    },

    /**
     * This conflicts with Element#antimate().
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
     * @suppress {checkTypes}
     */
    animate: function () {
      if (!this._animating) {
        return;
      }
      var index;
      var ripple;

      for (index = 0; index < this.ripples.length; ++index) {
        ripple = this.ripples[index];

        ripple.draw();

        this.$.background.style.opacity = ripple.outerOpacity;

        if (ripple.isOpacityFullyDecayed && !ripple.isRestingAtMaxRadius) {
          this.removeRipple(ripple);
        }
      }

      if (!this.shouldKeepAnimating && this.ripples.length === 0) {
        this.onAnimationComplete();
      } else {
        window.requestAnimationFrame(this._boundAnimate);
      }
    },

    _onEnterKeydown: function () {
      this.uiDownAction();
      this.async(this.uiUpAction, 1);
    },

    _onSpaceKeydown: function () {
      this.uiDownAction();
    },

    _onSpaceKeyup: function () {
      this.uiUpAction();
    },

    // note: holdDown does not respect noink since it can be a focus based
    // effect.
    _holdDownChanged: function (newVal, oldVal) {
      if (oldVal === undefined) {
        return;
      }
      if (newVal) {
        this.downAction();
      } else {
        this.upAction();
      }
    }

    /**
    Fired when the animation finishes.
    This is useful if you want to wait until
    the ripple animation finishes to perform some action.
     @event transitionend
    @param {{node: Object}} detail Contains the animated node.
    */
  });
})();

/***/ }),
/* 26 */
/***/ (function(module, exports) {



(function () {
  'use strict';

  /**
   * Chrome uses an older version of DOM Level 3 Keyboard Events
   *
   * Most keys are labeled as text, but some are Unicode codepoints.
   * Values taken from: http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
   */

  var KEY_IDENTIFIER = {
    'U+0008': 'backspace',
    'U+0009': 'tab',
    'U+001B': 'esc',
    'U+0020': 'space',
    'U+007F': 'del'
  };

  /**
   * Special table for KeyboardEvent.keyCode.
   * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
   * than that.
   *
   * Values from: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
   */
  var KEY_CODE = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    27: 'esc',
    33: 'pageup',
    34: 'pagedown',
    35: 'end',
    36: 'home',
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    46: 'del',
    106: '*'
  };

  /**
   * MODIFIER_KEYS maps the short name for modifier keys used in a key
   * combo string to the property name that references those same keys
   * in a KeyboardEvent instance.
   */
  var MODIFIER_KEYS = {
    'shift': 'shiftKey',
    'ctrl': 'ctrlKey',
    'alt': 'altKey',
    'meta': 'metaKey'
  };

  /**
   * KeyboardEvent.key is mostly represented by printable character made by
   * the keyboard, with unprintable keys labeled nicely.
   *
   * However, on OS X, Alt+char can make a Unicode character that follows an
   * Apple-specific mapping. In this case, we fall back to .keyCode.
   */
  var KEY_CHAR = /[a-z0-9*]/;

  /**
   * Matches a keyIdentifier string.
   */
  var IDENT_CHAR = /U\+/;

  /**
   * Matches arrow keys in Gecko 27.0+
   */
  var ARROW_KEY = /^arrow/;

  /**
   * Matches space keys everywhere (notably including IE10's exceptional name
   * `spacebar`).
   */
  var SPACE_KEY = /^space(bar)?/;

  /**
   * Matches ESC key.
   *
   * Value from: http://w3c.github.io/uievents-key/#key-Escape
   */
  var ESC_KEY = /^escape$/;

  /**
   * Transforms the key.
   * @param {string} key The KeyBoardEvent.key
   * @param {Boolean} [noSpecialChars] Limits the transformation to
   * alpha-numeric characters.
   */
  function transformKey(key, noSpecialChars) {
    var validKey = '';
    if (key) {
      var lKey = key.toLowerCase();
      if (lKey === ' ' || SPACE_KEY.test(lKey)) {
        validKey = 'space';
      } else if (ESC_KEY.test(lKey)) {
        validKey = 'esc';
      } else if (lKey.length == 1) {
        if (!noSpecialChars || KEY_CHAR.test(lKey)) {
          validKey = lKey;
        }
      } else if (ARROW_KEY.test(lKey)) {
        validKey = lKey.replace('arrow', '');
      } else if (lKey == 'multiply') {
        // numpad '*' can map to Multiply on IE/Windows
        validKey = '*';
      } else {
        validKey = lKey;
      }
    }
    return validKey;
  }

  function transformKeyIdentifier(keyIdent) {
    var validKey = '';
    if (keyIdent) {
      if (keyIdent in KEY_IDENTIFIER) {
        validKey = KEY_IDENTIFIER[keyIdent];
      } else if (IDENT_CHAR.test(keyIdent)) {
        keyIdent = parseInt(keyIdent.replace('U+', '0x'), 16);
        validKey = String.fromCharCode(keyIdent).toLowerCase();
      } else {
        validKey = keyIdent.toLowerCase();
      }
    }
    return validKey;
  }

  function transformKeyCode(keyCode) {
    var validKey = '';
    if (Number(keyCode)) {
      if (keyCode >= 65 && keyCode <= 90) {
        // ascii a-z
        // lowercase is 32 offset from uppercase
        validKey = String.fromCharCode(32 + keyCode);
      } else if (keyCode >= 112 && keyCode <= 123) {
        // function keys f1-f12
        validKey = 'f' + (keyCode - 112 + 1);
      } else if (keyCode >= 48 && keyCode <= 57) {
        // top 0-9 keys
        validKey = String(keyCode - 48);
      } else if (keyCode >= 96 && keyCode <= 105) {
        // num pad 0-9
        validKey = String(keyCode - 96);
      } else {
        validKey = KEY_CODE[keyCode];
      }
    }
    return validKey;
  }

  /**
    * Calculates the normalized key for a KeyboardEvent.
    * @param {KeyboardEvent} keyEvent
    * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
    * transformation to alpha-numeric chars. This is useful with key
    * combinations like shift + 2, which on FF for MacOS produces
    * keyEvent.key = @
    * To get 2 returned, set noSpecialChars = true
    * To get @ returned, set noSpecialChars = false
   */
  function normalizedKeyForEvent(keyEvent, noSpecialChars) {
    // Fall back from .key, to .detail.key for artifical keyboard events,
    // and then to deprecated .keyIdentifier and .keyCode.
    if (keyEvent.key) {
      return transformKey(keyEvent.key, noSpecialChars);
    }
    if (keyEvent.detail && keyEvent.detail.key) {
      return transformKey(keyEvent.detail.key, noSpecialChars);
    }
    return transformKeyIdentifier(keyEvent.keyIdentifier) || transformKeyCode(keyEvent.keyCode) || '';
  }

  function keyComboMatchesEvent(keyCombo, event) {
    // For combos with modifiers we support only alpha-numeric keys
    var keyEvent = normalizedKeyForEvent(event, keyCombo.hasModifiers);
    return keyEvent === keyCombo.key && (!keyCombo.hasModifiers || !!event.shiftKey === !!keyCombo.shiftKey && !!event.ctrlKey === !!keyCombo.ctrlKey && !!event.altKey === !!keyCombo.altKey && !!event.metaKey === !!keyCombo.metaKey);
  }

  function parseKeyComboString(keyComboString) {
    if (keyComboString.length === 1) {
      return {
        combo: keyComboString,
        key: keyComboString,
        event: 'keydown'
      };
    }
    return keyComboString.split('+').reduce(function (parsedKeyCombo, keyComboPart) {
      var eventParts = keyComboPart.split(':');
      var keyName = eventParts[0];
      var event = eventParts[1];

      if (keyName in MODIFIER_KEYS) {
        parsedKeyCombo[MODIFIER_KEYS[keyName]] = true;
        parsedKeyCombo.hasModifiers = true;
      } else {
        parsedKeyCombo.key = keyName;
        parsedKeyCombo.event = event || 'keydown';
      }

      return parsedKeyCombo;
    }, {
      combo: keyComboString.split(':').shift()
    });
  }

  function parseEventString(eventString) {
    return eventString.trim().split(' ').map(function (keyComboString) {
      return parseKeyComboString(keyComboString);
    });
  }

  /**
   * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
   * keyboard commands that pertain to [WAI-ARIA best practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding).
   * The element takes care of browser differences with respect to Keyboard events
   * and uses an expressive syntax to filter key presses.
   *
   * Use the `keyBindings` prototype property to express what combination of keys
   * will trigger the callback. A key binding has the format
   * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
   * `"KEY:EVENT": "callback"` are valid as well). Some examples:
   *
   *      keyBindings: {
   *        'space': '_onKeydown', // same as 'space:keydown'
   *        'shift+tab': '_onKeydown',
   *        'enter:keypress': '_onKeypress',
   *        'esc:keyup': '_onKeyup'
   *      }
   *
   * The callback will receive with an event containing the following information in `event.detail`:
   *
   *      _onKeydown: function(event) {
   *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
   *        console.log(event.detail.key); // KEY only, e.g. "tab"
   *        console.log(event.detail.event); // EVENT, e.g. "keydown"
   *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
   *      }
   *
   * Use the `keyEventTarget` attribute to set up event handlers on a specific
   * node.
   *
   * See the [demo source code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
   * for an example.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */
  Polymer.IronA11yKeysBehavior = {
    properties: {
      /**
       * The EventTarget that will be firing relevant KeyboardEvents. Set it to
       * `null` to disable the listeners.
       * @type {?EventTarget}
       */
      keyEventTarget: {
        type: Object,
        value: function () {
          return this;
        }
      },

      /**
       * If true, this property will cause the implementing element to
       * automatically stop propagation on any handled KeyboardEvents.
       */
      stopKeyboardEventPropagation: {
        type: Boolean,
        value: false
      },

      _boundKeyHandlers: {
        type: Array,
        value: function () {
          return [];
        }
      },

      // We use this due to a limitation in IE10 where instances will have
      // own properties of everything on the "prototype".
      _imperativeKeyBindings: {
        type: Object,
        value: function () {
          return {};
        }
      }
    },

    observers: ['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],

    /**
     * To be used to express what combination of keys  will trigger the relative
     * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
     * @type {!Object}
     */
    keyBindings: {},

    registered: function () {
      this._prepKeyBindings();
    },

    attached: function () {
      this._listenKeyEventListeners();
    },

    detached: function () {
      this._unlistenKeyEventListeners();
    },

    /**
     * Can be used to imperatively add a key binding to the implementing
     * element. This is the imperative equivalent of declaring a keybinding
     * in the `keyBindings` prototype property.
     *
     * @param {string} eventString
     * @param {string} handlerName
     */
    addOwnKeyBinding: function (eventString, handlerName) {
      this._imperativeKeyBindings[eventString] = handlerName;
      this._prepKeyBindings();
      this._resetKeyEventListeners();
    },

    /**
     * When called, will remove all imperatively-added key bindings.
     */
    removeOwnKeyBindings: function () {
      this._imperativeKeyBindings = {};
      this._prepKeyBindings();
      this._resetKeyEventListeners();
    },

    /**
     * Returns true if a keyboard event matches `eventString`.
     *
     * @param {KeyboardEvent} event
     * @param {string} eventString
     * @return {boolean}
     */
    keyboardEventMatchesKeys: function (event, eventString) {
      var keyCombos = parseEventString(eventString);
      for (var i = 0; i < keyCombos.length; ++i) {
        if (keyComboMatchesEvent(keyCombos[i], event)) {
          return true;
        }
      }
      return false;
    },

    _collectKeyBindings: function () {
      var keyBindings = this.behaviors.map(function (behavior) {
        return behavior.keyBindings;
      });

      if (keyBindings.indexOf(this.keyBindings) === -1) {
        keyBindings.push(this.keyBindings);
      }

      return keyBindings;
    },

    _prepKeyBindings: function () {
      this._keyBindings = {};

      this._collectKeyBindings().forEach(function (keyBindings) {
        for (var eventString in keyBindings) {
          this._addKeyBinding(eventString, keyBindings[eventString]);
        }
      }, this);

      for (var eventString in this._imperativeKeyBindings) {
        this._addKeyBinding(eventString, this._imperativeKeyBindings[eventString]);
      }

      // Give precedence to combos with modifiers to be checked first.
      for (var eventName in this._keyBindings) {
        this._keyBindings[eventName].sort(function (kb1, kb2) {
          var b1 = kb1[0].hasModifiers;
          var b2 = kb2[0].hasModifiers;
          return b1 === b2 ? 0 : b1 ? -1 : 1;
        });
      }
    },

    _addKeyBinding: function (eventString, handlerName) {
      parseEventString(eventString).forEach(function (keyCombo) {
        this._keyBindings[keyCombo.event] = this._keyBindings[keyCombo.event] || [];

        this._keyBindings[keyCombo.event].push([keyCombo, handlerName]);
      }, this);
    },

    _resetKeyEventListeners: function () {
      this._unlistenKeyEventListeners();

      if (this.isAttached) {
        this._listenKeyEventListeners();
      }
    },

    _listenKeyEventListeners: function () {
      if (!this.keyEventTarget) {
        return;
      }
      Object.keys(this._keyBindings).forEach(function (eventName) {
        var keyBindings = this._keyBindings[eventName];
        var boundKeyHandler = this._onKeyBindingEvent.bind(this, keyBindings);

        this._boundKeyHandlers.push([this.keyEventTarget, eventName, boundKeyHandler]);

        this.keyEventTarget.addEventListener(eventName, boundKeyHandler);
      }, this);
    },

    _unlistenKeyEventListeners: function () {
      var keyHandlerTuple;
      var keyEventTarget;
      var eventName;
      var boundKeyHandler;

      while (this._boundKeyHandlers.length) {
        // My kingdom for block-scope binding and destructuring assignment..
        keyHandlerTuple = this._boundKeyHandlers.pop();
        keyEventTarget = keyHandlerTuple[0];
        eventName = keyHandlerTuple[1];
        boundKeyHandler = keyHandlerTuple[2];

        keyEventTarget.removeEventListener(eventName, boundKeyHandler);
      }
    },

    _onKeyBindingEvent: function (keyBindings, event) {
      if (this.stopKeyboardEventPropagation) {
        event.stopPropagation();
      }

      // if event has been already prevented, don't do anything
      if (event.defaultPrevented) {
        return;
      }

      for (var i = 0; i < keyBindings.length; i++) {
        var keyCombo = keyBindings[i][0];
        var handlerName = keyBindings[i][1];
        if (keyComboMatchesEvent(keyCombo, event)) {
          this._triggerKeyHandler(keyCombo, handlerName, event);
          // exit the loop if eventDefault was prevented
          if (event.defaultPrevented) {
            return;
          }
        }
      }
    },

    _triggerKeyHandler: function (keyCombo, handlerName, keyboardEvent) {
      var detail = Object.create(keyCombo);
      detail.keyboardEvent = keyboardEvent;
      var event = new CustomEvent(keyCombo.event, {
        detail: detail,
        cancelable: true
      });
      this[handlerName].call(this, event);
      if (event.defaultPrevented) {
        keyboardEvent.preventDefault();
      }
    }
  };
})();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(12);

__webpack_require__(25);

/**
 * `Polymer.PaperRippleBehavior` dynamically implements a ripple
 * when the element has focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `Polymer.IronButtonState` and `Polymer.IronControlState`.
 *
 * @polymerBehavior Polymer.PaperRippleBehavior
 */
Polymer.PaperRippleBehavior = {
  properties: {
    /**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */
    noink: {
      type: Boolean,
      observer: '_noinkChanged'
    },

    /**
     * @type {Element|undefined}
     */
    _rippleContainer: {
      type: Object
    }
  },

  /**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */
  _buttonStateChanged: function () {
    if (this.focused) {
      this.ensureRipple();
    }
  },

  /**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */
  _downHandler: function (event) {
    Polymer.IronButtonStateImpl._downHandler.call(this, event);
    if (this.pressed) {
      this.ensureRipple(event);
    }
  },

  /**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */
  ensureRipple: function (optTriggeringEvent) {
    if (!this.hasRipple()) {
      this._ripple = this._createRipple();
      this._ripple.noink = this.noink;
      var rippleContainer = this._rippleContainer || this.root;
      if (rippleContainer) {
        Polymer.dom(rippleContainer).appendChild(this._ripple);
      }
      if (optTriggeringEvent) {
        // Check if the event happened inside of the ripple container
        // Fall back to host instead of the root because distributed text
        // nodes are not valid event targets
        var domContainer = Polymer.dom(this._rippleContainer || this);
        var target = Polymer.dom(optTriggeringEvent).rootTarget;
        if (domContainer.deepContains( /** @type {Node} */target)) {
          this._ripple.uiDownAction(optTriggeringEvent);
        }
      }
    }
  },

  /**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */
  getRipple: function () {
    this.ensureRipple();
    return this._ripple;
  },

  /**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */
  hasRipple: function () {
    return Boolean(this._ripple);
  },

  /**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */
  _createRipple: function () {
    var element = /** @type {!PaperRippleElement} */document.createElement('paper-ripple');
    return element;
  },

  _noinkChanged: function (noink) {
    if (this.hasRipple()) {
      this._ripple.noink = noink;
    }
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(66);

const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.toBody("<iron-iconset-svg name=vaadin-upload size=24> <svg><defs> <g id=clear><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g> <g id=done><path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"></path></g> <g id=file-upload><path d=\"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z\"></path></g> <g id=refresh><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"></path></g> <g id=start><path d=\"M8 5v14l11-7z\"></path></g> <g id=warning><path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\"></path></g> </defs></svg> </iron-iconset-svg>");

/***/ }),
/* 29 */
/***/ (function(module, exports) {



(function () {

  /**
   * @constructor
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */
  Polymer.IronMeta = function (options) {
    Polymer.IronMeta[' '](options);

    this.type = options && options.type || 'default';
    this.key = options && options.key;
    if (options && 'value' in options) {
      this.value = options.value;
    }
  };

  // This function is used to convince Closure not to remove constructor calls
  // for instances that are not held anywhere. For example, when
  // `new Polymer.IronMeta({...})` is used only for the side effect of adding
  // a value.
  Polymer.IronMeta[' '] = function () {};

  Polymer.IronMeta.types = {};

  Polymer.IronMeta.prototype = {
    get value() {
      var type = this.type;
      var key = this.key;

      if (type && key) {
        return Polymer.IronMeta.types[type] && Polymer.IronMeta.types[type][key];
      }
    },

    set value(value) {
      var type = this.type;
      var key = this.key;

      if (type && key) {
        type = Polymer.IronMeta.types[type] = Polymer.IronMeta.types[type] || {};
        if (value == null) {
          delete type[key];
        } else {
          type[key] = value;
        }
      }
    },

    get list() {
      var type = this.type;

      if (type) {
        var items = Polymer.IronMeta.types[this.type];
        if (!items) {
          return [];
        }

        return Object.keys(items).map(function (key) {
          return metaDatas[this.type][key];
        }, this);
      }
    },

    byKey: function (key) {
      this.key = key;
      return this.value;
    }
  };

  var metaDatas = Polymer.IronMeta.types;

  Polymer({

    is: 'iron-meta',

    properties: {

      /**
       * The type of meta-data.  All meta-data of the same type is stored
       * together.
       * @type {string}
       */
      type: {
        type: String,
        value: 'default'
      },

      /**
       * The key used to store `value` under the `type` namespace.
       * @type {?string}
       */
      key: {
        type: String
      },

      /**
       * The meta-data to store or retrieve.
       * @type {*}
       */
      value: {
        type: String,
        notify: true
      },

      /**
       * If true, `value` is set to the iron-meta instance itself.
       */
      self: {
        type: Boolean,
        observer: '_selfChanged'
      },

      __meta: {
        type: Boolean,
        computed: '__computeMeta(type, key, value)'
      }
    },

    hostAttributes: {
      hidden: true
    },

    __computeMeta: function (type, key, value) {
      var meta = new Polymer.IronMeta({
        type: type,
        key: key
      });

      if (value !== undefined && value !== meta.value) {
        meta.value = value;
      } else if (this.value !== meta.value) {
        this.value = meta.value;
      }

      return meta;
    },

    get list() {
      return this.__meta && this.__meta.list;
    },

    _selfChanged: function (self) {
      if (self) {
        this.value = this;
      }
    },

    /**
     * Retrieves meta data value by key.
     *
     * @method byKey
     * @param {string} key The key of the meta-data to be returned.
     * @return {*}
     */
    byKey: function (key) {
      return new Polymer.IronMeta({
        type: this.type,
        key: key
      }).value;
    }
  });
})();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(29);

__webpack_require__(3);

const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=iron-icon> <template> <style>:host{@apply --layout-inline;@apply --layout-center-center;position:relative;vertical-align:middle;fill:var(--iron-icon-fill-color,currentcolor);stroke:var(--iron-icon-stroke-color,none);width:var(--iron-icon-width,24px);height:var(--iron-icon-height,24px);@apply --iron-icon;}:host([hidden]){display:none}</style> </template> </dom-module>");

Polymer({

  is: 'iron-icon',

  properties: {

    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {
      type: String
    },

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {
      type: String
    },

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {
      type: String
    },

    /**
     * @type {!Polymer.IronMeta}
     */
    _meta: {
      value: Polymer.Base.create('iron-meta', { type: 'iconset' })
    }

  },

  observers: ['_updateIcon(_meta, isAttached)', '_updateIcon(theme, isAttached)', '_srcChanged(src, isAttached)', '_iconChanged(icon, isAttached)'],

  _DEFAULT_ICONSET: 'icons',

  _iconChanged: function (icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;
    this._updateIcon();
  },

  _srcChanged: function (src) {
    this._updateIcon();
  },

  _usesIconset: function () {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function () {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        Polymer.dom(this.root).removeChild(this._img);
      }
      if (this._iconName === "") {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset = /** @type {?Polymer.Iconset} */this._meta.byKey(this._iconsetName);
        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);
          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }
      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }
      this._img.src = this.src;
      Polymer.dom(this.root).appendChild(this._img);
    }
  }

});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.toBody("<custom-style> <style is=custom-style>html{--google-red-100:#f4c7c3;--google-red-300:#e67c73;--google-red-500:#db4437;--google-red-700:#c53929;--google-blue-100:#c6dafc;--google-blue-300:#7baaf7;--google-blue-500:#4285f4;--google-blue-700:#3367d6;--google-green-100:#b7e1cd;--google-green-300:#57bb8a;--google-green-500:#0f9d58;--google-green-700:#0b8043;--google-yellow-100:#fce8b2;--google-yellow-300:#f7cb4d;--google-yellow-500:#f4b400;--google-yellow-700:#f09300;--google-grey-100:#f5f5f5;--google-grey-300:#e0e0e0;--google-grey-500:#9e9e9e;--google-grey-700:#616161;--paper-red-50:#ffebee;--paper-red-100:#ffcdd2;--paper-red-200:#ef9a9a;--paper-red-300:#e57373;--paper-red-400:#ef5350;--paper-red-500:#f44336;--paper-red-600:#e53935;--paper-red-700:#d32f2f;--paper-red-800:#c62828;--paper-red-900:#b71c1c;--paper-red-a100:#ff8a80;--paper-red-a200:#ff5252;--paper-red-a400:#ff1744;--paper-red-a700:#d50000;--paper-pink-50:#fce4ec;--paper-pink-100:#f8bbd0;--paper-pink-200:#f48fb1;--paper-pink-300:#f06292;--paper-pink-400:#ec407a;--paper-pink-500:#e91e63;--paper-pink-600:#d81b60;--paper-pink-700:#c2185b;--paper-pink-800:#ad1457;--paper-pink-900:#880e4f;--paper-pink-a100:#ff80ab;--paper-pink-a200:#ff4081;--paper-pink-a400:#f50057;--paper-pink-a700:#c51162;--paper-purple-50:#f3e5f5;--paper-purple-100:#e1bee7;--paper-purple-200:#ce93d8;--paper-purple-300:#ba68c8;--paper-purple-400:#ab47bc;--paper-purple-500:#9c27b0;--paper-purple-600:#8e24aa;--paper-purple-700:#7b1fa2;--paper-purple-800:#6a1b9a;--paper-purple-900:#4a148c;--paper-purple-a100:#ea80fc;--paper-purple-a200:#e040fb;--paper-purple-a400:#d500f9;--paper-purple-a700:#aa00ff;--paper-deep-purple-50:#ede7f6;--paper-deep-purple-100:#d1c4e9;--paper-deep-purple-200:#b39ddb;--paper-deep-purple-300:#9575cd;--paper-deep-purple-400:#7e57c2;--paper-deep-purple-500:#673ab7;--paper-deep-purple-600:#5e35b1;--paper-deep-purple-700:#512da8;--paper-deep-purple-800:#4527a0;--paper-deep-purple-900:#311b92;--paper-deep-purple-a100:#b388ff;--paper-deep-purple-a200:#7c4dff;--paper-deep-purple-a400:#651fff;--paper-deep-purple-a700:#6200ea;--paper-indigo-50:#e8eaf6;--paper-indigo-100:#c5cae9;--paper-indigo-200:#9fa8da;--paper-indigo-300:#7986cb;--paper-indigo-400:#5c6bc0;--paper-indigo-500:#3f51b5;--paper-indigo-600:#3949ab;--paper-indigo-700:#303f9f;--paper-indigo-800:#283593;--paper-indigo-900:#1a237e;--paper-indigo-a100:#8c9eff;--paper-indigo-a200:#536dfe;--paper-indigo-a400:#3d5afe;--paper-indigo-a700:#304ffe;--paper-blue-50:#e3f2fd;--paper-blue-100:#bbdefb;--paper-blue-200:#90caf9;--paper-blue-300:#64b5f6;--paper-blue-400:#42a5f5;--paper-blue-500:#2196f3;--paper-blue-600:#1e88e5;--paper-blue-700:#1976d2;--paper-blue-800:#1565c0;--paper-blue-900:#0d47a1;--paper-blue-a100:#82b1ff;--paper-blue-a200:#448aff;--paper-blue-a400:#2979ff;--paper-blue-a700:#2962ff;--paper-light-blue-50:#e1f5fe;--paper-light-blue-100:#b3e5fc;--paper-light-blue-200:#81d4fa;--paper-light-blue-300:#4fc3f7;--paper-light-blue-400:#29b6f6;--paper-light-blue-500:#03a9f4;--paper-light-blue-600:#039be5;--paper-light-blue-700:#0288d1;--paper-light-blue-800:#0277bd;--paper-light-blue-900:#01579b;--paper-light-blue-a100:#80d8ff;--paper-light-blue-a200:#40c4ff;--paper-light-blue-a400:#00b0ff;--paper-light-blue-a700:#0091ea;--paper-cyan-50:#e0f7fa;--paper-cyan-100:#b2ebf2;--paper-cyan-200:#80deea;--paper-cyan-300:#4dd0e1;--paper-cyan-400:#26c6da;--paper-cyan-500:#00bcd4;--paper-cyan-600:#00acc1;--paper-cyan-700:#0097a7;--paper-cyan-800:#00838f;--paper-cyan-900:#006064;--paper-cyan-a100:#84ffff;--paper-cyan-a200:#18ffff;--paper-cyan-a400:#00e5ff;--paper-cyan-a700:#00b8d4;--paper-teal-50:#e0f2f1;--paper-teal-100:#b2dfdb;--paper-teal-200:#80cbc4;--paper-teal-300:#4db6ac;--paper-teal-400:#26a69a;--paper-teal-500:#009688;--paper-teal-600:#00897b;--paper-teal-700:#00796b;--paper-teal-800:#00695c;--paper-teal-900:#004d40;--paper-teal-a100:#a7ffeb;--paper-teal-a200:#64ffda;--paper-teal-a400:#1de9b6;--paper-teal-a700:#00bfa5;--paper-green-50:#e8f5e9;--paper-green-100:#c8e6c9;--paper-green-200:#a5d6a7;--paper-green-300:#81c784;--paper-green-400:#66bb6a;--paper-green-500:#4caf50;--paper-green-600:#43a047;--paper-green-700:#388e3c;--paper-green-800:#2e7d32;--paper-green-900:#1b5e20;--paper-green-a100:#b9f6ca;--paper-green-a200:#69f0ae;--paper-green-a400:#00e676;--paper-green-a700:#00c853;--paper-light-green-50:#f1f8e9;--paper-light-green-100:#dcedc8;--paper-light-green-200:#c5e1a5;--paper-light-green-300:#aed581;--paper-light-green-400:#9ccc65;--paper-light-green-500:#8bc34a;--paper-light-green-600:#7cb342;--paper-light-green-700:#689f38;--paper-light-green-800:#558b2f;--paper-light-green-900:#33691e;--paper-light-green-a100:#ccff90;--paper-light-green-a200:#b2ff59;--paper-light-green-a400:#76ff03;--paper-light-green-a700:#64dd17;--paper-lime-50:#f9fbe7;--paper-lime-100:#f0f4c3;--paper-lime-200:#e6ee9c;--paper-lime-300:#dce775;--paper-lime-400:#d4e157;--paper-lime-500:#cddc39;--paper-lime-600:#c0ca33;--paper-lime-700:#afb42b;--paper-lime-800:#9e9d24;--paper-lime-900:#827717;--paper-lime-a100:#f4ff81;--paper-lime-a200:#eeff41;--paper-lime-a400:#c6ff00;--paper-lime-a700:#aeea00;--paper-yellow-50:#fffde7;--paper-yellow-100:#fff9c4;--paper-yellow-200:#fff59d;--paper-yellow-300:#fff176;--paper-yellow-400:#ffee58;--paper-yellow-500:#ffeb3b;--paper-yellow-600:#fdd835;--paper-yellow-700:#fbc02d;--paper-yellow-800:#f9a825;--paper-yellow-900:#f57f17;--paper-yellow-a100:#ffff8d;--paper-yellow-a200:#ffff00;--paper-yellow-a400:#ffea00;--paper-yellow-a700:#ffd600;--paper-amber-50:#fff8e1;--paper-amber-100:#ffecb3;--paper-amber-200:#ffe082;--paper-amber-300:#ffd54f;--paper-amber-400:#ffca28;--paper-amber-500:#ffc107;--paper-amber-600:#ffb300;--paper-amber-700:#ffa000;--paper-amber-800:#ff8f00;--paper-amber-900:#ff6f00;--paper-amber-a100:#ffe57f;--paper-amber-a200:#ffd740;--paper-amber-a400:#ffc400;--paper-amber-a700:#ffab00;--paper-orange-50:#fff3e0;--paper-orange-100:#ffe0b2;--paper-orange-200:#ffcc80;--paper-orange-300:#ffb74d;--paper-orange-400:#ffa726;--paper-orange-500:#ff9800;--paper-orange-600:#fb8c00;--paper-orange-700:#f57c00;--paper-orange-800:#ef6c00;--paper-orange-900:#e65100;--paper-orange-a100:#ffd180;--paper-orange-a200:#ffab40;--paper-orange-a400:#ff9100;--paper-orange-a700:#ff6500;--paper-deep-orange-50:#fbe9e7;--paper-deep-orange-100:#ffccbc;--paper-deep-orange-200:#ffab91;--paper-deep-orange-300:#ff8a65;--paper-deep-orange-400:#ff7043;--paper-deep-orange-500:#ff5722;--paper-deep-orange-600:#f4511e;--paper-deep-orange-700:#e64a19;--paper-deep-orange-800:#d84315;--paper-deep-orange-900:#bf360c;--paper-deep-orange-a100:#ff9e80;--paper-deep-orange-a200:#ff6e40;--paper-deep-orange-a400:#ff3d00;--paper-deep-orange-a700:#dd2c00;--paper-brown-50:#efebe9;--paper-brown-100:#d7ccc8;--paper-brown-200:#bcaaa4;--paper-brown-300:#a1887f;--paper-brown-400:#8d6e63;--paper-brown-500:#795548;--paper-brown-600:#6d4c41;--paper-brown-700:#5d4037;--paper-brown-800:#4e342e;--paper-brown-900:#3e2723;--paper-grey-50:#fafafa;--paper-grey-100:#f5f5f5;--paper-grey-200:#eeeeee;--paper-grey-300:#e0e0e0;--paper-grey-400:#bdbdbd;--paper-grey-500:#9e9e9e;--paper-grey-600:#757575;--paper-grey-700:#616161;--paper-grey-800:#424242;--paper-grey-900:#212121;--paper-blue-grey-50:#eceff1;--paper-blue-grey-100:#cfd8dc;--paper-blue-grey-200:#b0bec5;--paper-blue-grey-300:#90a4ae;--paper-blue-grey-400:#78909c;--paper-blue-grey-500:#607d8b;--paper-blue-grey-600:#546e7a;--paper-blue-grey-700:#455a64;--paper-blue-grey-800:#37474f;--paper-blue-grey-900:#263238;--dark-divider-opacity:0.12;--dark-disabled-opacity:0.38;--dark-secondary-opacity:0.54;--dark-primary-opacity:0.87;--light-divider-opacity:0.12;--light-disabled-opacity:0.3;--light-secondary-opacity:0.7;--light-primary-opacity:1.0}</style> </custom-style>");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ozone_upload__ = __webpack_require__(33);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "OzoneUpload", function() { return __WEBPACK_IMPORTED_MODULE_0__ozone_upload__["a"]; });



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OzoneUpload; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polymer_polymer_html__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polymer_polymer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_polymer_polymer_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vaadin_upload_vaadin_upload_html__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vaadin_upload_vaadin_upload_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vaadin_upload_vaadin_upload_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_taktik_polymer_typescript__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_taktik_polymer_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_taktik_polymer_typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ozone_api_upload__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ozone_upload_html__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ozone_upload_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ozone_upload_html__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by hubert on 23/06/17.
 */





/**
 * <ozone-upload> is a template module start an ozone polymer module.
 *
 * ```html
 * <ozone-upload> Document usage with code example </ozone-upload>
 * ```
 */
let OzoneUpload = class OzoneUpload extends Polymer.Element {
    ready() {
        super.ready();
        if (this.$)
            this.$.vaadinUpload._createXhr = () => {
                return new __WEBPACK_IMPORTED_MODULE_3_ozone_api_upload__["a" /* UploadFileRequest */]();
            };
    }
    get vaadinUpload() {
        if (this.$)
            return this.$.vaadinUpload;
    }
};
OzoneUpload = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_taktik_polymer_typescript__["customElement"])('ozone-upload')
], OzoneUpload);

{ }


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(14);

__webpack_require__(48);

__webpack_require__(50);

__webpack_require__(51);

__webpack_require__(52);

__webpack_require__(53);

__webpack_require__(54);

__webpack_require__(55);

__webpack_require__(58);

__webpack_require__(23);

// bc
Polymer.Base = Polymer.LegacyElementMixin(HTMLElement).prototype;

// NOTE: this is here for modulizer to export `html` for the module version of this file
Polymer.html = Polymer.html;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(36);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

(function () {
  /*
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var k = {};function n() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function p(a) {
    a = a.replace(aa, "").replace(ba, "");var c = q,
        b = a,
        d = new n();d.start = 0;d.end = b.length;for (var e = d, f = 0, h = b.length; f < h; f++) if ("{" === b[f]) {
      e.rules || (e.rules = []);var g = e,
          m = g.rules[g.rules.length - 1] || null;e = new n();e.start = f + 1;e.parent = g;e.previous = m;g.rules.push(e);
    } else "}" === b[f] && (e.end = f + 1, e = e.parent || d);return c(d, a);
  }
  function q(a, c) {
    var b = c.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = b.trim();a.parent && (b = c.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), b = ca(b), b = b.replace(r, " "), b = b.substring(b.lastIndexOf(";") + 1), b = a.parsedSelector = a.selector = b.trim(), a.atRule = 0 === b.indexOf("@"), a.atRule ? 0 === b.indexOf("@media") ? a.type = t : b.match(da) && (a.type = u, a.keyframesName = a.selector.split(r).pop()) : a.type = 0 === b.indexOf("--") ? v : x);if (b = a.rules) for (var d = 0, e = b.length, f; d < e && (f = b[d]); d++) q(f, c);return a;
  }
  function ca(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, b) {
      a = b;for (b = 6 - a.length; b--;) a = "0" + a;return "\\" + a;
    });
  }
  function y(a, c, b) {
    b = void 0 === b ? "" : b;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var h = e.length, g; f < h && (g = e[f]); f++) d = y(g, c, d);
      } else c ? c = a.cssText : (c = a.cssText, c = c.replace(ea, "").replace(fa, ""), c = c.replace(ha, "").replace(ia, "")), (d = c.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (b += a.selector + " {\n"), b += d, a.selector && (b += "}\n\n"));return b;
  }
  var x = 1,
      u = 7,
      t = 4,
      v = 1E3,
      aa = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      ba = /@import[^;]*;/gim,
      ea = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      fa = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      ha = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      ia = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      da = /^@[^\s]*keyframes/,
      r = /\s+/g;var ja = Promise.resolve();function ka(a) {
    if (a = k[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function z(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function la(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a.b || (a.b = !0, ja.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a.b = !1;
    }));
  };var A = !(window.ShadyDOM && window.ShadyDOM.inUse),
      B;function C(a) {
    B = a && a.shimcssproperties ? !1 : A || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? B = window.ShadyCSS.nativeCss : window.ShadyCSS ? (C(window.ShadyCSS), window.ShadyCSS = void 0) : C(window.WebComponents && window.WebComponents.flags);var D = B;var F = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      G = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      ma = /@media\s(.*)/;var H = new Set();function I(a) {
    if (!a) return "";"string" === typeof a && (a = p(a));return y(a, D);
  }function J(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = p(a.textContent));return a.__cssRules || null;
  }function K(a, c, b, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === t) {
        var h = a.selector.match(ma);h && (window.matchMedia(h[1]).matches || (e = !0));
      }f === x ? c(a) : b && f === u ? b(a) : f === v && (e = !0);if ((a = a.rules) && !e) {
        e = 0;f = a.length;for (var g; e < f && (g = a[e]); e++) K(g, c, b, d);
      }
    }
  }
  function L(a, c) {
    var b = a.indexOf("var(");if (-1 === b) return c(a, "", "", "");a: {
      var d = 0;var e = b + 3;for (var f = a.length; e < f; e++) if ("(" === a[e]) d++;else if (")" === a[e] && 0 === --d) break a;e = -1;
    }d = a.substring(b + 4, e);b = a.substring(0, b);a = L(a.substring(e + 1), c);e = d.indexOf(",");return -1 === e ? c(b, d.trim(), "", a) : c(b, d.substring(0, e).trim(), d.substring(e + 1).trim(), a);
  };var na = /;\s*/m,
      oa = /^\s*(initial)|(inherit)\s*$/;function M() {
    this.a = {};
  }M.prototype.set = function (a, c) {
    a = a.trim();this.a[a] = { h: c, i: {} };
  };M.prototype.get = function (a) {
    a = a.trim();return this.a[a] || null;
  };var N = null;function O() {
    this.b = this.c = null;this.a = new M();
  }O.prototype.o = function (a) {
    a = G.test(a) || F.test(a);G.lastIndex = 0;F.lastIndex = 0;return a;
  };
  O.prototype.m = function (a, c) {
    if (void 0 === a.a) {
      var b = [];for (var d = a.content.querySelectorAll("style"), e = 0; e < d.length; e++) {
        var f = d[e];if (f.hasAttribute("shady-unscoped")) {
          if (!A) {
            var h = f.textContent;H.has(h) || (H.add(h), h = f.cloneNode(!0), document.head.appendChild(h));f.parentNode.removeChild(f);
          }
        } else b.push(f.textContent), f.parentNode.removeChild(f);
      }(b = b.join("").trim()) ? (d = document.createElement("style"), d.textContent = b, a.content.insertBefore(d, a.content.firstChild), b = d) : b = null;a.a = b;
    }return (a = a.a) ? this.j(a, c) : null;
  };O.prototype.j = function (a, c) {
    c = void 0 === c ? "" : c;var b = J(a);this.l(b, c);a.textContent = I(b);return b;
  };O.prototype.f = function (a) {
    var c = this,
        b = J(a);K(b, function (a) {
      ":root" === a.selector && (a.selector = "html");c.g(a);
    });a.textContent = I(b);return b;
  };O.prototype.l = function (a, c) {
    var b = this;this.c = c;K(a, function (a) {
      b.g(a);
    });this.c = null;
  };O.prototype.g = function (a) {
    a.cssText = pa(this, a.parsedCssText);":root" === a.selector && (a.selector = ":host > *");
  };
  function pa(a, c) {
    c = c.replace(F, function (b, c, e, f) {
      return qa(a, b, c, e, f);
    });return P(a, c);
  }function P(a, c) {
    for (var b; b = G.exec(c);) {
      var d = b[0],
          e = b[1];b = b.index;var f = c.slice(0, b + d.indexOf("@apply"));c = c.slice(b + d.length);var h = Q(a, f);d = void 0;var g = a;e = e.replace(na, "");var m = [];var l = g.a.get(e);l || (g.a.set(e, {}), l = g.a.get(e));if (l) for (d in g.c && (l.i[g.c] = !0), l.h) g = h && h[d], l = [d, ": var(", e, "_-_", d], g && l.push(",", g), l.push(")"), m.push(l.join(""));d = m.join("; ");c = "" + f + d + c;G.lastIndex = b + d.length;
    }return c;
  }
  function Q(a, c) {
    c = c.split(";");for (var b, d, e = {}, f = 0, h; f < c.length; f++) if (b = c[f]) if (h = b.split(":"), 1 < h.length) {
      b = h[0].trim();var g = a;d = b;h = h.slice(1).join(":");var m = oa.exec(h);m && (m[1] ? (g.b || (g.b = document.createElement("meta"), g.b.setAttribute("apply-shim-measure", ""), g.b.style.all = "initial", document.head.appendChild(g.b)), d = window.getComputedStyle(g.b).getPropertyValue(d)) : d = "apply-shim-inherit", h = d);d = h;e[b] = d;
    }return e;
  }function ra(a, c) {
    if (N) for (var b in c.i) b !== a.c && N(b);
  }
  function qa(a, c, b, d, e) {
    d && L(d, function (c, b) {
      b && a.a.get(b) && (e = "@apply " + b + ";");
    });if (!e) return c;var f = P(a, e),
        h = c.slice(0, c.indexOf("--")),
        g = f = Q(a, f),
        m = a.a.get(b),
        l = m && m.h;l ? g = Object.assign(Object.create(l), f) : a.a.set(b, g);var Y = [],
        w,
        Z = !1;for (w in g) {
      var E = f[w];void 0 === E && (E = "initial");!l || w in l || (Z = !0);Y.push("" + b + "_-_" + w + ": " + E);
    }Z && ra(a, m);m && (m.h = g);d && (h = c + ";" + h);return "" + h + Y.join("; ") + ";";
  }O.prototype.detectMixin = O.prototype.o;O.prototype.transformStyle = O.prototype.j;
  O.prototype.transformCustomStyle = O.prototype.f;O.prototype.transformRules = O.prototype.l;O.prototype.transformRule = O.prototype.g;O.prototype.transformTemplate = O.prototype.m;O.prototype._separator = "_-_";Object.defineProperty(O.prototype, "invalidCallback", { get: function () {
      return N;
    }, set: function (a) {
      N = a;
    } });var R = null,
      sa = window.HTMLImports && window.HTMLImports.whenReady || null,
      S;function ta(a) {
    requestAnimationFrame(function () {
      sa ? sa(a) : (R || (R = new Promise(function (a) {
        S = a;
      }), "complete" === document.readyState ? S() : document.addEventListener("readystatechange", function () {
        "complete" === document.readyState && S();
      })), R.then(function () {
        a && a();
      }));
    });
  };var T = new O();function U() {
    var a = this;this.a = null;ta(function () {
      V(a);
    });T.invalidCallback = ka;
  }function V(a) {
    a.a || (a.a = window.ShadyCSS.CustomStyleInterface, a.a && (a.a.transformCallback = function (a) {
      T.f(a);
    }, a.a.validateCallback = function () {
      requestAnimationFrame(function () {
        a.a.enqueued && W(a);
      });
    }));
  }U.prototype.prepareTemplate = function (a, c) {
    V(this);k[c] = a;c = T.m(a, c);a._styleAst = c;
  };
  function W(a) {
    V(a);if (a.a) {
      var c = a.a.processStyles();if (a.a.enqueued) {
        for (var b = 0; b < c.length; b++) {
          var d = a.a.getStyleForCustomStyle(c[b]);d && T.f(d);
        }a.a.enqueued = !1;
      }
    }
  }U.prototype.styleSubtree = function (a, c) {
    V(this);if (c) for (var b in c) null === b ? a.style.removeProperty(b) : a.style.setProperty(b, c[b]);if (a.shadowRoot) for (this.styleElement(a), a = a.shadowRoot.children || a.shadowRoot.childNodes, c = 0; c < a.length; c++) this.styleSubtree(a[c]);else for (a = a.children || a.childNodes, c = 0; c < a.length; c++) this.styleSubtree(a[c]);
  };
  U.prototype.styleElement = function (a) {
    V(this);var c = a.localName,
        b;c ? -1 < c.indexOf("-") ? b = c : b = a.getAttribute && a.getAttribute("is") || "" : b = a.is;if ((c = k[b]) && !z(c)) {
      if (z(c) || c._applyShimValidatingVersion !== c._applyShimNextVersion) this.prepareTemplate(c, b), la(c);if (a = a.shadowRoot) if (a = a.querySelector("style")) a.__cssRules = c._styleAst, a.textContent = I(c._styleAst);
    }
  };U.prototype.styleDocument = function (a) {
    V(this);this.styleSubtree(document.body, a);
  };
  if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
    var X = new U(),
        ua = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;window.ShadyCSS = { prepareTemplate: function (a, c) {
        W(X);X.prepareTemplate(a, c);
      }, styleSubtree: function (a, c) {
        W(X);X.styleSubtree(a, c);
      }, styleElement: function (a) {
        W(X);X.styleElement(a);
      }, styleDocument: function (a) {
        W(X);X.styleDocument(a);
      }, getComputedStyleValue: function (a, c) {
        return (a = window.getComputedStyle(a).getPropertyValue(c)) ? a.trim() : "";
      }, nativeCss: D, nativeShadow: A };ua && (window.ShadyCSS.CustomStyleInterface = ua);
  }window.ShadyCSS.ApplyShim = T;
}).call(this);

//# sourceMappingURL=apply-shim.min.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(4);

(function () {
  'use strict';

  let modules = {};
  let lcModules = {};
  function findModule(id) {
    return modules[id] || lcModules[id.toLowerCase()];
  }

  function styleOutsideTemplateCheck(inst) {
    if (inst.querySelector('style')) {
      console.warn('dom-module %s has style outside template', inst.id);
    }
  }

  /**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @memberof Polymer
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */
  class DomModule extends HTMLElement {

    static get observedAttributes() {
      return ['id'];
    }

    /**
     * Retrieves the element specified by the css `selector` in the module
     * registered by `id`. For example, this.import('foo', 'img');
     * @param {string} id The id of the dom-module in which to search.
     * @param {string=} selector The css selector by which to find the element.
     * @return {Element} Returns the element which matches `selector` in the
     * module registered at the specified `id`.
     */
    static import(id, selector) {
      if (id) {
        let m = findModule(id);
        if (m && selector) {
          return m.querySelector(selector);
        }
        return m;
      }
      return null;
    }

    /**
     * @param {string} name Name of attribute.
     * @param {?string} old Old value of attribute.
     * @param {?string} value Current value of attribute.
     * @return {void}
     */
    attributeChangedCallback(name, old, value) {
      if (old !== value) {
        this.register();
      }
    }

    /**
     * The absolute URL of the original location of this `dom-module`.
     *
     * This value will differ from this element's `ownerDocument` in the
     * following ways:
     * - Takes into account any `assetpath` attribute added during bundling
     *   to indicate the original location relative to the bundled location
     * - Uses the HTMLImports polyfill's `importForElement` API to ensure
     *   the path is relative to the import document's location since
     *   `ownerDocument` is not currently polyfilled
     */
    get assetpath() {
      // Don't override existing assetpath.
      if (!this.__assetpath) {
        // note: assetpath set via an attribute must be relative to this
        // element's location; accomodate polyfilled HTMLImports
        const owner = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument;
        const url = Polymer.ResolveUrl.resolveUrl(this.getAttribute('assetpath') || '', owner.baseURI);
        this.__assetpath = Polymer.ResolveUrl.pathFromUrl(url);
      }
      return this.__assetpath;
    }

    /**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     * @param {string=} id The id at which to register the dom-module.
     * @return {void}
     */
    register(id) {
      id = id || this.id;
      if (id) {
        this.id = id;
        // store id separate from lowercased id so that
        // in all cases mixedCase id will stored distinctly
        // and lowercase version is a fallback
        modules[id] = this;
        lcModules[id.toLowerCase()] = this;
        styleOutsideTemplateCheck(this);
      }
    }
  }

  DomModule.prototype['modules'] = modules;

  customElements.define('dom-module', DomModule);

  // export
  Polymer.DomModule = DomModule;
})();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

(function () {
  'use strict';

  /**
   * Module with utilities for manipulating structured data path strings.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module with utilities for manipulating structured data path strings.
   */

  const Path = {

    /**
     * Returns true if the given string is a structured data path (has dots).
     *
     * Example:
     *
     * ```
     * Polymer.Path.isPath('foo.bar.baz') // true
     * Polymer.Path.isPath('foo')         // false
     * ```
     *
     * @memberof Polymer.Path
     * @param {string} path Path string
     * @return {boolean} True if the string contained one or more dots
     */
    isPath: function (path) {
      return path.indexOf('.') >= 0;
    },

    /**
     * Returns the root property name for the given path.
     *
     * Example:
     *
     * ```
     * Polymer.Path.root('foo.bar.baz') // 'foo'
     * Polymer.Path.root('foo')         // 'foo'
     * ```
     *
     * @memberof Polymer.Path
     * @param {string} path Path string
     * @return {string} Root property name
     */
    root: function (path) {
      let dotIndex = path.indexOf('.');
      if (dotIndex === -1) {
        return path;
      }
      return path.slice(0, dotIndex);
    },

    /**
     * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
     * Returns true if the given path is an ancestor of the base path.
     *
     * Example:
     *
     * ```
     * Polymer.Path.isAncestor('foo.bar', 'foo')         // true
     * Polymer.Path.isAncestor('foo.bar', 'foo.bar')     // false
     * Polymer.Path.isAncestor('foo.bar', 'foo.bar.baz') // false
     * ```
     *
     * @memberof Polymer.Path
     * @param {string} base Path string to test against.
     * @param {string} path Path string to test.
     * @return {boolean} True if `path` is an ancestor of `base`.
     */
    isAncestor: function (base, path) {
      //     base.startsWith(path + '.');
      return base.indexOf(path + '.') === 0;
    },

    /**
     * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
     *
     * Example:
     *
     * ```
     * Polymer.Path.isDescendant('foo.bar', 'foo.bar.baz') // true
     * Polymer.Path.isDescendant('foo.bar', 'foo.bar')     // false
     * Polymer.Path.isDescendant('foo.bar', 'foo')         // false
     * ```
     *
     * @memberof Polymer.Path
     * @param {string} base Path string to test against.
     * @param {string} path Path string to test.
     * @return {boolean} True if `path` is a descendant of `base`.
     */
    isDescendant: function (base, path) {
      //     path.startsWith(base + '.');
      return path.indexOf(base + '.') === 0;
    },

    /**
     * Replaces a previous base path with a new base path, preserving the
     * remainder of the path.
     *
     * User must ensure `path` has a prefix of `base`.
     *
     * Example:
     *
     * ```
     * Polymer.Path.translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
     * ```
     *
     * @memberof Polymer.Path
     * @param {string} base Current base string to remove
     * @param {string} newBase New base string to replace with
     * @param {string} path Path to translate
     * @return {string} Translated string
     */
    translate: function (base, newBase, path) {
      return newBase + path.slice(base.length);
    },

    /**
     * @param {string} base Path string to test against
     * @param {string} path Path string to test
     * @return {boolean} True if `path` is equal to `base`
     * @this {Path}
     */
    matches: function (base, path) {
      return base === path || this.isAncestor(base, path) || this.isDescendant(base, path);
    },

    /**
     * Converts array-based paths to flattened path.  String-based paths
     * are returned as-is.
     *
     * Example:
     *
     * ```
     * Polymer.Path.normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
     * Polymer.Path.normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
     * ```
     *
     * @memberof Polymer.Path
     * @param {string | !Array<string|number>} path Input path
     * @return {string} Flattened path
     */
    normalize: function (path) {
      if (Array.isArray(path)) {
        let parts = [];
        for (let i = 0; i < path.length; i++) {
          let args = path[i].toString().split('.');
          for (let j = 0; j < args.length; j++) {
            parts.push(args[j]);
          }
        }
        return parts.join('.');
      } else {
        return path;
      }
    },

    /**
     * Splits a path into an array of property names. Accepts either arrays
     * of path parts or strings.
     *
     * Example:
     *
     * ```
     * Polymer.Path.split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
     * Polymer.Path.split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
     * ```
     *
     * @memberof Polymer.Path
     * @param {string | !Array<string|number>} path Input path
     * @return {!Array<string>} Array of path parts
     * @this {Path}
     * @suppress {checkTypes}
     */
    split: function (path) {
      if (Array.isArray(path)) {
        return this.normalize(path).split('.');
      }
      return path.toString().split('.');
    },

    /**
     * Reads a value from a path.  If any sub-property in the path is `undefined`,
     * this method returns `undefined` (will never throw.
     *
     * @memberof Polymer.Path
     * @param {Object} root Object from which to dereference path from
     * @param {string | !Array<string|number>} path Path to read
     * @param {Object=} info If an object is provided to `info`, the normalized
     *  (flattened) path will be set to `info.path`.
     * @return {*} Value at path, or `undefined` if the path could not be
     *  fully dereferenced.
     * @this {Path}
     */
    get: function (root, path, info) {
      let prop = root;
      let parts = this.split(path);
      // Loop over path parts[0..n-1] and dereference
      for (let i = 0; i < parts.length; i++) {
        if (!prop) {
          return;
        }
        let part = parts[i];
        prop = prop[part];
      }
      if (info) {
        info.path = parts.join('.');
      }
      return prop;
    },

    /**
     * Sets a value to a path.  If any sub-property in the path is `undefined`,
     * this method will no-op.
     *
     * @memberof Polymer.Path
     * @param {Object} root Object from which to dereference path from
     * @param {string | !Array<string|number>} path Path to set
     * @param {*} value Value to set to path
     * @return {string | undefined} The normalized version of the input path
     * @this {Path}
     */
    set: function (root, path, value) {
      let prop = root;
      let parts = this.split(path);
      let last = parts[parts.length - 1];
      if (parts.length > 1) {
        // Loop over path parts[0..n-2] and dereference
        for (let i = 0; i < parts.length - 1; i++) {
          let part = parts[i];
          prop = prop[part];
          if (!prop) {
            return;
          }
        }
        // Set value to object at end of path
        prop[last] = value;
      } else {
        // Simple property set
        prop[path] = value;
      }
      return parts.join('.');
    }

  };

  /**
   * Returns true if the given string is a structured data path (has dots).
   *
   * This function is deprecated.  Use `Polymer.Path.isPath` instead.
   *
   * Example:
   *
   * ```
   * Polymer.Path.isDeep('foo.bar.baz') // true
   * Polymer.Path.isDeep('foo')         // false
   * ```
   *
   * @deprecated
   * @memberof Polymer.Path
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */
  Path.isDeep = Path.isPath;

  Polymer.Path = Path;
})();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(2);

(function () {

  'use strict';

  // 1.x backwards-compatible auto-wrapper for template type extensions
  // This is a clear layering violation and gives favored-nation status to
  // dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
  // a.) to ease 1.x backwards-compatibility due to loss of `is`, and
  // b.) to maintain if/repeat capability in parser-constrained elements
  //     (e.g. table, select) in lieu of native CE type extensions without
  //     massive new invention in this space (e.g. directive system)

  const templateExtensions = {
    'dom-if': true,
    'dom-repeat': true
  };
  function wrapTemplateExtension(node) {
    let is = node.getAttribute('is');
    if (is && templateExtensions[is]) {
      let t = node;
      t.removeAttribute('is');
      node = t.ownerDocument.createElement(is);
      t.parentNode.replaceChild(node, t);
      node.appendChild(t);
      while (t.attributes.length) {
        node.setAttribute(t.attributes[0].name, t.attributes[0].value);
        t.removeAttribute(t.attributes[0].name);
      }
    }
    return node;
  }

  function findTemplateNode(root, nodeInfo) {
    // recursively ascend tree until we hit root
    let parent = nodeInfo.parentInfo && findTemplateNode(root, nodeInfo.parentInfo);
    // unwind the stack, returning the indexed node at each level
    if (parent) {
      // note: marginally faster than indexing via childNodes
      // (http://jsperf.com/childnodes-lookup)
      for (let n = parent.firstChild, i = 0; n; n = n.nextSibling) {
        if (nodeInfo.parentIndex === i++) {
          return n;
        }
      }
    } else {
      return root;
    }
  }

  // construct `$` map (from id annotations)
  function applyIdToMap(inst, map, node, nodeInfo) {
    if (nodeInfo.id) {
      map[nodeInfo.id] = node;
    }
  }

  // install event listeners (from event annotations)
  function applyEventListener(inst, node, nodeInfo) {
    if (nodeInfo.events && nodeInfo.events.length) {
      for (let j = 0, e$ = nodeInfo.events, e; j < e$.length && (e = e$[j]); j++) {
        inst._addMethodEventListenerToNode(node, e.name, e.value, inst);
      }
    }
  }

  // push configuration references at configure time
  function applyTemplateContent(inst, node, nodeInfo) {
    if (nodeInfo.templateInfo) {
      node._templateInfo = nodeInfo.templateInfo;
    }
  }

  function createNodeEventHandler(context, eventName, methodName) {
    // Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    context = context._methodHost || context;
    let handler = function (e) {
      if (context[methodName]) {
        context[methodName](e, e.detail);
      } else {
        console.warn('listener method `' + methodName + '` not defined');
      }
    };
    return handler;
  }

  /**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @memberof Polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */
  Polymer.TemplateStamp = Polymer.dedupingMixin(superClass => {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_TemplateStamp}
     */
    class TemplateStamp extends superClass {

      /**
       * Scans a template to produce template metadata.
       *
       * Template-specific metadata are stored in the object returned, and node-
       * specific metadata are stored in objects in its flattened `nodeInfoList`
       * array.  Only nodes in the template that were parsed as nodes of
       * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
       * contains an `index` (`childNodes` index in parent) and optionally
       * `parent`, which points to node info of its parent (including its index).
       *
       * The template metadata object returned from this method has the following
       * structure (many fields optional):
       *
       * ```js
       *   {
       *     // Flattened list of node metadata (for nodes that generated metadata)
       *     nodeInfoList: [
       *       {
       *         // `id` attribute for any nodes with id's for generating `$` map
       *         id: {string},
       *         // `on-event="handler"` metadata
       *         events: [
       *           {
       *             name: {string},   // event name
       *             value: {string},  // handler method name
       *           }, ...
       *         ],
       *         // Notes when the template contained a `<slot>` for shady DOM
       *         // optimization purposes
       *         hasInsertionPoint: {boolean},
       *         // For nested `<template>`` nodes, nested template metadata
       *         templateInfo: {object}, // nested template metadata
       *         // Metadata to allow efficient retrieval of instanced node
       *         // corresponding to this metadata
       *         parentInfo: {number},   // reference to parent nodeInfo>
       *         parentIndex: {number},  // index in parent's `childNodes` collection
       *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
       *       },
       *       ...
       *     ],
       *     // When true, the template had the `strip-whitespace` attribute
       *     // or was nested in a template with that setting
       *     stripWhitespace: {boolean},
       *     // For nested templates, nested template content is moved into
       *     // a document fragment stored here; this is an optimization to
       *     // avoid the cost of nested template cloning
       *     content: {DocumentFragment}
       *   }
       * ```
       *
       * This method kicks off a recursive treewalk as follows:
       *
       * ```
       *    _parseTemplate <---------------------+
       *      _parseTemplateContent              |
       *        _parseTemplateNode  <------------|--+
       *          _parseTemplateNestedTemplate --+  |
       *          _parseTemplateChildNodes ---------+
       *          _parseTemplateNodeAttributes
       *            _parseTemplateNodeAttribute
       *
       * ```
       *
       * These methods may be overridden to add custom metadata about templates
       * to either `templateInfo` or `nodeInfo`.
       *
       * Note that this method may be destructive to the template, in that
       * e.g. event annotations may be removed after being noted in the
       * template metadata.
       *
       * @param {!HTMLTemplateElement} template Template to parse
       * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
       *   template, for parsing nested templates
       * @return {!TemplateInfo} Parsed template metadata
       */
      static _parseTemplate(template, outerTemplateInfo) {
        // since a template may be re-used, memo-ize metadata
        if (!template._templateInfo) {
          let templateInfo = template._templateInfo = {};
          templateInfo.nodeInfoList = [];
          templateInfo.stripWhiteSpace = outerTemplateInfo && outerTemplateInfo.stripWhiteSpace || template.hasAttribute('strip-whitespace');
          this._parseTemplateContent(template, templateInfo, { parent: null });
        }
        return template._templateInfo;
      }

      static _parseTemplateContent(template, templateInfo, nodeInfo) {
        return this._parseTemplateNode(template.content, templateInfo, nodeInfo);
      }

      /**
       * Parses template node and adds template and node metadata based on
       * the current node, and its `childNodes` and `attributes`.
       *
       * This method may be overridden to add custom node or template specific
       * metadata based on this node.
       *
       * @param {Node} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */
      static _parseTemplateNode(node, templateInfo, nodeInfo) {
        let noted;
        let element = /** @type {Element} */node;
        if (element.localName == 'template' && !element.hasAttribute('preserve-content')) {
          noted = this._parseTemplateNestedTemplate(element, templateInfo, nodeInfo) || noted;
        } else if (element.localName === 'slot') {
          // For ShadyDom optimization, indicating there is an insertion point
          templateInfo.hasInsertionPoint = true;
        }
        if (element.firstChild) {
          noted = this._parseTemplateChildNodes(element, templateInfo, nodeInfo) || noted;
        }
        if (element.hasAttributes && element.hasAttributes()) {
          noted = this._parseTemplateNodeAttributes(element, templateInfo, nodeInfo) || noted;
        }
        return noted;
      }

      /**
       * Parses template child nodes for the given root node.
       *
       * This method also wraps whitelisted legacy template extensions
       * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
       * wrappers, collapses text nodes, and strips whitespace from the template
       * if the `templateInfo.stripWhitespace` setting was provided.
       *
       * @param {Node} root Root node whose `childNodes` will be parsed
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {void}
       */
      static _parseTemplateChildNodes(root, templateInfo, nodeInfo) {
        if (root.localName === 'script' || root.localName === 'style') {
          return;
        }
        for (let node = root.firstChild, parentIndex = 0, next; node; node = next) {
          // Wrap templates
          if (node.localName == 'template') {
            node = wrapTemplateExtension(node);
          }
          // collapse adjacent textNodes: fixes an IE issue that can cause
          // text nodes to be inexplicably split =(
          // note that root.normalize() should work but does not so we do this
          // manually.
          next = node.nextSibling;
          if (node.nodeType === Node.TEXT_NODE) {
            let /** Node */n = next;
            while (n && n.nodeType === Node.TEXT_NODE) {
              node.textContent += n.textContent;
              next = n.nextSibling;
              root.removeChild(n);
              n = next;
            }
            // optionally strip whitespace
            if (templateInfo.stripWhiteSpace && !node.textContent.trim()) {
              root.removeChild(node);
              continue;
            }
          }
          let childInfo = { parentIndex, parentInfo: nodeInfo };
          if (this._parseTemplateNode(node, templateInfo, childInfo)) {
            childInfo.infoIndex = templateInfo.nodeInfoList.push( /** @type {!NodeInfo} */childInfo) - 1;
          }
          // Increment if not removed
          if (node.parentNode) {
            parentIndex++;
          }
        }
      }

      /**
       * Parses template content for the given nested `<template>`.
       *
       * Nested template info is stored as `templateInfo` in the current node's
       * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
       * It will then be the responsibility of the host to set it back to the
       * template and for users stamping nested templates to use the
       * `_contentForTemplate` method to retrieve the content for this template
       * (an optimization to avoid the cost of cloning nested template content).
       *
       * @param {HTMLTemplateElement} node Node to parse (a <template>)
       * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
       *   that includes the template `node`
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */
      static _parseTemplateNestedTemplate(node, outerTemplateInfo, nodeInfo) {
        let templateInfo = this._parseTemplate(node, outerTemplateInfo);
        let content = templateInfo.content = node.content.ownerDocument.createDocumentFragment();
        content.appendChild(node.content);
        nodeInfo.templateInfo = templateInfo;
        return true;
      }

      /**
       * Parses template node attributes and adds node metadata to `nodeInfo`
       * for nodes of interest.
       *
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */
      static _parseTemplateNodeAttributes(node, templateInfo, nodeInfo) {
        // Make copy of original attribute list, since the order may change
        // as attributes are added and removed
        let noted = false;
        let attrs = Array.from(node.attributes);
        for (let i = attrs.length - 1, a; a = attrs[i]; i--) {
          noted = this._parseTemplateNodeAttribute(node, templateInfo, nodeInfo, a.name, a.value) || noted;
        }
        return noted;
      }

      /**
       * Parses a single template node attribute and adds node metadata to
       * `nodeInfo` for attributes of interest.
       *
       * This implementation adds metadata for `on-event="handler"` attributes
       * and `id` attributes.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */
      static _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
        // events (on-*)
        if (name.slice(0, 3) === 'on-') {
          node.removeAttribute(name);
          nodeInfo.events = nodeInfo.events || [];
          nodeInfo.events.push({
            name: name.slice(3),
            value
          });
          return true;
        }
        // static id
        else if (name === 'id') {
            nodeInfo.id = value;
            return true;
          }
        return false;
      }

      /**
       * Returns the `content` document fragment for a given template.
       *
       * For nested templates, Polymer performs an optimization to cache nested
       * template content to avoid the cost of cloning deeply nested templates.
       * This method retrieves the cached content for a given template.
       *
       * @param {HTMLTemplateElement} template Template to retrieve `content` for
       * @return {DocumentFragment} Content fragment
       */
      static _contentForTemplate(template) {
        let templateInfo = /** @type {HTMLTemplateElementWithInfo} */template._templateInfo;
        return templateInfo && templateInfo.content || template.content;
      }

      /**
       * Clones the provided template content and returns a document fragment
       * containing the cloned dom.
       *
       * The template is parsed (once and memoized) using this library's
       * template parsing features, and provides the following value-added
       * features:
       * * Adds declarative event listeners for `on-event="handler"` attributes
       * * Generates an "id map" for all nodes with id's under `$` on returned
       *   document fragment
       * * Passes template info including `content` back to templates as
       *   `_templateInfo` (a performance optimization to avoid deep template
       *   cloning)
       *
       * Note that the memoized template parsing process is destructive to the
       * template: attributes for bindings and declarative event listeners are
       * removed after being noted in notes, and any nested `<template>.content`
       * is removed and stored in notes as well.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       */
      _stampTemplate(template) {
        // Polyfill support: bootstrap the template if it has not already been
        if (template && !template.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
          HTMLTemplateElement.decorate(template);
        }
        let templateInfo = this.constructor._parseTemplate(template);
        let nodeInfo = templateInfo.nodeInfoList;
        let content = templateInfo.content || template.content;
        let dom = /** @type {DocumentFragment} */document.importNode(content, true);
        // NOTE: ShadyDom optimization indicating there is an insertion point
        dom.__noInsertionPoint = !templateInfo.hasInsertionPoint;
        let nodes = dom.nodeList = new Array(nodeInfo.length);
        dom.$ = {};
        for (let i = 0, l = nodeInfo.length, info; i < l && (info = nodeInfo[i]); i++) {
          let node = nodes[i] = findTemplateNode(dom, info);
          applyIdToMap(this, dom.$, node, info);
          applyTemplateContent(this, node, info);
          applyEventListener(this, node, info);
        }
        dom = /** @type {!StampedTemplate} */dom; // eslint-disable-line no-self-assign
        return dom;
      }

      /**
       * Adds an event listener by method name for the event provided.
       *
       * This method generates a handler function that looks up the method
       * name at handling time.
       *
       * @param {!Node} node Node to add listener on
       * @param {string} eventName Name of event
       * @param {string} methodName Name of method
       * @param {*=} context Context the method will be called on (defaults
       *   to `node`)
       * @return {Function} Generated handler function
       */
      _addMethodEventListenerToNode(node, eventName, methodName, context) {
        context = context || node;
        let handler = createNodeEventHandler(context, eventName, methodName);
        this._addEventListenerToNode(node, eventName, handler);
        return handler;
      }

      /**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!Node} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       */
      _addEventListenerToNode(node, eventName, handler) {
        node.addEventListener(eventName, handler);
      }

      /**
       * Override point for adding custom or simulated event handling.
       *
       * @param {Node} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       */
      _removeEventListenerFromNode(node, eventName, handler) {
        node.removeEventListener(eventName, handler);
      }

    }

    return TemplateStamp;
  });
})();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(2);

__webpack_require__(20);

(function () {
  'use strict';

  /**
   * Creates a copy of `props` with each property normalized such that
   * upgraded it is an object with at least a type property { type: Type}.
   *
   * @param {Object} props Properties to normalize
   * @return {Object} Copy of input `props` with normalized properties that
   * are in the form {type: Type}
   * @private
   */

  function normalizeProperties(props) {
    const output = {};
    for (let p in props) {
      const o = props[p];
      output[p] = typeof o === 'function' ? { type: o } : o;
    }
    return output;
  }

  /**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin Polymer.PropertiesChanged
   * @memberof Polymer
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   */
  Polymer.PropertiesMixin = Polymer.dedupingMixin(superClass => {

    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertiesChanged}
     */
    const base = Polymer.PropertiesChanged(superClass);

    /**
     * Returns the super class constructor for the given class, if it is an
     * instance of the PropertiesMixin.
     *
     * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {PropertiesMixinConstructor} Super class constructor
     */
    function superPropertiesClass(constructor) {
      const superCtor = Object.getPrototypeOf(constructor);

      // Note, the `PropertiesMixin` class below only refers to the class
      // generated by this call to the mixin; the instanceof test only works
      // because the mixin is deduped and guaranteed only to apply once, hence
      // all constructors in a proto chain will see the same `PropertiesMixin`
      return superCtor.prototype instanceof PropertiesMixin ?
      /** @type {PropertiesMixinConstructor} */superCtor : null;
    }

    /**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */
    function ownProperties(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
        let props = null;

        if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor)) && constructor.properties) {
          props = normalizeProperties(constructor.properties);
        }

        constructor.__ownProperties = props;
      }
      return constructor.__ownProperties;
    }

    /**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */
    class PropertiesMixin extends base {

      /**
       * Implements standard custom elements getter to observes the attributes
       * listed in `properties`.
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */
      static get observedAttributes() {
        const props = this._properties;
        return props ? Object.keys(props).map(p => this.attributeNameForProperty(p)) : [];
      }

      /**
       * Finalizes an element definition, including ensuring any super classes
       * are also finalized. This includes ensuring property
       * accessors exist on the element prototype. This method calls
       * `_finalizeClass` to finalize each constructor in the prototype chain.
       * @return {void}
       */
      static finalize() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
          const superCtor = superPropertiesClass( /** @type {PropertiesMixinConstructor} */this);
          if (superCtor) {
            superCtor.finalize();
          }
          this.__finalized = true;
          this._finalizeClass();
        }
      }

      /**
       * Finalize an element class. This includes ensuring property
       * accessors exist on the element prototype. This method is called by
       * `finalize` and finalizes the class constructor.
       *
       * @protected
       */
      static _finalizeClass() {
        const props = ownProperties( /** @type {PropertiesMixinConstructor} */this);
        if (props) {
          this.createProperties(props);
        }
      }

      /**
       * Returns a memoized version of all properties, including those inherited
       * from super classes. Properties not in object format are converted to
       * at least {type}.
       *
       * @return {Object} Object containing properties for this class
       * @protected
       */
      static get _properties() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty('__properties', this))) {
          const superCtor = superPropertiesClass( /** @type {PropertiesMixinConstructor} */this);
          this.__properties = Object.assign({}, superCtor && superCtor._properties, ownProperties( /** @type {PropertiesMixinConstructor} */this));
        }
        return this.__properties;
      }

      /**
       * Overrides `PropertiesChanged` method to return type specified in the
       * static `properties` object for the given property.
       * @param {string} name Name of property
       * @return {*} Type to which to deserialize attribute
       *
       * @protected
       */
      static typeForProperty(name) {
        const info = this._properties[name];
        return info && info.type;
      }

      /**
       * Overrides `PropertiesChanged` method and adds a call to
       * `finalize` which lazily configures the element's property accessors.
       * @override
       * @return {void}
       */
      _initializeProperties() {
        this.constructor.finalize();
        super._initializeProperties();
      }

      /**
       * Called when the element is added to a document.
       * Calls `_enableProperties` to turn on property system from
       * `PropertiesChanged`.
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       */
      connectedCallback() {
        if (super.connectedCallback) {
          super.connectedCallback();
        }
        this._enableProperties();
      }

      /**
       * Called when the element is removed from a document
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       */
      disconnectedCallback() {
        if (super.disconnectedCallback) {
          super.disconnectedCallback();
        }
      }

    }

    return PropertiesMixin;
  });
})();

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(5);

__webpack_require__(8);

(function () {

  'use strict';

  // detect native touch action support

  let HAS_NATIVE_TA = typeof document.head.style.touchAction === 'string';
  let GESTURE_KEY = '__polymerGestures';
  let HANDLED_OBJ = '__polymerGesturesHandled';
  let TOUCH_ACTION = '__polymerGesturesTouchAction';
  // radius for tap and track
  let TAP_DISTANCE = 25;
  let TRACK_DISTANCE = 5;
  // number of last N track positions to keep
  let TRACK_LENGTH = 2;

  // Disabling "mouse" handlers for 2500ms is enough
  let MOUSE_TIMEOUT = 2500;
  let MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'click'];
  // an array of bitmask values for mapping MouseEvent.which to MouseEvent.buttons
  let MOUSE_WHICH_TO_BUTTONS = [0, 1, 4, 2];
  let MOUSE_HAS_BUTTONS = function () {
    try {
      return new MouseEvent('test', { buttons: 1 }).buttons === 1;
    } catch (e) {
      return false;
    }
  }();

  /**
   * @param {string} name Possible mouse event name
   * @return {boolean} true if mouse event, false if not
   */
  function isMouseEvent(name) {
    return MOUSE_EVENTS.indexOf(name) > -1;
  }

  /* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
  // check for passive event listeners
  let SUPPORTS_PASSIVE = false;
  (function () {
    try {
      let opts = Object.defineProperty({}, 'passive', { get() {
          SUPPORTS_PASSIVE = true;
        } });
      window.addEventListener('test', null, opts);
      window.removeEventListener('test', null, opts);
    } catch (e) {}
  })();

  /**
   * Generate settings for event listeners, dependant on `Polymer.passiveTouchGestures`
   *
   * @param {string} eventName Event name to determine if `{passive}` option is needed
   * @return {{passive: boolean} | undefined} Options to use for addEventListener and removeEventListener
   */
  function PASSIVE_TOUCH(eventName) {
    if (isMouseEvent(eventName) || eventName === 'touchend') {
      return;
    }
    if (HAS_NATIVE_TA && SUPPORTS_PASSIVE && Polymer.passiveTouchGestures) {
      return { passive: true };
    } else {
      return;
    }
  }

  // Check for touch-only devices
  let IS_TOUCH_ONLY = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);

  let GestureRecognizer = function () {}; // eslint-disable-line no-unused-vars
  /** @type {function(): void} */
  GestureRecognizer.prototype.reset;
  /** @type {function(MouseEvent): void | undefined} */
  GestureRecognizer.prototype.mousedown;
  /** @type {(function(MouseEvent): void | undefined)} */
  GestureRecognizer.prototype.mousemove;
  /** @type {(function(MouseEvent): void | undefined)} */
  GestureRecognizer.prototype.mouseup;
  /** @type {(function(TouchEvent): void | undefined)} */
  GestureRecognizer.prototype.touchstart;
  /** @type {(function(TouchEvent): void | undefined)} */
  GestureRecognizer.prototype.touchmove;
  /** @type {(function(TouchEvent): void | undefined)} */
  GestureRecognizer.prototype.touchend;
  /** @type {(function(MouseEvent): void | undefined)} */
  GestureRecognizer.prototype.click;

  // touch will make synthetic mouse events
  // `preventDefault` on touchend will cancel them,
  // but this breaks `<input>` focus and link clicks
  // disable mouse handlers for MOUSE_TIMEOUT ms after
  // a touchend to ignore synthetic mouse events
  let mouseCanceller = function (mouseEvent) {
    // Check for sourceCapabilities, used to distinguish synthetic events
    // if mouseEvent did not come from a device that fires touch events,
    // it was made by a real mouse and should be counted
    // http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
    let sc = mouseEvent.sourceCapabilities;
    if (sc && !sc.firesTouchEvents) {
      return;
    }
    // skip synthetic mouse events
    mouseEvent[HANDLED_OBJ] = { skip: true };
    // disable "ghost clicks"
    if (mouseEvent.type === 'click') {
      let path = mouseEvent.composedPath && mouseEvent.composedPath();
      if (path) {
        for (let i = 0; i < path.length; i++) {
          if (path[i] === POINTERSTATE.mouse.target) {
            return;
          }
        }
      }
      mouseEvent.preventDefault();
      mouseEvent.stopPropagation();
    }
  };

  /**
   * @param {boolean=} setup True to add, false to remove.
   * @return {void}
   */
  function setupTeardownMouseCanceller(setup) {
    let events = IS_TOUCH_ONLY ? ['click'] : MOUSE_EVENTS;
    for (let i = 0, en; i < events.length; i++) {
      en = events[i];
      if (setup) {
        document.addEventListener(en, mouseCanceller, true);
      } else {
        document.removeEventListener(en, mouseCanceller, true);
      }
    }
  }

  function ignoreMouse(e) {
    if (!POINTERSTATE.mouse.mouseIgnoreJob) {
      setupTeardownMouseCanceller(true);
    }
    let unset = function () {
      setupTeardownMouseCanceller();
      POINTERSTATE.mouse.target = null;
      POINTERSTATE.mouse.mouseIgnoreJob = null;
    };
    POINTERSTATE.mouse.target = e.composedPath()[0];
    POINTERSTATE.mouse.mouseIgnoreJob = Polymer.Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob, Polymer.Async.timeOut.after(MOUSE_TIMEOUT), unset);
  }

  /**
   * @param {MouseEvent} ev event to test for left mouse button down
   * @return {boolean} has left mouse button down
   */
  function hasLeftMouseButton(ev) {
    let type = ev.type;
    // exit early if the event is not a mouse event
    if (!isMouseEvent(type)) {
      return false;
    }
    // ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
    // instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
    if (type === 'mousemove') {
      // allow undefined for testing events
      let buttons = ev.buttons === undefined ? 1 : ev.buttons;
      if (ev instanceof window.MouseEvent && !MOUSE_HAS_BUTTONS) {
        buttons = MOUSE_WHICH_TO_BUTTONS[ev.which] || 0;
      }
      // buttons is a bitmask, check that the left button bit is set (1)
      return Boolean(buttons & 1);
    } else {
      // allow undefined for testing events
      let button = ev.button === undefined ? 0 : ev.button;
      // ev.button is 0 in mousedown/mouseup/click for left button activation
      return button === 0;
    }
  }

  function isSyntheticClick(ev) {
    if (ev.type === 'click') {
      // ev.detail is 0 for HTMLElement.click in most browsers
      if (ev.detail === 0) {
        return true;
      }
      // in the worst case, check that the x/y position of the click is within
      // the bounding box of the target of the event
      // Thanks IE 10 >:(
      let t = Gestures._findOriginalTarget(ev);
      // make sure the target of the event is an element so we can use getBoundingClientRect,
      // if not, just assume it is a synthetic click
      if (!t.nodeType || /** @type {Element} */t.nodeType !== Node.ELEMENT_NODE) {
        return true;
      }
      let bcr = /** @type {Element} */t.getBoundingClientRect();
      // use page x/y to account for scrolling
      let x = ev.pageX,
          y = ev.pageY;
      // ev is a synthetic click if the position is outside the bounding box of the target
      return !(x >= bcr.left && x <= bcr.right && y >= bcr.top && y <= bcr.bottom);
    }
    return false;
  }

  let POINTERSTATE = {
    mouse: {
      target: null,
      mouseIgnoreJob: null
    },
    touch: {
      x: 0,
      y: 0,
      id: -1,
      scrollDecided: false
    }
  };

  function firstTouchAction(ev) {
    let ta = 'auto';
    let path = ev.composedPath && ev.composedPath();
    if (path) {
      for (let i = 0, n; i < path.length; i++) {
        n = path[i];
        if (n[TOUCH_ACTION]) {
          ta = n[TOUCH_ACTION];
          break;
        }
      }
    }
    return ta;
  }

  function trackDocument(stateObj, movefn, upfn) {
    stateObj.movefn = movefn;
    stateObj.upfn = upfn;
    document.addEventListener('mousemove', movefn);
    document.addEventListener('mouseup', upfn);
  }

  function untrackDocument(stateObj) {
    document.removeEventListener('mousemove', stateObj.movefn);
    document.removeEventListener('mouseup', stateObj.upfn);
    stateObj.movefn = null;
    stateObj.upfn = null;
  }

  // use a document-wide touchend listener to start the ghost-click prevention mechanism
  // Use passive event listeners, if supported, to not affect scrolling performance
  document.addEventListener('touchend', ignoreMouse, SUPPORTS_PASSIVE ? { passive: true } : false);

  /**
   * Module for adding listeners to a node for the following normalized
   * cross-platform "gesture" events:
   * - `down` - mouse or touch went down
   * - `up` - mouse or touch went up
   * - `tap` - mouse click or finger tap
   * - `track` - mouse drag or touch move
   *
   * @namespace
   * @memberof Polymer
   * @summary Module for adding cross-platform gesture event listeners.
   */
  const Gestures = {
    gestures: {},
    recognizers: [],

    /**
     * Finds the element rendered on the screen at the provided coordinates.
     *
     * Similar to `document.elementFromPoint`, but pierces through
     * shadow roots.
     *
     * @memberof Polymer.Gestures
     * @param {number} x Horizontal pixel coordinate
     * @param {number} y Vertical pixel coordinate
     * @return {Element} Returns the deepest shadowRoot inclusive element
     * found at the screen position given.
     */
    deepTargetFind: function (x, y) {
      let node = document.elementFromPoint(x, y);
      let next = node;
      // this code path is only taken when native ShadowDOM is used
      // if there is a shadowroot, it may have a node at x/y
      // if there is not a shadowroot, exit the loop
      while (next && next.shadowRoot && !window.ShadyDOM) {
        // if there is a node at x/y in the shadowroot, look deeper
        let oldNext = next;
        next = next.shadowRoot.elementFromPoint(x, y);
        // on Safari, elementFromPoint may return the shadowRoot host
        if (oldNext === next) {
          break;
        }
        if (next) {
          node = next;
        }
      }
      return node;
    },
    /**
     * a cheaper check than ev.composedPath()[0];
     *
     * @private
     * @param {Event} ev Event.
     * @return {EventTarget} Returns the event target.
     */
    _findOriginalTarget: function (ev) {
      // shadowdom
      if (ev.composedPath) {
        const targets = /** @type {!Array<!EventTarget>} */ev.composedPath();
        // It shouldn't be, but sometimes targets is empty (window on Safari).
        return targets.length > 0 ? targets[0] : ev.target;
      }
      // shadydom
      return ev.target;
    },

    /**
     * @private
     * @param {Event} ev Event.
     * @return {void}
     */
    _handleNative: function (ev) {
      let handled;
      let type = ev.type;
      let node = ev.currentTarget;
      let gobj = node[GESTURE_KEY];
      if (!gobj) {
        return;
      }
      let gs = gobj[type];
      if (!gs) {
        return;
      }
      if (!ev[HANDLED_OBJ]) {
        ev[HANDLED_OBJ] = {};
        if (type.slice(0, 5) === 'touch') {
          ev = /** @type {TouchEvent} */ev; // eslint-disable-line no-self-assign
          let t = ev.changedTouches[0];
          if (type === 'touchstart') {
            // only handle the first finger
            if (ev.touches.length === 1) {
              POINTERSTATE.touch.id = t.identifier;
            }
          }
          if (POINTERSTATE.touch.id !== t.identifier) {
            return;
          }
          if (!HAS_NATIVE_TA) {
            if (type === 'touchstart' || type === 'touchmove') {
              Gestures._handleTouchAction(ev);
            }
          }
        }
      }
      handled = ev[HANDLED_OBJ];
      // used to ignore synthetic mouse events
      if (handled.skip) {
        return;
      }
      // reset recognizer state
      for (let i = 0, r; i < Gestures.recognizers.length; i++) {
        r = Gestures.recognizers[i];
        if (gs[r.name] && !handled[r.name]) {
          if (r.flow && r.flow.start.indexOf(ev.type) > -1 && r.reset) {
            r.reset();
          }
        }
      }
      // enforce gesture recognizer order
      for (let i = 0, r; i < Gestures.recognizers.length; i++) {
        r = Gestures.recognizers[i];
        if (gs[r.name] && !handled[r.name]) {
          handled[r.name] = true;
          r[type](ev);
        }
      }
    },

    /**
     * @private
     * @param {TouchEvent} ev Event.
     * @return {void}
     */
    _handleTouchAction: function (ev) {
      let t = ev.changedTouches[0];
      let type = ev.type;
      if (type === 'touchstart') {
        POINTERSTATE.touch.x = t.clientX;
        POINTERSTATE.touch.y = t.clientY;
        POINTERSTATE.touch.scrollDecided = false;
      } else if (type === 'touchmove') {
        if (POINTERSTATE.touch.scrollDecided) {
          return;
        }
        POINTERSTATE.touch.scrollDecided = true;
        let ta = firstTouchAction(ev);
        let prevent = false;
        let dx = Math.abs(POINTERSTATE.touch.x - t.clientX);
        let dy = Math.abs(POINTERSTATE.touch.y - t.clientY);
        if (!ev.cancelable) {
          // scrolling is happening
        } else if (ta === 'none') {
          prevent = true;
        } else if (ta === 'pan-x') {
          prevent = dy > dx;
        } else if (ta === 'pan-y') {
          prevent = dx > dy;
        }
        if (prevent) {
          ev.preventDefault();
        } else {
          Gestures.prevent('track');
        }
      }
    },

    /**
     * Adds an event listener to a node for the given gesture type.
     *
     * @memberof Polymer.Gestures
     * @param {!Node} node Node to add listener on
     * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
     * @param {!function(!Event):void} handler Event listener function to call
     * @return {boolean} Returns true if a gesture event listener was added.
     * @this {Gestures}
     */
    addListener: function (node, evType, handler) {
      if (this.gestures[evType]) {
        this._add(node, evType, handler);
        return true;
      }
      return false;
    },

    /**
     * Removes an event listener from a node for the given gesture type.
     *
     * @memberof Polymer.Gestures
     * @param {!Node} node Node to remove listener from
     * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
     * @param {!function(!Event):void} handler Event listener function previously passed to
     *  `addListener`.
     * @return {boolean} Returns true if a gesture event listener was removed.
     * @this {Gestures}
     */
    removeListener: function (node, evType, handler) {
      if (this.gestures[evType]) {
        this._remove(node, evType, handler);
        return true;
      }
      return false;
    },

    /**
     * automate the event listeners for the native events
     *
     * @private
     * @param {!HTMLElement} node Node on which to add the event.
     * @param {string} evType Event type to add.
     * @param {function(!Event)} handler Event handler function.
     * @return {void}
     * @this {Gestures}
     */
    _add: function (node, evType, handler) {
      let recognizer = this.gestures[evType];
      let deps = recognizer.deps;
      let name = recognizer.name;
      let gobj = node[GESTURE_KEY];
      if (!gobj) {
        node[GESTURE_KEY] = gobj = {};
      }
      for (let i = 0, dep, gd; i < deps.length; i++) {
        dep = deps[i];
        // don't add mouse handlers on iOS because they cause gray selection overlays
        if (IS_TOUCH_ONLY && isMouseEvent(dep) && dep !== 'click') {
          continue;
        }
        gd = gobj[dep];
        if (!gd) {
          gobj[dep] = gd = { _count: 0 };
        }
        if (gd._count === 0) {
          node.addEventListener(dep, this._handleNative, PASSIVE_TOUCH(dep));
        }
        gd[name] = (gd[name] || 0) + 1;
        gd._count = (gd._count || 0) + 1;
      }
      node.addEventListener(evType, handler);
      if (recognizer.touchAction) {
        this.setTouchAction(node, recognizer.touchAction);
      }
    },

    /**
     * automate event listener removal for native events
     *
     * @private
     * @param {!HTMLElement} node Node on which to remove the event.
     * @param {string} evType Event type to remove.
     * @param {function(Event?)} handler Event handler function.
     * @return {void}
     * @this {Gestures}
     */
    _remove: function (node, evType, handler) {
      let recognizer = this.gestures[evType];
      let deps = recognizer.deps;
      let name = recognizer.name;
      let gobj = node[GESTURE_KEY];
      if (gobj) {
        for (let i = 0, dep, gd; i < deps.length; i++) {
          dep = deps[i];
          gd = gobj[dep];
          if (gd && gd[name]) {
            gd[name] = (gd[name] || 1) - 1;
            gd._count = (gd._count || 1) - 1;
            if (gd._count === 0) {
              node.removeEventListener(dep, this._handleNative, PASSIVE_TOUCH(dep));
            }
          }
        }
      }
      node.removeEventListener(evType, handler);
    },

    /**
     * Registers a new gesture event recognizer for adding new custom
     * gesture event types.
     *
     * @memberof Polymer.Gestures
     * @param {!GestureRecognizer} recog Gesture recognizer descriptor
     * @return {void}
     * @this {Gestures}
     */
    register: function (recog) {
      this.recognizers.push(recog);
      for (let i = 0; i < recog.emits.length; i++) {
        this.gestures[recog.emits[i]] = recog;
      }
    },

    /**
     * @private
     * @param {string} evName Event name.
     * @return {Object} Returns the gesture for the given event name.
     * @this {Gestures}
     */
    _findRecognizerByEvent: function (evName) {
      for (let i = 0, r; i < this.recognizers.length; i++) {
        r = this.recognizers[i];
        for (let j = 0, n; j < r.emits.length; j++) {
          n = r.emits[j];
          if (n === evName) {
            return r;
          }
        }
      }
      return null;
    },

    /**
     * Sets scrolling direction on node.
     *
     * This value is checked on first move, thus it should be called prior to
     * adding event listeners.
     *
     * @memberof Polymer.Gestures
     * @param {!Element} node Node to set touch action setting on
     * @param {string} value Touch action value
     * @return {void}
     */
    setTouchAction: function (node, value) {
      if (HAS_NATIVE_TA) {
        // NOTE: add touchAction async so that events can be added in
        // custom element constructors. Otherwise we run afoul of custom
        // elements restriction against settings attributes (style) in the
        // constructor.
        Polymer.Async.microTask.run(() => {
          node.style.touchAction = value;
        });
      }
      node[TOUCH_ACTION] = value;
    },

    /**
     * Dispatches an event on the `target` element of `type` with the given
     * `detail`.
     * @private
     * @param {!EventTarget} target The element on which to fire an event.
     * @param {string} type The type of event to fire.
     * @param {!Object=} detail The detail object to populate on the event.
     * @return {void}
     */
    _fire: function (target, type, detail) {
      let ev = new Event(type, { bubbles: true, cancelable: true, composed: true });
      ev.detail = detail;
      target.dispatchEvent(ev);
      // forward `preventDefault` in a clean way
      if (ev.defaultPrevented) {
        let preventer = detail.preventer || detail.sourceEvent;
        if (preventer && preventer.preventDefault) {
          preventer.preventDefault();
        }
      }
    },

    /**
     * Prevents the dispatch and default action of the given event name.
     *
     * @memberof Polymer.Gestures
     * @param {string} evName Event name.
     * @return {void}
     * @this {Gestures}
     */
    prevent: function (evName) {
      let recognizer = this._findRecognizerByEvent(evName);
      if (recognizer.info) {
        recognizer.info.prevent = true;
      }
    },

    /**
     * Reset the 2500ms timeout on processing mouse input after detecting touch input.
     *
     * Touch inputs create synthesized mouse inputs anywhere from 0 to 2000ms after the touch.
     * This method should only be called during testing with simulated touch inputs.
     * Calling this method in production may cause duplicate taps or other Gestures.
     *
     * @memberof Polymer.Gestures
     * @return {void}
     */
    resetMouseCanceller: function () {
      if (POINTERSTATE.mouse.mouseIgnoreJob) {
        POINTERSTATE.mouse.mouseIgnoreJob.flush();
      }
    }
  };

  /* eslint-disable valid-jsdoc */

  Gestures.register({
    name: 'downup',
    deps: ['mousedown', 'touchstart', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['mouseup', 'touchend']
    },
    emits: ['down', 'up'],

    info: {
      movefn: null,
      upfn: null
    },

    /**
     * @this {GestureRecognizer}
     * @return {void}
     */
    reset: function () {
      untrackDocument(this.info);
    },

    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    mousedown: function (e) {
      if (!hasLeftMouseButton(e)) {
        return;
      }
      let t = Gestures._findOriginalTarget(e);
      let self = this;
      let movefn = function movefn(e) {
        if (!hasLeftMouseButton(e)) {
          self._fire('up', t, e);
          untrackDocument(self.info);
        }
      };
      let upfn = function upfn(e) {
        if (hasLeftMouseButton(e)) {
          self._fire('up', t, e);
        }
        untrackDocument(self.info);
      };
      trackDocument(this.info, movefn, upfn);
      this._fire('down', t, e);
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchstart: function (e) {
      this._fire('down', Gestures._findOriginalTarget(e), e.changedTouches[0], e);
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchend: function (e) {
      this._fire('up', Gestures._findOriginalTarget(e), e.changedTouches[0], e);
    },
    /**
     * @param {string} type
     * @param {!EventTarget} target
     * @param {Event} event
     * @param {Function} preventer
     * @return {void}
     */
    _fire: function (type, target, event, preventer) {
      Gestures._fire(target, type, {
        x: event.clientX,
        y: event.clientY,
        sourceEvent: event,
        preventer: preventer,
        prevent: function (e) {
          return Gestures.prevent(e);
        }
      });
    }
  });

  Gestures.register({
    name: 'track',
    touchAction: 'none',
    deps: ['mousedown', 'touchstart', 'touchmove', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['mouseup', 'touchend']
    },
    emits: ['track'],

    info: {
      x: 0,
      y: 0,
      state: 'start',
      started: false,
      moves: [],
      /** @this {GestureRecognizer} */
      addMove: function (move) {
        if (this.moves.length > TRACK_LENGTH) {
          this.moves.shift();
        }
        this.moves.push(move);
      },
      movefn: null,
      upfn: null,
      prevent: false
    },

    /**
     * @this {GestureRecognizer}
     * @return {void}
     */
    reset: function () {
      this.info.state = 'start';
      this.info.started = false;
      this.info.moves = [];
      this.info.x = 0;
      this.info.y = 0;
      this.info.prevent = false;
      untrackDocument(this.info);
    },

    /**
     * @this {GestureRecognizer}
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    hasMovedEnough: function (x, y) {
      if (this.info.prevent) {
        return false;
      }
      if (this.info.started) {
        return true;
      }
      let dx = Math.abs(this.info.x - x);
      let dy = Math.abs(this.info.y - y);
      return dx >= TRACK_DISTANCE || dy >= TRACK_DISTANCE;
    },
    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    mousedown: function (e) {
      if (!hasLeftMouseButton(e)) {
        return;
      }
      let t = Gestures._findOriginalTarget(e);
      let self = this;
      let movefn = function movefn(e) {
        let x = e.clientX,
            y = e.clientY;
        if (self.hasMovedEnough(x, y)) {
          // first move is 'start', subsequent moves are 'move', mouseup is 'end'
          self.info.state = self.info.started ? e.type === 'mouseup' ? 'end' : 'track' : 'start';
          if (self.info.state === 'start') {
            // if and only if tracking, always prevent tap
            Gestures.prevent('tap');
          }
          self.info.addMove({ x: x, y: y });
          if (!hasLeftMouseButton(e)) {
            // always _fire "end"
            self.info.state = 'end';
            untrackDocument(self.info);
          }
          self._fire(t, e);
          self.info.started = true;
        }
      };
      let upfn = function upfn(e) {
        if (self.info.started) {
          movefn(e);
        }

        // remove the temporary listeners
        untrackDocument(self.info);
      };
      // add temporary document listeners as mouse retargets
      trackDocument(this.info, movefn, upfn);
      this.info.x = e.clientX;
      this.info.y = e.clientY;
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchstart: function (e) {
      let ct = e.changedTouches[0];
      this.info.x = ct.clientX;
      this.info.y = ct.clientY;
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchmove: function (e) {
      let t = Gestures._findOriginalTarget(e);
      let ct = e.changedTouches[0];
      let x = ct.clientX,
          y = ct.clientY;
      if (this.hasMovedEnough(x, y)) {
        if (this.info.state === 'start') {
          // if and only if tracking, always prevent tap
          Gestures.prevent('tap');
        }
        this.info.addMove({ x: x, y: y });
        this._fire(t, ct);
        this.info.state = 'track';
        this.info.started = true;
      }
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchend: function (e) {
      let t = Gestures._findOriginalTarget(e);
      let ct = e.changedTouches[0];
      // only trackend if track was started and not aborted
      if (this.info.started) {
        // reset started state on up
        this.info.state = 'end';
        this.info.addMove({ x: ct.clientX, y: ct.clientY });
        this._fire(t, ct, e);
      }
    },

    /**
     * @this {GestureRecognizer}
     * @param {!EventTarget} target
     * @param {Touch} touch
     * @return {void}
     */
    _fire: function (target, touch) {
      let secondlast = this.info.moves[this.info.moves.length - 2];
      let lastmove = this.info.moves[this.info.moves.length - 1];
      let dx = lastmove.x - this.info.x;
      let dy = lastmove.y - this.info.y;
      let ddx,
          ddy = 0;
      if (secondlast) {
        ddx = lastmove.x - secondlast.x;
        ddy = lastmove.y - secondlast.y;
      }
      Gestures._fire(target, 'track', {
        state: this.info.state,
        x: touch.clientX,
        y: touch.clientY,
        dx: dx,
        dy: dy,
        ddx: ddx,
        ddy: ddy,
        sourceEvent: touch,
        hover: function () {
          return Gestures.deepTargetFind(touch.clientX, touch.clientY);
        }
      });
    }

  });

  Gestures.register({
    name: 'tap',
    deps: ['mousedown', 'click', 'touchstart', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['click', 'touchend']
    },
    emits: ['tap'],
    info: {
      x: NaN,
      y: NaN,
      prevent: false
    },
    /**
     * @this {GestureRecognizer}
     * @return {void}
     */
    reset: function () {
      this.info.x = NaN;
      this.info.y = NaN;
      this.info.prevent = false;
    },
    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    save: function (e) {
      this.info.x = e.clientX;
      this.info.y = e.clientY;
    },
    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    mousedown: function (e) {
      if (hasLeftMouseButton(e)) {
        this.save(e);
      }
    },
    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    click: function (e) {
      if (hasLeftMouseButton(e)) {
        this.forward(e);
      }
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchstart: function (e) {
      this.save(e.changedTouches[0], e);
    },
    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchend: function (e) {
      this.forward(e.changedTouches[0], e);
    },
    /**
     * @this {GestureRecognizer}
     * @param {Event | Touch} e
     * @param {Event=} preventer
     * @return {void}
     */
    forward: function (e, preventer) {
      let dx = Math.abs(e.clientX - this.info.x);
      let dy = Math.abs(e.clientY - this.info.y);
      // find original target from `preventer` for TouchEvents, or `e` for MouseEvents
      let t = Gestures._findOriginalTarget( /** @type {Event} */preventer || e);
      if (!t) {
        return;
      }
      // dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`
      if (isNaN(dx) || isNaN(dy) || dx <= TAP_DISTANCE && dy <= TAP_DISTANCE || isSyntheticClick(e)) {
        // prevent taps from being generated if an event has canceled them
        if (!this.info.prevent) {
          Gestures._fire(t, 'tap', {
            x: e.clientX,
            y: e.clientY,
            sourceEvent: e,
            preventer: preventer
          });
        }
      }
    }
  });

  /* eslint-enable valid-jsdoc */

  /** @deprecated */
  Gestures.findOriginalTarget = Gestures._findOriginalTarget;

  /** @deprecated */
  Gestures.add = Gestures.addListener;

  /** @deprecated */
  Gestures.remove = Gestures.removeListener;

  Polymer.Gestures = Gestures;
})();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(19);

(function () {
  'use strict';

  const HOST_DIR = /:host\(:dir\((ltr|rtl)\)\)/g;
  const HOST_DIR_REPLACMENT = ':host([dir="$1"])';

  const EL_DIR = /([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g;
  const EL_DIR_REPLACMENT = ':host([dir="$2"]) $1';

  /**
   * @type {!Array<!Polymer_DirMixin>}
   */
  const DIR_INSTANCES = [];

  /** @type {MutationObserver} */
  let observer = null;

  let DOCUMENT_DIR = '';

  function getRTL() {
    DOCUMENT_DIR = document.documentElement.getAttribute('dir');
  }

  /**
   * @param {!Polymer_DirMixin} instance Instance to set RTL status on
   */
  function setRTL(instance) {
    if (!instance.__autoDirOptOut) {
      const el = /** @type {!HTMLElement} */instance;
      el.setAttribute('dir', DOCUMENT_DIR);
    }
  }

  function updateDirection() {
    getRTL();
    DOCUMENT_DIR = document.documentElement.getAttribute('dir');
    for (let i = 0; i < DIR_INSTANCES.length; i++) {
      setRTL(DIR_INSTANCES[i]);
    }
  }

  function takeRecords() {
    if (observer && observer.takeRecords().length) {
      updateDirection();
    }
  }

  /**
   * Element class mixin that allows elements to use the `:dir` CSS Selector to have
   * text direction specific styling.
   *
   * With this mixin, any stylesheet provided in the template will transform `:dir` into
   * `:host([dir])` and sync direction with the page via the element's `dir` attribute.
   *
   * Elements can opt out of the global page text direction by setting the `dir` attribute
   * directly in `ready()` or in HTML.
   *
   * Caveats:
   * - Applications must set `<html dir="ltr">` or `<html dir="rtl">` to sync direction
   * - Automatic left-to-right or right-to-left styling is sync'd with the `<html>` element only.
   * - Changing `dir` at runtime is supported.
   * - Opting out of the global direction styling is permanent
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin Polymer.PropertyAccessors
   * @memberof Polymer
   */
  Polymer.DirMixin = Polymer.dedupingMixin(base => {

    if (!observer) {
      getRTL();
      observer = new MutationObserver(updateDirection);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
    }

    /**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyAccessors}
     */
    const elementBase = Polymer.PropertyAccessors(base);

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_DirMixin}
     */
    class Dir extends elementBase {

      /**
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */
      static _processStyleText(cssText, baseURI) {
        cssText = super._processStyleText(cssText, baseURI);
        cssText = this._replaceDirInCssText(cssText);
        return cssText;
      }

      /**
       * Replace `:dir` in the given CSS text
       *
       * @param {string} text CSS text to replace DIR
       * @return {string} Modified CSS
       */
      static _replaceDirInCssText(text) {
        let replacedText = text;
        replacedText = replacedText.replace(HOST_DIR, HOST_DIR_REPLACMENT);
        replacedText = replacedText.replace(EL_DIR, EL_DIR_REPLACMENT);
        if (text !== replacedText) {
          this.__activateDir = true;
        }
        return replacedText;
      }

      constructor() {
        super();
        /** @type {boolean} */
        this.__autoDirOptOut = false;
      }

      /**
       * @suppress {invalidCasts} Closure doesn't understand that `this` is an HTMLElement
       * @return {void}
       */
      ready() {
        super.ready();
        this.__autoDirOptOut = /** @type {!HTMLElement} */this.hasAttribute('dir');
      }

      /**
       * @suppress {missingProperties} If it exists on elementBase, it can be super'd
       * @return {void}
       */
      connectedCallback() {
        if (elementBase.prototype.connectedCallback) {
          super.connectedCallback();
        }
        if (this.constructor.__activateDir) {
          takeRecords();
          DIR_INSTANCES.push(this);
          setRTL(this);
        }
      }

      /**
       * @suppress {missingProperties} If it exists on elementBase, it can be super'd
       * @return {void}
       */
      disconnectedCallback() {
        if (elementBase.prototype.disconnectedCallback) {
          super.disconnectedCallback();
        }
        if (this.constructor.__activateDir) {
          const idx = DIR_INSTANCES.indexOf(this);
          if (idx > -1) {
            DIR_INSTANCES.splice(idx, 1);
          }
        }
      }
    }

    Dir.__activateDir = false;

    return Dir;
  });
})();

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

(function () {

  'use strict';

  // run a callback when HTMLImports are ready or immediately if
  // this api is not available.

  function whenImportsReady(cb) {
    if (window.HTMLImports) {
      HTMLImports.whenReady(cb);
    } else {
      cb();
    }
  }

  /**
   * Convenience method for importing an HTML document imperatively.
   *
   * This method creates a new `<link rel="import">` element with
   * the provided URL and appends it to the document to start loading.
   * In the `onload` callback, the `import` property of the `link`
   * element will contain the imported document contents.
   *
   * @memberof Polymer
   * @param {string} href URL to document to load.
   * @param {?function(!Event):void=} onload Callback to notify when an import successfully
   *   loaded.
   * @param {?function(!ErrorEvent):void=} onerror Callback to notify when an import
   *   unsuccessfully loaded.
   * @param {boolean=} optAsync True if the import should be loaded `async`.
   *   Defaults to `false`.
   * @return {!HTMLLinkElement} The link element for the URL to be loaded.
   */
  Polymer.importHref = function (href, onload, onerror, optAsync) {
    let link = /** @type {HTMLLinkElement} */
    document.head.querySelector('link[href="' + href + '"][import-href]');
    if (!link) {
      link = /** @type {HTMLLinkElement} */document.createElement('link');
      link.rel = 'import';
      link.href = href;
      link.setAttribute('import-href', '');
    }
    // always ensure link has `async` attribute if user specified one,
    // even if it was previously not async. This is considered less confusing.
    if (optAsync) {
      link.setAttribute('async', '');
    }
    // NOTE: the link may now be in 3 states: (1) pending insertion,
    // (2) inflight, (3) already loaded. In each case, we need to add
    // event listeners to process callbacks.
    let cleanup = function () {
      link.removeEventListener('load', loadListener);
      link.removeEventListener('error', errorListener);
    };
    let loadListener = function (event) {
      cleanup();
      // In case of a successful load, cache the load event on the link so
      // that it can be used to short-circuit this method in the future when
      // it is called with the same href param.
      link.__dynamicImportLoaded = true;
      if (onload) {
        whenImportsReady(() => {
          onload(event);
        });
      }
    };
    let errorListener = function (event) {
      cleanup();
      // In case of an error, remove the link from the document so that it
      // will be automatically created again the next time `importHref` is
      // called.
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      if (onerror) {
        whenImportsReady(() => {
          onerror(event);
        });
      }
    };
    link.addEventListener('load', loadListener);
    link.addEventListener('error', errorListener);
    if (link.parentNode == null) {
      document.head.appendChild(link);
      // if the link already loaded, dispatch a fake load event
      // so that listeners are called and get a proper event argument.
    } else if (link.__dynamicImportLoaded) {
      link.dispatchEvent(new Event('load'));
    }
    return link;
  };
})();

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

(function () {

  'use strict';

  let scheduled = false;
  let beforeRenderQueue = [];
  let afterRenderQueue = [];

  function schedule() {
    scheduled = true;
    // before next render
    requestAnimationFrame(function () {
      scheduled = false;
      flushQueue(beforeRenderQueue);
      // after the render
      setTimeout(function () {
        runQueue(afterRenderQueue);
      });
    });
  }

  function flushQueue(queue) {
    while (queue.length) {
      callMethod(queue.shift());
    }
  }

  function runQueue(queue) {
    for (let i = 0, l = queue.length; i < l; i++) {
      callMethod(queue.shift());
    }
  }

  function callMethod(info) {
    const context = info[0];
    const callback = info[1];
    const args = info[2];
    try {
      callback.apply(context, args);
    } catch (e) {
      setTimeout(() => {
        throw e;
      });
    }
  }

  function flush() {
    while (beforeRenderQueue.length || afterRenderQueue.length) {
      flushQueue(beforeRenderQueue);
      flushQueue(afterRenderQueue);
    }
    scheduled = false;
  }

  /**
   * Module for scheduling flushable pre-render and post-render tasks.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module for scheduling flushable pre-render and post-render tasks.
   */
  Polymer.RenderStatus = {

    /**
     * Enqueues a callback which will be run before the next render, at
     * `requestAnimationFrame` timing.
     *
     * This method is useful for enqueuing work that requires DOM measurement,
     * since measurement may not be reliable in custom element callbacks before
     * the first render, as well as for batching measurement tasks in general.
     *
     * Tasks in this queue may be flushed by calling `Polymer.RenderStatus.flush()`.
     *
     * @memberof Polymer.RenderStatus
     * @param {*} context Context object the callback function will be bound to
     * @param {function(...*):void} callback Callback function
     * @param {!Array=} args An array of arguments to call the callback function with
     * @return {void}
     */
    beforeNextRender: function (context, callback, args) {
      if (!scheduled) {
        schedule();
      }
      beforeRenderQueue.push([context, callback, args]);
    },

    /**
     * Enqueues a callback which will be run after the next render, equivalent
     * to one task (`setTimeout`) after the next `requestAnimationFrame`.
     *
     * This method is useful for tuning the first-render performance of an
     * element or application by deferring non-critical work until after the
     * first paint.  Typical non-render-critical work may include adding UI
     * event listeners and aria attributes.
     *
     * @memberof Polymer.RenderStatus
     * @param {*} context Context object the callback function will be bound to
     * @param {function(...*):void} callback Callback function
     * @param {!Array=} args An array of arguments to call the callback function with
     * @return {void}
     */
    afterNextRender: function (context, callback, args) {
      if (!scheduled) {
        schedule();
      }
      afterRenderQueue.push([context, callback, args]);
    },

    /**
     * Flushes all `beforeNextRender` tasks, followed by all `afterNextRender`
     * tasks.
     *
     * @memberof Polymer.RenderStatus
     * @return {void}
     */
    flush: flush

  };
})();

/***/ }),
/* 45 */
/***/ (function(module, exports) {



(function () {
  'use strict';

  // unresolved

  function resolve() {
    document.body.removeAttribute('unresolved');
  }

  if (window.WebComponents) {
    window.addEventListener('WebComponentsReady', resolve);
  } else {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('DOMContentLoaded', resolve);
    }
  }
})();

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(16);

__webpack_require__(47);

__webpack_require__(9);

(function () {
  'use strict';

  const p = Element.prototype;
  /**
   * @const {function(this:Node, string): boolean}
   */
  const normalizedMatchesSelector = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;

  /**
   * Cross-platform `element.matches` shim.
   *
   * @function matchesSelector
   * @memberof Polymer.dom
   * @param {!Node} node Node to check selector against
   * @param {string} selector Selector to match
   * @return {boolean} True if node matched selector
   */
  const matchesSelector = function (node, selector) {
    return normalizedMatchesSelector.call(node, selector);
  };

  /**
   * Node API wrapper class returned from `Polymer.dom.(target)` when
   * `target` is a `Node`.
   *
   * @memberof Polymer
   */
  class DomApi {

    /**
     * @param {Node} node Node for which to create a Polymer.dom helper object.
     */
    constructor(node) {
      this.node = node;
    }

    /**
     * Returns an instance of `Polymer.FlattenedNodesObserver` that
     * listens for node changes on this element.
     *
     * @param {function(!Element, { target: !Element, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
     *   of this element changes
     * @return {!Polymer.FlattenedNodesObserver} Observer instance
     */
    observeNodes(callback) {
      return new Polymer.FlattenedNodesObserver(this.node, callback);
    }

    /**
     * Disconnects an observer previously created via `observeNodes`
     *
     * @param {!Polymer.FlattenedNodesObserver} observerHandle Observer instance
     *   to disconnect.
     * @return {void}
     */
    unobserveNodes(observerHandle) {
      observerHandle.disconnect();
    }

    /**
     * Provided as a backwards-compatible API only.  This method does nothing.
     * @return {void}
     */
    notifyObserver() {}

    /**
     * Returns true if the provided node is contained with this element's
     * light-DOM children or shadow root, including any nested shadow roots
     * of children therein.
     *
     * @param {Node} node Node to test
     * @return {boolean} Returns true if the given `node` is contained within
     *   this element's light or shadow DOM.
     */
    deepContains(node) {
      if (this.node.contains(node)) {
        return true;
      }
      let n = node;
      let doc = node.ownerDocument;
      // walk from node to `this` or `document`
      while (n && n !== doc && n !== this.node) {
        // use logical parentnode, or native ShadowRoot host
        n = n.parentNode || n.host;
      }
      return n === this.node;
    }

    /**
     * Returns the root node of this node.  Equivalent to `getRoodNode()`.
     *
     * @return {Node} Top most element in the dom tree in which the node
     * exists. If the node is connected to a document this is either a
     * shadowRoot or the document; otherwise, it may be the node
     * itself or a node or document fragment containing it.
     */
    getOwnerRoot() {
      return this.node.getRootNode();
    }

    /**
     * For slot elements, returns the nodes assigned to the slot; otherwise
     * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
     *
     * @return {!Array<!Node>} Array of assigned nodes
     */
    getDistributedNodes() {
      return this.node.localName === 'slot' ? this.node.assignedNodes({ flatten: true }) : [];
    }

    /**
     * Returns an array of all slots this element was distributed to.
     *
     * @return {!Array<!HTMLSlotElement>} Description
     */
    getDestinationInsertionPoints() {
      let ip$ = [];
      let n = this.node.assignedSlot;
      while (n) {
        ip$.push(n);
        n = n.assignedSlot;
      }
      return ip$;
    }

    /**
     * Calls `importNode` on the `ownerDocument` for this node.
     *
     * @param {!Node} node Node to import
     * @param {boolean} deep True if the node should be cloned deeply during
     *   import
     * @return {Node} Clone of given node imported to this owner document
     */
    importNode(node, deep) {
      let doc = this.node instanceof Document ? this.node : this.node.ownerDocument;
      return doc.importNode(node, deep);
    }

    /**
     * @return {!Array<!Node>} Returns a flattened list of all child nodes and
     * nodes assigned to child slots.
     */
    getEffectiveChildNodes() {
      return Polymer.FlattenedNodesObserver.getFlattenedNodes(this.node);
    }

    /**
     * Returns a filtered list of flattened child elements for this element based
     * on the given selector.
     *
     * @param {string} selector Selector to filter nodes against
     * @return {!Array<!HTMLElement>} List of flattened child elements
     */
    queryDistributedElements(selector) {
      let c$ = this.getEffectiveChildNodes();
      let list = [];
      for (let i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
        if (c.nodeType === Node.ELEMENT_NODE && matchesSelector(c, selector)) {
          list.push(c);
        }
      }
      return list;
    }

    /**
     * For shadow roots, returns the currently focused element within this
     * shadow root.
     *
     * @return {Node|undefined} Currently focused element
     */
    get activeElement() {
      let node = this.node;
      return node._activeElement !== undefined ? node._activeElement : node.activeElement;
    }
  }

  function forwardMethods(proto, methods) {
    for (let i = 0; i < methods.length; i++) {
      let method = methods[i];
      /* eslint-disable valid-jsdoc */
      proto[method] = /** @this {DomApi} */function () {
        return this.node[method].apply(this.node, arguments);
      };
      /* eslint-enable */
    }
  }

  function forwardReadOnlyProperties(proto, properties) {
    for (let i = 0; i < properties.length; i++) {
      let name = properties[i];
      Object.defineProperty(proto, name, {
        get: function () {
          const domApi = /** @type {DomApi} */this;
          return domApi.node[name];
        },
        configurable: true
      });
    }
  }

  function forwardProperties(proto, properties) {
    for (let i = 0; i < properties.length; i++) {
      let name = properties[i];
      Object.defineProperty(proto, name, {
        get: function () {
          const domApi = /** @type {DomApi} */this;
          return domApi.node[name];
        },
        set: function (value) {
          /** @type {DomApi} */this.node[name] = value;
        },
        configurable: true
      });
    }
  }

  forwardMethods(DomApi.prototype, ['cloneNode', 'appendChild', 'insertBefore', 'removeChild', 'replaceChild', 'setAttribute', 'removeAttribute', 'querySelector', 'querySelectorAll']);

  forwardReadOnlyProperties(DomApi.prototype, ['parentNode', 'firstChild', 'lastChild', 'nextSibling', 'previousSibling', 'firstElementChild', 'lastElementChild', 'nextElementSibling', 'previousElementSibling', 'childNodes', 'children', 'classList']);

  forwardProperties(DomApi.prototype, ['textContent', 'innerHTML']);

  /**
   * Event API wrapper class returned from `Polymer.dom.(target)` when
   * `target` is an `Event`.
   */
  class EventApi {
    constructor(event) {
      this.event = event;
    }

    /**
     * Returns the first node on the `composedPath` of this event.
     *
     * @return {!EventTarget} The node this event was dispatched to
     */
    get rootTarget() {
      return this.event.composedPath()[0];
    }

    /**
     * Returns the local (re-targeted) target for this event.
     *
     * @return {!EventTarget} The local (re-targeted) target for this event.
     */
    get localTarget() {
      return this.event.target;
    }

    /**
     * Returns the `composedPath` for this event.
     * @return {!Array<EventTarget>} The nodes this event propagated through
     */
    get path() {
      return this.event.composedPath();
    }
  }

  Polymer.DomApi = DomApi;

  /**
   * @function
   * @param {boolean=} deep
   * @return {!Node}
   */
  Polymer.DomApi.prototype.cloneNode;
  /**
   * @function
   * @param {!Node} node
   * @return {!Node}
   */
  Polymer.DomApi.prototype.appendChild;
  /**
   * @function
   * @param {!Node} newChild
   * @param {Node} refChild
   * @return {!Node}
   */
  Polymer.DomApi.prototype.insertBefore;
  /**
   * @function
   * @param {!Node} node
   * @return {!Node}
   */
  Polymer.DomApi.prototype.removeChild;
  /**
   * @function
   * @param {!Node} oldChild
   * @param {!Node} newChild
   * @return {!Node}
   */
  Polymer.DomApi.prototype.replaceChild;
  /**
   * @function
   * @param {string} name
   * @param {string} value
   * @return {void}
   */
  Polymer.DomApi.prototype.setAttribute;
  /**
   * @function
   * @param {string} name
   * @return {void}
   */
  Polymer.DomApi.prototype.removeAttribute;
  /**
   * @function
   * @param {string} selector
   * @return {?Element}
   */
  Polymer.DomApi.prototype.querySelector;
  /**
   * @function
   * @param {string} selector
   * @return {!NodeList<!Element>}
   */
  Polymer.DomApi.prototype.querySelectorAll;

  /**
   * Legacy DOM and Event manipulation API wrapper factory used to abstract
   * differences between native Shadow DOM and "Shady DOM" when polyfilling on
   * older browsers.
   *
   * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
   * in the majority of cases simply facades directly to the standard native
   * API.
   *
   * @namespace
   * @summary Legacy DOM and Event manipulation API wrapper factory used to
   * abstract differences between native Shadow DOM and "Shady DOM."
   * @memberof Polymer
   * @param {(Node|Event)=} obj Node or event to operate on
   * @return {!DomApi|!EventApi} Wrapper providing either node API or event API
   */
  Polymer.dom = function (obj) {
    obj = obj || document;
    if (!obj.__domApi) {
      let helper;
      if (obj instanceof Event) {
        helper = new EventApi(obj);
      } else {
        helper = new DomApi(obj);
      }
      obj.__domApi = helper;
    }
    return obj.__domApi;
  };

  Polymer.dom.matchesSelector = matchesSelector;

  /**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `Polymer.enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * This method facades to `Polymer.flush`.
   *
   * @memberof Polymer.dom
   */
  Polymer.dom.flush = Polymer.flush;

  /**
   * Adds a `Polymer.Debouncer` to a list of globally flushable tasks.
   *
   * This method facades to `Polymer.enqueueDebouncer`.
   *
   * @memberof Polymer.dom
   * @param {Polymer.Debouncer} debouncer Debouncer to enqueue
   */
  Polymer.dom.addDebouncer = Polymer.enqueueDebouncer;
})();

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(22);

__webpack_require__(5);

(function () {
  'use strict';

  /**
   * Returns true if `node` is a slot element
   * @param {Node} node Node to test.
   * @return {boolean} Returns true if the given `node` is a slot
   * @private
   */

  function isSlot(node) {
    return node.localName === 'slot';
  }

  /**
   * Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`. The list of flattened nodes consists
   * of a node's children and, for any children that are `<slot>` elements,
   * the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * The provided `callback` is called whenever any change to this list
   * of flattened nodes occurs, where an addition or removal of a node is
   * considered a change. The `callback` is called with one argument, an object
   * containing an array of any `addedNodes` and `removedNodes`.
   *
   * Note: the callback is called asynchronous to any changes
   * at a microtask checkpoint. This is because observation is performed using
   * `MutationObserver` and the `<slot>` element's `slotchange` event which
   * are asynchronous.
   *
   * An example:
   * ```js
   * class TestSelfObserve extends Polymer.Element {
   *   static get is() { return 'test-self-observe';}
   *   connectedCallback() {
   *     super.connectedCallback();
   *     this._observer = new Polymer.FlattenedNodesObserver(this, (info) => {
   *       this.info = info;
   *     });
   *   }
   *   disconnectedCallback() {
   *     super.disconnectedCallback();
   *     this._observer.disconnect();
   *   }
   * }
   * customElements.define(TestSelfObserve.is, TestSelfObserve);
   * ```
   *
   * @memberof Polymer
   * @summary Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`.
   */
  class FlattenedNodesObserver {

    /**
     * Returns the list of flattened nodes for the given `node`.
     * This list consists of a node's children and, for any children
     * that are `<slot>` elements, the expanded flattened list of `assignedNodes`.
     * For example, if the observed node has children `<a></a><slot></slot><b></b>`
     * and the `<slot>` has one `<div>` assigned to it, then the flattened
     * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
     * `<slot>` elements assigned to it, these are flattened as well.
     *
     * @param {HTMLElement|HTMLSlotElement} node The node for which to return the list of flattened nodes.
     * @return {Array} The list of flattened nodes for the given `node`.
    */
    static getFlattenedNodes(node) {
      if (isSlot(node)) {
        node = /** @type {HTMLSlotElement} */node; // eslint-disable-line no-self-assign
        return node.assignedNodes({ flatten: true });
      } else {
        return Array.from(node.childNodes).map(node => {
          if (isSlot(node)) {
            node = /** @type {HTMLSlotElement} */node; // eslint-disable-line no-self-assign
            return node.assignedNodes({ flatten: true });
          } else {
            return [node];
          }
        }).reduce((a, b) => a.concat(b), []);
      }
    }

    /**
     * @param {Element} target Node on which to listen for changes.
     * @param {?function(!Element, { target: !Element, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Function called when there are additions
     * or removals from the target's list of flattened nodes.
    */
    constructor(target, callback) {
      /**
       * @type {MutationObserver}
       * @private
       */
      this._shadyChildrenObserver = null;
      /**
       * @type {MutationObserver}
       * @private
       */
      this._nativeChildrenObserver = null;
      this._connected = false;
      /**
       * @type {Element}
       * @private
       */
      this._target = target;
      this.callback = callback;
      this._effectiveNodes = [];
      this._observer = null;
      this._scheduled = false;
      /**
       * @type {function()}
       * @private
       */
      this._boundSchedule = () => {
        this._schedule();
      };
      this.connect();
      this._schedule();
    }

    /**
     * Activates an observer. This method is automatically called when
     * a `FlattenedNodesObserver` is created. It should only be called to
     * re-activate an observer that has been deactivated via the `disconnect` method.
     *
     * @return {void}
     */
    connect() {
      if (isSlot(this._target)) {
        this._listenSlots([this._target]);
      } else if (this._target.children) {
        this._listenSlots(this._target.children);
        if (window.ShadyDOM) {
          this._shadyChildrenObserver = ShadyDOM.observeChildren(this._target, mutations => {
            this._processMutations(mutations);
          });
        } else {
          this._nativeChildrenObserver = new MutationObserver(mutations => {
            this._processMutations(mutations);
          });
          this._nativeChildrenObserver.observe(this._target, { childList: true });
        }
      }
      this._connected = true;
    }

    /**
     * Deactivates the flattened nodes observer. After calling this method
     * the observer callback will not be called when changes to flattened nodes
     * occur. The `connect` method may be subsequently called to reactivate
     * the observer.
     *
     * @return {void}
     */
    disconnect() {
      if (isSlot(this._target)) {
        this._unlistenSlots([this._target]);
      } else if (this._target.children) {
        this._unlistenSlots(this._target.children);
        if (window.ShadyDOM && this._shadyChildrenObserver) {
          ShadyDOM.unobserveChildren(this._shadyChildrenObserver);
          this._shadyChildrenObserver = null;
        } else if (this._nativeChildrenObserver) {
          this._nativeChildrenObserver.disconnect();
          this._nativeChildrenObserver = null;
        }
      }
      this._connected = false;
    }

    /**
     * @return {void}
     * @private
     */
    _schedule() {
      if (!this._scheduled) {
        this._scheduled = true;
        Polymer.Async.microTask.run(() => this.flush());
      }
    }

    /**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */
    _processMutations(mutations) {
      this._processSlotMutations(mutations);
      this.flush();
    }

    /**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */
    _processSlotMutations(mutations) {
      if (mutations) {
        for (let i = 0; i < mutations.length; i++) {
          let mutation = mutations[i];
          if (mutation.addedNodes) {
            this._listenSlots(mutation.addedNodes);
          }
          if (mutation.removedNodes) {
            this._unlistenSlots(mutation.removedNodes);
          }
        }
      }
    }

    /**
     * Flushes the observer causing any pending changes to be immediately
     * delivered the observer callback. By default these changes are delivered
     * asynchronously at the next microtask checkpoint.
     *
     * @return {boolean} Returns true if any pending changes caused the observer
     * callback to run.
     */
    flush() {
      if (!this._connected) {
        return false;
      }
      if (window.ShadyDOM) {
        ShadyDOM.flush();
      }
      if (this._nativeChildrenObserver) {
        this._processSlotMutations(this._nativeChildrenObserver.takeRecords());
      } else if (this._shadyChildrenObserver) {
        this._processSlotMutations(this._shadyChildrenObserver.takeRecords());
      }
      this._scheduled = false;
      let info = {
        target: this._target,
        addedNodes: [],
        removedNodes: []
      };
      let newNodes = this.constructor.getFlattenedNodes(this._target);
      let splices = Polymer.ArraySplice.calculateSplices(newNodes, this._effectiveNodes);
      // process removals
      for (let i = 0, s; i < splices.length && (s = splices[i]); i++) {
        for (let j = 0, n; j < s.removed.length && (n = s.removed[j]); j++) {
          info.removedNodes.push(n);
        }
      }
      // process adds
      for (let i = 0, s; i < splices.length && (s = splices[i]); i++) {
        for (let j = s.index; j < s.index + s.addedCount; j++) {
          info.addedNodes.push(newNodes[j]);
        }
      }
      // update cache
      this._effectiveNodes = newNodes;
      let didFlush = false;
      if (info.addedNodes.length || info.removedNodes.length) {
        didFlush = true;
        this.callback.call(this._target, info);
      }
      return didFlush;
    }

    /**
     * @param {!Array<Element|Node>|!NodeList<Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */
    _listenSlots(nodeList) {
      for (let i = 0; i < nodeList.length; i++) {
        let n = nodeList[i];
        if (isSlot(n)) {
          n.addEventListener('slotchange', this._boundSchedule);
        }
      }
    }

    /**
     * @param {!Array<Element|Node>|!NodeList<Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */
    _unlistenSlots(nodeList) {
      for (let i = 0; i < nodeList.length; i++) {
        let n = nodeList[i];
        if (isSlot(n)) {
          n.removeEventListener('slotchange', this._boundSchedule);
        }
      }
    }

  }

  Polymer.FlattenedNodesObserver = FlattenedNodesObserver;
})();

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(49);

(function () {
  'use strict';

  /**
   * Legacy class factory and registration helper for defining Polymer
   * elements.
   *
   * This method is equivalent to
   * `customElements.define(info.is, Polymer.Class(info));`
   *
   * See `Polymer.Class` for details on valid legacy metadata format for `info`.
   *
   * @global
   * @override
   * @function Polymer
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @return {function(new: HTMLElement)} Generated class
   * @suppress {duplicate, invalidCasts, checkTypes}
   */

  window.Polymer._polymerFn = function (info) {
    // if input is a `class` (aka a function with a prototype), use the prototype
    // remember that the `constructor` will never be called
    let klass;
    if (typeof info === 'function') {
      klass = info;
    } else {
      klass = Polymer.Class(info);
    }
    customElements.define(klass.is, /** @type {!HTMLElement} */klass);
    return klass;
  };
})();

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(14);

(function () {

  'use strict';

  let metaProps = {
    attached: true,
    detached: true,
    ready: true,
    created: true,
    beforeRegister: true,
    registered: true,
    attributeChanged: true,
    // meta objects
    behaviors: true
  };

  /**
   * Applies a "legacy" behavior or array of behaviors to the provided class.
   *
   * Note: this method will automatically also apply the `Polymer.LegacyElementMixin`
   * to ensure that any legacy behaviors can rely on legacy Polymer API on
   * the underlying element.
   *
   * @template T
   * @param {!Object|!Array<!Object>} behaviors Behavior object or array of behaviors.
   * @param {function(new:T)} klass Element class.
   * @return {function(new:T)} Returns a new Element class extended by the
   * passed in `behaviors` and also by `Polymer.LegacyElementMixin`.
   * @memberof Polymer
   * @suppress {invalidCasts, checkTypes}
   */
  function mixinBehaviors(behaviors, klass) {
    if (!behaviors) {
      klass = /** @type {HTMLElement} */klass; // eslint-disable-line no-self-assign
      return klass;
    }
    // NOTE: ensure the behavior is extending a class with
    // legacy element api. This is necessary since behaviors expect to be able
    // to access 1.x legacy api.
    klass = Polymer.LegacyElementMixin(klass);
    if (!Array.isArray(behaviors)) {
      behaviors = [behaviors];
    }
    let superBehaviors = klass.prototype.behaviors;
    // get flattened, deduped list of behaviors *not* already on super class
    behaviors = flattenBehaviors(behaviors, null, superBehaviors);
    // mixin new behaviors
    klass = _mixinBehaviors(behaviors, klass);
    if (superBehaviors) {
      behaviors = superBehaviors.concat(behaviors);
    }
    // Set behaviors on prototype for BC...
    klass.prototype.behaviors = behaviors;
    return klass;
  }

  // NOTE:
  // 1.x
  // Behaviors were mixed in *in reverse order* and de-duped on the fly.
  // The rule was that behavior properties were copied onto the element
  // prototype if and only if the property did not already exist.
  // Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
  // (1), B, (2), A, (3) C. This means prototype properties win over
  // B properties win over A win over C. This mirrors what would happen
  // with inheritance if element extended B extended A extended C.
  //
  // Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
  // `behaviors` array was [C, A, B].
  // Behavior lifecycle methods were called in behavior array order
  // followed by the element, e.g. (1) C.created, (2) A.created,
  // (3) B.created, (4) element.created. There was no support for
  // super, and "super-behavior" methods were callable only by name).
  //
  // 2.x
  // Behaviors are made into proper mixins which live in the
  // element's prototype chain. Behaviors are placed in the element prototype
  // eldest to youngest and de-duped youngest to oldest:
  // So, first [A, B, C, A, B] becomes [C, A, B] then,
  // the element prototype becomes (oldest) (1) Polymer.Element, (2) class(C),
  // (3) class(A), (4) class(B), (5) class(Polymer({...})).
  // Result:
  // This means element properties win over B properties win over A win
  // over C. (same as 1.x)
  // If lifecycle is called (super then me), order is
  // (1) C.created, (2) A.created, (3) B.created, (4) element.created
  // (again same as 1.x)
  function _mixinBehaviors(behaviors, klass) {
    for (let i = 0; i < behaviors.length; i++) {
      let b = behaviors[i];
      if (b) {
        klass = Array.isArray(b) ? _mixinBehaviors(b, klass) : GenerateClassFromInfo(b, klass);
      }
    }
    return klass;
  }

  /**
   * @param {Array} behaviors List of behaviors to flatten.
   * @param {Array=} list Target list to flatten behaviors into.
   * @param {Array=} exclude List of behaviors to exclude from the list.
   * @return {!Array} Returns the list of flattened behaviors.
   */
  function flattenBehaviors(behaviors, list, exclude) {
    list = list || [];
    for (let i = behaviors.length - 1; i >= 0; i--) {
      let b = behaviors[i];
      if (b) {
        if (Array.isArray(b)) {
          flattenBehaviors(b, list);
        } else {
          // dedup
          if (list.indexOf(b) < 0 && (!exclude || exclude.indexOf(b) < 0)) {
            list.unshift(b);
          }
        }
      } else {
        console.warn('behavior is null, check for missing or 404 import');
      }
    }
    return list;
  }

  /**
   * @param {!PolymerInit} info Polymer info object
   * @param {function(new:HTMLElement)} Base base class to extend with info object
   * @return {function(new:HTMLElement)} Generated class
   * @suppress {checkTypes}
   * @private
   */
  function GenerateClassFromInfo(info, Base) {

    class PolymerGenerated extends Base {

      static get properties() {
        return info.properties;
      }

      static get observers() {
        return info.observers;
      }

      /**
       * @return {HTMLTemplateElement} template for this class
       */
      static get template() {
        // get template first from any imperative set in `info._template`
        return info._template ||
        // next look in dom-module associated with this element's is.
        Polymer.DomModule && Polymer.DomModule.import(this.is, 'template') ||
        // next look for superclass template (note: use superclass symbol
        // to ensure correct `this.is`)
        Base.template ||
        // finally fall back to `_template` in element's prototype.
        this.prototype._template || null;
      }

      /**
       * @return {void}
       */
      created() {
        super.created();
        if (info.created) {
          info.created.call(this);
        }
      }

      /**
       * @return {void}
       */
      _registered() {
        super._registered();
        /* NOTE: `beforeRegister` is called here for bc, but the behavior
         is different than in 1.x. In 1.0, the method was called *after*
         mixing prototypes together but *before* processing of meta-objects.
         However, dynamic effects can still be set here and can be done either
         in `beforeRegister` or `registered`. It is no longer possible to set
         `is` in `beforeRegister` as you could in 1.x.
        */
        if (info.beforeRegister) {
          info.beforeRegister.call(Object.getPrototypeOf(this));
        }
        if (info.registered) {
          info.registered.call(Object.getPrototypeOf(this));
        }
      }

      /**
       * @return {void}
       */
      _applyListeners() {
        super._applyListeners();
        if (info.listeners) {
          for (let l in info.listeners) {
            this._addMethodEventListenerToNode(this, l, info.listeners[l]);
          }
        }
      }

      // note: exception to "super then me" rule;
      // do work before calling super so that super attributes
      // only apply if not already set.
      /**
       * @return {void}
       */
      _ensureAttributes() {
        if (info.hostAttributes) {
          for (let a in info.hostAttributes) {
            this._ensureAttribute(a, info.hostAttributes[a]);
          }
        }
        super._ensureAttributes();
      }

      /**
       * @return {void}
       */
      ready() {
        super.ready();
        if (info.ready) {
          info.ready.call(this);
        }
      }

      /**
       * @return {void}
       */
      attached() {
        super.attached();
        if (info.attached) {
          info.attached.call(this);
        }
      }

      /**
       * @return {void}
       */
      detached() {
        super.detached();
        if (info.detached) {
          info.detached.call(this);
        }
      }

      /**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @return {void}
       */
      attributeChanged(name, old, value) {
        super.attributeChanged(name, old, value);
        if (info.attributeChanged) {
          info.attributeChanged.call(this, name, old, value);
        }
      }
    }

    PolymerGenerated.generatedFrom = info;

    for (let p in info) {
      // NOTE: cannot copy `metaProps` methods onto prototype at least because
      // `super.ready` must be called and is not included in the user fn.
      if (!(p in metaProps)) {
        let pd = Object.getOwnPropertyDescriptor(info, p);
        if (pd) {
          Object.defineProperty(PolymerGenerated.prototype, p, pd);
        }
      }
    }

    return PolymerGenerated;
  }

  /**
   * Generates a class that extends `Polymer.LegacyElement` based on the
   * provided info object.  Metadata objects on the `info` object
   * (`properties`, `observers`, `listeners`, `behaviors`, `is`) are used
   * for Polymer's meta-programming systems, and any functions are copied
   * to the generated class.
   *
   * Valid "metadata" values are as follows:
   *
   * `is`: String providing the tag name to register the element under. In
   * addition, if a `dom-module` with the same id exists, the first template
   * in that `dom-module` will be stamped into the shadow root of this element,
   * with support for declarative event listeners (`on-...`), Polymer data
   * bindings (`[[...]]` and `{{...}}`), and id-based node finding into
   * `this.$`.
   *
   * `properties`: Object describing property-related metadata used by Polymer
   * features (key: property names, value: object containing property metadata).
   * Valid keys in per-property metadata include:
   * - `type` (String|Number|Object|Array|...): Used by
   *   `attributeChangedCallback` to determine how string-based attributes
   *   are deserialized to JavaScript property values.
   * - `notify` (boolean): Causes a change in the property to fire a
   *   non-bubbling event called `<property>-changed`. Elements that have
   *   enabled two-way binding to the property use this event to observe changes.
   * - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *   To set a read-only property, use the private setter method
   *   `_setProperty(property, value)`.
   * - `observer` (string): Observer method name that will be called when
   *   the property changes. The arguments of the method are
   *   `(value, previousValue)`.
   * - `computed` (string): String describing method and dependent properties
   *   for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *   Computed properties are read-only by default and can only be changed
   *   via the return value of the computing method.
   *
   * `observers`: Array of strings describing multi-property observer methods
   *  and their dependent properties (e.g. `'observeABC(a, b, c)'`).
   *
   * `listeners`: Object describing event listeners to be added to each
   *  instance of this element (key: event name, value: method name).
   *
   * `behaviors`: Array of additional `info` objects containing metadata
   * and callbacks in the same format as the `info` object here which are
   * merged into this element.
   *
   * `hostAttributes`: Object listing attributes to be applied to the host
   *  once created (key: attribute name, value: attribute value).  Values
   *  are serialized based on the type of the value.  Host attributes should
   *  generally be limited to attributes such as `tabIndex` and `aria-...`.
   *  Attributes in `hostAttributes` are only applied if a user-supplied
   *  attribute is not already present (attributes in markup override
   *  `hostAttributes`).
   *
   * In addition, the following Polymer-specific callbacks may be provided:
   * - `registered`: called after first instance of this element,
   * - `created`: called during `constructor`
   * - `attached`: called during `connectedCallback`
   * - `detached`: called during `disconnectedCallback`
   * - `ready`: called before first `attached`, after all properties of
   *   this element have been propagated to its template and all observers
   *   have run
   *
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @return {function(new:HTMLElement)} Generated class
   * @memberof Polymer
   */
  Polymer.Class = function (info) {
    if (!info) {
      console.warn('Polymer.Class requires `info` argument');
    }
    let klass = GenerateClassFromInfo(info, info.behaviors ?
    // note: mixinBehaviors ensures `LegacyElementMixin`.
    mixinBehaviors(info.behaviors, HTMLElement) : Polymer.LegacyElementMixin(HTMLElement));
    // decorate klass with registration info
    klass.is = info.is;
    return klass;
  };

  Polymer.mixinBehaviors = mixinBehaviors;
})();

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(10);

(function () {
  'use strict';

  let TemplateInstanceBase = Polymer.TemplateInstanceBase; // eslint-disable-line

  /**
   * @typedef {{
   *   _templatizerTemplate: HTMLTemplateElement,
   *   _parentModel: boolean,
   *   _instanceProps: Object,
   *   _forwardHostPropV2: Function,
   *   _notifyInstancePropV2: Function,
   *   ctor: TemplateInstanceBase
   * }}
   */
  let TemplatizerUser; // eslint-disable-line

  /**
   * The `Polymer.Templatizer` behavior adds methods to generate instances of
   * templates that are each managed by an anonymous `Polymer.PropertyEffects`
   * instance where data-bindings in the stamped template content are bound to
   * accessors on itself.
   *
   * This behavior is provided in Polymer 2.x as a hybrid-element convenience
   * only.  For non-hybrid usage, the `Polymer.Templatize` library
   * should be used instead.
   *
   * Example:
   *
   *     // Get a template from somewhere, e.g. light DOM
   *     let template = this.querySelector('template');
   *     // Prepare the template
   *     this.templatize(template);
   *     // Instance the template with an initial data model
   *     let instance = this.stamp({myProp: 'initial'});
   *     // Insert the instance's DOM somewhere, e.g. light DOM
   *     Polymer.dom(this).appendChild(instance.root);
   *     // Changing a property on the instance will propagate to bindings
   *     // in the template
   *     instance.myProp = 'new value';
   *
   * Users of `Templatizer` may need to implement the following abstract
   * API's to determine how properties and paths from the host should be
   * forwarded into to instances:
   *
   *     _forwardHostPropV2: function(prop, value)
   *
   * Likewise, users may implement these additional abstract API's to determine
   * how instance-specific properties that change on the instance should be
   * forwarded out to the host, if necessary.
   *
   *     _notifyInstancePropV2: function(inst, prop, value)
   *
   * In order to determine which properties are instance-specific and require
   * custom notification via `_notifyInstanceProp`, define an `_instanceProps`
   * object containing keys for each instance prop, for example:
   *
   *     _instanceProps: {
   *       item: true,
   *       index: true
   *     }
   *
   * Any properties used in the template that are not defined in _instanceProp
   * will be forwarded out to the Templatize `owner` automatically.
   *
   * Users may also implement the following abstract function to show or
   * hide any DOM generated using `stamp`:
   *
   *     _showHideChildren: function(shouldHide)
   *
   * Note that some callbacks are suffixed with `V2` in the Polymer 2.x behavior
   * as the implementations will need to differ from the callbacks required
   * by the 1.x Templatizer API due to changes in the `TemplateInstance` API
   * between versions 1.x and 2.x.
   *
   * @polymerBehavior
   */
  Polymer.Templatizer = {

    /**
     * Generates an anonymous `TemplateInstance` class (stored as `this.ctor`)
     * for the provided template.  This method should be called once per
     * template to prepare an element for stamping the template, followed
     * by `stamp` to create new instances of the template.
     *
     * @param {!HTMLTemplateElement} template Template to prepare
     * @param {boolean=} mutableData When `true`, the generated class will skip
     *   strict dirty-checking for objects and arrays (always consider them to
     *   be "dirty"). Defaults to false.
     * @return {void}
     * @this {TemplatizerUser}
     */
    templatize(template, mutableData) {
      this._templatizerTemplate = template;
      this.ctor = Polymer.Templatize.templatize(template, this, {
        mutableData: Boolean(mutableData),
        parentModel: this._parentModel,
        instanceProps: this._instanceProps,
        forwardHostProp: this._forwardHostPropV2,
        notifyInstanceProp: this._notifyInstancePropV2
      });
    },

    /**
     * Creates an instance of the template prepared by `templatize`.  The object
     * returned is an instance of the anonymous class generated by `templatize`
     * whose `root` property is a document fragment containing newly cloned
     * template content, and which has property accessors corresponding to
     * properties referenced in template bindings.
     *
     * @param {Object=} model Object containing initial property values to
     *   populate into the template bindings.
     * @return {TemplateInstanceBase} Returns the created instance of
     * the template prepared by `templatize`.
     * @this {TemplatizerUser}
     */
    stamp(model) {
      return new this.ctor(model);
    },

    /**
     * Returns the template "model" (`TemplateInstance`) associated with
     * a given element, which serves as the binding scope for the template
     * instance the element is contained in.  A template model should be used
     * to manipulate data associated with this template instance.
     *
     * @param {HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     * @this {TemplatizerUser}
     */
    modelForElement(el) {
      return Polymer.Templatize.modelForElement(this._templatizerTemplate, el);
    }
  };
})();

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(0);

__webpack_require__(7);

__webpack_require__(6);

__webpack_require__(21);

(function () {
  'use strict';

  /**
   * @constructor
   * @extends {HTMLElement}
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_OptionalMutableData}
   * @implements {Polymer_GestureEventListeners}
   */

  const domBindBase = Polymer.GestureEventListeners(Polymer.OptionalMutableData(Polymer.PropertyEffects(HTMLElement)));

  /**
   * Custom element to allow using Polymer's template features (data binding,
   * declarative event listeners, etc.) in the main document without defining
   * a new custom element.
   *
   * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
   * element, which will immediately stamp the wrapped template into the main
   * document and bind elements to the `dom-bind` element itself as the
   * binding scope.
   *
   * @polymer
   * @customElement
   * @appliesMixin Polymer.PropertyEffects
   * @appliesMixin Polymer.OptionalMutableData
   * @appliesMixin Polymer.GestureEventListeners
   * @extends {domBindBase}
   * @memberof Polymer
   * @summary Custom element to allow using Polymer's template features (data
   *   binding, declarative event listeners, etc.) in the main document.
   */
  class DomBind extends domBindBase {

    static get observedAttributes() {
      return ['mutable-data'];
    }

    constructor() {
      super();
      this.root = null;
      this.$ = null;
      this.__children = null;
    }

    /** @return {void} */
    attributeChangedCallback() {
      // assumes only one observed attribute
      this.mutableData = true;
    }

    /** @return {void} */
    connectedCallback() {
      this.style.display = 'none';
      this.render();
    }

    /** @return {void} */
    disconnectedCallback() {
      this.__removeChildren();
    }

    __insertChildren() {
      this.parentNode.insertBefore(this.root, this);
    }

    __removeChildren() {
      if (this.__children) {
        for (let i = 0; i < this.__children.length; i++) {
          this.root.appendChild(this.__children[i]);
        }
      }
    }

    /**
     * Forces the element to render its content. This is typically only
     * necessary to call if HTMLImports with the async attribute are used.
     * @return {void}
     */
    render() {
      let template;
      if (!this.__children) {
        template = /** @type {HTMLTemplateElement} */template || this.querySelector('template');
        if (!template) {
          // Wait until childList changes and template should be there by then
          let observer = new MutationObserver(() => {
            template = /** @type {HTMLTemplateElement} */this.querySelector('template');
            if (template) {
              observer.disconnect();
              this.render();
            } else {
              throw new Error('dom-bind requires a <template> child');
            }
          });
          observer.observe(this, { childList: true });
          return;
        }
        this.root = this._stampTemplate(template);
        this.$ = this.root.$;
        this.__children = [];
        for (let n = this.root.firstChild; n; n = n.nextSibling) {
          this.__children[this.__children.length] = n;
        }
        this._enableProperties();
      }
      this.__insertChildren();
      this.dispatchEvent(new CustomEvent('dom-change', {
        bubbles: true,
        composed: true
      }));
    }

  }

  customElements.define('dom-bind', DomBind);

  Polymer.DomBind = DomBind;
})();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(11);

__webpack_require__(10);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(6);

(function () {
  'use strict';

  let TemplateInstanceBase = Polymer.TemplateInstanceBase; // eslint-disable-line

  /**
   * @constructor
   * @implements {Polymer_OptionalMutableData}
   * @extends {Polymer.Element}
   */
  const domRepeatBase = Polymer.OptionalMutableData(Polymer.Element);

  /**
   * The `<dom-repeat>` element will automatically stamp and binds one instance
   * of template content to each object in a user-provided array.
   * `dom-repeat` accepts an `items` property, and one instance of the template
   * is stamped for each item into the DOM at the location of the `dom-repeat`
   * element.  The `item` property will be set on each instance's binding
   * scope, thus templates should bind to sub-properties of `item`.
   *
   * Example:
   *
   * ```html
   * <dom-module id="employee-list">
   *
   *   <template>
   *
   *     <div> Employee list: </div>
   *     <dom-repeat items="{{employees}}">
   *       <template>
   *         <div>First name: <span>{{item.first}}</span></div>
   *         <div>Last name: <span>{{item.last}}</span></div>
   *       </template>
   *     </dom-repeat>
   *
   *   </template>
   *
   *   <script>
   *     class EmployeeList extends Polymer.Element {
   *       static get is() { return 'employee-list'; }
   *       static get properties() {
   *         return {
   *           employees: {
   *             value() {
   *               return [
   *                 {first: 'Bob', last: 'Smith'},
   *                 {first: 'Sally', last: 'Johnson'},
   *                 ...
   *               ];
   *             }
   *           }
   *         };
   *       }
   *     }
   *   < /script>
   *
   * </dom-module>
   * ```
   *
   * Notifications for changes to items sub-properties will be forwarded to template
   * instances, which will update via the normal structured data notification system.
   *
   * Mutations to the `items` array itself should be made using the Array
   * mutation API's on `Polymer.Base` (`push`, `pop`, `splice`, `shift`,
   * `unshift`), and template instances will be kept in sync with the data in the
   * array.
   *
   * Events caught by event handlers within the `dom-repeat` template will be
   * decorated with a `model` property, which represents the binding scope for
   * each template instance.  The model is an instance of Polymer.Base, and should
   * be used to manipulate data on the instance, for example
   * `event.model.set('item.checked', true);`.
   *
   * Alternatively, the model for a template instance for an element stamped by
   * a `dom-repeat` can be obtained using the `modelForElement` API on the
   * `dom-repeat` that stamped it, for example
   * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
   * This may be useful for manipulating instance data of event targets obtained
   * by event handlers on parents of the `dom-repeat` (event delegation).
   *
   * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
   * `filter` and/or `sort` property.  This may be a string that names a function on
   * the host, or a function may be assigned to the property directly.  The functions
   * should implemented following the standard `Array` filter/sort API.
   *
   * In order to re-run the filter or sort functions based on changes to sub-fields
   * of `items`, the `observe` property may be set as a space-separated list of
   * `item` sub-fields that should cause a re-filter/sort when modified.  If
   * the filter or sort function depends on properties not contained in `items`,
   * the user should observe changes to those properties and call `render` to update
   * the view based on the dependency change.
   *
   * For example, for an `dom-repeat` with a filter of the following:
   *
   * ```js
   * isEngineer(item) {
   *   return item.type == 'engineer' || item.manager.type == 'engineer';
   * }
   * ```
   *
   * Then the `observe` property should be configured as follows:
   *
   * ```html
   * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
   * ```
   *
   * @customElement
   * @polymer
   * @memberof Polymer
   * @extends {domRepeatBase}
   * @appliesMixin Polymer.OptionalMutableData
   * @summary Custom element for stamping instance of a template bound to
   *   items in an array.
   */
  class DomRepeat extends domRepeatBase {

    // Not needed to find template; can be removed once the analyzer
    // can find the tag name from customElements.define call
    static get is() {
      return 'dom-repeat';
    }

    static get template() {
      return null;
    }

    static get properties() {

      /**
       * Fired whenever DOM is added or removed by this template (by
       * default, rendering occurs lazily).  To force immediate rendering, call
       * `render`.
       *
       * @event dom-change
       */
      return {

        /**
         * An array containing items determining how many instances of the template
         * to stamp and that that each template instance should bind to.
         */
        items: {
          type: Array
        },

        /**
         * The name of the variable to add to the binding scope for the array
         * element associated with a given template instance.
         */
        as: {
          type: String,
          value: 'item'
        },

        /**
         * The name of the variable to add to the binding scope with the index
         * of the instance in the sorted and filtered list of rendered items.
         * Note, for the index in the `this.items` array, use the value of the
         * `itemsIndexAs` property.
         */
        indexAs: {
          type: String,
          value: 'index'
        },

        /**
         * The name of the variable to add to the binding scope with the index
         * of the instance in the `this.items` array. Note, for the index of
         * this instance in the sorted and filtered list of rendered items,
         * use the value of the `indexAs` property.
         */
        itemsIndexAs: {
          type: String,
          value: 'itemsIndex'
        },

        /**
         * A function that should determine the sort order of the items.  This
         * property should either be provided as a string, indicating a method
         * name on the element's host, or else be an actual function.  The
         * function should match the sort function passed to `Array.sort`.
         * Using a sort function has no effect on the underlying `items` array.
         */
        sort: {
          type: Function,
          observer: '__sortChanged'
        },

        /**
         * A function that can be used to filter items out of the view.  This
         * property should either be provided as a string, indicating a method
         * name on the element's host, or else be an actual function.  The
         * function should match the sort function passed to `Array.filter`.
         * Using a filter function has no effect on the underlying `items` array.
         */
        filter: {
          type: Function,
          observer: '__filterChanged'
        },

        /**
         * When using a `filter` or `sort` function, the `observe` property
         * should be set to a space-separated list of the names of item
         * sub-fields that should trigger a re-sort or re-filter when changed.
         * These should generally be fields of `item` that the sort or filter
         * function depends on.
         */
        observe: {
          type: String,
          observer: '__observeChanged'
        },

        /**
         * When using a `filter` or `sort` function, the `delay` property
         * determines a debounce time in ms after a change to observed item
         * properties that must pass before the filter or sort is re-run.
         * This is useful in rate-limiting shuffling of the view when
         * item changes may be frequent.
         */
        delay: Number,

        /**
         * Count of currently rendered items after `filter` (if any) has been applied.
         * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
         * set of template instances is rendered.
         *
         */
        renderedItemCount: {
          type: Number,
          notify: true,
          readOnly: true
        },

        /**
         * Defines an initial count of template instances to render after setting
         * the `items` array, before the next paint, and puts the `dom-repeat`
         * into "chunking mode".  The remaining items will be created and rendered
         * incrementally at each animation frame therof until all instances have
         * been rendered.
         */
        initialCount: {
          type: Number,
          observer: '__initializeChunking'
        },

        /**
         * When `initialCount` is used, this property defines a frame rate (in
         * fps) to target by throttling the number of instances rendered each
         * frame to not exceed the budget for the target frame rate.  The
         * framerate is effectively the number of `requestAnimationFrame`s that
         * it tries to allow to actually fire in a given second. It does this
         * by measuring the time between `rAF`s and continuously adjusting the
         * number of items created each `rAF` to maintain the target framerate.
         * Setting this to a higher number allows lower latency and higher
         * throughput for event handlers and other tasks, but results in a
         * longer time for the remaining items to complete rendering.
         */
        targetFramerate: {
          type: Number,
          value: 20
        },

        _targetFrameTime: {
          type: Number,
          computed: '__computeFrameTime(targetFramerate)'
        }

      };
    }

    static get observers() {
      return ['__itemsChanged(items.*)'];
    }

    constructor() {
      super();
      this.__instances = [];
      this.__limit = Infinity;
      this.__pool = [];
      this.__renderDebouncer = null;
      this.__itemsIdxToInstIdx = {};
      this.__chunkCount = null;
      this.__lastChunkTime = null;
      this.__sortFn = null;
      this.__filterFn = null;
      this.__observePaths = null;
      this.__ctor = null;
      this.__isDetached = true;
      this.template = null;
    }

    /**
     * @return {void}
     */
    disconnectedCallback() {
      super.disconnectedCallback();
      this.__isDetached = true;
      for (let i = 0; i < this.__instances.length; i++) {
        this.__detachInstance(i);
      }
    }

    /**
     * @return {void}
     */
    connectedCallback() {
      super.connectedCallback();
      this.style.display = 'none';
      // only perform attachment if the element was previously detached.
      if (this.__isDetached) {
        this.__isDetached = false;
        let parent = this.parentNode;
        for (let i = 0; i < this.__instances.length; i++) {
          this.__attachInstance(i, parent);
        }
      }
    }

    __ensureTemplatized() {
      // Templatizing (generating the instance constructor) needs to wait
      // until ready, since won't have its template content handed back to
      // it until then
      if (!this.__ctor) {
        let template = this.template = this.querySelector('template');
        if (!template) {
          // // Wait until childList changes and template should be there by then
          let observer = new MutationObserver(() => {
            if (this.querySelector('template')) {
              observer.disconnect();
              this.__render();
            } else {
              throw new Error('dom-repeat requires a <template> child');
            }
          });
          observer.observe(this, { childList: true });
          return false;
        }
        // Template instance props that should be excluded from forwarding
        let instanceProps = {};
        instanceProps[this.as] = true;
        instanceProps[this.indexAs] = true;
        instanceProps[this.itemsIndexAs] = true;
        this.__ctor = Polymer.Templatize.templatize(template, this, {
          mutableData: this.mutableData,
          parentModel: true,
          instanceProps: instanceProps,
          /**
           * @this {this}
           * @param {string} prop Property to set
           * @param {*} value Value to set property to
           */
          forwardHostProp: function (prop, value) {
            let i$ = this.__instances;
            for (let i = 0, inst; i < i$.length && (inst = i$[i]); i++) {
              inst.forwardHostProp(prop, value);
            }
          },
          /**
           * @this {this}
           * @param {Object} inst Instance to notify
           * @param {string} prop Property to notify
           * @param {*} value Value to notify
           */
          notifyInstanceProp: function (inst, prop, value) {
            if (Polymer.Path.matches(this.as, prop)) {
              let idx = inst[this.itemsIndexAs];
              if (prop == this.as) {
                this.items[idx] = value;
              }
              let path = Polymer.Path.translate(this.as, 'items.' + idx, prop);
              this.notifyPath(path, value);
            }
          }
        });
      }
      return true;
    }

    __getMethodHost() {
      // Technically this should be the owner of the outermost template.
      // In shadow dom, this is always getRootNode().host, but we can
      // approximate this via cooperation with our dataHost always setting
      // `_methodHost` as long as there were bindings (or id's) on this
      // instance causing it to get a dataHost.
      return this.__dataHost._methodHost || this.__dataHost;
    }

    __functionFromPropertyValue(functionOrMethodName) {
      if (typeof functionOrMethodName === 'string') {
        let methodName = functionOrMethodName;
        let obj = this.__getMethodHost();
        return function () {
          return obj[methodName].apply(obj, arguments);
        };
      }

      return functionOrMethodName;
    }

    __sortChanged(sort) {
      this.__sortFn = this.__functionFromPropertyValue(sort);
      if (this.items) {
        this.__debounceRender(this.__render);
      }
    }

    __filterChanged(filter) {
      this.__filterFn = this.__functionFromPropertyValue(filter);
      if (this.items) {
        this.__debounceRender(this.__render);
      }
    }

    __computeFrameTime(rate) {
      return Math.ceil(1000 / rate);
    }

    __initializeChunking() {
      if (this.initialCount) {
        this.__limit = this.initialCount;
        this.__chunkCount = this.initialCount;
        this.__lastChunkTime = performance.now();
      }
    }

    __tryRenderChunk() {
      // Debounced so that multiple calls through `_render` between animation
      // frames only queue one new rAF (e.g. array mutation & chunked render)
      if (this.items && this.__limit < this.items.length) {
        this.__debounceRender(this.__requestRenderChunk);
      }
    }

    __requestRenderChunk() {
      requestAnimationFrame(() => this.__renderChunk());
    }

    __renderChunk() {
      // Simple auto chunkSize throttling algorithm based on feedback loop:
      // measure actual time between frames and scale chunk count by ratio
      // of target/actual frame time
      let currChunkTime = performance.now();
      let ratio = this._targetFrameTime / (currChunkTime - this.__lastChunkTime);
      this.__chunkCount = Math.round(this.__chunkCount * ratio) || 1;
      this.__limit += this.__chunkCount;
      this.__lastChunkTime = currChunkTime;
      this.__debounceRender(this.__render);
    }

    __observeChanged() {
      this.__observePaths = this.observe && this.observe.replace('.*', '.').split(' ');
    }

    __itemsChanged(change) {
      if (this.items && !Array.isArray(this.items)) {
        console.warn('dom-repeat expected array for `items`, found', this.items);
      }
      // If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
      // path to that instance synchronously (returns false for non-item paths)
      if (!this.__handleItemPath(change.path, change.value)) {
        // Otherwise, the array was reset ('items') or spliced ('items.splices'),
        // so queue a full refresh
        this.__initializeChunking();
        this.__debounceRender(this.__render);
      }
    }

    __handleObservedPaths(path) {
      // Handle cases where path changes should cause a re-sort/filter
      if (this.__sortFn || this.__filterFn) {
        if (!path) {
          // Always re-render if the item itself changed
          this.__debounceRender(this.__render, this.delay);
        } else if (this.__observePaths) {
          // Otherwise, re-render if the path changed matches an observed path
          let paths = this.__observePaths;
          for (let i = 0; i < paths.length; i++) {
            if (path.indexOf(paths[i]) === 0) {
              this.__debounceRender(this.__render, this.delay);
            }
          }
        }
      }
    }

    /**
     * @param {function(this:DomRepeat)} fn Function to debounce.
     * @param {number=} delay Delay in ms to debounce by.
     */
    __debounceRender(fn, delay = 0) {
      this.__renderDebouncer = Polymer.Debouncer.debounce(this.__renderDebouncer, delay > 0 ? Polymer.Async.timeOut.after(delay) : Polymer.Async.microTask, fn.bind(this));
      Polymer.enqueueDebouncer(this.__renderDebouncer);
    }

    /**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */
    render() {
      // Queue this repeater, then flush all in order
      this.__debounceRender(this.__render);
      Polymer.flush();
    }

    __render() {
      if (!this.__ensureTemplatized()) {
        // No template found yet
        return;
      }
      this.__applyFullRefresh();
      // Reset the pool
      // TODO(kschaaf): Reuse pool across turns and nested templates
      // Now that objects/arrays are re-evaluated when set, we can safely
      // reuse pooled instances across turns, however we still need to decide
      // semantics regarding how long to hold, how many to hold, etc.
      this.__pool.length = 0;
      // Set rendered item count
      this._setRenderedItemCount(this.__instances.length);
      // Notify users
      this.dispatchEvent(new CustomEvent('dom-change', {
        bubbles: true,
        composed: true
      }));
      // Check to see if we need to render more items
      this.__tryRenderChunk();
    }

    __applyFullRefresh() {
      let items = this.items || [];
      let isntIdxToItemsIdx = new Array(items.length);
      for (let i = 0; i < items.length; i++) {
        isntIdxToItemsIdx[i] = i;
      }
      // Apply user filter
      if (this.__filterFn) {
        isntIdxToItemsIdx = isntIdxToItemsIdx.filter((i, idx, array) => this.__filterFn(items[i], idx, array));
      }
      // Apply user sort
      if (this.__sortFn) {
        isntIdxToItemsIdx.sort((a, b) => this.__sortFn(items[a], items[b]));
      }
      // items->inst map kept for item path forwarding
      const itemsIdxToInstIdx = this.__itemsIdxToInstIdx = {};
      let instIdx = 0;
      // Generate instances and assign items
      const limit = Math.min(isntIdxToItemsIdx.length, this.__limit);
      for (; instIdx < limit; instIdx++) {
        let inst = this.__instances[instIdx];
        let itemIdx = isntIdxToItemsIdx[instIdx];
        let item = items[itemIdx];
        itemsIdxToInstIdx[itemIdx] = instIdx;
        if (inst) {
          inst._setPendingProperty(this.as, item);
          inst._setPendingProperty(this.indexAs, instIdx);
          inst._setPendingProperty(this.itemsIndexAs, itemIdx);
          inst._flushProperties();
        } else {
          this.__insertInstance(item, instIdx, itemIdx);
        }
      }
      // Remove any extra instances from previous state
      for (let i = this.__instances.length - 1; i >= instIdx; i--) {
        this.__detachAndRemoveInstance(i);
      }
    }

    __detachInstance(idx) {
      let inst = this.__instances[idx];
      for (let i = 0; i < inst.children.length; i++) {
        let el = inst.children[i];
        inst.root.appendChild(el);
      }
      return inst;
    }

    __attachInstance(idx, parent) {
      let inst = this.__instances[idx];
      parent.insertBefore(inst.root, this);
    }

    __detachAndRemoveInstance(idx) {
      let inst = this.__detachInstance(idx);
      if (inst) {
        this.__pool.push(inst);
      }
      this.__instances.splice(idx, 1);
    }

    __stampInstance(item, instIdx, itemIdx) {
      let model = {};
      model[this.as] = item;
      model[this.indexAs] = instIdx;
      model[this.itemsIndexAs] = itemIdx;
      return new this.__ctor(model);
    }

    __insertInstance(item, instIdx, itemIdx) {
      let inst = this.__pool.pop();
      if (inst) {
        // TODO(kschaaf): If the pool is shared across turns, hostProps
        // need to be re-set to reused instances in addition to item
        inst._setPendingProperty(this.as, item);
        inst._setPendingProperty(this.indexAs, instIdx);
        inst._setPendingProperty(this.itemsIndexAs, itemIdx);
        inst._flushProperties();
      } else {
        inst = this.__stampInstance(item, instIdx, itemIdx);
      }
      let beforeRow = this.__instances[instIdx + 1];
      let beforeNode = beforeRow ? beforeRow.children[0] : this;
      this.parentNode.insertBefore(inst.root, beforeNode);
      this.__instances[instIdx] = inst;
      return inst;
    }

    // Implements extension point from Templatize mixin
    /**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @param {boolean} hidden Set to true to hide the children;
     * set to false to show them.
     * @return {void}
     * @protected
     */
    _showHideChildren(hidden) {
      for (let i = 0; i < this.__instances.length; i++) {
        this.__instances[i]._showHideChildren(hidden);
      }
    }

    // Called as a side effect of a host items.<key>.<path> path change,
    // responsible for notifying item.<path> changes to inst for key
    __handleItemPath(path, value) {
      let itemsPath = path.slice(6); // 'items.'.length == 6
      let dot = itemsPath.indexOf('.');
      let itemsIdx = dot < 0 ? itemsPath : itemsPath.substring(0, dot);
      // If path was index into array...
      if (itemsIdx == parseInt(itemsIdx, 10)) {
        let itemSubPath = dot < 0 ? '' : itemsPath.substring(dot + 1);
        // If the path is observed, it will trigger a full refresh
        this.__handleObservedPaths(itemSubPath);
        // Note, even if a rull refresh is triggered, always do the path
        // notification because unless mutableData is used for dom-repeat
        // and all elements in the instance subtree, a full refresh may
        // not trigger the proper update.
        let instIdx = this.__itemsIdxToInstIdx[itemsIdx];
        let inst = this.__instances[instIdx];
        if (inst) {
          let itemPath = this.as + (itemSubPath ? '.' + itemSubPath : '');
          // This is effectively `notifyPath`, but avoids some of the overhead
          // of the public API
          inst._setPendingPropertyOrPath(itemPath, value, false, true);
          inst._flushProperties();
        }
        return true;
      }
    }

    /**
     * Returns the item associated with a given element stamped by
     * this `dom-repeat`.
     *
     * Note, to modify sub-properties of the item,
     * `modelForElement(el).set('item.<sub-prop>', value)`
     * should be used.
     *
     * @param {!HTMLElement} el Element for which to return the item.
     * @return {*} Item associated with the element.
     */
    itemForElement(el) {
      let instance = this.modelForElement(el);
      return instance && instance[this.as];
    }

    /**
     * Returns the inst index for a given element stamped by this `dom-repeat`.
     * If `sort` is provided, the index will reflect the sorted order (rather
     * than the original array order).
     *
     * @param {!HTMLElement} el Element for which to return the index.
     * @return {?number} Row index associated with the element (note this may
     *   not correspond to the array index if a user `sort` is applied).
     */
    indexForElement(el) {
      let instance = this.modelForElement(el);
      return instance && instance[this.indexAs];
    }

    /**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model is an instance of `Polymer.Base`, and
     * should be used to manipulate data associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @param {!HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     */
    modelForElement(el) {
      return Polymer.Templatize.modelForElement(this.template, el);
    }

  }

  customElements.define(DomRepeat.is, DomRepeat);

  Polymer.DomRepeat = DomRepeat;
})();

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(11);

__webpack_require__(10);

__webpack_require__(8);

__webpack_require__(9);

(function () {
  'use strict';

  /**
   * The `<dom-if>` element will stamp a light-dom `<template>` child when
   * the `if` property becomes truthy, and the template can use Polymer
   * data-binding and declarative event features when used in the context of
   * a Polymer element's template.
   *
   * When `if` becomes falsy, the stamped content is hidden but not
   * removed from dom. When `if` subsequently becomes truthy again, the content
   * is simply re-shown. This approach is used due to its favorable performance
   * characteristics: the expense of creating template content is paid only
   * once and lazily.
   *
   * Set the `restamp` property to true to force the stamped content to be
   * created / destroyed when the `if` condition changes.
   *
   * @customElement
   * @polymer
   * @extends Polymer.Element
   * @memberof Polymer
   * @summary Custom element that conditionally stamps and hides or removes
   *   template content based on a boolean flag.
   */

  class DomIf extends Polymer.Element {

    // Not needed to find template; can be removed once the analyzer
    // can find the tag name from customElements.define call
    static get is() {
      return 'dom-if';
    }

    static get template() {
      return null;
    }

    static get properties() {

      return {

        /**
         * Fired whenever DOM is added or removed/hidden by this template (by
         * default, rendering occurs lazily).  To force immediate rendering, call
         * `render`.
         *
         * @event dom-change
         */

        /**
         * A boolean indicating whether this template should stamp.
         */
        if: {
          type: Boolean,
          observer: '__debounceRender'
        },

        /**
         * When true, elements will be removed from DOM and discarded when `if`
         * becomes false and re-created and added back to the DOM when `if`
         * becomes true.  By default, stamped elements will be hidden but left
         * in the DOM when `if` becomes false, which is generally results
         * in better performance.
         */
        restamp: {
          type: Boolean,
          observer: '__debounceRender'
        }

      };
    }

    constructor() {
      super();
      this.__renderDebouncer = null;
      this.__invalidProps = null;
      this.__instance = null;
      this._lastIf = false;
      this.__ctor = null;
    }

    __debounceRender() {
      // Render is async for 2 reasons:
      // 1. To eliminate dom creation trashing if user code thrashes `if` in the
      //    same turn. This was more common in 1.x where a compound computed
      //    property could result in the result changing multiple times, but is
      //    mitigated to a large extent by batched property processing in 2.x.
      // 2. To avoid double object propagation when a bag including values bound
      //    to the `if` property as well as one or more hostProps could enqueue
      //    the <dom-if> to flush before the <template>'s host property
      //    forwarding. In that scenario creating an instance would result in
      //    the host props being set once, and then the enqueued changes on the
      //    template would set properties a second time, potentially causing an
      //    object to be set to an instance more than once.  Creating the
      //    instance async from flushing data ensures this doesn't happen. If
      //    we wanted a sync option in the future, simply having <dom-if> flush
      //    (or clear) its template's pending host properties before creating
      //    the instance would also avoid the problem.
      this.__renderDebouncer = Polymer.Debouncer.debounce(this.__renderDebouncer, Polymer.Async.microTask, () => this.__render());
      Polymer.enqueueDebouncer(this.__renderDebouncer);
    }

    /**
     * @return {void}
     */
    disconnectedCallback() {
      super.disconnectedCallback();
      if (!this.parentNode || this.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE && !this.parentNode.host) {
        this.__teardownInstance();
      }
    }

    /**
     * @return {void}
     */
    connectedCallback() {
      super.connectedCallback();
      this.style.display = 'none';
      if (this.if) {
        this.__debounceRender();
      }
    }

    /**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */
    render() {
      Polymer.flush();
    }

    __render() {
      if (this.if) {
        if (!this.__ensureInstance()) {
          // No template found yet
          return;
        }
        this._showHideChildren();
      } else if (this.restamp) {
        this.__teardownInstance();
      }
      if (!this.restamp && this.__instance) {
        this._showHideChildren();
      }
      if (this.if != this._lastIf) {
        this.dispatchEvent(new CustomEvent('dom-change', {
          bubbles: true,
          composed: true
        }));
        this._lastIf = this.if;
      }
    }

    __ensureInstance() {
      let parentNode = this.parentNode;
      // Guard against element being detached while render was queued
      if (parentNode) {
        if (!this.__ctor) {
          let template = this.querySelector('template');
          if (!template) {
            // Wait until childList changes and template should be there by then
            let observer = new MutationObserver(() => {
              if (this.querySelector('template')) {
                observer.disconnect();
                this.__render();
              } else {
                throw new Error('dom-if requires a <template> child');
              }
            });
            observer.observe(this, { childList: true });
            return false;
          }
          this.__ctor = Polymer.Templatize.templatize(template, this, {
            // dom-if templatizer instances require `mutable: true`, as
            // `__syncHostProperties` relies on that behavior to sync objects
            mutableData: true,
            /**
             * @param {string} prop Property to forward
             * @param {*} value Value of property
             * @this {this}
             */
            forwardHostProp: function (prop, value) {
              if (this.__instance) {
                if (this.if) {
                  this.__instance.forwardHostProp(prop, value);
                } else {
                  // If we have an instance but are squelching host property
                  // forwarding due to if being false, note the invalidated
                  // properties so `__syncHostProperties` can sync them the next
                  // time `if` becomes true
                  this.__invalidProps = this.__invalidProps || Object.create(null);
                  this.__invalidProps[Polymer.Path.root(prop)] = true;
                }
              }
            }
          });
        }
        if (!this.__instance) {
          this.__instance = new this.__ctor();
          parentNode.insertBefore(this.__instance.root, this);
        } else {
          this.__syncHostProperties();
          let c$ = this.__instance.children;
          if (c$ && c$.length) {
            // Detect case where dom-if was re-attached in new position
            let lastChild = this.previousSibling;
            if (lastChild !== c$[c$.length - 1]) {
              for (let i = 0, n; i < c$.length && (n = c$[i]); i++) {
                parentNode.insertBefore(n, this);
              }
            }
          }
        }
      }
      return true;
    }

    __syncHostProperties() {
      let props = this.__invalidProps;
      if (props) {
        for (let prop in props) {
          this.__instance._setPendingProperty(prop, this.__dataHost[prop]);
        }
        this.__invalidProps = null;
        this.__instance._flushProperties();
      }
    }

    __teardownInstance() {
      if (this.__instance) {
        let c$ = this.__instance.children;
        if (c$ && c$.length) {
          // use first child parent, for case when dom-if may have been detached
          let parent = c$[0].parentNode;
          for (let i = 0, n; i < c$.length && (n = c$[i]); i++) {
            parent.removeChild(n);
          }
        }
        this.__instance = null;
        this.__invalidProps = null;
      }
    }

    /**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @return {void}
     * @protected
     */
    _showHideChildren() {
      let hidden = this.__hideTemplateChildren__ || !this.if;
      if (this.__instance) {
        this.__instance._showHideChildren(hidden);
      }
    }

  }

  customElements.define(DomIf.is, DomIf);

  Polymer.DomIf = DomIf;
})();

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(11);

__webpack_require__(2);

__webpack_require__(22);

(function () {
  'use strict';

  /**
   * Element mixin for recording dynamic associations between item paths in a
   * master `items` array and a `selected` array such that path changes to the
   * master array (at the host) element or elsewhere via data-binding) are
   * correctly propagated to items in the selected array and vice-versa.
   *
   * The `items` property accepts an array of user data, and via the
   * `select(item)` and `deselect(item)` API, updates the `selected` property
   * which may be bound to other parts of the application, and any changes to
   * sub-fields of `selected` item(s) will be kept in sync with items in the
   * `items` array.  When `multi` is false, `selected` is a property
   * representing the last selected item.  When `multi` is true, `selected`
   * is an array of multiply selected items.
   *
   * @polymer
   * @mixinFunction
   * @appliesMixin Polymer.ElementMixin
   * @memberof Polymer
   * @summary Element mixin for recording dynamic associations between item paths in a
   * master `items` array and a `selected` array
   */

  let ArraySelectorMixin = Polymer.dedupingMixin(superClass => {

    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_ElementMixin}
     */
    let elementBase = Polymer.ElementMixin(superClass);

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_ArraySelectorMixin}
     * @unrestricted
     */
    class ArraySelectorMixin extends elementBase {

      static get properties() {

        return {

          /**
           * An array containing items from which selection will be made.
           */
          items: {
            type: Array
          },

          /**
           * When `true`, multiple items may be selected at once (in this case,
           * `selected` is an array of currently selected items).  When `false`,
           * only one item may be selected at a time.
           */
          multi: {
            type: Boolean,
            value: false
          },

          /**
           * When `multi` is true, this is an array that contains any selected.
           * When `multi` is false, this is the currently selected item, or `null`
           * if no item is selected.
           * @type {?(Object|Array<!Object>)}
           */
          selected: {
            type: Object,
            notify: true
          },

          /**
           * When `multi` is false, this is the currently selected item, or `null`
           * if no item is selected.
           * @type {?Object}
           */
          selectedItem: {
            type: Object,
            notify: true
          },

          /**
           * When `true`, calling `select` on an item that is already selected
           * will deselect the item.
           */
          toggle: {
            type: Boolean,
            value: false
          }

        };
      }

      static get observers() {
        return ['__updateSelection(multi, items.*)'];
      }

      constructor() {
        super();
        this.__lastItems = null;
        this.__lastMulti = null;
        this.__selectedMap = null;
      }

      __updateSelection(multi, itemsInfo) {
        let path = itemsInfo.path;
        if (path == 'items') {
          // Case 1 - items array changed, so diff against previous array and
          // deselect any removed items and adjust selected indices
          let newItems = itemsInfo.base || [];
          let lastItems = this.__lastItems;
          let lastMulti = this.__lastMulti;
          if (multi !== lastMulti) {
            this.clearSelection();
          }
          if (lastItems) {
            let splices = Polymer.ArraySplice.calculateSplices(newItems, lastItems);
            this.__applySplices(splices);
          }
          this.__lastItems = newItems;
          this.__lastMulti = multi;
        } else if (itemsInfo.path == 'items.splices') {
          // Case 2 - got specific splice information describing the array mutation:
          // deselect any removed items and adjust selected indices
          this.__applySplices(itemsInfo.value.indexSplices);
        } else {
          // Case 3 - an array element was changed, so deselect the previous
          // item for that index if it was previously selected
          let part = path.slice('items.'.length);
          let idx = parseInt(part, 10);
          if (part.indexOf('.') < 0 && part == idx) {
            this.__deselectChangedIdx(idx);
          }
        }
      }

      __applySplices(splices) {
        let selected = this.__selectedMap;
        // Adjust selected indices and mark removals
        for (let i = 0; i < splices.length; i++) {
          let s = splices[i];
          selected.forEach((idx, item) => {
            if (idx < s.index) {
              // no change
            } else if (idx >= s.index + s.removed.length) {
              // adjust index
              selected.set(item, idx + s.addedCount - s.removed.length);
            } else {
              // remove index
              selected.set(item, -1);
            }
          });
          for (let j = 0; j < s.addedCount; j++) {
            let idx = s.index + j;
            if (selected.has(this.items[idx])) {
              selected.set(this.items[idx], idx);
            }
          }
        }
        // Update linked paths
        this.__updateLinks();
        // Remove selected items that were removed from the items array
        let sidx = 0;
        selected.forEach((idx, item) => {
          if (idx < 0) {
            if (this.multi) {
              this.splice('selected', sidx, 1);
            } else {
              this.selected = this.selectedItem = null;
            }
            selected.delete(item);
          } else {
            sidx++;
          }
        });
      }

      __updateLinks() {
        this.__dataLinkedPaths = {};
        if (this.multi) {
          let sidx = 0;
          this.__selectedMap.forEach(idx => {
            if (idx >= 0) {
              this.linkPaths('items.' + idx, 'selected.' + sidx++);
            }
          });
        } else {
          this.__selectedMap.forEach(idx => {
            this.linkPaths('selected', 'items.' + idx);
            this.linkPaths('selectedItem', 'items.' + idx);
          });
        }
      }

      /**
       * Clears the selection state.
       * @return {void}
       */
      clearSelection() {
        // Unbind previous selection
        this.__dataLinkedPaths = {};
        // The selected map stores 3 pieces of information:
        // key: items array object
        // value: items array index
        // order: selected array index
        this.__selectedMap = new Map();
        // Initialize selection
        this.selected = this.multi ? [] : null;
        this.selectedItem = null;
      }

      /**
       * Returns whether the item is currently selected.
       *
       * @param {*} item Item from `items` array to test
       * @return {boolean} Whether the item is selected
       */
      isSelected(item) {
        return this.__selectedMap.has(item);
      }

      /**
       * Returns whether the item is currently selected.
       *
       * @param {number} idx Index from `items` array to test
       * @return {boolean} Whether the item is selected
       */
      isIndexSelected(idx) {
        return this.isSelected(this.items[idx]);
      }

      __deselectChangedIdx(idx) {
        let sidx = this.__selectedIndexForItemIndex(idx);
        if (sidx >= 0) {
          let i = 0;
          this.__selectedMap.forEach((idx, item) => {
            if (sidx == i++) {
              this.deselect(item);
            }
          });
        }
      }

      __selectedIndexForItemIndex(idx) {
        let selected = this.__dataLinkedPaths['items.' + idx];
        if (selected) {
          return parseInt(selected.slice('selected.'.length), 10);
        }
      }

      /**
       * Deselects the given item if it is already selected.
       *
       * @param {*} item Item from `items` array to deselect
       * @return {void}
       */
      deselect(item) {
        let idx = this.__selectedMap.get(item);
        if (idx >= 0) {
          this.__selectedMap.delete(item);
          let sidx;
          if (this.multi) {
            sidx = this.__selectedIndexForItemIndex(idx);
          }
          this.__updateLinks();
          if (this.multi) {
            this.splice('selected', sidx, 1);
          } else {
            this.selected = this.selectedItem = null;
          }
        }
      }

      /**
       * Deselects the given index if it is already selected.
       *
       * @param {number} idx Index from `items` array to deselect
       * @return {void}
       */
      deselectIndex(idx) {
        this.deselect(this.items[idx]);
      }

      /**
       * Selects the given item.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @param {*} item Item from `items` array to select
       * @return {void}
       */
      select(item) {
        this.selectIndex(this.items.indexOf(item));
      }

      /**
       * Selects the given index.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @param {number} idx Index from `items` array to select
       * @return {void}
       */
      selectIndex(idx) {
        let item = this.items[idx];
        if (!this.isSelected(item)) {
          if (!this.multi) {
            this.__selectedMap.clear();
          }
          this.__selectedMap.set(item, idx);
          this.__updateLinks();
          if (this.multi) {
            this.push('selected', item);
          } else {
            this.selected = this.selectedItem = item;
          }
        } else if (this.toggle) {
          this.deselectIndex(idx);
        }
      }

    }

    return ArraySelectorMixin;
  });

  // export mixin
  Polymer.ArraySelectorMixin = ArraySelectorMixin;

  /**
   * @constructor
   * @extends {Polymer.Element}
   * @implements {Polymer_ArraySelectorMixin}
   */
  let baseArraySelector = ArraySelectorMixin(Polymer.Element);

  /**
   * Element implementing the `Polymer.ArraySelector` mixin, which records
   * dynamic associations between item paths in a master `items` array and a
   * `selected` array such that path changes to the master array (at the host)
   * element or elsewhere via data-binding) are correctly propagated to items
   * in the selected array and vice-versa.
   *
   * The `items` property accepts an array of user data, and via the
   * `select(item)` and `deselect(item)` API, updates the `selected` property
   * which may be bound to other parts of the application, and any changes to
   * sub-fields of `selected` item(s) will be kept in sync with items in the
   * `items` array.  When `multi` is false, `selected` is a property
   * representing the last selected item.  When `multi` is true, `selected`
   * is an array of multiply selected items.
   *
   * Example:
   *
   * ```html
   * <dom-module id="employee-list">
   *
   *   <template>
   *
   *     <div> Employee list: </div>
   *     <dom-repeat id="employeeList" items="{{employees}}">
   *       <template>
   *         <div>First name: <span>{{item.first}}</span></div>
   *           <div>Last name: <span>{{item.last}}</span></div>
   *           <button on-click="toggleSelection">Select</button>
   *       </template>
   *     </dom-repeat>
   *
   *     <array-selector id="selector" items="{{employees}}" selected="{{selected}}" multi toggle></array-selector>
   *
   *     <div> Selected employees: </div>
   *     <dom-repeat items="{{selected}}">
   *       <template>
   *         <div>First name: <span>{{item.first}}</span></div>
   *         <div>Last name: <span>{{item.last}}</span></div>
   *       </template>
   *     </dom-repeat>
   *
   *   </template>
   *
   * </dom-module>
   * ```
   *
   * ```js
   *class EmployeeList extends Polymer.Element {
   *  static get is() { return 'employee-list'; }
   *  static get properties() {
   *    return {
   *      employees: {
   *        value() {
   *          return [
   *            {first: 'Bob', last: 'Smith'},
   *            {first: 'Sally', last: 'Johnson'},
   *            ...
   *          ];
   *        }
   *      }
   *    };
   *  }
   *  toggleSelection(e) {
   *    let item = this.$.employeeList.itemForElement(e.target);
   *    this.$.selector.select(item);
   *  }
   *}
   * ```
   *
   * @polymer
   * @customElement
   * @extends {baseArraySelector}
   * @appliesMixin Polymer.ArraySelectorMixin
   * @memberof Polymer
   * @summary Custom element that links paths between an input `items` array and
   *   an output `selected` item or array based on calls to its selection API.
   */
  class ArraySelector extends baseArraySelector {
    // Not needed to find template; can be removed once the analyzer
    // can find the tag name from customElements.define call
    static get is() {
      return 'array-selector';
    }
  }
  customElements.define(ArraySelector.is, ArraySelector);
  Polymer.ArraySelector = ArraySelector;
})();

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(56);

__webpack_require__(17);

(function () {
  'use strict';

  const attr = 'include';

  const CustomStyleInterface = window.ShadyCSS.CustomStyleInterface;

  /**
   * Custom element for defining styles in the main document that can take
   * advantage of [shady DOM](https://github.com/webcomponents/shadycss) shims
   * for style encapsulation, custom properties, and custom mixins.
   *
   * - Document styles defined in a `<custom-style>` are shimmed to ensure they
   *   do not leak into local DOM when running on browsers without native
   *   Shadow DOM.
   * - Custom properties can be defined in a `<custom-style>`. Use the `html` selector
   *   to define custom properties that apply to all custom elements.
   * - Custom mixins can be defined in a `<custom-style>`, if you import the optional
   *   [apply shim](https://github.com/webcomponents/shadycss#about-applyshim)
   *   (`shadycss/apply-shim.html`).
   *
   * To use:
   *
   * - Import `custom-style.html`.
   * - Place a `<custom-style>` element in the main document, wrapping an inline `<style>` tag that
   *   contains the CSS rules you want to shim.
   *
   * For example:
   *
   * ```
   * <!-- import apply shim--only required if using mixins -->
   * <link rel="import href="bower_components/shadycss/apply-shim.html">
   * <!-- import custom-style element -->
   * <link rel="import" href="bower_components/polymer/lib/elements/custom-style.html">
   * ...
   * <custom-style>
   *   <style>
   *     html {
   *       --custom-color: blue;
   *       --custom-mixin: {
   *         font-weight: bold;
   *         color: red;
   *       };
   *     }
   *   </style>
   * </custom-style>
   * ```
   *
   * @customElement
   * @extends HTMLElement
   * @memberof Polymer
   * @summary Custom element for defining styles in the main document that can
   *   take advantage of Polymer's style scoping and custom properties shims.
   */
  class CustomStyle extends HTMLElement {
    constructor() {
      super();
      this._style = null;
      CustomStyleInterface.addCustomStyle(this);
    }
    /**
     * Returns the light-DOM `<style>` child this element wraps.  Upon first
     * call any style modules referenced via the `include` attribute will be
     * concatenated to this element's `<style>`.
     *
     * @return {HTMLStyleElement} This element's light-DOM `<style>`
     */
    getStyle() {
      if (this._style) {
        return this._style;
      }
      const style = /** @type {HTMLStyleElement} */this.querySelector('style');
      if (!style) {
        return null;
      }
      this._style = style;
      const include = style.getAttribute(attr);
      if (include) {
        style.removeAttribute(attr);
        style.textContent = Polymer.StyleGather.cssFromModules(include) + style.textContent;
      }
      /*
      HTML Imports styling the main document are deprecated in Chrome
      https://crbug.com/523952
       If this element is not in the main document, then it must be in an HTML Import document.
      In that case, move the custom style to the main document.
       The ordering of `<custom-style>` should stay the same as when loaded by HTML Imports, but there may be odd
      cases of ordering w.r.t the main document styles.
      */
      if (this.ownerDocument !== window.document) {
        window.document.head.appendChild(this);
      }
      return this._style;
    }
  }

  window.customElements.define('custom-style', CustomStyle);
  Polymer.CustomStyle = CustomStyle;
})();

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(57);

/***/ }),
/* 57 */
/***/ (function(module, exports) {

(function () {
  /*
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var c = !(window.ShadyDOM && window.ShadyDOM.inUse),
      f;function g(a) {
    f = a && a.shimcssproperties ? !1 : c || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? f = window.ShadyCSS.nativeCss : window.ShadyCSS ? (g(window.ShadyCSS), window.ShadyCSS = void 0) : g(window.WebComponents && window.WebComponents.flags);var h = f;function k(a, b) {
    for (var d in b) null === d ? a.style.removeProperty(d) : a.style.setProperty(d, b[d]);
  };var l = null,
      m = window.HTMLImports && window.HTMLImports.whenReady || null,
      n;function p() {
    var a = q;requestAnimationFrame(function () {
      m ? m(a) : (l || (l = new Promise(function (a) {
        n = a;
      }), "complete" === document.readyState ? n() : document.addEventListener("readystatechange", function () {
        "complete" === document.readyState && n();
      })), l.then(function () {
        a && a();
      }));
    });
  };var r = null,
      q = null;function t() {
    this.customStyles = [];this.enqueued = !1;
  }function u(a) {
    !a.enqueued && q && (a.enqueued = !0, p());
  }t.prototype.c = function (a) {
    a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), u(this));
  };t.prototype.b = function (a) {
    if (a.__shadyCSSCachedStyle) return a.__shadyCSSCachedStyle;var b;a.getStyle ? b = a.getStyle() : b = a;return b;
  };
  t.prototype.a = function () {
    for (var a = this.customStyles, b = 0; b < a.length; b++) {
      var d = a[b];if (!d.__shadyCSSCachedStyle) {
        var e = this.b(d);e && (e = e.__appliedElement || e, r && r(e), d.__shadyCSSCachedStyle = e);
      }
    }return a;
  };t.prototype.addCustomStyle = t.prototype.c;t.prototype.getStyleForCustomStyle = t.prototype.b;t.prototype.processStyles = t.prototype.a;
  Object.defineProperties(t.prototype, { transformCallback: { get: function () {
        return r;
      }, set: function (a) {
        r = a;
      } }, validateCallback: { get: function () {
        return q;
      }, set: function (a) {
        var b = !1;q || (b = !0);q = a;b && u(this);
      } } });var v = new t();window.ShadyCSS || (window.ShadyCSS = { prepareTemplate: function () {}, styleSubtree: function (a, b) {
      v.a();k(a, b);
    }, styleElement: function () {
      v.a();
    }, styleDocument: function (a) {
      v.a();k(document.body, a);
    }, getComputedStyleValue: function (a, b) {
      return (a = window.getComputedStyle(a).getPropertyValue(b)) ? a.trim() : "";
    }, nativeCss: h, nativeShadow: c });window.ShadyCSS.CustomStyleInterface = v;
}).call(this);

//# sourceMappingURL=custom-style-interface.min.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(6);

(function () {
  'use strict';

  let mutablePropertyChange;
  /** @suppress {missingProperties} */
  (() => {
    mutablePropertyChange = Polymer.MutableData._mutablePropertyChange;
  })();

  /**
   * Legacy element behavior to skip strict dirty-checking for objects and arrays,
   * (always consider them to be "dirty") for use on legacy API Polymer elements.
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this behavior or enable the
   * `Polymer.OptionalMutableDataBehavior`.
   *
   * In order to make the dirty check strategy configurable, see
   * `Polymer.OptionalMutableDataBehavior`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @polymerBehavior
   * @memberof Polymer
   * @summary Behavior to skip strict dirty-checking for objects and
   *   arrays
   */
  Polymer.MutableDataBehavior = {

    /**
     * Overrides `Polymer.PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */
    _shouldPropertyChange(property, value, old) {
      return mutablePropertyChange(this, property, value, old, true);
    }
  };

  /**
   * Legacy element behavior to add the optional ability to skip strict
   * dirty-checking for objects and arrays (always consider them to be
   * "dirty") by setting a `mutable-data` attribute on an element instance.
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will allow Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must enable this behavior or apply the
   * `Polymer.OptionalMutableDataBehavior`.
   *
   * While this behavior adds the ability to forgo Object/Array dirty checking,
   * the `mutableData` flag defaults to false and must be set on the instance.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse by relying on `mutableData: true` as opposed to using
   * strict dirty checking with immutable patterns or Polymer's path notification
   * API.
   *
   * @polymerBehavior
   * @memberof Polymer
   * @summary Behavior to optionally skip strict dirty-checking for objects and
   *   arrays
   */
  Polymer.OptionalMutableDataBehavior = {

    properties: {
      /**
       * Instance-level flag for configuring the dirty-checking strategy
       * for this element.  When true, Objects and Arrays will skip dirty
       * checking, otherwise strict equality checking will be used.
       */
      mutableData: Boolean
    },

    /**
     * Overrides `Polymer.PropertyEffects` to skip strict equality checking
     * for Objects and Arrays.
     *
     * Pulls the value to dirty check against from the `__dataTemp` cache
     * (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @this {this}
     * @protected
     */
    _shouldPropertyChange(property, value, old) {
      return mutablePropertyChange(this, property, value, old, this.mutableData);
    }
  };
})();

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(3);

__webpack_require__(24);

__webpack_require__(25);

__webpack_require__(61);

__webpack_require__(28);

__webpack_require__(67);

const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=vaadin-upload> <template> <style>:host{@apply --layout-vertical;display:block;position:relative;text-align:left}:host(:not([nodrop])){border:1px dashed;border-color:var(--divider-color,#666);border-radius:3px;overflow:hidden;padding:16px}:host([dragover-valid]){border-color:var(--primary-color,#00b4f0)}:host::before{@apply --layout-fit;content:'';display:none;z-index:10}:host([dragover])::before{display:block}#dragRipple{color:var(--light-primary-color,#7cd8f7);@apply --vaadin-upload-drag-ripple;}#dropLabel{@apply --layout-flex;@apply --paper-font-body2;position:relative;padding:.43em .57em;margin:0 .29em;color:var(--disabled-text-color,#b3b3b3);@apply --vaadin-upload-drop-label;}:host([dragover-valid]) #dropLabel{color:var(--primary-color,#00b4f0);@apply --vaadin-upload-drop-label-dragover;}#dropLabel ::slotted(iron-icon),#dropLabelIcon{margin-right:.25em;@apply --vaadin-upload-drop-label-icon;}#fileList{position:relative;@apply --vaadin-upload-file-list;}#buttons{@apply --layout-horizontal;position:relative;@apply --vaadin-upload-buttons;}#buttonsPrimary{@apply --layout-horizontal;@apply --layout-flex;@apply --layout-start;margin-left:-.29em;@apply --vaadin-upload-buttons-primary;}#addFiles{@apply --vaadin-upload-button-add-wrapper;}#addButton{@apply --paper-font-button;padding:.43em .57em;background:var(--primary-color,#00b4f0);color:var(--primary-font-color,#fff);@apply --vaadin-upload-button-add;}#addButton[disabled]{background:var(--divider-color,#e0e0e0);color:var(--disabled-text-color,gray);@apply --vaadin-upload-button-add-disabled;}</style> <div id=buttons> <div id=buttonsPrimary> <div id=addFiles on-tap=_onAddFilesClick> <slot name=add-button> <paper-button id=addButton disabled$=[[maxFilesReached]]> [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]] </paper-button> </slot> </div> <div id=dropLabel hidden$=[[nodrop]]> <slot name=drop-label-icon> <iron-icon id=dropLabelIcon icon=vaadin-upload:file-upload></iron-icon> </slot> <slot name=drop-label> [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]] </slot> </div> </div> </div> <slot name=file-list> <div id=fileList> <template is=dom-repeat items=[[files]] as=file> <vaadin-upload-file file=[[file]]></vaadin-upload-file> </template> </div> </slot> <slot></slot> <input type=file id=fileInput on-change=_onFileInputChange hidden=\"\" accept$={{accept}} multiple$=[[_isMultiple(maxFiles)]]> <paper-ripple id=dragRipple noink=\"\"></paper-ripple> </template> </dom-module>");

Polymer({

  is: 'vaadin-upload',

  properties: {
    /**
     * Define whether the element supports dropping files on it for uploading.
     * By default it's enabled in desktop and disabled in touch devices
     * because mobile devices do not support drag events in general. Setting
     * it false means that drop is enabled even in touch-devices, and true
     * disables drop in all devices.
     *
     * @default true in touch-devices, false otherwise.
     */
    nodrop: {
      type: Boolean,
      reflectToAttribute: true,
      value: function () {
        try {
          return !!document.createEvent('TouchEvent');
        } catch (e) {
          return false;
        }
      }
    },

    /**
     * The server URL. The default value is an empty string, which means that
     * _window.location_ will be used.
     */
    target: {
      type: String,
      value: ''
    },

    /**
     * HTTP Method used to send the files. Only POST and PUT are allowed.
     */
    method: {
      type: String,
      value: 'POST'
    },

    /**
     * Key-Value map to send to the server. If you set this property as an
     * attribute, use a valid JSON string, for example:
     * ```
     * <vaadin-upload headers='{"X-Foo": "Bar"}'></vaadin-upload>
     * ```
     */
    headers: {
      type: Object,
      value: {}
    },

    /**
     * Max time in milliseconds for the entire upload process, if exceeded the
     * request will be aborted. Zero means that there is no timeout.
     *
     */
    timeout: {
      type: Number,
      value: 0
    },

    _dragover: {
      type: Boolean,
      value: false,
      observer: '_dragoverChanged'
    },

    /**
     * The array of files being processed, or already uploaded.
     *
     * Each element is a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File)
     * object with a number of extra properties  to track the upload process:
     * - `uploadTarget`: The target URL used to upload this file.
     * - `elapsed`: Elapsed time since the upload started.
     * - `elapsedStr`: Human-readable elapsed time.
     * - `remaining`: Number of seconds remaining for the upload to finish.
     * - `remainingStr`: Human-readable remaining time for the upload to finish.
     * - `progress`: Percentage of the file already uploaded.
     * - `speed`: Upload speed in kB/s.
     * - `size`: File size in bytes.
     * - `totalStr`: Human-readable total size of the file.
     * - `loaded`: Bytes transferred so far.
     * - `loadedStr`: Human-readable uploaded size at the moment.
     * - `status`: Status of the upload process.
     * - `error`: Error message in case the upload failed.
     * - `abort`: True if the file was canceled by the user.
     * - `complete`: True when the file was transferred to the server.
     * - `uploading`: True while trasferring data to the server.
     */
    files: {
      type: Array,
      notify: true,
      value: function () {
        return [];
      }
    },

    /**
     * Limit of files to upload, by default it is unlimited. If the value is
     * set to one, native file browser will prevent selecting multiple files.
     */
    maxFiles: {
      type: Number,
      value: Infinity
    },

    /**
     * Specifies if the maximum number of files have been uploaded
     */
    maxFilesReached: {
      type: Boolean,
      value: false,
      notify: true,
      readOnly: true,
      computed: '_maxFilesAdded(maxFiles, files.length)'
    },

    /**
     * Specifies the types of files that the server accepts.
     * Syntax: a comma-separated list of MIME type patterns (wildcards are
     * allowed) or file extensions.
     * Notice that MIME types are widely supported, while file extensions
     * are only implemented in certain browsers, so avoid using it.
     * Example: accept="video/*,image/tiff" or accept=".pdf,audio/mp3"
     */
    accept: {
      type: String,
      value: ''
    },

    /**
     * Specifies the maximum file size in bytes allowed to upload.
     * Notice that it is a client-side constraint, which will be checked before
     * sending the request. Obviously you need to do the same validation in
     * the server-side and be sure that they are aligned.
     */
    maxFileSize: {
      type: Number,
      value: Infinity
    },

    /**
     * Specifies if the dragover is validated with maxFiles and
     * accept properties.
     */
    _dragoverValid: {
      type: Boolean,
      value: false,
      observer: '_dragoverValidChanged'
    },

    /**
     * Specifies the 'name' property at Content-Disposition
     */
    formDataName: {
      type: String,
      value: 'file'
    },

    /**
     * Prevents upload(s) from immediately uploading upon adding file(s).
     * When set, you must manually trigger uploads using the `uploadFiles` method
     */
    noAuto: {
      type: Boolean,
      value: false
    },

    /**
     * The object used to localize this component.
     * For changing the default localization, change the entire
     * _i18n_ object or just the property you want to modify.
     *
     * The object has the following JSON structure and default values:
    {
    dropFiles: {
     one: 'Drop file here...',
     many: 'Drop files here...'
    },
    addFiles: {
     one: 'Select File',
     many: 'Upload Files'
    },
    cancel: 'Cancel',
    error: {
     tooManyFiles: 'Too Many Files.',
     fileIsTooBig: 'File is Too Big.',
     incorrectFileType: 'Incorrect File Type.'
    },
    uploading: {
     status: {
       connecting: 'Connecting...',
       stalled: 'Stalled.',
       processing: 'Processing File...',
       held: 'Queued'
     },
     remainingTime: {
       prefix: 'remaining time: ',
       unknown: 'unknown remaining time'
     },
     error: {
       serverUnavailable: 'Server Unavailable',
       unexpectedServerError: 'Unexpected Server Error',
       forbidden: 'Forbidden'
     }
    },
    units: {
     size: ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    },
    formatSize: function(bytes) {
     // returns the size followed by the best suitable unit
    },
    formatTime: function(seconds, [secs, mins, hours]) {
     // returns a 'HH:MM:SS' string
    }
    }
      *
     * @default {English}
     */
    i18n: {
      type: Object,
      value: function () {
        return {
          dropFiles: {
            one: 'Drop file here...',
            many: 'Drop files here...'
          },
          addFiles: {
            one: 'Select File',
            many: 'Upload Files'
          },
          cancel: 'Cancel',
          error: {
            tooManyFiles: 'Too Many Files.',
            fileIsTooBig: 'File is Too Big.',
            incorrectFileType: 'Incorrect File Type.'
          },
          uploading: {
            status: {
              connecting: 'Connecting...',
              stalled: 'Stalled.',
              processing: 'Processing File...',
              held: 'Queued'
            },
            remainingTime: {
              prefix: 'remaining time: ',
              unknown: 'unknown remaining time'
            },
            error: {
              serverUnavailable: 'Server Unavailable',
              unexpectedServerError: 'Unexpected Server Error',
              forbidden: 'Forbidden'
            }
          },
          units: {
            size: ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
          }
        };
      }
    }
  },

  listeners: {
    'dragover': '_onDragover',
    'dragleave': '_onDragleave',
    'drop': '_onDrop',
    'file-retry': '_onFileRetry',
    'file-abort': '_onFileAbort',
    'file-remove': '_onFileRemove',
    'file-start': '_onFileStart'
  },

  _formatSize: function (bytes) {
    if (typeof this.i18n.formatSize === 'function') {
      return this.i18n.formatSize(bytes);
    }

    // https://wiki.ubuntu.com/UnitsPolicy
    var base = this.i18n.units.sizeBase || 1000;
    var unit = ~~(Math.log(bytes) / Math.log(base));
    var dec = Math.max(0, Math.min(3, unit - 1));
    var size = parseFloat((bytes / Math.pow(base, unit)).toFixed(dec));
    return size + ' ' + this.i18n.units.size[unit];
  },

  _splitTimeByUnits: function (time) {
    var unitSizes = [60, 60, 24, Infinity];
    var timeValues = [0];

    for (var i = 0; i < unitSizes.length && time > 0; i++) {
      timeValues[i] = time % unitSizes[i];
      time = Math.floor(time / unitSizes[i]);
    }

    return timeValues;
  },

  _formatTime: function (seconds, split) {
    if (typeof this.i18n.formatTime === 'function') {
      return this.i18n.formatTime(seconds, split);
    }

    // Fill HH:MM:SS with leading zeros
    while (split.length < 3) {
      split.push(0);
    }

    return split.reverse().map(function (number) {
      return (number < 10 ? '0' : '') + number;
    }).join(':');
  },

  _formatFileProgress: function (file) {
    return file.totalStr + ': ' + file.progress + '% (' + (file.loaded > 0 ? this.i18n.uploading.remainingTime.prefix + file.remainingStr : this.i18n.uploading.remainingTime.unknown) + ')';
  },

  _maxFilesAdded: function (maxFiles, numFiles) {
    return maxFiles >= 0 && numFiles >= maxFiles;
  },

  _dragRippleAction: function (action, event) {
    var rippleActionEvent = {
      detail: {
        x: event.clientX,
        y: event.clientY
      }
    };

    if (action == 'down') {
      this.$.dragRipple.downAction(rippleActionEvent);

      // paper-ripple currently has hard Ripple.MAX_RADIUS limit of 300, and
      // doesn’t expose Ripple constructor or any other means to modify the
      // limit. Monkey-patching the radius calculation of just added Ripple
      // instance to disable the radius limit.
      //
      // Also fixes the default radius animation formula, which otherwise
      // tends to make the duration too small for large ripples that we have.
      //
      // FIXME: Remove this when the paper-ripple rewrite would be merged.
      // Issue: https://github.com/vaadin/vaadin-upload/issues/24
      //
      // See:
      // - https://github.com/PolymerElements/paper-ripple/issues/27
      // - https://github.com/PolymerElements/paper-ripple/pull/63
      //
      var lastRipple = this.$.dragRipple.ripples[this.$.dragRipple.ripples.length - 1];
      if (!lastRipple.hasOwnProperty('radius')) {
        Object.defineProperty(lastRipple, 'radius', {
          get: function () {
            var width2 = this.containerMetrics.width * this.containerMetrics.width;
            var height2 = this.containerMetrics.height * this.containerMetrics.height;
            var waveRadius = Math.sqrt(width2 + height2) * 1.1 + 5;

            var duration = 0.9 + 0.2 * (waveRadius / 300);
            var timeNow = this.mouseInteractionSeconds / duration;
            var size = waveRadius * (1 - Math.pow(80, -timeNow));
            return Math.abs(size);
          }
        });
      }
    } else {
      this.$.dragRipple.upAction(rippleActionEvent);
    }
  },

  _onDragover: function (event) {
    event.preventDefault();
    if (!this.nodrop && !this._dragover) {
      this._dragoverValid = !this.maxFilesReached;
      if (this._dragoverValid) {
        this._dragRippleAction('down', event);
      }
      this._dragover = true;
    }
    event.dataTransfer.dropEffect = !this._dragoverValid || this.nodrop ? 'none' : 'copy';
  },

  _onDragleave: function (event) {
    // Dragleave sometimes fired on children, skipping them. Fixes flickeing
    // when quickly dragging over.
    if (Polymer.dom(event).rootTarget === this) {
      event.preventDefault();
      if (this._dragover && !this.nodrop) {
        this._dragRippleAction('up', event);
        this._dragover = this._dragoverValid = false;
      }
    }
  },

  _onDrop: function (event) {
    if (!this.nodrop) {
      event.preventDefault();
      this._dragRippleAction('up', event);
      this._dragover = this._dragoverValid = false;
      this._dragRippleAction('upAction', event);
      this._addFiles(event.dataTransfer.files);
    }
  },

  // Override for tests
  _createXhr: function () {
    return new XMLHttpRequest();
  },

  _configureXhr: function (xhr) {
    if (typeof this.headers == 'string') {
      try {
        this.headers = JSON.parse(this.headers);
      } catch (e) {
        this.headers = undefined;
      }
    }
    for (var key in this.headers) {
      xhr.setRequestHeader(key, this.headers[key]);
    }
    if (this.timeout) {
      xhr.timeout = this.timeout;
    }
  },

  _setStatus: function (file, total, loaded, elapsed) {
    file.elapsed = elapsed;
    file.elapsedStr = this._formatTime(file.elapsed, this._splitTimeByUnits(file.elapsed));
    file.remaining = Math.ceil(elapsed * (total / loaded - 1));
    file.remainingStr = this._formatTime(file.remaining, this._splitTimeByUnits(file.remaining));
    file.speed = ~~(total / elapsed / 1024);
    file.totalStr = this._formatSize(total);
    file.loadedStr = this._formatSize(loaded);
    file.status = this._formatFileProgress(file);
  },

  /**
   * Triggers the upload of any files that are not completed
   *
   * @param {Array} [files] - Files being uploaded. Defaults to all outstanding files
   */
  uploadFiles: function (files) {
    files = files || this.files;
    files = files.filter(function (file) {
      return !file.complete;
    });
    Array.prototype.forEach.call(files, this._uploadFile.bind(this));
  },

  _uploadFile: function (file) {
    if (file.uploading) {
      return;
    }

    var ini = Date.now();
    var xhr = file.xhr = this._createXhr(file);

    var stalledId, last;
    // onprogress is called always after onreadystatechange
    xhr.upload.onprogress = function (e) {
      clearTimeout(stalledId);

      last = Date.now();
      var elapsed = (last - ini) / 1000;
      var loaded = e.loaded,
          total = e.total,
          progress = ~~(loaded / total * 100);

      file.loaded = loaded;
      file.progress = progress;
      file.indeterminate = loaded <= 0 || loaded >= total;

      if (file.error) {
        file.indeterminate = file.status = undefined;
      } else if (!file.abort) {
        if (progress < 100) {
          this._setStatus(file, total, loaded, elapsed);
          stalledId = setTimeout(function () {
            file.status = this.i18n.uploading.status.stalled;
            this._notifyFileChanges(file);
          }.bind(this), 2000);
        } else {
          file.loadedStr = file.totalStr;
          file.status = this.i18n.uploading.status.processing;
          file.uploading = false;
        }
      }

      this._notifyFileChanges(file);
      this.fire('upload-progress', { file: file, xhr: xhr });
    }.bind(this);

    // More reliable than xhr.onload
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        clearTimeout(stalledId);
        file.indeterminate = file.uploading = false;
        if (file.abort) {
          this._notifyFileChanges(file);
          return;
        }
        file.status = '';
        // Custom listener can modify the default behavior either
        // preventing default, changing the xhr, or setting the file error
        var evt = this.fire('upload-response', { file: file, xhr: xhr }, { cancelable: true });
        if (evt.defaultPrevented) {
          return;
        }
        if (xhr.status === 0) {
          file.error = this.i18n.uploading.error.serverUnavailable;
        } else if (xhr.status >= 500) {
          file.error = this.i18n.uploading.error.unexpectedServerError;
        } else if (xhr.status >= 400) {
          file.error = this.i18n.uploading.error.forbidden;
        }

        file.complete = !file.error;
        this.fire('upload-' + (file.error ? 'error' : 'success'), { file: file, xhr: xhr });
        this._notifyFileChanges(file);
      }
    }.bind(this);

    var formData = new FormData();

    file.uploadTarget = this.target || '';
    file.formDataName = this.formDataName;
    var evt = this.fire('upload-before', { file: file, xhr: xhr }, { cancelable: true });
    if (evt.defaultPrevented) {
      return;
    }

    formData.append(file.formDataName, file, file.name);

    xhr.open(this.method, file.uploadTarget, true);
    this._configureXhr(xhr);

    file.status = this.i18n.uploading.status.connecting;
    file.uploading = file.indeterminate = true;
    file.complete = file.abort = file.error = file.held = false;

    xhr.upload.onloadstart = function () {
      this.fire('upload-start', { file: file, xhr: xhr });
      this._notifyFileChanges(file);
    }.bind(this);

    // Custom listener could modify the xhr just before sending it
    // preventing default
    evt = this.fire('upload-request', { file: file, xhr: xhr, formData: formData }, { cancelable: true });
    if (!evt.defaultPrevented) {
      xhr.send(formData);
    }
  },

  _retryFileUpload: function (file) {
    var evt = this.fire('upload-retry', { file: file, xhr: file.xhr }, { cancelable: true });
    if (!evt.defaultPrevented) {
      this.async(this._uploadFile.bind(this, file));
    }
  },

  _abortFileUpload: function (file) {
    var evt = this.fire('upload-abort', { file: file, xhr: file.xhr }, { cancelable: true });
    if (!evt.defaultPrevented) {
      file.abort = true;
      if (file.xhr) {
        file.xhr.abort();
      }
      this._notifyFileChanges(file);
    }
  },

  _notifyFileChanges: function (file) {
    var p = 'files.' + this.files.indexOf(file) + '.';
    for (var i in file) {
      if (file.hasOwnProperty(i)) {
        this.notifyPath(p + i, file[i]);
      }
    }
  },

  _addFiles: function (files) {
    Array.prototype.forEach.call(files, this._addFile.bind(this));
  },

  /**
   * Add the file for uploading. Called internally for each file after picking files from dialog or dropping files.
   *
   * @param {File} file File being added
   */
  _addFile: function (file) {
    if (this.maxFilesReached) {
      this.fire('file-reject', { file: file, error: this.i18n.error.tooManyFiles });
      return;
    }
    if (this.maxFileSize >= 0 && file.size > this.maxFileSize) {
      this.fire('file-reject', { file: file, error: this.i18n.error.fileIsTooBig });
      return;
    }
    var fileExt = file.name.match(/\.[^\.]*$|$/)[0];
    var re = new RegExp('^(' + this.accept.replace(/[, ]+/g, '|').replace(/\/\*/g, '/.*') + ')$', 'i');
    if (this.accept && !(re.test(file.type) || re.test(fileExt))) {
      this.fire('file-reject', { file: file, error: this.i18n.error.incorrectFileType });
      return;
    }
    file.loaded = 0;
    file.held = true;
    file.status = this.i18n.uploading.status.held;
    this.unshift('files', file);

    if (!this.noAuto) {
      this._uploadFile(file);
    }
  },

  /**
   * Remove file from upload list. Called internally if file upload was canceled.
   * @param {File} file File to remove
   */
  _removeFile: function (file) {
    this.splice('files', this.files.indexOf(file), 1);
  },

  _onAddFilesClick: function () {
    if (this.maxFilesReached) {
      return;
    }

    if (Polymer.Gestures.resetMouseCanceller) {
      /*
        With Polymer v1.7.1, the ghost-click prevention cancels the synthetic
        file input click in iOS Safari. This prevents the cancelling.
         See also: https://github.com/Polymer/polymer/issues/4242
      */
      Polymer.Gestures.resetMouseCanceller();
    }

    this.$.fileInput.value = '';
    this.$.fileInput.click();
  },

  _onFileInputChange: function (event) {
    this._addFiles(event.target.files);
  },

  _onFileStart: function (event) {
    this._uploadFile(event.detail.file);
  },

  _onFileRetry: function (event) {
    this._retryFileUpload(event.detail.file);
  },

  _onFileAbort: function (event) {
    this._abortFileUpload(event.detail.file);
  },

  _onFileRemove: function (event) {
    event.stopPropagation();
    this._removeFile(event.detail.file);
  },

  _dragoverChanged: function (dragover) {
    this.toggleAttribute('dragover', dragover);
  },

  _dragoverValidChanged: function (dragoverValid) {
    this.toggleAttribute('dragover-valid', dragoverValid);
  },

  _i18nPlural: function (value, plural) {
    return value == 1 ? plural.one : plural.many;
  },

  _isMultiple: function () {
    return this.maxFiles != 1;
  }
});

/**
 * Fired when a file cannot be added to the queue due to a constrain:
 *  file-size, file-type or maxFiles
 *
 * @event file-reject
 * @param {Object} detail
 * @param {Object} detail.file the file added
 * @param {Object} detail.error the cause
 */

/**
 * Fired before the XHR is opened. Could be used for changing the request
 * URL. If the default is prevented, then XHR would not be opened.
 *
 * @event upload-before
 * @param {Object} detail
 * @param {Object} detail.xhr the xhr
 * @param {Object} detail.file the file being uploaded
 * @param {Object} detail.file.uploadTarget the upload request URL, initialized with the value of vaadin-upload `target` property
 */

/**
 * Fired when the XHR has been opened but not sent yet. Useful for appending
 * data keys to the FormData object, for changing some parameters like
 * headers, etc. If the event is preventDefault, `vaadin-upload` will not
 * send the request allowing the user to do something on his own.
 *
 * @event upload-request
 * @param {Object} detail
 * @param {Object} detail.xhr the xhr
 * @param {Object} detail.file the file being uploaded
 * @param {Object} detail.formData the FormData object
 */

/**
 * Fired when the XHR is sent.
 *
 * @event upload-start
 * @param {Object} detail
 * @param {Object} detail.xhr the xhr
 * @param {Object} detail.file the file being uploaded
 */

/**
 * Fired as many times as the progress is updated.
 *
 * @event upload-progress
 * @param {Object} detail
 * @param {Object} detail.xhr the xhr
 * @param {Object} detail.file the file being uploaded with loaded info
 */

/**
 * Fired when we have the actual server response, and before the component
 * analyses it. It's useful for developers to make the upload fail depending
 * on the server response. If the event is preventDefault the vaadin-upload
 * will return allowing the user to do something on his own like retry the
 * upload, etc. since he has full access to the `xhr` and `file` objects.
 * Otherwise, if the event is not prevented default `vaadin-upload` continues
 * with the normal workflow checking the `xhr.status` and `file.error`
 * which also might be modified by the user to force a customised response.
 *
 * @event upload-response
 * @param {Object} detail
 * @param {Object} detail.xhr the xhr
 * @param {Object} detail.file the file being uploaded
 */

/**
 * Fired in case the upload process succeed.
 *
 * @event upload-success
 * @param {Object} detail
 * @param {Object} detail.xhr the xhr
 * @param {Object} detail.file the file being uploaded with loaded info
 */

/**
 * Fired in case the upload process failed.
 *
 * @event upload-error
 * @param {Object} detail
 * @param {Object} detail.xhr the xhr
 * @param {Object} detail.file the file being uploaded
 */

/**
 * Fired when retry upload is requested. If the default is prevented, then
 * retry would not be performed.
 *
 * @event upload-retry
 * @param {Object} detail
 * @param {Object} detail.xhr the previous upload xhr
 * @param {Object} detail.file the file being uploaded
 */

/**
 * Fired when retry abort is requested. If the default is prevented, then the
 * file upload would not be aborted.
 *
 * @event upload-abort
 * @param {Object} detail
 * @param {Object} detail.xhr the xhr
 * @param {Object} detail.file the file being uploaded
 */

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.toBody("<link rel=stylesheet type=text/css href=\"https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic\" crossorigin=anonymous>");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(3);

__webpack_require__(62);

__webpack_require__(64);

const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=paper-button> <template strip-whitespace=\"\"> <style include=paper-material-styles>:host{@apply --layout-inline;@apply --layout-center-center;position:relative;box-sizing:border-box;min-width:5.14em;margin:0 .29em;background:0 0;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;font:inherit;text-transform:uppercase;outline-width:0;border-radius:3px;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:pointer;z-index:0;padding:.7em .57em;@apply --paper-font-common-base;@apply --paper-button;}:host([elevation=\"1\"]){@apply --paper-material-elevation-1;}:host([elevation=\"2\"]){@apply --paper-material-elevation-2;}:host([elevation=\"3\"]){@apply --paper-material-elevation-3;}:host([elevation=\"4\"]){@apply --paper-material-elevation-4;}:host([elevation=\"5\"]){@apply --paper-material-elevation-5;}:host([hidden]){display:none!important}:host([raised].keyboard-focus){font-weight:700;@apply --paper-button-raised-keyboard-focus;}:host(:not([raised]).keyboard-focus){font-weight:700;@apply --paper-button-flat-keyboard-focus;}:host([disabled]){background:#eaeaea;color:#a8a8a8;cursor:auto;pointer-events:none;@apply --paper-button-disabled;}:host([animated]){@apply --shadow-transition;}paper-ripple{color:var(--paper-button-ink-color)}</style> <slot></slot> </template> </dom-module>");

Polymer({
  is: 'paper-button',

  behaviors: [Polymer.PaperButtonBehavior],

  properties: {
    /**
     * If true, the button should be styled with a shadow.
     */
    raised: {
      type: Boolean,
      reflectToAttribute: true,
      value: false,
      observer: '_calculateElevation'
    }
  },

  _calculateElevation: function () {
    if (!this.raised) {
      this._setElevation(0);
    } else {
      Polymer.PaperButtonBehaviorImpl._calculateElevation.apply(this);
    }
  }

  /**
  Fired when the animation finishes.
  This is useful if you want to wait until
  the ripple animation finishes to perform some action.
   @event transitionend
  Event param: {{node: Object}} detail Contains the animated node.
  */
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(12);

__webpack_require__(27);

/** @polymerBehavior Polymer.PaperButtonBehavior */
Polymer.PaperButtonBehaviorImpl = {
  properties: {
    /**
     * The z-depth of this element, from 0-5. Setting to 0 will remove the
     * shadow, and each increasing number greater than 0 will be "deeper"
     * than the last.
     *
     * @attribute elevation
     * @type number
     * @default 1
     */
    elevation: {
      type: Number,
      reflectToAttribute: true,
      readOnly: true
    }
  },

  observers: ['_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)', '_computeKeyboardClass(receivedFocusFromKeyboard)'],

  hostAttributes: {
    role: 'button',
    tabindex: '0',
    animated: true
  },

  _calculateElevation: function () {
    var e = 1;
    if (this.disabled) {
      e = 0;
    } else if (this.active || this.pressed) {
      e = 4;
    } else if (this.receivedFocusFromKeyboard) {
      e = 3;
    }
    this._setElevation(e);
  },

  _computeKeyboardClass: function (receivedFocusFromKeyboard) {
    this.toggleClass('keyboard-focus', receivedFocusFromKeyboard);
  },

  /**
   * In addition to `IronButtonState` behavior, when space key goes down,
   * create a ripple down effect.
   *
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyDownHandler: function (event) {
    Polymer.IronButtonStateImpl._spaceKeyDownHandler.call(this, event);
    // Ensure that there is at most one ripple when the space key is held down.
    if (this.hasRipple() && this.getRipple().ripples.length < 1) {
      this._ripple.uiDownAction();
    }
  },

  /**
   * In addition to `IronButtonState` behavior, when space key goes up,
   * create a ripple up effect.
   *
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyUpHandler: function (event) {
    Polymer.IronButtonStateImpl._spaceKeyUpHandler.call(this, event);
    if (this.hasRipple()) {
      this._ripple.uiUpAction();
    }
  }
};

/** @polymerBehavior */
Polymer.PaperButtonBehavior = [Polymer.IronButtonState, Polymer.IronControlState, Polymer.PaperRippleBehavior, Polymer.PaperButtonBehaviorImpl];

/***/ }),
/* 63 */
/***/ (function(module, exports) {



/**
 * @demo demo/index.html
 * @polymerBehavior
 */
Polymer.IronControlState = {

  properties: {

    /**
     * If true, the element currently has focus.
     */
    focused: {
      type: Boolean,
      value: false,
      notify: true,
      readOnly: true,
      reflectToAttribute: true
    },

    /**
     * If true, the user cannot interact with this element.
     */
    disabled: {
      type: Boolean,
      value: false,
      notify: true,
      observer: '_disabledChanged',
      reflectToAttribute: true
    },

    /**
     * Value of the `tabindex` attribute before `disabled` was activated.
     * `null` means the attribute was not present.
     * @type {?string|undefined}
     */
    _oldTabIndex: {
      type: String
    },

    _boundFocusBlurHandler: {
      type: Function,
      value: function () {
        return this._focusBlurHandler.bind(this);
      }
    },

    __handleEventRetargeting: {
      type: Boolean,
      value: function () {
        return !this.shadowRoot && !Polymer.Element;
      }
    }
  },

  observers: ['_changedControlState(focused, disabled)'],

  /**
   * @return {void}
   */
  ready: function () {
    this.addEventListener('focus', this._boundFocusBlurHandler, true);
    this.addEventListener('blur', this._boundFocusBlurHandler, true);
  },

  _focusBlurHandler: function (event) {
    // In Polymer 2.0, the library takes care of retargeting events.
    if (Polymer.Element) {
      this._setFocused(event.type === 'focus');
      return;
    }

    // NOTE(cdata):  if we are in ShadowDOM land, `event.target` will
    // eventually become `this` due to retargeting; if we are not in
    // ShadowDOM land, `event.target` will eventually become `this` due
    // to the second conditional which fires a synthetic event (that is also
    // handled). In either case, we can disregard `event.path`.
    if (event.target === this) {
      this._setFocused(event.type === 'focus');
    } else if (this.__handleEventRetargeting) {
      var target = /** @type {Node} */Polymer.dom(event).localTarget;
      if (!this.isLightDescendant(target)) {
        this.fire(event.type, { sourceEvent: event }, {
          node: this,
          bubbles: event.bubbles,
          cancelable: event.cancelable
        });
      }
    }
  },

  _disabledChanged: function (disabled, old) {
    this.setAttribute('aria-disabled', disabled ? 'true' : 'false');
    this.style.pointerEvents = disabled ? 'none' : '';
    if (disabled) {
      // Read the `tabindex` attribute instead of the `tabIndex` property.
      // The property returns `-1` if there is no `tabindex` attribute.
      // This distinction is important when restoring the value because
      // leaving `-1` hides shadow root children from the tab order.
      this._oldTabIndex = this.getAttribute('tabindex');
      this._setFocused(false);
      this.tabIndex = -1;
      this.blur();
    } else if (this._oldTabIndex !== undefined) {
      if (this._oldTabIndex === null) {
        this.removeAttribute('tabindex');
      } else {
        this.setAttribute('tabindex', this._oldTabIndex);
      }
    }
  },

  _changedControlState: function () {
    // _controlStateChanged is abstract, follow-on behaviors may implement it
    if (this._controlStateChanged) {
      this._controlStateChanged();
    }
  }

};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(65);

const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=paper-material-styles> <template> <style>:host,html{--paper-material:{display:block;position:relative};--paper-material-elevation-1:{@apply --shadow-elevation-2dp;};--paper-material-elevation-2:{@apply --shadow-elevation-4dp;};--paper-material-elevation-3:{@apply --shadow-elevation-6dp;};--paper-material-elevation-4:{@apply --shadow-elevation-8dp;};--paper-material-elevation-5:{@apply --shadow-elevation-16dp;};}.paper-material,:host(.paper-material){@apply --paper-material;}.paper-material[elevation=\"1\"],:host(.paper-material[elevation=\"1\"]){@apply --paper-material-elevation-1;}.paper-material[elevation=\"2\"],:host(.paper-material[elevation=\"2\"]){@apply --paper-material-elevation-2;}.paper-material[elevation=\"3\"],:host(.paper-material[elevation=\"3\"]){@apply --paper-material-elevation-3;}.paper-material[elevation=\"4\"],:host(.paper-material[elevation=\"4\"]){@apply --paper-material-elevation-4;}.paper-material[elevation=\"5\"],:host(.paper-material[elevation=\"5\"]){@apply --paper-material-elevation-5;}</style> </template> </dom-module>");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.toBody("<custom-style> <style is=custom-style>html{--shadow-transition:{transition:box-shadow .28s cubic-bezier(.4,0,.2,1)};--shadow-none:{box-shadow:none};--shadow-elevation-2dp:{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)};--shadow-elevation-3dp:{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)};--shadow-elevation-4dp:{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)};--shadow-elevation-6dp:{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)};--shadow-elevation-8dp:{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)};--shadow-elevation-12dp:{box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)};--shadow-elevation-16dp:{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)};--shadow-elevation-24dp:{box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)};}</style> </custom-style>");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(29);

/**
 * The `iron-iconset-svg` element allows users to define their own icon sets
 * that contain svg icons. The svg icon elements should be children of the
 * `iron-iconset-svg` element. Multiple icons should be given distinct id's.
 *
 * Using svg elements to create icons has a few advantages over traditional
 * bitmap graphics like jpg or png. Icons that use svg are vector based so
 * they are resolution independent and should look good on any device. They
 * are stylable via css. Icons can be themed, colorized, and even animated.
 *
 * Example:
 *
 *     <iron-iconset-svg name="my-svg-icons" size="24">
 *       <svg>
 *         <defs>
 *           <g id="shape">
 *             <rect x="12" y="0" width="12" height="24" />
 *             <circle cx="12" cy="12" r="12" />
 *           </g>
 *         </defs>
 *       </svg>
 *     </iron-iconset-svg>
 *
 * This will automatically register the icon set "my-svg-icons" to the iconset
 * database.  To use these icons from within another element, make a
 * `iron-iconset` element and call the `byId` method
 * to retrieve a given iconset. To apply a particular icon inside an
 * element use the `applyIcon` method. For example:
 *
 *     iconset.applyIcon(iconNode, 'car');
 *
 * @element iron-iconset-svg
 * @demo demo/index.html
 * @implements {Polymer.Iconset}
 */
Polymer({
  is: 'iron-iconset-svg',

  properties: {

    /**
     * The name of the iconset.
     */
    name: {
      type: String,
      observer: '_nameChanged'
    },

    /**
     * The size of an individual icon. Note that icons must be square.
     */
    size: {
      type: Number,
      value: 24
    },

    /**
     * Set to true to enable mirroring of icons where specified when they are
     * stamped. Icons that should be mirrored should be decorated with a
     * `mirror-in-rtl` attribute.
     *
     * NOTE: For performance reasons, direction will be resolved once per
     * document per iconset, so moving icons in and out of RTL subtrees will
     * not cause their mirrored state to change.
     */
    rtlMirroring: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to measure RTL based on the dir attribute on the body or
     * html elements (measured on document.body or document.documentElement as
     * available).
     */
    useGlobalRtlAttribute: {
      type: Boolean,
      value: false
    }
  },

  created: function () {
    this._meta = new Polymer.IronMeta({ type: 'iconset', key: null, value: null });
  },

  attached: function () {
    this.style.display = 'none';
  },

  /**
   * Construct an array of all icon names in this iconset.
   *
   * @return {!Array} Array of icon names.
   */
  getIconNames: function () {
    this._icons = this._createIconMap();
    return Object.keys(this._icons).map(function (n) {
      return this.name + ':' + n;
    }, this);
  },

  /**
   * Applies an icon to the given element.
   *
   * An svg icon is prepended to the element's shadowRoot if it exists,
   * otherwise to the element itself.
   *
   * If RTL mirroring is enabled, and the icon is marked to be mirrored in
   * RTL, the element will be tested (once and only once ever for each
   * iconset) to determine the direction of the subtree the element is in.
   * This direction will apply to all future icon applications, although only
   * icons marked to be mirrored will be affected.
   *
   * @method applyIcon
   * @param {Element} element Element to which the icon is applied.
   * @param {string} iconName Name of the icon to apply.
   * @return {?Element} The svg element which renders the icon.
   */
  applyIcon: function (element, iconName) {
    // Remove old svg element
    this.removeIcon(element);
    // install new svg element
    var svg = this._cloneIcon(iconName, this.rtlMirroring && this._targetIsRTL(element));
    if (svg) {
      // insert svg element into shadow root, if it exists
      var pde = Polymer.dom(element.root || element);
      pde.insertBefore(svg, pde.childNodes[0]);
      return element._svgIcon = svg;
    }
    return null;
  },

  /**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param {Element} element The element from which the icon is removed.
   */
  removeIcon: function (element) {
    // Remove old svg element
    if (element._svgIcon) {
      Polymer.dom(element.root || element).removeChild(element._svgIcon);
      element._svgIcon = null;
    }
  },

  /**
   * Measures and memoizes the direction of the element. Note that this
   * measurement is only done once and the result is memoized for future
   * invocations.
   */
  _targetIsRTL: function (target) {
    if (this.__targetIsRTL == null) {
      if (this.useGlobalRtlAttribute) {
        var globalElement = document.body && document.body.hasAttribute('dir') ? document.body : document.documentElement;

        this.__targetIsRTL = globalElement.getAttribute('dir') === 'rtl';
      } else {
        if (target && target.nodeType !== Node.ELEMENT_NODE) {
          target = target.host;
        }

        this.__targetIsRTL = target && window.getComputedStyle(target)['direction'] === 'rtl';
      }
    }

    return this.__targetIsRTL;
  },

  /**
   *
   * When name is changed, register iconset metadata
   *
   */
  _nameChanged: function () {
    this._meta.value = null;
    this._meta.key = this.name;
    this._meta.value = this;

    this.async(function () {
      this.fire('iron-iconset-added', this, { node: window });
    });
  },

  /**
   * Create a map of child SVG elements by id.
   *
   * @return {!Object} Map of id's to SVG elements.
   */
  _createIconMap: function () {
    // Objects chained to Object.prototype (`{}`) have members. Specifically,
    // on FF there is a `watch` method that confuses the icon map, so we
    // need to use a null-based object here.
    var icons = Object.create(null);
    Polymer.dom(this).querySelectorAll('[id]').forEach(function (icon) {
      icons[icon.id] = icon;
    });
    return icons;
  },

  /**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   *
   * @return {Element} Returns an installable clone of the SVG element
   * matching `id`.
   */
  _cloneIcon: function (id, mirrorAllowed) {
    // create the icon map on-demand, since the iconset itself has no discrete
    // signal to know when it's children are fully parsed
    this._icons = this._icons || this._createIconMap();
    return this._prepareSvgClone(this._icons[id], this.size, mirrorAllowed);
  },

  /**
   * @param {Element} sourceSvg
   * @param {number} size
   * @param {Boolean} mirrorAllowed
   * @return {Element}
   */
  _prepareSvgClone: function (sourceSvg, size, mirrorAllowed) {
    if (sourceSvg) {
      var content = sourceSvg.cloneNode(true),
          svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
          viewBox = content.getAttribute('viewBox') || '0 0 ' + size + ' ' + size,
          cssText = 'pointer-events: none; display: block; width: 100%; height: 100%;';

      if (mirrorAllowed && content.hasAttribute('mirror-in-rtl')) {
        cssText += '-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;';
      }

      svg.setAttribute('viewBox', viewBox);
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false');
      // TODO(dfreedm): `pointer-events: none` works around https://crbug.com/370136
      // TODO(sjmiles): inline style may not be ideal, but avoids requiring a shadow-root
      svg.style.cssText = cssText;
      svg.appendChild(content).removeAttribute('id');
      return svg;
    }
    return null;
  }

});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(3);

__webpack_require__(24);

__webpack_require__(30);

__webpack_require__(68);

__webpack_require__(71);

__webpack_require__(28);

const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=vaadin-upload-file> <template> <style>:host{@apply --layout-vertical;margin:4px 0 0;padding:6px 0 4px;@apply --vaadin-upload-file;}#row{@apply --layout-horizontal;@apply --layout-center;height:36px;@apply --vaadin-upload-file-row;}iron-icon{width:24px;height:24px;padding:8px;color:var(--primary-text-color,#000);opacity:0;margin-right:-40px;transition:margin-right .3s .1s,opacity .3s;@apply --vaadin-upload-file-status-icon;}iron-icon[icon=\"vaadin-upload:warning\"]{color:var(--error-color,#f40303)}iron-icon[complete],iron-icon[error]{margin-right:0;opacity:1;transition:margin-right .3s,opacity .3s .1s}iron-icon[complete]{@apply --vaadin-upload-file-status-icon-complete;}iron-icon[error]{@apply --vaadin-upload-file-status-icon-error;}#meta{@apply --layout-vertical;@apply --layout-flex;height:32px;transition:height .1s;width:1px;color:var(--disabled-text-color,gray);overflow:hidden;@apply --vaadin-upload-file-meta;}#meta[complete]{height:16px;color:var(--primary-text-color,#000);@apply --vaadin-upload-file-meta-complete;}#meta[error]{color:var(--error-color,#f40303);@apply --vaadin-upload-file-meta-error;}#error,#name,#status{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:16px!important}#name{@apply --paper-font-body2;@apply --vaadin-upload-file-name;}#status{@apply --paper-font-caption;color:var(--disabled-text-color,gray);@apply --vaadin-upload-file-status;}#error{@apply --paper-font-caption;color:var(--error-color,#f40303);@apply --vaadin-upload-file-error;}#commands{@apply --layout-horizontal;@apply --vaadin-upload-file-commands;}#commands [icon]{color:var(--primary-text-color,#000)}#commands [icon=\"vaadin-upload:clear\"],#commands [icon=\"vaadin-upload:refresh\"],#commands [icon=\"vaadin-upload:start\"]{color:var(--primary-color,#00b4f0)}paper-progress{--paper-progress-active-color:var(--primary-color, #00B4F0);width:100%;height:2px;@apply --vaadin-upload-file-progress;}paper-progress[error]{--paper-progress-container-color:var(--error-color, #f40303);--paper-progress-active-color:var(--error-color, #f40303);@apply --vaadin-upload-file-progress-error;}paper-progress[indeterminate]{--paper-progress-container-color:var(--primary-color, #00B4F0);--paper-progress-active-color:rgba(1, 97, 155, 0.5);@apply --vaadin-upload-file-progress-indeterminate;}paper-progress[uploading][indeterminate]{--paper-progress-container-color:var(--divider-color, #e0e0e0);--paper-progress-active-color:var(--disabled-text-color, gray);@apply --vaadin-upload-file-progress-uploading-indeterminate;}paper-progress[complete]{@apply --vaadin-upload-file-progress-complete;}paper-icon-button[hidden]{display:none}:host(.fade-out){animation-name:fade-out;animation-duration:.6s;@apply --vaadin-upload-file-canceled;}@keyframes fade-out{0%{max-height:38px}33%{max-height:38px;margin:4px 0 0;padding:6px 0 4px;opacity:.25}67%{opacity:0}100%{max-height:0;margin:0;padding:0;opacity:0}}</style> <div id=row> <iron-icon icon=vaadin-upload:done complete$=[[file.complete]]></iron-icon> <iron-icon icon=vaadin-upload:warning error$=[[file.error]]></iron-icon> <div id=meta complete$=[[file.complete]] error$=[[file.error]]> <div id=name>[[file.name]]</div> <div id=status hidden$=[[!file.status]]>[[file.status]]</div> <div id=error hidden$=[[!file.error]]>[[file.error]]</div> </div> <div id=commands> <paper-icon-button icon=vaadin-upload:start file-event=file-start on-tap=_fireFileEvent hidden$=[[!file.held]]></paper-icon-button> <paper-icon-button icon=vaadin-upload:refresh file-event=file-retry on-tap=_fireFileEvent hidden$=[[!file.error]]></paper-icon-button> <paper-icon-button icon=vaadin-upload:clear file-event=file-abort on-tap=_fireFileEvent></paper-icon-button> </div> </div> <paper-progress id=progress value$=[[file.progress]] error$=[[file.error]] indeterminate$=[[file.indeterminate]] uploading$=[[file.uploading]] complete$=[[file.complete]]> </paper-progress> </template> </dom-module>");

Polymer({

  is: 'vaadin-upload-file',

  properties: {
    /**
     * File metadata, upload status and progress information.
     */
    file: Object
  },

  observers: ['_fileChanged(file.*)', '_fileAborted(file.abort)'],

  _fileChanged: function () {
    this.$.progress.updateStyles();
  },

  ready: function () {
    this.addEventListener('animationend', function (e) {
      // Animation name is scoped to "fade-out-vaadin-upload-file-0" on
      // Polymer 1 & Shady combination, so check with indexOf
      if (e.animationName.indexOf('fade-out') > -1) {
        this._remove();
      }
    });
  },

  _fileAborted: function (abort) {
    if (abort) {
      this.toggleClass('fade-out', true);

      // In case the animation doesn't trigger, just remove the file instantly.
      var animationName = window.getComputedStyle(this).animationName;
      if (!animationName || animationName === 'none') {
        this._remove();
      }
    }
  },

  _remove: function () {
    this.toggleClass('fade-out', false);
    this.fire('file-remove', { file: this.file });
  },

  _fireFileEvent: function (e) {
    e.preventDefault();
    var button = Polymer.dom(e).localTarget;
    return this.fire(button.getAttribute('file-event'), { file: this.file });
  }

  /**
  * Fired when the retry button is pressed. It is listened by `vaadin-upload`
  * which will start a new upload process of this file.
  *
  * @event file-retry
  * @param {Object} detail
  * @param {Object} detail.file file to retry upload of
  */

  /**
  * Fired when the start button is pressed. It is listened by `vaadin-upload`
  * which will start a new upload process of this file.
  *
  * @event file-start
  * @param {Object} detail
  * @param {Object} detail.file file to start upload of
  */

  /**
   * Fired when abort button is pressed. It is listened by `vaadin-upload` which
   * will abort the upload in progress, but will not remove the file from the list
   * to allow the animation to hide the element to be run.
   *
   * @event file-abort
   * @param {Object} detail
   * @param {Object} detail.file file to abort upload of
   */

  /**
   * Fired after the animation to hide the element has finished. It is listened
   * by `vaadin-upload` which will actually remove the file from the upload
   * file list.
   *
   * @event file-remove
   * @param {Object} detail
   * @param {Object} detail.file file to remove from the  upload of
   */
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(30);

__webpack_require__(69);

__webpack_require__(70);

const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=paper-icon-button> <template strip-whitespace=\"\"> <style>:host{display:inline-block;position:relative;padding:8px;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;z-index:0;line-height:1;width:40px;height:40px;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;box-sizing:border-box!important;@apply --paper-icon-button;}:host #ink{color:var(--paper-icon-button-ink-color,var(--primary-text-color));opacity:.6}:host([disabled]){color:var(--paper-icon-button-disabled-text,var(--disabled-text-color));pointer-events:none;cursor:auto;@apply --paper-icon-button-disabled;}:host([hidden]){display:none!important}:host(:hover){@apply --paper-icon-button-hover;}iron-icon{--iron-icon-width:100%;--iron-icon-height:100%}</style> <iron-icon id=icon src=[[src]] icon=[[icon]] alt$=[[alt]]></iron-icon> </template> </dom-module>");

Polymer({
  is: 'paper-icon-button',

  hostAttributes: {
    role: 'button',
    tabindex: '0'
  },

  behaviors: [Polymer.PaperInkyFocusBehavior],

  properties: {
    /**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */
    src: {
      type: String
    },

    /**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */
    icon: {
      type: String
    },

    /**
     * Specifies the alternate text for the button, for accessibility.
     */
    alt: {
      type: String,
      observer: "_altChanged"
    }
  },

  _altChanged: function (newValue, oldValue) {
    var label = this.getAttribute('aria-label');

    // Don't stomp over a user-set aria-label.
    if (!label || oldValue == label) {
      this.setAttribute('aria-label', newValue);
    }
  }
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(12);

__webpack_require__(27);

/**
 * `Polymer.PaperInkyFocusBehavior` implements a ripple when the element has keyboard focus.
 *
 * @polymerBehavior Polymer.PaperInkyFocusBehavior
 */
Polymer.PaperInkyFocusBehaviorImpl = {
  observers: ['_focusedChanged(receivedFocusFromKeyboard)'],

  _focusedChanged: function (receivedFocusFromKeyboard) {
    if (receivedFocusFromKeyboard) {
      this.ensureRipple();
    }
    if (this.hasRipple()) {
      this._ripple.holdDown = receivedFocusFromKeyboard;
    }
  },

  _createRipple: function () {
    var ripple = Polymer.PaperRippleBehavior._createRipple();
    ripple.id = 'ink';
    ripple.setAttribute('center', '');
    ripple.classList.add('circle');
    return ripple;
  }
};

/** @polymerBehavior Polymer.PaperInkyFocusBehavior */
Polymer.PaperInkyFocusBehavior = [Polymer.IronButtonState, Polymer.IronControlState, Polymer.PaperRippleBehavior, Polymer.PaperInkyFocusBehaviorImpl];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(31);

const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.toBody("<custom-style> <style is=custom-style>html{--primary-text-color:var(--light-theme-text-color);--primary-background-color:var(--light-theme-background-color);--secondary-text-color:var(--light-theme-secondary-color);--disabled-text-color:var(--light-theme-disabled-color);--divider-color:var(--light-theme-divider-color);--error-color:var(--paper-deep-orange-a700);--primary-color:var(--paper-indigo-500);--light-primary-color:var(--paper-indigo-100);--dark-primary-color:var(--paper-indigo-700);--accent-color:var(--paper-pink-a200);--light-accent-color:var(--paper-pink-a100);--dark-accent-color:var(--paper-pink-a400);--light-theme-background-color:#ffffff;--light-theme-base-color:#000000;--light-theme-text-color:var(--paper-grey-900);--light-theme-secondary-color:#737373;--light-theme-disabled-color:#9b9b9b;--light-theme-divider-color:#dbdbdb;--dark-theme-background-color:var(--paper-grey-900);--dark-theme-base-color:#ffffff;--dark-theme-text-color:#ffffff;--dark-theme-secondary-color:#bcbcbc;--dark-theme-disabled-color:#646464;--dark-theme-divider-color:#3c3c3c;--text-primary-color:var(--dark-theme-text-color);--default-primary-color:var(--primary-color)}</style> </custom-style>");

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(3);

__webpack_require__(72);

__webpack_require__(31);

const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.register("<dom-module id=paper-progress> <template> <style>:host{display:block;width:200px;position:relative;overflow:hidden}:host([hidden]),[hidden]{display:none!important}#progressContainer{@apply --paper-progress-container;position:relative}#progressContainer,.indeterminate::after{height:var(--paper-progress-height,4px)}#primaryProgress,#secondaryProgress,.indeterminate::after{@apply --layout-fit;}#progressContainer,.indeterminate::after{background:var(--paper-progress-container-color,var(--google-grey-300))}:host(.transiting) #primaryProgress,:host(.transiting) #secondaryProgress{-webkit-transition-property:-webkit-transform;transition-property:transform;-webkit-transition-duration:var(--paper-progress-transition-duration,.08s);transition-duration:var(--paper-progress-transition-duration,.08s);-webkit-transition-timing-function:var(--paper-progress-transition-timing-function,ease);transition-timing-function:var(--paper-progress-transition-timing-function,ease);-webkit-transition-delay:var(--paper-progress-transition-delay,0s);transition-delay:var(--paper-progress-transition-delay,0s)}#primaryProgress,#secondaryProgress{@apply --layout-fit;-webkit-transform-origin:left center;transform-origin:left center;-webkit-transform:scaleX(0);transform:scaleX(0);will-change:transform}#primaryProgress{background:var(--paper-progress-active-color,var(--google-green-500))}#secondaryProgress{background:var(--paper-progress-secondary-color,var(--google-green-100))}:host([disabled]) #primaryProgress{background:var(--paper-progress-disabled-active-color,var(--google-grey-500))}:host([disabled]) #secondaryProgress{background:var(--paper-progress-disabled-secondary-color,var(--google-grey-300))}:host(:not([disabled])) #primaryProgress.indeterminate{-webkit-transform-origin:right center;transform-origin:right center;-webkit-animation:indeterminate-bar var(--paper-progress-indeterminate-cycle-duration,2s) linear infinite;animation:indeterminate-bar var(--paper-progress-indeterminate-cycle-duration,2s) linear infinite}:host(:not([disabled])) #primaryProgress.indeterminate::after{content:\"\";-webkit-transform-origin:center center;transform-origin:center center;-webkit-animation:indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration,2s) linear infinite;animation:indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration,2s) linear infinite}@-webkit-keyframes indeterminate-bar{0%{-webkit-transform:scaleX(1) translateX(-100%)}50%{-webkit-transform:scaleX(1) translateX(0)}75%{-webkit-transform:scaleX(1) translateX(0);-webkit-animation-timing-function:cubic-bezier(.28,.62,.37,.91)}100%{-webkit-transform:scaleX(0) translateX(0)}}@-webkit-keyframes indeterminate-splitter{0%{-webkit-transform:scaleX(.75) translateX(-125%)}30%{-webkit-transform:scaleX(.75) translateX(-125%);-webkit-animation-timing-function:cubic-bezier(.42,0,.6,.8)}90%{-webkit-transform:scaleX(.75) translateX(125%)}100%{-webkit-transform:scaleX(.75) translateX(125%)}}@keyframes indeterminate-bar{0%{transform:scaleX(1) translateX(-100%)}50%{transform:scaleX(1) translateX(0)}75%{transform:scaleX(1) translateX(0);animation-timing-function:cubic-bezier(.28,.62,.37,.91)}100%{transform:scaleX(0) translateX(0)}}@keyframes indeterminate-splitter{0%{transform:scaleX(.75) translateX(-125%)}30%{transform:scaleX(.75) translateX(-125%);animation-timing-function:cubic-bezier(.42,0,.6,.8)}90%{transform:scaleX(.75) translateX(125%)}100%{transform:scaleX(.75) translateX(125%)}}</style> <div id=progressContainer> <div id=secondaryProgress hidden$=[[_hideSecondaryProgress(secondaryRatio)]]></div> <div id=primaryProgress></div> </div> </template> </dom-module>");

Polymer({
  is: 'paper-progress',

  behaviors: [Polymer.IronRangeBehavior],

  properties: {
    /**
     * The number that represents the current secondary progress.
     */
    secondaryProgress: {
      type: Number,
      value: 0
    },

    /**
     * The secondary ratio
     */
    secondaryRatio: {
      type: Number,
      value: 0,
      readOnly: true
    },

    /**
     * Use an indeterminate progress indicator.
     */
    indeterminate: {
      type: Boolean,
      value: false,
      observer: '_toggleIndeterminate'
    },

    /**
     * True if the progress is disabled.
     */
    disabled: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_disabledChanged'
    }
  },

  observers: ['_progressChanged(secondaryProgress, value, min, max, indeterminate)'],

  hostAttributes: {
    role: 'progressbar'
  },

  _toggleIndeterminate: function (indeterminate) {
    // If we use attribute/class binding, the animation sometimes doesn't translate properly
    // on Safari 7.1. So instead, we toggle the class here in the update method.
    this.toggleClass('indeterminate', indeterminate, this.$.primaryProgress);
  },

  _transformProgress: function (progress, ratio) {
    var transform = 'scaleX(' + ratio / 100 + ')';
    progress.style.transform = progress.style.webkitTransform = transform;
  },

  _mainRatioChanged: function (ratio) {
    this._transformProgress(this.$.primaryProgress, ratio);
  },

  _progressChanged: function (secondaryProgress, value, min, max, indeterminate) {
    secondaryProgress = this._clampValue(secondaryProgress);
    value = this._clampValue(value);

    var secondaryRatio = this._calcRatio(secondaryProgress) * 100;
    var mainRatio = this._calcRatio(value) * 100;

    this._setSecondaryRatio(secondaryRatio);
    this._transformProgress(this.$.secondaryProgress, secondaryRatio);
    this._transformProgress(this.$.primaryProgress, mainRatio);

    this.secondaryProgress = secondaryProgress;

    if (indeterminate) {
      this.removeAttribute('aria-valuenow');
    } else {
      this.setAttribute('aria-valuenow', value);
    }
    this.setAttribute('aria-valuemin', min);
    this.setAttribute('aria-valuemax', max);
  },

  _disabledChanged: function (disabled) {
    this.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  },

  _hideSecondaryProgress: function (secondaryRatio) {
    return secondaryRatio === 0;
  }
});

/***/ }),
/* 72 */
/***/ (function(module, exports) {



/**
* `iron-range-behavior` provides the behavior for something with a minimum to maximum range.
*
* @demo demo/index.html
* @polymerBehavior
*/
Polymer.IronRangeBehavior = {

  properties: {

    /**
     * The number that represents the current value.
     */
    value: {
      type: Number,
      value: 0,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * The number that indicates the minimum value of the range.
     */
    min: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * The number that indicates the maximum value of the range.
     */
    max: {
      type: Number,
      value: 100,
      notify: true
    },

    /**
     * Specifies the value granularity of the range's value.
     */
    step: {
      type: Number,
      value: 1,
      notify: true
    },

    /**
     * Returns the ratio of the value.
     */
    ratio: {
      type: Number,
      value: 0,
      readOnly: true,
      notify: true
    }
  },

  observers: ['_update(value, min, max, step)'],

  _calcRatio: function (value) {
    return (this._clampValue(value) - this.min) / (this.max - this.min);
  },

  _clampValue: function (value) {
    return Math.min(this.max, Math.max(this.min, this._calcStep(value)));
  },

  _calcStep: function (value) {
    // polymer/issues/2493
    value = parseFloat(value);

    if (!this.step) {
      return value;
    }

    var numSteps = Math.round((value - this.min) / this.step);
    if (this.step < 1) {
      /**
       * For small values of this.step, if we calculate the step using
       * `Math.round(value / step) * step` we may hit a precision point issue
       * eg. 0.1 * 0.2 =  0.020000000000000004
       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
       *
       * as a work around we can divide by the reciprocal of `step`
       */
      return numSteps / (1 / this.step) + this.min;
    } else {
      return numSteps * this.step + this.min;
    }
  },

  _validateValue: function () {
    var v = this._clampValue(this.value);
    this.value = this.oldValue = isNaN(v) ? this.oldValue : v;
    return this.value !== v;
  },

  _update: function () {
    this._validateValue();
    this._setRatio(this._calcRatio(this.value) * 100);
  }

};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        } else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous) previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate ? function () {
                return MakeDictionary(Object.create(null));
            } : supportsProto ? function () {
                return MakeDictionary({ __proto__: null });
            } : function () {
                return MakeDictionary({});
            },
            has: downLevel ? function (map, key) {
                return hasOwn.call(map, key);
            } : function (map, key) {
                return key in map;
            },
            get: downLevel ? function (map, key) {
                return hasOwn.call(map, key) ? map[key] : undefined;
            } : function (map, key) {
                return map[key];
            }
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators)) throw new TypeError();
                if (!IsObject(target)) throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
                if (IsNull(attributes)) attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            } else {
                if (!IsArray(decorators)) throw new TypeError();
                if (!IsConstructor(target)) throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/false);
            if (IsUndefined(metadataMap)) return false;
            if (!metadataMap.delete(metadataKey)) return false;
            if (metadataMap.size > 0) return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0) return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated)) throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated)) throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create) return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create) return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
            if (IsUndefined(metadataMap)) return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
            if (IsUndefined(metadataMap)) return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null) return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0) return ownKeys;
            if (ownKeys.length <= 0) return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
            if (IsUndefined(metadataMap)) return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                } catch (e) {
                    try {
                        IteratorClose(iterator);
                    } finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null) return 1 /* Null */;
            switch (typeof x) {
                case "undefined":
                    return 0 /* Undefined */;
                case "boolean":
                    return 2 /* Boolean */;
                case "string":
                    return 3 /* String */;
                case "symbol":
                    return 4 /* Symbol */;
                case "number":
                    return 5 /* Number */;
                case "object":
                    return x === null ? 1 /* Null */ : 6 /* Object */;
                default:
                    return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */:
                    return input;
                case 1 /* Null */:
                    return input;
                case 2 /* Boolean */:
                    return input;
                case 3 /* String */:
                    return input;
                case 4 /* Symbol */:
                    return input;
                case 5 /* Number */:
                    return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result)) throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result)) return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result)) return result;
                }
            } else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result)) return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result)) return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key)) return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */:
                    return true;
                case 4 /* Symbol */:
                    return true;
                default:
                    return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null) return undefined;
            if (!IsCallable(func)) throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method)) throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator)) throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f) f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype) return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype) return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype) return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function") return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O) return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () {
                    return this;
                };
                MapIterator.prototype[iteratorSymbol] = function () {
                    return this;
                };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        } else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }();
            return function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () {
                        return this._keys.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) {
                    return this._find(key, /*insert*/false) >= 0;
                };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () {
                    return new MapIterator(this._keys, this._values, getKey);
                };
                Map.prototype.values = function () {
                    return new MapIterator(this._keys, this._values, getValue);
                };
                Map.prototype.entries = function () {
                    return new MapIterator(this._keys, this._values, getEntry);
                };
                Map.prototype["@@iterator"] = function () {
                    return this.entries();
                };
                Map.prototype[iteratorSymbol] = function () {
                    return this.entries();
                };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }();
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () {
                        return this._map.size;
                    },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) {
                    return this._map.has(value);
                };
                Set.prototype.add = function (value) {
                    return this._map.set(value, value), this;
                };
                Set.prototype.delete = function (value) {
                    return this._map.delete(value);
                };
                Set.prototype.clear = function () {
                    this._map.clear();
                };
                Set.prototype.keys = function () {
                    return this._map.keys();
                };
                Set.prototype.values = function () {
                    return this._map.values();
                };
                Set.prototype.entries = function () {
                    return this._map.entries();
                };
                Set.prototype["@@iterator"] = function () {
                    return this.keys();
                };
                Set.prototype[iteratorSymbol] = function () {
                    return this.keys();
                };
                return Set;
            }();
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }();
            function CreateUniqueKey() {
                var key;
                do key = "@@WeakMap@@" + CreateUUID(); while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create) return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i) buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined") return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined") return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8) result += "-";
                    if (byte < 16) result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74), __webpack_require__(75)))

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Custom Elements v1
 *
 * Based on https://www.w3.org/TR/2016/WD-custom-elements-20160830/
 */

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by hubert on 8/06/17.
 */

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ozone_config__ = __webpack_require__(82);
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * UploadFileRequest is a JavaScrip class that can be use as an
 * XMLHttpRequest to upload media using ozone v2 upload chanel.
 * It mask the complex series of AJAX call to one XMLHttpRequest like request.
 * Note: that UploadFileRequest implement only a subset of XMLHttpRequest
 *
 * example:
 * ```javaScript
 *  import {UploadFileRequest} from 'ozone-api-upload'
 *  const uploader = new UploadFileRequest();
 *  uploader.open();
 *  const formData = new FormData();
 *  formData.append(file.formDataName, file, file.name);
 *  uploader.send(formData);
 * ```
 *
 * ### Events
 * * *ozone-upload-completed*: *CustomEvent*
 *    Fired when upload is complete with detail: {mediaId: uuid}
*
*/
class UploadFileRequest {
    constructor() {
        /**
         * XMLHttpRequest.onreadystatechange event handler
         */
        this.onreadystatechange = () => {};
        /**
         * set the interval to verify ozone has finish the element processing
         * @type {number} poll interval in ms
         */
        this.pollInterval = 500;
        /**
         * XMLHttpRequest.readyState
         * @type {number}
         */
        this.readyState = 0;
        /**
         * XMLHttpRequest.status
         * @type {number}
         */
        this.status = NaN;
        this._mediaId = null;
        this.config = null;
        this.isAbort = false;
        this.currentRequest = null;
        this.upload = {
            onprogress: () => {},
            onloadstart: () => {}
        };
    }
    callOneadystatechange() {
        if (typeof this.onreadystatechange == 'function') {
            this.onreadystatechange();
        }
    }
    /**
     * Accessor to uploaded media id.
     * default value is null
     *
     * @return {string | null}
     */
    get mediaId() {
        return this._mediaId;
    }
    /**
     * like an XMLHttpRequest.open()
     * Parameters passed are not used.
     * method and URL come from the config file.
     * Request will always be async.
     *
     * @param {string} method
     * @param {string} url
     * @param {boolean} async
     */
    open(method, url, async = true) {
        this.readyState = 1;
    }
    /**
     * like an XMLHttpRequest.send()
     * start async process to upload the file inside the form.
     * @param {FormData} formData
     * @return {Promise<void>}
     */
    send(formData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.uploadFile(formData);
        });
    }
    /**
     * like XMLHttpRequest.abort()
     * cancel current upload process
     */
    abort() {
        this.isAbort = true;
        if (this.currentRequest) {
            this.currentRequest.abort();
        }
    }
    /**
     * unused.
     * @param {string} key
     * @param {string} value
     */
    setRequestHeader(key, value) {}
    _createRequest() {
        if (this.isAbort) {
            throw new Error('request abort');
        }
        this.currentRequest = new XMLHttpRequest();
        this.currentRequest.withCredentials = true;
        this.currentRequest.responseType = 'json';
        return this.currentRequest;
    }
    _buildUrl(service, ...param) {
        const otherUrlParam = param || [];
        if (this.config === null) {
            throw new Error('config is undefined');
        }
        return [this.config.host, this.config.endPoints[service], ...otherUrlParam].join('/').replace(/\/\//g, '/');
    }
    /**
     * alias to send method.
     * @param {FormData} file
     * @param {string} folderId
     * @return {Promise<string | void>}
     */
    uploadFile(file, folderId = '0') {
        return __WEBPACK_IMPORTED_MODULE_0_ozone_config__["a" /* OzoneConfig */].get().then(config => {
            this.config = config;
            return this._startUploadSession(file, folderId);
        }).then(result => this._getUploadId(result)).then(result => this._performUpload(result)).then(result => this._endUploadSession(result)).then(result => this._waitForTask(result)).then(mediaId => {
            this.status = 200;
            this.readyState = 4;
            this.callOneadystatechange();
            this._mediaId = mediaId;
            document.dispatchEvent(new CustomEvent('ozone-upload-completed', { bubbles: true, detail: { mediaId } }));
            return mediaId;
        }).catch(error => {
            this.status = 555;
            this.readyState = 4;
            this.callOneadystatechange();
            console.error(error.message);
            return null;
        });
    }
    notifyOnError(xhr) {
        return () => {
            if (xhr.status === 0 || xhr.status >= 500 || xhr.status >= 400) {
                this.status = xhr.status;
                this.readyState = 4;
                this.callOneadystatechange();
            }
        };
    }
    _startUploadSession(file, folderId) {
        const xhr = this._createRequest();
        const url = this._buildUrl('uploadStart');
        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = this.notifyOnError(xhr);
        //TODO understand need of folderId??
        const numeric_id = parseInt('0x' + folderId.split('-')[4]);
        if (this.config === null) {
            throw new Error('config is undefined');
        }
        const body = {
            mediaUploadChannelIdentifier: this.config.uploadChannel,
            autoCommit: false,
            mediaMetadatas: [{
                "type": {
                    "type": "PROPERTY",
                    "identifier": "org.taktik.metadata.folderId"
                },
                "valueObject": numeric_id.toString()
            }]
        };
        const result = new Promise((resolve, reject) => {
            xhr.addEventListener("load", resolve);
            xhr.addEventListener("error", reject);
        });
        xhr.send(JSON.stringify(body));
        return result.then(() => {
            const response = xhr.response;
            return {
                file: file,
                sessionId: response.result
            };
        });
    }
    _getUploadId(data) {
        const xhr = this._createRequest();
        const url = this._buildUrl('uploadId', data.sessionId);
        xhr.open('GET', url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = this.notifyOnError(xhr);
        const result = new Promise((resolve, reject) => {
            xhr.addEventListener("load", resolve);
            xhr.addEventListener("error", reject);
        }).then(() => {
            const response = xhr.response;
            const resultInfo = data;
            resultInfo.uploadId = response.result;
            resultInfo.folderId = response.folderId;
            return resultInfo;
        });
        xhr.send(null);
        return result;
    }
    _performUpload(data) {
        const xhr = this._createRequest();
        const url = this._buildUrl('upload', data.uploadId);
        xhr.open('POST', url, true);
        xhr.onreadystatechange = this.notifyOnError(xhr);
        xhr.upload.onprogress = this.upload.onprogress;
        const result = new Promise((resolve, reject) => {
            xhr.addEventListener("load", resolve);
            xhr.addEventListener("error", reject);
        });
        xhr.send(data.file);
        return result.then(() => {
            return data;
        });
    }
    _endUploadSession(data) {
        const xhr = this._createRequest();
        const url = this._buildUrl('uploadComplete', data.sessionId);
        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = this.notifyOnError(xhr);
        const result = new Promise((resolve, reject) => {
            xhr.addEventListener("load", resolve);
            xhr.addEventListener("error", reject);
        }).then(() => {
            const response = data;
            response.uploadFileId = xhr.response.file;
            return response;
        });
        const info = {
            'selectedFileFieldNames': [['files']],
            mediaMetadatas: [{ type: { type: 'PROPERTY', identifier: 'org.taktik.metadata.folderId' }, valueObject: data.folderId }]
        };
        xhr.send(JSON.stringify(info));
        return result;
    }
    _waitForTask(uploadEndResult) {
        return new Promise((resolve, reject) => {
            let interval = setInterval(() => {
                this._awaitTask(uploadEndResult.uploadFileId).then(data => {
                    if (data.taskExecutions[uploadEndResult.uploadFileId].isComplete) {
                        clearInterval(interval);
                        const mediaId = data.taskExecutions[uploadEndResult.uploadFileId].taskResult.mediaId;
                        resolve(mediaId);
                    }
                }).catch(error => {
                    clearInterval(interval);
                    reject(error);
                });
            }, this.pollInterval);
        });
    }
    _awaitTask(uploadFileId) {
        const xhr = this._createRequest();
        const url = this._buildUrl('wait', uploadFileId, '120');
        xhr.open('GET', url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = this.notifyOnError(xhr);
        const result = new Promise((resolve, reject) => {
            xhr.addEventListener("load", resolve);
            xhr.addEventListener("error", reject);
        }).then(() => {
            return xhr.response;
        });
        xhr.send(null);
        return result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UploadFileRequest;


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OzoneConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ozone_api_request__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_taktik_polymer_typescript__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_taktik_polymer_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_taktik_polymer_typescript__);
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const configUrl = './conf.ozone.json';
const ozoneAPIRequest = new __WEBPACK_IMPORTED_MODULE_0_ozone_api_request__["a" /* OzoneAPIRequest */]();
ozoneAPIRequest.url = configUrl;
ozoneAPIRequest.method = 'GET';
let OzoneConfig = OzoneConfig_1 = class OzoneConfig {
    static get() {
        if (!OzoneConfig_1.configPromise) {
            OzoneConfig_1.configPromise = ozoneAPIRequest.sendRequest().then(res => {
                return res.response.ozoneApi;
            }).catch(failRequest => {
                console.error('Unable to find config at ', configUrl);
                throw new Error('Unable to find config');
            });
        }
        return OzoneConfig_1.configPromise;
    }
};
OzoneConfig.configPromise = null;
OzoneConfig = OzoneConfig_1 = __decorate([Object(__WEBPACK_IMPORTED_MODULE_1_taktik_polymer_typescript__["jsElement"])()], OzoneConfig);

var OzoneConfig_1;

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OzoneAPIRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_taktik_polymer_typescript__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_taktik_polymer_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_taktik_polymer_typescript__);
/// <amd-module name="ozone-api-request"/>
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * OzoneAPIRequest is a light wrapper over XMLHttpRequest to manager AJAX request to Ozone.
 *
 * ### Events
 *
 * * *ozone-api-request-success* Fired when connection to ozone succeeds.
 * Event detail contains the XMLHttpRequest.
 *
 * * *ozone-api-request-error* Fired when connection to ozone fails.
 * Event detail contains the XMLHttpRequest.
 *

 * * *ozone-api-request-timeout* Fired when connection timeout.
 * Event detail contains the XMLHttpRequest.
 *
 * * *ozone-api-request-unauthorized* Fired when server return 403 unauthorized.
 * Event detail contains the XMLHttpRequest.
 *
 *
 * ### Usage
 *
 * * Basic usage with promise
 * ```typeScript
 * const OzoneAPIRequest = new OzoneAPIRequest();
 * OzoneAPIRequest.url = url;
 * OzoneAPIRequest.method = 'GET';
 * OzoneAPIRequest.sendRequest()
 *    .then((res:XMLHttpRequest) => {
 *        // Do something with XMLHttpRequest
 *        console.log(res.response)
 *    })
 *    .catch((failRequest)=>{
 *        // Do something with XMLHttpRequest to handel the error.
 *        console.error(failRequest.statusText)
 *    })
 * ```
 *
 *
 * * Usage with Event handler
 * ```typeScript
 * this.addEventListener('ozone-api-request-success', (event: Event) => {
 *        // Do something with XMLHttpRequest
 *        console.log(event.detail.response)
 *    })
 * this.addEventListener('ozone-api-request-error', (event: Event) => {
 *        // Do something with XMLHttpRequest to handel the error.
 *        console.error(event.detail.statusText)
 *    })
 * const OzoneAPIRequest = new OzoneAPIRequest();
 * OzoneAPIRequest.setEventTarget(this)
 * OzoneAPIRequest.url = url;
 * OzoneAPIRequest.method = 'GET';
 * OzoneAPIRequest.sendRequest();
 * ```
 *
 * * Modify request before send
 * ```typeScript
 * const OzoneAPIRequest = new OzoneAPIRequest();
 * OzoneAPIRequest.url = url;
 * OzoneAPIRequest.method = 'GET';
 * const request = OzoneAPIRequest.createXMLHttpRequest();
 * // Modify default request
 * request.setRequestHeader('Cache-Control', 'only-if-cached');
 *
 * OzoneAPIRequest.sendRequest(request);
 * // Handel response
 * ```
 *
 */
let OzoneAPIRequest = class OzoneAPIRequest {
    /**
     * OzoneAPIRequest is a light wrapper over XMLHttpRequest to manager AJAX request to Ozone.
     *
     * ### Events
     *
     * * *ozone-api-request-success* Fired when connection to ozone succeeds.
     * Event detail contains the XMLHttpRequest.
     *
     * * *ozone-api-request-error* Fired when connection to ozone fails.
     * Event detail contains the XMLHttpRequest.
     *
    
     * * *ozone-api-request-timeout* Fired when connection timeout.
     * Event detail contains the XMLHttpRequest.
     *
     * * *ozone-api-request-unauthorized* Fired when server return 403 unauthorized.
     * Event detail contains the XMLHttpRequest.
     *
     *
     * ### Usage
     *
     * * Basic usage with promise
     * ```typeScript
     * const OzoneAPIRequest = new OzoneAPIRequest();
     * OzoneAPIRequest.url = url;
     * OzoneAPIRequest.method = 'GET';
     * OzoneAPIRequest.sendRequest()
     *    .then((res:XMLHttpRequest) => {
     *        // Do something with XMLHttpRequest
     *        console.log(res.response)
     *    })
     *    .catch((failRequest)=>{
     *        // Do something with XMLHttpRequest to handel the error.
     *        console.error(failRequest.statusText)
     *    })
     * ```
     *
     *
     * * Usage with Event handler
     * ```typeScript
     * this.addEventListener('ozone-api-request-success', (event: Event) => {
     *        // Do something with XMLHttpRequest
     *        console.log(event.detail.response)
     *    })
     * this.addEventListener('ozone-api-request-error', (event: Event) => {
     *        // Do something with XMLHttpRequest to handel the error.
     *        console.error(event.detail.statusText)
     *    })
     * const OzoneAPIRequest = new OzoneAPIRequest();
     * OzoneAPIRequest.setEventTarget(this)
     * OzoneAPIRequest.url = url;
     * OzoneAPIRequest.method = 'GET';
     * OzoneAPIRequest.sendRequest();
     * ```
     *
     * * Modify request before send
     * ```typeScript
     * const OzoneAPIRequest = new OzoneAPIRequest();
     * OzoneAPIRequest.url = url;
     * OzoneAPIRequest.method = 'GET';
     * const request = OzoneAPIRequest.createXMLHttpRequest();
     * // Modify default request
     * request.setRequestHeader('Cache-Control', 'only-if-cached');
     *
     * OzoneAPIRequest.sendRequest(request);
     * // Handel response
     * ```
     *
     */
    constructor() {
        this._url = '';
        this._method = 'GET';
        this._body = '';
        this._responseType = 'json';
        /**
         * eventTarget to dispatch *ozone-api-request-success* and *ozone-api-request-error* events
         * Default value is document.
         * @type {EventTarget}
         */
        this.eventTarget = document;
    }
    set url(url) {
        this._url = url;
    }
    get url() {
        return this._url;
    }
    set body(body) {
        this._body = body;
    }
    get body() {
        return this._body;
    }
    set method(method) {
        this._method = method;
    }
    get method() {
        return this._method;
    }
    set responseType(responseType) {
        this._responseType = responseType;
    }
    get responseType() {
        return this._responseType;
    }
    /**
     * Create and open an XMLHttpRequest
     * @return {XMLHttpRequest}
     */
    createXMLHttpRequest() {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.withCredentials = true;
        xmlhttp.open(this.method, this.url, true);
        xmlhttp.responseType = this.responseType;
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.setRequestHeader('Accept', 'application/json');
        return xmlhttp;
    }
    setEventTarget(element) {
        this.eventTarget = element;
    }
    /**
     *
     * @param {XMLHttpRequest} request (optional) This parameters overwrite the default XmlHttpRequest.
     * @return {Promise<XMLHttpRequest>}
     */
    sendRequest(request) {
        const xmlhttp = request || this.createXMLHttpRequest();
        return new Promise((resolve, reject) => {
            const handleResponse = () => {
                switch (xmlhttp.status) {
                    case 200:
                        this.eventTarget.dispatchEvent(new CustomEvent('ozone-api-request-success', {
                            bubbles: true, detail: xmlhttp
                        }));
                        resolve(xmlhttp);
                        break;
                    case 403:
                        this.eventTarget.dispatchEvent(new CustomEvent('ozone-api-request-unauthorized', {
                            bubbles: true, detail: xmlhttp
                        }));
                        reject(xmlhttp);
                        break;
                    default:
                        this.eventTarget.dispatchEvent(new CustomEvent('ozone-api-request-error', {
                            bubbles: true, detail: xmlhttp
                        }));
                        reject(xmlhttp);
                }
            };
            xmlhttp.onload = handleResponse;
            xmlhttp.ontimeout = () => {
                this.eventTarget.dispatchEvent(new CustomEvent('ozone-api-request-timeout', {
                    bubbles: true, detail: xmlhttp
                }));
                reject(xmlhttp);
            };
            xmlhttp.onerror = handleResponse;
            xmlhttp.send(this.body);
        });
    }
};
OzoneAPIRequest = __decorate([Object(__WEBPACK_IMPORTED_MODULE_0_taktik_polymer_typescript__["jsElement"])()], OzoneAPIRequest);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


const RegisterHtmlTemplate = __webpack_require__(1);

RegisterHtmlTemplate.toBody("<head> </head>");

RegisterHtmlTemplate.toBody("<body> <dom-module id=ozone-upload> <template> <vaadin-upload id=vaadinUpload accept=\"\"></vaadin-upload> </template> </dom-module> </body>");

/***/ })
/******/ ]);