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
/* harmony import */ var _Ui_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Ui/Image */ "./components/Ui/Image/index.ts");
/* harmony import */ var _Ui_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Ui/Table */ "./components/Ui/Table/index.ts");
var _this = undefined,
    _jsxFileName = "/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Dashboard/Products/ProductsTableRow.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ProductsTableRow = function ProductsTableRow(_ref) {
  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      inventory = _ref.inventory;
  return __jsx(_Ui_Animation_FadeIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isTableRow: true,
    animateId: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_Ui_Table__WEBPACK_IMPORTED_MODULE_3__["TableData"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_Ui_Image__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    imageUrl: "https://picsum.photos/50/50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx(_Ui_Table__WEBPACK_IMPORTED_MODULE_3__["TableData"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, title), __jsx(_Ui_Table__WEBPACK_IMPORTED_MODULE_3__["TableData"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "$", price.toFixed(2)), __jsx(_Ui_Table__WEBPACK_IMPORTED_MODULE_3__["TableData"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, inventory, " in stock"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsTableRow);

/***/ })

})
//# sourceMappingURL=products.js.99e09516806a48c5b734.hot-update.js.map