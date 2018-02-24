/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_to_string__ = __webpack_require__(6);\n\n\nconsole.log(\"eae\");\n\nchrome.runtime.sendMessage({\n    action: \"get-page-source\",\n    source: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_to_string__[\"a\" /* default */])(document)\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2V0LXBhZ2Utc291cmNlLmpzP2VhNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTXRvU3RyaW5nIGZyb20gXCIuL2RvbS10by1zdHJpbmdcIjtcblxuY29uc29sZS5sb2coXCJlYWVcIik7XG5cbmNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICBhY3Rpb246IFwiZ2V0LXBhZ2Utc291cmNlXCIsXG4gICAgc291cmNlOiBET010b1N0cmluZyhkb2N1bWVudClcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZ2V0LXBhZ2Utc291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("function DOMtoString(documentRoot) {\n    let html = \"\";\n    let node = documentRoot.firstChild;\n    while (node) {\n        switch (node.nodeType) {\n            case Node.ELEMENT_NODE:\n                html += node.outerHTML;\n                break;\n            case Node.TEXT_NODE:\n                html += node.nodeValue;\n                break;\n            case Node.CDATA_SECTION_NODE:\n                html += '<![CDATA[' + node.nodeValue + ']]>';\n                break;\n            case Node.COMMENT_NODE:\n                html += '<!--' + node.nodeValue + '-->';\n                break;\n            case Node.DOCUMENT_TYPE_NODE:\n                // (X)HTML documents are identified by public identifiers\n                html += \"<!DOCTYPE \" + node.name + (node.publicId ? ' PUBLIC \"' + node.publicId + '\"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' \"' + node.systemId + '\"' : '') + '>\\n';\n                break;\n        }\n        node = node.nextSibling;\n    }\n    return html;\n}\n/* harmony default export */ __webpack_exports__[\"a\"] = DOMtoString;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9kb20tdG8tc3RyaW5nLmpzP2VhZmEiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gRE9NdG9TdHJpbmcoZG9jdW1lbnRSb290KSB7XG4gICAgbGV0IGh0bWwgPSBcIlwiO1xuICAgIGxldCBub2RlID0gZG9jdW1lbnRSb290LmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOlxuICAgICAgICAgICAgICAgIGh0bWwgKz0gbm9kZS5vdXRlckhUTUw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE5vZGUuVEVYVF9OT0RFOlxuICAgICAgICAgICAgICAgIGh0bWwgKz0gbm9kZS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE5vZGUuQ0RBVEFfU0VDVElPTl9OT0RFOlxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzwhW0NEQVRBWycgKyBub2RlLm5vZGVWYWx1ZSArICddXT4nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBOb2RlLkNPTU1FTlRfTk9ERTpcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8IS0tJyArIG5vZGUubm9kZVZhbHVlICsgJy0tPic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE5vZGUuRE9DVU1FTlRfVFlQRV9OT0RFOlxuICAgICAgICAgICAgICAgIC8vIChYKUhUTUwgZG9jdW1lbnRzIGFyZSBpZGVudGlmaWVkIGJ5IHB1YmxpYyBpZGVudGlmaWVyc1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gXCI8IURPQ1RZUEUgXCIgKyBub2RlLm5hbWUgKyAobm9kZS5wdWJsaWNJZCA/ICcgUFVCTElDIFwiJyArIG5vZGUucHVibGljSWQgKyAnXCInIDogJycpICsgKCFub2RlLnB1YmxpY0lkICYmIG5vZGUuc3lzdGVtSWQgPyAnIFNZU1RFTScgOiAnJykgKyAobm9kZS5zeXN0ZW1JZCA/ICcgXCInICsgbm9kZS5zeXN0ZW1JZCArICdcIicgOiAnJykgKyAnPlxcbic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xufVxuZXhwb3J0IGRlZmF1bHQgRE9NdG9TdHJpbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZG9tLXRvLXN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

/******/ });