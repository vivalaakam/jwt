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
exports.id = "pages/api/token";
exports.ids = ["pages/api/token"];
exports.modules = {

/***/ "node-jose":
/*!****************************!*\
  !*** external "node-jose" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node-jose");

/***/ }),

/***/ "(api)/./pages/api/token.ts":
/*!****************************!*\
  !*** ./pages/api/token.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-jose */ \"node-jose\");\n/* harmony import */ var node_jose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_jose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const { email  } = await req.body;\n    const keyStore = await node_jose__WEBPACK_IMPORTED_MODULE_0___default().JWK.asKeyStore(process.env.KEYS.toString());\n    const [key] = keyStore.all({\n        use: \"sig\"\n    });\n    const opt = {\n        compact: true,\n        jwk: key,\n        fields: {\n            typ: \"jwt\"\n        }\n    };\n    const aud = email.split(\"@\");\n    const iat = Math.floor(Date.now() / 1000);\n    const payload = JSON.stringify({\n        exp: iat + 1440 * 60,\n        iat: iat,\n        sub: email,\n        iss: \"haqq app\",\n        aud: aud[aud.length - 1]\n    });\n    const idToken = await node_jose__WEBPACK_IMPORTED_MODULE_0___default().JWS.createSign(opt, key).update(payload).final();\n    // Get data from your database\n    res.status(200).json({\n        idToken\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9rZW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTZCO0FBRWQsZUFBZUMsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUF5QixFQUN6QjtJQUNFLE1BQU0sRUFBQ0MsTUFBSyxFQUFDLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtJQUU5QixNQUFNQyxXQUFXLE1BQU1OLCtEQUFtQixDQUFDUyxRQUFRQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsUUFBUTtJQUVwRSxNQUFNLENBQUNDLElBQUksR0FBR1AsU0FBU1EsR0FBRyxDQUFDO1FBQUVDLEtBQUs7SUFBTTtJQUV4QyxNQUFNQyxNQUFNO1FBQUVDLFNBQVMsSUFBSTtRQUFFQyxLQUFLTDtRQUFLTSxRQUFRO1lBQUVDLEtBQUs7UUFBTTtJQUFFO0lBRS9ELE1BQU1DLE1BQU9qQixNQUFNa0IsS0FBSyxDQUFDO0lBRXhCLE1BQU1DLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ0MsS0FBS0MsR0FBRyxLQUFLO0lBRXBDLE1BQU1DLFVBQVVDLEtBQUtDLFNBQVMsQ0FBQztRQUM3QkMsS0FBS1IsTUFBTSxPQUFPO1FBQ2xCQSxLQUFLQTtRQUNMUyxLQUFLNUI7UUFDTDZCLEtBQUs7UUFDTFosS0FBS0EsR0FBRyxDQUFDQSxJQUFJYSxNQUFNLEdBQUcsRUFBRTtJQUMxQjtJQUVBLE1BQU1DLFVBQVUsTUFBTW5DLCtEQUFtQixDQUFDZ0IsS0FBS0gsS0FBS3lCLE1BQU0sQ0FBQ1YsU0FBU1csS0FBSztJQUUzRSw4QkFBOEI7SUFDOUJwQyxJQUFJcUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDTjtJQUFPO0FBQy9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdG9rZW4udHM/ZTgwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgam9zZSBmcm9tICdub2RlLWpvc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxhbnk+XG4pIHtcbiAgICBjb25zdCB7ZW1haWx9ID0gYXdhaXQgcmVxLmJvZHlcblxuICAgIGNvbnN0IGtleVN0b3JlID0gYXdhaXQgam9zZS5KV0suYXNLZXlTdG9yZShwcm9jZXNzLmVudi5LRVlTLnRvU3RyaW5nKCkpO1xuICBcbiAgICBjb25zdCBba2V5XSA9IGtleVN0b3JlLmFsbCh7IHVzZTogXCJzaWdcIiB9KTtcbiAgXG4gICAgY29uc3Qgb3B0ID0geyBjb21wYWN0OiB0cnVlLCBqd2s6IGtleSwgZmllbGRzOiB7IHR5cDogXCJqd3RcIiB9IH07XG5cbiAgIGNvbnN0IGF1ZCA9ICBlbWFpbC5zcGxpdChcIkBcIilcblxuICAgIGNvbnN0IGlhdCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuXG4gICAgY29uc3QgcGF5bG9hZCA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGV4cDogaWF0ICsgMTQ0MCAqIDYwLFxuICAgICAgaWF0OiBpYXQsXG4gICAgICBzdWI6IGVtYWlsLFxuICAgICAgaXNzOiBcImhhcXEgYXBwXCIsXG4gICAgICBhdWQ6IGF1ZFthdWQubGVuZ3RoIC0gMV1cbiAgICB9KTtcbiAgXG4gICAgY29uc3QgaWRUb2tlbiA9IGF3YWl0IGpvc2UuSldTLmNyZWF0ZVNpZ24ob3B0LCBrZXkpLnVwZGF0ZShwYXlsb2FkKS5maW5hbCgpO1xuXG4gIC8vIEdldCBkYXRhIGZyb20geW91ciBkYXRhYmFzZVxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7aWRUb2tlbn0pXG59XG4iXSwibmFtZXMiOlsiam9zZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJlbWFpbCIsImJvZHkiLCJrZXlTdG9yZSIsIkpXSyIsImFzS2V5U3RvcmUiLCJwcm9jZXNzIiwiZW52IiwiS0VZUyIsInRvU3RyaW5nIiwia2V5IiwiYWxsIiwidXNlIiwib3B0IiwiY29tcGFjdCIsImp3ayIsImZpZWxkcyIsInR5cCIsImF1ZCIsInNwbGl0IiwiaWF0IiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInBheWxvYWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhwIiwic3ViIiwiaXNzIiwibGVuZ3RoIiwiaWRUb2tlbiIsIkpXUyIsImNyZWF0ZVNpZ24iLCJ1cGRhdGUiLCJmaW5hbCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/token.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/token.ts"));
module.exports = __webpack_exports__;

})();