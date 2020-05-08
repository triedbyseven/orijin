webpackHotUpdate("static/development/pages/dashboard/products.js",{

/***/ "./components/Ui/Animation/FadeIn.tsx":
/*!********************************************!*\
  !*** ./components/Ui/Animation/FadeIn.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _this = undefined,
    _jsxFileName = "/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Ui/Animation/FadeIn.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var FadeIn = function FadeIn(_ref) {
  var _ref$isTableRow = _ref.isTableRow,
      isTableRow = _ref$isTableRow === void 0 ? false : _ref$isTableRow,
      children = _ref.children,
      animateId = _ref.animateId;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].staggerFromTo(".animate-".concat(animateId), 0.5, {
      y: 10,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, 0.2);
  });
  if (isTableRow) return __jsx("tr", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3979238980", [animateId]]]) + " " + "animate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3979238980",
    dynamic: [animateId],
    __self: _this
  }, ".animate-".concat(animateId, ".__jsx-style-dynamic-selector{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvRGV2ZWxvcG1lbnQvTmV4dGpzL2xhbmRpbmctcGFnZS1wcm9kY3V0LTAwMS9jb21wb25lbnRzL1VpL0FuaW1hdGlvbi9GYWRlSW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFHdUIsVUFDWiIsImZpbGUiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL0RldmVsb3BtZW50L05leHRqcy9sYW5kaW5nLXBhZ2UtcHJvZGN1dC0wMDEvY29tcG9uZW50cy9VaS9BbmltYXRpb24vRmFkZUluLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFR3ZWVuTWF4IH0gZnJvbSAnZ3NhcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFkZUluUHJvcHMge1xuICBpc1RhYmxlUm93PzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IGFueTtcbiAgYW5pbWF0ZUlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IEZhZGVJbjogUmVhY3QuU0ZDPEZhZGVJblByb3BzPiA9ICh7IGlzVGFibGVSb3cgPSBmYWxzZSwgY2hpbGRyZW4sIGFuaW1hdGVJZCB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgVHdlZW5NYXguc3RhZ2dlckZyb21UbyhgLmFuaW1hdGUtJHthbmltYXRlSWR9YCwgMC41LCB7IHk6IDEwLCBvcGFjaXR5OiAwIH0sIHsgeTogMCwgb3BhY2l0eTogMSB9LCAwLjIpO1xuICB9KTtcblxuICBpZiAoaXNUYWJsZVJvdylcbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGNsYXNzTmFtZT1cImFuaW1hdGVcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFuaW1hdGUtJHthbmltYXRlSWR9IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3RyPlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmFuaW1hdGUtJHthbmltYXRlSWR9IHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYWRlSW47XG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Ui/Animation/FadeIn.tsx */")));
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2447976381", [animateId]]]) + " " + "animate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2447976381",
    dynamic: [animateId],
    __self: _this
  }, ".animate-".concat(animateId, ".__jsx-style-dynamic-selector{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvRGV2ZWxvcG1lbnQvTmV4dGpzL2xhbmRpbmctcGFnZS1wcm9kY3V0LTAwMS9jb21wb25lbnRzL1VpL0FuaW1hdGlvbi9GYWRlSW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCa0IsQUFHcUIsVUFDWiIsImZpbGUiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL0RldmVsb3BtZW50L05leHRqcy9sYW5kaW5nLXBhZ2UtcHJvZGN1dC0wMDEvY29tcG9uZW50cy9VaS9BbmltYXRpb24vRmFkZUluLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFR3ZWVuTWF4IH0gZnJvbSAnZ3NhcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFkZUluUHJvcHMge1xuICBpc1RhYmxlUm93PzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IGFueTtcbiAgYW5pbWF0ZUlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IEZhZGVJbjogUmVhY3QuU0ZDPEZhZGVJblByb3BzPiA9ICh7IGlzVGFibGVSb3cgPSBmYWxzZSwgY2hpbGRyZW4sIGFuaW1hdGVJZCB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgVHdlZW5NYXguc3RhZ2dlckZyb21UbyhgLmFuaW1hdGUtJHthbmltYXRlSWR9YCwgMC41LCB7IHk6IDEwLCBvcGFjaXR5OiAwIH0sIHsgeTogMCwgb3BhY2l0eTogMSB9LCAwLjIpO1xuICB9KTtcblxuICBpZiAoaXNUYWJsZVJvdylcbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGNsYXNzTmFtZT1cImFuaW1hdGVcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFuaW1hdGUtJHthbmltYXRlSWR9IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3RyPlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmFuaW1hdGUtJHthbmltYXRlSWR9IHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYWRlSW47XG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Ui/Animation/FadeIn.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (FadeIn);

/***/ })

})
//# sourceMappingURL=products.js.c0ebb281c6b65bd0da15.hot-update.js.map