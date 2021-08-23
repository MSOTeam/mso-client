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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/helpers */ \"./util/helpers.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _util_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/state */ \"./util/state.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _util_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/icon */ \"./util/icon.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/bjornlarus/Documents/Projects/tagit-client/components/Sidebar.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`\n  background: linear-gradient(122deg, rgb(86, 73, 207), rgb(11, 25, 99));\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: auto;\n  overflow: scroll;\n  padding: 20px 30px;\n  ${props => props.bread && css`\n      font-weight: 100;\n    `}\n  ${props => props.edit && css`\n      display: none;\n      width: 10%;\n    `}\n  ::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: none;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #060f3e;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #060f3e;\n  }\n`;\n_c = Wrapper;\nconst LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`\n  margin: 10px 0;\n`;\n_c2 = LogoWrapper;\nconst Item = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.span`\n  font-size: 0.9em;\n  color: white;\n  letter-spacing: 2px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  cursor: pointer;\n`;\n_c3 = Item;\n\nconst Sidebar = () => {\n  _s();\n\n  var _data$tags, _data$tags2;\n\n  const {\n    0: token,\n    1: setToken\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const [sidebar, setSidebar] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_util_state__WEBPACK_IMPORTED_MODULE_4__.sidebarStatus);\n  const url = 'http://localhost:5000/tag';\n  const auth = token;\n  const {\n    data,\n    error\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)([url, auth], _util_helpers__WEBPACK_IMPORTED_MODULE_2__.fetcher);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    var _localStorage;\n\n    setToken((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem(\"token\"));\n  }, []);\n  console.log(sidebar);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoWrapper, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_icon__WEBPACK_IMPORTED_MODULE_6__.LogoWhite, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, undefined), (data === null || data === void 0 ? void 0 : (_data$tags = data.tags) === null || _data$tags === void 0 ? void 0 : _data$tags.length) >= 1 && (data === null || data === void 0 ? void 0 : (_data$tags2 = data.tags) === null || _data$tags2 === void 0 ? void 0 : _data$tags2.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: () => setSidebar(!sidebar),\n      children: item === null || item === void 0 ? void 0 : item.tag\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }, undefined)))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, undefined);\n}; // export async function getServerSideProps() {\n//   const tags = await fetcher('http://localhost:5000/tag', localStorage.getItem(\"token\"))\n//   return { props: { t } }\n// }\n// export const getServerSideProps = async (context) => {\n//   const hero = await graphQlClient.request(HERO_IMAGES, {\n//     tag: \"frontpage\",\n//   });\n//   const services = await graphQlClient.request(SERVICE_TYPES);\n//   return {\n//     props: { hero, services },\n//   };\n// };\n\n\n_s(Sidebar, \"ekx9EpakLdO+ZkyGrHukqh32RCQ=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState, swr__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n_c4 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"LogoWrapper\");\n$RefreshReg$(_c3, \"Item\");\n$RefreshReg$(_c4, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1RLE9BQU8sR0FBR0wsMERBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFLTyxLQUFELElBQ0FBLEtBQUssQ0FBQ0MsS0FBTixJQUNBQyxHQUFJO0FBQ1I7QUFDQSxLQUFNO0FBQ04sSUFBS0YsS0FBRCxJQUNBQSxLQUFLLENBQUNHLElBQU4sSUFDQUQsR0FBSTtBQUNSO0FBQ0E7QUFDQSxLQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FyQ0E7S0FBTUo7QUF1Q04sTUFBTU0sV0FBVyxHQUFHWCwwREFBVztBQUMvQjtBQUNBLENBRkE7TUFBTVc7QUFJTixNQUFNQyxJQUFJLEdBQUdaLDJEQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7TUFBTVk7O0FBU04sTUFBTUUsT0FBTyxHQUFHLE1BQU07QUFBQTs7QUFBQTs7QUFDcEIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CbEIsK0NBQVEsRUFBbEM7QUFDQSxRQUFNLENBQUNtQixPQUFELEVBQVVDLFVBQVYsSUFBd0JmLHNEQUFjLENBQUNELHNEQUFELENBQTVDO0FBRUEsUUFBTWlCLEdBQUcsR0FBRywyQkFBWjtBQUNBLFFBQU1DLElBQUksR0FBR0wsS0FBYjtBQUVBLFFBQU07QUFBRU0sSUFBQUEsSUFBRjtBQUFRQyxJQUFBQTtBQUFSLE1BQWtCckIsNENBQU0sQ0FDNUIsQ0FBQ2tCLEdBQUQsRUFBTUMsSUFBTixDQUQ0QixFQUU1QnJCLGtEQUY0QixDQUE5QjtBQUtBRixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFBQTs7QUFDZG1CLElBQUFBLFFBQVEsa0JBQUNPLFlBQUQsa0RBQUMsY0FBY0MsT0FBZCxDQUFzQixPQUF0QixDQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxPQUFaO0FBQ0Esc0JBQ0UsOERBQUMsT0FBRDtBQUFBLDRCQUNFLDhEQUFDLFdBQUQ7QUFBQSw2QkFDRSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlHLENBQUFJLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosMEJBQUFBLElBQUksQ0FBRU0sSUFBTiwwREFBWUMsTUFBWixLQUFzQixDQUF0QixLQUEyQlAsSUFBM0IsYUFBMkJBLElBQTNCLHNDQUEyQkEsSUFBSSxDQUFFTSxJQUFqQyxnREFBMkIsWUFBWUUsR0FBWixDQUFpQkMsSUFBRCxpQkFDMUMsOERBQUMsSUFBRDtBQUFNLGFBQU8sRUFBRSxNQUFNWixVQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUEvQjtBQUFBLGdCQUE0Q2EsSUFBNUMsYUFBNENBLElBQTVDLHVCQUE0Q0EsSUFBSSxDQUFFQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQwQixDQUEzQixDQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsQ0ExQkQsRUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztHQTNDTWpCO1VBRTBCWCxvREFLTkY7OztNQVBwQmE7QUErQ04sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzPzg0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi91dGlsL2hlbHBlcnMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHsgc2lkZWJhclN0YXR1cyB9IGZyb20gXCIuLi91dGlsL3N0YXRlXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IExvZ29XaGl0ZSB9IGZyb20gXCIuLi91dGlsL2ljb25cIjtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjJkZWcsIHJnYig4NiwgNzMsIDIwNyksIHJnYigxMSwgMjUsIDk5KSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiBhdXRvO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmJyZWFkICYmXG4gICAgY3NzYFxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBgfVxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5lZGl0ICYmXG4gICAgY3NzYFxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgYH1cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDRweDtcbiAgfVxuXG4gIC8qIFRyYWNrICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cblxuICAvKiBIYW5kbGUgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogIzA2MGYzZTtcbiAgfVxuXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDYwZjNlO1xuICB9XG5gO1xuXG5jb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMTBweCAwO1xuYDtcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3NpZGViYXIsIHNldFNpZGViYXJdID0gdXNlUmVjb2lsU3RhdGUoc2lkZWJhclN0YXR1cyk7XG5cbiAgY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90YWcnO1xuICBjb25zdCBhdXRoID0gdG9rZW47XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIFt1cmwsIGF1dGhdLFxuICAgIGZldGNoZXJcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRva2VuKGxvY2FsU3RvcmFnZT8uZ2V0SXRlbShcInRva2VuXCIpKTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyhzaWRlYmFyKVxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPExvZ29XcmFwcGVyPlxuICAgICAgICA8TG9nb1doaXRlIC8+XG4gICAgICA8L0xvZ29XcmFwcGVyPlxuICAgICAge2RhdGE/LnRhZ3M/Lmxlbmd0aCA+PSAxICYmIGRhdGE/LnRhZ3M/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8SXRlbSBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyKCFzaWRlYmFyKX0+e2l0ZW0/LnRhZ308L0l0ZW0+XG4gICAgICApKX1cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICBjb25zdCB0YWdzID0gYXdhaXQgZmV0Y2hlcignaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RhZycsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpXG4vLyAgIHJldHVybiB7IHByb3BzOiB7IHQgfSB9XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuLy8gICBjb25zdCBoZXJvID0gYXdhaXQgZ3JhcGhRbENsaWVudC5yZXF1ZXN0KEhFUk9fSU1BR0VTLCB7XG4vLyAgICAgdGFnOiBcImZyb250cGFnZVwiLFxuLy8gICB9KTtcblxuLy8gICBjb25zdCBzZXJ2aWNlcyA9IGF3YWl0IGdyYXBoUWxDbGllbnQucmVxdWVzdChTRVJWSUNFX1RZUEVTKTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7IGhlcm8sIHNlcnZpY2VzIH0sXG4vLyAgIH07XG4vLyB9O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoZXIiLCJzdHlsZWQiLCJ1c2VTV1IiLCJzaWRlYmFyU3RhdHVzIiwidXNlUmVjb2lsU3RhdGUiLCJMb2dvV2hpdGUiLCJXcmFwcGVyIiwiZGl2IiwicHJvcHMiLCJicmVhZCIsImNzcyIsImVkaXQiLCJMb2dvV3JhcHBlciIsIkl0ZW0iLCJzcGFuIiwiU2lkZWJhciIsInRva2VuIiwic2V0VG9rZW4iLCJzaWRlYmFyIiwic2V0U2lkZWJhciIsInVybCIsImF1dGgiLCJkYXRhIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInRhZ3MiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwidGFnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ })

});