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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/helpers */ \"./util/helpers.js\");\n\n\n\n\n\nconst Index = ({\n  posts\n}) => {\n  const {\n    data\n  } = swr__WEBPACK_IMPORTED_MODULE_1___default()('/api/posts', _util_helpers__WEBPACK_IMPORTED_MODULE_2__.fetcher, {\n    initialData: posts\n  });\n  console.log(data);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: \"hello\"\n  }, void 0, false);\n};\n\nasync function getServerSideProps() {\n  const posts = await (0,_util_helpers__WEBPACK_IMPORTED_MODULE_2__.fetcher)('https://jsonplaceholder.typicode.com/posts');\n  return {\n    props: {\n      posts\n    }\n  };\n} // export const getServerSideProps = async (context) => {\n//   const hero = await graphQlClient.request(HERO_IMAGES, {\n//     tag: \"frontpage\",\n//   });\n//   const services = await graphQlClient.request(SERVICE_TYPES);\n//   return {\n//     props: { hero, services },\n//   };\n// };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLE1BQU1FLEtBQUssR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFlO0FBQzNCLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFXSiwwQ0FBTSxDQUFDLFlBQUQsRUFBZUMsa0RBQWYsRUFBd0I7QUFBRUksSUFBQUEsV0FBVyxFQUFFRjtBQUFmLEdBQXhCLENBQXZCO0FBQ0FHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0Esc0JBQ0U7QUFBQTtBQUFBLG1CQURGO0FBS0QsQ0FSRDs7QUFVTyxlQUFlSSxrQkFBZixHQUFvQztBQUN6QyxRQUFNTCxLQUFLLEdBQUcsTUFBTUYsc0RBQU8sQ0FBQyw0Q0FBRCxDQUEzQjtBQUNBLFNBQU87QUFBRVEsSUFBQUEsS0FBSyxFQUFFO0FBQUVOLE1BQUFBO0FBQUY7QUFBVCxHQUFQO0FBQ0QsRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsaUVBQWVELEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWdpdC1jbGllbnQvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgeyBmZXRjaGVyfSBmcm9tICcuLi91dGlsL2hlbHBlcnMnXG5cbmNvbnN0IEluZGV4ID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUignL2FwaS9wb3N0cycsIGZldGNoZXIsIHsgaW5pdGlhbERhdGE6IHBvc3RzIH0pXG4gIGNvbnNvbGUubG9nKGRhdGEpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIGhlbGxvXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGZldGNoZXIoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpXG4gIHJldHVybiB7IHByb3BzOiB7IHBvc3RzIH0gfVxufVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbi8vICAgY29uc3QgaGVybyA9IGF3YWl0IGdyYXBoUWxDbGllbnQucmVxdWVzdChIRVJPX0lNQUdFUywge1xuLy8gICAgIHRhZzogXCJmcm9udHBhZ2VcIixcbi8vICAgfSk7XG5cbi8vICAgY29uc3Qgc2VydmljZXMgPSBhd2FpdCBncmFwaFFsQ2xpZW50LnJlcXVlc3QoU0VSVklDRV9UWVBFUyk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczogeyBoZXJvLCBzZXJ2aWNlcyB9LFxuLy8gICB9O1xuLy8gfTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbInVzZVNXUiIsImZldGNoZXIiLCJJbmRleCIsInBvc3RzIiwiZGF0YSIsImluaXRpYWxEYXRhIiwiY29uc29sZSIsImxvZyIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./util/helpers.js":
/*!*************************!*\
  !*** ./util/helpers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetcher\": () => (/* binding */ fetcher)\n/* harmony export */ });\nconst fetcher = (...args) => fetch(...args).then(res => res.json());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2hlbHBlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLE9BQU8sR0FBRyxDQUFDLEdBQUdDLElBQUosS0FBYUMsS0FBSyxDQUFDLEdBQUdELElBQUosQ0FBTCxDQUFlRSxJQUFmLENBQW9CQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUEzQixDQUE3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhZ2l0LWNsaWVudC8uL3V0aWwvaGVscGVycy5qcz8zNzRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4iXSwibmFtZXMiOlsiZmV0Y2hlciIsImFyZ3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/helpers.js\n");

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