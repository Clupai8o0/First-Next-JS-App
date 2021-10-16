"use strict";
self["webpackHotUpdate_N_E"]("pages/robots",{

/***/ "./pages/robots.js":
/*!*************************!*\
  !*** ./pages/robots.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_clupa_OneDrive_Documents_Projects_Web_dev_next_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_clupa_OneDrive_Documents_Projects_Web_dev_next_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_clupa_OneDrive_Documents_Projects_Web_dev_next_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_clupa_OneDrive_Documents_Projects_Web_dev_next_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\clupa\\OneDrive\\Documents\\Projects\\Web dev\\next-ssr\\pages\\robots.js",
    _this = undefined;






var Robots = function Robots(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: "Robots"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: props.robots.map(function (robot) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "robots/".concat(robot.id),
            children: robot.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, _this)
        }, robot.id, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, _this);
};

_c = Robots;
Robots.getInitialProps = /*#__PURE__*/(0,C_Users_clupa_OneDrive_Documents_Projects_Web_dev_next_ssr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_clupa_OneDrive_Documents_Projects_Web_dev_next_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
  var res, data;
  return C_Users_clupa_OneDrive_Documents_Projects_Web_dev_next_ssr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://jsonplaceholder.typicode.com/users");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", {
            robots: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Robots);

var _c;

$RefreshReg$(_c, "Robots");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9ib3RzLmMyYjM5MWYxZTA5OGY1ZmE4YTliLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFDekIsc0JBQ0M7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUMsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBS0M7QUFBQSxnQkFDRUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsS0FBRDtBQUFBLDRCQUNqQjtBQUFBLGlDQUNPLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksbUJBQVlBLEtBQUssQ0FBQ0MsRUFBbEIsQ0FBVjtBQUFBLHNCQUFtQ0QsS0FBSyxDQUFDRTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFAsV0FBU0YsS0FBSyxDQUFDQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBakI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFlQSxDQWhCRDs7S0FBTUw7QUFrQk5BLE1BQU0sQ0FBQ08sZUFBUCx3VUFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTlIseURBQUssQ0FBQyw0Q0FBRCxDQURDOztBQUFBO0FBQ2xCUyxVQUFBQSxHQURrQjtBQUFBO0FBQUEsaUJBRUxBLEdBQUcsQ0FBQ0MsSUFBSixFQUZLOztBQUFBO0FBRWxCQyxVQUFBQSxJQUZrQjtBQUd2QkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFIdUIsMkNBS2pCO0FBQ05SLFlBQUFBLE1BQU0sRUFBRVE7QUFERixXQUxpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF6QjtBQVVBLCtEQUFlVixNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JvYm90cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcblxyXG5jb25zdCBSb2JvdHMgPSAocHJvcHMpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGgxPlJvYm90czwvaDE+XHJcblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0PGJ1dHRvbj5Ib21lPC9idXR0b24+XHJcblx0XHRcdDwvTGluaz5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7cHJvcHMucm9ib3RzLm1hcCgocm9ib3QpID0+IChcclxuXHRcdFx0XHRcdDxsaSBrZXk9e3JvYm90LmlkfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YHJvYm90cy8ke3JvYm90LmlkfWB9Pntyb2JvdC5uYW1lfTwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcblJvYm90cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIik7XHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRyb2JvdHM6IGRhdGEsXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvYm90cztcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJmZXRjaCIsIlJvYm90cyIsInByb3BzIiwicm9ib3RzIiwibWFwIiwicm9ib3QiLCJpZCIsIm5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9