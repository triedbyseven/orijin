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
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Spinner */ "./components/Ui/Spinner/index.tsx");
var _this = undefined,
    _jsxFileName = "/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Ui/Image/Image.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Image = function Image(_ref) {
  var imageUrl = _ref.imageUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      imageLoading = _useState[0],
      updateImageLoading = _useState[1]; //   useEffect(() => {
  //     setTimeout(() => {
  //       updateImageLoading(false);
  //     }, 250);
  //   });


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      width: 50,
      height: 50,
      backgroundColor: '#fff'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, !imageLoading ? null : __jsx("div", {
    style: {
      display: 'flex',
      width: 50,
      height: 50
    },
    className: "align-items-center justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_Spinner__WEBPACK_IMPORTED_MODULE_1__["Growing"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })), __jsx("img", {
    src: imageUrl,
    onLoad: function onLoad() {
      return updateImageLoading(false);
    },
    onError: function onError() {
      return console.log('Image failed to load.');
    },
    style: !imageLoading ? {} : {
      display: 'none',
      borderRadius: '8px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ })

})
//# sourceMappingURL=products.js.c6bb3575b354c950543f.hot-update.js.map