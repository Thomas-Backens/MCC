"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hymns/AllHymns/Hymn/QuickAdd/index.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Hymns/AllHymns/Hymn/QuickAdd/index.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/Hymns/AllHymns/Hymn/QuickAdd/styles.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Dan\\Desktop\\React Projects\\mcc\\src\\components\\Hymns\\AllHymns\\Hymn\\QuickAdd\\index.tsx",
    _s = $RefreshSig$();









const QuickAddModal = ({
  open,
  handleClose,
  quickAddMutation
}) => {
  _s();

  const s = (0,_styles__WEBPACK_IMPORTED_MODULE_3__.default)();
  const initialValues = {
    name: "",
    date: moment__WEBPACK_IMPORTED_MODULE_4___default()().format("MM/DD/YY")
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Modal, {
    className: s.modal,
    BackdropComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Backdrop,
    closeAfterTransition: true,
    BackdropProps: {
      timeout: 500
    },
    onClose: handleClose,
    open: open,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Fade, {
      in: open,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Paper, {
        className: s.modalBackground,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
          padding: 4,
          boxShadow: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
            initialValues: initialValues,
            validate: values => {
              const errors = {};

              if (!values.date) {
                errors.date = "Date is required";
              }

              return errors;
            },
            onSubmit: values => {
              quickAddMutation(values);
              handleClose();
            },
            children: ({
              submitForm
            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                  className: s.title,
                  children: "Quick Add"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
                marginTop: 4,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                  className: s.field,
                  component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__.TextField,
                  placeholder: "Your name",
                  type: "text",
                  name: "name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
                marginTop: 2,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                  className: s.field,
                  style: {
                    width: 242
                  },
                  component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__.TextField,
                  placeholder: "Date",
                  type: "text",
                  name: "date"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
                margin: 1,
                marginTop: 8,
                display: "flex",
                justifyContent: "flex-end",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
                  className: s.cancelButton,
                  variant: "contained",
                  onClick: handleClose,
                  children: "Cancel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
                  className: s.quickAddHymnButton,
                  variant: "contained",
                  color: "primary",
                  onClick: submitForm,
                  children: "Add"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

_s(QuickAddModal, "xDGQz9pzcJ4OC278GhkVT5ePP5o=", false, function () {
  return [_styles__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = QuickAddModal;
/* harmony default export */ __webpack_exports__["default"] = (QuickAddModal);

var _c;

$RefreshReg$(_c, "QuickAddModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTU2NzgxMzNiMjM3NDIzODg2MzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7OztBQWFBLE1BQU1jLGFBQTJDLEdBQUcsQ0FBQztBQUNuREMsRUFBQUEsSUFEbUQ7QUFFbkRDLEVBQUFBLFdBRm1EO0FBR25EQyxFQUFBQTtBQUhtRCxDQUFELEtBSVo7QUFBQTs7QUFDdEMsUUFBTUMsQ0FBQyxHQUFHTixnREFBUyxFQUFuQjtBQUVBLFFBQU1PLGFBR0wsR0FBRztBQUNGQyxJQUFBQSxJQUFJLEVBQUUsRUFESjtBQUVGQyxJQUFBQSxJQUFJLEVBQUVSLDZDQUFNLEdBQUdTLE1BQVQsQ0FBZ0IsVUFBaEI7QUFGSixHQUhKO0FBUUEsc0JBQ0UsOERBQUMsb0RBQUQ7QUFDRSxhQUFTLEVBQUVKLENBQUMsQ0FBQ0ssS0FEZjtBQUVFLHFCQUFpQixFQUFFZix1REFGckI7QUFHRSx3QkFBb0IsTUFIdEI7QUFJRSxpQkFBYSxFQUFFO0FBQ2JnQixNQUFBQSxPQUFPLEVBQUU7QUFESSxLQUpqQjtBQU9FLFdBQU8sRUFBRVIsV0FQWDtBQVFFLFFBQUksRUFBRUQsSUFSUjtBQUFBLDJCQVVFLDhEQUFDLG1EQUFEO0FBQU0sUUFBRSxFQUFFQSxJQUFWO0FBQUEsNkJBQ0UsOERBQUMsb0RBQUQ7QUFBTyxpQkFBUyxFQUFFRyxDQUFDLENBQUNPLGVBQXBCO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBSyxpQkFBTyxFQUFFLENBQWQ7QUFBaUIsbUJBQVMsRUFBRSxDQUE1QjtBQUFBLGlDQUNFLDhEQUFDLDBDQUFEO0FBQ0UseUJBQWEsRUFBRU4sYUFEakI7QUFFRSxvQkFBUSxFQUFHTyxNQUFELElBQVk7QUFDcEIsb0JBQU1DLE1BR0osR0FBRyxFQUhMOztBQUtBLGtCQUFJLENBQUNELE1BQU0sQ0FBQ0wsSUFBWixFQUFrQjtBQUNoQk0sZ0JBQUFBLE1BQU0sQ0FBQ04sSUFBUCxHQUFjLGtCQUFkO0FBQ0Q7O0FBQ0QscUJBQU9NLE1BQVA7QUFDRCxhQVpIO0FBYUUsb0JBQVEsRUFBR0QsTUFBRCxJQUFvQjtBQUM1QlQsY0FBQUEsZ0JBQWdCLENBQUNTLE1BQUQsQ0FBaEI7QUFDQVYsY0FBQUEsV0FBVztBQUNaLGFBaEJIO0FBQUEsc0JBa0JHLENBQUM7QUFBRVksY0FBQUE7QUFBRixhQUFELGtCQUNDLDhEQUFDLHdDQUFEO0FBQUEsc0NBQ0UsOERBQUMsa0RBQUQ7QUFBQSx1Q0FDRSw4REFBQyx5REFBRDtBQUFZLDJCQUFTLEVBQUVWLENBQUMsQ0FBQ1csS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBSUUsOERBQUMsa0RBQUQ7QUFBSyx5QkFBUyxFQUFFLENBQWhCO0FBQUEsdUNBQ0UsOERBQUMseUNBQUQ7QUFDRSwyQkFBUyxFQUFFWCxDQUFDLENBQUNZLEtBRGY7QUFFRSwyQkFBUyxFQUFFbkIseURBRmI7QUFHRSw2QkFBVyxFQUFDLFdBSGQ7QUFJRSxzQkFBSSxFQUFDLE1BSlA7QUFLRSxzQkFBSSxFQUFDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkYsZUFhRSw4REFBQyxrREFBRDtBQUFLLHlCQUFTLEVBQUUsQ0FBaEI7QUFBQSx1Q0FDRSw4REFBQyx5Q0FBRDtBQUNFLDJCQUFTLEVBQUVPLENBQUMsQ0FBQ1ksS0FEZjtBQUVFLHVCQUFLLEVBQUU7QUFBRUMsb0JBQUFBLEtBQUssRUFBRTtBQUFULG1CQUZUO0FBR0UsMkJBQVMsRUFBRXBCLHlEQUhiO0FBSUUsNkJBQVcsRUFBQyxNQUpkO0FBS0Usc0JBQUksRUFBQyxNQUxQO0FBTUUsc0JBQUksRUFBQztBQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWJGLGVBdUJFLDhEQUFDLGtEQUFEO0FBQ0Usc0JBQU0sRUFBRSxDQURWO0FBRUUseUJBQVMsRUFBRSxDQUZiO0FBR0UsdUJBQU8sRUFBQyxNQUhWO0FBSUUsOEJBQWMsRUFBQyxVQUpqQjtBQUFBLHdDQU1FLDhEQUFDLHFEQUFEO0FBQ0UsMkJBQVMsRUFBRU8sQ0FBQyxDQUFDYyxZQURmO0FBRUUseUJBQU8sRUFBQyxXQUZWO0FBR0UseUJBQU8sRUFBRWhCLFdBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTkYsZUFhRSw4REFBQyxxREFBRDtBQUNFLDJCQUFTLEVBQUVFLENBQUMsQ0FBQ2Usa0JBRGY7QUFFRSx5QkFBTyxFQUFDLFdBRlY7QUFHRSx1QkFBSyxFQUFDLFNBSFI7QUFJRSx5QkFBTyxFQUFFTCxVQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFzRkQsQ0FyR0Q7O0dBQU1kO1VBS01GOzs7S0FMTkU7QUF1R04sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSHltbnMvQWxsSHltbnMvSHltbi9RdWlja0FkZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgTW9kYWwsXHJcbiAgUGFwZXIsXHJcbiAgQmFja2Ryb3AsXHJcbiAgRmFkZSxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiZm9ybWlrLW1hdGVyaWFsLXVpXCI7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIFZhbHVlcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRhdGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1aWNrQWRkTW9kYWxQcm9wcyB7XHJcbiAgb3BlbjogYm9vbGVhbjtcclxuICBoYW5kbGVDbG9zZTogKCkgPT4gdm9pZDtcclxuICBxdWlja0FkZE11dGF0aW9uOiAodmFsdWVzOiBWYWx1ZXMpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IFF1aWNrQWRkTW9kYWw6IFJlYWN0LkZDPFF1aWNrQWRkTW9kYWxQcm9wcz4gPSAoe1xyXG4gIG9wZW4sXHJcbiAgaGFuZGxlQ2xvc2UsXHJcbiAgcXVpY2tBZGRNdXRhdGlvbixcclxufTogUXVpY2tBZGRNb2RhbFByb3BzKTogUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCBzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXM6IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRhdGU6IHN0cmluZztcclxuICB9ID0ge1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGRhdGU6IG1vbWVudCgpLmZvcm1hdChcIk1NL0REL1lZXCIpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgY2xhc3NOYW1lPXtzLm1vZGFsfVxyXG4gICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgIH19XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICBvcGVuPXtvcGVufVxyXG4gICAgPlxyXG4gICAgICA8RmFkZSBpbj17b3Blbn0+XHJcbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17cy5tb2RhbEJhY2tncm91bmR9PlxyXG4gICAgICAgICAgPEJveCBwYWRkaW5nPXs0fSBib3hTaGFkb3c9ezR9PlxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc31cclxuICAgICAgICAgICAgICB2YWxpZGF0ZT17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JzOiBQYXJ0aWFsPHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICBkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB9PiA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWVzLmRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgZXJyb3JzLmRhdGUgPSBcIkRhdGUgaXMgcmVxdWlyZWRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlczogVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBxdWlja0FkZE11dGF0aW9uKHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7KHsgc3VibWl0Rm9ybSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3MudGl0bGV9PlF1aWNrIEFkZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8Qm94IG1hcmdpblRvcD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5jYW5jZWxCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5xdWlja0FkZEh5bW5CdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvRmFkZT5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1aWNrQWRkTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm1payIsIkZpZWxkIiwiRm9ybSIsIkJveCIsIkJ1dHRvbiIsIk1vZGFsIiwiUGFwZXIiLCJCYWNrZHJvcCIsIkZhZGUiLCJUeXBvZ3JhcGh5IiwiVGV4dEZpZWxkIiwidXNlU3R5bGVzIiwibW9tZW50IiwiUXVpY2tBZGRNb2RhbCIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsInF1aWNrQWRkTXV0YXRpb24iLCJzIiwiaW5pdGlhbFZhbHVlcyIsIm5hbWUiLCJkYXRlIiwiZm9ybWF0IiwibW9kYWwiLCJ0aW1lb3V0IiwibW9kYWxCYWNrZ3JvdW5kIiwidmFsdWVzIiwiZXJyb3JzIiwic3VibWl0Rm9ybSIsInRpdGxlIiwiZmllbGQiLCJ3aWR0aCIsImNhbmNlbEJ1dHRvbiIsInF1aWNrQWRkSHltbkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=