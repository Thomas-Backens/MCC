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
        lineNumber: 150,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_2__.default, {
      open: editModalOpen && isPasswordCorrect,
      handleClose: closeEdit,
      data: data,
      editMutation: editHymn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__.default, {
      open: pinModalOpen,
      handleClose: () => setPinModalOpen(false),
      isCorrect: values => checkPassword(values)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
      open: quickAddModalOpen && isPasswordCorrect,
      handleClose: closeQuickAdd,
      quickAddMutation: quickAddHymn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
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
        lineNumber: 258,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 256,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWRjZDczZWI2NzhhMTJkN2E0Y2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQVFBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBb0NBLE1BQU1XLFFBQWlDLEdBQUcsQ0FBQztBQUN6Q0MsRUFBQUEsTUFEeUM7QUFFekNDLEVBQUFBLFFBRnlDO0FBR3pDQyxFQUFBQSxPQUh5QztBQUl6Q0MsRUFBQUEsUUFKeUM7QUFLekNDLEVBQUFBLE9BTHlDO0FBTXpDQyxFQUFBQTtBQU55QyxDQUFELEtBT1A7QUFBQTs7QUFDakMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCbEIsK0NBQVEsQ0FBYTtBQUMzQ21CLElBQUFBLElBQUksRUFBRSxFQURxQztBQUUzQ0MsSUFBQUEsTUFBTSxFQUFFO0FBRm1DLEdBQWIsQ0FBaEM7QUFJQSxRQUFNO0FBQUEsT0FBQ0MsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ3RCLCtDQUFRLENBQVUsS0FBVixDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDdUIsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0N4QiwrQ0FBUSxDQUFVLEtBQVYsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3lCLGlCQUFEO0FBQUEsT0FBb0JDO0FBQXBCLE1BQTRDMUIsK0NBQVEsQ0FBVSxLQUFWLENBQTFEO0FBRUEsUUFBTTtBQUFBLE9BQUMyQixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0QzVCLCtDQUFRLENBQVUsS0FBVixDQUExRDtBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZDRCLElBQUFBLEtBQUssQ0FBQyxXQUFELENBQUwsQ0FDR0MsSUFESCxDQUNTQyxRQUFELElBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUR0QixFQUVHRixJQUZILENBRVNHLFNBQUQsSUFBZW5C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SHRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFZRSw4REFBQyxtREFBRDtBQUNFLFVBQUksRUFBRWIsaUJBQWlCLElBQUlFLGlCQUQ3QjtBQUVFLGlCQUFXLEVBQUVvRCxhQUZmO0FBR0Usc0JBQWdCLEVBQUV4QjtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBaUJFLDhEQUFDLGtEQUFEO0FBQUssYUFBTyxFQUFDLE1BQWI7QUFBb0Isb0JBQWMsRUFBQyxRQUFuQztBQUE0QyxtQkFBYSxFQUFDLFFBQTFEO0FBQUEsZ0JBQ0dNLGFBQWEsQ0FBQ1EsSUFBZCxHQUFxQlcsR0FBckIsQ0FBMEIxQixJQUFELGlCQUN4Qiw4REFBQywwQ0FBRDtBQUNFLFlBQUksRUFBRUEsSUFBSSxDQUFDbkMsSUFEYjtBQUVFLGNBQU0sRUFBRW1DLElBQUksQ0FBQ2xDLE1BRmY7QUFHRSxZQUFJLEVBQUUwQyxZQUFZLENBQUNSLElBQUksQ0FBQ2xDLE1BQU4sQ0FIcEI7QUFJRSxrQkFBVSxFQUFFLE1BQU1pQixhQUFhLENBQUNpQixJQUFELENBSmpDO0FBS0Usc0JBQWMsRUFBRSxNQUFNZixpQkFBaUIsQ0FBQ2UsSUFBRDtBQUx6QyxTQU1PQSxJQUFJLENBQUNsQyxNQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRjtBQUFBLGtCQURGO0FBZ0NELENBdE5EOztHQUFNVjs7S0FBQUE7QUF3Tk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSHltbnMvQWxsSHltbnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIHVzZVN0YXRlLFxyXG4gIFJlYWN0RWxlbWVudCxcclxuICB1c2VFZmZlY3QsXHJcbiAgU2V0U3RhdGVBY3Rpb24sXHJcbiAgRGlzcGF0Y2gsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgRGlhbG9nIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vIGltcG9ydCBEaWFsb2cgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2cnO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ0FjdGlvbnMnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dDb250ZW50VGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IEh5bW4gZnJvbSBcIi4vSHltblwiO1xyXG5pbXBvcnQgRWRpdE1vZGFsIGZyb20gXCIuL0h5bW4vRWRpdFwiO1xyXG5pbXBvcnQgUGluTW9kYWwgZnJvbSBcIi4vSHltbi9QaW5cIjtcclxuaW1wb3J0IFF1aWNrQWRkTW9kYWwgZnJvbSBcIi4vSHltbi9RdWlja0FkZFwiO1xyXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi8uLi8uLi9VdGlscy9mZXRjaGVyXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIEVkaXRWYWx1ZXMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBudW1iZXI6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhc3N3b3JkVmFsdWVzIHtcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUXVpY2tBZGRWYWx1ZXMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBIeW1uVmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBMb2dWYWx1ZXMge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbG9nZ2VkOiBzdHJpbmc7XHJcbiAgYnl3aG86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEFsbEh5bW5zUHJvcHMge1xyXG4gIGZpbHRlcjogc3RyaW5nO1xyXG4gIGh5bW5EYXRhOiBIeW1uVmFsdWVzW107XHJcbiAgbG9nRGF0YTogTG9nVmFsdWVzW107XHJcbiAgc2V0SHltbnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEh5bW5WYWx1ZXNbXT4+O1xyXG4gIHNldExvZ3M6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPExvZ1ZhbHVlc1tdPj47XHJcbiAgc29ydGVkUmV2ZXJzZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEFsbEh5bW5zOiBSZWFjdC5GQzxBbGxIeW1uc1Byb3BzPiA9ICh7XHJcbiAgZmlsdGVyLFxyXG4gIGh5bW5EYXRhLFxyXG4gIGxvZ0RhdGEsXHJcbiAgc2V0SHltbnMsXHJcbiAgc2V0TG9ncyxcclxuICBzb3J0ZWRSZXZlcnNlZCxcclxufTogQWxsSHltbnNQcm9wcyk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8SHltblZhbHVlcz4oe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIG51bWJlcjogMCxcclxuICB9KTtcclxuICBjb25zdCBbZWRpdE1vZGFsT3Blbiwgc2V0RWRpdE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3Bpbk1vZGFsT3Blbiwgc2V0UGluTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbcXVpY2tBZGRNb2RhbE9wZW4sIHNldFF1aWNrQWRkTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2lzUGFzc3dvcmRDb3JyZWN0LCBzZXRJc1Bhc3N3b3JkQ29ycmVjdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcIi9hcGkvaHltblwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGh5bW5fZGF0YSkgPT4gc2V0SHltbnMoaHltbl9kYXRhLmh5bW5zKSk7XHJcbiAgICBmZXRjaChcIi9hcGkvbG9nXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigobG9nX2RhdGEpID0+IHNldExvZ3MobG9nX2RhdGEubG9ncykpO1xyXG4gIH0sIFtzZXRIeW1ucywgc2V0TG9nc10pO1xyXG5cclxuICBjb25zdCBvcGVuRWRpdE1vZGFsID0gKHZhbHVlczogSHltblZhbHVlcykgPT4ge1xyXG4gICAgc2V0RWRpdE1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldFBpbk1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldERhdGEodmFsdWVzKTtcclxuICB9O1xyXG4gIGNvbnN0IG9wZW5RdWlja0FkZE1vZGFsID0gKHZhbHVlczogSHltblZhbHVlcykgPT4ge1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXREYXRhKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWRpdEh5bW4gPSAodmFsdWVzOiBFZGl0VmFsdWVzKSA9PiB7XHJcbiAgICBtdXRhdGUoXCIvYXBpL2h5bW5cIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBlZGl0ZWRIeW1uID0gYXdhaXQgZmV0Y2hlcihcIi9hcGkvaHltblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG51bWJlcjogZGF0YS5udW1iZXIsXHJcbiAgICAgICAgICBuZXdOdW1iZXI6IHZhbHVlcy5udW1iZXIsXHJcbiAgICAgICAgICBuZXdOYW1lOiB2YWx1ZXMubmFtZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgbmV3TG9ncyA9IGxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCA9PT0gZGF0YS5udW1iZXIpO1xyXG5cclxuICAgICAgaWYgKHZhbHVlcy5udW1iZXIgPT09IGRhdGEubnVtYmVyKSB7XHJcbiAgICAgICAgZWRpdGVkSHltbi5udW1iZXIgPSBkYXRhLm51bWJlcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdMb2dzLmZvckVhY2goKG5ld0xvZykgPT4ge1xyXG4gICAgICAgICAgbmV3TG9nLmlkID0gdmFsdWVzLm51bWJlcjtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWRpdGVkSHltbi5uYW1lID0gdmFsdWVzLm5hbWU7XHJcbiAgICAgIHNldEh5bW5zKFtcclxuICAgICAgICAuLi5oeW1uRGF0YS5maWx0ZXIoKGh5bW4pID0+IGh5bW4ubnVtYmVyICE9PSBkYXRhLm51bWJlciksXHJcbiAgICAgICAgZWRpdGVkSHltbixcclxuICAgICAgXSk7XHJcbiAgICAgIHNldExvZ3MoWy4uLmxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCAhPT0gZGF0YS5udW1iZXIpXSk7XHJcbiAgICB9KTtcclxuICAgIHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHF1aWNrQWRkSHltbiA9ICh2YWx1ZXM6IFF1aWNrQWRkVmFsdWVzKSA9PiB7XHJcbiAgICBtdXRhdGUoXCIvYXBpL2xvZ1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFkZGVkTG9nID0gYXdhaXQgZmV0Y2hlcihcIi9hcGkvbG9nXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBpZDogZGF0YS5udW1iZXIsXHJcbiAgICAgICAgICBieXdobzogdmFsdWVzLm5hbWUsXHJcbiAgICAgICAgICBsb2dnZWQ6IHZhbHVlcy5kYXRlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGFkZGVkTG9nKTtcclxuXHJcbiAgICAgIHNldExvZ3MoWy4uLmxvZ0RhdGEsIGFkZGVkTG9nXSk7XHJcbiAgICB9KTtcclxuICAgIHNldFF1aWNrQWRkTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaHltbkRhdGFbMF0ubnVtYmVyID09PSA5OTkgfHwgbG9nRGF0YVswXS5pZCA9PT0gOTk5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxFZGl0TW9kYWxcclxuICAgICAgICAgIG9wZW49e2VkaXRNb2RhbE9wZW59XHJcbiAgICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0RWRpdE1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxRdWlja0FkZE1vZGFsXHJcbiAgICAgICAgICBvcGVuPXtxdWlja0FkZE1vZGFsT3Blbn1cclxuICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRRdWlja0FkZE1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbGV0IGZpbHRlcmVkSHltbnMgPSBbXTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRMb2dzID0gKGh5bW5JZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBmbG9ncyA9IGxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCA9PT0gaHltbklkKTtcclxuXHJcbiAgICByZXR1cm4gZmxvZ3M7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGZpbHRlciA9PT0gXCJcIikge1xyXG4gICAgY29uc3QgbmV3ZXN0SHltbnMgPSBbXSBhcyB1bmtub3duIGFzIHtcclxuICAgICAgbnVtYmVyOiBudW1iZXI7XHJcbiAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgbG9nOiBMb2dWYWx1ZXM7XHJcbiAgICB9W107XHJcbiAgICAvLyBjb25zb2xlLmxvZyhoeW1uRGF0YVswXSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJlZExvZ3MoMzcyKSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGh5bW5EYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGxhc3REYXRlcyA9IGZpbHRlcmVkTG9ncyhoeW1uRGF0YVtpXS5udW1iZXIpO1xyXG4gICAgICBsYXN0RGF0ZXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2dnZWQpIDwgbW9tZW50KGIubG9nZ2VkKSkgcmV0dXJuIDE7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZ2dlZCkgPiBtb21lbnQoYi5sb2dnZWQpKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgICBuZXdlc3RIeW1ucy5wdXNoKHtcclxuICAgICAgICBudW1iZXI6IGh5bW5EYXRhW2ldLm51bWJlcixcclxuICAgICAgICBuYW1lOiBoeW1uRGF0YVtpXS5uYW1lLFxyXG4gICAgICAgIGxvZzogbGFzdERhdGVzWzBdLFxyXG4gICAgICB9IGFzIHtcclxuICAgICAgICBudW1iZXI6IG51bWJlcjtcclxuICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgbG9nOiBMb2dWYWx1ZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3J0ZWRSZXZlcnNlZCkge1xyXG4gICAgICBuZXdlc3RIeW1ucy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZy5sb2dnZWQpIDwgbW9tZW50KGIubG9nLmxvZ2dlZCkpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nLmxvZ2dlZCkgPiBtb21lbnQoYi5sb2cubG9nZ2VkKSkgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3ZXN0SHltbnMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2cubG9nZ2VkKSA8IG1vbWVudChiLmxvZy5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nLmxvZ2dlZCkgPiBtb21lbnQoYi5sb2cubG9nZ2VkKSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJlZEh5bW5zID0gbmV3ZXN0SHltbnM7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZpbHRlcmVkSHltbnMgPSBoeW1uRGF0YS5maWx0ZXIoXHJcbiAgICAgIChoeW1uKSA9PlxyXG4gICAgICAgIGh5bW4ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgIGh5bW4ubnVtYmVyLnRvU3RyaW5nKCkuaW5jbHVkZXMoZmlsdGVyKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSAodmFsdWVzOiBQYXNzd29yZFZhbHVlcykgPT4ge1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QodmFsdWVzLnBhc3N3b3JkID09PSBcInJhaGFiXCIgPyB0cnVlIDogZmFsc2UpO1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZUVkaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0RWRpdE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdChmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBjbG9zZVF1aWNrQWRkID0gKCkgPT4ge1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldFF1aWNrQWRkTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEVkaXRNb2RhbFxyXG4gICAgICAgIG9wZW49e2VkaXRNb2RhbE9wZW4gJiYgaXNQYXNzd29yZENvcnJlY3R9XHJcbiAgICAgICAgaGFuZGxlQ2xvc2U9e2Nsb3NlRWRpdH1cclxuICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgIGVkaXRNdXRhdGlvbj17ZWRpdEh5bW59XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQaW5Nb2RhbFxyXG4gICAgICAgIG9wZW49e3Bpbk1vZGFsT3Blbn1cclxuICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UGluTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICBpc0NvcnJlY3Q9eyh2YWx1ZXMpID0+IGNoZWNrUGFzc3dvcmQodmFsdWVzKX1cclxuICAgICAgLz5cclxuICAgICAgPFF1aWNrQWRkTW9kYWxcclxuICAgICAgICBvcGVuPXtxdWlja0FkZE1vZGFsT3BlbiAmJiBpc1Bhc3N3b3JkQ29ycmVjdH1cclxuICAgICAgICBoYW5kbGVDbG9zZT17Y2xvc2VRdWlja0FkZH1cclxuICAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICB7ZmlsdGVyZWRIeW1ucy5zb3J0KCkubWFwKChoeW1uKSA9PiAoXHJcbiAgICAgICAgICA8SHltblxyXG4gICAgICAgICAgICBuYW1lPXtoeW1uLm5hbWV9XHJcbiAgICAgICAgICAgIG51bWJlcj17aHltbi5udW1iZXJ9XHJcbiAgICAgICAgICAgIGxvZ3M9e2ZpbHRlcmVkTG9ncyhoeW1uLm51bWJlcil9XHJcbiAgICAgICAgICAgIGhhbmRsZUVkaXQ9eygpID0+IG9wZW5FZGl0TW9kYWwoaHltbil9XHJcbiAgICAgICAgICAgIGhhbmRsZVF1aWNrQWRkPXsoKSA9PiBvcGVuUXVpY2tBZGRNb2RhbChoeW1uKX1cclxuICAgICAgICAgICAga2V5PXtoeW1uLm51bWJlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbEh5bW5zO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkh5bW4iLCJFZGl0TW9kYWwiLCJQaW5Nb2RhbCIsIlF1aWNrQWRkTW9kYWwiLCJtdXRhdGUiLCJmZXRjaGVyIiwibW9tZW50IiwiQWxsSHltbnMiLCJmaWx0ZXIiLCJoeW1uRGF0YSIsImxvZ0RhdGEiLCJzZXRIeW1ucyIsInNldExvZ3MiLCJzb3J0ZWRSZXZlcnNlZCIsImRhdGEiLCJzZXREYXRhIiwibmFtZSIsIm51bWJlciIsImVkaXRNb2RhbE9wZW4iLCJzZXRFZGl0TW9kYWxPcGVuIiwicGluTW9kYWxPcGVuIiwic2V0UGluTW9kYWxPcGVuIiwicXVpY2tBZGRNb2RhbE9wZW4iLCJzZXRRdWlja0FkZE1vZGFsT3BlbiIsImlzUGFzc3dvcmRDb3JyZWN0Iiwic2V0SXNQYXNzd29yZENvcnJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJoeW1uX2RhdGEiLCJoeW1ucyIsImxvZ19kYXRhIiwibG9ncyIsIm9wZW5FZGl0TW9kYWwiLCJ2YWx1ZXMiLCJvcGVuUXVpY2tBZGRNb2RhbCIsImVkaXRIeW1uIiwiZWRpdGVkSHltbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld051bWJlciIsIm5ld05hbWUiLCJuZXdMb2dzIiwibG9nIiwiaWQiLCJmb3JFYWNoIiwibmV3TG9nIiwiaHltbiIsInF1aWNrQWRkSHltbiIsImFkZGVkTG9nIiwiYnl3aG8iLCJsb2dnZWQiLCJkYXRlIiwiY29uc29sZSIsImZpbHRlcmVkSHltbnMiLCJmaWx0ZXJlZExvZ3MiLCJoeW1uSWQiLCJmbG9ncyIsIm5ld2VzdEh5bW5zIiwiaSIsImxlbmd0aCIsImxhc3REYXRlcyIsInNvcnQiLCJhIiwiYiIsInB1c2giLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidG9TdHJpbmciLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJjbG9zZUVkaXQiLCJjbG9zZVF1aWNrQWRkIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==