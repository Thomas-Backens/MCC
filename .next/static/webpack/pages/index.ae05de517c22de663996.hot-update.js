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
  setHymns,
  sortedReversed
}) => {
  _s();

  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    _id: 0,
    name: "",
    logs: []
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
  }, [setHymns]);

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
      const updatedHymns = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)("/api/hymn", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _id: data._id,
          newId: values.number,
          newName: values.name
        })
      });
      setHymns(updatedHymns);
    });
    setEditModalOpen(false);
    setIsPasswordCorrect(false);
  };

  const quickAddHymn = values => {
    (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)("/api/hymn", async () => {
      const updatedHymns = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)("/api/hymn", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _id: data._id,
          by: values.name,
          logged: values.date
        })
      });

      if (updatedHymns.length <= 0) {
        setAlertOpen(true);
      } else {
        setHymns(updatedHymns);
      }
    });
    setQuickAddModalOpen(false);
    setIsPasswordCorrect(false);
  };

  if (hymnData === undefined) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_2__.default, {
        open: editModalOpen,
        handleClose: () => setEditModalOpen(false),
        data: data,
        editMutation: editHymn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
        open: quickAddModalOpen,
        handleClose: () => setQuickAddModalOpen(false),
        quickAddMutation: quickAddHymn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined)]
    }, void 0, true);
  }

  let filteredHymns = hymnData;

  if (filter === "") {
    let sortedHymns = [];

    for (let i = 0; i < hymnData.length; i++) {
      const sortedLogs = hymnData[i].logs.sort((a, b) => {
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.logged) < moment__WEBPACK_IMPORTED_MODULE_8___default()(b.logged)) return 1;
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.logged) > moment__WEBPACK_IMPORTED_MODULE_8___default()(b.logged)) return -1;
        return 0;
      });
      sortedHymns.push({
        _id: hymnData[i]._id,
        name: hymnData[i].name,
        logs: sortedLogs
      });
    }

    if (sortedReversed) {
      sortedHymns.sort((a, b) => {
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.logs[0].logged) < moment__WEBPACK_IMPORTED_MODULE_8___default()(b.logs[0].logged)) return -1;
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.logs[0].logged) > moment__WEBPACK_IMPORTED_MODULE_8___default()(b.logs[0].logged)) return 1;
        return 0;
      });
    } else {
      sortedHymns.sort((a, b) => {
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.logs[0].logged) < moment__WEBPACK_IMPORTED_MODULE_8___default()(b.logs[0].logged)) return 1;
        if (moment__WEBPACK_IMPORTED_MODULE_8___default()(a.logs[0].logged) > moment__WEBPACK_IMPORTED_MODULE_8___default()(b.logs[0].logged)) return -1;
        return 0;
      });
    }

    filteredHymns = sortedHymns;
  } else {
    filteredHymns = hymnData.filter(hymn => hymn.name.toLowerCase().includes(filter.toLowerCase()) || hymn._id.toString().includes(filter));
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
      lineNumber: 207,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__.default, {
      open: pinModalOpen,
      handleClose: () => setPinModalOpen(false),
      isCorrect: values => checkPassword(values)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
      open: quickAddModalOpen && isPasswordCorrect,
      handleClose: closeQuickAdd,
      quickAddMutation: quickAddHymn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Alert__WEBPACK_IMPORTED_MODULE_5__.default, {
      open: alertOpen,
      handleClose: handleCloseAlert
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      children: filteredHymns.sort().map(hymn => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn__WEBPACK_IMPORTED_MODULE_1__.default, {
        name: hymn.name,
        number: hymn._id,
        logs: hymn.logs,
        handleEdit: () => openEditModal(hymn),
        handleQuickAdd: () => openQuickAddModal(hymn)
      }, hymn._id, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(AllHymns, "ro3YupU2UvfaXH7sVXz0/6BEPbc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWUwNWRlNTE3YzIyZGU2NjM5OTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFtQ0EsTUFBTVksUUFBaUMsR0FBRyxDQUFDO0FBQ3pDQyxFQUFBQSxNQUR5QztBQUV6Q0MsRUFBQUEsUUFGeUM7QUFHekNDLEVBQUFBLFFBSHlDO0FBSXpDQyxFQUFBQTtBQUp5QyxDQUFELEtBS1A7QUFBQTs7QUFDakMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCakIsK0NBQVEsQ0FBYTtBQUMzQ2tCLElBQUFBLEdBQUcsRUFBRSxDQURzQztBQUUzQ0MsSUFBQUEsSUFBSSxFQUFFLEVBRnFDO0FBRzNDQyxJQUFBQSxJQUFJLEVBQUU7QUFIcUMsR0FBYixDQUFoQztBQUtBLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DdEIsK0NBQVEsQ0FBVSxLQUFWLENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUN1QixZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ3hCLCtDQUFRLENBQVUsS0FBVixDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDeUIsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNEMxQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBMUQ7QUFDQSxRQUFNO0FBQUEsT0FBQzJCLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCNUIsK0NBQVEsQ0FBVSxLQUFWLENBQTFDO0FBRUEsUUFBTTtBQUFBLE9BQUM2QixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0QzlCLCtDQUFRLENBQVUsS0FBVixDQUExRDtBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZDhCLElBQUFBLEtBQUssQ0FBQyxXQUFELENBQUwsQ0FDR0MsSUFESCxDQUNTQyxRQUFELElBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUR0QixFQUVHRixJQUZILENBRVNHLFNBQUQsSUFBZXJCLFFBQVEsQ0FBQ3FCLFNBQVMsQ0FBQ0MsS0FBWCxDQUYvQjtBQUdELEdBSlEsRUFJTixDQUFDdEIsUUFBRCxDQUpNLENBQVQ7O0FBTUEsUUFBTXVCLGFBQWEsR0FBSUMsTUFBRCxJQUF3QjtBQUM1Q2hCLElBQUFBLGdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQUUsSUFBQUEsZUFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBUCxJQUFBQSxPQUFPLENBQUNxQixNQUFELENBQVA7QUFDRCxHQUpEOztBQUtBLFFBQU1DLGlCQUFpQixHQUFJRCxNQUFELElBQXdCO0FBQ2hEWixJQUFBQSxvQkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0FGLElBQUFBLGVBQWUsQ0FBQyxJQUFELENBQWY7QUFDQVAsSUFBQUEsT0FBTyxDQUFDcUIsTUFBRCxDQUFQO0FBQ0QsR0FKRDs7QUFNQSxRQUFNRSxRQUFRLEdBQUlGLE1BQUQsSUFBd0I7QUFDdkM5QixJQUFBQSwyQ0FBTSxDQUFDLFdBQUQsRUFBYyxZQUFZO0FBQzlCLFlBQU1pQyxZQUFZLEdBQUcsTUFBTWhDLHVEQUFPLENBQUMsV0FBRCxFQUFjO0FBQzlDaUMsUUFBQUEsTUFBTSxFQUFFLE9BRHNDO0FBRTlDQyxRQUFBQSxPQUFPLEVBQUU7QUFBRSwwQkFBZ0I7QUFBbEIsU0FGcUM7QUFHOUNDLFFBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkI1QixVQUFBQSxHQUFHLEVBQUVGLElBQUksQ0FBQ0UsR0FEUztBQUVuQjZCLFVBQUFBLEtBQUssRUFBRVQsTUFBTSxDQUFDVSxNQUZLO0FBR25CQyxVQUFBQSxPQUFPLEVBQUVYLE1BQU0sQ0FBQ25CO0FBSEcsU0FBZjtBQUh3QyxPQUFkLENBQWxDO0FBVUFMLE1BQUFBLFFBQVEsQ0FBQzJCLFlBQUQsQ0FBUjtBQUNELEtBWkssQ0FBTjtBQWFBbkIsSUFBQUEsZ0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNBUSxJQUFBQSxvQkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0QsR0FoQkQ7O0FBa0JBLFFBQU1vQixZQUFZLEdBQUlaLE1BQUQsSUFBNEI7QUFDL0M5QixJQUFBQSwyQ0FBTSxDQUFDLFdBQUQsRUFBYyxZQUFZO0FBQzlCLFlBQU1pQyxZQUFZLEdBQUcsTUFBTWhDLHVEQUFPLENBQUMsV0FBRCxFQUFjO0FBQzlDaUMsUUFBQUEsTUFBTSxFQUFFLEtBRHNDO0FBRTlDQyxRQUFBQSxPQUFPLEVBQUU7QUFBRSwwQkFBZ0I7QUFBbEIsU0FGcUM7QUFHOUNDLFFBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkI1QixVQUFBQSxHQUFHLEVBQUVGLElBQUksQ0FBQ0UsR0FEUztBQUVuQmlDLFVBQUFBLEVBQUUsRUFBRWIsTUFBTSxDQUFDbkIsSUFGUTtBQUduQmlDLFVBQUFBLE1BQU0sRUFBRWQsTUFBTSxDQUFDZTtBQUhJLFNBQWY7QUFId0MsT0FBZCxDQUFsQzs7QUFVQSxVQUFJWixZQUFZLENBQUNhLE1BQWIsSUFBdUIsQ0FBM0IsRUFBOEI7QUFDNUIxQixRQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0xkLFFBQUFBLFFBQVEsQ0FBQzJCLFlBQUQsQ0FBUjtBQUNEO0FBQ0YsS0FoQkssQ0FBTjtBQWlCQWYsSUFBQUEsb0JBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNBSSxJQUFBQSxvQkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0QsR0FwQkQ7O0FBc0JBLE1BQUlqQixRQUFRLEtBQUswQyxTQUFqQixFQUE0QjtBQUMxQix3QkFDRTtBQUFBLDhCQUNFLDhEQUFDLCtDQUFEO0FBQ0UsWUFBSSxFQUFFbEMsYUFEUjtBQUVFLG1CQUFXLEVBQUUsTUFBTUMsZ0JBQWdCLENBQUMsS0FBRCxDQUZyQztBQUdFLFlBQUksRUFBRU4sSUFIUjtBQUlFLG9CQUFZLEVBQUV3QjtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0UsOERBQUMsbURBQUQ7QUFDRSxZQUFJLEVBQUVmLGlCQURSO0FBRUUsbUJBQVcsRUFBRSxNQUFNQyxvQkFBb0IsQ0FBQyxLQUFELENBRnpDO0FBR0Usd0JBQWdCLEVBQUV3QjtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUEsb0JBREY7QUFlRDs7QUFFRCxNQUFJTSxhQUFhLEdBQUczQyxRQUFwQjs7QUFFQSxNQUFJRCxNQUFNLEtBQUssRUFBZixFQUFtQjtBQUNqQixRQUFJNkMsV0FBVyxHQUFHLEVBQWxCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzdDLFFBQVEsQ0FBQ3lDLE1BQTdCLEVBQXFDSSxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFlBQU1DLFVBQVUsR0FBRzlDLFFBQVEsQ0FBQzZDLENBQUQsQ0FBUixDQUFZdEMsSUFBWixDQUFpQndDLElBQWpCLENBQXNCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQ2pELFlBQUlwRCw2Q0FBTSxDQUFDbUQsQ0FBQyxDQUFDVCxNQUFILENBQU4sR0FBbUIxQyw2Q0FBTSxDQUFDb0QsQ0FBQyxDQUFDVixNQUFILENBQTdCLEVBQXlDLE9BQU8sQ0FBUDtBQUN6QyxZQUFJMUMsNkNBQU0sQ0FBQ21ELENBQUMsQ0FBQ1QsTUFBSCxDQUFOLEdBQW1CMUMsNkNBQU0sQ0FBQ29ELENBQUMsQ0FBQ1YsTUFBSCxDQUE3QixFQUF5QyxPQUFPLENBQUMsQ0FBUjtBQUN6QyxlQUFPLENBQVA7QUFDRCxPQUprQixDQUFuQjtBQU1BSyxNQUFBQSxXQUFXLENBQUNNLElBQVosQ0FBaUI7QUFDZjdDLFFBQUFBLEdBQUcsRUFBRUwsUUFBUSxDQUFDNkMsQ0FBRCxDQUFSLENBQVl4QyxHQURGO0FBRWZDLFFBQUFBLElBQUksRUFBRU4sUUFBUSxDQUFDNkMsQ0FBRCxDQUFSLENBQVl2QyxJQUZIO0FBR2ZDLFFBQUFBLElBQUksRUFBRXVDO0FBSFMsT0FBakI7QUFLRDs7QUFFRCxRQUFJNUMsY0FBSixFQUFvQjtBQUNsQjBDLE1BQUFBLFdBQVcsQ0FBQ0csSUFBWixDQUFpQixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUN6QixZQUFJcEQsNkNBQU0sQ0FBQ21ELENBQUMsQ0FBQ3pDLElBQUYsQ0FBTyxDQUFQLEVBQVVnQyxNQUFYLENBQU4sR0FBMkIxQyw2Q0FBTSxDQUFDb0QsQ0FBQyxDQUFDMUMsSUFBRixDQUFPLENBQVAsRUFBVWdDLE1BQVgsQ0FBckMsRUFBeUQsT0FBTyxDQUFDLENBQVI7QUFDekQsWUFBSTFDLDZDQUFNLENBQUNtRCxDQUFDLENBQUN6QyxJQUFGLENBQU8sQ0FBUCxFQUFVZ0MsTUFBWCxDQUFOLEdBQTJCMUMsNkNBQU0sQ0FBQ29ELENBQUMsQ0FBQzFDLElBQUYsQ0FBTyxDQUFQLEVBQVVnQyxNQUFYLENBQXJDLEVBQXlELE9BQU8sQ0FBUDtBQUN6RCxlQUFPLENBQVA7QUFDRCxPQUpEO0FBS0QsS0FORCxNQU1PO0FBQ0xLLE1BQUFBLFdBQVcsQ0FBQ0csSUFBWixDQUFpQixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUN6QixZQUFJcEQsNkNBQU0sQ0FBQ21ELENBQUMsQ0FBQ3pDLElBQUYsQ0FBTyxDQUFQLEVBQVVnQyxNQUFYLENBQU4sR0FBMkIxQyw2Q0FBTSxDQUFDb0QsQ0FBQyxDQUFDMUMsSUFBRixDQUFPLENBQVAsRUFBVWdDLE1BQVgsQ0FBckMsRUFBeUQsT0FBTyxDQUFQO0FBQ3pELFlBQUkxQyw2Q0FBTSxDQUFDbUQsQ0FBQyxDQUFDekMsSUFBRixDQUFPLENBQVAsRUFBVWdDLE1BQVgsQ0FBTixHQUEyQjFDLDZDQUFNLENBQUNvRCxDQUFDLENBQUMxQyxJQUFGLENBQU8sQ0FBUCxFQUFVZ0MsTUFBWCxDQUFyQyxFQUF5RCxPQUFPLENBQUMsQ0FBUjtBQUN6RCxlQUFPLENBQVA7QUFDRCxPQUpEO0FBS0Q7O0FBRURJLElBQUFBLGFBQWEsR0FBR0MsV0FBaEI7QUFDRCxHQS9CRCxNQStCTztBQUNMRCxJQUFBQSxhQUFhLEdBQUczQyxRQUFRLENBQUNELE1BQVQsQ0FDYm9ELElBQUQsSUFDRUEsSUFBSSxDQUFDN0MsSUFBTCxDQUFVOEMsV0FBVixHQUF3QkMsUUFBeEIsQ0FBaUN0RCxNQUFNLENBQUNxRCxXQUFQLEVBQWpDLEtBQ0FELElBQUksQ0FBQzlDLEdBQUwsQ0FBU2lELFFBQVQsR0FBb0JELFFBQXBCLENBQTZCdEQsTUFBN0IsQ0FIWSxDQUFoQjtBQUtEOztBQUVELFFBQU13RCxhQUFhLEdBQUk5QixNQUFELElBQTRCO0FBQ2hEUixJQUFBQSxvQkFBb0IsQ0FBQ1EsTUFBTSxDQUFDK0IsUUFBUCxLQUFvQixPQUFwQixHQUE4QixJQUE5QixHQUFxQyxLQUF0QyxDQUFwQjtBQUNBN0MsSUFBQUEsZUFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNELEdBSEQ7O0FBS0EsUUFBTThDLFNBQVMsR0FBRyxNQUFNO0FBQ3RCOUMsSUFBQUEsZUFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBRixJQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0FRLElBQUFBLG9CQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDRCxHQUpEOztBQUtBLFFBQU15QyxhQUFhLEdBQUcsTUFBTTtBQUMxQi9DLElBQUFBLGVBQWUsQ0FBQyxLQUFELENBQWY7QUFDQUUsSUFBQUEsb0JBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNBSSxJQUFBQSxvQkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0QsR0FKRDs7QUFNQSxRQUFNMEMsZ0JBQWdCLEdBQUcsTUFBTTtBQUM3QjVDLElBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsK0NBQUQ7QUFDRSxVQUFJLEVBQUVQLGFBQWEsSUFBSVEsaUJBRHpCO0FBRUUsaUJBQVcsRUFBRXlDLFNBRmY7QUFHRSxVQUFJLEVBQUV0RCxJQUhSO0FBSUUsa0JBQVksRUFBRXdCO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRSw4REFBQyw4Q0FBRDtBQUNFLFVBQUksRUFBRWpCLFlBRFI7QUFFRSxpQkFBVyxFQUFFLE1BQU1DLGVBQWUsQ0FBQyxLQUFELENBRnBDO0FBR0UsZUFBUyxFQUFHYyxNQUFELElBQVk4QixhQUFhLENBQUM5QixNQUFEO0FBSHRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFZRSw4REFBQyxtREFBRDtBQUNFLFVBQUksRUFBRWIsaUJBQWlCLElBQUlJLGlCQUQ3QjtBQUVFLGlCQUFXLEVBQUUwQyxhQUZmO0FBR0Usc0JBQWdCLEVBQUVyQjtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBaUJFLDhEQUFDLGdEQUFEO0FBQWEsVUFBSSxFQUFFdkIsU0FBbkI7QUFBOEIsaUJBQVcsRUFBRTZDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBa0JFLDhEQUFDLG1EQUFEO0FBQUssYUFBTyxFQUFDLE1BQWI7QUFBb0Isb0JBQWMsRUFBQyxRQUFuQztBQUE0QyxtQkFBYSxFQUFDLFFBQTFEO0FBQUEsZ0JBQ0doQixhQUFhLENBQUNJLElBQWQsR0FBcUJhLEdBQXJCLENBQTBCVCxJQUFELGlCQUN4Qiw4REFBQywwQ0FBRDtBQUNFLFlBQUksRUFBRUEsSUFBSSxDQUFDN0MsSUFEYjtBQUVFLGNBQU0sRUFBRTZDLElBQUksQ0FBQzlDLEdBRmY7QUFHRSxZQUFJLEVBQUU4QyxJQUFJLENBQUM1QyxJQUhiO0FBSUUsa0JBQVUsRUFBRSxNQUFNaUIsYUFBYSxDQUFDMkIsSUFBRCxDQUpqQztBQUtFLHNCQUFjLEVBQUUsTUFBTXpCLGlCQUFpQixDQUFDeUIsSUFBRDtBQUx6QyxTQU1PQSxJQUFJLENBQUM5QyxHQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCRjtBQUFBLGtCQURGO0FBaUNELENBM0xEOztHQUFNUDs7S0FBQUE7QUE2TE4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSHltbnMvQWxsSHltbnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIHVzZVN0YXRlLFxyXG4gIFJlYWN0RWxlbWVudCxcclxuICB1c2VFZmZlY3QsXHJcbiAgU2V0U3RhdGVBY3Rpb24sXHJcbiAgRGlzcGF0Y2gsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSHltbiBmcm9tIFwiLi9IeW1uXCI7XHJcbmltcG9ydCBFZGl0TW9kYWwgZnJvbSBcIi4vSHltbi9FZGl0XCI7XHJcbmltcG9ydCBQaW5Nb2RhbCBmcm9tIFwiLi9IeW1uL1BpblwiO1xyXG5pbXBvcnQgUXVpY2tBZGRNb2RhbCBmcm9tIFwiLi9IeW1uL1F1aWNrQWRkXCI7XHJcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tIFwiLi9IeW1uL0FsZXJ0XCI7XHJcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uLy4uLy4uL1V0aWxzL2ZldGNoZXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgRWRpdFZhbHVlcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFzc3dvcmRWYWx1ZXMge1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWlja0FkZFZhbHVlcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRhdGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEh5bW5WYWx1ZXMge1xyXG4gIF9pZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsb2dzOiB7IGxvZ2dlZDogc3RyaW5nOyBieTogc3RyaW5nIH1bXTtcclxufVxyXG5cclxuLy8gaW50ZXJmYWNlIExvZ1ZhbHVlcyB7XHJcbi8vICAgaWQ6IG51bWJlcjtcclxuLy8gICBsb2dnZWQ6IHN0cmluZztcclxuLy8gICBieTogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG5pbnRlcmZhY2UgQWxsSHltbnNQcm9wcyB7XHJcbiAgZmlsdGVyOiBzdHJpbmc7XHJcbiAgaHltbkRhdGE6IEh5bW5WYWx1ZXNbXTtcclxuICBzZXRIeW1uczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248SHltblZhbHVlc1tdPj47XHJcbiAgc29ydGVkUmV2ZXJzZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEFsbEh5bW5zOiBSZWFjdC5GQzxBbGxIeW1uc1Byb3BzPiA9ICh7XHJcbiAgZmlsdGVyLFxyXG4gIGh5bW5EYXRhLFxyXG4gIHNldEh5bW5zLFxyXG4gIHNvcnRlZFJldmVyc2VkLFxyXG59OiBBbGxIeW1uc1Byb3BzKTogUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxIeW1uVmFsdWVzPih7XHJcbiAgICBfaWQ6IDAsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgbG9nczogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2VkaXRNb2RhbE9wZW4sIHNldEVkaXRNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtwaW5Nb2RhbE9wZW4sIHNldFBpbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3F1aWNrQWRkTW9kYWxPcGVuLCBzZXRRdWlja0FkZE1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2FsZXJ0T3Blbiwgc2V0QWxlcnRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2lzUGFzc3dvcmRDb3JyZWN0LCBzZXRJc1Bhc3N3b3JkQ29ycmVjdF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcIi9hcGkvaHltblwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGh5bW5fZGF0YSkgPT4gc2V0SHltbnMoaHltbl9kYXRhLmh5bW5zKSk7XHJcbiAgfSwgW3NldEh5bW5zXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5FZGl0TW9kYWwgPSAodmFsdWVzOiBIeW1uVmFsdWVzKSA9PiB7XHJcbiAgICBzZXRFZGl0TW9kYWxPcGVuKHRydWUpO1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgc2V0RGF0YSh2YWx1ZXMpO1xyXG4gIH07XHJcbiAgY29uc3Qgb3BlblF1aWNrQWRkTW9kYWwgPSAodmFsdWVzOiBIeW1uVmFsdWVzKSA9PiB7XHJcbiAgICBzZXRRdWlja0FkZE1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldFBpbk1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldERhdGEodmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlZGl0SHltbiA9ICh2YWx1ZXM6IEVkaXRWYWx1ZXMpID0+IHtcclxuICAgIG11dGF0ZShcIi9hcGkvaHltblwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRIeW1ucyA9IGF3YWl0IGZldGNoZXIoXCIvYXBpL2h5bW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBfaWQ6IGRhdGEuX2lkLFxyXG4gICAgICAgICAgbmV3SWQ6IHZhbHVlcy5udW1iZXIsXHJcbiAgICAgICAgICBuZXdOYW1lOiB2YWx1ZXMubmFtZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRIeW1ucyh1cGRhdGVkSHltbnMpO1xyXG4gICAgfSk7XHJcbiAgICBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBxdWlja0FkZEh5bW4gPSAodmFsdWVzOiBRdWlja0FkZFZhbHVlcykgPT4ge1xyXG4gICAgbXV0YXRlKFwiL2FwaS9oeW1uXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdXBkYXRlZEh5bW5zID0gYXdhaXQgZmV0Y2hlcihcIi9hcGkvaHltblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBfaWQ6IGRhdGEuX2lkLFxyXG4gICAgICAgICAgYnk6IHZhbHVlcy5uYW1lLFxyXG4gICAgICAgICAgbG9nZ2VkOiB2YWx1ZXMuZGF0ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodXBkYXRlZEh5bW5zLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgc2V0QWxlcnRPcGVuKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEh5bW5zKHVwZGF0ZWRIeW1ucyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGlmIChoeW1uRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxFZGl0TW9kYWxcclxuICAgICAgICAgIG9wZW49e2VkaXRNb2RhbE9wZW59XHJcbiAgICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0RWRpdE1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxRdWlja0FkZE1vZGFsXHJcbiAgICAgICAgICBvcGVuPXtxdWlja0FkZE1vZGFsT3Blbn1cclxuICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRRdWlja0FkZE1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbGV0IGZpbHRlcmVkSHltbnMgPSBoeW1uRGF0YTtcclxuXHJcbiAgaWYgKGZpbHRlciA9PT0gXCJcIikge1xyXG4gICAgbGV0IHNvcnRlZEh5bW5zID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGh5bW5EYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNvcnRlZExvZ3MgPSBoeW1uRGF0YVtpXS5sb2dzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nZ2VkKSA8IG1vbWVudChiLmxvZ2dlZCkpIHJldHVybiAxO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2dnZWQpID4gbW9tZW50KGIubG9nZ2VkKSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvcnRlZEh5bW5zLnB1c2goe1xyXG4gICAgICAgIF9pZDogaHltbkRhdGFbaV0uX2lkLFxyXG4gICAgICAgIG5hbWU6IGh5bW5EYXRhW2ldLm5hbWUsXHJcbiAgICAgICAgbG9nczogc29ydGVkTG9ncyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvcnRlZFJldmVyc2VkKSB7XHJcbiAgICAgIHNvcnRlZEh5bW5zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nc1swXS5sb2dnZWQpIDwgbW9tZW50KGIubG9nc1swXS5sb2dnZWQpKSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZ3NbMF0ubG9nZ2VkKSA+IG1vbWVudChiLmxvZ3NbMF0ubG9nZ2VkKSkgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc29ydGVkSHltbnMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2dzWzBdLmxvZ2dlZCkgPCBtb21lbnQoYi5sb2dzWzBdLmxvZ2dlZCkpIHJldHVybiAxO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2dzWzBdLmxvZ2dlZCkgPiBtb21lbnQoYi5sb2dzWzBdLmxvZ2dlZCkpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyZWRIeW1ucyA9IHNvcnRlZEh5bW5zO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmaWx0ZXJlZEh5bW5zID0gaHltbkRhdGEuZmlsdGVyKFxyXG4gICAgICAoaHltbikgPT5cclxuICAgICAgICBoeW1uLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICBoeW1uLl9pZC50b1N0cmluZygpLmluY2x1ZGVzKGZpbHRlcilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1Bhc3N3b3JkID0gKHZhbHVlczogUGFzc3dvcmRWYWx1ZXMpID0+IHtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KHZhbHVlcy5wYXNzd29yZCA9PT0gXCJyYWhhYlwiID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VFZGl0ID0gKCkgPT4ge1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgY2xvc2VRdWlja0FkZCA9ICgpID0+IHtcclxuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRRdWlja0FkZE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VBbGVydCA9ICgpID0+IHtcclxuICAgIHNldEFsZXJ0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxFZGl0TW9kYWxcclxuICAgICAgICBvcGVuPXtlZGl0TW9kYWxPcGVuICYmIGlzUGFzc3dvcmRDb3JyZWN0fVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXtjbG9zZUVkaXR9XHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICBlZGl0TXV0YXRpb249e2VkaXRIeW1ufVxyXG4gICAgICAvPlxyXG4gICAgICA8UGluTW9kYWxcclxuICAgICAgICBvcGVuPXtwaW5Nb2RhbE9wZW59XHJcbiAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldFBpbk1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgaXNDb3JyZWN0PXsodmFsdWVzKSA9PiBjaGVja1Bhc3N3b3JkKHZhbHVlcyl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxRdWlja0FkZE1vZGFsXHJcbiAgICAgICAgb3Blbj17cXVpY2tBZGRNb2RhbE9wZW4gJiYgaXNQYXNzd29yZENvcnJlY3R9XHJcbiAgICAgICAgaGFuZGxlQ2xvc2U9e2Nsb3NlUXVpY2tBZGR9XHJcbiAgICAgICAgcXVpY2tBZGRNdXRhdGlvbj17cXVpY2tBZGRIeW1ufVxyXG4gICAgICAvPlxyXG4gICAgICA8QWxlcnREaWFsb2cgb3Blbj17YWxlcnRPcGVufSBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2VBbGVydH0gLz5cclxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgIHtmaWx0ZXJlZEh5bW5zLnNvcnQoKS5tYXAoKGh5bW4pID0+IChcclxuICAgICAgICAgIDxIeW1uXHJcbiAgICAgICAgICAgIG5hbWU9e2h5bW4ubmFtZX1cclxuICAgICAgICAgICAgbnVtYmVyPXtoeW1uLl9pZH1cclxuICAgICAgICAgICAgbG9ncz17aHltbi5sb2dzfVxyXG4gICAgICAgICAgICBoYW5kbGVFZGl0PXsoKSA9PiBvcGVuRWRpdE1vZGFsKGh5bW4pfVxyXG4gICAgICAgICAgICBoYW5kbGVRdWlja0FkZD17KCkgPT4gb3BlblF1aWNrQWRkTW9kYWwoaHltbil9XHJcbiAgICAgICAgICAgIGtleT17aHltbi5faWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxIeW1ucztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJIeW1uIiwiRWRpdE1vZGFsIiwiUGluTW9kYWwiLCJRdWlja0FkZE1vZGFsIiwiQWxlcnREaWFsb2ciLCJtdXRhdGUiLCJmZXRjaGVyIiwibW9tZW50IiwiQWxsSHltbnMiLCJmaWx0ZXIiLCJoeW1uRGF0YSIsInNldEh5bW5zIiwic29ydGVkUmV2ZXJzZWQiLCJkYXRhIiwic2V0RGF0YSIsIl9pZCIsIm5hbWUiLCJsb2dzIiwiZWRpdE1vZGFsT3BlbiIsInNldEVkaXRNb2RhbE9wZW4iLCJwaW5Nb2RhbE9wZW4iLCJzZXRQaW5Nb2RhbE9wZW4iLCJxdWlja0FkZE1vZGFsT3BlbiIsInNldFF1aWNrQWRkTW9kYWxPcGVuIiwiYWxlcnRPcGVuIiwic2V0QWxlcnRPcGVuIiwiaXNQYXNzd29yZENvcnJlY3QiLCJzZXRJc1Bhc3N3b3JkQ29ycmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImh5bW5fZGF0YSIsImh5bW5zIiwib3BlbkVkaXRNb2RhbCIsInZhbHVlcyIsIm9wZW5RdWlja0FkZE1vZGFsIiwiZWRpdEh5bW4iLCJ1cGRhdGVkSHltbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdJZCIsIm51bWJlciIsIm5ld05hbWUiLCJxdWlja0FkZEh5bW4iLCJieSIsImxvZ2dlZCIsImRhdGUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmaWx0ZXJlZEh5bW5zIiwic29ydGVkSHltbnMiLCJpIiwic29ydGVkTG9ncyIsInNvcnQiLCJhIiwiYiIsInB1c2giLCJoeW1uIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwiY2xvc2VFZGl0IiwiY2xvc2VRdWlja0FkZCIsImhhbmRsZUNsb3NlQWxlcnQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9