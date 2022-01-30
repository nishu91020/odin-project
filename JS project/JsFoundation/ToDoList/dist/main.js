/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\r\\n}\\r\\n.page-header {\\r\\n    background-color: #076156;\\r\\n    color: #fff;\\r\\n    padding: 1%;\\r\\n}\\r\\n.list-container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n/*---------------workForm--------------------*/\\r\\n\\r\\n.workForm {\\r\\n    color: #fff;\\r\\n    background: #00b09b; /* fallback for old browsers */\\r\\n    background: -webkit-linear-gradient(to right, #96c93d, #00b09b); /* Chrome 10-25, Safari 5.1-6 */\\r\\n    background: linear-gradient(to right, #96c93d, #00b09b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\\r\\n    padding: 0.5vw;\\r\\n    margin: 1vw;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 50vw;\\r\\n    border-radius: 5px;\\r\\n}\\r\\n.workFormHeading {\\r\\n    color: #fff;\\r\\n    padding-left: 0.5vw;\\r\\n}\\r\\n.title,\\r\\n.desc,\\r\\n.dueDate {\\r\\n    height: 20px;\\r\\n    margin: 1%;\\r\\n    outline: none;\\r\\n}\\r\\n.title {\\r\\n    width: 20vw;\\r\\n}\\r\\n.desc {\\r\\n    width: 45vw;\\r\\n}\\r\\n.dueDate {\\r\\n    width: 12vw;\\r\\n}\\r\\n/*---------------workForm--------------------*/\\r\\n\\r\\n/*-------------ListItems-----------------*/\\r\\n.itemContainer {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    background: #00b09b; /* fallback for old browsers */\\r\\n    background: -webkit-linear-gradient(to right, #96c93d, #00b09b); /* Chrome 10-25, Safari 5.1-6 */\\r\\n    background: linear-gradient(to right, #96c93d, #00b09b);\\r\\n    width: 45vw;\\r\\n    padding: 1vw;\\r\\n    border-radius: 5px;\\r\\n    margin-top: 1vw;\\r\\n    color: #fff;\\r\\n}\\r\\n.ItemBoxHeader {\\r\\n    margin-bottom: 1vw;\\r\\n    margin-top: 3vw;\\r\\n}\\r\\n\\r\\n.btnContainer {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    padding-top: 0.5vw;\\r\\n    width: 40vw;\\r\\n}\\r\\n.btn {\\r\\n    background: #076156;\\r\\n    border: none;\\r\\n    color: #fff;\\r\\n    padding: 0.5vw;\\r\\n    border-radius: 2px;\\r\\n}\\r\\n/*-------------ListItems-----------------*/\\r\\n.center-item {\\r\\n    text-align: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/completedItem.js":
/*!*****************************************!*\
  !*** ./src/components/completedItem.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CompletedItem)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _itemForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemForm */ \"./src/components/itemForm.js\");\n\r\n\r\n\r\nfunction CompletedItem (title, desc, dueDate, index, NotCompleted, Completed) {\r\n    let ItemContainer = document.createElement('div');\r\n    ItemContainer.classList.add('itemContainer');\r\n\r\n    ItemContainer.innerHTML = `<h3>Title - ${title}</h3>`;\r\n    ItemContainer.innerHTML += `Description - ${desc}`;\r\n    ItemContainer.innerHTML += `<h5>Due Date - ${dueDate}</h5>`;\r\n\r\n    let buttonContainer = document.createElement('div');\r\n    buttonContainer.classList.add('btnContainer');\r\n    let del = document.createElement('button');\r\n    del.classList.add('btn');\r\n    del.innerText = 'Delete';\r\n    del.addEventListener('click', () => {\r\n        (0,_itemForm__WEBPACK_IMPORTED_MODULE_1__.deleteDoneItem)(index);\r\n        (0,_itemForm__WEBPACK_IMPORTED_MODULE_1__.displayDoneItemList)(NotCompleted, Completed);\r\n    });\r\n    buttonContainer.appendChild(del);\r\n\r\n    ItemContainer.appendChild(buttonContainer);\r\n    return ItemContainer;\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/components/completedItem.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\r\n\r\nfunction Header () {\r\n    let pageHeader = document.createElement('div');\r\n    pageHeader.classList.add('page-header');\r\n    pageHeader.innerHTML = 'Things';\r\n    return pageHeader;\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/components/header.js?");

/***/ }),

/***/ "./src/components/itemForm.js":
/*!************************************!*\
  !*** ./src/components/itemForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayList\": () => (/* binding */ displayList),\n/* harmony export */   \"displayDoneItemList\": () => (/* binding */ displayDoneItemList),\n/* harmony export */   \"doneTask\": () => (/* binding */ doneTask),\n/* harmony export */   \"deleteItem\": () => (/* binding */ deleteItem),\n/* harmony export */   \"deleteDoneItem\": () => (/* binding */ deleteDoneItem),\n/* harmony export */   \"default\": () => (/* binding */ ItemForm)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _notCompletedItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notCompletedItem */ \"./src/components/notCompletedItem.js\");\n/* harmony import */ var _completedItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completedItem */ \"./src/components/completedItem.js\");\n\r\n\r\n\r\n\r\nlet Items = [];\r\nlet ItemsDone = [];\r\n\r\nfunction displayList (NotCompleted, Completed) {\r\n    NotCompleted.innerHTML = '';\r\n    Items.forEach(item => {\r\n        let tempItem = (0,_notCompletedItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item.title, item.desc, item.dueDate, item.index, NotCompleted, Completed);\r\n        NotCompleted.appendChild(tempItem);\r\n    });\r\n}\r\n\r\nfunction displayDoneItemList (NotCompleted, Completed) {\r\n    Completed.innerHTML = '';\r\n    ItemsDone.forEach(item => {\r\n        let tempItem = (0,_completedItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item.title, item.desc, item.dueDate, item.index, NotCompleted, Completed);\r\n        Completed.appendChild(tempItem);\r\n    });\r\n    displayList(NotCompleted, Completed);\r\n}\r\n\r\nfunction doneTask (index) {\r\n    let temp = [];\r\n    temp = Items.splice(index, 1);\r\n    temp.forEach(item => {\r\n        ItemsDone.push(item);\r\n    });\r\n}\r\n\r\nfunction deleteItem (index) {\r\n    Items.splice(index, 1);\r\n}\r\n\r\nfunction deleteDoneItem (index) {\r\n    ItemsDone.splice(index, 1);\r\n}\r\n\r\nfunction addItemToNotCompletedList (title, desc, dueDate, NotCompleted, Completed) {\r\n    Items.push({ title, desc, dueDate });\r\n    displayList(NotCompleted, Completed);\r\n}\r\n\r\nfunction ItemForm (NotCompleted, Completed) {\r\n    console.log(Completed);\r\n    let workForm = document.createElement('form');\r\n    workForm.classList.add('workForm');\r\n\r\n    let formHeading = document.createElement('div');\r\n    formHeading.innerHTML = `<h4>Add a work to your TO-DO list</h4>`;\r\n    formHeading.classList.add('workFormHeading');\r\n    workForm.appendChild(formHeading);\r\n\r\n    let title = document.createElement('input');\r\n    title.classList.add('title');\r\n    title.placeholder = 'Title';\r\n    title.required = true;\r\n    let desc = document.createElement('textarea');\r\n    desc.classList.add('desc');\r\n    desc.placeholder = 'Description';\r\n    desc.required = true;\r\n    let dueDate = document.createElement('input');\r\n    dueDate.classList.add('dueDate');\r\n    dueDate.placeholder = 'Due Date';\r\n    dueDate.type = 'datetime-local';\r\n    dueDate.required = true;\r\n\r\n    let add = document.createElement('button');\r\n    add.innerText = 'Add';\r\n    add.classList.add('btn');\r\n    let buttonContainer = document.createElement('div');\r\n    buttonContainer.classList.add('btnContainer');\r\n    buttonContainer.appendChild(add);\r\n    add.addEventListener('click', e => {\r\n        e.preventDefault();\r\n        addItemToNotCompletedList(title.value, desc.value, dueDate.value, NotCompleted, Completed);\r\n        title.value = '';\r\n        desc.value = '';\r\n        dueDate.value = '';\r\n    });\r\n\r\n    workForm.appendChild(title);\r\n    workForm.appendChild(desc);\r\n    workForm.appendChild(dueDate);\r\n    workForm.appendChild(buttonContainer);\r\n    return workForm;\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/components/itemForm.js?");

/***/ }),

/***/ "./src/components/notCompletedItem.js":
/*!********************************************!*\
  !*** ./src/components/notCompletedItem.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NotCompletedItem)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _itemForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemForm */ \"./src/components/itemForm.js\");\n\r\n\r\n\r\nfunction NotCompletedItem (title, desc, dueDate, index, NotCompleted, Completed) {\r\n    console.log(Completed);\r\n    let ItemContainer = document.createElement('div');\r\n    ItemContainer.classList.add('itemContainer');\r\n\r\n    ItemContainer.innerHTML = `<h3>Title - ${title}</h3>`;\r\n    ItemContainer.innerHTML += `Description - ${desc}`;\r\n    ItemContainer.innerHTML += `<h5>Due Date - ${dueDate}</h5>`;\r\n\r\n    let buttonContainer = document.createElement('div');\r\n    buttonContainer.classList.add('btnContainer');\r\n    let del = document.createElement('button');\r\n    del.classList.add('btn');\r\n    del.innerText = 'Delete';\r\n    del.addEventListener('click', () => {\r\n        (0,_itemForm__WEBPACK_IMPORTED_MODULE_1__.deleteItem)(index);\r\n        (0,_itemForm__WEBPACK_IMPORTED_MODULE_1__.displayList)(NotCompleted, Completed);\r\n    });\r\n\r\n    let done = document.createElement('button');\r\n    done.classList.add('btn');\r\n    done.innerText = 'Done';\r\n    done.addEventListener('click', () => {\r\n        (0,_itemForm__WEBPACK_IMPORTED_MODULE_1__.doneTask)(index);\r\n        (0,_itemForm__WEBPACK_IMPORTED_MODULE_1__.displayDoneItemList)(NotCompleted, Completed);\r\n    });\r\n    buttonContainer.appendChild(del);\r\n    buttonContainer.appendChild(done);\r\n\r\n    ItemContainer.appendChild(buttonContainer);\r\n    return ItemContainer;\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/components/notCompletedItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoList)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_itemForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/itemForm */ \"./src/components/itemForm.js\");\n/* harmony import */ var _components_completedItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/completedItem */ \"./src/components/completedItem.js\");\n\r\n\r\n\r\n\r\nfunction ToDoList () {\r\n    let outerContainer = document.createElement('div');\r\n\r\n    //page header\r\n\r\n    outerContainer.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\r\n    //to do list container\r\n    let listContainer = document.createElement('div');\r\n    listContainer.classList.add('list-container');\r\n\r\n    //2) Items in the list container\r\n    let ItemBox = document.createElement('div');\r\n\r\n    let NotCompleted = document.createElement('div');\r\n    let Completed = document.createElement('div');\r\n    // 1)Item form\r\n    listContainer.appendChild((0,_components_itemForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(NotCompleted, Completed));\r\n\r\n    let ItemBoxNotCompleted = document.createElement('div');\r\n    ItemBoxNotCompleted.innerHTML = `<h4>Not Completed Tasks</h4>`;\r\n    ItemBoxNotCompleted.classList.add('itemContainer');\r\n    ItemBoxNotCompleted.classList.add('center-item');\r\n    ItemBoxNotCompleted.classList.add('ItemBoxHeader');\r\n    ItemBox.appendChild(ItemBoxNotCompleted);\r\n    ItemBox.appendChild(NotCompleted);\r\n\r\n    let ItemBoxCompleted = document.createElement('div');\r\n    ItemBoxCompleted.classList.add('itemContainer');\r\n    ItemBoxCompleted.classList.add('center-item');\r\n    ItemBoxCompleted.innerHTML = `<h4>Completed Tasks</h4>`;\r\n    ItemBoxCompleted.classList.add('ItemBoxHeader');\r\n    ItemBox.appendChild(ItemBoxCompleted);\r\n    ItemBox.appendChild(Completed);\r\n\r\n    listContainer.appendChild(ItemBox);\r\n    outerContainer.appendChild(listContainer);\r\n\r\n    return outerContainer;\r\n}\r\n\r\ndocument.body.appendChild(ToDoList());\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;