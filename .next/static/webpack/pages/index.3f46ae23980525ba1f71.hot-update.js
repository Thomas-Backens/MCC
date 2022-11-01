"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hymns/AllHymns/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/Hymns/AllHymns/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Hymn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hymn */ "./src/components/Hymns/AllHymns/Hymn/index.tsx");
/* harmony import */ var _Hymn_Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hymn/Edit */ "./src/components/Hymns/AllHymns/Hymn/Edit/index.tsx");
/* harmony import */ var _Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hymn/Pin */ "./src/components/Hymns/AllHymns/Hymn/Pin/index.tsx");
/* harmony import */ var _Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hymn/QuickAdd */ "./src/components/Hymns/AllHymns/Hymn/QuickAdd/index.tsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _Utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Utils/fetcher */ "./src/Utils/fetcher.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Dan\\Desktop\\React Projects\\mcc\\src\\components\\Hymns\\AllHymns\\index.tsx",
    _s = $RefreshSig$();


 // import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';











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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
    (0,swr__WEBPACK_IMPORTED_MODULE_5__.mutate)("/api/hymn", async () => {
      const editedHymn = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_6__.default)("/api/hymn", {
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
    (0,swr__WEBPACK_IMPORTED_MODULE_5__.mutate)("/api/log", async () => {
      const addedLog = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_6__.default)("/api/log", {
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

      if (addedLog === []) {
        setAlertOpen(true);
      }

      setLogs([...logData, addedLog]);
    });
    setQuickAddModalOpen(false);
    setIsPasswordCorrect(false);
  };

  if (hymnData[0].number === 999 || logData[0].id === 999) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_2__.default, {
        open: editModalOpen,
        handleClose: () => setEditModalOpen(false),
        data: data,
        editMutation: editHymn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
        open: quickAddModalOpen,
        handleClose: () => setQuickAddModalOpen(false),
        quickAddMutation: quickAddHymn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
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
        if (moment__WEBPACK_IMPORTED_MODULE_7___default()(a.logged) < moment__WEBPACK_IMPORTED_MODULE_7___default()(b.logged)) return 1;
        if (moment__WEBPACK_IMPORTED_MODULE_7___default()(a.logged) > moment__WEBPACK_IMPORTED_MODULE_7___default()(b.logged)) return -1;
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
        if (moment__WEBPACK_IMPORTED_MODULE_7___default()(a.log.logged) < moment__WEBPACK_IMPORTED_MODULE_7___default()(b.log.logged)) return -1;
        if (moment__WEBPACK_IMPORTED_MODULE_7___default()(a.log.logged) > moment__WEBPACK_IMPORTED_MODULE_7___default()(b.log.logged)) return 1;
        return 0;
      });
    } else {
      newestHymns.sort((a, b) => {
        if (moment__WEBPACK_IMPORTED_MODULE_7___default()(a.log.logged) < moment__WEBPACK_IMPORTED_MODULE_7___default()(b.log.logged)) return 1;
        if (moment__WEBPACK_IMPORTED_MODULE_7___default()(a.log.logged) > moment__WEBPACK_IMPORTED_MODULE_7___default()(b.log.logged)) return -1;
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_2__.default, {
      open: editModalOpen && isPasswordCorrect,
      handleClose: closeEdit,
      data: data,
      editMutation: editHymn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__.default, {
      open: pinModalOpen,
      handleClose: () => setPinModalOpen(false),
      isCorrect: values => checkPassword(values)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
      open: quickAddModalOpen && isPasswordCorrect,
      handleClose: closeQuickAdd,
      quickAddMutation: quickAddHymn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Dialog, {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.DialogTitle, {
        id: "alert-dialog-title",
        children: "Use Google's location service?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.DialogContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.DialogContentText, {
          id: "alert-dialog-description",
          children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.DialogActions, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Button, {
          onClick: handleCloseAlert,
          autoFocus: true,
          children: "Disagree"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      children: filteredHymns.sort().map(hymn => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn__WEBPACK_IMPORTED_MODULE_1__.default, {
        name: hymn.name,
        number: hymn.number,
        logs: filteredLogs(hymn.number),
        handleEdit: () => openEditModal(hymn),
        handleQuickAdd: () => openQuickAddModal(hymn)
      }, hymn.number, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(AllHymns, "oFB4KyhRCELIdoVDf8ZC0FzTeMk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2Y0NmFlMjM5ODA1MjViYTFmNzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBb0NBLE1BQU1pQixRQUFpQyxHQUFHLENBQUM7QUFDekNDLEVBQUFBLE1BRHlDO0FBRXpDQyxFQUFBQSxRQUZ5QztBQUd6Q0MsRUFBQUEsT0FIeUM7QUFJekNDLEVBQUFBLFFBSnlDO0FBS3pDQyxFQUFBQSxPQUx5QztBQU16Q0MsRUFBQUE7QUFOeUMsQ0FBRCxLQU9QO0FBQUE7O0FBQ2pDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQnhCLCtDQUFRLENBQWE7QUFDM0N5QixJQUFBQSxJQUFJLEVBQUUsRUFEcUM7QUFFM0NDLElBQUFBLE1BQU0sRUFBRTtBQUZtQyxHQUFiLENBQWhDO0FBSUEsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0M1QiwrQ0FBUSxDQUFVLEtBQVYsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQzZCLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDOUIsK0NBQVEsQ0FBVSxLQUFWLENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUMrQixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q2hDLCtDQUFRLENBQVUsS0FBVixDQUExRDtBQUNBLFFBQU07QUFBQSxPQUFDaUMsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJsQywrQ0FBUSxDQUFVLEtBQVYsQ0FBMUM7QUFFQSxRQUFNO0FBQUEsT0FBQ21DLGlCQUFEO0FBQUEsT0FBb0JDO0FBQXBCLE1BQTRDcEMsK0NBQVEsQ0FBVSxLQUFWLENBQTFEO0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkb0MsSUFBQUEsS0FB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a0RBQUQ7QUFBSyxhQUFPLEVBQUMsTUFBYjtBQUFvQixvQkFBYyxFQUFDLFFBQW5DO0FBQTRDLG1CQUFhLEVBQUMsUUFBMUQ7QUFBQSxnQkFDR25CLGFBQWEsQ0FBQ1EsSUFBZCxHQUFxQmMsR0FBckIsQ0FBMEI3QixJQUFELGlCQUN4Qiw4REFBQywwQ0FBRDtBQUNFLFlBQUksRUFBRUEsSUFBSSxDQUFDckMsSUFEYjtBQUVFLGNBQU0sRUFBRXFDLElBQUksQ0FBQ3BDLE1BRmY7QUFHRSxZQUFJLEVBQUU0QyxZQUFZLENBQUNSLElBQUksQ0FBQ3BDLE1BQU4sQ0FIcEI7QUFJRSxrQkFBVSxFQUFFLE1BQU1tQixhQUFhLENBQUNpQixJQUFELENBSmpDO0FBS0Usc0JBQWMsRUFBRSxNQUFNZixpQkFBaUIsQ0FBQ2UsSUFBRDtBQUx6QyxTQU1PQSxJQUFJLENBQUNwQyxNQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpDRjtBQUFBLGtCQURGO0FBd0RELENBdFBEOztHQUFNVjs7S0FBQUE7QUF3UE4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSHltbnMvQWxsSHltbnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIHVzZVN0YXRlLFxyXG4gIFJlYWN0RWxlbWVudCxcclxuICB1c2VFZmZlY3QsXHJcbiAgU2V0U3RhdGVBY3Rpb24sXHJcbiAgRGlzcGF0Y2gsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIERpYWxvZyxcclxuICBEaWFsb2dBY3Rpb25zLFxyXG4gIERpYWxvZ0NvbnRlbnQsXHJcbiAgRGlhbG9nQ29udGVudFRleHQsXHJcbiAgRGlhbG9nVGl0bGUsXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vLyBpbXBvcnQgRGlhbG9nIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nJztcclxuLy8gaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dBY3Rpb25zJztcclxuLy8gaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dDb250ZW50JztcclxuLy8gaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQ29udGVudFRleHQnO1xyXG4vLyBpbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBIeW1uIGZyb20gXCIuL0h5bW5cIjtcclxuaW1wb3J0IEVkaXRNb2RhbCBmcm9tIFwiLi9IeW1uL0VkaXRcIjtcclxuaW1wb3J0IFBpbk1vZGFsIGZyb20gXCIuL0h5bW4vUGluXCI7XHJcbmltcG9ydCBRdWlja0FkZE1vZGFsIGZyb20gXCIuL0h5bW4vUXVpY2tBZGRcIjtcclxuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvZmV0Y2hlclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmludGVyZmFjZSBFZGl0VmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXNzd29yZFZhbHVlcyB7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1aWNrQWRkVmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSHltblZhbHVlcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTG9nVmFsdWVzIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGxvZ2dlZDogc3RyaW5nO1xyXG4gIGJ5d2hvOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBbGxIeW1uc1Byb3BzIHtcclxuICBmaWx0ZXI6IHN0cmluZztcclxuICBoeW1uRGF0YTogSHltblZhbHVlc1tdO1xyXG4gIGxvZ0RhdGE6IExvZ1ZhbHVlc1tdO1xyXG4gIHNldEh5bW5zOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxIeW1uVmFsdWVzW10+PjtcclxuICBzZXRMb2dzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxMb2dWYWx1ZXNbXT4+O1xyXG4gIHNvcnRlZFJldmVyc2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBBbGxIeW1uczogUmVhY3QuRkM8QWxsSHltbnNQcm9wcz4gPSAoe1xyXG4gIGZpbHRlcixcclxuICBoeW1uRGF0YSxcclxuICBsb2dEYXRhLFxyXG4gIHNldEh5bW5zLFxyXG4gIHNldExvZ3MsXHJcbiAgc29ydGVkUmV2ZXJzZWQsXHJcbn06IEFsbEh5bW5zUHJvcHMpOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEh5bW5WYWx1ZXM+KHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBudW1iZXI6IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2VkaXRNb2RhbE9wZW4sIHNldEVkaXRNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtwaW5Nb2RhbE9wZW4sIHNldFBpbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3F1aWNrQWRkTW9kYWxPcGVuLCBzZXRRdWlja0FkZE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2FsZXJ0T3Blbiwgc2V0QWxlcnRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2lzUGFzc3dvcmRDb3JyZWN0LCBzZXRJc1Bhc3N3b3JkQ29ycmVjdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcIi9hcGkvaHltblwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGh5bW5fZGF0YSkgPT4gc2V0SHltbnMoaHltbl9kYXRhLmh5bW5zKSk7XHJcbiAgICBmZXRjaChcIi9hcGkvbG9nXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigobG9nX2RhdGEpID0+IHNldExvZ3MobG9nX2RhdGEubG9ncykpO1xyXG4gIH0sIFtzZXRIeW1ucywgc2V0TG9nc10pO1xyXG5cclxuICBjb25zdCBvcGVuRWRpdE1vZGFsID0gKHZhbHVlczogSHltblZhbHVlcykgPT4ge1xyXG4gICAgc2V0RWRpdE1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldFBpbk1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldERhdGEodmFsdWVzKTtcclxuICB9O1xyXG4gIGNvbnN0IG9wZW5RdWlja0FkZE1vZGFsID0gKHZhbHVlczogSHltblZhbHVlcykgPT4ge1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXREYXRhKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWRpdEh5bW4gPSAodmFsdWVzOiBFZGl0VmFsdWVzKSA9PiB7XHJcbiAgICBtdXRhdGUoXCIvYXBpL2h5bW5cIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBlZGl0ZWRIeW1uID0gYXdhaXQgZmV0Y2hlcihcIi9hcGkvaHltblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG51bWJlcjogZGF0YS5udW1iZXIsXHJcbiAgICAgICAgICBuZXdOdW1iZXI6IHZhbHVlcy5udW1iZXIsXHJcbiAgICAgICAgICBuZXdOYW1lOiB2YWx1ZXMubmFtZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgbmV3TG9ncyA9IGxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCA9PT0gZGF0YS5udW1iZXIpO1xyXG5cclxuICAgICAgaWYgKHZhbHVlcy5udW1iZXIgPT09IGRhdGEubnVtYmVyKSB7XHJcbiAgICAgICAgZWRpdGVkSHltbi5udW1iZXIgPSBkYXRhLm51bWJlcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdMb2dzLmZvckVhY2goKG5ld0xvZykgPT4ge1xyXG4gICAgICAgICAgbmV3TG9nLmlkID0gdmFsdWVzLm51bWJlcjtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWRpdGVkSHltbi5uYW1lID0gdmFsdWVzLm5hbWU7XHJcbiAgICAgIHNldEh5bW5zKFtcclxuICAgICAgICAuLi5oeW1uRGF0YS5maWx0ZXIoKGh5bW4pID0+IGh5bW4ubnVtYmVyICE9PSBkYXRhLm51bWJlciksXHJcbiAgICAgICAgZWRpdGVkSHltbixcclxuICAgICAgXSk7XHJcbiAgICAgIHNldExvZ3MoWy4uLmxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCAhPT0gZGF0YS5udW1iZXIpXSk7XHJcbiAgICB9KTtcclxuICAgIHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHF1aWNrQWRkSHltbiA9ICh2YWx1ZXM6IFF1aWNrQWRkVmFsdWVzKSA9PiB7XHJcbiAgICBtdXRhdGUoXCIvYXBpL2xvZ1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFkZGVkTG9nID0gYXdhaXQgZmV0Y2hlcihcIi9hcGkvbG9nXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBpZDogZGF0YS5udW1iZXIsXHJcbiAgICAgICAgICBieXdobzogdmFsdWVzLm5hbWUsXHJcbiAgICAgICAgICBsb2dnZWQ6IHZhbHVlcy5kYXRlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGFkZGVkTG9nKTtcclxuICAgICAgaWYgKGFkZGVkTG9nID09PSBbXSkge1xyXG4gICAgICAgIHNldEFsZXJ0T3Blbih0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0TG9ncyhbLi4ubG9nRGF0YSwgYWRkZWRMb2ddKTtcclxuICAgIH0pO1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGlmIChoeW1uRGF0YVswXS5udW1iZXIgPT09IDk5OSB8fCBsb2dEYXRhWzBdLmlkID09PSA5OTkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEVkaXRNb2RhbFxyXG4gICAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3Blbn1cclxuICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICBlZGl0TXV0YXRpb249e2VkaXRIeW1ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFF1aWNrQWRkTW9kYWxcclxuICAgICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVufVxyXG4gICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldFF1aWNrQWRkTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsZXQgZmlsdGVyZWRIeW1ucyA9IFtdO1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZExvZ3MgPSAoaHltbklkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGZsb2dzID0gbG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkID09PSBoeW1uSWQpO1xyXG5cclxuICAgIHJldHVybiBmbG9ncztcclxuICB9O1xyXG5cclxuICBpZiAoZmlsdGVyID09PSBcIlwiKSB7XHJcbiAgICBjb25zdCBuZXdlc3RIeW1ucyA9IFtdIGFzIHVua25vd24gYXMge1xyXG4gICAgICBudW1iZXI6IG51bWJlcjtcclxuICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICBsb2c6IExvZ1ZhbHVlcztcclxuICAgIH1bXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGh5bW5EYXRhWzBdKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcmVkTG9ncygzNzIpKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaHltbkRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbGFzdERhdGVzID0gZmlsdGVyZWRMb2dzKGh5bW5EYXRhW2ldLm51bWJlcik7XHJcbiAgICAgIGxhc3REYXRlcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZ2dlZCkgPCBtb21lbnQoYi5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nZ2VkKSA+IG1vbWVudChiLmxvZ2dlZCkpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICAgIG5ld2VzdEh5bW5zLnB1c2goe1xyXG4gICAgICAgIG51bWJlcjogaHltbkRhdGFbaV0ubnVtYmVyLFxyXG4gICAgICAgIG5hbWU6IGh5bW5EYXRhW2ldLm5hbWUsXHJcbiAgICAgICAgbG9nOiBsYXN0RGF0ZXNbMF0sXHJcbiAgICAgIH0gYXMge1xyXG4gICAgICAgIG51bWJlcjogbnVtYmVyO1xyXG4gICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICBsb2c6IExvZ1ZhbHVlcztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvcnRlZFJldmVyc2VkKSB7XHJcbiAgICAgIG5ld2VzdEh5bW5zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nLmxvZ2dlZCkgPCBtb21lbnQoYi5sb2cubG9nZ2VkKSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2cubG9nZ2VkKSA+IG1vbWVudChiLmxvZy5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdlc3RIeW1ucy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZy5sb2dnZWQpIDwgbW9tZW50KGIubG9nLmxvZ2dlZCkpIHJldHVybiAxO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2cubG9nZ2VkKSA+IG1vbWVudChiLmxvZy5sb2dnZWQpKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcmVkSHltbnMgPSBuZXdlc3RIeW1ucztcclxuICB9IGVsc2Uge1xyXG4gICAgZmlsdGVyZWRIeW1ucyA9IGh5bW5EYXRhLmZpbHRlcihcclxuICAgICAgKGh5bW4pID0+XHJcbiAgICAgICAgaHltbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgaHltbi5udW1iZXIudG9TdHJpbmcoKS5pbmNsdWRlcyhmaWx0ZXIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tQYXNzd29yZCA9ICh2YWx1ZXM6IFBhc3N3b3JkVmFsdWVzKSA9PiB7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdCh2YWx1ZXMucGFzc3dvcmQgPT09IFwicmFoYWJcIiA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlRWRpdCA9ICgpID0+IHtcclxuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsb3NlUXVpY2tBZGQgPSAoKSA9PiB7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICBzZXRBbGVydE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RWRpdE1vZGFsXHJcbiAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3BlbiAmJiBpc1Bhc3N3b3JkQ29ycmVjdH1cclxuICAgICAgICBoYW5kbGVDbG9zZT17Y2xvc2VFZGl0fVxyXG4gICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cclxuICAgICAgLz5cclxuICAgICAgPFBpbk1vZGFsXHJcbiAgICAgICAgb3Blbj17cGluTW9kYWxPcGVufVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGlzQ29ycmVjdD17KHZhbHVlcykgPT4gY2hlY2tQYXNzd29yZCh2YWx1ZXMpfVxyXG4gICAgICAvPlxyXG4gICAgICA8UXVpY2tBZGRNb2RhbFxyXG4gICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVuICYmIGlzUGFzc3dvcmRDb3JyZWN0fVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXtjbG9zZVF1aWNrQWRkfVxyXG4gICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cclxuICAgICAgLz5cclxuICAgICAgPERpYWxvZ1xyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAge1wiVXNlIEdvb2dsZSdzIGxvY2F0aW9uIHNlcnZpY2U/XCJ9XHJcbiAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dCBpZD1cImFsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBMZXQgR29vZ2xlIGhlbHAgYXBwcyBkZXRlcm1pbmUgbG9jYXRpb24uIFRoaXMgbWVhbnMgc2VuZGluZ1xyXG4gICAgICAgICAgICBhbm9ueW1vdXMgbG9jYXRpb24gZGF0YSB0byBHb29nbGUsIGV2ZW4gd2hlbiBubyBhcHBzIGFyZSBydW5uaW5nLlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQWxlcnR9IGF1dG9Gb2N1cz5cclxuICAgICAgICAgICAgRGlzYWdyZWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgey8qIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VBbGVydH0gYXV0b0ZvY3VzPlxyXG4gICAgICAgICAgICBBZ3JlZVxyXG4gICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICB7ZmlsdGVyZWRIeW1ucy5zb3J0KCkubWFwKChoeW1uKSA9PiAoXHJcbiAgICAgICAgICA8SHltblxyXG4gICAgICAgICAgICBuYW1lPXtoeW1uLm5hbWV9XHJcbiAgICAgICAgICAgIG51bWJlcj17aHltbi5udW1iZXJ9XHJcbiAgICAgICAgICAgIGxvZ3M9e2ZpbHRlcmVkTG9ncyhoeW1uLm51bWJlcil9XHJcbiAgICAgICAgICAgIGhhbmRsZUVkaXQ9eygpID0+IG9wZW5FZGl0TW9kYWwoaHltbil9XHJcbiAgICAgICAgICAgIGhhbmRsZVF1aWNrQWRkPXsoKSA9PiBvcGVuUXVpY2tBZGRNb2RhbChoeW1uKX1cclxuICAgICAgICAgICAga2V5PXtoeW1uLm51bWJlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbEh5bW5zO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkRpYWxvZyIsIkRpYWxvZ0FjdGlvbnMiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nQ29udGVudFRleHQiLCJEaWFsb2dUaXRsZSIsIkJ1dHRvbiIsIkh5bW4iLCJFZGl0TW9kYWwiLCJQaW5Nb2RhbCIsIlF1aWNrQWRkTW9kYWwiLCJtdXRhdGUiLCJmZXRjaGVyIiwibW9tZW50IiwiQWxsSHltbnMiLCJmaWx0ZXIiLCJoeW1uRGF0YSIsImxvZ0RhdGEiLCJzZXRIeW1ucyIsInNldExvZ3MiLCJzb3J0ZWRSZXZlcnNlZCIsImRhdGEiLCJzZXREYXRhIiwibmFtZSIsIm51bWJlciIsImVkaXRNb2RhbE9wZW4iLCJzZXRFZGl0TW9kYWxPcGVuIiwicGluTW9kYWxPcGVuIiwic2V0UGluTW9kYWxPcGVuIiwicXVpY2tBZGRNb2RhbE9wZW4iLCJzZXRRdWlja0FkZE1vZGFsT3BlbiIsImFsZXJ0T3BlbiIsInNldEFsZXJ0T3BlbiIsImlzUGFzc3dvcmRDb3JyZWN0Iiwic2V0SXNQYXNzd29yZENvcnJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJoeW1uX2RhdGEiLCJoeW1ucyIsImxvZ19kYXRhIiwibG9ncyIsIm9wZW5FZGl0TW9kYWwiLCJ2YWx1ZXMiLCJvcGVuUXVpY2tBZGRNb2RhbCIsImVkaXRIeW1uIiwiZWRpdGVkSHltbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld051bWJlciIsIm5ld05hbWUiLCJuZXdMb2dzIiwibG9nIiwiaWQiLCJmb3JFYWNoIiwibmV3TG9nIiwiaHltbiIsInF1aWNrQWRkSHltbiIsImFkZGVkTG9nIiwiYnl3aG8iLCJsb2dnZWQiLCJkYXRlIiwiY29uc29sZSIsImZpbHRlcmVkSHltbnMiLCJmaWx0ZXJlZExvZ3MiLCJoeW1uSWQiLCJmbG9ncyIsIm5ld2VzdEh5bW5zIiwiaSIsImxlbmd0aCIsImxhc3REYXRlcyIsInNvcnQiLCJhIiwiYiIsInB1c2giLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidG9TdHJpbmciLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJjbG9zZUVkaXQiLCJjbG9zZVF1aWNrQWRkIiwiaGFuZGxlQ2xvc2VBbGVydCIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=