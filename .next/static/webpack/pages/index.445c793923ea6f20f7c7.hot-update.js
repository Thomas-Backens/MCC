"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
  dialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      outline: "none"
    }
  },
  dialogBackground: {
    backgroundColor: theme.palette.background.default,
    // position: "absolute",
    top: "50%",
    left: "50%",
    outline: "none",
    maxHeight: "100%",
    overflowY: "auto",
    maxWidth: "100%"
  },
  title: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 700
  },
  content: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 400
  },
  okButton: {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDQ1Yzc5MzkyM2VhNmYyMGY3YzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1DLFNBQVMsR0FBR0QsNkRBQVUsQ0FBRUUsS0FBRCxLQUFtQjtBQUM5Q0MsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLE1BQU0sRUFBRTtBQURKLEdBRHdDO0FBSTlDQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsT0FBTyxFQUFFLE1BREg7QUFFTkMsSUFBQUEsVUFBVSxFQUFFLFFBRk47QUFHTkMsSUFBQUEsY0FBYyxFQUFFLFFBSFY7QUFJTixlQUFXO0FBQ1RDLE1BQUFBLE9BQU8sRUFBRTtBQURBO0FBSkwsR0FKc0M7QUFZOUNDLEVBQUFBLGdCQUFnQixFQUFFO0FBQ2hCQyxJQUFBQSxlQUFlLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjQyxVQUFkLENBQXlCQyxPQUQxQjtBQUVoQjtBQUNBQyxJQUFBQSxHQUFHLEVBQUUsS0FIVztBQUloQkMsSUFBQUEsSUFBSSxFQUFFLEtBSlU7QUFLaEJQLElBQUFBLE9BQU8sRUFBRSxNQUxPO0FBTWhCUSxJQUFBQSxTQUFTLEVBQUUsTUFOSztBQU9oQkMsSUFBQUEsU0FBUyxFQUFFLE1BUEs7QUFRaEJDLElBQUFBLFFBQVEsRUFBRTtBQVJNLEdBWjRCO0FBc0I5Q0MsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLEtBQUssRUFBRW5CLEtBQUssQ0FBQ1UsT0FBTixDQUFjVSxPQUFkLENBQXNCQyxLQUR4QjtBQUVMQyxJQUFBQSxRQUFRLEVBQUV0QixLQUFLLENBQUN1QixVQUFOLENBQWlCQyxFQUFqQixDQUFvQkYsUUFGekI7QUFHTEcsSUFBQUEsVUFBVSxFQUFFO0FBSFAsR0F0QnVDO0FBMkI5Q0MsRUFBQUEsT0FBTyxFQUFFO0FBQ1BQLElBQUFBLEtBQUssRUFBRW5CLEtBQUssQ0FBQ1UsT0FBTixDQUFjVSxPQUFkLENBQXNCQyxLQUR0QjtBQUVQQyxJQUFBQSxRQUFRLEVBQUV0QixLQUFLLENBQUN1QixVQUFOLENBQWlCSSxLQUFqQixDQUF1QkwsUUFGMUI7QUFHUEcsSUFBQUEsVUFBVSxFQUFFO0FBSEwsR0EzQnFDO0FBZ0M5Q0csRUFBQUEsUUFBUSxFQUFFO0FBQ1JuQixJQUFBQSxlQUFlLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjbUIsT0FBZCxDQUFzQkMsSUFEL0I7QUFFUlgsSUFBQUEsS0FBSyxFQUFFbkIsS0FBSyxDQUFDVSxPQUFOLENBQWNVLE9BQWQsQ0FBc0JDLEtBRnJCO0FBR1JVLElBQUFBLEtBQUssRUFBRSxHQUhDO0FBSVI3QixJQUFBQSxNQUFNLEVBQUUsRUFKQTtBQUtSOEIsSUFBQUEsWUFBWSxFQUFFLENBTE47QUFNUlYsSUFBQUEsUUFBUSxFQUFFdEIsS0FBSyxDQUFDdUIsVUFBTixDQUFpQlUsRUFBakIsQ0FBb0JYLFFBTnRCO0FBT1JHLElBQUFBLFVBQVUsRUFBRSxHQVBKO0FBUVJTLElBQUFBLFVBQVUsRUFBRWxDLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLENBUko7QUFTUixlQUFXO0FBQ1QxQixNQUFBQSxlQUFlLEVBQUU7QUFEUjtBQVRIO0FBaENvQyxDQUFuQixDQUFELENBQTVCO0FBK0NBLCtEQUFlVixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0h5bW5zL0FsbEh5bW5zL0h5bW4vQWxlcnQvc3R5bGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGRpYWxvZzoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBcIiYgPiBkaXZcIjoge1xyXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkaWFsb2dCYWNrZ3JvdW5kOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxyXG4gICAgLy8gcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcDogXCI1MCVcIixcclxuICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2Uud2hpdGUsXHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5oNC5mb250U2l6ZSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2Uud2hpdGUsXHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5ib2R5MS5mb250U2l6ZSxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICB9LFxyXG4gIG9rQnV0dG9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcclxuICAgIHdpZHRoOiAxMDAsXHJcbiAgICBoZWlnaHQ6IDQwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuaDYuZm9udFNpemUsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTgsIDIwOCwgMTE4LCAwLjgpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcclxuIl0sIm5hbWVzIjpbIm1ha2VTdHlsZXMiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJoZWlnaHQiLCJkaWFsb2ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib3V0bGluZSIsImRpYWxvZ0JhY2tncm91bmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJ0b3AiLCJsZWZ0IiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwibWF4V2lkdGgiLCJ0aXRsZSIsImNvbG9yIiwic3VyZmFjZSIsIndoaXRlIiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiaDQiLCJmb250V2VpZ2h0IiwiY29udGVudCIsImJvZHkxIiwib2tCdXR0b24iLCJwcmltYXJ5IiwibWFpbiIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiaDYiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyJdLCJzb3VyY2VSb290IjoiIn0=