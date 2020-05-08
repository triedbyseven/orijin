webpackHotUpdate("static/development/pages/dashboard.js",{

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]) + " " + "sidebar p-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]) + " " + "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/dashboard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/dashboard/products",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Products"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]) + " " + "bi bi-tag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M.5 2A1.5 1.5 0 012 .5h4.586a1.5 1.5 0 011.06.44l7 7a1.5 1.5 0 010 2.12l-4.585 4.586a1.5 1.5 0 01-2.122 0l-7-7A1.5 1.5 0 01.5 6.586V2zM2 1.5a.5.5 0 00-.5.5v4.586a.5.5 0 00.146.353l7 7a.5.5 0 00.708 0l4.585-4.585a.5.5 0 000-.708l-7-7a.5.5 0 00-.353-.146H2z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    d: "M2.5 4.5a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }))))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Orders", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]) + " " + "bi bi-inbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M3.81 4.063A1.5 1.5 0 014.98 3.5h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 01-.78.624l-3.7-4.624a.5.5 0 00-.39-.188H4.98a.5.5 0 00-.39.188L.89 9.312a.5.5 0 11-.78-.624l3.7-4.625z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    d: "M.125 8.67A.5.5 0 01.5 8.5H6a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124a1.5 1.5 0 01-1.489 1.314H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zm.941.83l.32 2.562a.5.5 0 00.497.438h12.234a.5.5 0 00.496-.438l.32-2.562H10.45a2.5 2.5 0 01-4.9 0H1.066z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "Online Store", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]) + " " + "bi bi-house",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    d: "M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Settings", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]) + " " + "bi bi-gear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 014.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 01-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 011.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 012.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 012.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 011.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 01-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 018.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 001.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 00.52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 00-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 00-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 00-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 00-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 00.52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 001.255-.52l.094-.319z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    d: "M8 5.754a2.246 2.246 0 100 4.492 2.246 2.246 0 000-4.492zM4.754 8a3.246 3.246 0 116.492 0 3.246 3.246 0 01-6.492 0z",
    clipRule: "evenodd",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3825869707", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3825869707",
    dynamic: [sidebarHeight],
    __self: _this
  }, ".sidebar.__jsx-style-dynamic-selector{width:335px;height:".concat(sidebarHeight, "px;border-right:1px solid #eee;}a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvRGV2ZWxvcG1lbnQvTmV4dGpzL2xhbmRpbmctcGFnZS1wcm9kY3V0LTAwMS9jb21wb25lbnRzL0Rhc2hib2FyZC9TaWRlYmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SFMsQUFHeUIsQUFLUyxZQUppQixzQ0FDVixBQUk5Qiw0QkFIQSIsImZpbGUiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL0RldmVsb3BtZW50L05leHRqcy9sYW5kaW5nLXBhZ2UtcHJvZGN1dC0wMDEvY29tcG9uZW50cy9EYXNoYm9hcmQvU2lkZWJhci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFNpZGViYXI6IFJlYWN0LlNGQyA9ICgpID0+IHtcbiAgY29uc3QgW3NpZGViYXJIZWlnaHQsIHVwZGF0ZVNpZGViYXJIZWlnaHRdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVTaWRlYmFySGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhciBwLTNcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQvcHJvZHVjdHNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGE+UHJvZHVjdHM8L2E+XG5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktdGFnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgZD1cIk0uNSAyQTEuNSAxLjUgMCAwMTIgLjVoNC41ODZhMS41IDEuNSAwIDAxMS4wNi40NGw3IDdhMS41IDEuNSAwIDAxMCAyLjEybC00LjU4NSA0LjU4NmExLjUgMS41IDAgMDEtMi4xMjIgMGwtNy03QTEuNSAxLjUgMCAwMS41IDYuNTg2VjJ6TTIgMS41YS41LjUgMCAwMC0uNS41djQuNTg2YS41LjUgMCAwMC4xNDYuMzUzbDcgN2EuNS41IDAgMDAuNzA4IDBsNC41ODUtNC41ODVhLjUuNSAwIDAwMC0uNzA4bC03LTdhLjUuNSAwIDAwLS4zNTMtLjE0NkgyelwiXG4gICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTIuNSA0LjVhMiAyIDAgMTE0IDAgMiAyIDAgMDEtNCAwem0yLTFhMSAxIDAgMTAwIDIgMSAxIDAgMDAwLTJ6XCJcbiAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgT3JkZXJzXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWluYm94XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0zLjgxIDQuMDYzQTEuNSAxLjUgMCAwMTQuOTggMy41aDYuMDRhMS41IDEuNSAwIDAxMS4xNy41NjNsMy43IDQuNjI1YS41LjUgMCAwMS0uNzguNjI0bC0zLjctNC42MjRhLjUuNSAwIDAwLS4zOS0uMTg4SDQuOThhLjUuNSAwIDAwLS4zOS4xODhMLjg5IDkuMzEyYS41LjUgMCAxMS0uNzgtLjYyNGwzLjctNC42MjV6XCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0uMTI1IDguNjdBLjUuNSAwIDAxLjUgOC41SDZhLjUuNSAwIDAxLjUuNSAxLjUgMS41IDAgMDAzIDAgLjUuNSAwIDAxLjUtLjVoNS41YS41LjUgMCAwMS40OTYuNTYybC0uMzkgMy4xMjRhMS41IDEuNSAwIDAxLTEuNDg5IDEuMzE0SDEuODgzYTEuNSAxLjUgMCAwMS0xLjQ4OS0xLjMxNGwtLjM5LTMuMTI0YS41LjUgMCAwMS4xMjEtLjM5M3ptLjk0MS44M2wuMzIgMi41NjJhLjUuNSAwIDAwLjQ5Ny40MzhoMTIuMjM0YS41LjUgMCAwMC40OTYtLjQzOGwuMzItMi41NjJIMTAuNDVhMi41IDIuNSAwIDAxLTQuOSAwSDEuMDY2elwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgT25saW5lIFN0b3JlXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWhvdXNlXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0yIDEzLjVWN2gxdjYuNWEuNS41IDAgMDAuNS41aDlhLjUuNSAwIDAwLjUtLjVWN2gxdjYuNWExLjUgMS41IDAgMDEtMS41IDEuNWgtOUExLjUgMS41IDAgMDEyIDEzLjV6bTExLTExVjZsLTItMlYyLjVhLjUuNSAwIDAxLjUtLjVoMWEuNS41IDAgMDEuNS41elwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNNy4yOTMgMS41YTEgMSAwIDAxMS40MTQgMGw2LjY0NyA2LjY0NmEuNS41IDAgMDEtLjcwOC43MDhMOCAyLjIwNyAxLjM1NCA4Ljg1NGEuNS41IDAgMTEtLjcwOC0uNzA4TDcuMjkzIDEuNXpcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWdlYXJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTguODM3IDEuNjI2Yy0uMjQ2LS44MzUtMS40MjgtLjgzNS0xLjY3NCAwbC0uMDk0LjMxOUExLjg3MyAxLjg3MyAwIDAxNC4zNzcgMy4wNmwtLjI5Mi0uMTZjLS43NjQtLjQxNS0xLjYuNDItMS4xODQgMS4xODVsLjE1OS4yOTJhMS44NzMgMS44NzMgMCAwMS0xLjExNSAyLjY5MmwtLjMxOS4wOTRjLS44MzUuMjQ2LS44MzUgMS40MjggMCAxLjY3NGwuMzE5LjA5NGExLjg3MyAxLjg3MyAwIDAxMS4xMTUgMi42OTNsLS4xNi4yOTFjLS40MTUuNzY0LjQyIDEuNiAxLjE4NSAxLjE4NGwuMjkyLS4xNTlhMS44NzMgMS44NzMgMCAwMTIuNjkyIDEuMTE2bC4wOTQuMzE4Yy4yNDYuODM1IDEuNDI4LjgzNSAxLjY3NCAwbC4wOTQtLjMxOWExLjg3MyAxLjg3MyAwIDAxMi42OTMtMS4xMTVsLjI5MS4xNmMuNzY0LjQxNSAxLjYtLjQyIDEuMTg0LTEuMTg1bC0uMTU5LS4yOTFhMS44NzMgMS44NzMgMCAwMTEuMTE2LTIuNjkzbC4zMTgtLjA5NGMuODM1LS4yNDYuODM1LTEuNDI4IDAtMS42NzRsLS4zMTktLjA5NGExLjg3MyAxLjg3MyAwIDAxLTEuMTE1LTIuNjkybC4xNi0uMjkyYy40MTUtLjc2NC0uNDItMS42LTEuMTg1LTEuMTg0bC0uMjkxLjE1OUExLjg3MyAxLjg3MyAwIDAxOC45MyAxLjk0NWwtLjA5NC0uMzE5em0tMi42MzMtLjI4M2MuNTI3LTEuNzkgMy4wNjUtMS43OSAzLjU5MiAwbC4wOTQuMzE5YS44NzMuODczIDAgMDAxLjI1NS41MmwuMjkyLS4xNmMxLjY0LS44OTIgMy40MzQuOTAxIDIuNTQgMi41NDFsLS4xNTkuMjkyYS44NzMuODczIDAgMDAuNTIgMS4yNTVsLjMxOS4wOTRjMS43OS41MjcgMS43OSAzLjA2NSAwIDMuNTkybC0uMzE5LjA5NGEuODczLjg3MyAwIDAwLS41MiAxLjI1NWwuMTYuMjkyYy44OTMgMS42NC0uOTAyIDMuNDM0LTIuNTQxIDIuNTRsLS4yOTItLjE1OWEuODczLjg3MyAwIDAwLTEuMjU1LjUybC0uMDk0LjMxOWMtLjUyNyAxLjc5LTMuMDY1IDEuNzktMy41OTIgMGwtLjA5NC0uMzE5YS44NzMuODczIDAgMDAtMS4yNTUtLjUybC0uMjkyLjE2Yy0xLjY0Ljg5My0zLjQzMy0uOTAyLTIuNTQtMi41NDFsLjE1OS0uMjkyYS44NzMuODczIDAgMDAtLjUyLTEuMjU1bC0uMzE5LS4wOTRjLTEuNzktLjUyNy0xLjc5LTMuMDY1IDAtMy41OTJsLjMxOS0uMDk0YS44NzMuODczIDAgMDAuNTItMS4yNTVsLS4xNi0uMjkyYy0uODkyLTEuNjQuOTAyLTMuNDMzIDIuNTQxLTIuNTRsLjI5Mi4xNTlhLjg3My44NzMgMCAwMDEuMjU1LS41MmwuMDk0LS4zMTl6XCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk04IDUuNzU0YTIuMjQ2IDIuMjQ2IDAgMTAwIDQuNDkyIDIuMjQ2IDIuMjQ2IDAgMDAwLTQuNDkyek00Ljc1NCA4YTMuMjQ2IDMuMjQ2IDAgMTE2LjQ5MiAwIDMuMjQ2IDMuMjQ2IDAgMDEtNi40OTIgMHpcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuc2lkZWJhciB7XG4gICAgICAgICAgICB3aWR0aDogMzM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7c2lkZWJhckhlaWdodH1weDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl19 */\n/*@ sourceURL=/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Dashboard/Sidebar.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=dashboard.js.ebd4a7cc8967ed05d451.hot-update.js.map