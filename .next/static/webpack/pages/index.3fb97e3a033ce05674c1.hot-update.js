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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Alert__WEBPACK_IMPORTED_MODULE_5__.default, {
      open: alertOpen,
      handleClose: handleCloseAlert
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2ZiOTdlM2EwMzNjZTA1Njc0YzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFvQ0EsTUFBTVksUUFBaUMsR0FBRyxDQUFDO0FBQ3pDQyxFQUFBQSxNQUR5QztBQUV6Q0MsRUFBQUEsUUFGeUM7QUFHekNDLEVBQUFBLE9BSHlDO0FBSXpDQyxFQUFBQSxRQUp5QztBQUt6Q0MsRUFBQUEsT0FMeUM7QUFNekNDLEVBQUFBO0FBTnlDLENBQUQsS0FPUDtBQUFBOztBQUNqQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JuQiwrQ0FBUSxDQUFhO0FBQzNDb0IsSUFBQUEsSUFBSSxFQUFFLEVBRHFDO0FBRTNDQyxJQUFBQSxNQUFNLEVBQUU7QUFGbUMsR0FBYixDQUFoQztBQUlBLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DdkIsK0NBQVEsQ0FBVSxLQUFWLENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUN3QixZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ3pCLCtDQUFRLENBQVUsS0FBVixDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDMEIsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNEMzQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBMUQ7QUFDQSxRQUFNO0FBQUEsT0FBQzRCLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCN0IsK0NBQVEsQ0FBVSxJQUFWLENBQTFDO0FBRUEsUUFBTTtBQUFBLE9BQUM4QixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Qy9CLCtDQUFRLENBQVUsS0FBVixDQUExRDtBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCtCLElBQUFBLEtBQUssQ0FBQyxXQUFELENBQUwsQ0FDR0MsSUFESCxDQUNTQyxRQUFELElBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUR0QixFQUVHRixJQUZILENBRVNHLFNBQUQsSUFBZXJCLFFBQVEsQ0FBQ3FCLFNBQVMsQ0FBQ0MsS0FBWCxDQUYvQjtBQUdBTCxJQUFBQSxLQUFLLENBQUMsVUFBRCxDQUFMLENBQ0dDLElBREgsQ0FDU0MsUUFBRCxJQUFjQSxRQUFRLENBQUNDLElBQVQsRUFEdEIsRUFFR0YsSUFGSCxDQUVTSyxRQUFELElBQWN0QixPQUFPLENBQUNzQixRQUFRLENBQUNDLElBQVYsQ0FGN0I7QUFHRCxHQVBRLEVBT04sQ0FBQ3hCLFFBQUQsRUFBV0MsT0FBWCxDQVBNLENBQVQ7O0FBU0EsUUFBTXdCLGFBQWEsR0FBSUMsTUFBRCxJQUF3QjtBQUM1Q2xCLElBQUFBLGdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQUUsSUFBQUEsZUFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBTixJQUFBQSxPQUFPLENBQUNzQixNQUFELENBQVA7QUFDRCxHQUpEOztBQUtBLFFBQU1DLGlCQUFpQixHQUFJRCxNQUFELElBQXdCO0FBQ2hEZCxJQUFBQSxvQkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0FGLElBQUFBLGVBQWUsQ0FBQyxJQUFELENBQWY7QUFDQU4sSUFBQUEsT0FBTyxDQUFDc0IsTUFBRCxDQUFQO0FBQ0QsR0FKRDs7QUFNQSxRQUFNRSxRQUFRLEdBQUlGLE1BQUQsSUFBd0I7QUFDdkNqQyxJQUFBQSwyQ0FBTSxDQUFDLFdBQUQsRUFBYyxZQUFZO0FBQzlCLFlBQU1vQyxVQUFVLEdBQUcsTUFBTW5DLHVEQUFPLENBQUMsV0FBRCxFQUFjO0FBQzVDb0MsUUFBQUEsTUFBTSxFQUFFLE9BRG9DO0FBRTVDQyxRQUFBQSxPQUFPLEVBQUU7QUFBRSwwQkFBZ0I7QUFBbEIsU0FGbUM7QUFHNUNDLFFBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkI1QixVQUFBQSxNQUFNLEVBQUVILElBQUksQ0FBQ0csTUFETTtBQUVuQjZCLFVBQUFBLFNBQVMsRUFBRVQsTUFBTSxDQUFDcEIsTUFGQztBQUduQjhCLFVBQUFBLE9BQU8sRUFBRVYsTUFBTSxDQUFDckI7QUFIRyxTQUFmO0FBSHNDLE9BQWQsQ0FBaEM7QUFVQSxVQUFJZ0MsT0FBTyxHQUFHdEMsT0FBTyxDQUFDRixNQUFSLENBQWdCeUMsR0FBRCxJQUFTQSxHQUFHLENBQUNDLEVBQUosS0FBV3BDLElBQUksQ0FBQ0csTUFBeEMsQ0FBZDs7QUFFQSxVQUFJb0IsTUFBTSxDQUFDcEIsTUFBUCxLQUFrQkgsSUFBSSxDQUFDRyxNQUEzQixFQUFtQztBQUNqQ3VCLFFBQUFBLFVBQVUsQ0FBQ3ZCLE1BQVgsR0FBb0JILElBQUksQ0FBQ0csTUFBekI7QUFDRCxPQUZELE1BRU87QUFDTCtCLFFBQUFBLE9BQU8sQ0FBQ0csT0FBUixDQUFpQkMsTUFBRCxJQUFZO0FBQzFCQSxVQUFBQSxNQUFNLENBQUNGLEVBQVAsR0FBWWIsTUFBTSxDQUFDcEIsTUFBbkI7QUFDRCxTQUZEO0FBR0Q7O0FBRUR1QixNQUFBQSxVQUFVLENBQUN4QixJQUFYLEdBQWtCcUIsTUFBTSxDQUFDckIsSUFBekI7QUFDQUwsTUFBQUEsUUFBUSxDQUFDLENBQ1AsR0FBR0YsUUFBUSxDQUFDRCxNQUFULENBQWlCNkMsSUFBRCxJQUFVQSxJQUFJLENBQUNwQyxNQUFMLEtBQWdCSCxJQUFJLENBQUNHLE1BQS9DLENBREksRUFFUHVCLFVBRk8sQ0FBRCxDQUFSO0FBSUE1QixNQUFBQSxPQUFPLENBQUMsQ0FBQyxHQUFHRixPQUFPLENBQUNGLE1BQVIsQ0FBZ0J5QyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsRUFBSixLQUFXcEMsSUFBSSxDQUFDRyxNQUF4QyxDQUFKLENBQUQsQ0FBUDtBQUNELEtBM0JLLENBQU47QUE0QkFFLElBQUFBLGdCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDQVEsSUFBQUEsb0JBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNELEdBL0JEOztBQWlDQSxRQUFNMkIsWUFBWSxHQUFJakIsTUFBRCxJQUE0QjtBQUMvQ2pDLElBQUFBLDJDQUFNLENBQUMsVUFBRCxFQUFhLFlBQVk7QUFDN0IsWUFBTW1ELFFBQVEsR0FBRyxNQUFNbEQsdURBQU8sQ0FBQyxVQUFELEVBQWE7QUFDekNvQyxRQUFBQSxNQUFNLEVBQUUsTUFEaUM7QUFFekNDLFFBQUFBLE9BQU8sRUFBRTtBQUFFLDBCQUFnQjtBQUFsQixTQUZnQztBQUd6Q0MsUUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkssVUFBQUEsRUFBRSxFQUFFcEMsSUFBSSxDQUFDRyxNQURVO0FBRW5CdUMsVUFBQUEsS0FBSyxFQUFFbkIsTUFBTSxDQUFDckIsSUFGSztBQUduQnlDLFVBQUFBLE1BQU0sRUFBRXBCLE1BQU0sQ0FBQ3FCO0FBSEksU0FBZjtBQUhtQyxPQUFiLENBQTlCO0FBVUFDLE1BQUFBLE9BQU8sQ0FBQ1YsR0FBUixDQUFZTSxRQUFaOztBQUNBLFVBQUlBLFFBQVEsQ0FBQ0ssTUFBVCxJQUFtQixDQUF2QixFQUEwQjtBQUN4Qm5DLFFBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRDs7QUFFRGIsTUFBQUEsT0FBTyxDQUFDLENBQUMsR0FBR0YsT0FBSixFQUFhNkMsUUFBYixDQUFELENBQVA7QUFDRCxLQWpCSyxDQUFOO0FBa0JBaEMsSUFBQUEsb0JBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNBSSxJQUFBQSxvQkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0QsR0FyQkQ7O0FBdUJBLE1BQUlsQixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlRLE1BQVosS0FBdUIsR0FBdkIsSUFBOEJQLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV3dDLEVBQVgsS0FBa0IsR0FBcEQsRUFBeUQ7QUFDdkQsd0JBQ0U7QUFBQSw4QkFDRSw4REFBQywrQ0FBRDtBQUNFLFlBQUksRUFBRWhDLGFBRFI7QUFFRSxtQkFBVyxFQUFFLE1BQU1DLGdCQUFnQixDQUFDLEtBQUQsQ0FGckM7QUFHRSxZQUFJLEVBQUVMLElBSFI7QUFJRSxvQkFBWSxFQUFFeUI7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FLDhEQUFDLG1EQUFEO0FBQ0UsWUFBSSxFQUFFakIsaUJBRFI7QUFFRSxtQkFBVyxFQUFFLE1BQU1DLG9CQUFvQixDQUFDLEtBQUQsQ0FGekM7QUFHRSx3QkFBZ0IsRUFBRStCO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQSxvQkFERjtBQWVEOztBQUVELE1BQUlPLGFBQWEsR0FBRyxFQUFwQjs7QUFFQSxRQUFNQyxZQUFZLEdBQUlDLE1BQUQsSUFBb0I7QUFDdkMsVUFBTUMsS0FBSyxHQUFHdEQsT0FBTyxDQUFDRixNQUFSLENBQWdCeUMsR0FBRCxJQUFTQSxHQUFHLENBQUNDLEVBQUosS0FBV2EsTUFBbkMsQ0FBZDtBQUVBLFdBQU9DLEtBQVA7QUFDRCxHQUpEOztBQU1BLE1BQUl4RCxNQUFNLEtBQUssRUFBZixFQUFtQjtBQUNqQixVQUFNeUQsV0FBVyxHQUFHLEVBQXBCLENBRGlCLENBTWpCO0FBQ0E7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHekQsUUFBUSxDQUFDbUQsTUFBN0IsRUFBcUNNLENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsWUFBTUMsU0FBUyxHQUFHTCxZQUFZLENBQUNyRCxRQUFRLENBQUN5RCxDQUFELENBQVIsQ0FBWWpELE1BQWIsQ0FBOUI7QUFDQWtELE1BQUFBLFNBQVMsQ0FBQ0MsSUFBVixDQUFlLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQ3ZCLFlBQUloRSw2Q0FBTSxDQUFDK0QsQ0FBQyxDQUFDWixNQUFILENBQU4sR0FBbUJuRCw2Q0FBTSxDQUFDZ0UsQ0FBQyxDQUFDYixNQUFILENBQTdCLEVBQXlDLE9BQU8sQ0FBUDtBQUN6QyxZQUFJbkQsNkNBQU0sQ0FBQytELENBQUMsQ0FBQ1osTUFBSCxDQUFOLEdBQW1CbkQsNkNBQU0sQ0FBQ2dFLENBQUMsQ0FBQ2IsTUFBSCxDQUE3QixFQUF5QyxPQUFPLENBQUMsQ0FBUjtBQUN6QyxlQUFPLENBQVA7QUFDRCxPQUpEO0FBS0FRLE1BQUFBLFdBQVcsQ0FBQ00sSUFBWixDQUFpQjtBQUNmdEQsUUFBQUEsTUFBTSxFQUFFUixRQUFRLENBQUN5RCxDQUFELENBQVIsQ0FBWWpELE1BREw7QUFFZkQsUUFBQUEsSUFBSSxFQUFFUCxRQUFRLENBQUN5RCxDQUFELENBQVIsQ0FBWWxELElBRkg7QUFHZmlDLFFBQUFBLEdBQUcsRUFBRWtCLFNBQVMsQ0FBQyxDQUFEO0FBSEMsT0FBakI7QUFTRDs7QUFFRCxRQUFJdEQsY0FBSixFQUFvQjtBQUNsQm9ELE1BQUFBLFdBQVcsQ0FBQ0csSUFBWixDQUFpQixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUN6QixZQUFJaEUsNkNBQU0sQ0FBQytELENBQUMsQ0FBQ3BCLEdBQUYsQ0FBTVEsTUFBUCxDQUFOLEdBQXVCbkQsNkNBQU0sQ0FBQ2dFLENBQUMsQ0FBQ3JCLEdBQUYsQ0FBTVEsTUFBUCxDQUFqQyxFQUFpRCxPQUFPLENBQUMsQ0FBUjtBQUNqRCxZQUFJbkQsNkNBQU0sQ0FBQytELENBQUMsQ0FBQ3BCLEdBQUYsQ0FBTVEsTUFBUCxDQUFOLEdBQXVCbkQsNkNBQU0sQ0FBQ2dFLENBQUMsQ0FBQ3JCLEdBQUYsQ0FBTVEsTUFBUCxDQUFqQyxFQUFpRCxPQUFPLENBQVA7QUFDakQsZUFBTyxDQUFQO0FBQ0QsT0FKRDtBQUtELEtBTkQsTUFNTztBQUNMUSxNQUFBQSxXQUFXLENBQUNHLElBQVosQ0FBaUIsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDekIsWUFBSWhFLDZDQUFNLENBQUMrRCxDQUFDLENBQUNwQixHQUFGLENBQU1RLE1BQVAsQ0FBTixHQUF1Qm5ELDZDQUFNLENBQUNnRSxDQUFDLENBQUNyQixHQUFGLENBQU1RLE1BQVAsQ0FBakMsRUFBaUQsT0FBTyxDQUFQO0FBQ2pELFlBQUluRCw2Q0FBTSxDQUFDK0QsQ0FBQyxDQUFDcEIsR0FBRixDQUFNUSxNQUFQLENBQU4sR0FBdUJuRCw2Q0FBTSxDQUFDZ0UsQ0FBQyxDQUFDckIsR0FBRixDQUFNUSxNQUFQLENBQWpDLEVBQWlELE9BQU8sQ0FBQyxDQUFSO0FBQ2pELGVBQU8sQ0FBUDtBQUNELE9BSkQ7QUFLRDs7QUFFREksSUFBQUEsYUFBYSxHQUFHSSxXQUFoQjtBQUNELEdBekNELE1BeUNPO0FBQ0xKLElBQUFBLGFBQWEsR0FBR3BELFFBQVEsQ0FBQ0QsTUFBVCxDQUNiNkMsSUFBRCxJQUNFQSxJQUFJLENBQUNyQyxJQUFMLENBQVV3RCxXQUFWLEdBQXdCQyxRQUF4QixDQUFpQ2pFLE1BQU0sQ0FBQ2dFLFdBQVAsRUFBakMsS0FDQW5CLElBQUksQ0FBQ3BDLE1BQUwsQ0FBWXlELFFBQVosR0FBdUJELFFBQXZCLENBQWdDakUsTUFBaEMsQ0FIWSxDQUFoQjtBQUtEOztBQUVELFFBQU1tRSxhQUFhLEdBQUl0QyxNQUFELElBQTRCO0FBQ2hEVixJQUFBQSxvQkFBb0IsQ0FBQ1UsTUFBTSxDQUFDdUMsUUFBUCxLQUFvQixPQUFwQixHQUE4QixJQUE5QixHQUFxQyxLQUF0QyxDQUFwQjtBQUNBdkQsSUFBQUEsZUFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNELEdBSEQ7O0FBS0EsUUFBTXdELFNBQVMsR0FBRyxNQUFNO0FBQ3RCeEQsSUFBQUEsZUFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBRixJQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0FRLElBQUFBLG9CQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDRCxHQUpEOztBQUtBLFFBQU1tRCxhQUFhLEdBQUcsTUFBTTtBQUMxQnpELElBQUFBLGVBQWUsQ0FBQyxLQUFELENBQWY7QUFDQUUsSUFBQUEsb0JBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNBSSxJQUFBQSxvQkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0QsR0FKRDs7QUFNQSxRQUFNb0QsZ0JBQWdCLEdBQUcsTUFBTTtBQUM3QnRELElBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsK0NBQUQ7QUFDRSxVQUFJLEVBQUVQLGFBQWEsSUFBSVEsaUJBRHpCO0FBRUUsaUJBQVcsRUFBRW1ELFNBRmY7QUFHRSxVQUFJLEVBQUUvRCxJQUhSO0FBSUUsa0JBQVksRUFBRXlCO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRSw4REFBQyw4Q0FBRDtBQUNFLFVBQUksRUFBRW5CLFlBRFI7QUFFRSxpQkFBVyxFQUFFLE1BQU1DLGVBQWUsQ0FBQyxLQUFELENBRnBDO0FBR0UsZUFBUyxFQUFHZ0IsTUFBRCxJQUFZc0MsYUFBYSxDQUFDdEMsTUFBRDtBQUh0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBWUUsOERBQUMsbURBQUQ7QUFDRSxVQUFJLEVBQUVmLGlCQUFpQixJQUFJSSxpQkFEN0I7QUFFRSxpQkFBVyxFQUFFb0QsYUFGZjtBQUdFLHNCQUFnQixFQUFFeEI7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixlQWlCRSw4REFBQyxnREFBRDtBQUFhLFVBQUksRUFBRTlCLFNBQW5CO0FBQThCLGlCQUFXLEVBQUV1RDtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRixlQWtCRSw4REFBQyxtREFBRDtBQUFLLGFBQU8sRUFBQyxNQUFiO0FBQW9CLG9CQUFjLEVBQUMsUUFBbkM7QUFBNEMsbUJBQWEsRUFBQyxRQUExRDtBQUFBLGdCQUNHbEIsYUFBYSxDQUFDTyxJQUFkLEdBQXFCWSxHQUFyQixDQUEwQjNCLElBQUQsaUJBQ3hCLDhEQUFDLDBDQUFEO0FBQ0UsWUFBSSxFQUFFQSxJQUFJLENBQUNyQyxJQURiO0FBRUUsY0FBTSxFQUFFcUMsSUFBSSxDQUFDcEMsTUFGZjtBQUdFLFlBQUksRUFBRTZDLFlBQVksQ0FBQ1QsSUFBSSxDQUFDcEMsTUFBTixDQUhwQjtBQUlFLGtCQUFVLEVBQUUsTUFBTW1CLGFBQWEsQ0FBQ2lCLElBQUQsQ0FKakM7QUFLRSxzQkFBYyxFQUFFLE1BQU1mLGlCQUFpQixDQUFDZSxJQUFEO0FBTHpDLFNBTU9BLElBQUksQ0FBQ3BDLE1BTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJGO0FBQUEsa0JBREY7QUFpQ0QsQ0EvTkQ7O0dBQU1WOztLQUFBQTtBQWlPTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IeW1ucy9BbGxIeW1ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgdXNlU3RhdGUsXHJcbiAgUmVhY3RFbGVtZW50LFxyXG4gIHVzZUVmZmVjdCxcclxuICBTZXRTdGF0ZUFjdGlvbixcclxuICBEaXNwYXRjaCxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBIeW1uIGZyb20gXCIuL0h5bW5cIjtcclxuaW1wb3J0IEVkaXRNb2RhbCBmcm9tIFwiLi9IeW1uL0VkaXRcIjtcclxuaW1wb3J0IFBpbk1vZGFsIGZyb20gXCIuL0h5bW4vUGluXCI7XHJcbmltcG9ydCBRdWlja0FkZE1vZGFsIGZyb20gXCIuL0h5bW4vUXVpY2tBZGRcIjtcclxuaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gXCIuL0h5bW4vQWxlcnRcIjtcclxuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvZmV0Y2hlclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmludGVyZmFjZSBFZGl0VmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXNzd29yZFZhbHVlcyB7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1aWNrQWRkVmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSHltblZhbHVlcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTG9nVmFsdWVzIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGxvZ2dlZDogc3RyaW5nO1xyXG4gIGJ5d2hvOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBbGxIeW1uc1Byb3BzIHtcclxuICBmaWx0ZXI6IHN0cmluZztcclxuICBoeW1uRGF0YTogSHltblZhbHVlc1tdO1xyXG4gIGxvZ0RhdGE6IExvZ1ZhbHVlc1tdO1xyXG4gIHNldEh5bW5zOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxIeW1uVmFsdWVzW10+PjtcclxuICBzZXRMb2dzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxMb2dWYWx1ZXNbXT4+O1xyXG4gIHNvcnRlZFJldmVyc2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBBbGxIeW1uczogUmVhY3QuRkM8QWxsSHltbnNQcm9wcz4gPSAoe1xyXG4gIGZpbHRlcixcclxuICBoeW1uRGF0YSxcclxuICBsb2dEYXRhLFxyXG4gIHNldEh5bW5zLFxyXG4gIHNldExvZ3MsXHJcbiAgc29ydGVkUmV2ZXJzZWQsXHJcbn06IEFsbEh5bW5zUHJvcHMpOiBSZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEh5bW5WYWx1ZXM+KHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBudW1iZXI6IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2VkaXRNb2RhbE9wZW4sIHNldEVkaXRNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtwaW5Nb2RhbE9wZW4sIHNldFBpbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3F1aWNrQWRkTW9kYWxPcGVuLCBzZXRRdWlja0FkZE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2FsZXJ0T3Blbiwgc2V0QWxlcnRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICBjb25zdCBbaXNQYXNzd29yZENvcnJlY3QsIHNldElzUGFzc3dvcmRDb3JyZWN0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiL2FwaS9oeW1uXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoaHltbl9kYXRhKSA9PiBzZXRIeW1ucyhoeW1uX2RhdGEuaHltbnMpKTtcclxuICAgIGZldGNoKFwiL2FwaS9sb2dcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChsb2dfZGF0YSkgPT4gc2V0TG9ncyhsb2dfZGF0YS5sb2dzKSk7XHJcbiAgfSwgW3NldEh5bW5zLCBzZXRMb2dzXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5FZGl0TW9kYWwgPSAodmFsdWVzOiBIeW1uVmFsdWVzKSA9PiB7XHJcbiAgICBzZXRFZGl0TW9kYWxPcGVuKHRydWUpO1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgc2V0RGF0YSh2YWx1ZXMpO1xyXG4gIH07XHJcbiAgY29uc3Qgb3BlblF1aWNrQWRkTW9kYWwgPSAodmFsdWVzOiBIeW1uVmFsdWVzKSA9PiB7XHJcbiAgICBzZXRRdWlja0FkZE1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldFBpbk1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldERhdGEodmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlZGl0SHltbiA9ICh2YWx1ZXM6IEVkaXRWYWx1ZXMpID0+IHtcclxuICAgIG11dGF0ZShcIi9hcGkvaHltblwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVkaXRlZEh5bW4gPSBhd2FpdCBmZXRjaGVyKFwiL2FwaS9oeW1uXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgbnVtYmVyOiBkYXRhLm51bWJlcixcclxuICAgICAgICAgIG5ld051bWJlcjogdmFsdWVzLm51bWJlcixcclxuICAgICAgICAgIG5ld05hbWU6IHZhbHVlcy5uYW1lLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBuZXdMb2dzID0gbG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkID09PSBkYXRhLm51bWJlcik7XHJcblxyXG4gICAgICBpZiAodmFsdWVzLm51bWJlciA9PT0gZGF0YS5udW1iZXIpIHtcclxuICAgICAgICBlZGl0ZWRIeW1uLm51bWJlciA9IGRhdGEubnVtYmVyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xvZ3MuZm9yRWFjaCgobmV3TG9nKSA9PiB7XHJcbiAgICAgICAgICBuZXdMb2cuaWQgPSB2YWx1ZXMubnVtYmVyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlZGl0ZWRIeW1uLm5hbWUgPSB2YWx1ZXMubmFtZTtcclxuICAgICAgc2V0SHltbnMoW1xyXG4gICAgICAgIC4uLmh5bW5EYXRhLmZpbHRlcigoaHltbikgPT4gaHltbi5udW1iZXIgIT09IGRhdGEubnVtYmVyKSxcclxuICAgICAgICBlZGl0ZWRIeW1uLFxyXG4gICAgICBdKTtcclxuICAgICAgc2V0TG9ncyhbLi4ubG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkICE9PSBkYXRhLm51bWJlcildKTtcclxuICAgIH0pO1xyXG4gICAgc2V0RWRpdE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcXVpY2tBZGRIeW1uID0gKHZhbHVlczogUXVpY2tBZGRWYWx1ZXMpID0+IHtcclxuICAgIG11dGF0ZShcIi9hcGkvbG9nXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgYWRkZWRMb2cgPSBhd2FpdCBmZXRjaGVyKFwiL2FwaS9sb2dcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGlkOiBkYXRhLm51bWJlcixcclxuICAgICAgICAgIGJ5d2hvOiB2YWx1ZXMubmFtZSxcclxuICAgICAgICAgIGxvZ2dlZDogdmFsdWVzLmRhdGUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coYWRkZWRMb2cpO1xyXG4gICAgICBpZiAoYWRkZWRMb2cubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICBzZXRBbGVydE9wZW4odHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldExvZ3MoWy4uLmxvZ0RhdGEsIGFkZGVkTG9nXSk7XHJcbiAgICB9KTtcclxuICAgIHNldFF1aWNrQWRkTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaHltbkRhdGFbMF0ubnVtYmVyID09PSA5OTkgfHwgbG9nRGF0YVswXS5pZCA9PT0gOTk5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxFZGl0TW9kYWxcclxuICAgICAgICAgIG9wZW49e2VkaXRNb2RhbE9wZW59XHJcbiAgICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0RWRpdE1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxRdWlja0FkZE1vZGFsXHJcbiAgICAgICAgICBvcGVuPXtxdWlja0FkZE1vZGFsT3Blbn1cclxuICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRRdWlja0FkZE1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbGV0IGZpbHRlcmVkSHltbnMgPSBbXTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRMb2dzID0gKGh5bW5JZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBmbG9ncyA9IGxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCA9PT0gaHltbklkKTtcclxuXHJcbiAgICByZXR1cm4gZmxvZ3M7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGZpbHRlciA9PT0gXCJcIikge1xyXG4gICAgY29uc3QgbmV3ZXN0SHltbnMgPSBbXSBhcyB1bmtub3duIGFzIHtcclxuICAgICAgbnVtYmVyOiBudW1iZXI7XHJcbiAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgbG9nOiBMb2dWYWx1ZXM7XHJcbiAgICB9W107XHJcbiAgICAvLyBjb25zb2xlLmxvZyhoeW1uRGF0YVswXSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJlZExvZ3MoMzcyKSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGh5bW5EYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGxhc3REYXRlcyA9IGZpbHRlcmVkTG9ncyhoeW1uRGF0YVtpXS5udW1iZXIpO1xyXG4gICAgICBsYXN0RGF0ZXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2dnZWQpIDwgbW9tZW50KGIubG9nZ2VkKSkgcmV0dXJuIDE7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZ2dlZCkgPiBtb21lbnQoYi5sb2dnZWQpKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgICBuZXdlc3RIeW1ucy5wdXNoKHtcclxuICAgICAgICBudW1iZXI6IGh5bW5EYXRhW2ldLm51bWJlcixcclxuICAgICAgICBuYW1lOiBoeW1uRGF0YVtpXS5uYW1lLFxyXG4gICAgICAgIGxvZzogbGFzdERhdGVzWzBdLFxyXG4gICAgICB9IGFzIHtcclxuICAgICAgICBudW1iZXI6IG51bWJlcjtcclxuICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgbG9nOiBMb2dWYWx1ZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3J0ZWRSZXZlcnNlZCkge1xyXG4gICAgICBuZXdlc3RIeW1ucy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZy5sb2dnZWQpIDwgbW9tZW50KGIubG9nLmxvZ2dlZCkpIHJldHVybiAtMTtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nLmxvZ2dlZCkgPiBtb21lbnQoYi5sb2cubG9nZ2VkKSkgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3ZXN0SHltbnMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2cubG9nZ2VkKSA8IG1vbWVudChiLmxvZy5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nLmxvZ2dlZCkgPiBtb21lbnQoYi5sb2cubG9nZ2VkKSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJlZEh5bW5zID0gbmV3ZXN0SHltbnM7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZpbHRlcmVkSHltbnMgPSBoeW1uRGF0YS5maWx0ZXIoXHJcbiAgICAgIChoeW1uKSA9PlxyXG4gICAgICAgIGh5bW4ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgIGh5bW4ubnVtYmVyLnRvU3RyaW5nKCkuaW5jbHVkZXMoZmlsdGVyKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSAodmFsdWVzOiBQYXNzd29yZFZhbHVlcykgPT4ge1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QodmFsdWVzLnBhc3N3b3JkID09PSBcInJhaGFiXCIgPyB0cnVlIDogZmFsc2UpO1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZUVkaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0RWRpdE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdChmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBjbG9zZVF1aWNrQWRkID0gKCkgPT4ge1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldFF1aWNrQWRkTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZUFsZXJ0ID0gKCkgPT4ge1xyXG4gICAgc2V0QWxlcnRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEVkaXRNb2RhbFxyXG4gICAgICAgIG9wZW49e2VkaXRNb2RhbE9wZW4gJiYgaXNQYXNzd29yZENvcnJlY3R9XHJcbiAgICAgICAgaGFuZGxlQ2xvc2U9e2Nsb3NlRWRpdH1cclxuICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgIGVkaXRNdXRhdGlvbj17ZWRpdEh5bW59XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQaW5Nb2RhbFxyXG4gICAgICAgIG9wZW49e3Bpbk1vZGFsT3Blbn1cclxuICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UGluTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICBpc0NvcnJlY3Q9eyh2YWx1ZXMpID0+IGNoZWNrUGFzc3dvcmQodmFsdWVzKX1cclxuICAgICAgLz5cclxuICAgICAgPFF1aWNrQWRkTW9kYWxcclxuICAgICAgICBvcGVuPXtxdWlja0FkZE1vZGFsT3BlbiAmJiBpc1Bhc3N3b3JkQ29ycmVjdH1cclxuICAgICAgICBoYW5kbGVDbG9zZT17Y2xvc2VRdWlja0FkZH1cclxuICAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XHJcbiAgICAgIC8+XHJcbiAgICAgIDxBbGVydERpYWxvZyBvcGVuPXthbGVydE9wZW59IGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZUFsZXJ0fSAvPlxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAge2ZpbHRlcmVkSHltbnMuc29ydCgpLm1hcCgoaHltbikgPT4gKFxyXG4gICAgICAgICAgPEh5bW5cclxuICAgICAgICAgICAgbmFtZT17aHltbi5uYW1lfVxyXG4gICAgICAgICAgICBudW1iZXI9e2h5bW4ubnVtYmVyfVxyXG4gICAgICAgICAgICBsb2dzPXtmaWx0ZXJlZExvZ3MoaHltbi5udW1iZXIpfVxyXG4gICAgICAgICAgICBoYW5kbGVFZGl0PXsoKSA9PiBvcGVuRWRpdE1vZGFsKGh5bW4pfVxyXG4gICAgICAgICAgICBoYW5kbGVRdWlja0FkZD17KCkgPT4gb3BlblF1aWNrQWRkTW9kYWwoaHltbil9XHJcbiAgICAgICAgICAgIGtleT17aHltbi5udW1iZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxIeW1ucztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJIeW1uIiwiRWRpdE1vZGFsIiwiUGluTW9kYWwiLCJRdWlja0FkZE1vZGFsIiwiQWxlcnREaWFsb2ciLCJtdXRhdGUiLCJmZXRjaGVyIiwibW9tZW50IiwiQWxsSHltbnMiLCJmaWx0ZXIiLCJoeW1uRGF0YSIsImxvZ0RhdGEiLCJzZXRIeW1ucyIsInNldExvZ3MiLCJzb3J0ZWRSZXZlcnNlZCIsImRhdGEiLCJzZXREYXRhIiwibmFtZSIsIm51bWJlciIsImVkaXRNb2RhbE9wZW4iLCJzZXRFZGl0TW9kYWxPcGVuIiwicGluTW9kYWxPcGVuIiwic2V0UGluTW9kYWxPcGVuIiwicXVpY2tBZGRNb2RhbE9wZW4iLCJzZXRRdWlja0FkZE1vZGFsT3BlbiIsImFsZXJ0T3BlbiIsInNldEFsZXJ0T3BlbiIsImlzUGFzc3dvcmRDb3JyZWN0Iiwic2V0SXNQYXNzd29yZENvcnJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJoeW1uX2RhdGEiLCJoeW1ucyIsImxvZ19kYXRhIiwibG9ncyIsIm9wZW5FZGl0TW9kYWwiLCJ2YWx1ZXMiLCJvcGVuUXVpY2tBZGRNb2RhbCIsImVkaXRIeW1uIiwiZWRpdGVkSHltbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld051bWJlciIsIm5ld05hbWUiLCJuZXdMb2dzIiwibG9nIiwiaWQiLCJmb3JFYWNoIiwibmV3TG9nIiwiaHltbiIsInF1aWNrQWRkSHltbiIsImFkZGVkTG9nIiwiYnl3aG8iLCJsb2dnZWQiLCJkYXRlIiwiY29uc29sZSIsImxlbmd0aCIsImZpbHRlcmVkSHltbnMiLCJmaWx0ZXJlZExvZ3MiLCJoeW1uSWQiLCJmbG9ncyIsIm5ld2VzdEh5bW5zIiwiaSIsImxhc3REYXRlcyIsInNvcnQiLCJhIiwiYiIsInB1c2giLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidG9TdHJpbmciLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJjbG9zZUVkaXQiLCJjbG9zZVF1aWNrQWRkIiwiaGFuZGxlQ2xvc2VBbGVydCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=