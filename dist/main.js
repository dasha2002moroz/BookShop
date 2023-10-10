/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/base.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* { font-family: 'Montserrat', sans-serif; }\r\n\r\n.header { background-color: #fff; top: 0px; max-width: 100%; height: 116px; display: flex; justify-content: space-between; align-items: center; justify-content: center; }\r\n\r\n.header__title { font-size: 24px; }\r\n\r\n.header__menu { display: flex; justify-content: space-around; gap: 40px; font-size: 10px; font-weight: 700; color: #5C6A79; width: 372px; font-family: Montserrat; font-size: 10px; font-weight: 700; line-height: 12px; letter-spacing: 0em; text-align: left; }\r\n\r\n.header__icons { display: flex; justify-content: space-around; gap: 40px; }\r\n\r\na:link { text-decoration: none; color: #5C6A79; }\r\n\r\na:visited { text-decoration: none; color: #5C6A79; }\r\n\r\na:active { text-decoration: none; color: #5C6A79; }\r\n\r\n.header__container { width: 100%; max-width: 100%; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 130px; padding: 0 14.5%; position: fixed; z-index: 100; background: white; top: 0; }\r\n\r\n.container { width: 100%; max-width: 1000px; margin: 0 auto; /* display: inline-flex;\r\njustify-content: center; */ }\r\n\r\n.container__image { max-width: 1120px; height: 702px; overflow: hidden; }\r\n\r\n.container__image_scrolling { height: 702px; width: 3360px; display: flex; position: relative; left: 0; transition: all ease 1s; }\r\n\r\n.container__switch { margin: 20px auto; display: flex; justify-content: center; }\r\n\r\n.container__switch_prew1 { border: none; background-color: white; }\r\n\r\n.container__switch_prew2 { border: none; background-color: white; }\r\n\r\n.container__switch_prew3 { border: none; background-color: white; }\r\n\r\nbutton { cursor: pointer; }\r\n\r\n.ellipse1 { display: block; }\r\n\r\n.ellipse2 { display: none; }\r\n\r\n.ellipse3 { display: none; }\r\n\r\n.ellipse4 { display: block; }\r\n\r\n.ellipse5 { display: none; }\r\n\r\n.ellipse6 { display: block; }\r\n\r\n.container__promo_lilac { display: flex; position: absolute; top: 190px; right: 100px; background-color: #9E98DC; height: 204px; width: 149px; align-items: flex-end; padding: 20px; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); text-transform: uppercase; }\r\n\r\n.container__promo_pink { display: flex; position: absolute; top: 475px; right: 0px; background-color: #FF8FE6; height: 273px; width: 137px; align-items: flex-end; padding-left: 21px; padding-bottom: 20px; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); text-transform: uppercase; }\r\n\r\n.container__section__books__body__button { margin-top: 84px; display: flex; justify-content: center; }\r\n\r\n.container__section__books__body__button_load-more { border: 1px solid #4C3DB2; width: 176px; height: 45px; background-color: #FFF; text-transform: uppercase; margin-top: 16px; display: flex; align-items: center; justify-content: center; color: #4C3DB2; font-family: 'Montserrat'; font-size: 8px; font-weight: 700; }\r\n\r\n.section-navigation { margin-top: 105px; position: absolute; background-color: #EFEEF6; max-width: 416px; max-height: 710px; width: 100%; height: 100%; left: 0px; }\r\n\r\n.section-navigation__category-list { padding-top: 45px; padding-left: 158px; display: flex; flex-direction: column; gap: 23px; }\r\n\r\n.category-list__item { color: var(--text-gray, #5C6A79); font-size: 12px; font-weight: 500; position: relative; cursor: pointer; }\r\n\r\n.active-item { color: var(--text-black, #1C2A39); font-size: 16px; font-weight: 700; }\r\n\r\n.active-item::before { content: \"\"; position: absolute; width: 6px; height: 6px; top: 50%; left: -14px; transform: translateY(-50%); border-radius: 50%; background: #756AD3; }\r\n\r\n.container__section__books { position: relative; margin: 48px 0 74px 0; }\r\n\r\n.container__section__books__body { position: absolute; right: 0; }\r\n\r\n.container__section__books__body__cards { display: flex; flex-wrap: wrap; justify-content: space-between; width: 850px; margin-left: auto; gap: 85px 0; }\r\n\r\n.books__card { display: flex; width: 424px; gap: 36px; }\r\n\r\n.books__card-img { width: 212px; height: 327px; background: #EEECEC; box-shadow: 0px 24px 36px 0px rgba(53, 49, 84, 0.28); }\r\n\r\n.books__card-content { display: flex; flex-direction: column; justify-content: center; }\r\n\r\n.books__card-name { margin: 4px 0; }\r\n\r\n.books__card-reviews { display: flex; gap: 6px; }\r\n\r\n.books__card-description { margin: 16px 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }\r\n\r\n.books__button-btn { margin-top: 16px; border: 1px solid #4C3DB2; background-color: inherit; width: 176px; height: 45px; display: flex; align-items: center; justify-content: center; color: #4C3DB2; font-family: 'Montserrat'; font-size: 8px; font-style: normal; font-weight: 700; line-height: normal; text-transform: uppercase; cursor: pointer; }\r\n\r\n.books__button { margin-top: 84px; display: flex; justify-content: center; }\r\n\r\n.basket__count { background-color: #fff; border-radius: 50%; position: absolute; z-index: -1; width: 13px; height: 13px; top: 8px; left: 5px; color: white; display: flex; align-items: center; justify-content: center; }\r\n\r\n.header__icons_shop { position: relative; }\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://book-shop/./src/css/base.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://book-shop/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://book-shop/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/base.css":
/*!**************************!*\
  !*** ./src/css/base.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./base.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/base.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://book-shop/./src/css/base.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://book-shop/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/APIBOOKS.js":
/*!*************************!*\
  !*** ./src/APIBOOKS.js ***!
  \*************************/
/***/ (() => {

eval("const apiKey = \"AIzaSyAgg_6I4Yr5TNmF8E9l5TnnAGDeP-U_ocA\";\r\n\r\nconst countShowCardsClick = 6; \r\nconst loadBooksBtn = document.querySelector(\".container__section__books__body__button_load-more\");\r\n\r\nconst booksCard = document.querySelector('.container__section__books__body__cards');\r\n\r\nlet shownCards = countShowCardsClick;\r\nlet countClickBtnShowCards = 1;\r\n\r\nconst categories = [\r\n          {\r\n             name: 'Architecture',\r\n             subject: 'Architecture'\r\n          },\r\n          {\r\n             name: 'Art & Fashion',\r\n             subject: 'Art'\r\n          },\r\n          {\r\n             name: 'Biography',\r\n             subject: 'Biography&Autobiography'\r\n          },\r\n          {\r\n             name: 'Business',\r\n             subject: 'Business'\r\n          },\r\n          {\r\n             name: 'Crafts & Hobbies',\r\n             subject: 'Crafts&Hobbies'\r\n          },\r\n          {\r\n             name: 'Drama',\r\n             subject: 'Drama'\r\n          },\r\n          {\r\n             name: 'Fiction',\r\n             subject: 'Fiction'\r\n          },\r\n          {\r\n             name: 'Food & Drink',\r\n             subject: 'Cooking'\r\n          },\r\n          {\r\n             name: 'Health & Wellbeing',\r\n             subject: 'Health&Fitness'\r\n          },\r\n          {\r\n             name: 'History & Politics',\r\n             subject: 'History'\r\n          },\r\n          {\r\n             name: 'Humor',\r\n             subject: 'Humor'\r\n          },\r\n          {\r\n             name: 'Poetry',\r\n             subject: 'Poetry'\r\n          },\r\n          {\r\n             name: 'Psychology',\r\n             subject: 'Psychology'\r\n          },\r\n          {\r\n             name: 'Science',\r\n             subject: 'Science'\r\n          },\r\n          {\r\n             name: 'Technology',\r\n             subject: 'Technology'\r\n          },\r\n          {\r\n             name: 'Travel & Maps',\r\n             subject: 'Travel'\r\n          },\r\n];\r\n\r\n\r\nlet activeCategory = categories[0].subject\r\n\r\nloadBooksBtn.addEventListener('click', loadCards);\r\n\r\nbooksCard.addEventListener('click', handleCardClick);\r\n\r\ncategories.forEach(category => {\r\n    document.querySelector('.section-navigation__category-list').innerHTML += \r\n        `<li class=\"category-list__item\">\r\n            <a class=\"category-list__item-link ${activeCategory === category.subject && 'active-item'}\" data-category=\"${category.subject}\">\r\n                ${category.name}\r\n            </a>\r\n        </li>`        \r\n});\r\n\r\nfunction getBasketLocalStorage() {\r\n    const cartDataJson = localStorage.getItem('basket');\r\n    return cartDataJson ? JSON.parse(cartDataJson) : [];\r\n};\r\n\r\nfunction loadCards () {\r\n    countClickBtnShowCards++;\r\n    shownCards = countShowCardsClick * countClickBtnShowCards;\r\n    getResponse(shownCards)\r\n};\r\n\r\nfunction handleCardClick (event) {\r\n    const targetButton = event.target.closest('.container__section__books__body__button_load-more');\r\n    if (!targetButton) return;\r\n\r\n    const card = targetButton.closest('.container__section__books__body__cards');\r\n    const id = card.dataset.productId;\r\n    const basket = getBasketLocalStorage();\r\n\r\n    basket.push(id);\r\n};\r\n\r\nfunction createCards(data) {\r\n    let cards = '';\r\n\r\n    data.forEach(item => {\r\n        const cardBook = `\r\n        <div class=\"books__card\" data-product-id='${item.id}>\r\n            <div class=\"books__card-image\">\r\n            <img class=\"books__card-img\" src=\"${item.volumeInfo.imageLinks.thumbnail}\">\r\n            </div>\r\n            <div class=\"books__card-content\">\r\n            <p class=\"books__card-autor\">\r\n                ${item.volumeInfo.authors}\r\n            </p>\r\n            <h2 class=\"books__card-name\">\r\n                ${item.volumeInfo.title}\r\n            </h2>\r\n            <div class=\"books__card-reviews\">\r\n                <img src=\"${item.averageRating}\">\r\n                <p class=\"books__card-reviews-text\">\r\n                    ${item.volumeInfo.retingsCount}\r\n                </p>\r\n            </div>\r\n            <p class=\"books__card-description\">\r\n                ${item.volumeInfo.description}\r\n            </p>\r\n            <h2 class=\"books__card-price\">\r\n                $4.99\r\n            </h2>\r\n            <button class=\"books__button-btn\">\r\n                buy now\r\n            </button>\r\n            </div>\r\n        </div>`;\r\n\r\n        cards += cardBook;\r\n    });\r\n\r\n    booksCard.innerHTML = cards;\r\n    \r\n};\r\n\r\ngetResponse(shownCards);\r\n\r\nasync function getResponse (count) {  \r\n    const responseApi = await fetch(`https://www.googleapis.com/books/v1/volumes?q=\"subject:\"${activeCategory}\"&key=${apiKey}&printType=books&startIndex=${count}&maxResults=6&langRestrict=en`)\r\n        .then(response => {\r\n            return response.json();                \r\n        })\r\n        .then((json) => {\r\n            return json[\"items\"];\r\n            \r\n        })\r\n        .catch(() => {console.log('error'); \r\n    });\r\n    createCards(responseApi)\r\n};\r\n\r\nconst backet = document.querySelector('.basket__count');\r\n\r\ndocument.querySelector('.books__button-btn').addEventListener('click', function(){\r\n    backet.style.backgroundColor = \"red\";\r\n    backet.style.zIndex = '100';\r\n\r\n    const p = document.createElement(\"p\");\r\n\r\n    const number = 0;\r\n    number += 1;\r\n    p.innerHTML = \"${number}\";\r\n\r\n});\r\n\n\n//# sourceURL=webpack://book-shop/./src/APIBOOKS.js?");

/***/ }),

/***/ "./src/Navigation.js":
/*!***************************!*\
  !*** ./src/Navigation.js ***!
  \***************************/
/***/ (() => {

eval("const navigation = document.querySelector('.section-navigation__category-list')\r\nconst navigationLink = navigation.querySelectorAll('.category-list__item-link');\r\n\r\nfunction activeItem (index) {\r\n    navigationLink.forEach(item => item.classList.remove('active-item'));\r\n    navigationLink[index].classList.add('active-item'); \r\n}\r\n\r\nnavigationLink.forEach((link, index) => {\r\n    link.addEventListener('click', () => {\r\n      activeItem(index);\r\n    })\r\n})\n\n//# sourceURL=webpack://book-shop/./src/Navigation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.js */ \"./src/Navigation.js\");\n/* harmony import */ var _Navigation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navigation_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _APIBOOKS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./APIBOOKS.js */ \"./src/APIBOOKS.js\");\n/* harmony import */ var _APIBOOKS_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_APIBOOKS_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/base.css */ \"./src/css/base.css\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://book-shop/./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ (() => {

eval("let offset = 0;\r\nconst slider = document.querySelector('.container__image_scrolling');\r\n\r\nconst ellipse1 = document.querySelector('.ellipse1');\r\nconst ellipse2 = document.querySelector('.ellipse2');\r\nconst ellipse3 = document.querySelector('.ellipse3');\r\nconst ellipse4 = document.querySelector('.ellipse4');\r\nconst ellipse5 = document.querySelector('.ellipse5');\r\nconst ellipse6 = document.querySelector('.ellipse6');\r\n\r\n\r\ndocument.querySelector('.container__switch_prew1').addEventListener('click', function(){\r\n    if (offset == 2240 || offset == 1120){\r\n        offset = 0;\r\n        ellipse1.style.display = 'block';\r\n        ellipse2.style.display = 'none';\r\n        ellipse3.style.display = 'none';\r\n        ellipse4.style.display = 'block';\r\n        ellipse5.style.display = 'none';\r\n        ellipse6.style.display = 'block';\r\n    }\r\n    slider.style.left = 0 + 'px';\r\n});\r\n\r\ndocument.querySelector('.container__switch_prew2').addEventListener('click', function(){\r\n    if (offset == 2240 || offset == 0){\r\n        offset = 1120;\r\n        ellipse1.style.display = 'none';\r\n        ellipse2.style.display = 'block';\r\n        ellipse3.style.display = 'block';\r\n        ellipse4.style.display = 'none';\r\n        ellipse5.style.display = 'none';\r\n        ellipse6.style.display = 'block';\r\n    }\r\n    slider.style.left = -1120 + 'px';\r\n});\r\n\r\ndocument.querySelector('.container__switch_prew3').addEventListener('click', function(){\r\n    if (offset == 1120 || offset == 0){\r\n        offset = 2240;\r\n        ellipse1.style.display = 'none';\r\n        ellipse2.style.display = 'block';\r\n        ellipse3.style.display = 'none';\r\n        ellipse4.style.display = 'block';\r\n        ellipse5.style.display = 'block';\r\n        ellipse6.style.display = 'none';\r\n    }\r\n    slider.style.left = -2240 + 'px';\r\n});\r\n\r\nlet left = 0;\r\nlet timer;\r\nfunction autoSlider (){\r\n    timer = setTimeout(function(){\r\n        const scrolling = document.querySelector('.container__image_scrolling');\r\n        left = left - 1120;\r\n        if (left == 0){\r\n            ellipse1.style.display = 'block';\r\n            ellipse2.style.display = 'none';\r\n            ellipse3.style.display = 'none';\r\n            ellipse4.style.display = 'block';\r\n            ellipse5.style.display = 'none';\r\n            ellipse6.style.display = 'block';\r\n        }else if (left == 1120){\r\n            ellipse1.style.display = 'none';\r\n            ellipse2.style.display = 'block';\r\n            ellipse3.style.display = 'block';\r\n            ellipse4.style.display = 'none';\r\n            ellipse5.style.display = 'none';\r\n            ellipse6.style.display = 'block';\r\n        }else if(left == 2240){\r\n            ellipse1.style.display = 'none';\r\n            ellipse2.style.display = 'block';\r\n            ellipse3.style.display = 'none';\r\n            ellipse4.style.display = 'block';\r\n            ellipse5.style.display = 'block';\r\n            ellipse6.style.display = 'none';\r\n        }\r\n\r\n        if (left < -2240){\r\n            left = 0;\r\n            clearTimeout(timer);\r\n        }\r\n        scrolling.style.left = left + 'px';\r\n        autoSlider();\r\n    }, 5000);\r\n}\r\nautoSlider();\n\n//# sourceURL=webpack://book-shop/./src/slider.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;