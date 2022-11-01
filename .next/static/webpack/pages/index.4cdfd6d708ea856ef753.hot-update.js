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
                    className: `s.field`,
                    style: {
                      width: 242
                    },
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
                    lineNumber: 133,
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
                    lineNumber: 148,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
                    className: s.addHymnButton,
                    variant: "contained",
                    color: "primary",
                    onClick: submitForm,
                    children: "Add"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGNkZmQ2ZDcwOGVhODU2ZWY3NTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7Ozs7QUFnQkEsTUFBTWMsT0FBK0IsR0FBRyxDQUFDO0FBQ3ZDQyxFQUFBQSxJQUR1QztBQUV2Q0MsRUFBQUEsV0FGdUM7QUFHdkNDLEVBQUFBLFVBSHVDO0FBSXZDQyxFQUFBQTtBQUp1QyxDQUFELEtBS047QUFBQTs7QUFDaEMsUUFBTUMsQ0FBQyxHQUFHUCxnREFBUyxFQUFuQjtBQUVBLFFBQU1RLGFBS0wsR0FBRztBQUNGQyxJQUFBQSxJQUFJLEVBQUUsRUFESjtBQUVGQyxJQUFBQSxTQUFTLEVBQUUsRUFGVDtBQUdGQyxJQUFBQSxXQUFXLEVBQUUsQ0FIWDtBQUlGQyxJQUFBQSxJQUFJLEVBQUVYLDZDQUFNLEdBQUdZLE1BQVQsQ0FBZ0IsVUFBaEI7QUFKSixHQUxKO0FBWUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFLLGdCQUFVLEVBQUUsQ0FBakI7QUFBb0IsZUFBUyxFQUFFTixDQUFDLENBQUNPLElBQWpDO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBUSxpQkFBUyxFQUFFUCxDQUFDLENBQUNRLFNBQXJCO0FBQWdDLGVBQU8sRUFBRVYsVUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUsOERBQUMsb0RBQUQ7QUFDRSxlQUFTLEVBQUVFLENBQUMsQ0FBQ1MsS0FEZjtBQUVFLHVCQUFpQixFQUFFcEIsdURBRnJCO0FBR0UsMEJBQW9CLE1BSHRCO0FBSUUsbUJBQWEsRUFBRTtBQUNicUIsUUFBQUEsT0FBTyxFQUFFO0FBREksT0FKakI7QUFPRSxhQUFPLEVBQUViLFdBUFg7QUFRRSxVQUFJLEVBQUVELElBUlI7QUFBQSw2QkFVRSw4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QUM7QUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkF0QkYsZUE2Q0UsOERBQUMsa0RBQUQ7QUFDRSx3QkFBTSxFQUFFLENBRFY7QUFFRSwyQkFBUyxFQUFFLENBRmI7QUFHRSx5QkFBTyxFQUFDLE1BSFY7QUFJRSxnQ0FBYyxFQUFDLFVBSmpCO0FBQUEsMENBTUUsOERBQUMscURBQUQ7QUFDRSw2QkFBUyxFQUFFUSxDQUFDLENBQUNrQixZQURmO0FBRUUsMkJBQU8sRUFBQyxXQUZWO0FBR0UsMkJBQU8sRUFBRXJCLFdBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTkYsZUFhRSw4REFBQyxxREFBRDtBQUNFLDZCQUFTLEVBQUVHLENBQUMsQ0FBQ21CLGFBRGY7QUFFRSwyQkFBTyxFQUFDLFdBRlY7QUFHRSx5QkFBSyxFQUFDLFNBSFI7QUFJRSwyQkFBTyxFQUFFTCxVQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUEsa0JBREY7QUEySEQsQ0EvSUQ7O0dBQU1uQjtVQU1NRjs7O0tBTk5FO0FBaUpOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0h5bW5zL1NlYXJjaC9BZGRIeW1uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1paywgRmllbGQsIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBNb2RhbCxcclxuICBQYXBlcixcclxuICBCYWNrZHJvcCxcclxuICBGYWRlLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJmb3JtaWstbWF0ZXJpYWwtdWlcIjtcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgVmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaHltbl9uYW1lOiBzdHJpbmc7XHJcbiAgaHltbl9udW1iZXI6IG51bWJlcjtcclxuICBkYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBZGRIeW1uUHJvcHMge1xyXG4gIG9wZW46IGJvb2xlYW47XHJcbiAgaGFuZGxlQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgaGFuZGxlT3BlbjogKCkgPT4gdm9pZDtcclxuICBjcmVhdGVNdXRhdGlvbjogKHZhbHVlczogVmFsdWVzKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBBZGRIeW1uOiBSZWFjdC5GQzxBZGRIeW1uUHJvcHM+ID0gKHtcclxuICBvcGVuLFxyXG4gIGhhbmRsZUNsb3NlLFxyXG4gIGhhbmRsZU9wZW4sXHJcbiAgY3JlYXRlTXV0YXRpb24sXHJcbn06IEFkZEh5bW5Qcm9wcyk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBoeW1uX25hbWU6IHN0cmluZztcclxuICAgIGh5bW5fbnVtYmVyOiBudW1iZXI7XHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbiAgfSA9IHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBoeW1uX25hbWU6IFwiXCIsXHJcbiAgICBoeW1uX251bWJlcjogMCxcclxuICAgIGRhdGU6IG1vbWVudCgpLmZvcm1hdChcIk1NL0REL1lZXCIpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm94IG1hcmdpbkxlZnQ9ezR9IGNsYXNzTmFtZT17cy5yb290fT5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17cy5hZGRCdXR0b259IG9uQ2xpY2s9e2hhbmRsZU9wZW59PlxyXG4gICAgICAgICAgQUREXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBjbGFzc05hbWU9e3MubW9kYWx9XHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxGYWRlIGluPXtvcGVufT5cclxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e3MubW9kYWxCYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgPEJveCBwYWRkaW5nPXs0fSBib3hTaGFkb3c9ezR9PlxyXG4gICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnM6IFBhcnRpYWw8e1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBoeW1uX25hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBoeW1uX251bWJlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgfT4gPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICghdmFsdWVzLmh5bW5fbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5oeW1uX25hbWUgPSBcIkh5bW4gTmFtZSBpcyByZXF1aXJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmICghdmFsdWVzLmh5bW5fbnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmh5bW5fbnVtYmVyID0gXCJIeW1uIE51bWJlciBpcyByZXF1aXJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmICghdmFsdWVzLmRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZGF0ZSA9IFwiRGF0ZSBpcyByZXF1aXJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXM6IFZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjcmVhdGVNdXRhdGlvbih2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7KHsgc3VibWl0Rm9ybSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3MudGl0bGV9PkFkZCBIeW1uPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1hcmdpblRvcD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIeW1uIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoeW1uX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzLmZpZWxkYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIeW1uIG51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaHltbl9udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5jYW5jZWxCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmFkZEh5bW5CdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZEh5bW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm1payIsIkZpZWxkIiwiRm9ybSIsIkJveCIsIkJ1dHRvbiIsIk1vZGFsIiwiUGFwZXIiLCJCYWNrZHJvcCIsIkZhZGUiLCJUeXBvZ3JhcGh5IiwiVGV4dEZpZWxkIiwidXNlU3R5bGVzIiwibW9tZW50IiwiQWRkSHltbiIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9wZW4iLCJjcmVhdGVNdXRhdGlvbiIsInMiLCJpbml0aWFsVmFsdWVzIiwibmFtZSIsImh5bW5fbmFtZSIsImh5bW5fbnVtYmVyIiwiZGF0ZSIsImZvcm1hdCIsInJvb3QiLCJhZGRCdXR0b24iLCJtb2RhbCIsInRpbWVvdXQiLCJtb2RhbEJhY2tncm91bmQiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJzdWJtaXRGb3JtIiwidGl0bGUiLCJmaWVsZCIsIndpZHRoIiwiY2FuY2VsQnV0dG9uIiwiYWRkSHltbkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=