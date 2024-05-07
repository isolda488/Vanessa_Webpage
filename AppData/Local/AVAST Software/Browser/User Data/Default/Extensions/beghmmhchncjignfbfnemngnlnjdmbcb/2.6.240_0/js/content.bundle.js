/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BU: () => (/* binding */ StorageKeys),
/* harmony export */   JL: () => (/* binding */ HookedFunctionsMap),
/* harmony export */   _B: () => (/* binding */ Resources)
/* harmony export */ });
/* unused harmony exports Brand, Strings */
var Resources = {
  Strings: {},
  Icons: {},
  Animations: {},
  Links: {
    Info: {
      Avast: "https://extension.avastbrowser.com/afp/about/",
      AVG: "https://extension.avgbrowser.com/afp/about/",
      CCleaner: "https://extension.ccleanerbrowser.com/afp/about/"
    }
  },
  PrivacyGuardId: {
    Avast: "onochehmbbbmkaffnheflmfpfjgppblm",
    AVG: "iiapdppbgcanenmhjjoajoiajcapbllj",
    CCleaner: "kkocjjglpnkdgffmmgkfikpbhkhmppca",
    Avira: "mcaijpamjmchiicedbkhglembdphfgkl",
    Norton: "achbgnlchkddjajdjgnfajiheehdjhhl"
  }
};
var StorageKeys = {
  AppSettings: {
    KEY: "settings",
    DISABLED: "disabled",
    WHITELIST: "whitelist",
    NOTIFICATIONS: "notifications",
    IS_ACTIVE: "isActive",
    SOCIAL_MEDIA_DETECTION_PROTECTION: "socialMediaProtection",
    PROFILES: "profiles"
  },
  NOISE: "noise",
  AFPData: {
    KEY: "AFPData",
    FINGERPRINT_ATTEMPTS_DETECTED_COUNTER: "A1"
  }
};
var Brand = {
  AVAST: "Avast",
  AVG: "AVG",
  CCleaner: "CCleaner"
};
var Strings = {
  APP_NAME: chrome.i18n.getMessage("appName"),
  APP_DESCRIPTION: chrome.i18n.getMessage("appDescription"),
  SETTINGS_SOCIAL_MEDIA_LOGIN_DETECTION_PREVENTION: chrome.i18n.getMessage('settingsSocialMediaLoginDetectionPrevention'),
  SETTINGS_ADVANCED: chrome.i18n.getMessage("settingsAdvanced"),
  POPUP_FINGERPRINT_ATTEMPTS_DETECTED: chrome.i18n.getMessage("popupTotalFingerprintsAttemptsDetected"),
  POPUP_STATUS_ENABLED: chrome.i18n.getMessage("popupStatusEnabled"),
  POPUP_STATUS_DISABLED: chrome.i18n.getMessage("popupStatusDisabled")
};
var HookedFunctionsMap = {
  Canvas: 1,
  WebGL: 2,
  AudioBuffer: 3,
  AudioContext: 4,
  Plugins: 5,
  MediaDevices: 6,
  ReadPixels: 7,
  GetShaderPrecisionFormat: 8,
  ClientRects: 9,
  GetParameter: 10,
  BufferData: 11
};


/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144);



var Browser = /*#__PURE__*/function () {
  function Browser() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, Browser);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(Browser, null, [{
    key: "getResource",
    value: function getResource(file) {
      return chrome.extension.getURL(file);
    }
  }, {
    key: "getStorageSync",
    value: function getStorageSync(key) {
      return new Promise(function (resolve, reject) {
        chrome.storage.sync.get(key, function (result) {
          if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(result) === "object" && result[key]) {
            resolve(result[key]);
          } else {
            resolve(null);
          }
        });
      });
    }
  }, {
    key: "setStorageSync",
    value: function setStorageSync(key, data) {
      var _object;
      var object = (_object = {}, _object[key] = data, _object);
      chrome.storage.sync.set(object);
    }
  }, {
    key: "getStorageLocal",
    value: function getStorageLocal(key) {
      return new Promise(function (resolve, reject) {
        chrome.storage.local.get(key, function (result) {
          if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(result) === "object" && result[key]) {
            resolve(result[key]);
          } else {
            resolve(null);
          }
        });
      });
    }
  }, {
    key: "setStorageLocal",
    value: function setStorageLocal(key, data) {
      var _object2;
      var object = (_object2 = {}, _object2[key] = data, _object2);
      chrome.storage.local.set(object);
    }
  }]);
  return Browser;
}();


/***/ }),

/***/ 98:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ FingerprintAttributes),
/* harmony export */   x: () => (/* binding */ applyFingerprintAttributes)
/* harmony export */ });
/* harmony import */ var _app_constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(586);

var FingerprintAttributes = function FingerprintAttributes(profile) {
  return [{
    object: "navigator",
    property: "userAgent",
    value: profile.Headers["User-Agent"] || navigator.userAgent
  }, {
    object: "navigator",
    property: "plugins",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.Plugins,
    weight: 0.3
  }, {
    object: "screen",
    property: "width",
    value: profile.Screen ? profile.Screen.width : screen.width,
    weight: 0
  }, {
    object: "screen",
    property: "height",
    value: profile.Screen ? profile.Screen.height : screen.height,
    weight: 0
  }, {
    object: "navigator",
    property: "vendor",
    value: "Google Inc."
  }, {
    object: "navigator",
    property: "productSub",
    value: "20100101"
  }, {
    object: "HTMLCanvasElement",
    property: "prototype",
    method: "toDataURL",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.Canvas,
    weight: 0.5
  }, {
    object: "HTMLCanvasElement",
    property: "prototype",
    method: "getImageData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.Canvas,
    weight: 0.5
  }, {
    object: "AudioBuffer",
    property: "prototype",
    method: "getChannelData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.AudioBuffer,
    weight: 0.2
  }, {
    object: "AnalyserNode",
    property: "prototype",
    method: "getFloatFrequencyData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.AudioContext,
    weight: 0.2
  }, {
    object: "MediaDevices",
    property: "prototype",
    method: "enumerateDevices",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.MediaDevices,
    weight: 0.2
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "readPixels",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.ReadPixels,
    weight: 0.1
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "getShaderPrecisionFormat",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.GetShaderPrecisionFormat,
    weight: 0.1
  }, {
    object: "WebGLRenderingContext",
    property: "prototype",
    method: "getParameter",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.GetParameter,
    weight: 0.1
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "getParameter",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.GetParameter,
    weight: 0.1
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "bufferData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.BufferData,
    weight: 0.1
  }, {
    object: "WebGLRenderingContext",
    property: "prototype",
    method: "bufferData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.BufferData,
    weight: 0.1
  }, {
    object: "Element",
    property: "prototype",
    method: "getClientRects",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap */ .JL.ClientRects,
    weight: 0
  }];
};
var applyFingerprintAttributes = function applyFingerprintAttributes(_ref) {
  var fpAttr = _ref.fpAttr,
    funcPrefix = _ref.funcPrefix,
    debug = _ref.debug,
    t0 = _ref.t0;
  var FINGERPRINT_DETECTION_THRESHOLD = 0.6;
  var alreadyCalculated = [];
  var fingerprintWeight = 0;
  var alreadyDetected = false;
  var notifyFingerprintAttempt = function notifyFingerprintAttempt() {
    if (alreadyDetected) return;
    var event = new CustomEvent("fingerprintAttemptDetected", {
      detail: {
        score: fingerprintWeight
      }
    });
    document.dispatchEvent(event);
    alreadyDetected = true;
  };
  var updateFingerprintWeight = function updateFingerprintWeight(prop, weight) {
    if (!alreadyCalculated.includes(prop)) {
      logFunc("[".concat(window.location.hostname, "] Increasing fingerprint weight by ").concat(weight, ", due to ").concat(prop));
      fingerprintWeight += weight;
      alreadyCalculated.push(prop);
      logFunc("[".concat(window.location.hostname, "] Current fingerprint weight is ").concat(fingerprintWeight));
    }
    if (fingerprintWeight >= FINGERPRINT_DETECTION_THRESHOLD) {
      notifyFingerprintAttempt();
    }
  };
  var logFunc = function logFunc() {};
  if (debug) {
    logFunc = console.log;
  }
  var overrideProp = function overrideProp(obj, prop, value) {
    var weight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
    if (!obj || !obj[prop]) return;
    var name = "unknown";
    if (obj && obj.constructor) {
      name = obj.constructor.name;
    }
    logFunc("Hooking ".concat(name, ".").concat(prop, " with value"), value);
    try {
      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      if (descriptor !== null && descriptor !== void 0 && descriptor.configurable) {
        Object.defineProperty(obj, "".concat(prop), {
          get: function () {
            updateFingerprintWeight("".concat(name, ".").concat(prop), weight);
            logFunc("".concat(name, ".").concat(prop, " was called, returning value"), value);
            return value;
          }.bind(null)
        });
      } else {
        logFunc("".concat(name, ".").concat(prop, " cannot be reconfigured"));
      }
    } catch (e) {
      logFunc(e);
    }
  };
  var overrideMethod = function overrideMethod(obj, method, value) {
    var weight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
    var func = window[funcPrefix][value];
    if (!func) return;
    if (!obj || !obj[method]) return;
    var proto = obj[method];
    var name = "unknown";
    if (obj && obj.constructor) {
      name = obj.constructor.name;
    }
    logFunc("Hooking ".concat(name, ".").concat(method, " with function ").concat(value));
    try {
      var descriptor = Object.getOwnPropertyDescriptor(obj, method);
      if (descriptor !== null && descriptor !== void 0 && descriptor.configurable) {
        Object.defineProperty(obj, "".concat(method), {
          enumerable: false,
          get: function get() {
            updateFingerprintWeight("".concat(name, ".").concat(method), weight);
            logFunc("".concat(name, ".").concat(method, " was called"));
            return func.bind(this, {
              proto: proto
            }, arguments).bind(null); // forces toString to display the overriden function content as native code
          }
        });
      } else {
        logFunc("".concat(name, ".").concat(method, " cannot be reconfigured"));
      }
    } catch (e) {
      logFunc(e);
    }
  };
  fpAttr.forEach(function (i) {
    if (window[i.object] && window[i.object][i.property]) {
      if (i.method) {
        overrideMethod(window[i.object][i.property], i.method, i.valueFn, i.weight);
      } else {
        if (i.value || window[funcPrefix] && window[funcPrefix][i.valueFn]) {
          overrideProp(window[i.object], [i.property], i.value || window[funcPrefix][i.valueFn](), i.weight);
        }
      }
    }
  });

  //Removing traces
  delete window[funcPrefix];
  if (debug) {
    var t1 = performance.now();
    var timeTook = parseFloat(t1 - t0).toFixed(2);
    logFunc("Anti fingerprint module loaded [".concat(timeTook, " milliseconds]"));
  }
};


/***/ }),

/***/ 61:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(698)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 698:
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(61)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 671:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ 142:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ _toPropertyKey)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if ((0,esm_typeof/* default */.Z)(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,esm_typeof/* default */.Z)(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return (0,esm_typeof/* default */.Z)(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ 2:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(144);
// EXTERNAL MODULE: ./app/utils/Browser.js
var Browser = __webpack_require__(162);
;// CONCATENATED MODULE: ./app/utils/Resource.js



var Resource = /*#__PURE__*/function () {
  function Resource() {
    (0,classCallCheck/* default */.Z)(this, Resource);
  }
  (0,createClass/* default */.Z)(Resource, null, [{
    key: "get",
    value: function get(file) {
      return Browser/* Browser */.A.getResource(file);
    }
  }, {
    key: "image",
    value: function image(img) {
      return Resource.get("img/".concat(img));
    }
  }]);
  return Resource;
}();

;// CONCATENATED MODULE: ./webpack/customPublicPath.js
/* global __webpack_public_path__ __HOST__ __PORT__ */
/* eslint no-global-assign: 0 camelcase: 0 */


__webpack_require__.p = Resource.get('/js/');
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./chrome/extension/fingerprint.attributes.js
var fingerprint_attributes = __webpack_require__(98);
// EXTERNAL MODULE: ./app/constants/app.js
var app = __webpack_require__(586);
;// CONCATENATED MODULE: ./app/constants/profiles.js
var _Profiles;
var ProfileType = {
  Default: 0,
  StrippedUserAgent: 1,
  Paranoid: 2
};
var Profiles = (_Profiles = {}, _Profiles[ProfileType.Default] = {
  Headers: {
    // "User-Agent": navigator.userAgent,
    // "Accept": "text/html,*/*;q=0.01",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en,de;q=0.9"
  }
}, _Profiles[ProfileType.StrippedUserAgent] = {
  Headers: {
    "User-Agent": navigator.userAgent.match(/(Mozilla.+Safari\/\d{3}\.\d{2})/)[1] || navigator.userAgent
  }
}, _Profiles[ProfileType.Paranoid] = {
  Headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0",
    "Accept": "text/html, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en;q=0.9"
  },
  OmitHeaders: ["DNT"],
  plugins: null,
  Fonts: ["Arial", "Courier", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "LUCIDA GRANDE", "Monaco", "Tahoma", "Times", "Times New Roman", "Verdana", "Wingdings 2", "Wingdings 3"],
  Screen: {
    height: 900,
    width: 1000
  },
  WebGL: null,
  // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAACA0lEQVR4nO3UMQ0AMAzAsPIn3VLYN0WyEeTKLEDE/A4AeGVYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBxbV+J5YXpHgwAAAAASUVORK5CYII=",
  Canvas: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAADICAYAAACwGnoBAAAH6ElEQVR4nO3ZMQEAAAiAMPuXxhh6bAn4mQAAAAAAAACA5joAAAAAAAAAAD4w0AEAAAAAAAAgAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAAKpaV/0C3qz3zKIAAAAASUVORK5CYII="
}, _Profiles);

;// CONCATENATED MODULE: ./app/constants/settings.js
var _DEFAULT_SETTINGS, _DEFAULT_AFP_DATA;


var Settings = {
  DEBUG: "production" !== 'production',
  APP_VERSION: chrome.runtime.getManifest().version,
  DEFAULT_NOISE: {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  },
  DEFAULT_SETTINGS: (_DEFAULT_SETTINGS = {}, _DEFAULT_SETTINGS[app/* StorageKeys */.BU.AppSettings.DISABLED] = [], _DEFAULT_SETTINGS[app/* StorageKeys */.BU.AppSettings.WHITELIST] = [], _DEFAULT_SETTINGS[app/* StorageKeys */.BU.AppSettings.PROFILES] = [], _DEFAULT_SETTINGS[app/* StorageKeys */.BU.AppSettings.NOTIFICATIONS] = false, _DEFAULT_SETTINGS[app/* StorageKeys */.BU.AppSettings.IS_ACTIVE] = false, _DEFAULT_SETTINGS[app/* StorageKeys */.BU.AppSettings.SOCIAL_MEDIA_DETECTION_PROTECTION] = false, _DEFAULT_SETTINGS),
  DEFAULT_AFP_DATA: (_DEFAULT_AFP_DATA = {}, _DEFAULT_AFP_DATA[app/* StorageKeys */.BU.AFPData.FINGERPRINT_ATTEMPTS_DETECTED_COUNTER] = 0, _DEFAULT_AFP_DATA),
  MORE_INFO_LINK: app/* Resources */._B.Links.Info["Avast" || 0],
  SHEPHERD_URL: 'https://shepherd.ff.avast.com/?p_pro=150',
  PRIVACY_GUARD_ID: app/* Resources */._B.PrivacyGuardId["Avast" || 0]
};
/* harmony default export */ const settings = (Settings);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(144);
;// CONCATENATED MODULE: ./app/utils/Logger.js




var MessageType = {
  INFO: "Info",
  WARNING: "Warning",
  ERROR: "Error",
  DEBUG: "Debug"
};
var SYMBOL = "AFP";
var SEPARATOR = '-';
var SEPARATOR_COUNT = 260;
var Logger = /*#__PURE__*/function () {
  function Logger() {
    (0,classCallCheck/* default */.Z)(this, Logger);
  }
  (0,createClass/* default */.Z)(Logger, null, [{
    key: "log",
    value: function log(msg) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MessageType.INFO;
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      if ((0,esm_typeof/* default */.Z)(msg) === 'object') {
        msg = JSON.stringify(msg);
      }
      var date = new Date().toDateString();
      if (title.length > 0) {
        console.log("%c".concat(title, " START %c").concat(SEPARATOR.repeat(SEPARATOR_COUNT - title.length - 2)), 'background: #000; color: #fff', 'background: #000; color: #000');
      }
      console.log("".concat(SYMBOL, " :: ").concat(date, " :: %c").concat(type, "%c ::  %c").concat(msg), Logger.getMessageColor(type), this.getMessageColor(null), "color: #e5e5e5");
      if (title) {
        console.log("%c".concat(title, " END %c").concat(SEPARATOR.repeat(SEPARATOR_COUNT - title.length)), 'background: #000; color: #fff', 'background: #000; color: #000');
      }
    }
  }, {
    key: "debug",
    value: function debug(msg) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (!settings.DEBUG) {
        return;
      }
      this.log(msg, MessageType.DEBUG, title);
    }
  }, {
    key: "info",
    value: function info(msg) {
      this.log(msg, MessageType.INFO);
    }
  }, {
    key: "warn",
    value: function warn(msg) {
      this.log(msg, MessageType.WARNING);
    }
  }, {
    key: "error",
    value: function error(msg) {
      this.log(msg, MessageType.ERROR);
    }
  }, {
    key: "getMessageColor",
    value: function getMessageColor(type) {
      switch (type) {
        case MessageType.INFO:
          return 'color: yellow';
        case MessageType.ERROR:
          return 'color: red';
        case MessageType.WARNING:
          return 'color: #ffad36';
        case MessageType.DEBUG:
          return 'color: green';
        default:
          return 'color: black';
      }
    }
  }]);
  return Logger;
}();
Logger.MessageType = MessageType;

;// CONCATENATED MODULE: ./chrome/extension/hooks.js
var functionsHooks = function functionsHooks(_ref) {
  var _window$funcPrefix;
  var funcPrefix = _ref.funcPrefix,
    HookedFunctionsMap = _ref.HookedFunctionsMap,
    disabledFeatures = _ref.disabledFeatures,
    _ref$canvasFp = _ref.canvasFp,
    canvasFp = _ref$canvasFp === void 0 ? false : _ref$canvasFp,
    _ref$webglFp = _ref.webglFp,
    webglFp = _ref$webglFp === void 0 ? false : _ref$webglFp,
    _ref$plugins = _ref.plugins,
    plugins = _ref$plugins === void 0 ? false : _ref$plugins;
  var randoms = {
    randomArrValue: function randomArrValue(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    "float": function float(arr) {
      var tmp = [];
      for (var i = 0; i < arr.length; i++) {
        var n = Math.pow(2, arr[i]);
        tmp.push(new Float32Array([1, n]));
      }
      return randoms.randomArrValue(tmp);
    },
    "int": function int(arr) {
      var tmp = [];
      for (var i = 0; i < arr.length; i++) {
        var n = Math.pow(2, arr[i]);
        tmp.push(new Int32Array([1, n]));
      }
      return randoms.randomArrValue(tmp);
    },
    number: function number(arr) {
      var tmp = [];
      for (var i = 0; i < arr.length; i++) {
        tmp.push(Math.pow(2, arr[i]));
      }
      return randoms.randomArrValue(tmp);
    }
  };
  window[funcPrefix] = (_window$funcPrefix = {}, _window$funcPrefix[HookedFunctionsMap.Canvas] = function (_ref2, originalArgs) {
    var proto = _ref2.proto;
    if (webglFp && (this.getContext('webgl') || this.getContext('experimental-webgl2') || this.getContext('webgl2') || this.getContext('experimental-webgl'))) {
      // Webgl hash faker. A hash is generated by websites from this returned value
      return webglFp;
    }
    if (canvasFp) {
      return canvasFp;
    }
    var width = this.width;
    var height = this.height;
    var context = this.getContext("2d");
    if (context && context.getImageData) {
      var imageData = context.getImageData(0, 0, width, height);
      for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
          var index = i * (width * 4) + j * 4;
          imageData.data[index] = imageData.data[index] + Math.ceil(Math.random() * 10);
          imageData.data[index + 1] = imageData.data[index + 1] + Math.ceil(Math.random() * 10);
          imageData.data[index + 2] = imageData.data[index + 2] + Math.ceil(Math.random() * 10);
          imageData.data[index + 3] = imageData.data[index + 3] + Math.ceil(Math.random() * 10);
        }
      }
      context.putImageData(imageData, 0, 0);
      return proto.apply(this, arguments);
    }
  }, _window$funcPrefix[HookedFunctionsMap.WebGL] = function (_ref3, originalArgs, type) {
    var proto = _ref3.proto;
    var newArgs = [type];
    // const unsupportedContexts = ["experimental-webgl", "webgl", "experimental-webgl2", "webgl2"];
    // Blocks webgl completely, resulting in hash of zeroes
    // if (!webglFp && unsupportedContexts.includes((type))) {
    //     notify(name, weight);
    //     console.log("Inside original webgl null");
    //     return null;
    // }

    return proto.call(this, newArgs);
  }, _window$funcPrefix[HookedFunctionsMap.AudioBuffer] = function (_ref4) {
    var proto = _ref4.proto;
    var results = proto.apply(this, arguments);
    for (var i = 0; i < results.length; i += 100) {
      var index = Math.floor(Math.abs(Math.ceil(Math.random() * 10)) * i);
      results[index] += Math.abs(Math.ceil(Math.random() * 10)) * 0.0000001;
    }
    return results;
  }, _window$funcPrefix[HookedFunctionsMap.AudioContext] = function (_ref5, originalArgs, arr) {
    var weight = _ref5.weight,
      name = _ref5.name,
      proto = _ref5.proto,
      notify = _ref5.notify;
    var results = proto.apply(this, [arr]);
    for (var i = 0; i < arr.length; i += 100) {
      var index = Math.floor(Math.abs(Math.ceil(Math.random() * 10)) * i);
      arr[index] = arr[index] + Math.abs(Math.ceil(Math.random() * 10)) * 0.1;
    }
    return results;
  }, _window$funcPrefix[HookedFunctionsMap.Plugins] = function () {
    var allowedPlugins = ["internal-pdf-viewer", "mhjfbmdgcfjbbpaeojofohoefgiehjai", "internal-nacl-plugin", "PepperFlashPlayer.plugin", "pepflashplayer.dll"];
    var privacyPluginArray = {};
    var originalPluginsData = navigator.plugins;
    var pluginsCounter = 0;
    if (plugins !== null) {
      for (var i = 0; i < originalPluginsData.length; i++) {
        if (allowedPlugins.includes(originalPluginsData[i].filename)) {
          privacyPluginArray[pluginsCounter] = originalPluginsData[i];
          privacyPluginArray[originalPluginsData[i].name] = originalPluginsData[i];
          Object.defineProperty(privacyPluginArray, "".concat(pluginsCounter), {
            writable: false,
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(privacyPluginArray, "".concat(originalPluginsData[i].name), {
            writable: false,
            enumerable: false,
            configurable: true
          });
          pluginsCounter++;
        }
      }
    }
    privacyPluginArray.length = pluginsCounter;
    privacyPluginArray.__proto__ = PluginArray.prototype;
    privacyPluginArray.namedItem = function (i) {
      return privacyPluginArray[i];
    };
    return privacyPluginArray;
  }, _window$funcPrefix[HookedFunctionsMap.MediaDevices] = function (_ref6, originalArgs) {
    var proto = _ref6.proto;
    return proto.apply(this, originalArgs).then(function (origDevices) {
      var modifiedDevices = [];
      origDevices.forEach(function (d) {
        var newDevice = {
          deviceId: d.deviceId.toLowerCase() === 'default' ? d.deviceId : d.deviceId.replace(/.$/, Math.abs(Math.ceil(Math.random() * 10))),
          kind: d.kind,
          label: d.label,
          groupId: d.groupId.replace(/.$/, Math.abs(Math.ceil(Math.random() * 10))) + ""
        };
        newDevice.__proto__ = d.__proto__;
        modifiedDevices.push(newDevice);
      });
      return modifiedDevices;
    });
  }, _window$funcPrefix[HookedFunctionsMap.ReadPixels] = function (_ref7, originalArgs) {
    var proto = _ref7.proto;
    var BUFFER_IDX = 6;
    for (var _len = arguments.length, arr = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      arr[_key - 2] = arguments[_key];
    }
    proto.call.apply(proto, [this].concat(arr));
    // Altering the first pixel value within the image pixels buffer
    arr[BUFFER_IDX][0] = Math.ceil(Math.random() * 10);
  }, _window$funcPrefix[HookedFunctionsMap.GetShaderPrecisionFormat] = function (_ref8, originalArgs) {
    var proto = _ref8.proto;
    for (var _len2 = arguments.length, arr = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      arr[_key2 - 2] = arguments[_key2];
    }
    var result = proto.call.apply(proto, [this].concat(arr));
    var modifiedResults = {
      rangeMin: Math.ceil(Math.random() * 127),
      rangeMax: Math.ceil(Math.random() * 127),
      precision: result.precision
    };
    modifiedResults.__proto__ = WebGLShaderPrecisionFormat.prototype;
    return modifiedResults;
  }, _window$funcPrefix[HookedFunctionsMap.ClientRects] = function (_ref9, originalArgs) {
    var proto = _ref9.proto;
    var originalRects = proto.apply(this, originalArgs);
    if (!originalRects.length) {
      return originalRects;
    }
    var rects = JSON.parse(JSON.stringify(originalRects[0]));
    var modifiedRects = new DOMRect();
    Object.keys(rects).forEach(function (key) {
      return modifiedRects[key] = rects[key] + Math.random();
    });
    var result = {
      0: modifiedRects,
      length: 1
    };
    result.__proto__ = DOMRectList.prototype;
    return result;
  }, _window$funcPrefix[HookedFunctionsMap.GetParameter] = function (_ref10, originalArgs, arr) {
    var proto = _ref10.proto;
    // proto.call has to be initiated to overcome bot detection
    var value = proto.call(this, arr);
    if (arr === 3415) value = 0;else if (arr === 3414) value = 24;else if (arr === 36348) value = 30;else if (arr === 7936) value = "WebKit";else if (arr === 37445) value = "Google Inc."; // UNMASKED_VENDOR
    else if (arr === 7937) value = "WebKit WebGL";else if (arr === 3379) value = randoms.number([12, 13, 14]);else if (arr === 36347) value = randoms.number([12, 13]);else if (arr === 34076) value = randoms.number([14, 15]);else if (arr === 34024) value = randoms.number([14, 15]);else if (arr === 3386) value = randoms["int"]([13, 14, 15]);else if (arr === 3413) value = randoms.number([1, 2, 3, 4]);else if (arr === 3412) value = randoms.number([1, 2, 3, 4]);else if (arr === 3411) value = randoms.number([1, 2, 3, 4]);else if (arr === 3410) value = randoms.number([1, 2, 3, 4]);else if (arr === 34047) value = randoms.number([1, 2, 3, 4]);else if (arr === 34930) value = randoms.number([1, 2, 3, 4]);else if (arr === 34921) value = randoms.number([1, 2, 3, 4]);else if (arr === 35660) value = randoms.number([1, 2, 3, 4]);else if (arr === 35661) value = randoms.number([4, 5, 6, 7, 8]);else if (arr === 36349) value = randoms.number([10, 11, 12, 13]);else if (arr === 33902) value = randoms["float"]([0, 10, 11, 12, 13]);else if (arr === 33901) value = randoms["float"]([0, 10, 11, 12, 13]);else if (arr === 37446) value = randoms.randomArrValue(["Graphics", "HD Graphics", "Intel(R) HD Graphics"]); // UNMASKED_RENDERER
    else if (arr === 7938) value = randoms.randomArrValue(["WebGL 1.0", "WebGL 1.0 (OpenGL)", "WebGL 1.0 (OpenGL Chromium)"]); // GL_VERSION
    else if (arr === 35724) value = randoms.randomArrValue(["WebGL", "WebGL GLSL", "WebGL GLSL ES", "WebGL GLSL ES (OpenGL Chromium"]); // SHADING_LANGUAGE_VERSION

    return value;
  }, _window$funcPrefix[HookedFunctionsMap.BufferData] = function (_ref11, originalArgs) {
    var proto = _ref11.proto;
    var noise = 0.0001 * Math.random();
    for (var _len3 = arguments.length, arr = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      arr[_key3 - 2] = arguments[_key3];
    }
    arr[1][0] += noise;
    return proto.call.apply(proto, [this].concat(arr));
  }, _window$funcPrefix);
  if (disabledFeatures.includes('*')) {
    delete window[funcPrefix];
  } else {
    disabledFeatures.map(function (feature) {
      return delete window[funcPrefix][feature];
    });
  }
};

;// CONCATENATED MODULE: ./app/utils/Injector.js



var Injector = /*#__PURE__*/function () {
  function Injector(debug) {
    (0,classCallCheck/* default */.Z)(this, Injector);
    this.debug = debug;
  }
  (0,createClass/* default */.Z)(Injector, [{
    key: "compile",
    value: function compile(func, args) {
      var argsStr = '';
      Object.keys(args).map(function (key) {
        argsStr += "".concat(key, ":").concat(args[key], ",");
      });
      this.compiledFunc = "\n        try{\n            (".concat(func, ")\n                ({\n                    ").concat(argsStr, "\n                })\n        }catch(e) { console.log(e); }");
      return this;
    }
  }, {
    key: "inject",
    value: function inject() {
      if (!this.compiledFunc) {
        throw Error('No compiled function to inject');
      }
      var script = document.createElement('script');
      script.type = "text/javascript";

      // if (!this.debug) {
      //     Logger.debug("Obfuscating code");
      //     const JavaScriptObfuscator = require('javascript-obfuscator');
      //     this.compiledFunc = JavaScriptObfuscator.obfuscate(this.compiledFunc).obfuscatedCode;
      // }

      var newChild = document.createTextNode(this.compiledFunc);
      script.appendChild(newChild);
      var node = document.documentElement || document.head || document.body;
      node.insertBefore(script, node.firstChild);
      node.removeChild(script);
    }
  }]);
  return Injector;
}();

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./app/utils/Browser.js
var Browser = __webpack_require__(162);
;// CONCATENATED MODULE: ./app/utils/ExtensionStorage.js






var ExtensionStorage = /*#__PURE__*/function () {
  function ExtensionStorage() {
    (0,classCallCheck/* default */.Z)(this, ExtensionStorage);
  }
  (0,createClass/* default */.Z)(ExtensionStorage, null, [{
    key: "setSync",
    value: function setSync(key, value) {
      Browser/* Browser */.A.setStorageSync(key, value);
      Logger.debug("".concat(JSON.stringify(value), " was saved to storage key ").concat(key));
    }
  }, {
    key: "getSync",
    value: function () {
      var _getSync = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(key) {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Browser/* Browser */.A.getStorageSync(key);
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getSync(_x) {
        return _getSync.apply(this, arguments);
      }
      return getSync;
    }()
  }, {
    key: "set",
    value: function set(key, value) {
      Browser/* Browser */.A.setStorageLocal(key, value);
      Logger.debug("".concat(JSON.stringify(value), " was saved to storage key ").concat(key));
    }
  }, {
    key: "get",
    value: function get(key) {
      return Browser/* Browser */.A.getStorageLocal(key);
    }
  }]);
  return ExtensionStorage;
}();

;// CONCATENATED MODULE: ./chrome/extension/content.js









var t0 = performance.now();
ExtensionStorage.getSync(app/* StorageKeys */.BU.AppSettings.KEY).then(function (config) {
  var url = window.location.hostname;
  if (inIframe()) {
    url = new URL(document.location.ancestorOrigins[document.location.ancestorOrigins.length - 1]).host;
  }
  var isDisabled = config.disabled.includes(url) || config.whitelist.includes(url) || !config.isActive;
  var debugMode = typeof config.debug !== 'undefined' ? config.debug : settings.DEBUG;
  var domainProfile = config.profiles.find(function (p) {
    return p.domain === url;
  });
  var profileNumber = domainProfile ? domainProfile.profile : ProfileType.Default;
  var currentProfile = Profiles[profileNumber];
  var disabledDomainsFeatures = config.disabledDomainFeatures.find(function (p) {
    return url.match(p.domain);
  });
  var disabledFeatures = disabledDomainsFeatures ? disabledDomainsFeatures.features : [];
  Logger.debug("Running AFP version ".concat(settings.APP_VERSION));
  Logger.debug("Using profile: ".concat(profileNumber));
  Logger.debug("Disabled features for domain detected: ".concat(JSON.stringify(disabledFeatures)));
  var canvasFp = currentProfile.Canvas;
  var webglFP = currentProfile.WebGL;
  var pluginsFp = currentProfile.plugins;
  if (currentProfile.Fonts) {
    sendMessage("setFontFilter", currentProfile.Fonts);
  }
  if (!isDisabled) {
    var FUNC_PREFIX = '__AFP__.HOOKS';
    var injector = new Injector(debugMode);
    injector.compile(functionsHooks, {
      funcPrefix: JSON.stringify(FUNC_PREFIX),
      HookedFunctionsMap: JSON.stringify(app/* HookedFunctionsMap */.JL),
      disabledFeatures: JSON.stringify(disabledFeatures),
      canvasFp: JSON.stringify(canvasFp),
      webglFp: JSON.stringify(webglFP),
      plugins: JSON.stringify(pluginsFp)
    }).inject();
    injector.compile(fingerprint_attributes/* applyFingerprintAttributes */.x, {
      fpAttr: JSON.stringify((0,fingerprint_attributes/* FingerprintAttributes */.u)(currentProfile)),
      funcPrefix: JSON.stringify(FUNC_PREFIX),
      debug: debugMode,
      t0: t0
    }).inject();
  } else {
    Logger.debug("Domain is disabled, not hooking");
  }
});
document.addEventListener("fingerprintAttemptDetected", function (data) {
  sendMessage("fingerprintAttemptDetected", {
    type: "basic",
    iconUrl: "img/icon-16.png",
    title: "Fingerprint attempt Detected",
    message: "The website ".concat(document.location.href.substring(0, 102), " has attempted to fingerprint your browser"),
    priority: 2
  });
});
function sendMessage(type, data) {
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage({
      type: type,
      payload: data
    });
  } else {
    Logger.debug("Chrome runtime is not available");
  }
}
function inIframe() {
  try {
    return parent !== window;
  } catch (e) {
    return true;
  }
}
})();

/******/ })()
;