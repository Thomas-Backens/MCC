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
                    className: s.smallField // style={{ width: 242 }}
                    ,
                    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__.TextField,
                    placeholder: "Hymn number",
                    type: "number",
                    name: "hymn_number"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
                    className: s.smallField,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTE3ZTM1M2E0YjZjM2YxZGJkOTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7Ozs7QUFnQkEsTUFBTWMsT0FBK0IsR0FBRyxDQUFDO0FBQ3ZDQyxFQUFBQSxJQUR1QztBQUV2Q0MsRUFBQUEsV0FGdUM7QUFHdkNDLEVBQUFBLFVBSHVDO0FBSXZDQyxFQUFBQTtBQUp1QyxDQUFELEtBS047QUFBQTs7QUFDaEMsUUFBTUMsQ0FBQyxHQUFHUCxnREFBUyxFQUFuQjtBQUVBLFFBQU1RLGFBS0wsR0FBRztBQUNGQyxJQUFBQSxJQUFJLEVBQUUsRUFESjtBQUVGQyxJQUFBQSxTQUFTLEVBQUUsRUFGVDtBQUdGQyxJQUFBQSxXQUFXLEVBQUUsQ0FIWDtBQUlGQyxJQUFBQSxJQUFJLEVBQUVYLDZDQUFNLEdBQUdZLE1BQVQsQ0FBZ0IsVUFBaEI7QUFKSixHQUxKO0FBWUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFLLGdCQUFVLEVBQUUsQ0FBakI7QUFBb0IsZUFBUyxFQUFFTixDQUFDLENBQUNPLElBQWpDO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBUSxpQkFBUyxFQUFFUCxDQUFDLENBQUNRLFNBQXJCO0FBQWdDLGVBQU8sRUFBRVYsVUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUsOERBQUMsb0RBQUQ7QUFDRSxlQUFTLEVBQUVFLENBQUMsQ0FBQ1MsS0FEZjtBQUVFLHVCQUFpQixFQUFFcEIsdURBRnJCO0FBR0UsMEJBQW9CLE1BSHRCO0FBSUUsbUJBQWEsRUFBRTtBQUNicUIsUUFBQUEsT0FBTyxFQUFFO0FBREksT0FKakI7QUFPRSxhQUFPLEVBQUViLFdBUFg7QUFRRSxVQUFJLEVBQUVELElBUlI7QUFBQSw2QkFVRSw4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K0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXRCRixlQTZDRSw4REFBQyxrREFBRDtBQUNFLHdCQUFNLEVBQUUsQ0FEVjtBQUVFLDJCQUFTLEVBQUUsQ0FGYjtBQUdFLHlCQUFPLEVBQUMsTUFIVjtBQUlFLGdDQUFjLEVBQUMsVUFKakI7QUFBQSwwQ0FNRSw4REFBQyxxREFBRDtBQUNFLDZCQUFTLEVBQUVRLENBQUMsQ0FBQ21CLFlBRGY7QUFFRSwyQkFBTyxFQUFDLFdBRlY7QUFHRSwyQkFBTyxFQUFFdEIsV0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFORixlQWFFLDhEQUFDLHFEQUFEO0FBQ0UsNkJBQVMsRUFBRUcsQ0FBQyxDQUFDb0IsYUFEZjtBQUVFLDJCQUFPLEVBQUMsV0FGVjtBQUdFLHlCQUFLLEVBQUMsU0FIUjtBQUlFLDJCQUFPLEVBQUVOLFVBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQSxrQkFERjtBQTJIRCxDQS9JRDs7R0FBTW5CO1VBTU1GOzs7S0FOTkU7QUFpSk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSHltbnMvU2VhcmNoL0FkZEh5bW4vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsLFxyXG4gIFBhcGVyLFxyXG4gIEJhY2tkcm9wLFxyXG4gIEZhZGUsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcImZvcm1pay1tYXRlcmlhbC11aVwiO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmludGVyZmFjZSBWYWx1ZXMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBoeW1uX25hbWU6IHN0cmluZztcclxuICBoeW1uX251bWJlcjogbnVtYmVyO1xyXG4gIGRhdGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEFkZEh5bW5Qcm9wcyB7XHJcbiAgb3BlbjogYm9vbGVhbjtcclxuICBoYW5kbGVDbG9zZTogKCkgPT4gdm9pZDtcclxuICBoYW5kbGVPcGVuOiAoKSA9PiB2b2lkO1xyXG4gIGNyZWF0ZU11dGF0aW9uOiAodmFsdWVzOiBWYWx1ZXMpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEFkZEh5bW46IFJlYWN0LkZDPEFkZEh5bW5Qcm9wcz4gPSAoe1xyXG4gIG9wZW4sXHJcbiAgaGFuZGxlQ2xvc2UsXHJcbiAgaGFuZGxlT3BlbixcclxuICBjcmVhdGVNdXRhdGlvbixcclxufTogQWRkSHltblByb3BzKTogUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCBzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXM6IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGh5bW5fbmFtZTogc3RyaW5nO1xyXG4gICAgaHltbl9udW1iZXI6IG51bWJlcjtcclxuICAgIGRhdGU6IHN0cmluZztcclxuICB9ID0ge1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGh5bW5fbmFtZTogXCJcIixcclxuICAgIGh5bW5fbnVtYmVyOiAwLFxyXG4gICAgZGF0ZTogbW9tZW50KCkuZm9ybWF0KFwiTU0vREQvWVlcIiksXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3ggbWFyZ2luTGVmdD17NH0gY2xhc3NOYW1lPXtzLnJvb3R9PlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzLmFkZEJ1dHRvbn0gb25DbGljaz17aGFuZGxlT3Blbn0+XHJcbiAgICAgICAgICBBRERcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGNsYXNzTmFtZT17cy5tb2RhbH1cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZhZGUgaW49e29wZW59PlxyXG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17cy5tb2RhbEJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICA8Qm94IHBhZGRpbmc9ezR9IGJveFNoYWRvdz17NH0+XHJcbiAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc31cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yczogUGFydGlhbDx7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGh5bW5fbmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGh5bW5fbnVtYmVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICB9PiA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXMuaHltbl9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmh5bW5fbmFtZSA9IFwiSHltbiBOYW1lIGlzIHJlcXVpcmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXMuaHltbl9udW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnMuaHltbl9udW1iZXIgPSBcIkh5bW4gTnVtYmVyIGlzIHJlcXVpcmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXMuZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5kYXRlID0gXCJEYXRlIGlzIHJlcXVpcmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlczogVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZU11dGF0aW9uKHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoeyBzdWJtaXRGb3JtIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17cy50aXRsZX0+QWRkIEh5bW48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkh5bW4gbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImh5bW5fbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5zbWFsbEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogMjQyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkh5bW4gbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoeW1uX251bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5zbWFsbEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPXs4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuY2FuY2VsQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5hZGRIeW1uQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRIeW1uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtaWsiLCJGaWVsZCIsIkZvcm0iLCJCb3giLCJCdXR0b24iLCJNb2RhbCIsIlBhcGVyIiwiQmFja2Ryb3AiLCJGYWRlIiwiVHlwb2dyYXBoeSIsIlRleHRGaWVsZCIsInVzZVN0eWxlcyIsIm1vbWVudCIsIkFkZEh5bW4iLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwiY3JlYXRlTXV0YXRpb24iLCJzIiwiaW5pdGlhbFZhbHVlcyIsIm5hbWUiLCJoeW1uX25hbWUiLCJoeW1uX251bWJlciIsImRhdGUiLCJmb3JtYXQiLCJyb290IiwiYWRkQnV0dG9uIiwibW9kYWwiLCJ0aW1lb3V0IiwibW9kYWxCYWNrZ3JvdW5kIiwidmFsdWVzIiwiZXJyb3JzIiwic3VibWl0Rm9ybSIsInRpdGxlIiwiZmllbGQiLCJzbWFsbEZpZWxkIiwid2lkdGgiLCJjYW5jZWxCdXR0b24iLCJhZGRIeW1uQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==