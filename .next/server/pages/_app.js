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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/client.ts":
/*!***********************!*\
  !*** ./lib/client.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"origin\": () => (/* binding */ origin),\n/* harmony export */   \"useClient\": () => (/* binding */ useClient)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst protocol = `${ true ? \"http\" : 0}://`;\nconst host =  true ? process.env.NEXT_PUBLIC_VERCEL_URL || \"localhost:3000\" : 0;\nconst origin = `${protocol}${host}`;\nconst useClient = ()=>{\n    const client = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n            uri: `${origin}/api`,\n            cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n        }), []);\n    return client;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUM2QjtBQUU3RCxNQUFNRyxRQUFRLEdBQUcsQ0FBQyxFQUNoQkMsS0FBc0MsR0FBRyxNQUFNLEdBQUcsQ0FBTyxDQUMxRCxHQUFHLENBQUM7QUFFTCxNQUFNQyxJQUFJLEdBQ1IsS0FBNkIsR0FDekJELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDQyxzQkFBc0IsSUFBSSxnQkFBZ0IsR0FFdERDLENBQW9CO0FBRW5CLE1BQU1FLE1BQU0sR0FBRyxDQUFDLEVBQUVQLFFBQVEsQ0FBQyxFQUFFRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRXBDLE1BQU1NLFNBQVMsR0FBRyxJQUFNO0lBQzdCLE1BQU1DLE1BQU0sR0FBR1osOENBQU8sQ0FDcEIsSUFDRSxJQUFJQyx3REFBWSxDQUFDO1lBQ2ZZLEdBQUcsRUFBRSxDQUFDLEVBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEJJLEtBQUssRUFBRSxJQUFJWix5REFBYSxFQUFFO1NBQzNCLENBQUMsRUFDSixFQUFFLENBQ0g7SUFDRCxPQUFPVSxNQUFNLENBQUM7Q0FDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbGliL2NsaWVudC50cz8xNTVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBwcm90b2NvbCA9IGAke1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gXCJodHRwXCIgOiBcImh0dHBzXCJcbn06Ly9gO1xuXG5jb25zdCBob3N0ID1cbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIlxuICAgID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVkVSQ0VMX1VSTCB8fCBcImxvY2FsaG9zdDozMDAwXCJcbiAgICA6IC8vIFVzZSBob3N0IG9uIHRoZSBjbGllbnQgc2luY2UgdXNpbmcgVkVSQ0VMX1VSTCBjYW4gbGVhZCB0byBDT1JTIGVycm9ycyBkdWUgdG8gYWxpYXNlc1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3Q7XG5cbmV4cG9ydCBjb25zdCBvcmlnaW4gPSBgJHtwcm90b2NvbH0ke2hvc3R9YDtcblxuZXhwb3J0IGNvbnN0IHVzZUNsaWVudCA9ICgpID0+IHtcbiAgY29uc3QgY2xpZW50ID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgIHVyaTogYCR7b3JpZ2lufS9hcGlgLFxuICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgICAgIH0pLFxuICAgIFtdXG4gICk7XG4gIHJldHVybiBjbGllbnQ7XG59OyJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsInByb3RvY29sIiwicHJvY2VzcyIsImhvc3QiLCJlbnYiLCJORVhUX1BVQkxJQ19WRVJDRUxfVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJ1c2VDbGllbnQiLCJjbGllbnQiLCJ1cmkiLCJjYWNoZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/client.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.ts\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const client = (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.useClient)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/jonathanvandenberg/2022/VPBank/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jonathanvandenberg/2022/VPBank/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNnRDtBQUNOO0FBRTFDLFNBQVNFLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixxQkFDRSw4REFBQ0QsMERBQWM7UUFBQ0ssTUFBTSxFQUFFQSxNQUFNO2tCQUM1Qiw0RUFBQ0YsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNiLENBQ2pCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlQ2xpZW50IH0gZnJvbSBcIi4uL2xpYi9jbGllbnRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBjbGllbnQgPSB1c2VDbGllbnQoKTtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkFwb2xsb1Byb3ZpZGVyIiwidXNlQ2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();