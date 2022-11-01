"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hymns/Search/AddHymn/index.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Hymns/Search/AddHymn/index.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/Hymns/Search/AddHymn/styles.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Dan\\Desktop\\React Projects\\mcc\\src\\components\\Hymns\\Search\\AddHymn\\index.tsx",
    _s = $RefreshSig$();










const AddHymn = ({
  open,
  handleClose,
  handleOpen,
  createMutation
}) => {
  _s();

  const s = (0,_styles__WEBPACK_IMPORTED_MODULE_3__.default)();
  const initialValues = {
    name: "",
    hymn_name: "",
    hymn_number: 0,
    date: moment__WEBPACK_IMPORTED_MODULE_4___default()().format("MM/DD/YY")
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
      marginLeft: 4,
      className: s.root,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
        className: s.addButton,
        onClick: handleOpen,
        children: "ADD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Modal, {
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

                if (!values.hymn_name) {
                  errors.hymn_name = "Hymn Name is required";
                }

                if (!values.hymn_number) {
                  errors.hymn_number = "Hymn Number is required";
                }

                if (!values.date) {
                  errors.date = "Date is required";
                }

                return errors;
              },
              onSubmit: values => {
                createMutation(values);
                handleClose();
              },
              children: ({
                submitForm
              }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                    className: s.title,
                    children: "Add Hymn"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 21
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
                    lineNumber: 102,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
                  marginTop: 2,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    className: s.field,
                    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__.TextField,
                    placeholder: "Hymn name",
                    type: "text",
                    name: "hymn_name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "centers",
                  marginTop: 2,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    className: s.smallField,
                    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__.TextField,
                    placeholder: "Hymn number",
                    type: "number",
                    name: "hymn_number"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
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
                    lineNumber: 132,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 21
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
                    lineNumber: 147,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
                    className: s.addHymnButton,
                    variant: "contained",
                    color: "primary",
                    onClick: submitForm,
                    children: "Add"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(AddHymn, "xDGQz9pzcJ4OC278GhkVT5ePP5o=", false, function () {
  return [_styles__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = AddHymn;
/* harmony default export */ __webpack_exports__["default"] = (AddHymn);

var _c;

$RefreshReg$(_c, "AddHymn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDE0ZWNkZjYyYWQxNjlhYjQ4M2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7Ozs7QUFnQkEsTUFBTWMsT0FBK0IsR0FBRyxDQUFDO0FBQ3ZDQyxFQUFBQSxJQUR1QztBQUV2Q0MsRUFBQUEsV0FGdUM7QUFHdkNDLEVBQUFBLFVBSHVDO0FBSXZDQyxFQUFBQTtBQUp1QyxDQUFELEtBS047QUFBQTs7QUFDaEMsUUFBTUMsQ0FBQyxHQUFHUCxnREFBUyxFQUFuQjtBQUVBLFFBQU1RLGFBS0wsR0FBRztBQUNGQyxJQUFBQSxJQUFJLEVBQUUsRUFESjtBQUVGQyxJQUFBQSxTQUFTLEVBQUUsRUFGVDtBQUdGQyxJQUFBQSxXQUFXLEVBQUUsQ0FIWDtBQUlGQyxJQUFBQSxJQUFJLEVBQUVYLDZDQUFNLEdBQUdZLE1BQVQsQ0FBZ0IsVUFBaEI7QUFKSixHQUxKO0FBWUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFLLGdCQUFVLEVBQUUsQ0FBakI7QUFBb0IsZUFBUyxFQUFFTixDQUFDLENBQUNPLElBQWpDO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBUSxpQkFBUyxFQUFFUCxDQUFDLENBQUNRLFNBQXJCO0FBQWdDLGVBQU8sRUFBRVYsVUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUsOERBQUMsb0RBQUQ7QUFDRSxlQUFTLEVBQUVFLENBQUMsQ0FBQ1MsS0FEZjtBQUVFLHVCQUFpQixFQUFFcEIsdURBRnJCO0FBR0UsMEJBQW9CLE1BSHRCO0FBSUUsbUJBQWEsRUFBRTtBQUNicUIsUUFBQUEsT0FBTyxFQUFFO0FBREksT0FKakI7QUFPRSxhQUFPLEVBQUViLFdBUFg7QUFRRSxVQUFJLEVBQUVELElBUlI7QUFBQSw2QkFVRSw4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O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBdEJGLGVBNENFLDhEQUFDLGtEQUFEO0FBQ0Usd0JBQU0sRUFBRSxDQURWO0FBRUUsMkJBQVMsRUFBRSxDQUZiO0FBR0UseUJBQU8sRUFBQyxNQUhWO0FBSUUsZ0NBQWMsRUFBQyxVQUpqQjtBQUFBLDBDQU1FLDhEQUFDLHFEQUFEO0FBQ0UsNkJBQVMsRUFBRVEsQ0FBQyxDQUFDbUIsWUFEZjtBQUVFLDJCQUFPLEVBQUMsV0FGVjtBQUdFLDJCQUFPLEVBQUV0QixXQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQU5GLGVBYUUsOERBQUMscURBQUQ7QUFDRSw2QkFBUyxFQUFFRyxDQUFDLENBQUNvQixhQURmO0FBRUUsMkJBQU8sRUFBQyxXQUZWO0FBR0UseUJBQUssRUFBQyxTQUhSO0FBSUUsMkJBQU8sRUFBRU4sVUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBNUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBLGtCQURGO0FBMEhELENBOUlEOztHQUFNbkI7VUFNTUY7OztLQU5ORTtBQWdKTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IeW1ucy9TZWFyY2gvQWRkSHltbi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgTW9kYWwsXHJcbiAgUGFwZXIsXHJcbiAgQmFja2Ryb3AsXHJcbiAgRmFkZSxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiZm9ybWlrLW1hdGVyaWFsLXVpXCI7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIFZhbHVlcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGh5bW5fbmFtZTogc3RyaW5nO1xyXG4gIGh5bW5fbnVtYmVyOiBudW1iZXI7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQWRkSHltblByb3BzIHtcclxuICBvcGVuOiBib29sZWFuO1xyXG4gIGhhbmRsZUNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIGhhbmRsZU9wZW46ICgpID0+IHZvaWQ7XHJcbiAgY3JlYXRlTXV0YXRpb246ICh2YWx1ZXM6IFZhbHVlcykgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQWRkSHltbjogUmVhY3QuRkM8QWRkSHltblByb3BzPiA9ICh7XHJcbiAgb3BlbixcclxuICBoYW5kbGVDbG9zZSxcclxuICBoYW5kbGVPcGVuLFxyXG4gIGNyZWF0ZU11dGF0aW9uLFxyXG59OiBBZGRIeW1uUHJvcHMpOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaHltbl9uYW1lOiBzdHJpbmc7XHJcbiAgICBoeW1uX251bWJlcjogbnVtYmVyO1xyXG4gICAgZGF0ZTogc3RyaW5nO1xyXG4gIH0gPSB7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgaHltbl9uYW1lOiBcIlwiLFxyXG4gICAgaHltbl9udW1iZXI6IDAsXHJcbiAgICBkYXRlOiBtb21lbnQoKS5mb3JtYXQoXCJNTS9ERC9ZWVwiKSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveCBtYXJnaW5MZWZ0PXs0fSBjbGFzc05hbWU9e3Mucm9vdH0+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3MuYWRkQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVPcGVufT5cclxuICAgICAgICAgIEFERFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzLm1vZGFsfVxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgID5cclxuICAgICAgICA8RmFkZSBpbj17b3Blbn0+XHJcbiAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzLm1vZGFsQmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgIDxCb3ggcGFkZGluZz17NH0gYm94U2hhZG93PXs0fT5cclxuICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JzOiBQYXJ0aWFsPHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaHltbl9uYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaHltbl9udW1iZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgIH0+ID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlcy5oeW1uX25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnMuaHltbl9uYW1lID0gXCJIeW1uIE5hbWUgaXMgcmVxdWlyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlcy5oeW1uX251bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5oeW1uX251bWJlciA9IFwiSHltbiBOdW1iZXIgaXMgcmVxdWlyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlcy5kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmRhdGUgPSBcIkRhdGUgaXMgcmVxdWlyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzOiBWYWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY3JlYXRlTXV0YXRpb24odmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh7IHN1Ym1pdEZvcm0gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzLnRpdGxlfT5BZGQgSHltbjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1hcmdpblRvcD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSHltbiBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaHltbl9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17Mn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLnNtYWxsRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkh5bW4gbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoeW1uX251bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17MX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17OH1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmNhbmNlbEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuYWRkSHltbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkSHltbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybWlrIiwiRmllbGQiLCJGb3JtIiwiQm94IiwiQnV0dG9uIiwiTW9kYWwiLCJQYXBlciIsIkJhY2tkcm9wIiwiRmFkZSIsIlR5cG9ncmFwaHkiLCJUZXh0RmllbGQiLCJ1c2VTdHlsZXMiLCJtb21lbnQiLCJBZGRIeW1uIiwib3BlbiIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsImNyZWF0ZU11dGF0aW9uIiwicyIsImluaXRpYWxWYWx1ZXMiLCJuYW1lIiwiaHltbl9uYW1lIiwiaHltbl9udW1iZXIiLCJkYXRlIiwiZm9ybWF0Iiwicm9vdCIsImFkZEJ1dHRvbiIsIm1vZGFsIiwidGltZW91dCIsIm1vZGFsQmFja2dyb3VuZCIsInZhbHVlcyIsImVycm9ycyIsInN1Ym1pdEZvcm0iLCJ0aXRsZSIsImZpZWxkIiwic21hbGxGaWVsZCIsIndpZHRoIiwiY2FuY2VsQnV0dG9uIiwiYWRkSHltbkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=