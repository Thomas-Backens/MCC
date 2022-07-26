"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hymns/AllHymns/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/Hymns/AllHymns/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Hymn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hymn */ \"./src/components/Hymns/AllHymns/Hymn/index.tsx\");\n/* harmony import */ var _Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hymn/Edit */ \"./src/components/Hymns/AllHymns/Hymn/Edit/index.tsx\");\n/* harmony import */ var _Hymn_Pin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hymn/Pin */ \"./src/components/Hymns/AllHymns/Hymn/Pin/index.tsx\");\n/* harmony import */ var _Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hymn/QuickAdd */ \"./src/components/Hymns/AllHymns/Hymn/QuickAdd/index.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils/fetcher */ \"./src/Utils/fetcher.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/thomasbackens/Desktop/Work/Personal/mcc/src/components/Hymns/AllHymns/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n // import { hymnsList, logsList } from \"./hymnsList\";\n\n\n\n\n // useSWR\n\n // import AddHymn from \"../Search/AddHymn\";\n\nconst AllHymns = ({\n  filter,\n  hymnData,\n  logData,\n  setHymns,\n  setLogs\n}) => {\n  _s();\n\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    name: \"\",\n    number: 0 // logs: [{ logged: \"\", bywho: \"\" }],\n\n  });\n  const {\n    0: editModalOpen,\n    1: setEditModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: pinModalOpen,\n    1: setPinModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: quickAddModalOpen,\n    1: setQuickAddModalOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: isPasswordCorrect,\n    1: setIsPasswordCorrect\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // const { data: hymns } = useSWR(\"/api/hymn\");\n  // const { data: logs } = useSWR(\"/api/log\");\n  // const [allHymns, setAllHymns] = useState<HymnValues[]>(hymnsList);\n  // const [allLogs, setAllLogs] = useState<LogValues[]>(logsList);\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    fetch(\"/api/hymn\").then(response => response.json()).then(hymn_data => setHymns(hymn_data.hymns));\n    fetch(\"/api/log\").then(response => response.json()).then(log_data => setLogs(log_data.logs));\n  }, [setHymns, setLogs]); // useEffect(() => {\n  //   addHymn(createMutation);\n  // }, [createMutation]);\n  // useEffect(() => {\n  //   setAllHymns([\n  //     ...allHymns.filter((hymn) => hymn.number !== addedHymn.number),\n  //     addedHymn,\n  //   ]);\n  //   const newLog = {\n  //     id: addedHymn.number,\n  //     logged: addedHymn.logged,\n  //     bywho: addedHymn.bywho,\n  //   };\n  //   setAllLogs([...allLogs.filter((log) => log.id !== newLog.id), newLog]);\n  // }, [addedHymn]);\n  // let dataHymns: HymnValues[] = [];\n  // let dataLogs: any[] = [];\n  // if (hymns) {\n  //   dataHymns = hymns.hymns;\n  // }\n  // if (logs) {\n  //   dataLogs = logs.logs;\n  // }\n  // useEffect(() => {\n  //   fetch(\"/api/hymn\")\n  //     .then((response) => response.json())\n  //     .then((data) => console.log(data));\n  // }, []);\n\n  const openEditModal = values => {\n    checkPasswordForEdit();\n    setPinModalOpen(true);\n    setData(values);\n  };\n\n  const openQuickAddModal = values => {\n    setQuickAddModalOpen(true);\n    setData(values);\n  }; // const editHymn = (values: EditValues) => {\n  //   const selectedhymn = hymnsList.filter(\n  //     (hymn) => hymn.number === data.number\n  //   );\n  //   selectedhymn[0].name = values.name;\n  //   selectedhymn[0].number = values.number;\n  // };\n\n\n  const editHymn = values => {\n    (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)(\"/api/hymn\", async () => {\n      const editedHymn = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"/api/hymn\", {\n        method: \"PATCH\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          number: data.number,\n          newNumber: values.number,\n          newName: values.name\n        })\n      });\n      let newLogs = logData.filter(log => log.id === data.number);\n\n      if (values.number === data.number) {\n        editedHymn.number = data.number;\n      } else {\n        newLogs.forEach(newLog => {\n          newLog.id = values.number;\n        });\n      }\n\n      editedHymn.name = values.name;\n      setHymns([...hymnData.filter(hymn => hymn.number !== data.number), editedHymn]); // newLogs.forEach((newLog) => {\n      //   setLogs([...logData.filter((log) => log.id !== data.number), newLog]);\n      // });\n      // console.log(logData.filter((log) => log.id === values.number));\n      // setLogs([...logData.filter((log) => log.id !== data.number), newLogs[0]]);\n\n      setLogs([...logData.filter(log => log.id !== data.number)]);\n    });\n    closeModal();\n  };\n\n  const quickAddHymn = values => {\n    (0,swr__WEBPACK_IMPORTED_MODULE_6__.mutate)(\"/api/log\", async () => {\n      const addedLog = await (0,_Utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)(\"/api/log\", {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          id: data.number,\n          bywho: values.name,\n          logged: values.date\n        })\n      });\n      setLogs([...logData, addedLog]);\n    }); // window.location.reload();\n    // const selectedhymn = hymnsList.filter(\n    //   (hymn) => hymn.number === data.number\n    // );\n    // console.log(selectedhymn);\n    // selectedhymn[0].logs.push({ logged: values.date, bywho: values.name });\n  }; // const fakeHymns = hymnsList.filter(\n  //   (hymn) =>\n  //     hymn.name.toLowerCase().includes(filter.toLowerCase()) ||\n  //     hymn.number.toString().includes(filter)\n  // );\n  // console.log(allHymns);\n\n\n  const checkPasswordForEdit = values => {\n    setIsPasswordCorrect(values.password === \"rahab\" ? true : false);\n    setPinModalOpen(false);\n    setEditModalOpen(true);\n  };\n\n  const checkPasswordForQuickAdd = values => {\n    setIsPasswordCorrect(values.password === \"rahab\" ? true : false);\n    setPinModalOpen(false);\n    setQuickAddModalOpen(true);\n  };\n\n  const closeModal = () => {\n    setEditModalOpen(false);\n    setIsPasswordCorrect(false);\n  };\n\n  if (hymnData[0].number === 999 || logData[0].id === 999) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__.default, {\n        open: editModalOpen,\n        handleClose: () => setEditModalOpen(false),\n        data: data,\n        editMutation: editHymn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 233,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__.default, {\n        open: quickAddModalOpen,\n        handleClose: () => setQuickAddModalOpen(false),\n        quickAddMutation: quickAddHymn\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 239,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true);\n  }\n\n  const filteredHymns = hymnData.filter(hymn => hymn.name.toLowerCase().includes(filter.toLowerCase()) || hymn.number.toString().includes(filter));\n\n  const filteredLogs = hymnId => {\n    const flogs = logData.filter(log => log.id === hymnId);\n    return flogs;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Edit__WEBPACK_IMPORTED_MODULE_3__.default, {\n      open: editModalOpen,\n      handleClose: closeModal,\n      data: data,\n      editMutation: editHymn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 274,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_Pin__WEBPACK_IMPORTED_MODULE_4__.default, {\n      open: pinModalOpen,\n      handleClose: () => setPinModalOpen(false),\n      isCorrect: values => checkPasswordForEdit(values)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 280,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn_QuickAdd__WEBPACK_IMPORTED_MODULE_5__.default, {\n      open: quickAddModalOpen,\n      handleClose: () => setQuickAddModalOpen(false),\n      quickAddMutation: quickAddHymn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 285,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Box, {\n      display: \"flex\",\n      justifyContent: \"center\",\n      flexDirection: \"column\",\n      children: filteredHymns.sort().map(hymn => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hymn__WEBPACK_IMPORTED_MODULE_2__.default, {\n        name: hymn.name,\n        number: hymn.number,\n        logs:\n        /*allLogs.filter(\n          (log) => log.id === hymn.number\n        )*/\n        filteredLogs(hymn.number),\n        handleEdit: () => openEditModal(hymn),\n        handleQuickAdd: () => openQuickAddModal(hymn)\n      }, hymn.number, false, {\n        fileName: _jsxFileName,\n        lineNumber: 292,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 290,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true); // return (\n  //   <>\n  //     <EditModal\n  //       open={editModalOpen}\n  //       handleClose={() => setEditModalOpen(false)}\n  //       data={data}\n  //       editMutation={editHymn}\n  //     />\n  //     <QuickAddModal\n  //       open={quickAddModalOpen}\n  //       handleClose={() => setQuickAddModalOpen(false)}\n  //       quickAddMutation={quickAddHymn}\n  //     />\n  //     <Box display=\"flex\" justifyContent=\"center\" flexDirection=\"column\">\n  //       {fakeHymns.sort().map((hymn) => (\n  //         <Hymn\n  //           name={hymn.name}\n  //           number={hymn.number}\n  //           logs={hymn.logs}\n  //           handleEdit={() => openEditModal(hymn)}\n  //           handleQuickAdd={() => openQuickAddModal(hymn)}\n  //           key={hymn.number}\n  //         />\n  //       ))}\n  //     </Box>\n  //   </>\n  // );\n};\n\n_s(AllHymns, \"qTRllnEzCjTVeJ9+Cs6wqtVJwFg=\");\n\n_c = AllHymns;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllHymns);\n\nvar _c;\n\n$RefreshReg$(_c, \"AllHymns\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IeW1ucy9BbGxIeW1ucy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FDOEI7O0NBRTlCOztBQTBDQSxNQUFNVSxRQUFpQyxHQUFHLENBQUM7QUFDekNDLEVBQUFBLE1BRHlDO0FBRXpDQyxFQUFBQSxRQUZ5QztBQUd6Q0MsRUFBQUEsT0FIeUM7QUFJekNDLEVBQUFBLFFBSnlDO0FBS3pDQyxFQUFBQTtBQUx5QyxDQUFELEtBTVA7QUFBQTs7QUFDakMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCaEIsK0NBQVEsQ0FBYTtBQUMzQ2lCLElBQUFBLElBQUksRUFBRSxFQURxQztBQUUzQ0MsSUFBQUEsTUFBTSxFQUFFLENBRm1DLENBRzNDOztBQUgyQyxHQUFiLENBQWhDO0FBS0EsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NwQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3FCLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDdEIsK0NBQVEsQ0FBVSxLQUFWLENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUN1QixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q3hCLCtDQUFRLENBQVUsS0FBVixDQUExRDtBQUVBLFFBQU07QUFBQSxPQUFDeUIsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNEMxQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBMUQsQ0FWaUMsQ0FZakM7QUFDQTtBQUVBO0FBQ0E7O0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkMEIsSUFBQUEsS0FBSyxDQUFDLFdBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1NDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBRHRCLEVBRUdGLElBRkgsQ0FFU0csU0FBRCxJQUFlbEIsUUFBUSxDQUFDa0IsU0FBUyxDQUFDQyxLQUFYLENBRi9CO0FBR0FMLElBQUFBLEtBQUssQ0FBQyxVQUFELENBQUwsQ0FDR0MsSUFESCxDQUNTQyxRQUFELElBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUR0QixFQUVHRixJQUZILENBRVNLLFFBQUQsSUFBY25CLE9BQU8sQ0FBQ21CLFFBQVEsQ0FBQ0MsSUFBVixDQUY3QjtBQUdELEdBUFEsRUFPTixDQUFDckIsUUFBRCxFQUFXQyxPQUFYLENBUE0sQ0FBVCxDQWxCaUMsQ0EyQmpDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQU1xQixhQUFhLEdBQUlDLE1BQUQsSUFBd0I7QUFDNUNDLElBQUFBLG9CQUFvQjtBQUNwQmYsSUFBQUEsZUFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBTixJQUFBQSxPQUFPLENBQUNvQixNQUFELENBQVA7QUFDRCxHQUpEOztBQUtBLFFBQU1FLGlCQUFpQixHQUFJRixNQUFELElBQXdCO0FBQ2hEWixJQUFBQSxvQkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0FSLElBQUFBLE9BQU8sQ0FBQ29CLE1BQUQsQ0FBUDtBQUNELEdBSEQsQ0FsRWlDLENBdUVqQztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsUUFBTUcsUUFBUSxHQUFJSCxNQUFELElBQXdCO0FBQ3ZDN0IsSUFBQUEsMkNBQU0sQ0FBQyxXQUFELEVBQWMsWUFBWTtBQUM5QixZQUFNaUMsVUFBVSxHQUFHLE1BQU1oQyx1REFBTyxDQUFDLFdBQUQsRUFBYztBQUM1Q2lDLFFBQUFBLE1BQU0sRUFBRSxPQURvQztBQUU1Q0MsUUFBQUEsT0FBTyxFQUFFO0FBQUUsMEJBQWdCO0FBQWxCLFNBRm1DO0FBRzVDQyxRQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CM0IsVUFBQUEsTUFBTSxFQUFFSCxJQUFJLENBQUNHLE1BRE07QUFFbkI0QixVQUFBQSxTQUFTLEVBQUVWLE1BQU0sQ0FBQ2xCLE1BRkM7QUFHbkI2QixVQUFBQSxPQUFPLEVBQUVYLE1BQU0sQ0FBQ25CO0FBSEcsU0FBZjtBQUhzQyxPQUFkLENBQWhDO0FBVUEsVUFBSStCLE9BQU8sR0FBR3BDLE9BQU8sQ0FBQ0YsTUFBUixDQUFnQnVDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxFQUFKLEtBQVduQyxJQUFJLENBQUNHLE1BQXhDLENBQWQ7O0FBRUEsVUFBSWtCLE1BQU0sQ0FBQ2xCLE1BQVAsS0FBa0JILElBQUksQ0FBQ0csTUFBM0IsRUFBbUM7QUFDakNzQixRQUFBQSxVQUFVLENBQUN0QixNQUFYLEdBQW9CSCxJQUFJLENBQUNHLE1BQXpCO0FBQ0QsT0FGRCxNQUVPO0FBQ0w4QixRQUFBQSxPQUFPLENBQUNHLE9BQVIsQ0FBaUJDLE1BQUQsSUFBWTtBQUMxQkEsVUFBQUEsTUFBTSxDQUFDRixFQUFQLEdBQVlkLE1BQU0sQ0FBQ2xCLE1BQW5CO0FBQ0QsU0FGRDtBQUdEOztBQUVEc0IsTUFBQUEsVUFBVSxDQUFDdkIsSUFBWCxHQUFrQm1CLE1BQU0sQ0FBQ25CLElBQXpCO0FBQ0FKLE1BQUFBLFFBQVEsQ0FBQyxDQUNQLEdBQUdGLFFBQVEsQ0FBQ0QsTUFBVCxDQUFpQjJDLElBQUQsSUFBVUEsSUFBSSxDQUFDbkMsTUFBTCxLQUFnQkgsSUFBSSxDQUFDRyxNQUEvQyxDQURJLEVBRVBzQixVQUZPLENBQUQsQ0FBUixDQXRCOEIsQ0EwQjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0ExQixNQUFBQSxPQUFPLENBQUMsQ0FBQyxHQUFHRixPQUFPLENBQUNGLE1BQVIsQ0FBZ0J1QyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsRUFBSixLQUFXbkMsSUFBSSxDQUFDRyxNQUF4QyxDQUFKLENBQUQsQ0FBUDtBQUNELEtBaENLLENBQU47QUFpQ0FvQyxJQUFBQSxVQUFVO0FBQ1gsR0FuQ0Q7O0FBcUNBLFFBQU1DLFlBQVksR0FBSW5CLE1BQUQsSUFBNEI7QUFDL0M3QixJQUFBQSwyQ0FBTSxDQUFDLFVBQUQsRUFBYSxZQUFZO0FBQzdCLFlBQU1pRCxRQUFRLEdBQUcsTUFBTWhELHVEQUFPLENBQUMsVUFBRCxFQUFhO0FBQ3pDaUMsUUFBQUEsTUFBTSxFQUFFLE1BRGlDO0FBRXpDQyxRQUFBQSxPQUFPLEVBQUU7QUFBRSwwQkFBZ0I7QUFBbEIsU0FGZ0M7QUFHekNDLFFBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJLLFVBQUFBLEVBQUUsRUFBRW5DLElBQUksQ0FBQ0csTUFEVTtBQUVuQnVDLFVBQUFBLEtBQUssRUFBRXJCLE1BQU0sQ0FBQ25CLElBRks7QUFHbkJ5QyxVQUFBQSxNQUFNLEVBQUV0QixNQUFNLENBQUN1QjtBQUhJLFNBQWY7QUFIbUMsT0FBYixDQUE5QjtBQVVBN0MsTUFBQUEsT0FBTyxDQUFDLENBQUMsR0FBR0YsT0FBSixFQUFhNEMsUUFBYixDQUFELENBQVA7QUFDRCxLQVpLLENBQU4sQ0FEK0MsQ0FjL0M7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0QsR0F2QkQsQ0FySGlDLENBOElqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLFFBQU1uQixvQkFBb0IsR0FBSUQsTUFBRCxJQUE0QjtBQUN2RFYsSUFBQUEsb0JBQW9CLENBQUNVLE1BQU0sQ0FBQ3dCLFFBQVAsS0FBb0IsT0FBcEIsR0FBOEIsSUFBOUIsR0FBcUMsS0FBdEMsQ0FBcEI7QUFDQXRDLElBQUFBLGVBQWUsQ0FBQyxLQUFELENBQWY7QUFDQUYsSUFBQUEsZ0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNELEdBSkQ7O0FBS0EsUUFBTXlDLHdCQUF3QixHQUFJekIsTUFBRCxJQUE0QjtBQUMzRFYsSUFBQUEsb0JBQW9CLENBQUNVLE1BQU0sQ0FBQ3dCLFFBQVAsS0FBb0IsT0FBcEIsR0FBOEIsSUFBOUIsR0FBcUMsS0FBdEMsQ0FBcEI7QUFDQXRDLElBQUFBLGVBQWUsQ0FBQyxLQUFELENBQWY7QUFDQUUsSUFBQUEsb0JBQW9CLENBQUMsSUFBRCxDQUFwQjtBQUNELEdBSkQ7O0FBTUEsUUFBTThCLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCbEMsSUFBQUEsZ0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNBTSxJQUFBQSxvQkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0QsR0FIRDs7QUFLQSxNQUFJZixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlPLE1BQVosS0FBdUIsR0FBdkIsSUFBOEJOLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV3NDLEVBQVgsS0FBa0IsR0FBcEQsRUFBeUQ7QUFDdkQsd0JBQ0U7QUFBQSw4QkFDRSw4REFBQywrQ0FBRDtBQUNFLFlBQUksRUFBRS9CLGFBRFI7QUFFRSxtQkFBVyxFQUFFLE1BQU1DLGdCQUFnQixDQUFDLEtBQUQsQ0FGckM7QUFHRSxZQUFJLEVBQUVMLElBSFI7QUFJRSxvQkFBWSxFQUFFd0I7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FLDhEQUFDLG1EQUFEO0FBQ0UsWUFBSSxFQUFFaEIsaUJBRFI7QUFFRSxtQkFBVyxFQUFFLE1BQU1DLG9CQUFvQixDQUFDLEtBQUQsQ0FGekM7QUFHRSx3QkFBZ0IsRUFBRStCO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQSxvQkFERjtBQTJCRDs7QUFFRCxRQUFNTyxhQUFhLEdBQUduRCxRQUFRLENBQUNELE1BQVQsQ0FDbkIyQyxJQUFELElBQ0VBLElBQUksQ0FBQ3BDLElBQUwsQ0FBVThDLFdBQVYsR0FBd0JDLFFBQXhCLENBQWlDdEQsTUFBTSxDQUFDcUQsV0FBUCxFQUFqQyxLQUNBVixJQUFJLENBQUNuQyxNQUFMLENBQVkrQyxRQUFaLEdBQXVCRCxRQUF2QixDQUFnQ3RELE1BQWhDLENBSGtCLENBQXRCOztBQU1BLFFBQU13RCxZQUFZLEdBQUlDLE1BQUQsSUFBb0I7QUFDdkMsVUFBTUMsS0FBSyxHQUFHeEQsT0FBTyxDQUFDRixNQUFSLENBQWdCdUMsR0FBRCxJQUFTQSxHQUFHLENBQUNDLEVBQUosS0FBV2lCLE1BQW5DLENBQWQ7QUFFQSxXQUFPQyxLQUFQO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLCtDQUFEO0FBQ0UsVUFBSSxFQUFFakQsYUFEUjtBQUVFLGlCQUFXLEVBQUVtQyxVQUZmO0FBR0UsVUFBSSxFQUFFdkMsSUFIUjtBQUlFLGtCQUFZLEVBQUV3QjtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0UsOERBQUMsOENBQUQ7QUFDRSxVQUFJLEVBQUVsQixZQURSO0FBRUUsaUJBQVcsRUFBRSxNQUFNQyxlQUFlLENBQUMsS0FBRCxDQUZwQztBQUdFLGVBQVMsRUFBR2MsTUFBRCxJQUFZQyxvQkFBb0IsQ0FBQ0QsTUFBRDtBQUg3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBWUUsOERBQUMsbURBQUQ7QUFDRSxVQUFJLEVBQUViLGlCQURSO0FBRUUsaUJBQVcsRUFBRSxNQUFNQyxvQkFBb0IsQ0FBQyxLQUFELENBRnpDO0FBR0Usc0JBQWdCLEVBQUUrQjtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBaUJFLDhEQUFDLGtEQUFEO0FBQUssYUFBTyxFQUFDLE1BQWI7QUFBb0Isb0JBQWMsRUFBQyxRQUFuQztBQUE0QyxtQkFBYSxFQUFDLFFBQTFEO0FBQUEsZ0JBQ0dPLGFBQWEsQ0FBQ08sSUFBZCxHQUFxQkMsR0FBckIsQ0FBMEJqQixJQUFELGlCQUN4Qiw4REFBQywwQ0FBRDtBQUNFLFlBQUksRUFBRUEsSUFBSSxDQUFDcEMsSUFEYjtBQUVFLGNBQU0sRUFBRW9DLElBQUksQ0FBQ25DLE1BRmY7QUFHRSxZQUFJO0FBQ0Y7QUFDZDtBQUNBO0FBQWtCZ0QsUUFBQUEsWUFBWSxDQUFDYixJQUFJLENBQUNuQyxNQUFOLENBTnBCO0FBUUUsa0JBQVUsRUFBRSxNQUFNaUIsYUFBYSxDQUFDa0IsSUFBRCxDQVJqQztBQVNFLHNCQUFjLEVBQUUsTUFBTWYsaUJBQWlCLENBQUNlLElBQUQ7QUFUekMsU0FVT0EsSUFBSSxDQUFDbkMsTUFWWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkY7QUFBQSxrQkFERixDQWhOaUMsQ0FxUGpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBdFJEOztHQUFNVDs7S0FBQUE7QUF3Uk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSHltbnMvQWxsSHltbnMvaW5kZXgudHN4PzI1NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICBSZWFjdEVsZW1lbnQsXG4gIHVzZUVmZmVjdCxcbiAgU2V0U3RhdGVBY3Rpb24sXG4gIERpc3BhdGNoLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IEh5bW4gZnJvbSBcIi4vSHltblwiO1xuLy8gaW1wb3J0IHsgaHltbnNMaXN0LCBsb2dzTGlzdCB9IGZyb20gXCIuL2h5bW5zTGlzdFwiO1xuaW1wb3J0IEVkaXRNb2RhbCBmcm9tIFwiLi9IeW1uL0VkaXRcIjtcbmltcG9ydCBQaW5Nb2RhbCBmcm9tIFwiLi9IeW1uL1BpblwiO1xuaW1wb3J0IFF1aWNrQWRkTW9kYWwgZnJvbSBcIi4vSHltbi9RdWlja0FkZFwiO1xuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiOyAvLyB1c2VTV1JcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi8uLi8uLi9VdGlscy9mZXRjaGVyXCI7XG4vLyBpbXBvcnQgQWRkSHltbiBmcm9tIFwiLi4vU2VhcmNoL0FkZEh5bW5cIjtcblxuaW50ZXJmYWNlIEVkaXRWYWx1ZXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUGFzc3dvcmRWYWx1ZXMge1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUXVpY2tBZGRWYWx1ZXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEh5bW5WYWx1ZXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgTG9nVmFsdWVzIHtcbiAgaWQ6IG51bWJlcjtcbiAgbG9nZ2VkOiBzdHJpbmc7XG4gIGJ5d2hvOiBzdHJpbmc7XG59XG5cbi8vIGludGVyZmFjZSBWYWx1ZXMge1xuLy8gICBuYW1lOiBzdHJpbmc7XG4vLyAgIGh5bW5fbmFtZTogc3RyaW5nO1xuLy8gICBoeW1uX251bWJlcjogbnVtYmVyO1xuLy8gICBkYXRlOiBzdHJpbmc7XG4vLyB9XG5cbmludGVyZmFjZSBBbGxIeW1uc1Byb3BzIHtcbiAgZmlsdGVyOiBzdHJpbmc7XG4gIGh5bW5EYXRhOiBIeW1uVmFsdWVzW107XG4gIGxvZ0RhdGE6IExvZ1ZhbHVlc1tdO1xuICBzZXRIeW1uczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248SHltblZhbHVlc1tdPj47XG4gIHNldExvZ3M6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPExvZ1ZhbHVlc1tdPj47XG59XG5cbmNvbnN0IEFsbEh5bW5zOiBSZWFjdC5GQzxBbGxIeW1uc1Byb3BzPiA9ICh7XG4gIGZpbHRlcixcbiAgaHltbkRhdGEsXG4gIGxvZ0RhdGEsXG4gIHNldEh5bW5zLFxuICBzZXRMb2dzLFxufTogQWxsSHltbnNQcm9wcyk6IFJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEh5bW5WYWx1ZXM+KHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgICAvLyBsb2dzOiBbeyBsb2dnZWQ6IFwiXCIsIGJ5d2hvOiBcIlwiIH1dLFxuICB9KTtcbiAgY29uc3QgW2VkaXRNb2RhbE9wZW4sIHNldEVkaXRNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcGluTW9kYWxPcGVuLCBzZXRQaW5Nb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcXVpY2tBZGRNb2RhbE9wZW4sIHNldFF1aWNrQWRkTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBbaXNQYXNzd29yZENvcnJlY3QsIHNldElzUGFzc3dvcmRDb3JyZWN0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAvLyBjb25zdCB7IGRhdGE6IGh5bW5zIH0gPSB1c2VTV1IoXCIvYXBpL2h5bW5cIik7XG4gIC8vIGNvbnN0IHsgZGF0YTogbG9ncyB9ID0gdXNlU1dSKFwiL2FwaS9sb2dcIik7XG5cbiAgLy8gY29uc3QgW2FsbEh5bW5zLCBzZXRBbGxIeW1uc10gPSB1c2VTdGF0ZTxIeW1uVmFsdWVzW10+KGh5bW5zTGlzdCk7XG4gIC8vIGNvbnN0IFthbGxMb2dzLCBzZXRBbGxMb2dzXSA9IHVzZVN0YXRlPExvZ1ZhbHVlc1tdPihsb2dzTGlzdCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcIi9hcGkvaHltblwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoaHltbl9kYXRhKSA9PiBzZXRIeW1ucyhoeW1uX2RhdGEuaHltbnMpKTtcbiAgICBmZXRjaChcIi9hcGkvbG9nXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChsb2dfZGF0YSkgPT4gc2V0TG9ncyhsb2dfZGF0YS5sb2dzKSk7XG4gIH0sIFtzZXRIeW1ucywgc2V0TG9nc10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgYWRkSHltbihjcmVhdGVNdXRhdGlvbik7XG4gIC8vIH0sIFtjcmVhdGVNdXRhdGlvbl0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0QWxsSHltbnMoW1xuICAvLyAgICAgLi4uYWxsSHltbnMuZmlsdGVyKChoeW1uKSA9PiBoeW1uLm51bWJlciAhPT0gYWRkZWRIeW1uLm51bWJlciksXG4gIC8vICAgICBhZGRlZEh5bW4sXG4gIC8vICAgXSk7XG4gIC8vICAgY29uc3QgbmV3TG9nID0ge1xuICAvLyAgICAgaWQ6IGFkZGVkSHltbi5udW1iZXIsXG4gIC8vICAgICBsb2dnZWQ6IGFkZGVkSHltbi5sb2dnZWQsXG4gIC8vICAgICBieXdobzogYWRkZWRIeW1uLmJ5d2hvLFxuICAvLyAgIH07XG4gIC8vICAgc2V0QWxsTG9ncyhbLi4uYWxsTG9ncy5maWx0ZXIoKGxvZykgPT4gbG9nLmlkICE9PSBuZXdMb2cuaWQpLCBuZXdMb2ddKTtcbiAgLy8gfSwgW2FkZGVkSHltbl0pO1xuXG4gIC8vIGxldCBkYXRhSHltbnM6IEh5bW5WYWx1ZXNbXSA9IFtdO1xuICAvLyBsZXQgZGF0YUxvZ3M6IGFueVtdID0gW107XG5cbiAgLy8gaWYgKGh5bW5zKSB7XG4gIC8vICAgZGF0YUh5bW5zID0gaHltbnMuaHltbnM7XG4gIC8vIH1cblxuICAvLyBpZiAobG9ncykge1xuICAvLyAgIGRhdGFMb2dzID0gbG9ncy5sb2dzO1xuICAvLyB9XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBmZXRjaChcIi9hcGkvaHltblwiKVxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vICAgICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpO1xuICAvLyB9LCBbXSk7XG5cbiAgY29uc3Qgb3BlbkVkaXRNb2RhbCA9ICh2YWx1ZXM6IEh5bW5WYWx1ZXMpID0+IHtcbiAgICBjaGVja1Bhc3N3b3JkRm9yRWRpdCgpO1xuICAgIHNldFBpbk1vZGFsT3Blbih0cnVlKTtcbiAgICBzZXREYXRhKHZhbHVlcyk7XG4gIH07XG4gIGNvbnN0IG9wZW5RdWlja0FkZE1vZGFsID0gKHZhbHVlczogSHltblZhbHVlcykgPT4ge1xuICAgIHNldFF1aWNrQWRkTW9kYWxPcGVuKHRydWUpO1xuICAgIHNldERhdGEodmFsdWVzKTtcbiAgfTtcblxuICAvLyBjb25zdCBlZGl0SHltbiA9ICh2YWx1ZXM6IEVkaXRWYWx1ZXMpID0+IHtcbiAgLy8gICBjb25zdCBzZWxlY3RlZGh5bW4gPSBoeW1uc0xpc3QuZmlsdGVyKFxuICAvLyAgICAgKGh5bW4pID0+IGh5bW4ubnVtYmVyID09PSBkYXRhLm51bWJlclxuICAvLyAgICk7XG5cbiAgLy8gICBzZWxlY3RlZGh5bW5bMF0ubmFtZSA9IHZhbHVlcy5uYW1lO1xuICAvLyAgIHNlbGVjdGVkaHltblswXS5udW1iZXIgPSB2YWx1ZXMubnVtYmVyO1xuICAvLyB9O1xuXG4gIGNvbnN0IGVkaXRIeW1uID0gKHZhbHVlczogRWRpdFZhbHVlcykgPT4ge1xuICAgIG11dGF0ZShcIi9hcGkvaHltblwiLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBlZGl0ZWRIeW1uID0gYXdhaXQgZmV0Y2hlcihcIi9hcGkvaHltblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBudW1iZXI6IGRhdGEubnVtYmVyLFxuICAgICAgICAgIG5ld051bWJlcjogdmFsdWVzLm51bWJlcixcbiAgICAgICAgICBuZXdOYW1lOiB2YWx1ZXMubmFtZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgICAgbGV0IG5ld0xvZ3MgPSBsb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgPT09IGRhdGEubnVtYmVyKTtcblxuICAgICAgaWYgKHZhbHVlcy5udW1iZXIgPT09IGRhdGEubnVtYmVyKSB7XG4gICAgICAgIGVkaXRlZEh5bW4ubnVtYmVyID0gZGF0YS5udW1iZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdMb2dzLmZvckVhY2goKG5ld0xvZykgPT4ge1xuICAgICAgICAgIG5ld0xvZy5pZCA9IHZhbHVlcy5udW1iZXI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBlZGl0ZWRIeW1uLm5hbWUgPSB2YWx1ZXMubmFtZTtcbiAgICAgIHNldEh5bW5zKFtcbiAgICAgICAgLi4uaHltbkRhdGEuZmlsdGVyKChoeW1uKSA9PiBoeW1uLm51bWJlciAhPT0gZGF0YS5udW1iZXIpLFxuICAgICAgICBlZGl0ZWRIeW1uLFxuICAgICAgXSk7XG4gICAgICAvLyBuZXdMb2dzLmZvckVhY2goKG5ld0xvZykgPT4ge1xuICAgICAgLy8gICBzZXRMb2dzKFsuLi5sb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgIT09IGRhdGEubnVtYmVyKSwgbmV3TG9nXSk7XG4gICAgICAvLyB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCA9PT0gdmFsdWVzLm51bWJlcikpO1xuICAgICAgLy8gc2V0TG9ncyhbLi4ubG9nRGF0YS5maWx0ZXIoKGxvZykgPT4gbG9nLmlkICE9PSBkYXRhLm51bWJlciksIG5ld0xvZ3NbMF1dKTtcbiAgICAgIHNldExvZ3MoWy4uLmxvZ0RhdGEuZmlsdGVyKChsb2cpID0+IGxvZy5pZCAhPT0gZGF0YS5udW1iZXIpXSk7XG4gICAgfSk7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9O1xuXG4gIGNvbnN0IHF1aWNrQWRkSHltbiA9ICh2YWx1ZXM6IFF1aWNrQWRkVmFsdWVzKSA9PiB7XG4gICAgbXV0YXRlKFwiL2FwaS9sb2dcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYWRkZWRMb2cgPSBhd2FpdCBmZXRjaGVyKFwiL2FwaS9sb2dcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpZDogZGF0YS5udW1iZXIsXG4gICAgICAgICAgYnl3aG86IHZhbHVlcy5uYW1lLFxuICAgICAgICAgIGxvZ2dlZDogdmFsdWVzLmRhdGUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIHNldExvZ3MoWy4uLmxvZ0RhdGEsIGFkZGVkTG9nXSk7XG4gICAgfSk7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXG4gICAgLy8gY29uc3Qgc2VsZWN0ZWRoeW1uID0gaHltbnNMaXN0LmZpbHRlcihcbiAgICAvLyAgIChoeW1uKSA9PiBoeW1uLm51bWJlciA9PT0gZGF0YS5udW1iZXJcbiAgICAvLyApO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRoeW1uKTtcblxuICAgIC8vIHNlbGVjdGVkaHltblswXS5sb2dzLnB1c2goeyBsb2dnZWQ6IHZhbHVlcy5kYXRlLCBieXdobzogdmFsdWVzLm5hbWUgfSk7XG4gIH07XG5cbiAgLy8gY29uc3QgZmFrZUh5bW5zID0gaHltbnNMaXN0LmZpbHRlcihcbiAgLy8gICAoaHltbikgPT5cbiAgLy8gICAgIGh5bW4ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKSB8fFxuICAvLyAgICAgaHltbi5udW1iZXIudG9TdHJpbmcoKS5pbmNsdWRlcyhmaWx0ZXIpXG4gIC8vICk7XG5cbiAgLy8gY29uc29sZS5sb2coYWxsSHltbnMpO1xuXG4gIGNvbnN0IGNoZWNrUGFzc3dvcmRGb3JFZGl0ID0gKHZhbHVlczogUGFzc3dvcmRWYWx1ZXMpID0+IHtcbiAgICBzZXRJc1Bhc3N3b3JkQ29ycmVjdCh2YWx1ZXMucGFzc3dvcmQgPT09IFwicmFoYWJcIiA/IHRydWUgOiBmYWxzZSk7XG4gICAgc2V0UGluTW9kYWxPcGVuKGZhbHNlKTtcbiAgICBzZXRFZGl0TW9kYWxPcGVuKHRydWUpO1xuICB9O1xuICBjb25zdCBjaGVja1Bhc3N3b3JkRm9yUXVpY2tBZGQgPSAodmFsdWVzOiBQYXNzd29yZFZhbHVlcykgPT4ge1xuICAgIHNldElzUGFzc3dvcmRDb3JyZWN0KHZhbHVlcy5wYXNzd29yZCA9PT0gXCJyYWhhYlwiID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICBzZXRQaW5Nb2RhbE9wZW4oZmFsc2UpO1xuICAgIHNldFF1aWNrQWRkTW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0RWRpdE1vZGFsT3BlbihmYWxzZSk7XG4gICAgc2V0SXNQYXNzd29yZENvcnJlY3QoZmFsc2UpO1xuICB9O1xuXG4gIGlmIChoeW1uRGF0YVswXS5udW1iZXIgPT09IDk5OSB8fCBsb2dEYXRhWzBdLmlkID09PSA5OTkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEVkaXRNb2RhbFxuICAgICAgICAgIG9wZW49e2VkaXRNb2RhbE9wZW59XG4gICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cbiAgICAgICAgLz5cbiAgICAgICAgPFF1aWNrQWRkTW9kYWxcbiAgICAgICAgICBvcGVuPXtxdWlja0FkZE1vZGFsT3Blbn1cbiAgICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgICAgIHF1aWNrQWRkTXV0YXRpb249e3F1aWNrQWRkSHltbn1cbiAgICAgICAgLz5cbiAgICAgICAgey8qIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICB7YWxsSHltbnMubWFwKChoeW1uKSA9PiAoXG4gICAgICAgICAgICA8SHltblxuICAgICAgICAgICAgICBuYW1lPXtoeW1uLm5hbWV9XG4gICAgICAgICAgICAgIG51bWJlcj17aHltbi5udW1iZXJ9XG4gICAgICAgICAgICAgIGxvZ3M9e2FsbExvZ3MuZmlsdGVyKChsb2cpID0+IGxvZy5pZCA9PT0gaHltbi5udW1iZXIpfVxuICAgICAgICAgICAgICBoYW5kbGVFZGl0PXsoKSA9PiBvcGVuRWRpdE1vZGFsKGh5bW4pfVxuICAgICAgICAgICAgICBoYW5kbGVRdWlja0FkZD17KCkgPT4gb3BlblF1aWNrQWRkTW9kYWwoaHltbil9XG4gICAgICAgICAgICAgIGtleT17aHltbi5udW1iZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD4gKi99XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRIeW1ucyA9IGh5bW5EYXRhLmZpbHRlcihcbiAgICAoaHltbikgPT5cbiAgICAgIGh5bW4ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgaHltbi5udW1iZXIudG9TdHJpbmcoKS5pbmNsdWRlcyhmaWx0ZXIpXG4gICk7XG5cbiAgY29uc3QgZmlsdGVyZWRMb2dzID0gKGh5bW5JZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZmxvZ3MgPSBsb2dEYXRhLmZpbHRlcigobG9nKSA9PiBsb2cuaWQgPT09IGh5bW5JZCk7XG5cbiAgICByZXR1cm4gZmxvZ3M7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEVkaXRNb2RhbFxuICAgICAgICBvcGVuPXtlZGl0TW9kYWxPcGVufVxuICAgICAgICBoYW5kbGVDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgZWRpdE11dGF0aW9uPXtlZGl0SHltbn1cbiAgICAgIC8+XG4gICAgICA8UGluTW9kYWxcbiAgICAgICAgb3Blbj17cGluTW9kYWxPcGVufVxuICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UGluTW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgaXNDb3JyZWN0PXsodmFsdWVzKSA9PiBjaGVja1Bhc3N3b3JkRm9yRWRpdCh2YWx1ZXMpfVxuICAgICAgLz5cbiAgICAgIDxRdWlja0FkZE1vZGFsXG4gICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVufVxuICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XG4gICAgICAvPlxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICB7ZmlsdGVyZWRIeW1ucy5zb3J0KCkubWFwKChoeW1uKSA9PiAoXG4gICAgICAgICAgPEh5bW5cbiAgICAgICAgICAgIG5hbWU9e2h5bW4ubmFtZX1cbiAgICAgICAgICAgIG51bWJlcj17aHltbi5udW1iZXJ9XG4gICAgICAgICAgICBsb2dzPXtcbiAgICAgICAgICAgICAgLyphbGxMb2dzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAobG9nKSA9PiBsb2cuaWQgPT09IGh5bW4ubnVtYmVyXG4gICAgICAgICAgICAgICkqLyBmaWx0ZXJlZExvZ3MoaHltbi5udW1iZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVFZGl0PXsoKSA9PiBvcGVuRWRpdE1vZGFsKGh5bW4pfVxuICAgICAgICAgICAgaGFuZGxlUXVpY2tBZGQ9eygpID0+IG9wZW5RdWlja0FkZE1vZGFsKGh5bW4pfVxuICAgICAgICAgICAga2V5PXtoeW1uLm51bWJlcn1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xuXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPD5cbiAgLy8gICAgIDxFZGl0TW9kYWxcbiAgLy8gICAgICAgb3Blbj17ZWRpdE1vZGFsT3Blbn1cbiAgLy8gICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldEVkaXRNb2RhbE9wZW4oZmFsc2UpfVxuICAvLyAgICAgICBkYXRhPXtkYXRhfVxuICAvLyAgICAgICBlZGl0TXV0YXRpb249e2VkaXRIeW1ufVxuICAvLyAgICAgLz5cbiAgLy8gICAgIDxRdWlja0FkZE1vZGFsXG4gIC8vICAgICAgIG9wZW49e3F1aWNrQWRkTW9kYWxPcGVufVxuICAvLyAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UXVpY2tBZGRNb2RhbE9wZW4oZmFsc2UpfVxuICAvLyAgICAgICBxdWlja0FkZE11dGF0aW9uPXtxdWlja0FkZEh5bW59XG4gIC8vICAgICAvPlxuICAvLyAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAvLyAgICAgICB7ZmFrZUh5bW5zLnNvcnQoKS5tYXAoKGh5bW4pID0+IChcbiAgLy8gICAgICAgICA8SHltblxuICAvLyAgICAgICAgICAgbmFtZT17aHltbi5uYW1lfVxuICAvLyAgICAgICAgICAgbnVtYmVyPXtoeW1uLm51bWJlcn1cbiAgLy8gICAgICAgICAgIGxvZ3M9e2h5bW4ubG9nc31cbiAgLy8gICAgICAgICAgIGhhbmRsZUVkaXQ9eygpID0+IG9wZW5FZGl0TW9kYWwoaHltbil9XG4gIC8vICAgICAgICAgICBoYW5kbGVRdWlja0FkZD17KCkgPT4gb3BlblF1aWNrQWRkTW9kYWwoaHltbil9XG4gIC8vICAgICAgICAgICBrZXk9e2h5bW4ubnVtYmVyfVxuICAvLyAgICAgICAgIC8+XG4gIC8vICAgICAgICkpfVxuICAvLyAgICAgPC9Cb3g+XG4gIC8vICAgPC8+XG4gIC8vICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxIeW1ucztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiSHltbiIsIkVkaXRNb2RhbCIsIlBpbk1vZGFsIiwiUXVpY2tBZGRNb2RhbCIsIm11dGF0ZSIsImZldGNoZXIiLCJBbGxIeW1ucyIsImZpbHRlciIsImh5bW5EYXRhIiwibG9nRGF0YSIsInNldEh5bW5zIiwic2V0TG9ncyIsImRhdGEiLCJzZXREYXRhIiwibmFtZSIsIm51bWJlciIsImVkaXRNb2RhbE9wZW4iLCJzZXRFZGl0TW9kYWxPcGVuIiwicGluTW9kYWxPcGVuIiwic2V0UGluTW9kYWxPcGVuIiwicXVpY2tBZGRNb2RhbE9wZW4iLCJzZXRRdWlja0FkZE1vZGFsT3BlbiIsImlzUGFzc3dvcmRDb3JyZWN0Iiwic2V0SXNQYXNzd29yZENvcnJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJoeW1uX2RhdGEiLCJoeW1ucyIsImxvZ19kYXRhIiwibG9ncyIsIm9wZW5FZGl0TW9kYWwiLCJ2YWx1ZXMiLCJjaGVja1Bhc3N3b3JkRm9yRWRpdCIsIm9wZW5RdWlja0FkZE1vZGFsIiwiZWRpdEh5bW4iLCJlZGl0ZWRIeW1uIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3TnVtYmVyIiwibmV3TmFtZSIsIm5ld0xvZ3MiLCJsb2ciLCJpZCIsImZvckVhY2giLCJuZXdMb2ciLCJoeW1uIiwiY2xvc2VNb2RhbCIsInF1aWNrQWRkSHltbiIsImFkZGVkTG9nIiwiYnl3aG8iLCJsb2dnZWQiLCJkYXRlIiwicGFzc3dvcmQiLCJjaGVja1Bhc3N3b3JkRm9yUXVpY2tBZGQiLCJmaWx0ZXJlZEh5bW5zIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRvU3RyaW5nIiwiZmlsdGVyZWRMb2dzIiwiaHltbklkIiwiZmxvZ3MiLCJzb3J0IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Hymns/AllHymns/index.tsx\n");

/***/ })

});