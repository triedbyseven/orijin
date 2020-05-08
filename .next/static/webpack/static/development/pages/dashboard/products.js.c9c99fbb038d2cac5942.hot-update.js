webpackHotUpdate("static/development/pages/dashboard/products.js",{

/***/ "./components/Dashboard/Products/Products.tsx":
/*!****************************************************!*\
  !*** ./components/Dashboard/Products/Products.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../graphql */ "./graphql/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./components/Dashboard/Products/index.ts");
var _this = undefined,
    _jsxFileName = "/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Dashboard/Products/Products.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Products = function Products() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_graphql__WEBPACK_IMPORTED_MODULE_2__["QUERY_PRODUCTS"]),
      productsError = _useQuery.error,
      productsLoading = _useQuery.loading,
      data = _useQuery.data;

  if (productsLoading) return __jsx(___WEBPACK_IMPORTED_MODULE_3__["ProductsNav"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 31
    }
  });
  return __jsx("div", {
    className: "row align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["ProductsNav"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(___WEBPACK_IMPORTED_MODULE_3__["ProductsTable"], {
    products: data.getProducts,
    productsLoading: productsLoading,
    productsError: productsError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=products.js.c9c99fbb038d2cac5942.hot-update.js.map