webpackHotUpdate("static/development/pages/dashboard/products.js",{

/***/ "./components/Dashboard/Products/ProductsTable.tsx":
/*!*********************************************************!*\
  !*** ./components/Dashboard/Products/ProductsTable.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Ui_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Ui/Table */ "./components/Ui/Table/index.ts");
/* harmony import */ var _TableHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableHeader */ "./components/Dashboard/Products/TableHeader.tsx");
/* harmony import */ var _TableContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableContent */ "./components/Dashboard/Products/TableContent.tsx");
var _this = undefined,
    _jsxFileName = "/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Dashboard/Products/ProductsTable.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ProductsTable = function ProductsTable(_ref) {
  var products = _ref.products,
      productsLoading = _ref.productsLoading,
      productsError = _ref.productsError;
  return __jsx("div", {
    className: "col-12 minHeight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_Ui_Table__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "table-borderless mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_TableHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_TableContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    products: products,
    productsLoading: productsLoading,
    productsError: productsError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsTable);

/***/ })

})
//# sourceMappingURL=products.js.4d205dd991d1475efc78.hot-update.js.map