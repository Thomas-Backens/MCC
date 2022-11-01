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

        if (name && number && logged) {
          if (bywho) {
            const result = await sqlQuery.addHymn(bywho, name, number, logged);
            return res.json(result[0]);
          } else {
            const result = await sqlQuery.addHymn("Anonymous", name, number, logged);
            return res.json(result[0]);
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVk7QUFDVixnQkFBTVYsTUFBTSxHQUFHLE1BQU11QixRQUFRLENBQUNWLFFBQVQsQ0FBa0JILE1BQWxCLEVBQTBCSSxTQUExQixFQUFxQ0MsT0FBckMsQ0FBckI7QUFDQSxpQkFBT2QsR0FBRyxDQUFDMkIsSUFBSixDQUFTNUIsTUFBTSxDQUFDLENBQUQsQ0FBZixDQUFQO0FBQ0Q7O0FBQ0QsY0FBTSxJQUFJK0IsS0FBSixDQUFVLGlCQUFWLENBQU47QUFDRCxPQVBELENBT0UsT0FBT3BDLEdBQVAsRUFBWTtBQUNaLGVBQU9NLEdBQUcsQ0FBQzBCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxVQUFBQSxPQUFPLEVBQUVsQyxHQUFHLENBQUNrQztBQUFmLFNBQXJCLENBQVA7QUFDRDs7QUFFSDtBQUNFLGFBQU81QixHQUFHLENBQUMwQixNQUFKLENBQVcsR0FBWCxFQUFnQkssSUFBaEIsQ0FBcUIsb0JBQXJCLENBQVA7QUEzQ0o7QUE2Q0QsQ0E5Q0Q7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWNjLy4vc3JjL1V0aWxzL2RiLmpzIiwid2VicGFjazovL21jYy8uL3NyYy9kYi9wcm9jcy5qcyIsIndlYnBhY2s6Ly9tY2MvLi9zcmMvcGFnZXMvYXBpL2h5bW4uanMiLCJ3ZWJwYWNrOi8vbWNjL2V4dGVybmFsIFwicGdcIiIsIndlYnBhY2s6Ly9tY2MvZXh0ZXJuYWwgXCJzcWwtdGVtcGxhdGUtc3RyaW5nc1wiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgUG9vbCB9ID0gcmVxdWlyZShcInBnXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvb2wgPSBuZXcgUG9vbCh7XHJcbiAgbWF4OiAyMCxcclxuICB1c2VyOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VU0VSTkFNRSxcclxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfUEFTU1dPUkQsXHJcbiAgaG9zdDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfSE9TVCxcclxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0UsXHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfUE9SVCxcclxufSk7XHJcblxyXG5sZXQgQ2xpZW50ID0gbnVsbDtcclxucG9vbC5jb25uZWN0KChlcnIsIGNsaWVudCwgcmVsZWFzZSkgPT4ge1xyXG4gIENsaWVudCA9IGNsaWVudDtcclxufSk7XHJcblxyXG5leHBvcnQgeyBDbGllbnQgfTtcclxuIiwiaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi9VdGlscy9kYlwiO1xyXG5jb25zdCBzcWwgPSByZXF1aXJlKFwic3FsLXRlbXBsYXRlLXN0cmluZ3NcIik7XHJcblxyXG5jb25zdCBnZXRBbGxIeW1ucyA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgcmVzdWx0ID0gW107XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvb2wucXVlcnkoXCJTRUxFQ1QgKiBmcm9tIGh5bW5cIik7XHJcbiAgICByZXN1bHQgPSByZXMucm93cztcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb25zdCBhZGRIeW1uID0gYXN5bmMgKGJ5d2hvLCBuYW1lLCBudW1iZXIsIGxvZ2dlZCkgPT4ge1xyXG4gIGxldCByZXN1bHQgPSB7fTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbG9nUm93cyA9IGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgIHNxbGBcclxuICAgICAgSU5TRVJUIElOVE8gbG9nIChpZCwgbG9nZ2VkLCBieXdobylcclxuICAgICAgVkFMVUVTICgke251bWJlcn0sICR7bG9nZ2VkfSwgJHtieXdob30pXHJcbiAgICAgIFJFVFVSTklORyAqYFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgc3FsYFxyXG4gICAgICBJTlNFUlQgSU5UTyBoeW1uIChudW1iZXIsIG5hbWUpXHJcbiAgICAgIFZBTFVFUyAoJHtudW1iZXJ9LCAke25hbWV9KVxyXG4gICAgICBSRVRVUk5JTkcgKmBcclxuICAgICk7XHJcbiAgICByZXN1bHQgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBieXdobzogbG9nUm93cy5yb3dzWzBdLmJ5d2hvLFxyXG4gICAgICAgIG5hbWU6IHJvd3NbMF0ubmFtZSxcclxuICAgICAgICBudW1iZXI6IHJvd3NbMF0ubnVtYmVyLFxyXG4gICAgICAgIGxvZ2dlZDogbG9nUm93cy5yb3dzWzBdLmxvZ2dlZCxcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IGVkaXRIeW1uID0gYXN5bmMgKG51bWJlciwgbmV3TnVtYmVyLCBuZXdOYW1lKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgIHNxbGBcclxuICAgICAgVVBEQVRFIGxvZ1xyXG4gICAgICAgIFNFVCBpZCA9ICR7bmV3TnVtYmVyfVxyXG4gICAgICBXSEVSRSBpZCA9ICR7bnVtYmVyfVxyXG4gICAgICBSRVRVUk5JTkcgKmBcclxuICAgICk7XHJcbiAgICBjb25zdCB7IHJvd3MgfSA9IGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgIHNxbGBcclxuICAgICAgVVBEQVRFIGh5bW5cclxuICAgICAgICBTRVQgbnVtYmVyID0gJHtuZXdOdW1iZXJ9LCBuYW1lID0gJHtuZXdOYW1lfVxyXG4gICAgICBXSEVSRSBudW1iZXIgPSAke251bWJlcn1cclxuICAgICAgUkVUVVJOSU5HICpgXHJcbiAgICApO1xyXG4gICAgcmVzdWx0ID0gcm93cztcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBbGxMb2dzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBbXTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcG9vbC5xdWVyeShcIlNFTEVDVCAqIGZyb20gbG9nXCIpO1xyXG4gICAgcmVzdWx0ID0gcmVzLnJvd3M7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgYWRkTG9nID0gYXN5bmMgKGlkLCBieXdobywgbG9nZ2VkKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjaGVjayA9IGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgIHNxbGBcclxuICAgICAgU0VMRUNUICogZnJvbSBsb2cgV0hFUkUgaWQgPSAke2lkfSBBTkQgbG9nZ2VkID0gJHtsb2dnZWR9XHJcbiAgICAgIGBcclxuICAgICk7XHJcbiAgICBpZiAoY2hlY2sucm93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgc3FsYFxyXG4gICAgICBJTlNFUlQgSU5UTyBsb2cgKGlkLCBsb2dnZWQsIGJ5d2hvKVxyXG4gICAgICBWQUxVRVMgKCR7aWR9LCAke2xvZ2dlZH0sICR7Ynl3aG99KVxyXG4gICAgICBSRVRVUk5JTkcgKmBcclxuICAgICk7XHJcbiAgICByZXN1bHQgPSByb3dzO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBnZXRBbGxIeW1ucyxcclxuICBhZGRIeW1uLFxyXG4gIGVkaXRIeW1uLFxyXG4gIGdldEFsbExvZ3MsXHJcbiAgYWRkTG9nLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXHJcbmNvbnN0IHNxbFF1ZXJ5ID0gcmVxdWlyZShcIi4uLy4uL2RiL3Byb2NzXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaHltbnMgPSBhd2FpdCBzcWxRdWVyeS5nZXRBbGxIeW1ucygpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaHltbnMgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYnl3aG8sIG5hbWUsIG51bWJlciwgbG9nZ2VkIH0gPSBhd2FpdCByZXEuYm9keTtcclxuICAgICAgICBpZiAobmFtZSAmJiBudW1iZXIgJiYgbG9nZ2VkKSB7XHJcbiAgICAgICAgICBpZiAoYnl3aG8pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsUXVlcnkuYWRkSHltbihieXdobywgbmFtZSwgbnVtYmVyLCBsb2dnZWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24ocmVzdWx0WzBdKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNxbFF1ZXJ5LmFkZEh5bW4oXHJcbiAgICAgICAgICAgICAgXCJBbm9ueW1vdXNcIixcclxuICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgIG51bWJlcixcclxuICAgICAgICAgICAgICBsb2dnZWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHJlc3VsdFswXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bWJlciByZXF1aXJlZFwiKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgXCJQQVRDSFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgbnVtYmVyLCBuZXdOdW1iZXIsIG5ld05hbWUgfSA9IGF3YWl0IHJlcS5ib2R5O1xyXG4gICAgICAgIGlmIChudW1iZXIpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNxbFF1ZXJ5LmVkaXRIeW1uKG51bWJlciwgbmV3TnVtYmVyLCBuZXdOYW1lKTtcclxuICAgICAgICAgIHJldHVybiByZXMuanNvbihyZXN1bHRbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJudW1iZXIgcmVxdWlyZWRcIik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5zZW5kKFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIpO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3FsLXRlbXBsYXRlLXN0cmluZ3NcIik7Il0sIm5hbWVzIjpbIlBvb2wiLCJyZXF1aXJlIiwicG9vbCIsIm1heCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVNFUk5BTUUiLCJwYXNzd29yZCIsIkRBVEFCQVNFX1BBU1NXT1JEIiwiaG9zdCIsIkRBVEFCQVNFX0hPU1QiLCJkYXRhYmFzZSIsIkRBVEFCQVNFIiwicG9ydCIsIkRBVEFCQVNFX1BPUlQiLCJDbGllbnQiLCJjb25uZWN0IiwiZXJyIiwiY2xpZW50IiwicmVsZWFzZSIsInNxbCIsImdldEFsbEh5bW5zIiwicmVzdWx0IiwicmVzIiwicXVlcnkiLCJyb3dzIiwiY29uc29sZSIsImxvZyIsInN0YWNrIiwiYWRkSHltbiIsImJ5d2hvIiwibmFtZSIsIm51bWJlciIsImxvZ2dlZCIsImxvZ1Jvd3MiLCJlZGl0SHltbiIsIm5ld051bWJlciIsIm5ld05hbWUiLCJnZXRBbGxMb2dzIiwiYWRkTG9nIiwiaWQiLCJjaGVjayIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzcWxRdWVyeSIsInJlcSIsIm1ldGhvZCIsImh5bW5zIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJib2R5IiwiRXJyb3IiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==