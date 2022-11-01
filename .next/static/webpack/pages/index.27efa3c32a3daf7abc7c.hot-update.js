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
    className: s.dialogBackground,
    open: open,
    onClose: handleClose,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {
      children: "Sorry"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.DialogContentText, {
        children: "Someone has already logged this Hymn for this date."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.DialogActions, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: handleClose,
        autoFocus: true,
        children: "Ok"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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


/***/ }),

/***/ "./src/components/Hymns/AllHymns/Hymn/Alert/styles.ts":
/*!************************************************************!*\
  !*** ./src/components/Hymns/AllHymns/Hymn/Alert/styles.ts ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    height: "100%"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      outline: "none"
    }
  },
  dialogBackground: {
    backgroundColor: theme.palette.background.default // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // outline: "none",
    // maxHeight: "100%",
    // overflowY: "auto",
    // maxWidth: "100%",

  },
  field: {
    backgroundColor: theme.palette.surface.black,
    color: theme.palette.surface.white,
    width: 500,
    padding: theme.spacing(1),
    borderRadius: 0,
    border: "none",
    "& > *": {
      color: theme.palette.surface.white
    }
  },
  title: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 700
  },
  cancelButton: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.surface.white,
    borderRadius: 0,
    border: "1px solid #6A6A6A",
    width: 100,
    height: 40,
    "& > *": {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 400
    },
    "&:hover": {
      backgroundColor: theme.palette.surface.lightGrey
    }
  },
  quickAddHymnButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.surface.white,
    width: 100,
    height: 40,
    borderRadius: 0,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 400,
    marginLeft: theme.spacing(2),
    "&:hover": {
      backgroundColor: "rgba(58, 208, 118, 0.8)"
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

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


/***/ }),

/***/ "./src/components/Hymns/AllHymns/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/Hymns/AllHymns/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Hymn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hymn */ "./src/components/Hymns/AllHymns/Hymn/index.tsx");
/* harmony import */ var _Hymn_Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hymn/Edit */ "./src/components/Hymns/AllHymns/Hymn/Edit/index.tsx");
/* harmony import */ var _Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hymn/Pin */ "./src/components/Hymns/AllHymns/Hymn/Pin/index.tsx");
/* harmony import */ var _Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hymn/QuickAdd */ "./src/components/Hymns/AllHymns/Hymn/QuickAdd/index.tsx");
/* harmony import */ var _Hymn_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hymn/Alert */ "./src/components/Hymns/AllHymns/Hymn/Alert/index.tsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils/fetcher */ "./src/Utils/fetcher.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Dan\\Desktop\\React Projects\\mcc\\src\\components\\Hymns\\AllHymns\\index.tsx",
    _s = $RefreshSig$();














const AllHymns = ({
  filter,
  hymnData,
  logData,
  setHymns,
  setLogs,
  sortedReversed
}) => {
  _s();

  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    number: 0
  });
  const {
    0: editModalOpen,
    1: setEditModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: pinModalOpen,
    1: setPinModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: quickAddModalOpen,
    1: setQuickAddModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: alertOpen,
    1: setAlertOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: isPasswordCorrect,
    1: setIsPasswordCorrect
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetch("/api/hymn").then(response => response.json()).then(hymn_data => setHymns(hymn_data.hymns));
    fetch("/api/log").then(response => response.json()).then(log_data => setLogs(log_data.logs));
  }, [setHymns, setLogs]);

  const openEditModal = values => {
    setEditModalOpen(true);
    setPinModalOpen(true);
    setData(values);
  };

  const openQuickAddModal = values => {
    setQuickAddModalOpen(true);
    setPinModalOpen(true);
    setData(values);
  };

  const editHymn = values => {
    (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)("/api/hymn", async () => {
      const editedHymn = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)("/api/hymn", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          number: data.number,
          newNumber: values.number,
          newName: values.name
        })
      });
      let newLogs = logData.filter(log => log.id === data.number);

      if (values.number === data.number) {
        editedHymn.number = data.number;
      } else {
        newLogs.forEach(newLog => {
          newLog.id = values.number;
        });
      }

      editedHymn.name = values.name;
      setHymns([...hymnData.filter(hymn => hymn.number !== data.number), editedHymn]);
      setLogs([...logData.filter(log => log.id !== data.number)]);
    });
    setEditModalOpen(false);
    setIsPasswordCorrect(false);
  };

  const quickAddHymn = values => {
    (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)("/api/log", async () => {
      const addedLog = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)("/api/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: data.number,
          bywho: values.name,
          logged: values.date
        })
      });
      console.log(addedLog);

      if (addedLog.length <= 0) {
        setAlertOpen(true);
      }

      setLogs([...logData, addedLog]);
    });
    setQuickAddModalOpen(false);
    setIsPasswordCorrect(false);
  };

  if (hymnData[0].number === 999 || logData[0].id === 999) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_2__.default, {
        open: editModalOpen,
        handleClose: () => setEditModalOpen(false),
        data: data,
        editMutation: editHymn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
        open: quickAddModalOpen,
        handleClose: () => setQuickAddModalOpen(false),
        quickAddMutation: quickAddHymn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined)]
    }, void 0, true);
  }

  let filteredHymns = [];

  const filteredLogs = hymnId => {
    const flogs = logData.filter(log => log.id === hymnId);
    return flogs;
  };

  if (filter === "") {
    const newestHymns = []; // console.log(hymnData[0]);
    // console.log(filteredLogs(372));

    for (let i = 0; i < hymnData.length; i++) {
      const lastDates = filteredLogs(hymnData[i].number);
      lastDates.sort((a, b) => {
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.logged) < moment__WEBPACK_IMPORTED_MODULE_8___default()(b.logged)) return 1;
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.logged) > moment__WEBPACK_IMPORTED_MODULE_8___default()(b.logged)) return -1;
        return 0;
      });
      newestHymns.push({
        number: hymnData[i].number,
        name: hymnData[i].name,
        log: lastDates[0]
      });
    }

    if (sortedReversed) {
      newestHymns.sort((a, b) => {
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.log.logged) < moment__WEBPACK_IMPORTED_MODULE_8___default()(b.log.logged)) return -1;
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.log.logged) > moment__WEBPACK_IMPORTED_MODULE_8___default()(b.log.logged)) return 1;
        return 0;
      });
    } else {
      newestHymns.sort((a, b) => {
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.log.logged) < moment__WEBPACK_IMPORTED_MODULE_8___default()(b.log.logged)) return 1;
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.log.logged) > moment__WEBPACK_IMPORTED_MODULE_8___default()(b.log.logged)) return -1;
        return 0;
      });
    }

    filteredHymns = newestHymns;
  } else {
    filteredHymns = hymnData.filter(hymn => hymn.name.toLowerCase().includes(filter.toLowerCase()) || hymn.number.toString().includes(filter));
  }

  const checkPassword = values => {
    setIsPasswordCorrect(values.password === "rahab" ? true : false);
    setPinModalOpen(false);
  };

  const closeEdit = () => {
    setPinModalOpen(false);
    setEditModalOpen(false);
    setIsPasswordCorrect(false);
  };

  const closeQuickAdd = () => {
    setPinModalOpen(false);
    setQuickAddModalOpen(false);
    setIsPasswordCorrect(false);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_2__.default, {
      open: editModalOpen && isPasswordCorrect,
      handleClose: closeEdit,
      data: data,
      editMutation: editHymn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__.default, {
      open: pinModalOpen,
      handleClose: () => setPinModalOpen(false),
      isCorrect: values => checkPassword(values)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
      open: quickAddModalOpen && isPasswordCorrect,
      handleClose: closeQuickAdd,
      quickAddMutation: quickAddHymn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Alert__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      children: filteredHymns.sort().map(hymn => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn__WEBPACK_IMPORTED_MODULE_1__.default, {
        name: hymn.name,
        number: hymn.number,
        logs: filteredLogs(hymn.number),
        handleEdit: () => openEditModal(hymn),
        handleQuickAdd: () => openQuickAddModal(hymn)
      }, hymn.number, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(AllHymns, "bKgElXT9T7fB/orF9tihYg1PDHY=");

_c = AllHymns;
/* harmony default export */ __webpack_exports__["default"] = (AllHymns);

var _c;

$RefreshReg$(_c, "AllHymns");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjdlZmEzYzMyYTNkYWY3YWJjN2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTs7O0FBT0EsTUFBTVEsV0FBdUMsR0FBRyxDQUFDO0FBQy9DQyxFQUFBQSxJQUQrQztBQUUvQ0MsRUFBQUE7QUFGK0MsQ0FBRCxLQUdWO0FBQUE7O0FBQ3BDLFFBQU1DLENBQUMsR0FBR0osZ0RBQVMsRUFBbkI7QUFFQSxzQkFDRSw4REFBQyxxREFBRDtBQUFRLGFBQVMsRUFBRUksQ0FBQyxDQUFDQyxnQkFBckI7QUFBdUMsUUFBSSxFQUFFSCxJQUE3QztBQUFtRCxXQUFPLEVBQUVDLFdBQTVEO0FBQUEsNEJBQ0UsOERBQUMsMERBQUQ7QUFBQSxnQkFBYztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyw0REFBRDtBQUFBLDZCQUNFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU9FLDhEQUFDLDREQUFEO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBUSxlQUFPLEVBQUVBLFdBQWpCO0FBQThCLGlCQUFTLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtCRCxDQXhCRDs7R0FBTUY7VUFJTUQ7OztLQUpOQztBQTBCTiwrREFBZUEsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUVBLE1BQU1ELFNBQVMsR0FBR00sNkRBQVUsQ0FBRUMsS0FBRCxLQUFtQjtBQUM5Q0MsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLE1B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QWlPTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IeW1ucy9BbGxIeW1ucy9IeW1uL0FsZXJ0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSHltbnMvQWxsSHltbnMvSHltbi9BbGVydC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0h5bW5zL0FsbEh5bW5zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIERpYWxvZ0FjdGlvbnMsXHJcbiAgRGlhbG9nQ29udGVudCxcclxuICBEaWFsb2dDb250ZW50VGV4dCxcclxuICBEaWFsb2dUaXRsZSxcclxuICBCdXR0b24sXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJmb3JtaWstbWF0ZXJpYWwtdWlcIjtcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcbmludGVyZmFjZSBBbGVydERpYWxvZ1Byb3BzIHtcclxuICBvcGVuOiBib29sZWFuO1xyXG4gIGhhbmRsZUNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBBbGVydERpYWxvZzogUmVhY3QuRkM8QWxlcnREaWFsb2dQcm9wcz4gPSAoe1xyXG4gIG9wZW4sXHJcbiAgaGFuZGxlQ2xvc2UsXHJcbn06IEFsZXJ0RGlhbG9nUHJvcHMpOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEaWFsb2cgY2xhc3NOYW1lPXtzLmRpYWxvZ0JhY2tncm91bmR9IG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgPERpYWxvZ1RpdGxlPntcIlNvcnJ5XCJ9PC9EaWFsb2dUaXRsZT5cclxuICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgU29tZW9uZSBoYXMgYWxyZWFkeSBsb2dnZWQgdGhpcyBIeW1uIGZvciB0aGlzIGRhdGUuXHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBhdXRvRm9jdXM+XHJcbiAgICAgICAgICBPa1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQWxlcnR9IGF1dG9Gb2N1cz5cclxuICAgICAgICAgICAgQWdyZWVcclxuICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgPC9EaWFsb2c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0RGlhbG9nO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBtb2RhbDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBcIiYgPiBkaXZcIjoge1xyXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkaWFsb2dCYWNrZ3JvdW5kOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxyXG4gICAgLy8gcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIC8vIHRvcDogXCI1MCVcIixcclxuICAgIC8vIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAvLyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgICAvLyBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgIC8vIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAvLyBvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG4gICAgLy8gbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgZmllbGQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLmJsYWNrLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcclxuICAgIHdpZHRoOiA1MDAsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLndoaXRlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLndoaXRlLFxyXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuaDQuZm9udFNpemUsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBjYW5jZWxCdXR0b246IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLndoaXRlLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNkE2QTZBXCIsXHJcbiAgICB3aWR0aDogMTAwLFxyXG4gICAgaGVpZ2h0OiA0MCxcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5oNi5mb250U2l6ZSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgfSxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLmxpZ2h0R3JleSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBxdWlja0FkZEh5bW5CdXR0b246IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLndoaXRlLFxyXG4gICAgd2lkdGg6IDEwMCxcclxuICAgIGhlaWdodDogNDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5oNi5mb250U2l6ZSxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg1OCwgMjA4LCAxMTgsIDAuOClcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtcclxuICB1c2VTdGF0ZSxcclxuICBSZWFjdEVsZW1lbnQsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIFNldFN0YXRlQWN0aW9uLFxyXG4gIERpc3BhdGNoLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEh5bW4gZnJvbSBcIi4vSHltblwiO1xyXG5pbXBvcnQgRWRpdE1vZGFsIGZyb20gXCIuL0h5bW4vRWRpdFwiO1xyXG5pbXBvcnQgUGluTW9kYWwgZnJvbSBcIi4vSHltbi9QaW5cIjtcclxuaW1wb3J0IFF1aWNrQWRkTW9kYWwgZnJvbSBcIi4vSHltbi9RdWlja0FkZFwiO1xyXG5pbXBvcnQgQWxlcnREaWFsb2cgZnJvbSBcIi4vSHltbi9BbGVydFwiO1xyXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi8uLi8uLi9VdGlscy9mZXRjaGVyXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIEVkaXRWYWx1ZXMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBudW1iZXI6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhc3N3b3JkVmFsdWVzIHtcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUXVpY2tBZGRWYWx1ZXMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBIeW1uVmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBMb2dWYWx1ZXMge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbG9nZ2VkOiBzdHJpbmc7XHJcbiAgYnl3aG86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEFsbEh5bW5zUHJvcHMge1xyXG4gIGZpbHRlcjogc3RyaW5nO1xyXG4gIGh5bW5EYXRhOiBIeW1uVmFsdWVzW107XHJcbiAgbG9nRGF0YTogTG9nVmFsdWVzW107XHJcbiAgc2V0SHltbnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEh5bW5WYWx1ZXNbXT4+O1xyXG4gIHNldExvZ3M6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPExvZ1ZhbHVlc1tdPj47XHJcbiAgc29ydGVkUmV2ZXJzZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEFsbEh5bW5zOiBSZWFjdC5GQzxBbGxIeW1uc1Byb3BzPiA9ICh7XHJcbiAgZmlsdGVyLFxyXG4gIGh5bW5EYXRhLFxyXG4gIGxvZ0RhdGEsXHJcbiAgc2V0SHltbnMsXHJcbiAgc2V0TG9ncyxcclxuICBzb3J0ZWRSZXZlcnNlZCxcclxufTogQWxsSHltbnNQcm9wcyk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8SHltblZhbHVlcz4oe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIG51bWJlcjogMCxcclxuICB9KTtcclxuICBjb25zdCBbZWRpdE1vZGFsT3Blbiwgc2V0RWRpdE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3Bpbk1vZGFsT3Blbiwgc2V0UGluTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbcXVpY2tBZGRNb2RhbE9wZW4sIHNldFF1aWNrQWRkTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbYWxlcnRPcGVuLCBzZXRBbGVydE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtpc1Bhc3N3b3JkQ29ycmVjdCwgc2V0SXNQYXNzd29yZENvcnJlY3RdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCIvYXBpL2h5bW5cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChoeW1uX2RhdGEpID0+IHNldEh5bW5zKGh5bW5fZGF0YS5oeW1ucykpO1xyXG4gICAgZmV0Y2goXCIvYXBpL2xvZ1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGxvZ19kYXRhKSA9PiBzZXRMb2dzKGxvZ19kYXRhLmxvZ3MpKTtcclxuICB9LCBbc2V0SHltbnMsIHNldExvZ3NdKTtcclxuXHJcbiAgY29uc3Qgb3BlbkVkaXRNb2RhbCA9ICh2YWx1ZXM6IEh5bW5WYWx1ZXMpID0+IHtcclxuICAgIHNldEVkaXRNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXREYXRhKHZhbHVlcyk7XHJcbiAgfTtcclxuICBjb25zdCBvcGVuUXVpY2tBZGRNb2RhbCA9ICh2YWx1ZXM6IEh5bW5WYWx1ZXMpID0+IHtcclxuICAgIHNldFF1aWNrQWRkTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgc2V0RGF0YSh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVkaXRIeW1uID0gKHZhbHVlczogRWRpdFZhbHVlcykgPT4ge1xyXG4gICAgbXV0YXRlKFwiL2FwaS9oeW1uXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZWRpdGVkSHltbiA9IGF3YWl0IGZldGNoZXIoXCIvYXBpL2h5bW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBudW1iZXI6IGRhdGEubnVtYmVyLFxyXG4gICAgICAgICAgbmV3TnVtYmVyOiB2YWx1ZXMubnVtYmVyLFxyXG4gICAgICAgICAgbmV3TmFtZTogdmFsdWVzLm5hbWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5ld0xvZ3MgPSBsb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgPT09IGRhdGEubnVtYmVyKTtcclxuXHJcbiAgICAgIGlmICh2YWx1ZXMubnVtYmVyID09PSBkYXRhLm51bWJlcikge1xyXG4gICAgICAgIGVkaXRlZEh5bW4ubnVtYmVyID0gZGF0YS5udW1iZXI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TG9ncy5mb3JFYWNoKChuZXdMb2cpID0+IHtcclxuICAgICAgICAgIG5ld0xvZy5pZCA9IHZhbHVlcy5udW1iZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVkaXRlZEh5bW4ubmFtZSA9IHZhbHVlcy5uYW1lO1xyXG4gICAgICBzZXRIeW1ucyhbXHJcbiAgICAgICAgLi4uaHltbkRhdGEuZmlsdGVyKChoeW1uKSA9PiBoeW1uLm51bWJlciAhPT0gZGF0YS5udW1iZXIpLFxyXG4gICAgICAgIGVkaXRlZEh5bW4sXHJcbiAgICAgIF0pO1xyXG4gICAgICBzZXRMb2dzKFsuLi5sb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgIT09IGRhdGEubnVtYmVyKV0pO1xyXG4gICAgfSk7XHJcbiAgICBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBxdWlja0FkZEh5bW4gPSAodmFsdWVzOiBRdWlja0FkZFZhbHVlcykgPT4ge1xyXG4gICAgbXV0YXRlKFwiL2FwaS9sb2dcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBhZGRlZExvZyA9IGF3YWl0IGZldGNoZXIoXCIvYXBpL2xvZ1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgaWQ6IGRhdGEubnVtYmVyLFxyXG4gICAgICAgICAgYnl3aG86IHZhbHVlcy5uYW1lLFxyXG4gICAgICAgICAgbG9nZ2VkOiB2YWx1ZXMuZGF0ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhhZGRlZExvZyk7XHJcbiAgICAgIGlmIChhZGRlZExvZy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIHNldEFsZXJ0T3Blbih0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0TG9ncyhbLi4ubG9nRGF0YSwgYWRkZWRMb2ddKTtcclxuICAgIH0pO1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGlmIChoeW1uRGF0YVswXS5udW1iZXIgPT09IDk5OSB8fCBsb2dEYXRhWzBdLmlkID09PSA5OTkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEVkaXRNb2RhbFxyXG4gICAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3Blbn1cclxuICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICBlZGl0TXV0YXRpb249e2VkaXRIeW1ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFF1aWNrQWRkTW9kYWxcclxuICAgICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVufVxyXG4gICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldFF1aWNrQWRkTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsZXQgZmlsdGVyZWRIeW1ucyA9IFtdO1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZExvZ3MgPSAoaHltbklkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGZsb2dzID0gbG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkID09PSBoeW1uSWQpO1xyXG5cclxuICAgIHJldHVybiBmbG9ncztcclxuICB9O1xyXG5cclxuICBpZiAoZmlsdGVyID09PSBcIlwiKSB7XHJcbiAgICBjb25zdCBuZXdlc3RIeW1ucyA9IFtdIGFzIHVua25vd24gYXMge1xyXG4gICAgICBudW1iZXI6IG51bWJlcjtcclxuICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICBsb2c6IExvZ1ZhbHVlcztcclxuICAgIH1bXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGh5bW5EYXRhWzBdKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcmVkTG9ncygzNzIpKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaHltbkRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbGFzdERhdGVzID0gZmlsdGVyZWRMb2dzKGh5bW5EYXRhW2ldLm51bWJlcik7XHJcbiAgICAgIGxhc3REYXRlcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZ2dlZCkgPCBtb21lbnQoYi5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nZ2VkKSA+IG1vbWVudChiLmxvZ2dlZCkpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICAgIG5ld2VzdEh5bW5zLnB1c2goe1xyXG4gICAgICAgIG51bWJlcjogaHltbkRhdGFbaV0ubnVtYmVyLFxyXG4gICAgICAgIG5hbWU6IGh5bW5EYXRhW2ldLm5hbWUsXHJcbiAgICAgICAgbG9nOiBsYXN0RGF0ZXNbMF0sXHJcbiAgICAgIH0gYXMge1xyXG4gICAgICAgIG51bWJlcjogbnVtYmVyO1xyXG4gICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICBsb2c6IExvZ1ZhbHVlcztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvcnRlZFJldmVyc2VkKSB7XHJcbiAgICAgIG5ld2VzdEh5bW5zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nLmxvZ2dlZCkgPCBtb21lbnQoYi5sb2cubG9nZ2VkKSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2cubG9nZ2VkKSA+IG1vbWVudChiLmxvZy5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdlc3RIeW1ucy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZy5sb2dnZWQpIDwgbW9tZW50KGIubG9nLmxvZ2dlZCkpIHJldHVybiAxO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2cubG9nZ2VkKSA+IG1vbWVudChiLmxvZy5sb2dnZWQpKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcmVkSHltbnMgPSBuZXdlc3RIeW1ucztcclxuICB9IGVsc2Uge1xyXG4gICAgZmlsdGVyZWRIeW1ucyA9IGh5bW5EYXRhLmZpbHRlcihcclxuICAgICAgKGh5bW4pID0+XHJcbiAgICAgICAgaHltbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgaHltbi5udW1iZXIudG9TdHJpbmcoKS5pbmNsdWRlcyhmaWx0ZXIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tQYXNzd29yZCA9ICh2YWx1ZXM6IFBhc3N3b3JkVmFsdWVzKSA9PiB7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdCh2YWx1ZXMucGFzc3dvcmQgPT09IFwicmFoYWJcIiA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlRWRpdCA9ICgpID0+IHtcclxuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsb3NlUXVpY2tBZGQgPSAoKSA9PiB7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICBzZXRBbGVydE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RWRpdE1vZGFsXHJcbiAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3BlbiAmJiBpc1Bhc3N3b3JkQ29ycmVjdH1cclxuICAgICAgICBoYW5kbGVDbG9zZT17Y2xvc2VFZGl0fVxyXG4gICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cclxuICAgICAgLz5cclxuICAgICAgPFBpbk1vZGFsXHJcbiAgICAgICAgb3Blbj17cGluTW9kYWxPcGVufVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGlzQ29ycmVjdD17KHZhbHVlcykgPT4gY2hlY2tQYXNzd29yZCh2YWx1ZXMpfVxyXG4gICAgICAvPlxyXG4gICAgICA8UXVpY2tBZGRNb2RhbFxyXG4gICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVuICYmIGlzUGFzc3dvcmRDb3JyZWN0fVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXtjbG9zZVF1aWNrQWRkfVxyXG4gICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cclxuICAgICAgLz5cclxuICAgICAgPEFsZXJ0RGlhbG9nPjwvQWxlcnREaWFsb2c+XHJcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICB7ZmlsdGVyZWRIeW1ucy5zb3J0KCkubWFwKChoeW1uKSA9PiAoXHJcbiAgICAgICAgICA8SHltblxyXG4gICAgICAgICAgICBuYW1lPXtoeW1uLm5hbWV9XHJcbiAgICAgICAgICAgIG51bWJlcj17aHltbi5udW1iZXJ9XHJcbiAgICAgICAgICAgIGxvZ3M9e2ZpbHRlcmVkTG9ncyhoeW1uLm51bWJlcil9XHJcbiAgICAgICAgICAgIGhhbmRsZUVkaXQ9eygpID0+IG9wZW5FZGl0TW9kYWwoaHltbil9XHJcbiAgICAgICAgICAgIGhhbmRsZVF1aWNrQWRkPXsoKSA9PiBvcGVuUXVpY2tBZGRNb2RhbChoeW1uKX1cclxuICAgICAgICAgICAga2V5PXtoeW1uLm51bWJlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbEh5bW5zO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEaWFsb2ciLCJEaWFsb2dBY3Rpb25zIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0NvbnRlbnRUZXh0IiwiRGlhbG9nVGl0bGUiLCJCdXR0b24iLCJ1c2VTdHlsZXMiLCJBbGVydERpYWxvZyIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsInMiLCJkaWFsb2dCYWNrZ3JvdW5kIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImhlaWdodCIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm91dGxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJmaWVsZCIsInN1cmZhY2UiLCJibGFjayIsImNvbG9yIiwid2hpdGUiLCJ3aWR0aCIsInBhZGRpbmciLCJzcGFjaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwidGl0bGUiLCJmb250U2l6ZSIsInR5cG9ncmFwaHkiLCJoNCIsImZvbnRXZWlnaHQiLCJjYW5jZWxCdXR0b24iLCJoNiIsImxpZ2h0R3JleSIsInF1aWNrQWRkSHltbkJ1dHRvbiIsInByaW1hcnkiLCJtYWluIiwibWFyZ2luTGVmdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiSHltbiIsIkVkaXRNb2RhbCIsIlBpbk1vZGFsIiwiUXVpY2tBZGRNb2RhbCIsIm11dGF0ZSIsImZldGNoZXIiLCJtb21lbnQiLCJBbGxIeW1ucyIsImZpbHRlciIsImh5bW5EYXRhIiwibG9nRGF0YSIsInNldEh5bW5zIiwic2V0TG9ncyIsInNvcnRlZFJldmVyc2VkIiwiZGF0YSIsInNldERhdGEiLCJuYW1lIiwibnVtYmVyIiwiZWRpdE1vZGFsT3BlbiIsInNldEVkaXRNb2RhbE9wZW4iLCJwaW5Nb2RhbE9wZW4iLCJzZXRQaW5Nb2RhbE9wZW4iLCJxdWlja0FkZE1vZGFsT3BlbiIsInNldFF1aWNrQWRkTW9kYWxPcGVuIiwiYWxlcnRPcGVuIiwic2V0QWxlcnRPcGVuIiwiaXNQYXNzd29yZENvcnJlY3QiLCJzZXRJc1Bhc3N3b3JkQ29ycmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImh5bW5fZGF0YSIsImh5bW5zIiwibG9nX2RhdGEiLCJsb2dzIiwib3BlbkVkaXRNb2RhbCIsInZhbHVlcyIsIm9wZW5RdWlja0FkZE1vZGFsIiwiZWRpdEh5bW4iLCJlZGl0ZWRIeW1uIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3TnVtYmVyIiwibmV3TmFtZSIsIm5ld0xvZ3MiLCJsb2ciLCJpZCIsImZvckVhY2giLCJuZXdMb2ciLCJoeW1uIiwicXVpY2tBZGRIeW1uIiwiYWRkZWRMb2ciLCJieXdobyIsImxvZ2dlZCIsImRhdGUiLCJjb25zb2xlIiwibGVuZ3RoIiwiZmlsdGVyZWRIeW1ucyIsImZpbHRlcmVkTG9ncyIsImh5bW5JZCIsImZsb2dzIiwibmV3ZXN0SHltbnMiLCJpIiwibGFzdERhdGVzIiwic29ydCIsImEiLCJiIiwicHVzaCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsImNoZWNrUGFzc3dvcmQiLCJwYXNzd29yZCIsImNsb3NlRWRpdCIsImNsb3NlUXVpY2tBZGQiLCJoYW5kbGVDbG9zZUFsZXJ0IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==