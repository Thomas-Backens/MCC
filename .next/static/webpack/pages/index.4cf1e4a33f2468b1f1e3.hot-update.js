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
        lineNumber: 154,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
        open: quickAddModalOpen,
        handleClose: () => setQuickAddModalOpen(false),
        quickAddMutation: quickAddHymn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
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
      lineNumber: 244,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__.default, {
      open: pinModalOpen,
      handleClose: () => setPinModalOpen(false),
      isCorrect: values => checkPassword(values)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
      open: quickAddModalOpen && isPasswordCorrect,
      handleClose: closeQuickAdd,
      quickAddMutation: quickAddHymn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 255,
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
        lineNumber: 266,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.DialogContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.DialogContentText, {
          id: "alert-dialog-description",
          children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.DialogActions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Button, {
          onClick: handleClose,
          children: "Disagree"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Button, {
          onClick: handleClose,
          autoFocus: true,
          children: "Agree"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 260,
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
        lineNumber: 284,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 282,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGNmMWU0YTMzZjI0NjhiMWYxZTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFvQ0EsTUFBTWdCLFFBQWlDLEdBQUcsQ0FBQztBQUN6Q0MsRUFBQUEsTUFEeUM7QUFFekNDLEVBQUFBLFFBRnlDO0FBR3pDQyxFQUFBQSxPQUh5QztBQUl6Q0MsRUFBQUEsUUFKeUM7QUFLekNDLEVBQUFBLE9BTHlDO0FBTXpDQyxFQUFBQTtBQU55QyxDQUFELEtBT1A7QUFBQTs7QUFDakMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCdkIsK0NBQVEsQ0FBYTtBQUMzQ3dCLElBQUFBLElBQUksRUFBRSxFQURxQztBQUUzQ0MsSUFBQUEsTUFBTSxFQUFFO0FBRm1DLEdBQWIsQ0FBaEM7QUFJQSxRQUFNO0FBQUEsT0FBQ0MsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQzNCLCtDQUFRLENBQVUsS0FBVixDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDNEIsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0M3QiwrQ0FBUSxDQUFVLEtBQVYsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQzhCLGlCQUFEO0FBQUEsT0FBb0JDO0FBQXBCLE1BQTRDL0IsK0NBQVEsQ0FBVSxLQUFWLENBQTFEO0FBQ0EsUUFBTTtBQUFBLE9BQUNnQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QmpDLCtDQUFRLENBQVUsS0FBVixDQUExQztBQUVBLFFBQU07QUFBQSxPQUFDa0MsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNENuQywrQ0FBUSxDQUFVLEtBQVYsQ0FBMUQ7QUFFQUMsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2RtQyxJQUFBQSxLQUFLLENBQUMsV0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDU0MsUUFBRCxJQUFjQSxRQUFRLENBQUNDLElBQVQsRUFEdEIsRUFFR0YsSUFGSCxDQUVTRyxTQUFELElBQWVyQixRQUFRLENBQUNxQixTQUFTLENBQUNDLEtBQVgsQ0FGL0I7QUFHQUwsSUFBQUEsS0FBSyxDQUFDLFVBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1NDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBRHRCLEVBRUdGLElBRkgsQ0FFU0ssUUFBRCxJQUFjdEIsT0FBTyxDQUFDc0IsUUFBUSxDQUFDQyxJQUFWLENBRjdCO0FBR0QsR0FQUSxFQU9OLENBQUN4QixRQUFELEVBQVdDLE9BQVgsQ0FQTSxDQUFUOztBQVNBLFFBQU13QixhQUFhLEdBQUlDLE1BQUQsSUFBd0I7QUFDNUNsQixJQUFBQSxnQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0FFLElBQUFBLGVBQWUsQ0FBQyxJQUFELENBQWY7QUFDQU4sSUFBQUEsT0FBTyxDQUFDc0IsTUFBRCxDQUFQO0FBQ0QsR0FKRDs7QUFLQSxRQUFNQyxpQkFBaUIsR0FBSUQsTUFBRCxJQUF3QjtBQUNoRGQsSUFBQUEsb0JBQW9CLENBQUMsSUFBRCxDQUFwQjtBQUNBRixJQUFBQSxlQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FOLElBQUFBLE9BQU8sQ0FBQ3NCLE1BQUQsQ0FBUDtBQUNELEdBSkQ7O0FBTUEsUUFBTUUsUUFBUSxHQUFJRixNQUFELElBQXdCO0FBQ3ZDakMsSUFBQUEsMkNBQU0sQ0FBQyxXQUFELEVBQWMsWUFBWTtBQUM5QixZQUFNb0MsVUFBVSxHQUFHLE1BQU1uQyx1REFBTyxDQUFDLFdBQUQsRUFBYztBQUM1Q29DLFFBQUFBLE1BQU0sRUFBRSxPQURvQztBQUU1Q0MsUUFBQUEsT0FBTyxFQUFFO0FBQUUsMEJBQWdCO0FBQWxCLFNBRm1DO0FBRzVDQyxRQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CNUIsVUFBQUEsTUFBTSxFQUFFSCxJQUFJLENBQUNHLE1BRE07QUFFbkI2QixVQUFBQSxTQUFTLEVBQUVULE1BQU0sQ0FBQ3BCLE1BRkM7QUFHbkI4QixVQUFBQSxPQUFPLEVBQUVWLE1BQU0sQ0FBQ3JCO0FBSEcsU0FBZjtBQUhzQyxPQUFkLENBQWhDO0FBVUEsVUFBSWdDLE9BQU8sR0FBR3RDLE9BQU8sQ0FBQ0YsTUFBUixDQUFnQnlDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxFQUFKLEtBQVdwQyxJQUFJLENBQUNHLE1BQXhDLENBQWQ7O0FBRUEsVUFBSW9CLE1BQU0sQ0FBQ3BCLE1BQVAsS0FBa0JILElBQUksQ0FBQ0csTUFBM0IsRUFBbUM7QUFDakN1QixRQUFBQSxVQUFVLENBQUN2QixNQUFYLEdBQW9CSCxJQUFJLENBQUNHLE1BQXpCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wrQixRQUFBQSxPQUFPLENBQUNHLE9BQVIsQ0FBaUJDLE1BQUQsSUFBWTtBQUMxQkEsVUFBQUEsTUFBTSxDQUFDRixFQUFQLEdBQVliLE1BQU0sQ0FBQ3BCLE1BQW5CO0FBQ0QsU0FGRDtBQUdEOztBQUVEdUIsTUFBQUEsVUFBVSxDQUFDeEIsSUFBWCxHQUFrQnFCLE1BQU0sQ0FBQ3JCLElBQXpCO0FBQ0FMLE1BQUFBLFFBQVEsQ0FBQyxDQUNQLEdBQUdGLFFBQVEsQ0FBQ0QsTUFBVCxDQUFpQjZDLElBQUQsSUFBVUEsSUFBSSxDQUFDcEMsTUFBTCxLQUFnQkgsSUFBSSxDQUFDRyxNQUEvQyxDQURJLEVBRVB1QixVQUZPLENBQUQsQ0FBUjtBQUlBNUIsTUFBQUEsT0FBTyxDQUFDLENBQUMsR0FBR0YsT0FBTyxDQUFDRixNQUFSLENBQWdCeUMsR0FBRCxJQUFTQSxHQUFHLENBQUNDLEVBQUosS0FBV3BDLElBQUksQ0FBQ0csTUFBeEMsQ0FBSixDQUFELENBQVA7QUFDRCxLQTNCSyxDQUFOO0FBNEJBRSxJQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0FRLElBQUFBLG9CQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDRCxHQS9CRDs7QUFpQ0EsUUFBTTJCLFlBQVksR0FBSWpCLE1BQUQsSUFBNEI7QUFDL0NqQyxJQUFBQSwyQ0FBTSxDQUFDLFVBQUQsRUFBYSxZQUFZO0FBQzdCLFlBQU1tRCxRQUFRLEdBQUcsTUFBTWxELHVEQUFPLENBQUMsVUFBRCxFQUFhO0FBQ3pDb0MsUUFBQUEsTUFBTSxFQUFFLE1BRGlDO0FBRXpDQyxRQUFBQSxPQUFPLEVBQUU7QUFBRSwwQkFBZ0I7QUFBbEIsU0FGZ0M7QUFHekNDLFFBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJLLFVBQUFBLEVBQUUsRUFBRXBDLElBQUksQ0FBQ0csTUFEVTtBQUVuQnVDLFVBQUFBLEtBQUssRUFBRW5CLE1BQU0sQ0FBQ3JCLElBRks7QUFHbkJ5QyxVQUFBQSxNQUFNLEVBQUVwQixNQUFNLENBQUNxQjtBQUhJLFNBQWY7QUFIbUMsT0FBYixDQUE5QjtBQVVBQyxNQUFBQSxPQUFPLENBQUNWLEdBQVIsQ0FBWU0sUUFBWjs7QUFDQSxVQUFJQSxRQUFRLEtBQUssRUFBakIsRUFBcUI7QUFDbkI5QixRQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7O0FBRURiLE1BQUFBLE9BQU8sQ0FBQyxDQUFDLEdBQUdGLE9BQUosRUFBYTZDLFFBQWIsQ0FBRCxDQUFQO0FBQ0QsS0FqQkssQ0FBTjtBQWtCQWhDLElBQUFBLG9CQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDQUksSUFBQUEsb0JBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNELEdBckJEOztBQXVCQSxNQUFJbEIsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZUSxNQUFaLEtBQXVCLEdBQXZCLElBQThCUCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVd3QyxFQUFYLEtBQWtCLEdBQXBELEVBQXlEO0FBQ3ZELHdCQUNFO0FBQUEsOEJBQ0UsOERBQUMsK0NBQUQ7QUFDRSxZQUFJLEVBQUVoQyxhQURSO0FBRUUsbUJBQVcsRUFBRSxNQUFNQyxnQkFBZ0IsQ0FBQyxLQUFELENBRnJDO0FBR0UsWUFBSSxFQUFFTCxJQUhSO0FBSUUsb0JBQVksRUFBRXlCO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRSw4REFBQyxtREFBRDtBQUNFLFlBQUksRUFBRWpCLGlCQURSO0FBRUUsbUJBQVcsRUFBRSxNQUFNQyxvQkFBb0IsQ0FBQyxLQUFELENBRnpDO0FBR0Usd0JBQWdCLEVBQUUrQjtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUEsb0JBREY7QUFlRDs7QUFFRCxNQUFJTSxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsUUFBTUMsWUFBWSxHQUFJQyxNQUFELElBQW9CO0FBQ3ZDLFVBQU1DLEtBQUssR0FBR3JELE9BQU8sQ0FBQ0YsTUFBUixDQUFnQnlDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxFQUFKLEtBQVdZLE1BQW5DLENBQWQ7QUFFQSxXQUFPQyxLQUFQO0FBQ0QsR0FKRDs7QUFNQSxNQUFJdkQsTUFBTSxLQUFLLEVBQWYsRUFBbUI7QUFDakIsVUFBTXdELFdBQVcsR0FBRyxFQUFwQixDQURpQixDQU1qQjtBQUNBOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3hELFFBQVEsQ0FBQ3lELE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFlBQU1FLFNBQVMsR0FBR04sWUFBWSxDQUFDcEQsUUFBUSxDQUFDd0QsQ0FBRCxDQUFSLENBQVloRCxNQUFiLENBQTlCO0FBQ0FrRCxNQUFBQSxTQUFTLENBQUNDLElBQVYsQ0FBZSxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUN2QixZQUFJaEUsNkNBQU0sQ0FBQytELENBQUMsQ0FBQ1osTUFBSCxDQUFOLEdBQW1CbkQsNkNBQU0sQ0FBQ2dFLENBQUMsQ0FBQ2IsTUFBSCxDQUE3QixFQUF5QyxPQUFPLENBQVA7QUFDekMsWUFBSW5ELDZDQUFNLENBQUMrRCxDQUFDLENBQUNaLE1BQUgsQ0FBTixHQUFtQm5ELDZDQUFNLENBQUNnRSxDQUFDLENBQUNiLE1BQUgsQ0FBN0IsRUFBeUMsT0FBTyxDQUFDLENBQVI7QUFDekMsZUFBTyxDQUFQO0FBQ0QsT0FKRDtBQUtBTyxNQUFBQSxXQUFXLENBQUNPLElBQVosQ0FBaUI7QUFDZnRELFFBQUFBLE1BQU0sRUFBRVIsUUFBUSxDQUFDd0QsQ0FBRCxDQUFSLENBQVloRCxNQURMO0FBRWZELFFBQUFBLElBQUksRUFBRVAsUUFBUSxDQUFDd0QsQ0FBRCxDQUFSLENBQVlqRCxJQUZIO0FBR2ZpQyxRQUFBQSxHQUFHLEVBQUVrQixTQUFTLENBQUMsQ0FBRDtBQUhDLE9BQWpCO0FBU0Q7O0FBRUQsUUFBSXRELGNBQUosRUFBb0I7QUFDbEJtRCxNQUFBQSxXQUFXLENBQUNJLElBQVosQ0FBaUIsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDekIsWUFBSWhFLDZDQUFNLENBQUMrRCxDQUFDLENBQUNwQixHQUFGLENBQU1RLE1BQVAsQ0FBTixHQUF1Qm5ELDZDQUFNLENBQUNnRSxDQUFDLENBQUNyQixHQUFGLENBQU1RLE1BQVAsQ0FBakMsRUFBaUQsT0FBTyxDQUFDLENBQVI7QUFDakQsWUFBSW5ELDZDQUFNLENBQUMrRCxDQUFDLENBQUNwQixHQUFGLENBQU1RLE1BQVAsQ0FBTixHQUF1Qm5ELDZDQUFNLENBQUNnRSxDQUFDLENBQUNyQixHQUFGLENBQU1RLE1BQVAsQ0FBakMsRUFBaUQsT0FBTyxDQUFQO0FBQ2pELGVBQU8sQ0FBUDtBQUNELE9BSkQ7QUFLRCxLQU5ELE1BTU87QUFDTE8sTUFBQUEsV0FBVyxDQUFDSSxJQUFaLENBQWlCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQ3pCLFlBQUloRSw2Q0FBTSxDQUFDK0QsQ0FBQyxDQUFDcEIsR0FBRixDQUFNUSxNQUFQLENBQU4sR0FBdUJuRCw2Q0FBTSxDQUFDZ0UsQ0FBQyxDQUFDckIsR0FBRixDQUFNUSxNQUFQLENBQWpDLEVBQWlELE9BQU8sQ0FBUDtBQUNqRCxZQUFJbkQsNkNBQU0sQ0FBQytELENBQUMsQ0FBQ3BCLEdBQUYsQ0FBTVEsTUFBUCxDQUFOLEdBQXVCbkQsNkNBQU0sQ0FBQ2dFLENBQUMsQ0FBQ3JCLEdBQUYsQ0FBTVEsTUFBUCxDQUFqQyxFQUFpRCxPQUFPLENBQUMsQ0FBUjtBQUNqRCxlQUFPLENBQVA7QUFDRCxPQUpEO0FBS0Q7O0FBRURHLElBQUFBLGFBQWEsR0FBR0ksV0FBaEI7QUFDRCxHQXpDRCxNQXlDTztBQUNMSixJQUFBQSxhQUFhLEdBQUduRCxRQUFRLENBQUNELE1BQVQsQ0FDYjZDLElBQUQsSUFDRUEsSUFBSSxDQUFDckMsSUFBTCxDQUFVd0QsV0FBVixHQUF3QkMsUUFBeEIsQ0FBaUNqRSxNQUFNLENBQUNnRSxXQUFQLEVBQWpDLEtBQ0FuQixJQUFJLENBQUNwQyxNQUFMLENBQVl5RCxRQUFaLEdBQXVCRCxRQUF2QixDQUFnQ2pFLE1BQWhDLENBSFksQ0FBaEI7QUFLRDs7QUFFRCxRQUFNbUUsYUFBYSxHQUFJdEMsTUFBRCxJQUE0QjtBQUNoRFYsSUFBQUEsb0JBQW9CLENBQUNVLE1BQU0sQ0FBQ3VDLFFBQVAsS0FBb0IsT0FBcEIsR0FBOEIsSUFBOUIsR0FBcUMsS0FBdEMsQ0FBcEI7QUFDQXZELElBQUFBLGVBQWUsQ0FBQyxLQUFELENBQWY7QUFDRCxHQUhEOztBQUtBLFFBQU13RCxTQUFTLEdBQUcsTUFBTTtBQUN0QnhELElBQUFBLGVBQWUsQ0FBQyxLQUFELENBQWY7QUFDQUYsSUFBQUEsZ0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNBUSxJQUFBQSxvQkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0QsR0FKRDs7QUFLQSxRQUFNbUQsYUFBYSxHQUFHLE1BQU07QUFDMUJ6RCxJQUFBQSxlQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0FFLElBQUFBLG9CQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDQUksSUFBQUEsb0JBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywrQ0FBRDtBQUNFLFVBQUksRUFBRVQsYUFBYSxJQUFJUSxpQkFEekI7QUFFRSxpQkFBVyxFQUFFbUQsU0FGZjtBQUdFLFVBQUksRUFBRS9ELElBSFI7QUFJRSxrQkFBWSxFQUFFeUI7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FLDhEQUFDLDhDQUFEO0FBQ0UsVUFBSSxFQUFFbkIsWUFEUjtBQUVFLGlCQUFXLEVBQUUsTUFBTUMsZUFBZSxDQUFDLEtBQUQsQ0FGcEM7QUFHRSxlQUFTLEVBQUdnQixNQUFELElBQVlzQyxhQUFhLENBQUN0QyxNQUFEO0FBSHRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFZRSw4REFBQyxtREFBRDtBQUNFLFVBQUksRUFBRWYsaUJBQWlCLElBQUlJLGlCQUQ3QjtBQUVFLGlCQUFXLEVBQUVvRCxhQUZmO0FBR0Usc0JBQWdCLEVBQUV4QjtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBaUJFLDhEQUFDLHFEQUFEO0FBQ0UsVUFBSSxFQUFFeUIsSUFEUjtBQUVFLGFBQU8sRUFBRUMsV0FGWDtBQUdFLHlCQUFnQixvQkFIbEI7QUFJRSwwQkFBaUIsMEJBSm5CO0FBQUEsOEJBTUUsOERBQUMsMERBQUQ7QUFBYSxVQUFFLEVBQUMsb0JBQWhCO0FBQUEsa0JBQ0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBU0UsOERBQUMsNERBQUQ7QUFBQSwrQkFDRSw4REFBQyxnRUFBRDtBQUFtQixZQUFFLEVBQUMsMEJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQWVFLDhEQUFDLDREQUFEO0FBQUEsZ0NBQ0UsOERBQUMsTUFBRDtBQUFRLGlCQUFPLEVBQUVBLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsTUFBRDtBQUFRLGlCQUFPLEVBQUVBLFdBQWpCO0FBQThCLG1CQUFTLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBdUNFLDhEQUFDLGtEQUFEO0FBQUssYUFBTyxFQUFDLE1BQWI7QUFBb0Isb0JBQWMsRUFBQyxRQUFuQztBQUE0QyxtQkFBYSxFQUFDLFFBQTFEO0FBQUEsZ0JBQ0dwQixhQUFhLENBQUNRLElBQWQsR0FBcUJhLEdBQXJCLENBQTBCNUIsSUFBRCxpQkFDeEIsOERBQUMsMENBQUQ7QUFDRSxZQUFJLEVBQUVBLElBQUksQ0FBQ3JDLElBRGI7QUFFRSxjQUFNLEVBQUVxQyxJQUFJLENBQUNwQyxNQUZmO0FBR0UsWUFBSSxFQUFFNEMsWUFBWSxDQUFDUixJQUFJLENBQUNwQyxNQUFOLENBSHBCO0FBSUUsa0JBQVUsRUFBRSxNQUFNbUIsYUFBYSxDQUFDaUIsSUFBRCxDQUpqQztBQUtFLHNCQUFjLEVBQUUsTUFBTWYsaUJBQWlCLENBQUNlLElBQUQ7QUFMekMsU0FNT0EsSUFBSSxDQUFDcEMsTUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2Q0Y7QUFBQSxrQkFERjtBQXNERCxDQWhQRDs7R0FBTVY7O0tBQUFBO0FBa1BOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0h5bW5zL0FsbEh5bW5zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuICB1c2VTdGF0ZSxcclxuICBSZWFjdEVsZW1lbnQsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIFNldFN0YXRlQWN0aW9uLFxyXG4gIERpc3BhdGNoLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIERpYWxvZywgRGlhbG9nQWN0aW9ucywgRGlhbG9nQ29udGVudCwgRGlhbG9nQ29udGVudFRleHQsIERpYWxvZ1RpdGxlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbi8vIGltcG9ydCBEaWFsb2cgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2cnO1xyXG4vLyBpbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ0FjdGlvbnMnO1xyXG4vLyBpbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ0NvbnRlbnQnO1xyXG4vLyBpbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2dDb250ZW50VGV4dCc7XHJcbi8vIGltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IEh5bW4gZnJvbSBcIi4vSHltblwiO1xyXG5pbXBvcnQgRWRpdE1vZGFsIGZyb20gXCIuL0h5bW4vRWRpdFwiO1xyXG5pbXBvcnQgUGluTW9kYWwgZnJvbSBcIi4vSHltbi9QaW5cIjtcclxuaW1wb3J0IFF1aWNrQWRkTW9kYWwgZnJvbSBcIi4vSHltbi9RdWlja0FkZFwiO1xyXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi8uLi8uLi9VdGlscy9mZXRjaGVyXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIEVkaXRWYWx1ZXMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBudW1iZXI6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhc3N3b3JkVmFsdWVzIHtcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUXVpY2tBZGRWYWx1ZXMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBIeW1uVmFsdWVzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBMb2dWYWx1ZXMge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbG9nZ2VkOiBzdHJpbmc7XHJcbiAgYnl3aG86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEFsbEh5bW5zUHJvcHMge1xyXG4gIGZpbHRlcjogc3RyaW5nO1xyXG4gIGh5bW5EYXRhOiBIeW1uVmFsdWVzW107XHJcbiAgbG9nRGF0YTogTG9nVmFsdWVzW107XHJcbiAgc2V0SHltbnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEh5bW5WYWx1ZXNbXT4+O1xyXG4gIHNldExvZ3M6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPExvZ1ZhbHVlc1tdPj47XHJcbiAgc29ydGVkUmV2ZXJzZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEFsbEh5bW5zOiBSZWFjdC5GQzxBbGxIeW1uc1Byb3BzPiA9ICh7XHJcbiAgZmlsdGVyLFxyXG4gIGh5bW5EYXRhLFxyXG4gIGxvZ0RhdGEsXHJcbiAgc2V0SHltbnMsXHJcbiAgc2V0TG9ncyxcclxuICBzb3J0ZWRSZXZlcnNlZCxcclxufTogQWxsSHltbnNQcm9wcyk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8SHltblZhbHVlcz4oe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIG51bWJlcjogMCxcclxuICB9KTtcclxuICBjb25zdCBbZWRpdE1vZGFsT3Blbiwgc2V0RWRpdE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3Bpbk1vZGFsT3Blbiwgc2V0UGluTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbcXVpY2tBZGRNb2RhbE9wZW4sIHNldFF1aWNrQWRkTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbYWxlcnRPcGVuLCBzZXRBbGVydE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBbaXNQYXNzd29yZENvcnJlY3QsIHNldElzUGFzc3dvcmRDb3JyZWN0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiL2FwaS9oeW1uXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoaHltbl9kYXRhKSA9PiBzZXRIeW1ucyhoeW1uX2RhdGEuaHltbnMpKTtcclxuICAgIGZldGNoKFwiL2FwaS9sb2dcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChsb2dfZGF0YSkgPT4gc2V0TG9ncyhsb2dfZGF0YS5sb2dzKSk7XHJcbiAgfSwgW3NldEh5bW5zLCBzZXRMb2dzXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5FZGl0TW9kYWwgPSAodmFsdWVzOiBIeW1uVmFsdWVzKSA9PiB7XHJcbiAgICBzZXRFZGl0TW9kYWxPcGVuKHRydWUpO1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgc2V0RGF0YSh2YWx1ZXMpO1xyXG4gIH07XHJcbiAgY29uc3Qgb3BlblF1aWNrQWRkTW9kYWwgPSAodmFsdWVzOiBIeW1uVmFsdWVzKSA9PiB7XHJcbiAgICBzZXRRdWlja0FkZE1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldFBpbk1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldERhdGEodmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlZGl0SHltbiA9ICh2YWx1ZXM6IEVkaXRWYWx1ZXMpID0+IHtcclxuICAgIG11dGF0ZShcIi9hcGkvaHltblwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVkaXRlZEh5bW4gPSBhd2FpdCBmZXRjaGVyKFwiL2FwaS9oeW1uXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgbnVtYmVyOiBkYXRhLm51bWJlcixcclxuICAgICAgICAgIG5ld051bWJlcjogdmFsdWVzLm51bWJlcixcclxuICAgICAgICAgIG5ld05hbWU6IHZhbHVlcy5uYW1lLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBuZXdMb2dzID0gbG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkID09PSBkYXRhLm51bWJlcik7XHJcblxyXG4gICAgICBpZiAodmFsdWVzLm51bWJlciA9PT0gZGF0YS5udW1iZXIpIHtcclxuICAgICAgICBlZGl0ZWRIeW1uLm51bWJlciA9IGRhdGEubnVtYmVyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xvZ3MuZm9yRWFjaCgobmV3TG9nKSA9PiB7XHJcbiAgICAgICAgICBuZXdMb2cuaWQgPSB2YWx1ZXMubnVtYmVyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlZGl0ZWRIeW1uLm5hbWUgPSB2YWx1ZXMubmFtZTtcclxuICAgICAgc2V0SHltbnMoW1xyXG4gICAgICAgIC4uLmh5bW5EYXRhLmZpbHRlcigoaHltbikgPT4gaHltbi5udW1iZXIgIT09IGRhdGEubnVtYmVyKSxcclxuICAgICAgICBlZGl0ZWRIeW1uLFxyXG4gICAgICBdKTtcclxuICAgICAgc2V0TG9ncyhbLi4ubG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkICE9PSBkYXRhLm51bWJlcildKTtcclxuICAgIH0pO1xyXG4gICAgc2V0RWRpdE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcXVpY2tBZGRIeW1uID0gKHZhbHVlczogUXVpY2tBZGRWYWx1ZXMpID0+IHtcclxuICAgIG11dGF0ZShcIi9hcGkvbG9nXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgYWRkZWRMb2cgPSBhd2FpdCBmZXRjaGVyKFwiL2FwaS9sb2dcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGlkOiBkYXRhLm51bWJlcixcclxuICAgICAgICAgIGJ5d2hvOiB2YWx1ZXMubmFtZSxcclxuICAgICAgICAgIGxvZ2dlZDogdmFsdWVzLmRhdGUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coYWRkZWRMb2cpO1xyXG4gICAgICBpZiAoYWRkZWRMb2cgPT09IFtdKSB7XHJcbiAgICAgICAgc2V0QWxlcnRPcGVuKHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRMb2dzKFsuLi5sb2dEYXRhLCBhZGRlZExvZ10pO1xyXG4gICAgfSk7XHJcbiAgICBzZXRRdWlja0FkZE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGh5bW5EYXRhWzBdLm51bWJlciA9PT0gOTk5IHx8IGxvZ0RhdGFbMF0uaWQgPT09IDk5OSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8RWRpdE1vZGFsXHJcbiAgICAgICAgICBvcGVuPXtlZGl0TW9kYWxPcGVufVxyXG4gICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIGVkaXRNdXRhdGlvbj17ZWRpdEh5bW59XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UXVpY2tBZGRNb2RhbFxyXG4gICAgICAgICAgb3Blbj17cXVpY2tBZGRNb2RhbE9wZW59XHJcbiAgICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgcXVpY2tBZGRNdXRhdGlvbj17cXVpY2tBZGRIeW1ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGxldCBmaWx0ZXJlZEh5bW5zID0gW107XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkTG9ncyA9IChoeW1uSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZmxvZ3MgPSBsb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgPT09IGh5bW5JZCk7XHJcblxyXG4gICAgcmV0dXJuIGZsb2dzO1xyXG4gIH07XHJcblxyXG4gIGlmIChmaWx0ZXIgPT09IFwiXCIpIHtcclxuICAgIGNvbnN0IG5ld2VzdEh5bW5zID0gW10gYXMgdW5rbm93biBhcyB7XHJcbiAgICAgIG51bWJlcjogbnVtYmVyO1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgIGxvZzogTG9nVmFsdWVzO1xyXG4gICAgfVtdO1xyXG4gICAgLy8gY29uc29sZS5sb2coaHltbkRhdGFbMF0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coZmlsdGVyZWRMb2dzKDM3MikpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoeW1uRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBsYXN0RGF0ZXMgPSBmaWx0ZXJlZExvZ3MoaHltbkRhdGFbaV0ubnVtYmVyKTtcclxuICAgICAgbGFzdERhdGVzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nZ2VkKSA8IG1vbWVudChiLmxvZ2dlZCkpIHJldHVybiAxO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2dnZWQpID4gbW9tZW50KGIubG9nZ2VkKSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgICAgbmV3ZXN0SHltbnMucHVzaCh7XHJcbiAgICAgICAgbnVtYmVyOiBoeW1uRGF0YVtpXS5udW1iZXIsXHJcbiAgICAgICAgbmFtZTogaHltbkRhdGFbaV0ubmFtZSxcclxuICAgICAgICBsb2c6IGxhc3REYXRlc1swXSxcclxuICAgICAgfSBhcyB7XHJcbiAgICAgICAgbnVtYmVyOiBudW1iZXI7XHJcbiAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGxvZzogTG9nVmFsdWVzO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc29ydGVkUmV2ZXJzZWQpIHtcclxuICAgICAgbmV3ZXN0SHltbnMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2cubG9nZ2VkKSA8IG1vbWVudChiLmxvZy5sb2dnZWQpKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZy5sb2dnZWQpID4gbW9tZW50KGIubG9nLmxvZ2dlZCkpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld2VzdEh5bW5zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nLmxvZ2dlZCkgPCBtb21lbnQoYi5sb2cubG9nZ2VkKSkgcmV0dXJuIDE7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZy5sb2dnZWQpID4gbW9tZW50KGIubG9nLmxvZ2dlZCkpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyZWRIeW1ucyA9IG5ld2VzdEh5bW5zO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmaWx0ZXJlZEh5bW5zID0gaHltbkRhdGEuZmlsdGVyKFxyXG4gICAgICAoaHltbikgPT5cclxuICAgICAgICBoeW1uLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICBoeW1uLm51bWJlci50b1N0cmluZygpLmluY2x1ZGVzKGZpbHRlcilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1Bhc3N3b3JkID0gKHZhbHVlczogUGFzc3dvcmRWYWx1ZXMpID0+IHtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KHZhbHVlcy5wYXNzd29yZCA9PT0gXCJyYWhhYlwiID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VFZGl0ID0gKCkgPT4ge1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgY2xvc2VRdWlja0FkZCA9ICgpID0+IHtcclxuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRRdWlja0FkZE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxFZGl0TW9kYWxcclxuICAgICAgICBvcGVuPXtlZGl0TW9kYWxPcGVuICYmIGlzUGFzc3dvcmRDb3JyZWN0fVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXtjbG9zZUVkaXR9XHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICBlZGl0TXV0YXRpb249e2VkaXRIeW1ufVxyXG4gICAgICAvPlxyXG4gICAgICA8UGluTW9kYWxcclxuICAgICAgICBvcGVuPXtwaW5Nb2RhbE9wZW59XHJcbiAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldFBpbk1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgaXNDb3JyZWN0PXsodmFsdWVzKSA9PiBjaGVja1Bhc3N3b3JkKHZhbHVlcyl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxRdWlja0FkZE1vZGFsXHJcbiAgICAgICAgb3Blbj17cXVpY2tBZGRNb2RhbE9wZW4gJiYgaXNQYXNzd29yZENvcnJlY3R9XHJcbiAgICAgICAgaGFuZGxlQ2xvc2U9e2Nsb3NlUXVpY2tBZGR9XHJcbiAgICAgICAgcXVpY2tBZGRNdXRhdGlvbj17cXVpY2tBZGRIeW1ufVxyXG4gICAgICAvPlxyXG4gICAgICA8RGlhbG9nXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJhbGVydC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICB7XCJVc2UgR29vZ2xlJ3MgbG9jYXRpb24gc2VydmljZT9cIn1cclxuICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIExldCBHb29nbGUgaGVscCBhcHBzIGRldGVybWluZSBsb2NhdGlvbi4gVGhpcyBtZWFucyBzZW5kaW5nIGFub255bW91c1xyXG4gICAgICAgICAgICBsb2NhdGlvbiBkYXRhIHRvIEdvb2dsZSwgZXZlbiB3aGVuIG5vIGFwcHMgYXJlIHJ1bm5pbmcuXHJcbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PkRpc2FncmVlPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBhdXRvRm9jdXM+XHJcbiAgICAgICAgICAgIEFncmVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAge2ZpbHRlcmVkSHltbnMuc29ydCgpLm1hcCgoaHltbikgPT4gKFxyXG4gICAgICAgICAgPEh5bW5cclxuICAgICAgICAgICAgbmFtZT17aHltbi5uYW1lfVxyXG4gICAgICAgICAgICBudW1iZXI9e2h5bW4ubnVtYmVyfVxyXG4gICAgICAgICAgICBsb2dzPXtmaWx0ZXJlZExvZ3MoaHltbi5udW1iZXIpfVxyXG4gICAgICAgICAgICBoYW5kbGVFZGl0PXsoKSA9PiBvcGVuRWRpdE1vZGFsKGh5bW4pfVxyXG4gICAgICAgICAgICBoYW5kbGVRdWlja0FkZD17KCkgPT4gb3BlblF1aWNrQWRkTW9kYWwoaHltbil9XHJcbiAgICAgICAgICAgIGtleT17aHltbi5udW1iZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxIeW1ucztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJEaWFsb2ciLCJEaWFsb2dBY3Rpb25zIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0NvbnRlbnRUZXh0IiwiRGlhbG9nVGl0bGUiLCJIeW1uIiwiRWRpdE1vZGFsIiwiUGluTW9kYWwiLCJRdWlja0FkZE1vZGFsIiwibXV0YXRlIiwiZmV0Y2hlciIsIm1vbWVudCIsIkFsbEh5bW5zIiwiZmlsdGVyIiwiaHltbkRhdGEiLCJsb2dEYXRhIiwic2V0SHltbnMiLCJzZXRMb2dzIiwic29ydGVkUmV2ZXJzZWQiLCJkYXRhIiwic2V0RGF0YSIsIm5hbWUiLCJudW1iZXIiLCJlZGl0TW9kYWxPcGVuIiwic2V0RWRpdE1vZGFsT3BlbiIsInBpbk1vZGFsT3BlbiIsInNldFBpbk1vZGFsT3BlbiIsInF1aWNrQWRkTW9kYWxPcGVuIiwic2V0UXVpY2tBZGRNb2RhbE9wZW4iLCJhbGVydE9wZW4iLCJzZXRBbGVydE9wZW4iLCJpc1Bhc3N3b3JkQ29ycmVjdCIsInNldElzUGFzc3dvcmRDb3JyZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaHltbl9kYXRhIiwiaHltbnMiLCJsb2dfZGF0YSIsImxvZ3MiLCJvcGVuRWRpdE1vZGFsIiwidmFsdWVzIiwib3BlblF1aWNrQWRkTW9kYWwiLCJlZGl0SHltbiIsImVkaXRlZEh5bW4iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdOdW1iZXIiLCJuZXdOYW1lIiwibmV3TG9ncyIsImxvZyIsImlkIiwiZm9yRWFjaCIsIm5ld0xvZyIsImh5bW4iLCJxdWlja0FkZEh5bW4iLCJhZGRlZExvZyIsImJ5d2hvIiwibG9nZ2VkIiwiZGF0ZSIsImNvbnNvbGUiLCJmaWx0ZXJlZEh5bW5zIiwiZmlsdGVyZWRMb2dzIiwiaHltbklkIiwiZmxvZ3MiLCJuZXdlc3RIeW1ucyIsImkiLCJsZW5ndGgiLCJsYXN0RGF0ZXMiLCJzb3J0IiwiYSIsImIiLCJwdXNoIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwiY2xvc2VFZGl0IiwiY2xvc2VRdWlja0FkZCIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=