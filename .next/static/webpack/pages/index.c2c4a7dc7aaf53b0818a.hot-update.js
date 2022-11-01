"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hymns/AllHymns/Hymn/Alert/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/Hymns/AllHymns/Hymn/Alert/index.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Hymns/AllHymns/Hymn/Alert/styles.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Dan\\Desktop\\React Projects\\mcc\\src\\components\\Hymns\\AllHymns\\Hymn\\Alert\\index.tsx",
    _s = $RefreshSig$();






const AlertDialog = ({
  open,
  handleClose
}) => {
  _s();

  const s = (0,_styles__WEBPACK_IMPORTED_MODULE_1__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    className: s.dialog,
    open: open,
    onClose: handleClose,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {
      className: s.dialogBackground,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
        padding: 4,
        boxShadow: 4,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
          marginBottom: 2,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            className: s.title,
            children: "Sorry"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            className: s.content,
            children: "Someone has already logged this Hymn for this date."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
          margin: 1,
          marginTop: 6,
          display: "flex",
          justifyContent: "flex-end",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: s.okButton,
            variant: "contained",
            color: "primary",
            onClick: handleClose,
            children: "Ok"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

_s(AlertDialog, "xDGQz9pzcJ4OC278GhkVT5ePP5o=", false, function () {
  return [_styles__WEBPACK_IMPORTED_MODULE_1__.default];
});

_c = AlertDialog;
/* harmony default export */ __webpack_exports__["default"] = (AlertDialog);

var _c;

$RefreshReg$(_c, "AlertDialog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzJjNGE3ZGM3YWFmNTNiMDgxOGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTs7O0FBT0EsTUFBTU8sV0FBdUMsR0FBRyxDQUFDO0FBQy9DQyxFQUFBQSxJQUQrQztBQUUvQ0MsRUFBQUE7QUFGK0MsQ0FBRCxLQUdWO0FBQUE7O0FBQ3BDLFFBQU1DLENBQUMsR0FBR0osZ0RBQVMsRUFBbkI7QUFFQSxzQkFDRSw4REFBQyxvREFBRDtBQUFPLGFBQVMsRUFBRUksQ0FBQyxDQUFDQyxNQUFwQjtBQUE0QixRQUFJLEVBQUVILElBQWxDO0FBQXdDLFdBQU8sRUFBRUMsV0FBakQ7QUFBQSwyQkFDRSw4REFBQyxvREFBRDtBQUFPLGVBQVMsRUFBRUMsQ0FBQyxDQUFDRSxnQkFBcEI7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFLLGVBQU8sRUFBRSxDQUFkO0FBQWlCLGlCQUFTLEVBQUUsQ0FBNUI7QUFBQSxnQ0FDRSw4REFBQyxrREFBRDtBQUFLLHNCQUFZLEVBQUUsQ0FBbkI7QUFBQSxpQ0FDRSw4REFBQyx5REFBRDtBQUFZLHFCQUFTLEVBQUVGLENBQUMsQ0FBQ0csS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUUsOERBQUMsa0RBQUQ7QUFBQSxpQ0FDRSw4REFBQyx5REFBRDtBQUFZLHFCQUFTLEVBQUVILENBQUMsQ0FBQ0ksT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBV0UsOERBQUMsa0RBQUQ7QUFDRSxnQkFBTSxFQUFFLENBRFY7QUFFRSxtQkFBUyxFQUFFLENBRmI7QUFHRSxpQkFBTyxFQUFDLE1BSFY7QUFJRSx3QkFBYyxFQUFDLFVBSmpCO0FBQUEsaUNBTUUsOERBQUMscURBQUQ7QUFDRSxxQkFBUyxFQUFFSixDQUFDLENBQUNLLFFBRGY7QUFFRSxtQkFBTyxFQUFDLFdBRlY7QUFHRSxpQkFBSyxFQUFDLFNBSFI7QUFJRSxtQkFBTyxFQUFFTixXQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUNELENBdkNEOztHQUFNRjtVQUlNRDs7O0tBSk5DO0FBeUNOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0h5bW5zL0FsbEh5bW5zL0h5bW4vQWxlcnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgUGFwZXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBNb2RhbCxcclxuICBCdXR0b24sXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5pbnRlcmZhY2UgQWxlcnREaWFsb2dQcm9wcyB7XHJcbiAgb3BlbjogYm9vbGVhbjtcclxuICBoYW5kbGVDbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQWxlcnREaWFsb2c6IFJlYWN0LkZDPEFsZXJ0RGlhbG9nUHJvcHM+ID0gKHtcclxuICBvcGVuLFxyXG4gIGhhbmRsZUNsb3NlLFxyXG59OiBBbGVydERpYWxvZ1Byb3BzKTogUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCBzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWwgY2xhc3NOYW1lPXtzLmRpYWxvZ30gb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzLmRpYWxvZ0JhY2tncm91bmR9PlxyXG4gICAgICAgIDxCb3ggcGFkZGluZz17NH0gYm94U2hhZG93PXs0fT5cclxuICAgICAgICAgIDxCb3ggbWFyZ2luQm90dG9tPXsyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzLnRpdGxlfT5cclxuICAgICAgICAgICAgICBTb3JyeVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17cy5jb250ZW50fT5cclxuICAgICAgICAgICAgICBTb21lb25lIGhhcyBhbHJlYWR5IGxvZ2dlZCB0aGlzIEh5bW4gZm9yIHRoaXMgZGF0ZS5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIG1hcmdpbj17MX1cclxuICAgICAgICAgICAgbWFyZ2luVG9wPXs2fVxyXG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLm9rQnV0dG9ufVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBPa1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnREaWFsb2c7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIk1vZGFsIiwiQnV0dG9uIiwidXNlU3R5bGVzIiwiQWxlcnREaWFsb2ciLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJzIiwiZGlhbG9nIiwiZGlhbG9nQmFja2dyb3VuZCIsInRpdGxlIiwiY29udGVudCIsIm9rQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==