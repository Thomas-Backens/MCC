"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hymns/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Hymns/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIos */ "./node_modules/@material-ui/icons/ArrowForwardIos.js");
/* harmony import */ var _Search_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search/SearchBar */ "./src/components/Hymns/Search/SearchBar/index.tsx");
/* harmony import */ var _Search_AddHymn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search/AddHymn */ "./src/components/Hymns/Search/AddHymn/index.tsx");
/* harmony import */ var _AllHymns_Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllHymns/Hymn/Pin */ "./src/components/Hymns/AllHymns/Hymn/Pin/index.tsx");
/* harmony import */ var _AllHymns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AllHymns */ "./src/components/Hymns/AllHymns/index.tsx");
/* harmony import */ var _AllHymns_hymnsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllHymns/hymnsList */ "./src/components/Hymns/AllHymns/hymnsList.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/components/Hymns/styles.ts");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _Utils_fetcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Utils/fetcher */ "./src/Utils/fetcher.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Dan\\Desktop\\React Projects\\mcc\\src\\components\\Hymns\\index.tsx",
    _s = $RefreshSig$();















const Hymns = () => {
  _s();

  const s = (0,_styles__WEBPACK_IMPORTED_MODULE_6__.default)();
  const {
    0: allHymns,
    1: setAllHymns
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_AllHymns_hymnsList__WEBPACK_IMPORTED_MODULE_5__.hymnsList);
  const {
    0: searchBarValue,
    1: setSearchBarValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: addModalOpen,
    1: setAddModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: pinModalOpen,
    1: setPinModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isPasswordCorrect,
    1: setIsPasswordCorrect
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isSortedReversed,
    1: setIsSortedReversed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const checkPassword = values => {
    setIsPasswordCorrect(values.password === "rahab" ? true : false);
    setPinModalOpen(false);
  };

  const openAddModal = () => {
    setAddModalOpen(true);
    setPinModalOpen(true);
  };

  const closeAddModal = () => {
    setPinModalOpen(false);
    setAddModalOpen(false);
    setIsPasswordCorrect(false);
  };

  const addHymn = values => {
    (0,swr__WEBPACK_IMPORTED_MODULE_7__.mutate)("/api/hymn", async () => {
      const addedHymn = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)("/api/hymn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: values.hymn_name,
          number: values.hymn_number,
          log: values.log
        })
      });
      console.log(`Inside the mutation, values.log: ${values.log}, addedHymn.log: ${addedHymn.log}`);
      const newHymn = {
        _id: addedHymn.number,
        name: addedHymn.name,
        logs: addedHymn.log
      };
      setAllHymns([...allHymns, newHymn]);
      window.location.reload();
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_AllHymns_Hymn_Pin__WEBPACK_IMPORTED_MODULE_3__.default, {
      open: pinModalOpen,
      handleClose: () => setPinModalOpen(false),
      isCorrect: values => checkPassword(values)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      className: s.root,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {
        display: "flex",
        alignItems: "center",
        className: s.search,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Search_SearchBar__WEBPACK_IMPORTED_MODULE_1__.default, {
          value: searchBarValue,
          handleChange: value => setSearchBarValue(value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Search_AddHymn__WEBPACK_IMPORTED_MODULE_2__.default, {
          open: addModalOpen && isPasswordCorrect,
          handleClose: closeAddModal,
          handleOpen: openAddModal,
          createMutation: addHymn
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {
        className: s.hymns,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {
          display: "flex",
          alignItems: "center",
          className: s.sort,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {
            onClick: () => setIsSortedReversed(!isSortedReversed),
            className: s.sortBtn,
            children: ["Sort by Date", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_11__.default, {
              className: `${s.arrow} ${isSortedReversed ? s.rotated : s.notRotated}`,
              fontSize: "small"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_AllHymns__WEBPACK_IMPORTED_MODULE_4__.default, {
          filter: searchBarValue,
          hymnData: allHymns,
          setHymns: setAllHymns,
          sortedReversed: isSortedReversed
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(Hymns, "5zj4SBxbkyKFCXWcXwTaqe9YS9E=", false, function () {
  return [_styles__WEBPACK_IMPORTED_MODULE_6__.default];
});

_c = Hymns;
/* harmony default export */ __webpack_exports__["default"] = (Hymns);

var _c;

$RefreshReg$(_c, "Hymns");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTAwMjYzM2Y3NTQ2ZjUyMGJkNGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQWtCQSxNQUFNYSxLQUFLLEdBQUcsTUFBb0I7QUFBQTs7QUFDaEMsUUFBTUMsQ0FBQyxHQUFHSixnREFBUyxFQUFuQjtBQUVBLFFBQU07QUFBQSxPQUFDSyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQmYsK0NBQVEsQ0FBZVEsMERBQWYsQ0FBeEM7QUFFQSxRQUFNO0FBQUEsT0FBQ1EsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ2pCLCtDQUFRLENBQVMsRUFBVCxDQUFwRDtBQUVBLFFBQU07QUFBQSxPQUFDa0IsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NuQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ29CLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDckIsK0NBQVEsQ0FBVSxLQUFWLENBQWhEO0FBRUEsUUFBTTtBQUFBLE9BQUNzQixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q3ZCLCtDQUFRLENBQVUsS0FBVixDQUExRDtBQUVBLFFBQU07QUFBQSxPQUFDd0IsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBMEN6QiwrQ0FBUSxDQUFVLEtBQVYsQ0FBeEQ7O0FBRUEsUUFBTTBCLGFBQWEsR0FBSUMsTUFBRCxJQUE0QjtBQUNoREosSUFBQUEsb0JBQW9CLENBQUNJLE1BQU0sQ0FBQ0MsUUFBUCxLQUFvQixPQUFwQixHQUE4QixJQUE5QixHQUFxQyxLQUF0QyxDQUFwQjtBQUNBUCxJQUFBQSxlQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0QsR0FIRDs7QUFLQSxRQUFNUSxZQUFZLEdBQUcsTUFBTTtBQUN6QlYsSUFBQUEsZUFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBRSxJQUFBQSxlQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0QsR0FIRDs7QUFLQSxRQUFNUyxhQUFhLEdBQUcsTUFBTTtBQUMxQlQsSUFBQUEsZUFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBRixJQUFBQSxlQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0FJLElBQUFBLG9CQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDRCxHQUpEOztBQU1BLFFBQU1RLE9BQU8sR0FBSUosTUFBRCxJQUFvQjtBQUNsQ2pCLElBQUFBLDJDQUFNLENBQUMsV0FBRCxFQUFjLFlBQVk7QUFDOUIsWUFBTXNCLFNBQVMsR0FBRyxNQUFNckIsdURBQU8sQ0FBQyxXQUFELEVBQWM7QUFDM0NzQixRQUFBQSxNQUFNLEVBQUUsTUFEbUM7QUFFM0NDLFFBQUFBLE9BQU8sRUFBRTtBQUFFLDBCQUFnQjtBQUFsQixTQUZrQztBQUczQ0MsUUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkMsVUFBQUEsSUFBSSxFQUFFWCxNQUFNLENBQUNZLFNBRE07QUFFbkJDLFVBQUFBLE1BQU0sRUFBRWIsTUFBTSxDQUFDYyxXQUZJO0FBR25CQyxVQUFBQSxHQUFHLEVBQUVmLE1BQU0sQ0FBQ2U7QUFITyxTQUFmO0FBSHFDLE9BQWQsQ0FBL0I7QUFVQUMsTUFBQUEsT0FBTyxDQUFDRCxHQUFSLENBQ0csb0NBQW1DZixNQUFNLENBQUNlLEdBQUksb0JBQW1CVixTQUFTLENBQUNVLEdBQUksRUFEbEY7QUFJQSxZQUFNRSxPQUFPLEdBQUc7QUFDZEMsUUFBQUEsR0FBRyxFQUFFYixTQUFTLENBQUNRLE1BREQ7QUFFZEYsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNNLElBRkY7QUFHZFEsUUFBQUEsSUFBSSxFQUFFZCxTQUFTLENBQUNVO0FBSEYsT0FBaEI7QUFLQTNCLE1BQUFBLFdBQVcsQ0FBQyxDQUFDLEdBQUdELFFBQUosRUFBYzhCLE9BQWQsQ0FBRCxDQUFYO0FBRUFHLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDRCxLQXZCSyxDQUFOO0FBd0JELEdBekJEOztBQTJCQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLHVEQUFEO0FBQ0UsVUFBSSxFQUFFN0IsWUFEUjtBQUVFLGlCQUFXLEVBQUUsTUFBTUMsZUFBZSxDQUFDLEtBQUQsQ0FGcEM7QUFHRSxlQUFTLEVBQUdNLE1BQUQsSUFBWUQsYUFBYSxDQUFDQyxNQUFEO0FBSHRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRSw4REFBQyxtREFBRDtBQUNFLGFBQU8sRUFBQyxNQURWO0FBRUUsZ0JBQVUsRUFBQyxRQUZiO0FBR0UsbUJBQWEsRUFBQyxRQUhoQjtBQUlFLGVBQVMsRUFBRWQsQ0FBQyxDQUFDcUMsSUFKZjtBQUFBLDhCQU1FLDhEQUFDLG1EQUFEO0FBQUssZUFBTyxFQUFDLE1BQWI7QUFBb0Isa0JBQVUsRUFBQyxRQUEvQjtBQUF3QyxpQkFBUyxFQUFFckMsQ0FBQyxDQUFDc0MsTUFBckQ7QUFBQSxnQ0FDRSw4REFBQyxzREFBRDtBQUNFLGVBQUssRUFBRW5DLGNBRFQ7QUFFRSxzQkFBWSxFQUFHb0MsS0FBRCxJQUFXbkMsaUJBQWlCLENBQUNtQyxLQUFEO0FBRjVDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRSw4REFBQyxvREFBRDtBQUNFLGNBQUksRUFBRWxDLFlBQVksSUFBSUksaUJBRHhCO0FBRUUscUJBQVcsRUFBRVEsYUFGZjtBQUdFLG9CQUFVLEVBQUVELFlBSGQ7QUFJRSx3QkFBYyxFQUFFRTtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQWtCRSw4REFBQyxtREFBRDtBQUFLLGlCQUFTLEVBQUVsQixDQUFDLENBQUN3QyxLQUFsQjtBQUFBLGdDQUNFLDhEQUFDLG1EQUFEO0FBQUssaUJBQU8sRUFBQyxNQUFiO0FBQW9CLG9CQUFVLEVBQUMsUUFBL0I7QUFBd0MsbUJBQVMsRUFBRXhDLENBQUMsQ0FBQ3lDLElBQXJEO0FBQUEsaUNBQ0UsOERBQUMsc0RBQUQ7QUFDRSxtQkFBTyxFQUFFLE1BQU03QixtQkFBbUIsQ0FBQyxDQUFDRCxnQkFBRixDQURwQztBQUVFLHFCQUFTLEVBQUVYLENBQUMsQ0FBQzBDLE9BRmY7QUFBQSxvREFLRSw4REFBQyx3RUFBRDtBQUNFLHVCQUFTLEVBQUcsR0FBRTFDLENBQUMsQ0FBQzJDLEtBQU0sSUFDcEJoQyxnQkFBZ0IsR0FBR1gsQ0FBQyxDQUFDNEMsT0FBTCxHQUFlNUMsQ0FBQyxDQUFDNkMsVUFDbEMsRUFISDtBQUlFLHNCQUFRLEVBQUM7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUEyQkUsOERBQUMsOENBQUQ7QUFDRSxnQkFBTSxFQUFFMUMsY0FEVjtBQUVFLGtCQUFRLEVBQUVGLFFBRlo7QUFHRSxrQkFBUSxFQUFFQyxXQUhaO0FBSUUsd0JBQWMsRUFBRVM7QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQSxrQkFERjtBQThERCxDQXZIRDs7R0FBTVo7VUFDTUg7OztLQURORztBQXlITiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IeW1ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBJY29uQnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEFycm93Rm9yd2FyZElvc0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRJb3NcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9TZWFyY2gvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBBZGRIeW1uIGZyb20gXCIuL1NlYXJjaC9BZGRIeW1uXCI7XHJcbmltcG9ydCBQaW5Nb2RhbCBmcm9tIFwiLi9BbGxIeW1ucy9IeW1uL1BpblwiO1xyXG5pbXBvcnQgQWxsSHltbnMgZnJvbSBcIi4vQWxsSHltbnNcIjtcclxuaW1wb3J0IHsgaHltbnNMaXN0LCBsb2dzTGlzdCB9IGZyb20gXCIuL0FsbEh5bW5zL2h5bW5zTGlzdFwiO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi8uLi9VdGlscy9mZXRjaGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgVmFsdWVzIHtcclxuICBoeW1uX25hbWU6IHN0cmluZztcclxuICBoeW1uX251bWJlcjogbnVtYmVyO1xyXG4gIGxvZzogeyBsb2dnZWQ6IHN0cmluZzsgYnk6IHN0cmluZyB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFzc3dvcmRWYWx1ZXMge1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBIeW1uVmFsdWVzIHtcclxuICBfaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbG9nczogeyBsb2dnZWQ6IHN0cmluZzsgYnk6IHN0cmluZyB9W107XHJcbn1cclxuXHJcbmNvbnN0IEh5bW5zID0gKCk6IFJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBbYWxsSHltbnMsIHNldEFsbEh5bW5zXSA9IHVzZVN0YXRlPEh5bW5WYWx1ZXNbXT4oaHltbnNMaXN0KTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaEJhclZhbHVlLCBzZXRTZWFyY2hCYXJWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICBjb25zdCBbYWRkTW9kYWxPcGVuLCBzZXRBZGRNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtwaW5Nb2RhbE9wZW4sIHNldFBpbk1vZGFsT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtpc1Bhc3N3b3JkQ29ycmVjdCwgc2V0SXNQYXNzd29yZENvcnJlY3RdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBbaXNTb3J0ZWRSZXZlcnNlZCwgc2V0SXNTb3J0ZWRSZXZlcnNlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSAodmFsdWVzOiBQYXNzd29yZFZhbHVlcykgPT4ge1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QodmFsdWVzLnBhc3N3b3JkID09PSBcInJhaGFiXCIgPyB0cnVlIDogZmFsc2UpO1xyXG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuQWRkTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRBZGRNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRQaW5Nb2RhbE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VBZGRNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFBpbk1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICBzZXRBZGRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZEh5bW4gPSAodmFsdWVzOiBWYWx1ZXMpID0+IHtcclxuICAgIG11dGF0ZShcIi9hcGkvaHltblwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFkZGVkSHltbiA9IGF3YWl0IGZldGNoZXIoXCIvYXBpL2h5bW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG5hbWU6IHZhbHVlcy5oeW1uX25hbWUsXHJcbiAgICAgICAgICBudW1iZXI6IHZhbHVlcy5oeW1uX251bWJlcixcclxuICAgICAgICAgIGxvZzogdmFsdWVzLmxvZyxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgSW5zaWRlIHRoZSBtdXRhdGlvbiwgdmFsdWVzLmxvZzogJHt2YWx1ZXMubG9nfSwgYWRkZWRIeW1uLmxvZzogJHthZGRlZEh5bW4ubG9nfWBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0h5bW4gPSB7XHJcbiAgICAgICAgX2lkOiBhZGRlZEh5bW4ubnVtYmVyLFxyXG4gICAgICAgIG5hbWU6IGFkZGVkSHltbi5uYW1lLFxyXG4gICAgICAgIGxvZ3M6IGFkZGVkSHltbi5sb2csXHJcbiAgICAgIH07XHJcbiAgICAgIHNldEFsbEh5bW5zKFsuLi5hbGxIeW1ucywgbmV3SHltbl0pO1xyXG5cclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQaW5Nb2RhbFxyXG4gICAgICAgIG9wZW49e3Bpbk1vZGFsT3Blbn1cclxuICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UGluTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICBpc0NvcnJlY3Q9eyh2YWx1ZXMpID0+IGNoZWNrUGFzc3dvcmQodmFsdWVzKX1cclxuICAgICAgLz5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICBjbGFzc05hbWU9e3Mucm9vdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtzLnNlYXJjaH0+XHJcbiAgICAgICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hCYXJWYWx1ZX1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXsodmFsdWUpID0+IHNldFNlYXJjaEJhclZhbHVlKHZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QWRkSHltblxyXG4gICAgICAgICAgICBvcGVuPXthZGRNb2RhbE9wZW4gJiYgaXNQYXNzd29yZENvcnJlY3R9XHJcbiAgICAgICAgICAgIGhhbmRsZUNsb3NlPXtjbG9zZUFkZE1vZGFsfVxyXG4gICAgICAgICAgICBoYW5kbGVPcGVuPXtvcGVuQWRkTW9kYWx9XHJcbiAgICAgICAgICAgIGNyZWF0ZU11dGF0aW9uPXthZGRIeW1ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17cy5oeW1uc30+XHJcbiAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGNsYXNzTmFtZT17cy5zb3J0fT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzU29ydGVkUmV2ZXJzZWQoIWlzU29ydGVkUmV2ZXJzZWQpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5zb3J0QnRufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU29ydCBieSBEYXRlXHJcbiAgICAgICAgICAgICAgPEFycm93Rm9yd2FyZElvc0ljb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cy5hcnJvd30gJHtcclxuICAgICAgICAgICAgICAgICAgaXNTb3J0ZWRSZXZlcnNlZCA/IHMucm90YXRlZCA6IHMubm90Um90YXRlZFxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgey8qIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17cy5zb3J0VGV4dH0+U29ydCBieSBMb2dnZWQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmxvZ3NCdXR0b259XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNTb3J0ZWRSZXZlcnNlZCghaXNTb3J0ZWRSZXZlcnNlZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zSWNvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzLmFycm93fSAke1xyXG4gICAgICAgICAgICAgICAgICBpc1NvcnRlZFJldmVyc2VkID8gcy5yb3RhdGVkIDogcy5ub3RSb3RhdGVkXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gKi99XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxBbGxIeW1uc1xyXG4gICAgICAgICAgICBmaWx0ZXI9e3NlYXJjaEJhclZhbHVlfVxyXG4gICAgICAgICAgICBoeW1uRGF0YT17YWxsSHltbnN9XHJcbiAgICAgICAgICAgIHNldEh5bW5zPXtzZXRBbGxIeW1uc31cclxuICAgICAgICAgICAgc29ydGVkUmV2ZXJzZWQ9e2lzU29ydGVkUmV2ZXJzZWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIeW1ucztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb3giLCJCdXR0b24iLCJBcnJvd0ZvcndhcmRJb3NJY29uIiwiU2VhcmNoQmFyIiwiQWRkSHltbiIsIlBpbk1vZGFsIiwiQWxsSHltbnMiLCJoeW1uc0xpc3QiLCJ1c2VTdHlsZXMiLCJtdXRhdGUiLCJmZXRjaGVyIiwiSHltbnMiLCJzIiwiYWxsSHltbnMiLCJzZXRBbGxIeW1ucyIsInNlYXJjaEJhclZhbHVlIiwic2V0U2VhcmNoQmFyVmFsdWUiLCJhZGRNb2RhbE9wZW4iLCJzZXRBZGRNb2RhbE9wZW4iLCJwaW5Nb2RhbE9wZW4iLCJzZXRQaW5Nb2RhbE9wZW4iLCJpc1Bhc3N3b3JkQ29ycmVjdCIsInNldElzUGFzc3dvcmRDb3JyZWN0IiwiaXNTb3J0ZWRSZXZlcnNlZCIsInNldElzU29ydGVkUmV2ZXJzZWQiLCJjaGVja1Bhc3N3b3JkIiwidmFsdWVzIiwicGFzc3dvcmQiLCJvcGVuQWRkTW9kYWwiLCJjbG9zZUFkZE1vZGFsIiwiYWRkSHltbiIsImFkZGVkSHltbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJoeW1uX25hbWUiLCJudW1iZXIiLCJoeW1uX251bWJlciIsImxvZyIsImNvbnNvbGUiLCJuZXdIeW1uIiwiX2lkIiwibG9ncyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwicm9vdCIsInNlYXJjaCIsInZhbHVlIiwiaHltbnMiLCJzb3J0Iiwic29ydEJ0biIsImFycm93Iiwicm90YXRlZCIsIm5vdFJvdGF0ZWQiXSwic291cmNlUm9vdCI6IiJ9