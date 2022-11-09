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
        lineNumber: 123,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
        open: quickAddModalOpen,
        handleClose: () => setQuickAddModalOpen(false),
        quickAddMutation: quickAddHymn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
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
      lineNumber: 201,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__.default, {
      open: pinModalOpen,
      handleClose: () => setPinModalOpen(false),
      isCorrect: values => checkPassword(values)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_4__.default, {
      open: quickAddModalOpen && isPasswordCorrect,
      handleClose: closeQuickAdd,
      quickAddMutation: quickAddHymn
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Hymn_Alert__WEBPACK_IMPORTED_MODULE_5__.default, {
      open: alertOpen,
      handleClose: handleCloseAlert
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
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
        lineNumber: 220,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWIyZjk0YTUzMDZlODU1YzE3ODkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUE2QkEsTUFBTVksUUFBaUMsR0FBRyxDQUFDO0FBQ3pDQyxFQUFBQSxNQUR5QztBQUV6Q0MsRUFBQUEsUUFGeUM7QUFHekNDLEVBQUFBLFFBSHlDO0FBSXpDQyxFQUFBQTtBQUp5QyxDQUFELEtBS1A7QUFBQTs7QUFDakMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCakIsK0NBQVEsQ0FBYTtBQUMzQ2tCLElBQUFBLEdBQUcsRUFBRSxDQURzQztBQUUzQ0MsSUFBQUEsSUFBSSxFQUFFLEVBRnFDO0FBRzNDQyxJQUFBQSxJQUFJLEVBQUU7QUFIcUMsR0FBYixDQUFoQztBQUtBLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DdEIsK0NBQVEsQ0FBVSxLQUFWLENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUN1QixZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ3hCLCtDQUFRLENBQVUsS0FBVixDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDeUIsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNEMxQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBMUQ7QUFDQSxRQUFNO0FBQUEsT0FBQzJCLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCNUIsK0NBQVEsQ0FBVSxLQUFWLENBQTFDO0FBRUEsUUFBTTtBQUFBLE9BQUM2QixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0QzlCLCtDQUFRLENBQVUsS0FBVixDQUExRDtBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZDhCLElBQUFBLEtBQUssQ0FBQyxXQUFELENBQUwsQ0FDR0MsSUFE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RSxpQkFBVyxFQUFFLE1BQU1DLGVBQWUsQ0FBQyxLQUFELENBRnBDO0FBR0UsZUFBUyxFQUFHYyxNQUFELElBQVk4QixhQUFhLENBQUM5QixNQUFEO0FBSHRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFZRSw4REFBQyxtREFBRDtBQUNFLFVBQUksRUFBRWIsaUJBQWlCLElBQUlJLGlCQUQ3QjtBQUVFLGlCQUFXLEVBQUUwQyxhQUZmO0FBR0Usc0JBQWdCLEVBQUVyQjtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBaUJFLDhEQUFDLGdEQUFEO0FBQWEsVUFBSSxFQUFFdkIsU0FBbkI7QUFBOEIsaUJBQVcsRUFBRTZDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBa0JFLDhEQUFDLG1EQUFEO0FBQUssYUFBTyxFQUFDLE1BQWI7QUFBb0Isb0JBQWMsRUFBQyxRQUFuQztBQUE0QyxtQkFBYSxFQUFDLFFBQTFEO0FBQUEsZ0JBQ0doQixhQUFhLENBQUNJLElBQWQsR0FBcUJhLEdBQXJCLENBQTBCVCxJQUFELGlCQUN4Qiw4REFBQywwQ0FBRDtBQUNFLFlBQUksRUFBRUEsSUFBSSxDQUFDN0MsSUFEYjtBQUVFLGNBQU0sRUFBRTZDLElBQUksQ0FBQzlDLEdBRmY7QUFHRSxZQUFJLEVBQUU4QyxJQUFJLENBQUM1QyxJQUhiO0FBSUUsa0JBQVUsRUFBRSxNQUFNaUIsYUFBYSxDQUFDMkIsSUFBRCxDQUpqQztBQUtFLHNCQUFjLEVBQUUsTUFBTXpCLGlCQUFpQixDQUFDeUIsSUFBRDtBQUx6QyxTQU1PQSxJQUFJLENBQUM5QyxHQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCRjtBQUFBLGtCQURGO0FBaUNELENBM0xEOztHQUFNUDs7S0FBQUE7QUE2TE4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSHltbnMvQWxsSHltbnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIHVzZVN0YXRlLFxyXG4gIFJlYWN0RWxlbWVudCxcclxuICB1c2VFZmZlY3QsXHJcbiAgU2V0U3RhdGVBY3Rpb24sXHJcbiAgRGlzcGF0Y2gsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSHltbiBmcm9tIFwiLi9IeW1uXCI7XHJcbmltcG9ydCBFZGl0TW9kYWwgZnJvbSBcIi4vSHltbi9FZGl0XCI7XHJcbmltcG9ydCBQaW5Nb2RhbCBmcm9tIFwiLi9IeW1uL1BpblwiO1xyXG5pbXBvcnQgUXVpY2tBZGRNb2RhbCBmcm9tIFwiLi9IeW1uL1F1aWNrQWRkXCI7XHJcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tIFwiLi9IeW1uL0FsZXJ0XCI7XHJcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uLy4uLy4uL1V0aWxzL2ZldGNoZXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgRWRpdFZhbHVlcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFzc3dvcmRWYWx1ZXMge1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBRdWlja0FkZFZhbHVlcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRhdGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEh5bW5WYWx1ZXMge1xyXG4gIF9pZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsb2dzOiB7IGxvZ2dlZDogc3RyaW5nOyBieTogc3RyaW5nIH1bXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEFsbEh5bW5zUHJvcHMge1xyXG4gIGZpbHRlcjogc3RyaW5nO1xyXG4gIGh5bW5EYXRhOiBIeW1uVmFsdWVzW107XHJcbiAgc2V0SHltbnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEh5bW5WYWx1ZXNbXT4+O1xyXG4gIHNvcnRlZFJldmVyc2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBBbGxIeW1uczogUmVhY3QuRkM8QWxsSHltbnNQcm9wcz4gPSAoe1xyXG4gIGZpbHRlcixcclxuICBoeW1uRGF0YSxcclxuICBzZXRIeW1ucyxcclxuICBzb3J0ZWRSZXZlcnNlZCxcclxufTogQWxsSHltbnNQcm9wcyk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8SHltblZhbHVlcz4oe1xyXG4gICAgX2lkOiAwLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGxvZ3M6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtlZGl0TW9kYWxPcGVuLCBzZXRFZGl0TW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbcGluTW9kYWxPcGVuLCBzZXRQaW5Nb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtxdWlja0FkZE1vZGFsT3Blbiwgc2V0UXVpY2tBZGRNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFthbGVydE9wZW4sIHNldEFsZXJ0T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtpc1Bhc3N3b3JkQ29ycmVjdCwgc2V0SXNQYXNzd29yZENvcnJlY3RdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCIvYXBpL2h5bW5cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChoeW1uX2RhdGEpID0+IHNldEh5bW5zKGh5bW5fZGF0YS5oeW1ucykpO1xyXG4gIH0sIFtzZXRIeW1uc10pO1xyXG5cclxuICBjb25zdCBvcGVuRWRpdE1vZGFsID0gKHZhbHVlczogSHltblZhbHVlcykgPT4ge1xyXG4gICAgc2V0RWRpdE1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldFBpbk1vZGFsT3Blbih0cnVlKTtcclxuICAgIHNldERhdGEodmFsdWVzKTtcclxuICB9O1xyXG4gIGNvbnN0IG9wZW5RdWlja0FkZE1vZGFsID0gKHZhbHVlczogSHltblZhbHVlcykgPT4ge1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXREYXRhKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWRpdEh5bW4gPSAodmFsdWVzOiBFZGl0VmFsdWVzKSA9PiB7XHJcbiAgICBtdXRhdGUoXCIvYXBpL2h5bW5cIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB1cGRhdGVkSHltbnMgPSBhd2FpdCBmZXRjaGVyKFwiL2FwaS9oeW1uXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgX2lkOiBkYXRhLl9pZCxcclxuICAgICAgICAgIG5ld0lkOiB2YWx1ZXMubnVtYmVyLFxyXG4gICAgICAgICAgbmV3TmFtZTogdmFsdWVzLm5hbWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0SHltbnModXBkYXRlZEh5bW5zKTtcclxuICAgIH0pO1xyXG4gICAgc2V0RWRpdE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcXVpY2tBZGRIeW1uID0gKHZhbHVlczogUXVpY2tBZGRWYWx1ZXMpID0+IHtcclxuICAgIG11dGF0ZShcIi9hcGkvaHltblwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRIeW1ucyA9IGF3YWl0IGZldGNoZXIoXCIvYXBpL2h5bW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgX2lkOiBkYXRhLl9pZCxcclxuICAgICAgICAgIGJ5OiB2YWx1ZXMubmFtZSxcclxuICAgICAgICAgIGxvZ2dlZDogdmFsdWVzLmRhdGUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZWRIeW1ucy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIHNldEFsZXJ0T3Blbih0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRIeW1ucyh1cGRhdGVkSHltbnMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNldFF1aWNrQWRkTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaHltbkRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8RWRpdE1vZGFsXHJcbiAgICAgICAgICBvcGVuPXtlZGl0TW9kYWxPcGVufVxyXG4gICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIGVkaXRNdXRhdGlvbj17ZWRpdEh5bW59XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UXVpY2tBZGRNb2RhbFxyXG4gICAgICAgICAgb3Blbj17cXVpY2tBZGRNb2RhbE9wZW59XHJcbiAgICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgcXVpY2tBZGRNdXRhdGlvbj17cXVpY2tBZGRIeW1ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGxldCBmaWx0ZXJlZEh5bW5zID0gaHltbkRhdGE7XHJcblxyXG4gIGlmIChmaWx0ZXIgPT09IFwiXCIpIHtcclxuICAgIGxldCBzb3J0ZWRIeW1ucyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoeW1uRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBzb3J0ZWRMb2dzID0gaHltbkRhdGFbaV0ubG9ncy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZ2dlZCkgPCBtb21lbnQoYi5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nZ2VkKSA+IG1vbWVudChiLmxvZ2dlZCkpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb3J0ZWRIeW1ucy5wdXNoKHtcclxuICAgICAgICBfaWQ6IGh5bW5EYXRhW2ldLl9pZCxcclxuICAgICAgICBuYW1lOiBoeW1uRGF0YVtpXS5uYW1lLFxyXG4gICAgICAgIGxvZ3M6IHNvcnRlZExvZ3MsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3J0ZWRSZXZlcnNlZCkge1xyXG4gICAgICBzb3J0ZWRIeW1ucy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmxvZ3NbMF0ubG9nZ2VkKSA8IG1vbWVudChiLmxvZ3NbMF0ubG9nZ2VkKSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5sb2dzWzBdLmxvZ2dlZCkgPiBtb21lbnQoYi5sb2dzWzBdLmxvZ2dlZCkpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNvcnRlZEh5bW5zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nc1swXS5sb2dnZWQpIDwgbW9tZW50KGIubG9nc1swXS5sb2dnZWQpKSByZXR1cm4gMTtcclxuICAgICAgICBpZiAobW9tZW50KGEubG9nc1swXS5sb2dnZWQpID4gbW9tZW50KGIubG9nc1swXS5sb2dnZWQpKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcmVkSHltbnMgPSBzb3J0ZWRIeW1ucztcclxuICB9IGVsc2Uge1xyXG4gICAgZmlsdGVyZWRIeW1ucyA9IGh5bW5EYXRhLmZpbHRlcihcclxuICAgICAgKGh5bW4pID0+XHJcbiAgICAgICAgaHltbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgaHltbi5faWQudG9TdHJpbmcoKS5pbmNsdWRlcyhmaWx0ZXIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tQYXNzd29yZCA9ICh2YWx1ZXM6IFBhc3N3b3JkVmFsdWVzKSA9PiB7XHJcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdCh2YWx1ZXMucGFzc3dvcmQgPT09IFwicmFoYWJcIiA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlRWRpdCA9ICgpID0+IHtcclxuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRFZGl0TW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsb3NlUXVpY2tBZGQgPSAoKSA9PiB7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQWxlcnQgPSAoKSA9PiB7XHJcbiAgICBzZXRBbGVydE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RWRpdE1vZGFsXHJcbiAgICAgICAgb3Blbj17ZWRpdE1vZGFsT3BlbiAmJiBpc1Bhc3N3b3JkQ29ycmVjdH1cclxuICAgICAgICBoYW5kbGVDbG9zZT17Y2xvc2VFZGl0fVxyXG4gICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cclxuICAgICAgLz5cclxuICAgICAgPFBpbk1vZGFsXHJcbiAgICAgICAgb3Blbj17cGluTW9kYWxPcGVufVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGlzQ29ycmVjdD17KHZhbHVlcykgPT4gY2hlY2tQYXNzd29yZCh2YWx1ZXMpfVxyXG4gICAgICAvPlxyXG4gICAgICA8UXVpY2tBZGRNb2RhbFxyXG4gICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVuICYmIGlzUGFzc3dvcmRDb3JyZWN0fVxyXG4gICAgICAgIGhhbmRsZUNsb3NlPXtjbG9zZVF1aWNrQWRkfVxyXG4gICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cclxuICAgICAgLz5cclxuICAgICAgPEFsZXJ0RGlhbG9nIG9wZW49e2FsZXJ0T3Blbn0gaGFuZGxlQ2xvc2U9e2hhbmRsZUNsb3NlQWxlcnR9IC8+XHJcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICB7ZmlsdGVyZWRIeW1ucy5zb3J0KCkubWFwKChoeW1uKSA9PiAoXHJcbiAgICAgICAgICA8SHltblxyXG4gICAgICAgICAgICBuYW1lPXtoeW1uLm5hbWV9XHJcbiAgICAgICAgICAgIG51bWJlcj17aHltbi5faWR9XHJcbiAgICAgICAgICAgIGxvZ3M9e2h5bW4ubG9nc31cclxuICAgICAgICAgICAgaGFuZGxlRWRpdD17KCkgPT4gb3BlbkVkaXRNb2RhbChoeW1uKX1cclxuICAgICAgICAgICAgaGFuZGxlUXVpY2tBZGQ9eygpID0+IG9wZW5RdWlja0FkZE1vZGFsKGh5bW4pfVxyXG4gICAgICAgICAgICBrZXk9e2h5bW4uX2lkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsSHltbnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiSHltbiIsIkVkaXRNb2RhbCIsIlBpbk1vZGFsIiwiUXVpY2tBZGRNb2RhbCIsIkFsZXJ0RGlhbG9nIiwibXV0YXRlIiwiZmV0Y2hlciIsIm1vbWVudCIsIkFsbEh5bW5zIiwiZmlsdGVyIiwiaHltbkRhdGEiLCJzZXRIeW1ucyIsInNvcnRlZFJldmVyc2VkIiwiZGF0YSIsInNldERhdGEiLCJfaWQiLCJuYW1lIiwibG9ncyIsImVkaXRNb2RhbE9wZW4iLCJzZXRFZGl0TW9kYWxPcGVuIiwicGluTW9kYWxPcGVuIiwic2V0UGluTW9kYWxPcGVuIiwicXVpY2tBZGRNb2RhbE9wZW4iLCJzZXRRdWlja0FkZE1vZGFsT3BlbiIsImFsZXJ0T3BlbiIsInNldEFsZXJ0T3BlbiIsImlzUGFzc3dvcmRDb3JyZWN0Iiwic2V0SXNQYXNzd29yZENvcnJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJoeW1uX2RhdGEiLCJoeW1ucyIsIm9wZW5FZGl0TW9kYWwiLCJ2YWx1ZXMiLCJvcGVuUXVpY2tBZGRNb2RhbCIsImVkaXRIeW1uIiwidXBkYXRlZEh5bW5zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3SWQiLCJudW1iZXIiLCJuZXdOYW1lIiwicXVpY2tBZGRIeW1uIiwiYnkiLCJsb2dnZWQiLCJkYXRlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZmlsdGVyZWRIeW1ucyIsInNvcnRlZEh5bW5zIiwiaSIsInNvcnRlZExvZ3MiLCJzb3J0IiwiYSIsImIiLCJwdXNoIiwiaHltbiIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0b1N0cmluZyIsImNoZWNrUGFzc3dvcmQiLCJwYXNzd29yZCIsImNsb3NlRWRpdCIsImNsb3NlUXVpY2tBZGQiLCJoYW5kbGVDbG9zZUFsZXJ0IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==