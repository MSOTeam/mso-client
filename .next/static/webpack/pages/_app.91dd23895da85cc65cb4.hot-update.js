"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/helpers */ \"./util/helpers.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _util_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/state */ \"./util/state.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _util_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/icon */ \"./util/icon.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/bjornlarus/Documents/Projects/tagit-client/components/Sidebar.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`\n  background: linear-gradient(122deg, rgb(86, 73, 207), rgb(11, 25, 99));\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: auto;\n  overflow: scroll;\n  padding: 20px 40px;\n  ${props => props.bread && css`\n      font-weight: 100;\n    `}\n  ${props => props.edit && css`\n      display: none;\n      width: 10%;\n    `}\n`;\n_c = Wrapper;\nconst Item = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.span`\n  font-size: 0.9em;\n  color: white;\n  letter-spacing: 2px;\n  font-weight: 400;\n  margin-bottom: 20px;\n`;\n_c2 = Item;\n\nconst Sidebar = () => {\n  _s();\n\n  var _data$tags, _data$tags2;\n\n  const {\n    0: token,\n    1: setToken\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const [sidebar, setSidebar] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_util_state__WEBPACK_IMPORTED_MODULE_4__.sidebarStatus);\n  const url = 'http://localhost:5000/tag';\n  const auth = token;\n  const {\n    data,\n    error\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)([url, auth], _util_helpers__WEBPACK_IMPORTED_MODULE_2__.fetcher);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    var _localStorage;\n\n    setToken((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem(\"token\"));\n  }, []);\n  console.log(sidebar);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_icon__WEBPACK_IMPORTED_MODULE_6__.LogoWhite, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 7\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, undefined), (data === null || data === void 0 ? void 0 : (_data$tags = data.tags) === null || _data$tags === void 0 ? void 0 : _data$tags.length) >= 1 && (data === null || data === void 0 ? void 0 : (_data$tags2 = data.tags) === null || _data$tags2 === void 0 ? void 0 : _data$tags2.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: () => setSidebar(!sidebar),\n      children: item === null || item === void 0 ? void 0 : item.tag\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, undefined)))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, undefined);\n}; // export async function getServerSideProps() {\n//   const tags = await fetcher('http://localhost:5000/tag', localStorage.getItem(\"token\"))\n//   return { props: { t } }\n// }\n// export const getServerSideProps = async (context) => {\n//   const hero = await graphQlClient.request(HERO_IMAGES, {\n//     tag: \"frontpage\",\n//   });\n//   const services = await graphQlClient.request(SERVICE_TYPES);\n//   return {\n//     props: { hero, services },\n//   };\n// };\n\n\n_s(Sidebar, \"ekx9EpakLdO+ZkyGrHukqh32RCQ=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState, swr__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n_c3 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"Item\");\n$RefreshReg$(_c3, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1RLE9BQU8sR0FBR0wsMERBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFLTyxLQUFELElBQ0FBLEtBQUssQ0FBQ0MsS0FBTixJQUNBQyxHQUFJO0FBQ1I7QUFDQSxLQUFNO0FBQ04sSUFBS0YsS0FBRCxJQUNBQSxLQUFLLENBQUNHLElBQU4sSUFDQUQsR0FBSTtBQUNSO0FBQ0E7QUFDQSxLQUFNO0FBQ04sQ0FuQkE7S0FBTUo7QUFxQk4sTUFBTU0sSUFBSSxHQUFHWCwyREFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtNQUFNVzs7QUFRTixNQUFNRSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUFBOztBQUNwQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JqQiwrQ0FBUSxFQUFsQztBQUNBLFFBQU0sQ0FBQ2tCLE9BQUQsRUFBVUMsVUFBVixJQUF3QmQsc0RBQWMsQ0FBQ0Qsc0RBQUQsQ0FBNUM7QUFFQSxRQUFNZ0IsR0FBRyxHQUFHLDJCQUFaO0FBQ0EsUUFBTUMsSUFBSSxHQUFHTCxLQUFiO0FBRUEsUUFBTTtBQUFFTSxJQUFBQSxJQUFGO0FBQVFDLElBQUFBO0FBQVIsTUFBa0JwQiw0Q0FBTSxDQUM1QixDQUFDaUIsR0FBRCxFQUFNQyxJQUFOLENBRDRCLEVBRTVCcEIsa0RBRjRCLENBQTlCO0FBS0FGLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUFBOztBQUNka0IsSUFBQUEsUUFBUSxrQkFBQ08sWUFBRCxrREFBQyxjQUFjQyxPQUFkLENBQXNCLE9BQXRCLENBQUQsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULE9BQVo7QUFDQSxzQkFDRSw4REFBQyxPQUFEO0FBQUEsNEJBQ0U7QUFBQSw2QkFDQSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlHLENBQUFJLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosMEJBQUFBLElBQUksQ0FBRU0sSUFBTiwwREFBWUMsTUFBWixLQUFzQixDQUF0QixLQUEyQlAsSUFBM0IsYUFBMkJBLElBQTNCLHNDQUEyQkEsSUFBSSxDQUFFTSxJQUFqQyxnREFBMkIsWUFBWUUsR0FBWixDQUFpQkMsSUFBRCxpQkFDMUMsOERBQUMsSUFBRDtBQUFNLGFBQU8sRUFBRSxNQUFNWixVQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUEvQjtBQUFBLGdCQUE0Q2EsSUFBNUMsYUFBNENBLElBQTVDLHVCQUE0Q0EsSUFBSSxDQUFFQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQwQixDQUEzQixDQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsQ0ExQkQsRUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztHQTNDTWpCO1VBRTBCVixvREFLTkY7OztNQVBwQlk7QUErQ04sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzPzg0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHsgc2lkZWJhclN0YXR1cyB9IGZyb20gXCIuLi91dGlsL3N0YXRlXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IExvZ29XaGl0ZSB9IGZyb20gXCIuLi91dGlsL2ljb25cIjtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjJkZWcsIHJnYig4NiwgNzMsIDIwNyksIHJnYigxMSwgMjUsIDk5KSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiBhdXRvO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmJyZWFkICYmXG4gICAgY3NzYFxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBgfVxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5lZGl0ICYmXG4gICAgY3NzYFxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgYH1cbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuc3BhbmBcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuYDtcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2lkZWJhciwgc2V0U2lkZWJhcl0gPSB1c2VSZWNvaWxTdGF0ZShzaWRlYmFyU3RhdHVzKTtcblxuICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RhZyc7XG4gIGNvbnN0IGF1dGggPSB0b2tlbjtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgW3VybCwgYXV0aF0sXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VG9rZW4obG9jYWxTdG9yYWdlPy5nZXRJdGVtKFwidG9rZW5cIikpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKHNpZGViYXIpXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8ZGl2PlxuICAgICAgPExvZ29XaGl0ZSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7ZGF0YT8udGFncz8ubGVuZ3RoID49IDEgJiYgZGF0YT8udGFncz8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxJdGVtIG9uQ2xpY2s9eygpID0+IHNldFNpZGViYXIoIXNpZGViYXIpfT57aXRlbT8udGFnfTwvSXRlbT5cbiAgICAgICkpfVxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4vLyAgIGNvbnN0IHRhZ3MgPSBhd2FpdCBmZXRjaGVyKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvdGFnJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSlcbi8vICAgcmV0dXJuIHsgcHJvcHM6IHsgdCB9IH1cbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgIGNvbnN0IGhlcm8gPSBhd2FpdCBncmFwaFFsQ2xpZW50LnJlcXVlc3QoSEVST19JTUFHRVMsIHtcbi8vICAgICB0YWc6IFwiZnJvbnRwYWdlXCIsXG4vLyAgIH0pO1xuXG4vLyAgIGNvbnN0IHNlcnZpY2VzID0gYXdhaXQgZ3JhcGhRbENsaWVudC5yZXF1ZXN0KFNFUlZJQ0VfVFlQRVMpO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgaGVybywgc2VydmljZXMgfSxcbi8vICAgfTtcbi8vIH07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hlciIsInN0eWxlZCIsInVzZVNXUiIsInNpZGViYXJTdGF0dXMiLCJ1c2VSZWNvaWxTdGF0ZSIsIkxvZ29XaGl0ZSIsIldyYXBwZXIiLCJkaXYiLCJwcm9wcyIsImJyZWFkIiwiY3NzIiwiZWRpdCIsIkl0ZW0iLCJzcGFuIiwiU2lkZWJhciIsInRva2VuIiwic2V0VG9rZW4iLCJzaWRlYmFyIiwic2V0U2lkZWJhciIsInVybCIsImF1dGgiLCJkYXRhIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInRhZ3MiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwidGFnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ })

});