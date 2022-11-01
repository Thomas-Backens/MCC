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

      if (addedLog.length <= 0) {
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
        lineNumber: 148,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
        open: quickAddModalOpen,
        handleClose: () => setQuickAddModalOpen(false),
        quickAddMutation: quickAddHymn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
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
      lineNumber: 242,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__.default, {
      open: pinModalOpen,
      handleClose: () => setPinModalOpen(false),
      isCorrect: values => checkPassword(values)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
      open: quickAddModalOpen && isPasswordCorrect,
      handleClose: closeQuickAdd,
      quickAddMutation: quickAddHymn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
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
        lineNumber: 260,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(AllHymns, "LPYMIRrZnl2qiiDoylajcXW4ZL4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzllZDU5NzdjNWE1NGM0ZjhmMmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFvQ0EsTUFBTVcsUUFBaUMsR0FBRyxDQUFDO0FBQ3pDQyxFQUFBQSxNQUR5QztBQUV6Q0MsRUFBQUEsUUFGeUM7QUFHekNDLEVBQUFBLE9BSHlDO0FBSXpDQyxFQUFBQSxRQUp5QztBQUt6Q0MsRUFBQUEsT0FMeUM7QUFNekNDLEVBQUFBO0FBTnlDLENBQUQsS0FPUDtBQUFBOztBQUNqQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JsQiwrQ0FBUSxDQUFhO0FBQzNDbUIsSUFBQUEsSUFBSSxFQUFFLEVBRHFDO0FBRTNDQyxJQUFBQSxNQUFNLEVBQUU7QUFGbUMsR0FBYixDQUFoQztBQUlBLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DdEIsK0NBQVEsQ0FBVSxLQUFWLENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUN1QixZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ3hCLCtDQUFRLENBQVUsS0FBVixDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDeUIsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNEMxQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBMUQ7QUFFQSxRQUFNO0FBQUEsT0FBQzJCLGlCQUFEO0FBQUEsT0FBb0JDO0FBQXBCLE1BQTRDNUIsK0NBQVEsQ0FBVSxLQUFWLENBQTFEO0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkNEIsSUFBQUEsS0FBSyxDQUFDLFdBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1NDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBRHRCLEVBRUdGLElBRkgsQ0FFU0csU0FBRCxJQUFlbkIs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QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FLDhEQUFDLDhDQUFEO0FBQ0UsVUFBSSxFQUFFakIsWUFEUjtBQUVFLGlCQUFXLEVBQUUsTUFBTUMsZUFBZSxDQUFDLEtBQUQsQ0FGcEM7QUFHRSxlQUFTLEVBQUdjLE1BQUQsSUFBWXVDLGFBQWEsQ0FBQ3ZDLE1BQUQ7QUFIdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVlFLDhEQUFDLG1EQUFEO0FBQ0UsVUFBSSxFQUFFYixpQkFBaUIsSUFBSUUsaUJBRDdCO0FBRUUsaUJBQVcsRUFBRXFELGFBRmY7QUFHRSxzQkFBZ0IsRUFBRXpCO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFpQkUsOERBQUMsa0RBQUQ7QUFBSyxhQUFPLEVBQUMsTUFBYjtBQUFvQixvQkFBYyxFQUFDLFFBQW5DO0FBQTRDLG1CQUFhLEVBQUMsUUFBMUQ7QUFBQSxnQkFDR1EsYUFBYSxDQUFDTyxJQUFkLEdBQXFCWSxHQUFyQixDQUEwQjVCLElBQUQsaUJBQ3hCLDhEQUFDLDBDQUFEO0FBQ0UsWUFBSSxFQUFFQSxJQUFJLENBQUNuQyxJQURiO0FBRUUsY0FBTSxFQUFFbUMsSUFBSSxDQUFDbEMsTUFGZjtBQUdFLFlBQUksRUFBRTRDLFlBQVksQ0FBQ1YsSUFBSSxDQUFDbEMsTUFBTixDQUhwQjtBQUlFLGtCQUFVLEVBQUUsTUFBTWlCLGFBQWEsQ0FBQ2lCLElBQUQsQ0FKakM7QUFLRSxzQkFBYyxFQUFFLE1BQU1mLGlCQUFpQixDQUFDZSxJQUFEO0FBTHpDLFNBTU9BLElBQUksQ0FBQ2xDLE1BTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGO0FBQUEsa0JBREY7QUFnQ0QsQ0E3TkQ7O0dBQU1WOztLQUFBQTtBQStOTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IeW1ucy9BbGxIeW1ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgdXNlU3RhdGUsXHJcbiAgUmVhY3RFbGVtZW50LFxyXG4gIHVzZUVmZmVjdCxcclxuICBTZXRTdGF0ZUFjdGlvbixcclxuICBEaXNwYXRjaCxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBIeW1uIGZyb20gXCIuL0h5bW5cIjtcclxuaW1wb3J0IEVkaXRNb2RhbCBmcm9tIFwiLi9IeW1uL0VkaXRcIjtcclxuaW1wb3J0IFBpbk1vZGFsIGZyb20gXCIuL0h5bW4vUGluXCI7XHJcbmltcG9ydCBRdWlja0FkZE1vZGFsIGZyb20gXCIuL0h5bW4vUXVpY2tBZGRcIjtcclxuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvZmV0Y2hlclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmludGVyZmFjZSBFZGl0VmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXNzd29yZFZhbHVlcyB7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1aWNrQWRkVmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSHltblZhbHVlcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTG9nVmFsdWVzIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGxvZ2dlZDogc3RyaW5nO1xyXG4gIGJ5d2hvOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBbGxIeW1uc1Byb3BzIHtcclxuICBmaWx0ZXI6IHN0cmluZztcclxuICBoeW1uRGF0YTogSHltblZhbHVlc1tdO1xyXG4gIGxvZ0RhdGE6IExvZ1ZhbHVlc1tdO1xyXG4gIHNldEh5bW5zOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxIeW1uVmFsdWVzW10+PjtcclxuICBzZXRMb2dzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxMb2dWYWx1ZXNbXT4+O1xyXG4gIHNvcnRlZFJldmVyc2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBBbGxIeW1uczogUmVhY3QuRkM8QWxsSHltbnNQcm9wcz4gPSAoe1xyXG4gIGZpbHRlcixcclxuICBoeW1uRGF0YSxcclxuICBsb2dEYXRhLFxyXG4gIHNldEh5bW5zLFxyXG4gIHNldExvZ3MsXHJcbiAgc29ydGVkUmV2ZXJzZWQsXHJcbn06IEFsbEh5bW5zUHJvcHMpOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEh5bW5WYWx1ZXM+KHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBudW1iZXI6IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2VkaXRNb2RhbE9wZW4sIHNldEVkaXRNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtwaW5Nb2RhbE9wZW4sIHNldFBpbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3F1aWNrQWRkTW9kYWxPcGVuLCBzZXRRdWlja0FkZE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtpc1Bhc3N3b3JkQ29ycmVjdCwgc2V0SXNQYXNzd29yZENvcnJlY3RdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCIvYXBpL2h5bW5cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChoeW1uX2RhdGEpID0+IHNldEh5bW5zKGh5bW5fZGF0YS5oeW1ucykpO1xyXG4gICAgZmV0Y2goXCIvYXBpL2xvZ1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGxvZ19kYXRhKSA9PiBzZXRMb2dzKGxvZ19kYXRhLmxvZ3MpKTtcclxuICB9LCBbc2V0SHltbnMsIHNldExvZ3NdKTtcclxuXHJcbiAgY29uc3Qgb3BlbkVkaXRNb2RhbCA9ICh2YWx1ZXM6IEh5bW5WYWx1ZXMpID0+IHtcclxuICAgIHNldEVkaXRNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXREYXRhKHZhbHVlcyk7XHJcbiAgfTtcclxuICBjb25zdCBvcGVuUXVpY2tBZGRNb2RhbCA9ICh2YWx1ZXM6IEh5bW5WYWx1ZXMpID0+IHtcclxuICAgIHNldFF1aWNrQWRkTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgc2V0RGF0YSh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVkaXRIeW1uID0gKHZhbHVlczogRWRpdFZhbHVlcykgPT4ge1xyXG4gICAgbXV0YXRlKFwiL2FwaS9oeW1uXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZWRpdGVkSHltbiA9IGF3YWl0IGZldGNoZXIoXCIvYXBpL2h5bW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBudW1iZXI6IGRhdGEubnVtYmVyLFxyXG4gICAgICAgICAgbmV3TnVtYmVyOiB2YWx1ZXMubnVtYmVyLFxyXG4gICAgICAgICAgbmV3TmFtZTogdmFsdWVzLm5hbWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5ld0xvZ3MgPSBsb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgPT09IGRhdGEubnVtYmVyKTtcclxuXHJcbiAgICAgIGlmICh2YWx1ZXMubnVtYmVyID09PSBkYXRhLm51bWJlcikge1xyXG4gICAgICAgIGVkaXRlZEh5bW4ubnVtYmVyID0gZGF0YS5udW1iZXI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TG9ncy5mb3JFYWNoKChuZXdMb2cpID0+IHtcclxuICAgICAgICAgIG5ld0xvZy5pZCA9IHZhbHVlcy5udW1iZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVkaXRlZEh5bW4ubmFtZSA9IHZhbHVlcy5uYW1lO1xyXG4gICAgICBzZXRIeW1ucyhbXHJcbiAgICAgICAgLi4uaHltbkRhdGEuZmlsdGVyKChoeW1uKSA9PiBoeW1uLm51bWJlciAhPT0gZGF0YS5udW1iZXIpLFxyXG4gICAgICAgIGVkaXRlZEh5bW4sXHJcbiAgICAgIF0pO1xyXG4gICAgICBzZXRMb2dzKFsuLi5sb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgIT09IGRhdGEubnVtYmVyKV0pO1xyXG4gICAgfSk7XHJcbiAgICBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBxdWlja0FkZEh5bW4gPSAodmFsdWVzOiBRdWlja0FkZFZhbHVlcykgPT4ge1xyXG4gICAgbXV0YXRlKFwiL2FwaS9sb2dcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBhZGRlZExvZyA9IGF3YWl0IGZldGNoZXIoXCIvYXBpL2xvZ1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgaWQ6IGRhdGEubnVtYmVyLFxyXG4gICAgICAgICAgYnl3aG86IHZhbHVlcy5uYW1lLFxyXG4gICAgICAgICAgbG9nZ2VkOiB2YWx1ZXMuZGF0ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhhZGRlZExvZyk7XHJcbiAgICAgIGlmIChhZGRlZExvZy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIHNldEFsZXJ0T3Blbih0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0TG9ncyhbLi4ubG9nRGF0YSwgYWRkZWRMb2ddKTtcclxuICAgIH0pO1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGlmIChoeW1uRGF0YVswXS5udW1iZXIgPT09IDk5OSB8fCBsb2dEYXRhWzBdLmlkID09PSA5OTkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEVkaXRNb2RhbFxyXG4gICAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3Blbn1cclxuICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICBlZGl0TXV0YXRpb249e2VkaXRIeW1ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFF1aWNrQWRkTW9kYWxcclxuICAgICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVufVxyXG4gICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldFF1aWNrQWRkTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsZXQgZmlsdGVyZWRIeW1ucyA9IFtdO1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZExvZ3MgPSAoaHltbklkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGZsb2dzID0gbG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkID09PSBoeW1uSWQpO1xyXG5cclxuICAgIHJldHVybiBmbG9ncztcclxuICB9O1xyXG5cclxuICBpZiAoZmlsdGVyID09PSBcIlwiKSB7XHJcbiAgICBjb25zdCBuZXdlc3RIeW1ucyA9IFtdIGFzIHVua25vd24gYXMge1xyXG4gICAgICBudW1iZXI6IG51bWJlcjtcclxuICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICBsb2c6IExvZ1ZhbHVlcztcclxuICAgIH1bXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGh5bW5EYXRhWzBdKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcmVkTG9ncygzNzIpKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaHltbkRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbGFzdERhdGVzID0gZmlsdGVyZWRMb2dzKGh5bW5EYXRhW2ldLm51bWJlcik7XHJcbiAgICAgIGxhc3REYXRlcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZ2dlZCkgPCBtb21lbnQoYi5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nZ2VkKSA+IG1vbWVudChiLmxvZ2dlZCkpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICAgIG5ld2VzdEh5bW5zLnB1c2goe1xyXG4gICAgICAgIG51bWJlcjogaHltbkRhdGFbaV0ubnVtYmVyLFxyXG4gICAgICAgIG5hbWU6IGh5bW5EYXRhW2ldLm5hbWUsXHJcbiAgICAgICAgbG9nOiBsYXN0RGF0ZXNbMF0sXHJcbiAgICAgIH0gYXMge1xyXG4gICAgICAgIG51bWJlcjogbnVtYmVyO1xyXG4gICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICBsb2c6IExvZ1ZhbHVlcztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvcnRlZFJldmVyc2VkKSB7XHJcbiAgICAgIG5ld2VzdEh5bW5zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nLmxvZ2dlZCkgPCBtb21lbnQoYi5sb2cubG9nZ2VkKSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2cubG9nZ2VkKSA+IG1vbWVudChiLmxvZy5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdlc3RIeW1ucy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZy5sb2dnZWQpIDwgbW9tZW50KGIubG9nLmxvZ2dlZCkpIHJldHVybiAxO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2cubG9nZ2VkKSA+IG1vbWVudChiLmxvZy5sb2dnZWQpKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcmVkSHltbnMgPSBuZXdlc3RIeW1ucztcclxuICB9IGVsc2Uge1xyXG4gICAgZmlsdGVyZWRIeW1ucyA9IGh5bW5EYXRhLmZpbHRlcihcclxuICAgICAgKGh5bW4pID0+XHJcbiAgICAgICAgaHltbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgaHltbi5udW1iZXIudG9TdHJpbmcoKS5pbmNsdWRlcyhmaWx0ZXIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tQYXNzd29yZCA9ICh2YWx1ZXM6IFBhc3N3b3JkVmFsdWVzKSA9PiB7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdCh2YWx1ZXMucGFzc3dvcmQgPT09IFwicmFoYWJcIiA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlRWRpdCA9ICgpID0+IHtcclxuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsb3NlUXVpY2tBZGQgPSAoKSA9PiB7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICBzZXRBbGVydE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RWRpdE1vZGFsXHJcbiAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3BlbiAmJiBpc1Bhc3N3b3JkQ29ycmVjdH1cclxuICAgICAgICBoYW5kbGVDbG9zZT17Y2xvc2VFZGl0fVxyXG4gICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cclxuICAgICAgLz5cclxuICAgICAgPFBpbk1vZGFsXHJcbiAgICAgICAgb3Blbj17cGluTW9kYWxPcGVufVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGlzQ29ycmVjdD17KHZhbHVlcykgPT4gY2hlY2tQYXNzd29yZCh2YWx1ZXMpfVxyXG4gICAgICAvPlxyXG4gICAgICA8UXVpY2tBZGRNb2RhbFxyXG4gICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVuICYmIGlzUGFzc3dvcmRDb3JyZWN0fVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXtjbG9zZVF1aWNrQWRkfVxyXG4gICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cclxuICAgICAgLz5cclxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgIHtmaWx0ZXJlZEh5bW5zLnNvcnQoKS5tYXAoKGh5bW4pID0+IChcclxuICAgICAgICAgIDxIeW1uXHJcbiAgICAgICAgICAgIG5hbWU9e2h5bW4ubmFtZX1cclxuICAgICAgICAgICAgbnVtYmVyPXtoeW1uLm51bWJlcn1cclxuICAgICAgICAgICAgbG9ncz17ZmlsdGVyZWRMb2dzKGh5bW4ubnVtYmVyKX1cclxuICAgICAgICAgICAgaGFuZGxlRWRpdD17KCkgPT4gb3BlbkVkaXRNb2RhbChoeW1uKX1cclxuICAgICAgICAgICAgaGFuZGxlUXVpY2tBZGQ9eygpID0+IG9wZW5RdWlja0FkZE1vZGFsKGh5bW4pfVxyXG4gICAgICAgICAgICBrZXk9e2h5bW4ubnVtYmVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsSHltbnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiSHltbiIsIkVkaXRNb2RhbCIsIlBpbk1vZGFsIiwiUXVpY2tBZGRNb2RhbCIsIm11dGF0ZSIsImZldGNoZXIiLCJtb21lbnQiLCJBbGxIeW1ucyIsImZpbHRlciIsImh5bW5EYXRhIiwibG9nRGF0YSIsInNldEh5bW5zIiwic2V0TG9ncyIsInNvcnRlZFJldmVyc2VkIiwiZGF0YSIsInNldERhdGEiLCJuYW1lIiwibnVtYmVyIiwiZWRpdE1vZGFsT3BlbiIsInNldEVkaXRNb2RhbE9wZW4iLCJwaW5Nb2RhbE9wZW4iLCJzZXRQaW5Nb2RhbE9wZW4iLCJxdWlja0FkZE1vZGFsT3BlbiIsInNldFF1aWNrQWRkTW9kYWxPcGVuIiwiaXNQYXNzd29yZENvcnJlY3QiLCJzZXRJc1Bhc3N3b3JkQ29ycmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImh5bW5fZGF0YSIsImh5bW5zIiwibG9nX2RhdGEiLCJsb2dzIiwib3BlbkVkaXRNb2RhbCIsInZhbHVlcyIsIm9wZW5RdWlja0FkZE1vZGFsIiwiZWRpdEh5bW4iLCJlZGl0ZWRIeW1uIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3TnVtYmVyIiwibmV3TmFtZSIsIm5ld0xvZ3MiLCJsb2ciLCJpZCIsImZvckVhY2giLCJuZXdMb2ciLCJoeW1uIiwicXVpY2tBZGRIeW1uIiwiYWRkZWRMb2ciLCJieXdobyIsImxvZ2dlZCIsImRhdGUiLCJjb25zb2xlIiwibGVuZ3RoIiwic2V0QWxlcnRPcGVuIiwiZmlsdGVyZWRIeW1ucyIsImZpbHRlcmVkTG9ncyIsImh5bW5JZCIsImZsb2dzIiwibmV3ZXN0SHltbnMiLCJpIiwibGFzdERhdGVzIiwic29ydCIsImEiLCJiIiwicHVzaCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsImNoZWNrUGFzc3dvcmQiLCJwYXNzd29yZCIsImNsb3NlRWRpdCIsImNsb3NlUXVpY2tBZGQiLCJoYW5kbGVDbG9zZUFsZXJ0IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==