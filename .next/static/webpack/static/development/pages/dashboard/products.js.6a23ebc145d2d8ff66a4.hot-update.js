webpackHotUpdate("static/development/pages/dashboard/products.js",{

/***/ "./components/Ui/Animation/FadeIn.tsx":
/*!********************************************!*\
  !*** ./components/Ui/Animation/FadeIn.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _this = undefined,
    _jsxFileName = "/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Ui/Animation/FadeIn.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var FadeIn = function FadeIn(_ref) {
  var _ref$isTableRow = _ref.isTableRow,
      isTableRow = _ref$isTableRow === void 0 ? false : _ref$isTableRow,
      children = _ref.children;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    gsap__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].staggerFromTo(".animate", 0.5, {
      y: 10,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, 0.2);
  });
  if (isTableRow) return __jsx("tr", {
    className: "animate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 26
    }
  }, children);
  return __jsx("div", {
    className: "animate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (FadeIn);

/***/ })

})
//# sourceMappingURL=products.js.6a23ebc145d2d8ff66a4.hot-update.js.map