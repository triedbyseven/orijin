webpackHotUpdate("static/development/pages/dashboard/products.js",{

/***/ "./components/Ui/Image/Image.tsx":
/*!***************************************!*\
  !*** ./components/Ui/Image/Image.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Ui/Image/Image.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Image = function Image(_ref) {
  var imageUrl = _ref.imageUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      imageLoading = _useState[0],
      updateImageLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      updateImageLoading(false);
    }, 250);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      width: 50,
      height: 50,
      backgroundColor: '#ccc'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: imageUrl,
    onLoad: function onLoad() {
      return updateImageLoading(false);
    },
    onError: function onError() {
      return console.log('Image failed to load.');
    },
    style: {
      borderRadius: '8px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ })

})
//# sourceMappingURL=products.js.a1273795fb862b32b7d4.hot-update.js.map