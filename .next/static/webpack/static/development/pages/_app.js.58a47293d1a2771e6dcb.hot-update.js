webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Dashboard/Sidebar.tsx":
/*!******************************************!*\
  !*** ./components/Dashboard/Sidebar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Dashboard/Sidebar.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Sidebar = function Sidebar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      sidebarHeight = _useState[0],
      updateSidebarHeight = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    updateSidebarHeight(window.innerHeight);
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]) + " " + "sidebar p-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]) + " " + "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/dashboard",
    prefetch: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Home"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/dashboard/products",
    prefetch: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Products")), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]) + " " + "bi bi-tag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M.5 2A1.5 1.5 0 012 .5h4.586a1.5 1.5 0 011.06.44l7 7a1.5 1.5 0 010 2.12l-4.585 4.586a1.5 1.5 0 01-2.122 0l-7-7A1.5 1.5 0 01.5 6.586V2zM2 1.5a.5.5 0 00-.5.5v4.586a.5.5 0 00.146.353l7 7a.5.5 0 00.708 0l4.585-4.585a.5.5 0 000-.708l-7-7a.5.5 0 00-.353-.146H2z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    d: "M2.5 4.5a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Orders", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]) + " " + "bi bi-inbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M3.81 4.063A1.5 1.5 0 014.98 3.5h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 01-.78.624l-3.7-4.624a.5.5 0 00-.39-.188H4.98a.5.5 0 00-.39.188L.89 9.312a.5.5 0 11-.78-.624l3.7-4.625z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    d: "M.125 8.67A.5.5 0 01.5 8.5H6a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124a1.5 1.5 0 01-1.489 1.314H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zm.941.83l.32 2.562a.5.5 0 00.497.438h12.234a.5.5 0 00.496-.438l.32-2.562H10.45a2.5 2.5 0 01-4.9 0H1.066z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "Online Store", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]) + " " + "bi bi-house",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    d: "M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Settings", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]) + " " + "bi bi-gear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 014.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 01-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 011.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 012.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 012.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 011.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 01-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 018.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 001.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 00.52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 00-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 00-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 00-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 00-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 00.52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 001.255-.52l.094-.319z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    d: "M8 5.754a2.246 2.246 0 100 4.492 2.246 2.246 0 000-4.492zM4.754 8a3.246 3.246 0 116.492 0 3.246 3.246 0 01-6.492 0z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1420219303", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1420219303",
    dynamic: [sidebarHeight],
    __self: _this
  }, ".sidebar.__jsx-style-dynamic-selector{width:335px;height:".concat(sidebarHeight, "px;border-right:1px solid #eee;}a.__jsx-style-dynamic-selector{color:#212529;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvRGV2ZWxvcG1lbnQvTmV4dGpzL2xhbmRpbmctcGFnZS1wcm9kY3V0LTAwMS9jb21wb25lbnRzL0Rhc2hib2FyZC9TaWRlYmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SFMsQUFHeUIsQUFLRSxZQUp3QixFQUtqQixvQ0FKTyxjQUs5QixjQUpBIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvRGV2ZWxvcG1lbnQvTmV4dGpzL2xhbmRpbmctcGFnZS1wcm9kY3V0LTAwMS9jb21wb25lbnRzL0Rhc2hib2FyZC9TaWRlYmFyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgU2lkZWJhcjogUmVhY3QuU0ZDID0gKCkgPT4ge1xuICBjb25zdCBbc2lkZWJhckhlaWdodCwgdXBkYXRlU2lkZWJhckhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZVNpZGViYXJIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyIHAtM1wiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiIHByZWZldGNoPlxuICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC9wcm9kdWN0c1wiIHByZWZldGNoPlxuICAgICAgICAgICAgPGE+UHJvZHVjdHM8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLXRhZ1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNLjUgMkExLjUgMS41IDAgMDEyIC41aDQuNTg2YTEuNSAxLjUgMCAwMTEuMDYuNDRsNyA3YTEuNSAxLjUgMCAwMTAgMi4xMmwtNC41ODUgNC41ODZhMS41IDEuNSAwIDAxLTIuMTIyIDBsLTctN0ExLjUgMS41IDAgMDEuNSA2LjU4NlYyek0yIDEuNWEuNS41IDAgMDAtLjUuNXY0LjU4NmEuNS41IDAgMDAuMTQ2LjM1M2w3IDdhLjUuNSAwIDAwLjcwOCAwbDQuNTg1LTQuNTg1YS41LjUgMCAwMDAtLjcwOGwtNy03YS41LjUgMCAwMC0uMzUzLS4xNDZIMnpcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIuNSA0LjVhMiAyIDAgMTE0IDAgMiAyIDAgMDEtNCAwem0yLTFhMSAxIDAgMTAwIDIgMSAxIDAgMDAwLTJ6XCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIE9yZGVyc1xuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1pbmJveFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMy44MSA0LjA2M0ExLjUgMS41IDAgMDE0Ljk4IDMuNWg2LjA0YTEuNSAxLjUgMCAwMTEuMTcuNTYzbDMuNyA0LjYyNWEuNS41IDAgMDEtLjc4LjYyNGwtMy43LTQuNjI0YS41LjUgMCAwMC0uMzktLjE4OEg0Ljk4YS41LjUgMCAwMC0uMzkuMTg4TC44OSA5LjMxMmEuNS41IDAgMTEtLjc4LS42MjRsMy43LTQuNjI1elwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNLjEyNSA4LjY3QS41LjUgMCAwMS41IDguNUg2YS41LjUgMCAwMS41LjUgMS41IDEuNSAwIDAwMyAwIC41LjUgMCAwMS41LS41aDUuNWEuNS41IDAgMDEuNDk2LjU2MmwtLjM5IDMuMTI0YTEuNSAxLjUgMCAwMS0xLjQ4OSAxLjMxNEgxLjg4M2ExLjUgMS41IDAgMDEtMS40ODktMS4zMTRsLS4zOS0zLjEyNGEuNS41IDAgMDEuMTIxLS4zOTN6bS45NDEuODNsLjMyIDIuNTYyYS41LjUgMCAwMC40OTcuNDM4aDEyLjIzNGEuNS41IDAgMDAuNDk2LS40MzhsLjMyLTIuNTYySDEwLjQ1YTIuNSAyLjUgMCAwMS00LjkgMEgxLjA2NnpcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIE9ubGluZSBTdG9yZVxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1ob3VzZVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNMiAxMy41VjdoMXY2LjVhLjUuNSAwIDAwLjUuNWg5YS41LjUgMCAwMC41LS41VjdoMXY2LjVhMS41IDEuNSAwIDAxLTEuNSAxLjVoLTlBMS41IDEuNSAwIDAxMiAxMy41em0xMS0xMVY2bC0yLTJWMi41YS41LjUgMCAwMS41LS41aDFhLjUuNSAwIDAxLjUuNXpcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTcuMjkzIDEuNWExIDEgMCAwMTEuNDE0IDBsNi42NDcgNi42NDZhLjUuNSAwIDAxLS43MDguNzA4TDggMi4yMDcgMS4zNTQgOC44NTRhLjUuNSAwIDExLS43MDgtLjcwOEw3LjI5MyAxLjV6XCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1nZWFyXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk04LjgzNyAxLjYyNmMtLjI0Ni0uODM1LTEuNDI4LS44MzUtMS42NzQgMGwtLjA5NC4zMTlBMS44NzMgMS44NzMgMCAwMTQuMzc3IDMuMDZsLS4yOTItLjE2Yy0uNzY0LS40MTUtMS42LjQyLTEuMTg0IDEuMTg1bC4xNTkuMjkyYTEuODczIDEuODczIDAgMDEtMS4xMTUgMi42OTJsLS4zMTkuMDk0Yy0uODM1LjI0Ni0uODM1IDEuNDI4IDAgMS42NzRsLjMxOS4wOTRhMS44NzMgMS44NzMgMCAwMTEuMTE1IDIuNjkzbC0uMTYuMjkxYy0uNDE1Ljc2NC40MiAxLjYgMS4xODUgMS4xODRsLjI5Mi0uMTU5YTEuODczIDEuODczIDAgMDEyLjY5MiAxLjExNmwuMDk0LjMxOGMuMjQ2LjgzNSAxLjQyOC44MzUgMS42NzQgMGwuMDk0LS4zMTlhMS44NzMgMS44NzMgMCAwMTIuNjkzLTEuMTE1bC4yOTEuMTZjLjc2NC40MTUgMS42LS40MiAxLjE4NC0xLjE4NWwtLjE1OS0uMjkxYTEuODczIDEuODczIDAgMDExLjExNi0yLjY5M2wuMzE4LS4wOTRjLjgzNS0uMjQ2LjgzNS0xLjQyOCAwLTEuNjc0bC0uMzE5LS4wOTRhMS44NzMgMS44NzMgMCAwMS0xLjExNS0yLjY5MmwuMTYtLjI5MmMuNDE1LS43NjQtLjQyLTEuNi0xLjE4NS0xLjE4NGwtLjI5MS4xNTlBMS44NzMgMS44NzMgMCAwMTguOTMgMS45NDVsLS4wOTQtLjMxOXptLTIuNjMzLS4yODNjLjUyNy0xLjc5IDMuMDY1LTEuNzkgMy41OTIgMGwuMDk0LjMxOWEuODczLjg3MyAwIDAwMS4yNTUuNTJsLjI5Mi0uMTZjMS42NC0uODkyIDMuNDM0LjkwMSAyLjU0IDIuNTQxbC0uMTU5LjI5MmEuODczLjg3MyAwIDAwLjUyIDEuMjU1bC4zMTkuMDk0YzEuNzkuNTI3IDEuNzkgMy4wNjUgMCAzLjU5MmwtLjMxOS4wOTRhLjg3My44NzMgMCAwMC0uNTIgMS4yNTVsLjE2LjI5MmMuODkzIDEuNjQtLjkwMiAzLjQzNC0yLjU0MSAyLjU0bC0uMjkyLS4xNTlhLjg3My44NzMgMCAwMC0xLjI1NS41MmwtLjA5NC4zMTljLS41MjcgMS43OS0zLjA2NSAxLjc5LTMuNTkyIDBsLS4wOTQtLjMxOWEuODczLjg3MyAwIDAwLTEuMjU1LS41MmwtLjI5Mi4xNmMtMS42NC44OTMtMy40MzMtLjkwMi0yLjU0LTIuNTQxbC4xNTktLjI5MmEuODczLjg3MyAwIDAwLS41Mi0xLjI1NWwtLjMxOS0uMDk0Yy0xLjc5LS41MjctMS43OS0zLjA2NSAwLTMuNTkybC4zMTktLjA5NGEuODczLjg3MyAwIDAwLjUyLTEuMjU1bC0uMTYtLjI5MmMtLjg5Mi0xLjY0LjkwMi0zLjQzMyAyLjU0MS0yLjU0bC4yOTIuMTU5YS44NzMuODczIDAgMDAxLjI1NS0uNTJsLjA5NC0uMzE5elwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNOCA1Ljc1NGEyLjI0NiAyLjI0NiAwIDEwMCA0LjQ5MiAyLjI0NiAyLjI0NiAwIDAwMC00LjQ5MnpNNC43NTQgOGEzLjI0NiAzLjI0NiAwIDExNi40OTIgMCAzLjI0NiAzLjI0NiAwIDAxLTYuNDkyIDB6XCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgICAgd2lkdGg6IDMzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAke3NpZGViYXJIZWlnaHR9cHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl19 */\n/*@ sourceURL=/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Dashboard/Sidebar.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=_app.js.58a47293d1a2771e6dcb.hot-update.js.map