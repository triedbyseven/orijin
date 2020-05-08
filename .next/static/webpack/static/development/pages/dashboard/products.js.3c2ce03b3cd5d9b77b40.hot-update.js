webpackHotUpdate("static/development/pages/dashboard/products.js",{

/***/ "./components/Dashboard/Products/ProductsTableRow.tsx":
/*!************************************************************!*\
  !*** ./components/Dashboard/Products/ProductsTableRow.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Ui_Animation_FadeIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Ui/Animation/FadeIn */ "./components/Ui/Animation/FadeIn.tsx");
/* harmony import */ var _Ui_Spinner_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Ui/Spinner/index */ "./components/Ui/Spinner/index.tsx");
/* harmony import */ var _Ui_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Ui/Table */ "./components/Ui/Table/index.ts");
var _this = undefined,
    _jsxFileName = "/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Dashboard/Products/ProductsTableRow.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ProductsTableRow = function ProductsTableRow(_ref) {
  var title = _ref.title,
      price = _ref.price,
      inventory = _ref.inventory;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      imageLoading = _useState[0],
      updateImageLoading = _useState[1];

  return __jsx(_Ui_Animation_FadeIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isTableRow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_Ui_Table__WEBPACK_IMPORTED_MODULE_3__["TableData"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, imageLoading ? __jsx("div", {
    style: {
      display: 'flex',
      width: 50,
      height: 50
    },
    className: "align-items-center justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(_Ui_Spinner_index__WEBPACK_IMPORTED_MODULE_2__["Growing"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })) : null, __jsx("img", {
    src: "https://picsum.photos/50/50",
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
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx(_Ui_Table__WEBPACK_IMPORTED_MODULE_3__["TableData"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, title), __jsx(_Ui_Table__WEBPACK_IMPORTED_MODULE_3__["TableData"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "$", price.toFixed(2)), __jsx(_Ui_Table__WEBPACK_IMPORTED_MODULE_3__["TableData"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, inventory, " in stock"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsTableRow);

/***/ })

})
//# sourceMappingURL=products.js.3c2ce03b3cd5d9b77b40.hot-update.js.map