/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: flex;
  font-family: raleway;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 14px;
}

nav {
  display: flex;
  background-color: #92E0E5;
  width: 98%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
nav .dogIcon {
  width: 35px;
  margin-left: 30px;
  margin-top: 4px;
}
nav .navButtons {
  padding-right: 15px;
}
nav .navButtons input {
  background-color: #92E0E5;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 6px;
}
nav .navButtons input:nth-child(1) {
  margin-right: -6px;
}
nav .navButtons input:nth-child(2) {
  margin-right: 2px;
}
nav .navButtons input:nth-child(3) {
  margin-right: 9px;
  margin-left: -6px;
}
nav .navButtons input:hover {
  color: #3F8DA8;
  cursor: pointer;
}

.imageWrapper {
  display: flex;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) top no-repeat;
  background-size: 98% 56rem;
  flex-direction: column;
  justify-content: center;
  height: 33rem;
  width: 100vw;
  align-items: center;
  padding-bottom: 21px;
}
.imageWrapper input {
  color: #3F8DA8;
  border: solid #3F8DA8;
  background: white;
  font-size: 19px;
  margin-top: 1px;
  font-weight: 400;
  padding: 8px 14px;
  margin-top: 10px;
}
.imageWrapper input:hover {
  color: #14396A !important;
  background: #3F8DA8;
  cursor: pointer;
}
.imageWrapper h3 {
  font-size: 34px;
  margin-bottom: 21px;
  padding-bottom: 7px;
  margin-top: 27px;
  font-weight: 300;
}
.imageWrapper .imageBorder {
  clip-path: circle(50% at 50% 50%);
  width: 330px;
  height: 330px;
  background: #3F8DA8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 1px;
}
.imageWrapper .imageBorder .dogOne {
  clip-path: circle(50% at 50% 50%);
  width: 320px;
  height: 320px;
}

.infoPage {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
}
.infoPage section {
  display: flex;
  width: 30%;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  align-items: flex-start;
  margin-top: 31px;
  height: 580px;
}
.infoPage h2 {
  width: 100%;
  font-size: 19px;
  text-align: center;
}
.infoPage .infoImageBorder {
  margin-left: 1px;
  margin-right: 1px;
  clip-path: circle(50% at 50% 50%);
  background: #3F8DA8;
  width: 230px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 19px;
}
.infoPage .infoImageBorder img {
  clip-path: circle(50% at 50% 50%);
  width: 225px;
  height: 225px;
}
.infoPage p {
  font-size: 20px;
  margin-top: 29px;
  margin-bottom: -40px;
  height: 181px;
  font-weight: 400;
  width: 100%;
  text-align: center;
  line-height: 18px;
  padding-left: 4px;
  padding-right: 4px;
}
.infoPage .factDog {
  margin-right: 56px;
}
.infoPage .whatDog {
  padding-right: 22px;
}
.infoPage .howDog {
  margin-left: -12px;
  margin-right: 32px;
}
.infoPage input {
  color: #3F8DA8;
  border: solid #3F8DA8;
  background: white;
  font-size: 19px;
  margin-top: 1px;
  font-weight: 400;
  padding: 8px 14px;
  margin-top: 10px;
}
.infoPage input:hover {
  color: #14396A !important;
  background: #3F8DA8;
  cursor: pointer;
}

footer {
  display: flex;
  background-color: #3F8DA8;
  width: 98vw;
  height: 10rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 8px;
}
footer h2 {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: white;
}
footer .socials {
  padding-top: 10px;
}
footer .socials img {
  margin-left: 30px;
  margin-right: 30px;
  height: 50px;
  width: 50px;
}
footer .socials img:hover {
  mix-blend-mode: soft-light;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/css/index.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,oBCFW;EDGX,kBAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,iBAAA;AADF;;AAIA;EACE,aAAA;EACA,yBCbuB;EDcvB,UAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;AADF;AAGE;EACE,WAAA;EACA,iBAAA;EACA,eAAA;AADJ;AAII;EACA,mBAAA;AAFJ;AAIM;EACE,yBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AAFR;AAIQ;EACA,kBAAA;AAFR;AAKQ;EACA,iBAAA;AAHR;AAMQ;EACA,iBAAA;EACA,iBAAA;AAJR;AAOQ;EACE,cCpDU;EDqDV,eAAA;AALV;;AAcA;EACE,aAAA;EACA,iEAAA;EACA,0BAAA;EACA,sBAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;AAXF;AAaE;ECzDE,cAhBgB;EAiBhB,qBAAA;EACA,iBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;AD+CJ;AC9CI;EACU,yBAAA;EACA,mBA1BM;EA2BN,eAAA;ADgDd;AAEE;EACE,eAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;AAAJ;AAGE;EChFE,iCAAA;EDkFA,YAAA;EACA,aAAA;EACA,mBCzFgB;ED0FhB,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AADJ;AAGI;EC5FA,iCAAA;ED8FE,YAAA;EACA,aAAA;AADN;;AAOA;EACE,aAAA;EAGA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,uBAAA;EACA,eAAA;EACA,yBAAA;AANF;AAQE;EACE,aAAA;EACA,UAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,gBAAA;EACA,aAAA;AANJ;AASE;EACE,WAAA;EACA,eAAA;EACA,kBAAA;AAPJ;AAUE;EAEE,gBADa;EAEb,iBAFa;ECnIb,iCAAA;EDuIA,mBC5IgB;ED6IhB,YCjIiB;EDkIjB,aClIiB;EDmIjB,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AATJ;AAWI;EC/IA,iCAAA;EDiJE,YCzIc;ED0Id,aC1Ic;ADiIpB;AAcE;EAEE,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBATc;EAUd,kBAVc;AAHlB;AAgBE;EACE,kBAAA;AAdJ;AAiBE;EACE,mBAAA;AAfJ;AAkBE;EACE,kBAAA;EACA,kBAAA;AAhBJ;AAmBE;ECvKE,cAhBgB;EAiBhB,qBAAA;EACA,iBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;ADuJJ;ACtJI;EACU,yBAAA;EACA,mBA1BM;EA2BN,eAAA;ADwJd;;AASA;EACE,aAAA;EACA,yBC9LkB;ED+LlB,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;AANF;AAQE;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;AANJ;AASE;EACE,iBAAA;AAPJ;AASI;EAEE,iBADa;EAEb,kBAFa;EAIb,YADY;EAEZ,WAFY;AAPlB;AAWM;EACE,0BAAA;EACA,eAAA;AATR","sourcesContent":["@import 'variables';\n\nbody {\n  display: flex;\n  font-family: $font-style;\n  position: absolute;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 14px;\n}\n\nnav {\n  display: flex;\n  background-color: $secondary-accent-color;\n  width: 98%;\n  height: 56px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  .dogIcon {\n    width: 35px;\n    margin-left: 30px;\n    margin-top: 4px\n    }\n\n    .navButtons {\n    padding-right: 15px;\n  \n      input {\n        background-color: #92E0E5;\n        border: none;\n        color: white;\n        font-size: 20px;\n        font-weight: 500;\n        margin-bottom: 6px;\n\n        &:nth-child(1) {\n        margin-right: -6px;\n        }\n\n        &:nth-child(2) {\n        margin-right: 2px;\n        }\n\n        &:nth-child(3) {\n        margin-right: 9px;\n        margin-left: -6px;\n        }\n\n        &:hover{\n          color: $main-accent-color;\n          cursor: pointer;\n        }\n\n      }\n\n    }\n\n  }\n\n.imageWrapper {\n  display: flex;\n  background: url(../../dist/images/park.jpg) top no-repeat;\n  background-size: 98% 56rem;\n  flex-direction: column;\n  justify-content: center;\n  height: 33rem;\n  width: 100vw;\n  align-items: center;\n  padding-bottom: 21px;\n\n  input {\n    @include buttonFormat;\n  }\n\n  h3 {\n    font-size: 34px;\n    margin-bottom: 21px;\n    padding-bottom: 7px;\n    margin-top: 27px;\n    font-weight: 300\n  }\n\n  .imageBorder {\n    @include circular;\n    width: 330px;\n    height: 330px;\n    background: $main-accent-color;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin-top: 0px;\n    margin-bottom: 1px;\n\n    .dogOne{\n      @include circular;\n      width: 320px;\n      height: 320px;\n    }\n  }\n\n}\n\n.infoPage {\n  display: flex;\n  $infoWidth: 100%;\n  $marginLeft: 100px;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  \n  section{\n    display: flex;\n    width: 30%;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    justify-content: center;\n    align-items: flex-start;\n    margin-top: 31px;\n    height: 580px;\n  }\n  \n  h2{\n    width: 100%;\n    font-size: 19px;\n    text-align: center;\n  }\n  \n  .infoImageBorder {\n    $marginLeft: 1px;\n    margin-left: $marginLeft;\n    margin-right: $marginLeft;\n    @include circular;\n    background: $main-accent-color;\n    width: $small-border-width;\n    height: $small-border-width;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 19px;\n\n    img {\n      @include circular;\n      width: $small-image-width;\n      height: $small-image-width;\n    }\n\n  }\n\n  p{\n    $paddingLeft: 4px;\n    font-size: 20px;\n    margin-top: 29px;\n    margin-bottom: -40px;\n    height: 181px;\n    font-weight: 400;\n    width: 100%;\n    text-align: center;\n    line-height: 18px;\n    padding-left: $paddingLeft;\n    padding-right: $paddingLeft;\n  }\n  \n  .factDog{\n    margin-right: 56px;\n  }\n  \n  .whatDog{\n    padding-right: 22px;\n  }\n  \n  .howDog {\n    margin-left: -12px;\n    margin-right: 32px;\n  }\n\n  input {\n    @include buttonFormat;\n  }\n}\n\nfooter {\n  display: flex;\n  background-color: $main-accent-color;\n  width: 98vw;\n  height: 10rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n\n  h2 {\n    text-align: center;\n    font-size: 20px;\n    font-weight: 400;\n    color: white;\n    }\n\n  .socials {\n    padding-top: 10px;\n\n    img {\n      $marginLeft: 30px;\n      margin-left: $marginLeft;\n      margin-right: $marginLeft;\n      $imgHeight: 50px;\n      height: $imgHeight;\n      width: $imgHeight;\n\n      &:hover {\n        mix-blend-mode: soft-light;\n        cursor: pointer;\n      }\n\n    }\n\n  }\n\n}","$main-accent-color: #3F8DA8;\n$secondary-accent-color: #92E0E5;\n$font-style: raleway;\n\n@mixin circular {\n    clip-path: circle(50% at 50% 50%);\n}\n\n@mixin hide{\n    display: none;\n}\n\n$small-border-width: 230px;\n$small-image-width: $small-border-width - 5px;\n\n@mixin buttonFormat {\n    color: $main-accent-color;\n    border: solid $main-accent-color;\n    background: white;\n    font-size: 19px;\n    margin-top: 1px;\n    font-weight: 400;\n    padding: 8px 14px;\n    margin-top: 10px;\n    &:hover {\n              color: #14396A !important;\n              background: $main-accent-color;\n              cursor: pointer;\n            }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/park-c9a12750e1e9a8b3063f.jpg";

/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


console.log('hi')
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map