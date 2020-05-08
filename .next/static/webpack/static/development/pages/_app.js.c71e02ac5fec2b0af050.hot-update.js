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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]) + " " + "sidebar p-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]) + " " + "list-group",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Products"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]) + " " + "bi bi-tag",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }))))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Orders", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]) + " " + "bi bi-inbox",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "Online Store", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]) + " " + "bi bi-house",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  })))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]) + " " + "list-group-item d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Settings", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]) + " " + "bi bi-gear",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2696944388", [sidebarHeight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2696944388",
    dynamic: [sidebarHeight],
    __self: _this
  }, ".sidebar.__jsx-style-dynamic-selector{width:335px;height:".concat(sidebarHeight, "px;border-right:1px solid #eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvRGV2ZWxvcG1lbnQvTmV4dGpzL2xhbmRpbmctcGFnZS1wcm9kY3V0LTAwMS9jb21wb25lbnRzL0Rhc2hib2FyZC9TaWRlYmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SFMsQUFHeUIsWUFDMEIsc0NBQ1YsNEJBQzlCIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvRGV2ZWxvcG1lbnQvTmV4dGpzL2xhbmRpbmctcGFnZS1wcm9kY3V0LTAwMS9jb21wb25lbnRzL0Rhc2hib2FyZC9TaWRlYmFyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgU2lkZWJhcjogUmVhY3QuU0ZDID0gKCkgPT4ge1xuICBjb25zdCBbc2lkZWJhckhlaWdodCwgdXBkYXRlU2lkZWJhckhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZVNpZGViYXJIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyIHAtM1wiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC9wcm9kdWN0c1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8YT5Qcm9kdWN0czwvYT5cblxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS10YWdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICBkPVwiTS41IDJBMS41IDEuNSAwIDAxMiAuNWg0LjU4NmExLjUgMS41IDAgMDExLjA2LjQ0bDcgN2ExLjUgMS41IDAgMDEwIDIuMTJsLTQuNTg1IDQuNTg2YTEuNSAxLjUgMCAwMS0yLjEyMiAwbC03LTdBMS41IDEuNSAwIDAxLjUgNi41ODZWMnpNMiAxLjVhLjUuNSAwIDAwLS41LjV2NC41ODZhLjUuNSAwIDAwLjE0Ni4zNTNsNyA3YS41LjUgMCAwMC43MDggMGw0LjU4NS00LjU4NWEuNS41IDAgMDAwLS43MDhsLTctN2EuNS41IDAgMDAtLjM1My0uMTQ2SDJ6XCJcbiAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDQuNWEyIDIgMCAxMTQgMCAyIDIgMCAwMS00IDB6bTItMWExIDEgMCAxMDAgMiAxIDEgMCAwMDAtMnpcIlxuICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICBPcmRlcnNcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktaW5ib3hcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTMuODEgNC4wNjNBMS41IDEuNSAwIDAxNC45OCAzLjVoNi4wNGExLjUgMS41IDAgMDExLjE3LjU2M2wzLjcgNC42MjVhLjUuNSAwIDAxLS43OC42MjRsLTMuNy00LjYyNGEuNS41IDAgMDAtLjM5LS4xODhINC45OGEuNS41IDAgMDAtLjM5LjE4OEwuODkgOS4zMTJhLjUuNSAwIDExLS43OC0uNjI0bDMuNy00LjYyNXpcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTS4xMjUgOC42N0EuNS41IDAgMDEuNSA4LjVINmEuNS41IDAgMDEuNS41IDEuNSAxLjUgMCAwMDMgMCAuNS41IDAgMDEuNS0uNWg1LjVhLjUuNSAwIDAxLjQ5Ni41NjJsLS4zOSAzLjEyNGExLjUgMS41IDAgMDEtMS40ODkgMS4zMTRIMS44ODNhMS41IDEuNSAwIDAxLTEuNDg5LTEuMzE0bC0uMzktMy4xMjRhLjUuNSAwIDAxLjEyMS0uMzkzem0uOTQxLjgzbC4zMiAyLjU2MmEuNS41IDAgMDAuNDk3LjQzOGgxMi4yMzRhLjUuNSAwIDAwLjQ5Ni0uNDM4bC4zMi0yLjU2MkgxMC40NWEyLjUgMi41IDAgMDEtNC45IDBIMS4wNjZ6XCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICBPbmxpbmUgU3RvcmVcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktaG91c2VcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTIgMTMuNVY3aDF2Ni41YS41LjUgMCAwMC41LjVoOWEuNS41IDAgMDAuNS0uNVY3aDF2Ni41YTEuNSAxLjUgMCAwMS0xLjUgMS41aC05QTEuNSAxLjUgMCAwMTIgMTMuNXptMTEtMTFWNmwtMi0yVjIuNWEuNS41IDAgMDEuNS0uNWgxYS41LjUgMCAwMS41LjV6XCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk03LjI5MyAxLjVhMSAxIDAgMDExLjQxNCAwbDYuNjQ3IDYuNjQ2YS41LjUgMCAwMS0uNzA4LjcwOEw4IDIuMjA3IDEuMzU0IDguODU0YS41LjUgMCAxMS0uNzA4LS43MDhMNy4yOTMgMS41elwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktZ2VhclwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNOC44MzcgMS42MjZjLS4yNDYtLjgzNS0xLjQyOC0uODM1LTEuNjc0IDBsLS4wOTQuMzE5QTEuODczIDEuODczIDAgMDE0LjM3NyAzLjA2bC0uMjkyLS4xNmMtLjc2NC0uNDE1LTEuNi40Mi0xLjE4NCAxLjE4NWwuMTU5LjI5MmExLjg3MyAxLjg3MyAwIDAxLTEuMTE1IDIuNjkybC0uMzE5LjA5NGMtLjgzNS4yNDYtLjgzNSAxLjQyOCAwIDEuNjc0bC4zMTkuMDk0YTEuODczIDEuODczIDAgMDExLjExNSAyLjY5M2wtLjE2LjI5MWMtLjQxNS43NjQuNDIgMS42IDEuMTg1IDEuMTg0bC4yOTItLjE1OWExLjg3MyAxLjg3MyAwIDAxMi42OTIgMS4xMTZsLjA5NC4zMThjLjI0Ni44MzUgMS40MjguODM1IDEuNjc0IDBsLjA5NC0uMzE5YTEuODczIDEuODczIDAgMDEyLjY5My0xLjExNWwuMjkxLjE2Yy43NjQuNDE1IDEuNi0uNDIgMS4xODQtMS4xODVsLS4xNTktLjI5MWExLjg3MyAxLjg3MyAwIDAxMS4xMTYtMi42OTNsLjMxOC0uMDk0Yy44MzUtLjI0Ni44MzUtMS40MjggMC0xLjY3NGwtLjMxOS0uMDk0YTEuODczIDEuODczIDAgMDEtMS4xMTUtMi42OTJsLjE2LS4yOTJjLjQxNS0uNzY0LS40Mi0xLjYtMS4xODUtMS4xODRsLS4yOTEuMTU5QTEuODczIDEuODczIDAgMDE4LjkzIDEuOTQ1bC0uMDk0LS4zMTl6bS0yLjYzMy0uMjgzYy41MjctMS43OSAzLjA2NS0xLjc5IDMuNTkyIDBsLjA5NC4zMTlhLjg3My44NzMgMCAwMDEuMjU1LjUybC4yOTItLjE2YzEuNjQtLjg5MiAzLjQzNC45MDEgMi41NCAyLjU0MWwtLjE1OS4yOTJhLjg3My44NzMgMCAwMC41MiAxLjI1NWwuMzE5LjA5NGMxLjc5LjUyNyAxLjc5IDMuMDY1IDAgMy41OTJsLS4zMTkuMDk0YS44NzMuODczIDAgMDAtLjUyIDEuMjU1bC4xNi4yOTJjLjg5MyAxLjY0LS45MDIgMy40MzQtMi41NDEgMi41NGwtLjI5Mi0uMTU5YS44NzMuODczIDAgMDAtMS4yNTUuNTJsLS4wOTQuMzE5Yy0uNTI3IDEuNzktMy4wNjUgMS43OS0zLjU5MiAwbC0uMDk0LS4zMTlhLjg3My44NzMgMCAwMC0xLjI1NS0uNTJsLS4yOTIuMTZjLTEuNjQuODkzLTMuNDMzLS45MDItMi41NC0yLjU0MWwuMTU5LS4yOTJhLjg3My44NzMgMCAwMC0uNTItMS4yNTVsLS4zMTktLjA5NGMtMS43OS0uNTI3LTEuNzktMy4wNjUgMC0zLjU5MmwuMzE5LS4wOTRhLjg3My44NzMgMCAwMC41Mi0xLjI1NWwtLjE2LS4yOTJjLS44OTItMS42NC45MDItMy40MzMgMi41NDEtMi41NGwuMjkyLjE1OWEuODczLjg3MyAwIDAwMS4yNTUtLjUybC4wOTQtLjMxOXpcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTggNS43NTRhMi4yNDYgMi4yNDYgMCAxMDAgNC40OTIgMi4yNDYgMi4yNDYgMCAwMDAtNC40OTJ6TTQuNzU0IDhhMy4yNDYgMy4yNDYgMCAxMTYuNDkyIDAgMy4yNDYgMy4yNDYgMCAwMS02LjQ5MiAwelwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogJHtzaWRlYmFySGVpZ2h0fXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdfQ== */\n/*@ sourceURL=/Applications/MAMP/htdocs/Development/Nextjs/landing-page-prodcut-001/components/Dashboard/Sidebar.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=_app.js.c71e02ac5fec2b0af050.hot-update.js.map