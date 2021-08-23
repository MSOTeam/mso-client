"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/helpers */ \"./util/helpers.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst Index = ({\n  posts\n}) => {\n  const {\n    data\n  } = swr__WEBPACK_IMPORTED_MODULE_2___default()('/api/posts', _util_helpers__WEBPACK_IMPORTED_MODULE_1__.fetcher, {\n    initialData: posts\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: \"hello\"\n  }, void 0, false);\n};\n\nasync function getServerSideProps() {\n  const posts = await (0,_util_helpers__WEBPACK_IMPORTED_MODULE_1__.fetcher)('https://jsonplaceholder.typicode.com/posts');\n  return {\n    props: {\n      posts\n    }\n  };\n} // export const getServerSideProps = async (context) => {\n//   const hero = await graphQlClient.request(HERO_IMAGES, {\n//     tag: \"frontpage\",\n//   });\n//   const services = await graphQlClient.request(SERVICE_TYPES);\n//   return {\n//     props: { hero, services },\n//   };\n// };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1FLEtBQUssR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFlO0FBQzNCLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFXSCwwQ0FBTSxDQUFDLFlBQUQsRUFBZUQsa0RBQWYsRUFBd0I7QUFBRUssSUFBQUEsV0FBVyxFQUFFRjtBQUFmLEdBQXhCLENBQXZCO0FBRUEsc0JBQ0U7QUFBQTtBQUFBLG1CQURGO0FBS0QsQ0FSRDs7QUFVTyxlQUFlRyxrQkFBZixHQUFvQztBQUN6QyxRQUFNSCxLQUFLLEdBQUcsTUFBTUgsc0RBQU8sQ0FBQyw0Q0FBRCxDQUEzQjtBQUNBLFNBQU87QUFBRU8sSUFBQUEsS0FBSyxFQUFFO0FBQUVKLE1BQUFBO0FBQUY7QUFBVCxHQUFQO0FBQ0QsRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsaUVBQWVELEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWdpdC1jbGllbnQvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgSW5kZXggPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKCcvYXBpL3Bvc3RzJywgZmV0Y2hlciwgeyBpbml0aWFsRGF0YTogcG9zdHMgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICBoZWxsb1xuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBmZXRjaGVyKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxuICByZXR1cm4geyBwcm9wczogeyBwb3N0cyB9IH1cbn1cblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgIGNvbnN0IGhlcm8gPSBhd2FpdCBncmFwaFFsQ2xpZW50LnJlcXVlc3QoSEVST19JTUFHRVMsIHtcbi8vICAgICB0YWc6IFwiZnJvbnRwYWdlXCIsXG4vLyAgIH0pO1xuXG4vLyAgIGNvbnN0IHNlcnZpY2VzID0gYXdhaXQgZ3JhcGhRbENsaWVudC5yZXF1ZXN0KFNFUlZJQ0VfVFlQRVMpO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgaGVybywgc2VydmljZXMgfSxcbi8vICAgfTtcbi8vIH07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXNlU1dSIiwiSW5kZXgiLCJwb3N0cyIsImRhdGEiLCJpbml0aWFsRGF0YSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./util/helpers.js":
/*!*************************!*\
  !*** ./util/helpers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetcher\": () => (/* binding */ fetcher)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n// export const fetcher = (...args) => fetch(...args).then(res => res.json())\n\nconst fetcher = (url, token) => axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {\n  headers: {\n    Authorization: \"Bearer \" + token\n  }\n}).then(res => res.data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2hlbHBlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxHQUFELEVBQU1DLEtBQU4sS0FDbkJILGdEQUFBLENBQ09FLEdBRFAsRUFDWTtBQUFFRyxFQUFBQSxPQUFPLEVBQUU7QUFBRUMsSUFBQUEsYUFBYSxFQUFFLFlBQVlIO0FBQTdCO0FBQVgsQ0FEWixFQUVHSSxJQUZILENBRVNDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUZyQixDQURHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFnaXQtY2xpZW50Ly4vdXRpbC9oZWxwZXJzLmpzPzM3NGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoZXIgPSAodXJsLCB0b2tlbikgPT5cbiAgICBheGlvc1xuICAgICAgLmdldCh1cmwsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuIH0gfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKTtcblxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZmV0Y2hlciIsInVybCIsInRva2VuIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/helpers.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();