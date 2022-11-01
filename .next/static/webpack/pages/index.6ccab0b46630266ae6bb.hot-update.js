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
        lineNumber: 149,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
        open: quickAddModalOpen,
        handleClose: () => setQuickAddModalOpen(false),
        quickAddMutation: quickAddHymn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
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
      lineNumber: 243,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__.default, {
      open: pinModalOpen,
      handleClose: () => setPinModalOpen(false),
      isCorrect: values => checkPassword(values)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
      open: quickAddModalOpen && isPasswordCorrect,
      handleClose: closeQuickAdd,
      quickAddMutation: quickAddHymn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Alert__WEBPACK_IMPORTED_MODULE_5__.default, {
      open: alertOpen,
      handleClose: handleCloseAlert
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 259,
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
        lineNumber: 262,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 260,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmNjYWIwYjQ2NjMwMjY2YWU2YmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFvQ0EsTUFBTVksUUFBaUMsR0FBRyxDQUFDO0FBQ3pDQyxFQUFBQSxNQUR5QztBQUV6Q0MsRUFBQUEsUUFGeUM7QUFHekNDLEVBQUFBLE9BSHlDO0FBSXpDQyxFQUFBQSxRQUp5QztBQUt6Q0MsRUFBQUEsT0FMeUM7QUFNekNDLEVBQUFBO0FBTnlDLENBQUQsS0FPUDtBQUFBOztBQUNqQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JuQiwrQ0FBUSxDQUFhO0FBQzNDb0IsSUFBQUEsSUFBSSxFQUFFLEVBRHFDO0FBRTNDQyxJQUFBQSxNQUFNLEVBQUU7QUFGbUMsR0FBYixDQUFoQztBQUlBLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DdkIsK0NBQVEsQ0FBVSxLQUFWLENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUN3QixZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ3pCLCtDQUFRLENBQVUsS0FBVixDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDMEIsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNEMzQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBMUQ7QUFDQSxRQUFNO0FBQUEsT0FBQzRCLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCN0IsK0NBQVEsQ0FBVSxLQUFWLENBQTFDO0FBRUEsUUFBTTtBQUFBLE9BQUM4QixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Qy9CLCtDQUFRLENBQVUsS0FBVixDQUExRDtBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCtCLElBQUFBLEtBQUssQ0FBQyxXQUFELENBQUws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O0FBQUEsa0JBREY7QUFpQ0QsQ0E5TkQ7O0dBQU1WOztLQUFBQTtBQWdPTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IeW1ucy9BbGxIeW1ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgdXNlU3RhdGUsXHJcbiAgUmVhY3RFbGVtZW50LFxyXG4gIHVzZUVmZmVjdCxcclxuICBTZXRTdGF0ZUFjdGlvbixcclxuICBEaXNwYXRjaCxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBIeW1uIGZyb20gXCIuL0h5bW5cIjtcclxuaW1wb3J0IEVkaXRNb2RhbCBmcm9tIFwiLi9IeW1uL0VkaXRcIjtcclxuaW1wb3J0IFBpbk1vZGFsIGZyb20gXCIuL0h5bW4vUGluXCI7XHJcbmltcG9ydCBRdWlja0FkZE1vZGFsIGZyb20gXCIuL0h5bW4vUXVpY2tBZGRcIjtcclxuaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gXCIuL0h5bW4vQWxlcnRcIjtcclxuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvZmV0Y2hlclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmludGVyZmFjZSBFZGl0VmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXNzd29yZFZhbHVlcyB7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1aWNrQWRkVmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSHltblZhbHVlcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTG9nVmFsdWVzIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGxvZ2dlZDogc3RyaW5nO1xyXG4gIGJ5d2hvOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBbGxIeW1uc1Byb3BzIHtcclxuICBmaWx0ZXI6IHN0cmluZztcclxuICBoeW1uRGF0YTogSHltblZhbHVlc1tdO1xyXG4gIGxvZ0RhdGE6IExvZ1ZhbHVlc1tdO1xyXG4gIHNldEh5bW5zOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxIeW1uVmFsdWVzW10+PjtcclxuICBzZXRMb2dzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxMb2dWYWx1ZXNbXT4+O1xyXG4gIHNvcnRlZFJldmVyc2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBBbGxIeW1uczogUmVhY3QuRkM8QWxsSHltbnNQcm9wcz4gPSAoe1xyXG4gIGZpbHRlcixcclxuICBoeW1uRGF0YSxcclxuICBsb2dEYXRhLFxyXG4gIHNldEh5bW5zLFxyXG4gIHNldExvZ3MsXHJcbiAgc29ydGVkUmV2ZXJzZWQsXHJcbn06IEFsbEh5bW5zUHJvcHMpOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEh5bW5WYWx1ZXM+KHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBudW1iZXI6IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2VkaXRNb2RhbE9wZW4sIHNldEVkaXRNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtwaW5Nb2RhbE9wZW4sIHNldFBpbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3F1aWNrQWRkTW9kYWxPcGVuLCBzZXRRdWlja0FkZE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2FsZXJ0T3Blbiwgc2V0QWxlcnRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2lzUGFzc3dvcmRDb3JyZWN0LCBzZXRJc1Bhc3N3b3JkQ29ycmVjdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcIi9hcGkvaHltblwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGh5bW5fZGF0YSkgPT4gc2V0SHltbnMoaHltbl9kYXRhLmh5bW5zKSk7XHJcbiAgICBmZXRjaChcIi9hcGkvbG9nXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigobG9nX2RhdGEpID0+IHNldExvZ3MobG9nX2RhdGEubG9ncykpO1xyXG4gIH0sIFtzZXRIeW1ucywgc2V0TG9nc10pO1xyXG5cclxuICBjb25zdCBvcGVuRWRpdE1vZGFsID0gKHZhbHVlczogSHltblZhbHVlcykgPT4ge1xyXG4gICAgc2V0RWRpdE1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldFBpbk1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldERhdGEodmFsdWVzKTtcclxuICB9O1xyXG4gIGNvbnN0IG9wZW5RdWlja0FkZE1vZGFsID0gKHZhbHVlczogSHltblZhbHVlcykgPT4ge1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXREYXRhKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWRpdEh5bW4gPSAodmFsdWVzOiBFZGl0VmFsdWVzKSA9PiB7XHJcbiAgICBtdXRhdGUoXCIvYXBpL2h5bW5cIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBlZGl0ZWRIeW1uID0gYXdhaXQgZmV0Y2hlcihcIi9hcGkvaHltblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG51bWJlcjogZGF0YS5udW1iZXIsXHJcbiAgICAgICAgICBuZXdOdW1iZXI6IHZhbHVlcy5udW1iZXIsXHJcbiAgICAgICAgICBuZXdOYW1lOiB2YWx1ZXMubmFtZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgbmV3TG9ncyA9IGxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCA9PT0gZGF0YS5udW1iZXIpO1xyXG5cclxuICAgICAgaWYgKHZhbHVlcy5udW1iZXIgPT09IGRhdGEubnVtYmVyKSB7XHJcbiAgICAgICAgZWRpdGVkSHltbi5udW1iZXIgPSBkYXRhLm51bWJlcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdMb2dzLmZvckVhY2goKG5ld0xvZykgPT4ge1xyXG4gICAgICAgICAgbmV3TG9nLmlkID0gdmFsdWVzLm51bWJlcjtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWRpdGVkSHltbi5uYW1lID0gdmFsdWVzLm5hbWU7XHJcbiAgICAgIHNldEh5bW5zKFtcclxuICAgICAgICAuLi5oeW1uRGF0YS5maWx0ZXIoKGh5bW4pID0+IGh5bW4ubnVtYmVyICE9PSBkYXRhLm51bWJlciksXHJcbiAgICAgICAgZWRpdGVkSHltbixcclxuICAgICAgXSk7XHJcbiAgICAgIHNldExvZ3MoWy4uLmxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCAhPT0gZGF0YS5udW1iZXIpXSk7XHJcbiAgICB9KTtcclxuICAgIHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHF1aWNrQWRkSHltbiA9ICh2YWx1ZXM6IFF1aWNrQWRkVmFsdWVzKSA9PiB7XHJcbiAgICBtdXRhdGUoXCIvYXBpL2xvZ1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFkZGVkTG9nID0gYXdhaXQgZmV0Y2hlcihcIi9hcGkvbG9nXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBpZDogZGF0YS5udW1iZXIsXHJcbiAgICAgICAgICBieXdobzogdmFsdWVzLm5hbWUsXHJcbiAgICAgICAgICBsb2dnZWQ6IHZhbHVlcy5kYXRlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChhZGRlZExvZy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIHNldEFsZXJ0T3Blbih0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0TG9ncyhbLi4ubG9nRGF0YSwgYWRkZWRMb2ddKTtcclxuICAgIH0pO1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGlmIChoeW1uRGF0YVswXS5udW1iZXIgPT09IDk5OSB8fCBsb2dEYXRhWzBdLmlkID09PSA5OTkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEVkaXRNb2RhbFxyXG4gICAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3Blbn1cclxuICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICBlZGl0TXV0YXRpb249e2VkaXRIeW1ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFF1aWNrQWRkTW9kYWxcclxuICAgICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVufVxyXG4gICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldFF1aWNrQWRkTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsZXQgZmlsdGVyZWRIeW1ucyA9IFtdO1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZExvZ3MgPSAoaHltbklkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGZsb2dzID0gbG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkID09PSBoeW1uSWQpO1xyXG5cclxuICAgIHJldHVybiBmbG9ncztcclxuICB9O1xyXG5cclxuICBpZiAoZmlsdGVyID09PSBcIlwiKSB7XHJcbiAgICBjb25zdCBuZXdlc3RIeW1ucyA9IFtdIGFzIHVua25vd24gYXMge1xyXG4gICAgICBudW1iZXI6IG51bWJlcjtcclxuICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICBsb2c6IExvZ1ZhbHVlcztcclxuICAgIH1bXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGh5bW5EYXRhWzBdKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcmVkTG9ncygzNzIpKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaHltbkRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbGFzdERhdGVzID0gZmlsdGVyZWRMb2dzKGh5bW5EYXRhW2ldLm51bWJlcik7XHJcbiAgICAgIGxhc3REYXRlcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZ2dlZCkgPCBtb21lbnQoYi5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nZ2VkKSA+IG1vbWVudChiLmxvZ2dlZCkpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICAgIG5ld2VzdEh5bW5zLnB1c2goe1xyXG4gICAgICAgIG51bWJlcjogaHltbkRhdGFbaV0ubnVtYmVyLFxyXG4gICAgICAgIG5hbWU6IGh5bW5EYXRhW2ldLm5hbWUsXHJcbiAgICAgICAgbG9nOiBsYXN0RGF0ZXNbMF0sXHJcbiAgICAgIH0gYXMge1xyXG4gICAgICAgIG51bWJlcjogbnVtYmVyO1xyXG4gICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICBsb2c6IExvZ1ZhbHVlcztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvcnRlZFJldmVyc2VkKSB7XHJcbiAgICAgIG5ld2VzdEh5bW5zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nLmxvZ2dlZCkgPCBtb21lbnQoYi5sb2cubG9nZ2VkKSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2cubG9nZ2VkKSA+IG1vbWVudChiLmxvZy5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdlc3RIeW1ucy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZy5sb2dnZWQpIDwgbW9tZW50KGIubG9nLmxvZ2dlZCkpIHJldHVybiAxO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2cubG9nZ2VkKSA+IG1vbWVudChiLmxvZy5sb2dnZWQpKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcmVkSHltbnMgPSBuZXdlc3RIeW1ucztcclxuICB9IGVsc2Uge1xyXG4gICAgZmlsdGVyZWRIeW1ucyA9IGh5bW5EYXRhLmZpbHRlcihcclxuICAgICAgKGh5bW4pID0+XHJcbiAgICAgICAgaHltbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgaHltbi5udW1iZXIudG9TdHJpbmcoKS5pbmNsdWRlcyhmaWx0ZXIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tQYXNzd29yZCA9ICh2YWx1ZXM6IFBhc3N3b3JkVmFsdWVzKSA9PiB7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdCh2YWx1ZXMucGFzc3dvcmQgPT09IFwicmFoYWJcIiA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlRWRpdCA9ICgpID0+IHtcclxuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsb3NlUXVpY2tBZGQgPSAoKSA9PiB7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICBzZXRBbGVydE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RWRpdE1vZGFsXHJcbiAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3BlbiAmJiBpc1Bhc3N3b3JkQ29ycmVjdH1cclxuICAgICAgICBoYW5kbGVDbG9zZT17Y2xvc2VFZGl0fVxyXG4gICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cclxuICAgICAgLz5cclxuICAgICAgPFBpbk1vZGFsXHJcbiAgICAgICAgb3Blbj17cGluTW9kYWxPcGVufVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGlzQ29ycmVjdD17KHZhbHVlcykgPT4gY2hlY2tQYXNzd29yZCh2YWx1ZXMpfVxyXG4gICAgICAvPlxyXG4gICAgICA8UXVpY2tBZGRNb2RhbFxyXG4gICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVuICYmIGlzUGFzc3dvcmRDb3JyZWN0fVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXtjbG9zZVF1aWNrQWRkfVxyXG4gICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cclxuICAgICAgLz5cclxuICAgICAgPEFsZXJ0RGlhbG9nIG9wZW49e2FsZXJ0T3Blbn0gaGFuZGxlQ2xvc2U9e2hhbmRsZUNsb3NlQWxlcnR9IC8+XHJcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICB7ZmlsdGVyZWRIeW1ucy5zb3J0KCkubWFwKChoeW1uKSA9PiAoXHJcbiAgICAgICAgICA8SHltblxyXG4gICAgICAgICAgICBuYW1lPXtoeW1uLm5hbWV9XHJcbiAgICAgICAgICAgIG51bWJlcj17aHltbi5udW1iZXJ9XHJcbiAgICAgICAgICAgIGxvZ3M9e2ZpbHRlcmVkTG9ncyhoeW1uLm51bWJlcil9XHJcbiAgICAgICAgICAgIGhhbmRsZUVkaXQ9eygpID0+IG9wZW5FZGl0TW9kYWwoaHltbil9XHJcbiAgICAgICAgICAgIGhhbmRsZVF1aWNrQWRkPXsoKSA9PiBvcGVuUXVpY2tBZGRNb2RhbChoeW1uKX1cclxuICAgICAgICAgICAga2V5PXtoeW1uLm51bWJlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbEh5bW5zO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkh5bW4iLCJFZGl0TW9kYWwiLCJQaW5Nb2RhbCIsIlF1aWNrQWRkTW9kYWwiLCJBbGVydERpYWxvZyIsIm11dGF0ZSIsImZldGNoZXIiLCJtb21lbnQiLCJBbGxIeW1ucyIsImZpbHRlciIsImh5bW5EYXRhIiwibG9nRGF0YSIsInNldEh5bW5zIiwic2V0TG9ncyIsInNvcnRlZFJldmVyc2VkIiwiZGF0YSIsInNldERhdGEiLCJuYW1lIiwibnVtYmVyIiwiZWRpdE1vZGFsT3BlbiIsInNldEVkaXRNb2RhbE9wZW4iLCJwaW5Nb2RhbE9wZW4iLCJzZXRQaW5Nb2RhbE9wZW4iLCJxdWlja0FkZE1vZGFsT3BlbiIsInNldFF1aWNrQWRkTW9kYWxPcGVuIiwiYWxlcnRPcGVuIiwic2V0QWxlcnRPcGVuIiwiaXNQYXNzd29yZENvcnJlY3QiLCJzZXRJc1Bhc3N3b3JkQ29ycmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImh5bW5fZGF0YSIsImh5bW5zIiwibG9nX2RhdGEiLCJsb2dzIiwib3BlbkVkaXRNb2RhbCIsInZhbHVlcyIsIm9wZW5RdWlja0FkZE1vZGFsIiwiZWRpdEh5bW4iLCJlZGl0ZWRIeW1uIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3TnVtYmVyIiwibmV3TmFtZSIsIm5ld0xvZ3MiLCJsb2ciLCJpZCIsImZvckVhY2giLCJuZXdMb2ciLCJoeW1uIiwicXVpY2tBZGRIeW1uIiwiYWRkZWRMb2ciLCJieXdobyIsImxvZ2dlZCIsImRhdGUiLCJsZW5ndGgiLCJmaWx0ZXJlZEh5bW5zIiwiZmlsdGVyZWRMb2dzIiwiaHltbklkIiwiZmxvZ3MiLCJuZXdlc3RIeW1ucyIsImkiLCJsYXN0RGF0ZXMiLCJzb3J0IiwiYSIsImIiLCJwdXNoIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwiY2xvc2VFZGl0IiwiY2xvc2VRdWlja0FkZCIsImhhbmRsZUNsb3NlQWxlcnQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9