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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
    className: s.dialog,
    open: open,
    onClose: handleClose,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {
      className: s.dialogBackground,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
        padding: 4,
        boxShadow: 4,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            className: s.title,
            children: "Sorry, someone has already logged this Hymn for this date."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
          margin: 1,
          marginTop: 8,
          display: "flex",
          justifyContent: "flex-end",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: s.cancelButton,
            variant: "contained",
            onClick: handleClose,
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: s.quickAddHymnButton,
            variant: "contained",
            color: "primary",
            onClick: submitForm,
            children: "Add"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDQ2Nzk1YTcxODQ0NTIyNzNhMmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTs7O0FBT0EsTUFBTU8sV0FBdUMsR0FBRyxDQUFDO0FBQy9DQyxFQUFBQSxJQUQrQztBQUUvQ0MsRUFBQUE7QUFGK0MsQ0FBRCxLQUdWO0FBQUE7O0FBQ3BDLFFBQU1DLENBQUMsR0FBR0osZ0RBQVMsRUFBbkI7QUFFQSxzQkFDRSw4REFBQyxxREFBRDtBQUFRLGFBQVMsRUFBRUksQ0FBQyxDQUFDQyxNQUFyQjtBQUE2QixRQUFJLEVBQUVILElBQW5DO0FBQXlDLFdBQU8sRUFBRUMsV0FBbEQ7QUFBQSwyQkFVRSw4REFBQyxvREFBRDtBQUFPLGVBQVMsRUFBRUMsQ0FBQyxDQUFDRSxnQkFBcEI7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFLLGVBQU8sRUFBRSxDQUFkO0FBQWlCLGlCQUFTLEVBQUUsQ0FBNUI7QUFBQSxnQ0FDRSw4REFBQyxrREFBRDtBQUFBLGlDQUNFLDhEQUFDLHlEQUFEO0FBQVkscUJBQVMsRUFBRUYsQ0FBQyxDQUFDRyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFNRSw4REFBQyxrREFBRDtBQUNFLGdCQUFNLEVBQUUsQ0FEVjtBQUVFLG1CQUFTLEVBQUUsQ0FGYjtBQUdFLGlCQUFPLEVBQUMsTUFIVjtBQUlFLHdCQUFjLEVBQUMsVUFKakI7QUFBQSxrQ0FNRSw4REFBQyxxREFBRDtBQUNFLHFCQUFTLEVBQUVILENBQUMsQ0FBQ0ksWUFEZjtBQUVFLG1CQUFPLEVBQUMsV0FGVjtBQUdFLG1CQUFPLEVBQUVMLFdBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsZUFhRSw4REFBQyxxREFBRDtBQUNFLHFCQUFTLEVBQUVDLENBQUMsQ0FBQ0ssa0JBRGY7QUFFRSxtQkFBTyxFQUFDLFdBRlY7QUFHRSxpQkFBSyxFQUFDLFNBSFI7QUFJRSxtQkFBTyxFQUFFQyxVQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNENELENBbEREOztHQUFNVDtVQUlNRDs7O0tBSk5DO0FBb0ROLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0h5bW5zL0FsbEh5bW5zL0h5bW4vQWxlcnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgUGFwZXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBEaWFsb2csXHJcbiAgRGlhbG9nQWN0aW9ucyxcclxuICBEaWFsb2dDb250ZW50LFxyXG4gIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gIERpYWxvZ1RpdGxlLFxyXG4gIEJ1dHRvbixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcbmludGVyZmFjZSBBbGVydERpYWxvZ1Byb3BzIHtcclxuICBvcGVuOiBib29sZWFuO1xyXG4gIGhhbmRsZUNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBBbGVydERpYWxvZzogUmVhY3QuRkM8QWxlcnREaWFsb2dQcm9wcz4gPSAoe1xyXG4gIG9wZW4sXHJcbiAgaGFuZGxlQ2xvc2UsXHJcbn06IEFsZXJ0RGlhbG9nUHJvcHMpOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEaWFsb2cgY2xhc3NOYW1lPXtzLmRpYWxvZ30gb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICB7LyogPERpYWxvZ1RpdGxlPntcIlNvcnJ5XCJ9PC9EaWFsb2dUaXRsZT5cclxuICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgU29tZW9uZSBoYXMgYWxyZWFkeSBsb2dnZWQgdGhpcyBIeW1uIGZvciB0aGlzIGRhdGUuXHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5PazwvQnV0dG9uPlxyXG4gICAgICA8L0RpYWxvZ0FjdGlvbnM+ICovfVxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzLmRpYWxvZ0JhY2tncm91bmR9PlxyXG4gICAgICAgIDxCb3ggcGFkZGluZz17NH0gYm94U2hhZG93PXs0fT5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17cy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgU29ycnksIHNvbWVvbmUgaGFzIGFscmVhZHkgbG9nZ2VkIHRoaXMgSHltbiBmb3IgdGhpcyBkYXRlLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgbWFyZ2luPXsxfVxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A9ezh9XHJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuY2FuY2VsQnV0dG9ufVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLnF1aWNrQWRkSHltbkJ1dHRvbn1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvRGlhbG9nPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVydERpYWxvZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiRGlhbG9nIiwiQnV0dG9uIiwidXNlU3R5bGVzIiwiQWxlcnREaWFsb2ciLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJzIiwiZGlhbG9nIiwiZGlhbG9nQmFja2dyb3VuZCIsInRpdGxlIiwiY2FuY2VsQnV0dG9uIiwicXVpY2tBZGRIeW1uQnV0dG9uIiwic3VibWl0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=