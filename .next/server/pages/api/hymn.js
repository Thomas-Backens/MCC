"use strict";
(() => {
var exports = {};
exports.id = "pages/api/hymn";
exports.ids = ["pages/api/hymn"];
exports.modules = {

/***/ "./src/Utils/db.js":
/*!*************************!*\
  !*** ./src/Utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pool": () => (/* binding */ pool),
/* harmony export */   "Client": () => (/* binding */ Client)
/* harmony export */ });
const {
  Pool
} = __webpack_require__(/*! pg */ "pg");

const pool = new Pool({
  max: 20,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT
});
let Client = null;
pool.connect((err, client, release) => {
  Client = client;
});


/***/ }),

/***/ "./src/db/procs.js":
/*!*************************!*\
  !*** ./src/db/procs.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _db = __webpack_require__(/*! ../Utils/db */ "./src/Utils/db.js");

const sql = __webpack_require__(/*! sql-template-strings */ "sql-template-strings");

const getAllHymns = async () => {
  let result = [];

  try {
    const res = await _db.pool.query("SELECT * from hymn");
    result = res.rows;
  } catch (err) {
    console.log(err.stack);
  }

  return result;
};

const addHymn = async (bywho, name, number, logged) => {
  let result = {};

  try {
    const logRows = await _db.pool.query(sql`
      INSERT INTO log (id, logged, bywho)
      VALUES (${number}, ${logged}, ${bywho})
      RETURNING *`);
    const {
      rows
    } = await _db.pool.query(sql`
      INSERT INTO hymn (number, name)
      VALUES (${number}, ${name})
      RETURNING *`);
    result = [{
      bywho: logRows.rows[0].bywho,
      name: rows[0].name,
      number: rows[0].number,
      logged: logRows.rows[0].logged
    }];
    console.log(result);
  } catch (err) {
    console.log(err.stack);
  }

  return result;
};

const editHymn = async (number, newNumber, newName) => {
  let result = null;

  try {
    await _db.pool.query(sql`
      UPDATE log
        SET id = ${newNumber}
      WHERE id = ${number}
      RETURNING *`);
    const {
      rows
    } = await _db.pool.query(sql`
      UPDATE hymn
        SET number = ${newNumber}, name = ${newName}
      WHERE number = ${number}
      RETURNING *`);
    result = rows;
  } catch (err) {
    console.log(err.stack);
  }

  return result;
};

const getAllLogs = async () => {
  let result = [];

  try {
    const res = await _db.pool.query("SELECT * from log");
    result = res.rows;
  } catch (err) {
    console.log(err.stack);
  }

  return result;
};

const addLog = async (id, bywho, logged) => {
  let result = {};

  try {
    const {
      rows
    } = await _db.pool.query(sql`
      INSERT INTO log (id, logged, bywho)
      VALUES (${id}, ${logged}, ${bywho})
      RETURNING *`);
    result = rows;
    console.log(result);
  } catch (err) {
    console.log(err.stack);
  }

  return result;
};

module.exports = {
  getAllHymns,
  addHymn,
  editHymn,
  getAllLogs,
  addLog
};

/***/ }),

/***/ "./src/pages/api/hymn.js":
/*!*******************************!*\
  !*** ./src/pages/api/hymn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable import/no-anonymous-default-export */
const sqlQuery = __webpack_require__(/*! ../../db/procs */ "./src/db/procs.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const hymns = await sqlQuery.getAllHymns();
        res.status(200).json({
          hymns
        });
        break;
      } catch (err) {
        return res.status(500).json({
          message: err.message
        });
      }

    case "POST":
      try {
        const {
          bywho,
          name,
          number,
          logged
        } = await req.body;

        if (bywho && name && number && logged) {
          const result = await sqlQuery.addHymn(bywho, name, number, logged);
          return res.json(result[0]);
        }

        throw new Error("number required");
      } catch (err) {
        return res.status(500).json({
          message: err.message
        });
      }

    case "PATCH":
      try {
        const {
          number,
          newNumber,
          newName
        } = await req.body;

        if (number) {
          const result = await sqlQuery.editHymn(number, newNumber, newName);
          return res.json(result[0]);
        }

        throw new Error("number required");
      } catch (err) {
        return res.status(500).json({
          message: err.message
        });
      }

    default:
      return res.status(405).send("Method Not Allowed");
  }
});

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "sql-template-strings":
/*!***************************************!*\
  !*** external "sql-template-strings" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("sql-template-strings");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/hymn.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQUosQ0FBVyxHQUFYLEVBQWdCSyxJQUFoQixDQUFxQixvQkFBckIsQ0FBUDtBQWpDSjtBQW1DRCxDQXBDRDs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tY2MvLi9zcmMvVXRpbHMvZGIuanMiLCJ3ZWJwYWNrOi8vbWNjLy4vc3JjL2RiL3Byb2NzLmpzIiwid2VicGFjazovL21jYy8uL3NyYy9wYWdlcy9hcGkvaHltbi5qcyIsIndlYnBhY2s6Ly9tY2MvZXh0ZXJuYWwgXCJwZ1wiIiwid2VicGFjazovL21jYy9leHRlcm5hbCBcInNxbC10ZW1wbGF0ZS1zdHJpbmdzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBQb29sIH0gPSByZXF1aXJlKFwicGdcIik7XHJcblxyXG5leHBvcnQgY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcclxuICBtYXg6IDIwLFxyXG4gIHVzZXI6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VTRVJOQU1FLFxyXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9QQVNTV09SRCxcclxuICBob3N0OiBwcm9jZXNzLmVudi5EQVRBQkFTRV9IT1NULFxyXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRSxcclxuICBwb3J0OiBwcm9jZXNzLmVudi5EQVRBQkFTRV9QT1JULFxyXG59KTtcclxuXHJcbmxldCBDbGllbnQgPSBudWxsO1xyXG5wb29sLmNvbm5lY3QoKGVyciwgY2xpZW50LCByZWxlYXNlKSA9PiB7XHJcbiAgQ2xpZW50ID0gY2xpZW50O1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IENsaWVudCB9O1xyXG4iLCJpbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uL1V0aWxzL2RiXCI7XHJcbmNvbnN0IHNxbCA9IHJlcXVpcmUoXCJzcWwtdGVtcGxhdGUtc3RyaW5nc1wiKTtcclxuXHJcbmNvbnN0IGdldEFsbEh5bW5zID0gYXN5bmMgKCkgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBbXTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcG9vbC5xdWVyeShcIlNFTEVDVCAqIGZyb20gaHltblwiKTtcclxuICAgIHJlc3VsdCA9IHJlcy5yb3dzO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IGFkZEh5bW4gPSBhc3luYyAoYnl3aG8sIG5hbWUsIG51bWJlciwgbG9nZ2VkKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsb2dSb3dzID0gYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgc3FsYFxyXG4gICAgICBJTlNFUlQgSU5UTyBsb2cgKGlkLCBsb2dnZWQsIGJ5d2hvKVxyXG4gICAgICBWQUxVRVMgKCR7bnVtYmVyfSwgJHtsb2dnZWR9LCAke2J5d2hvfSlcclxuICAgICAgUkVUVVJOSU5HICpgXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyByb3dzIH0gPSBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICBzcWxgXHJcbiAgICAgIElOU0VSVCBJTlRPIGh5bW4gKG51bWJlciwgbmFtZSlcclxuICAgICAgVkFMVUVTICgke251bWJlcn0sICR7bmFtZX0pXHJcbiAgICAgIFJFVFVSTklORyAqYFxyXG4gICAgKTtcclxuICAgIHJlc3VsdCA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGJ5d2hvOiBsb2dSb3dzLnJvd3NbMF0uYnl3aG8sXHJcbiAgICAgICAgbmFtZTogcm93c1swXS5uYW1lLFxyXG4gICAgICAgIG51bWJlcjogcm93c1swXS5udW1iZXIsXHJcbiAgICAgICAgbG9nZ2VkOiBsb2dSb3dzLnJvd3NbMF0ubG9nZ2VkLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgZWRpdEh5bW4gPSBhc3luYyAobnVtYmVyLCBuZXdOdW1iZXIsIG5ld05hbWUpID0+IHtcclxuICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgc3FsYFxyXG4gICAgICBVUERBVEUgbG9nXHJcbiAgICAgICAgU0VUIGlkID0gJHtuZXdOdW1iZXJ9XHJcbiAgICAgIFdIRVJFIGlkID0gJHtudW1iZXJ9XHJcbiAgICAgIFJFVFVSTklORyAqYFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgc3FsYFxyXG4gICAgICBVUERBVEUgaHltblxyXG4gICAgICAgIFNFVCBudW1iZXIgPSAke25ld051bWJlcn0sIG5hbWUgPSAke25ld05hbWV9XHJcbiAgICAgIFdIRVJFIG51bWJlciA9ICR7bnVtYmVyfVxyXG4gICAgICBSRVRVUk5JTkcgKmBcclxuICAgICk7XHJcbiAgICByZXN1bHQgPSByb3dzO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IGdldEFsbExvZ3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBwb29sLnF1ZXJ5KFwiU0VMRUNUICogZnJvbSBsb2dcIik7XHJcbiAgICByZXN1bHQgPSByZXMucm93cztcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb25zdCBhZGRMb2cgPSBhc3luYyAoaWQsIGJ5d2hvLCBsb2dnZWQpID0+IHtcclxuICBsZXQgcmVzdWx0ID0ge307XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgc3FsYFxyXG4gICAgICBJTlNFUlQgSU5UTyBsb2cgKGlkLCBsb2dnZWQsIGJ5d2hvKVxyXG4gICAgICBWQUxVRVMgKCR7aWR9LCAke2xvZ2dlZH0sICR7Ynl3aG99KVxyXG4gICAgICBSRVRVUk5JTkcgKmBcclxuICAgICk7XHJcbiAgICByZXN1bHQgPSByb3dzO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBnZXRBbGxIeW1ucyxcclxuICBhZGRIeW1uLFxyXG4gIGVkaXRIeW1uLFxyXG4gIGdldEFsbExvZ3MsXHJcbiAgYWRkTG9nLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXHJcbmNvbnN0IHNxbFF1ZXJ5ID0gcmVxdWlyZShcIi4uLy4uL2RiL3Byb2NzXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaHltbnMgPSBhd2FpdCBzcWxRdWVyeS5nZXRBbGxIeW1ucygpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaHltbnMgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYnl3aG8sIG5hbWUsIG51bWJlciwgbG9nZ2VkIH0gPSBhd2FpdCByZXEuYm9keTtcclxuICAgICAgICBpZiAoYnl3aG8gJiYgbmFtZSAmJiBudW1iZXIgJiYgbG9nZ2VkKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWxRdWVyeS5hZGRIeW1uKGJ5d2hvLCBuYW1lLCBudW1iZXIsIGxvZ2dlZCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24ocmVzdWx0WzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibnVtYmVyIHJlcXVpcmVkXCIpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgY2FzZSBcIlBBVENIXCI6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBudW1iZXIsIG5ld051bWJlciwgbmV3TmFtZSB9ID0gYXdhaXQgcmVxLmJvZHk7XHJcbiAgICAgICAgaWYgKG51bWJlcikge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsUXVlcnkuZWRpdEh5bW4obnVtYmVyLCBuZXdOdW1iZXIsIG5ld05hbWUpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHJlc3VsdFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bWJlciByZXF1aXJlZFwiKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLnNlbmQoXCJNZXRob2QgTm90IEFsbG93ZWRcIik7XHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzcWwtdGVtcGxhdGUtc3RyaW5nc1wiKTsiXSwibmFtZXMiOlsiUG9vbCIsInJlcXVpcmUiLCJwb29sIiwibWF4IiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VU0VSTkFNRSIsInBhc3N3b3JkIiwiREFUQUJBU0VfUEFTU1dPUkQiLCJob3N0IiwiREFUQUJBU0VfSE9TVCIsImRhdGFiYXNlIiwiREFUQUJBU0UiLCJwb3J0IiwiREFUQUJBU0VfUE9SVCIsIkNsaWVudCIsImNvbm5lY3QiLCJlcnIiLCJjbGllbnQiLCJyZWxlYXNlIiwic3FsIiwiZ2V0QWxsSHltbnMiLCJyZXN1bHQiLCJyZXMiLCJxdWVyeSIsInJvd3MiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJhZGRIeW1uIiwiYnl3aG8iLCJuYW1lIiwibnVtYmVyIiwibG9nZ2VkIiwibG9nUm93cyIsImVkaXRIeW1uIiwibmV3TnVtYmVyIiwibmV3TmFtZSIsImdldEFsbExvZ3MiLCJhZGRMb2ciLCJpZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzcWxRdWVyeSIsInJlcSIsIm1ldGhvZCIsImh5bW5zIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJib2R5IiwiRXJyb3IiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==