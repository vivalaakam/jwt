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
exports.id = "pages/api/jwks";
exports.ids = ["pages/api/jwks"];
exports.modules = {

/***/ "node-jose":
/*!****************************!*\
  !*** external "node-jose" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node-jose");

/***/ }),

/***/ "(api)/./pages/api/jwks.ts":
/*!***************************!*\
  !*** ./pages/api/jwks.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-jose */ \"node-jose\");\n/* harmony import */ var node_jose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_jose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(_req, res) {\n    const keyStore = await node_jose__WEBPACK_IMPORTED_MODULE_0___default().JWK.asKeyStore(process.env.KEYS.toString());\n    // Get data from your database\n    res.status(200).json(keyStore.toJSON());\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvandrcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNkI7QUFFZCxlQUFlQyxRQUM1QkMsSUFBb0IsRUFDcEJDLEdBQXlCLEVBQ3pCO0lBQ0EsTUFBTUMsV0FBVyxNQUFNSiwrREFBbUIsQ0FBQ08sUUFBUUMsR0FBRyxDQUFDQyxJQUFJLENBQUNDLFFBQVE7SUFFcEUsOEJBQThCO0lBQzlCUCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUixTQUFTUyxNQUFNO0FBQ3RDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvandrcy50cz84NDY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgam9zZSBmcm9tICdub2RlLWpvc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICBfcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8YW55PlxuKSB7XG4gIGNvbnN0IGtleVN0b3JlID0gYXdhaXQgam9zZS5KV0suYXNLZXlTdG9yZShwcm9jZXNzLmVudi5LRVlTLnRvU3RyaW5nKCkpO1xuXG4gIC8vIEdldCBkYXRhIGZyb20geW91ciBkYXRhYmFzZVxuICByZXMuc3RhdHVzKDIwMCkuanNvbihrZXlTdG9yZS50b0pTT04oKSlcbn1cbiJdLCJuYW1lcyI6WyJqb3NlIiwiaGFuZGxlciIsIl9yZXEiLCJyZXMiLCJrZXlTdG9yZSIsIkpXSyIsImFzS2V5U3RvcmUiLCJwcm9jZXNzIiwiZW52IiwiS0VZUyIsInRvU3RyaW5nIiwic3RhdHVzIiwianNvbiIsInRvSlNPTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/jwks.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/jwks.ts"));
module.exports = __webpack_exports__;

})();