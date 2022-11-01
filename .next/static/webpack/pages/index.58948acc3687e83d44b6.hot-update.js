"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hymns/Search/AddHymn/styles.ts":
/*!*******************************************************!*\
  !*** ./src/components/Hymns/Search/AddHymn/styles.ts ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    height: "100%"
  },
  addButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.surface.white,
    width: 130,
    [theme.breakpoints.down("md")]: {
      width: 30,
      marginLeft: theme.spacing(-2)
    },
    height: "100%",
    borderRadius: 0,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "rgba(58, 208, 118, 0.8)"
    }
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      outline: "none"
    }
  },
  modalBackground: {
    backgroundColor: theme.palette.background.default,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    maxHeight: "100%",
    overflowY: "auto",
    maxWidth: "100%"
  },
  field: {
    backgroundColor: theme.palette.surface.black,
    color: theme.palette.surface.white,
    width: 500,
    padding: theme.spacing(1),
    borderRadius: 0,
    border: "none",
    "& > *": {
      color: theme.palette.surface.white
    },
    [theme.breakpoints.down("md")]: {
      width: 300
    }
  },
  smallField: {
    width: 250,
    [theme.breakpoints.down("md")]: {
      width: 200
    }
  },
  title: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 700
  },
  cancelButton: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.surface.white,
    borderRadius: 0,
    border: "1px solid #6A6A6A",
    width: 100,
    height: 40,
    "& > *": {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 400
    },
    "&:hover": {
      backgroundColor: theme.palette.surface.lightGrey
    }
  },
  addHymnButton: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTg5NDhhY2MzNjg3ZTgzZDQ0YjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1DLFNBQVMsR0FBR0QsNkRBQVUsQ0FBRUUsS0FBRCxLQUFtQjtBQUM5Q0MsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLE1BQU0sRUFBRTtBQURKLEdBRHdDO0FBSTlDQyxFQUFBQSxTQUFTLEVBQUU7QUFDVEMsSUFBQUEsZUFBZSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsSUFEOUI7QUFFVEMsSUFBQUEsS0FBSyxFQUFFUixLQUFLLENBQUNLLE9BQU4sQ0FBY0ksT0FBZCxDQUFzQkMsS0FGcEI7QUFHVEMsSUFBQUEsS0FBSyxFQUFFLEdBSEU7QUFJVCxLQUFDWCxLQUFLLENBQUNZLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDOUJGLE1BQUFBLEtBQUssRUFBRSxFQUR1QjtBQUU5QkcsTUFBQUEsVUFBVSxFQUFFZCxLQUFLLENBQUNlLE9BQU4sQ0FBYyxDQUFDLENBQWY7QUFGa0IsS0FKdkI7QUFRVGIsSUFBQUEsTUFBTSxFQUFFLE1BUkM7QUFTVGMsSUFBQUEsWUFBWSxFQUFFLENBVEw7QUFVVEMsSUFBQUEsUUFBUSxFQUFFakIsS0FBSyxDQUFDa0IsVUFBTixDQUFpQkMsRUFBakIsQ0FBb0JGLFFBVnJCO0FBV1RHLElBQUFBLFVBQVUsRUFBRSxHQVhIO0FBWVQsZUFBVztBQUNUaEIsTUFBQUEsZUFBZSxFQUFFO0FBRFI7QUFaRixHQUptQztBQW9COUNpQixFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsT0FBTyxFQUFFLE1BREo7QUFFTEMsSUFBQUEsVUFBVSxFQUFFLFFBRlA7QUFHTEMsSUFBQUEsY0FBYyxFQUFFLFFBSFg7QUFJTCxlQUFXO0FBQ1RDLE1BQUFBLE9BQU8sRUFBRTtBQURBO0FBSk4sR0FwQnVD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RUFKSztBQUtiYyxJQUFBQSxZQUFZLEVBQUUsQ0FMRDtBQU1iQyxJQUFBQSxRQUFRLEVBQUVqQixLQUFLLENBQUNrQixVQUFOLENBQWlCQyxFQUFqQixDQUFvQkYsUUFOakI7QUFPYkcsSUFBQUEsVUFBVSxFQUFFLEdBUEM7QUFRYk4sSUFBQUEsVUFBVSxFQUFFZCxLQUFLLENBQUNlLE9BQU4sQ0FBYyxDQUFkLENBUkM7QUFTYixlQUFXO0FBQ1RYLE1BQUFBLGVBQWUsRUFBRTtBQURSO0FBVEU7QUEvRStCLENBQW5CLENBQUQsQ0FBNUI7QUE4RkEsK0RBQWVMLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSHltbnMvU2VhcmNoL0FkZEh5bW4vc3R5bGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGFkZEJ1dHRvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2Uud2hpdGUsXHJcbiAgICB3aWR0aDogMTMwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKC0yKSxcclxuICAgIH0sXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuaDYuZm9udFNpemUsXHJcbiAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg1OCwgMjA4LCAxMTgsIDAuOClcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb2RhbDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBcIiYgPiBkaXZcIjoge1xyXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb2RhbEJhY2tncm91bmQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgbGVmdDogXCI1MCVcIixcclxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBmaWVsZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2UuYmxhY2ssXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zdXJmYWNlLndoaXRlLFxyXG4gICAgd2lkdGg6IDUwMCxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgXCImID4gKlwiOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2Uud2hpdGUsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgd2lkdGg6IDMwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzbWFsbEZpZWxkOiB7XHJcbiAgICB3aWR0aDogMjUwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcclxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5Lmg0LmZvbnRTaXplLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbiAgY2FuY2VsQnV0dG9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS53aGl0ZSxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGJvcmRlcjogXCIxcHggc29saWQgIzZBNkE2QVwiLFxyXG4gICAgd2lkdGg6IDEwMCxcclxuICAgIGhlaWdodDogNDAsXHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuaDYuZm9udFNpemUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIH0sXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc3VyZmFjZS5saWdodEdyZXksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWRkSHltbkJ1dHRvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnN1cmZhY2Uud2hpdGUsXHJcbiAgICB3aWR0aDogMTAwLFxyXG4gICAgaGVpZ2h0OiA0MCxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5Lmg2LmZvbnRTaXplLFxyXG4gICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDU4LCAyMDgsIDExOCwgMC44KVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZXM7XHJcbiJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiaGVpZ2h0IiwiYWRkQnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiY29sb3IiLCJzdXJmYWNlIiwid2hpdGUiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwiZG93biIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJ0eXBvZ3JhcGh5IiwiaDYiLCJmb250V2VpZ2h0IiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib3V0bGluZSIsIm1vZGFsQmFja2dyb3VuZCIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwibWF4V2lkdGgiLCJmaWVsZCIsImJsYWNrIiwicGFkZGluZyIsImJvcmRlciIsInNtYWxsRmllbGQiLCJ0aXRsZSIsImg0IiwiY2FuY2VsQnV0dG9uIiwibGlnaHRHcmV5IiwiYWRkSHltbkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=