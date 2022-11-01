"use strict";
(() => {
var exports = {};
exports.id = "pages/api/log";
exports.ids = ["pages/api/log"];
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
    const check = await _db.pool.query(sql`
      SELECT * from log WHERE id = ${id} AND logged = ${logged}
      `);

    if (check.rows.length > 0) {
      return;
    }

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

/***/ "./src/pages/api/log.js":
/*!******************************!*\
  !*** ./src/pages/api/log.js ***!
  \******************************/
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
        const logs = await sqlQuery.getAllLogs();
        res.status(200).json({
          logs
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
          id,
          bywho,
          logged
        } = await req.body;

        if (id && logged) {
          if (bywho) {
            const result = await sqlQuery.addLog(id, bywho, logged);
            return res.json(result[0]);
          } else {
            const result = await sqlQuery.addLog(id, "Anonymous", logged);
            return res.json(result[0]);
          }
        }

        throw new Error("id required");
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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/log.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFQO0FBQ0Q7O0FBQ0gsU0FBSyxNQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU07QUFBRVgsVUFBQUEsRUFBRjtBQUFNVixVQUFBQSxLQUFOO0FBQWFHLFVBQUFBO0FBQWIsWUFBd0IsTUFBTWEsR0FBRyxDQUFDTSxJQUF4Qzs7QUFDQSxZQUFJWixFQUFFLElBQUlQLE1BQVYsRUFBa0I7QUFDaEIsY0FBSUgsS0FBSixFQUFXO0FBQ1Qsa0JBQU1SLE1BQU0sR0FBRyxNQUFNdUIsUUFBUSxDQUFDTixNQUFULENBQWdCQyxFQUFoQixFQUFvQlYsS0FBcEIsRUFBMkJHLE1BQTNCLENBQXJCO0FBQ0EsbUJBQU9WLEdBQUcsQ0FBQzJCLElBQUosQ0FBUzVCLE1BQU0sQ0FBQyxDQUFELENBQWYsQ0FBUDtBQUNELFdBSEQsTUFHTztBQUNMLGtCQUFNQSxNQUFNLEdBQUcsTUFBTXVCLFFBQVEsQ0FBQ04sTUFBVCxDQUFnQkMsRUFBaEIsRUFBb0IsV0FBcEIsRUFBaUNQLE1BQWpDLENBQXJCO0FBQ0EsbUJBQU9WLEdBQUcsQ0FBQzJCLElBQUosQ0FBUzVCLE1BQU0sQ0FBQyxDQUFELENBQWYsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsY0FBTSxJQUFJK0IsS0FBSixDQUFVLGFBQVYsQ0FBTjtBQUNELE9BWkQsQ0FZRSxPQUFPcEMsR0FBUCxFQUFZO0FBQ1osZUFBT00sR0FBRyxDQUFDMEIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFVBQUFBLE9BQU8sRUFBRWxDLEdBQUcsQ0FBQ2tDO0FBQWYsU0FBckIsQ0FBUDtBQUNEOztBQUVIO0FBQ0UsYUFBTzVCLEdBQUcsQ0FBQzBCLE1BQUosQ0FBVyxHQUFYLEVBQWdCSyxJQUFoQixDQUFxQixvQkFBckIsQ0FBUDtBQTNCSjtBQTZCRCxDQTlCRDs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tY2MvLi9zcmMvVXRpbHMvZGIuanMiLCJ3ZWJwYWNrOi8vbWNjLy4vc3JjL2RiL3Byb2NzLmpzIiwid2VicGFjazovL21jYy8uL3NyYy9wYWdlcy9hcGkvbG9nLmpzIiwid2VicGFjazovL21jYy9leHRlcm5hbCBcInBnXCIiLCJ3ZWJwYWNrOi8vbWNjL2V4dGVybmFsIFwic3FsLXRlbXBsYXRlLXN0cmluZ3NcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFBvb2wgfSA9IHJlcXVpcmUoXCJwZ1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb29sID0gbmV3IFBvb2woe1xyXG4gIG1heDogMjAsXHJcbiAgdXNlcjogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVNFUk5BTUUsXHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BBU1NXT1JELFxyXG4gIGhvc3Q6IHByb2Nlc3MuZW52LkRBVEFCQVNFX0hPU1QsXHJcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFLFxyXG4gIHBvcnQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BPUlQsXHJcbn0pO1xyXG5cclxubGV0IENsaWVudCA9IG51bGw7XHJcbnBvb2wuY29ubmVjdCgoZXJyLCBjbGllbnQsIHJlbGVhc2UpID0+IHtcclxuICBDbGllbnQgPSBjbGllbnQ7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgQ2xpZW50IH07XHJcbiIsImltcG9ydCB7IHBvb2wgfSBmcm9tIFwiLi4vVXRpbHMvZGJcIjtcclxuY29uc3Qgc3FsID0gcmVxdWlyZShcInNxbC10ZW1wbGF0ZS1zdHJpbmdzXCIpO1xyXG5cclxuY29uc3QgZ2V0QWxsSHltbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBwb29sLnF1ZXJ5KFwiU0VMRUNUICogZnJvbSBoeW1uXCIpO1xyXG4gICAgcmVzdWx0ID0gcmVzLnJvd3M7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgYWRkSHltbiA9IGFzeW5jIChieXdobywgbmFtZSwgbnVtYmVyLCBsb2dnZWQpID0+IHtcclxuICBsZXQgcmVzdWx0ID0ge307XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxvZ1Jvd3MgPSBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICBzcWxgXHJcbiAgICAgIElOU0VSVCBJTlRPIGxvZyAoaWQsIGxvZ2dlZCwgYnl3aG8pXHJcbiAgICAgIFZBTFVFUyAoJHtudW1iZXJ9LCAke2xvZ2dlZH0sICR7Ynl3aG99KVxyXG4gICAgICBSRVRVUk5JTkcgKmBcclxuICAgICk7XHJcbiAgICBjb25zdCB7IHJvd3MgfSA9IGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgIHNxbGBcclxuICAgICAgSU5TRVJUIElOVE8gaHltbiAobnVtYmVyLCBuYW1lKVxyXG4gICAgICBWQUxVRVMgKCR7bnVtYmVyfSwgJHtuYW1lfSlcclxuICAgICAgUkVUVVJOSU5HICpgXHJcbiAgICApO1xyXG4gICAgcmVzdWx0ID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnl3aG86IGxvZ1Jvd3Mucm93c1swXS5ieXdobyxcclxuICAgICAgICBuYW1lOiByb3dzWzBdLm5hbWUsXHJcbiAgICAgICAgbnVtYmVyOiByb3dzWzBdLm51bWJlcixcclxuICAgICAgICBsb2dnZWQ6IGxvZ1Jvd3Mucm93c1swXS5sb2dnZWQsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb25zdCBlZGl0SHltbiA9IGFzeW5jIChudW1iZXIsIG5ld051bWJlciwgbmV3TmFtZSkgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBudWxsO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICBzcWxgXHJcbiAgICAgIFVQREFURSBsb2dcclxuICAgICAgICBTRVQgaWQgPSAke25ld051bWJlcn1cclxuICAgICAgV0hFUkUgaWQgPSAke251bWJlcn1cclxuICAgICAgUkVUVVJOSU5HICpgXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyByb3dzIH0gPSBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICBzcWxgXHJcbiAgICAgIFVQREFURSBoeW1uXHJcbiAgICAgICAgU0VUIG51bWJlciA9ICR7bmV3TnVtYmVyfSwgbmFtZSA9ICR7bmV3TmFtZX1cclxuICAgICAgV0hFUkUgbnVtYmVyID0gJHtudW1iZXJ9XHJcbiAgICAgIFJFVFVSTklORyAqYFxyXG4gICAgKTtcclxuICAgIHJlc3VsdCA9IHJvd3M7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QWxsTG9ncyA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgcmVzdWx0ID0gW107XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvb2wucXVlcnkoXCJTRUxFQ1QgKiBmcm9tIGxvZ1wiKTtcclxuICAgIHJlc3VsdCA9IHJlcy5yb3dzO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IGFkZExvZyA9IGFzeW5jIChpZCwgYnl3aG8sIGxvZ2dlZCkgPT4ge1xyXG4gIGxldCByZXN1bHQgPSB7fTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2hlY2sgPSBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICBzcWxgXHJcbiAgICAgIFNFTEVDVCAqIGZyb20gbG9nIFdIRVJFIGlkID0gJHtpZH0gQU5EIGxvZ2dlZCA9ICR7bG9nZ2VkfVxyXG4gICAgICBgXHJcbiAgICApO1xyXG4gICAgaWYgKGNoZWNrLnJvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IHJvd3MgfSA9IGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgIHNxbGBcclxuICAgICAgSU5TRVJUIElOVE8gbG9nIChpZCwgbG9nZ2VkLCBieXdobylcclxuICAgICAgVkFMVUVTICgke2lkfSwgJHtsb2dnZWR9LCAke2J5d2hvfSlcclxuICAgICAgUkVUVVJOSU5HICpgXHJcbiAgICApO1xyXG4gICAgcmVzdWx0ID0gcm93cztcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0QWxsSHltbnMsXHJcbiAgYWRkSHltbixcclxuICBlZGl0SHltbixcclxuICBnZXRBbGxMb2dzLFxyXG4gIGFkZExvZyxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydCAqL1xyXG5jb25zdCBzcWxRdWVyeSA9IHJlcXVpcmUoXCIuLi8uLi9kYi9wcm9jc1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGxvZ3MgPSBhd2FpdCBzcWxRdWVyeS5nZXRBbGxMb2dzKCk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBsb2dzIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGlkLCBieXdobywgbG9nZ2VkIH0gPSBhd2FpdCByZXEuYm9keTtcclxuICAgICAgICBpZiAoaWQgJiYgbG9nZ2VkKSB7XHJcbiAgICAgICAgICBpZiAoYnl3aG8pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsUXVlcnkuYWRkTG9nKGlkLCBieXdobywgbG9nZ2VkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHJlc3VsdFswXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWxRdWVyeS5hZGRMb2coaWQsIFwiQW5vbnltb3VzXCIsIGxvZ2dlZCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihyZXN1bHRbMF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpZCByZXF1aXJlZFwiKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLnNlbmQoXCJNZXRob2QgTm90IEFsbG93ZWRcIik7XHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzcWwtdGVtcGxhdGUtc3RyaW5nc1wiKTsiXSwibmFtZXMiOlsiUG9vbCIsInJlcXVpcmUiLCJwb29sIiwibWF4IiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VU0VSTkFNRSIsInBhc3N3b3JkIiwiREFUQUJBU0VfUEFTU1dPUkQiLCJob3N0IiwiREFUQUJBU0VfSE9TVCIsImRhdGFiYXNlIiwiREFUQUJBU0UiLCJwb3J0IiwiREFUQUJBU0VfUE9SVCIsIkNsaWVudCIsImNvbm5lY3QiLCJlcnIiLCJjbGllbnQiLCJyZWxlYXNlIiwic3FsIiwiZ2V0QWxsSHltbnMiLCJyZXN1bHQiLCJyZXMiLCJxdWVyeSIsInJvd3MiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJhZGRIeW1uIiwiYnl3aG8iLCJuYW1lIiwibnVtYmVyIiwibG9nZ2VkIiwibG9nUm93cyIsImVkaXRIeW1uIiwibmV3TnVtYmVyIiwibmV3TmFtZSIsImdldEFsbExvZ3MiLCJhZGRMb2ciLCJpZCIsImNoZWNrIiwibGVuZ3RoIiwibW9kdWxlIiwiZXhwb3J0cyIsInNxbFF1ZXJ5IiwicmVxIiwibWV0aG9kIiwibG9ncyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiYm9keSIsIkVycm9yIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=