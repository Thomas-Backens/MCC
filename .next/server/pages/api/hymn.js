"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pool\": () => (/* binding */ pool),\n/* harmony export */   \"Client\": () => (/* binding */ Client)\n/* harmony export */ });\nconst {\n  Pool\n} = __webpack_require__(/*! pg */ \"pg\");\n\nconst pool = new Pool({\n  max: 20,\n  user: process.env.DATABASE_USERNAME,\n  password: process.env.DATABASE_PASSWORD,\n  host: process.env.DATABASE_HOST,\n  database: process.env.DATABASE,\n  port: process.env.DATABASE_PORT\n});\nlet Client = null;\npool.connect((err, client, release) => {\n  Client = client;\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbHMvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNO0FBQUVBLEVBQUFBO0FBQUYsSUFBV0MsbUJBQU8sQ0FBQyxjQUFELENBQXhCOztBQUVPLE1BQU1DLElBQUksR0FBRyxJQUFJRixJQUFKLENBQVM7QUFDM0JHLEVBQUFBLEdBQUcsRUFBRSxFQURzQjtBQUUzQkMsRUFBQUEsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBRlM7QUFHM0JDLEVBQUFBLFFBQVEsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGlCQUhLO0FBSTNCQyxFQUFBQSxJQUFJLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxhQUpTO0FBSzNCQyxFQUFBQSxRQUFRLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxRQUxLO0FBTTNCQyxFQUFBQSxJQUFJLEVBQUVULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUztBQU5TLENBQVQsQ0FBYjtBQVNQLElBQUlDLE1BQU0sR0FBRyxJQUFiO0FBQ0FkLElBQUksQ0FBQ2UsT0FBTCxDQUFhLENBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFjQyxPQUFkLEtBQTBCO0FBQ3JDSixFQUFBQSxNQUFNLEdBQUdHLE1BQVQ7QUFDRCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWNjLy4vc3JjL1V0aWxzL2RiLmpzPzIxNmIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBQb29sIH0gPSByZXF1aXJlKFwicGdcIik7XG5cbmV4cG9ydCBjb25zdCBwb29sID0gbmV3IFBvb2woe1xuICBtYXg6IDIwLFxuICB1c2VyOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VU0VSTkFNRSxcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BBU1NXT1JELFxuICBob3N0OiBwcm9jZXNzLmVudi5EQVRBQkFTRV9IT1NULFxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0UsXG4gIHBvcnQ6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1BPUlQsXG59KTtcblxubGV0IENsaWVudCA9IG51bGw7XG5wb29sLmNvbm5lY3QoKGVyciwgY2xpZW50LCByZWxlYXNlKSA9PiB7XG4gIENsaWVudCA9IGNsaWVudDtcbn0pO1xuXG5leHBvcnQgeyBDbGllbnQgfTtcbiJdLCJuYW1lcyI6WyJQb29sIiwicmVxdWlyZSIsInBvb2wiLCJtYXgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VTRVJOQU1FIiwicGFzc3dvcmQiLCJEQVRBQkFTRV9QQVNTV09SRCIsImhvc3QiLCJEQVRBQkFTRV9IT1NUIiwiZGF0YWJhc2UiLCJEQVRBQkFTRSIsInBvcnQiLCJEQVRBQkFTRV9QT1JUIiwiQ2xpZW50IiwiY29ubmVjdCIsImVyciIsImNsaWVudCIsInJlbGVhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utils/db.js\n");

/***/ }),

/***/ "./src/db/procs.js":
/*!*************************!*\
  !*** ./src/db/procs.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _db = __webpack_require__(/*! ../Utils/db */ \"./src/Utils/db.js\");\n\nconst sql = __webpack_require__(/*! sql-template-strings */ \"sql-template-strings\");\n\nconst getAllHymns = async () => {\n  let result = [];\n\n  try {\n    const res = await _db.pool.query(\"SELECT * from hymn\");\n    result = res.rows;\n  } catch (err) {\n    console.log(err.stack);\n  }\n\n  return result;\n};\n\nconst addHymn = async (bywho, name, number, logged) => {\n  let result = {};\n\n  try {\n    const logRows = await _db.pool.query(sql`\n      INSERT INTO log (id, logged, bywho)\n      VALUES (${number}, ${logged}, ${bywho})\n      RETURNING *`);\n    const {\n      rows\n    } = await _db.pool.query(sql`\n      INSERT INTO hymn (number, name)\n      VALUES (${number}, ${name})\n      RETURNING *`);\n    result = [{\n      bywho: logRows.rows[0].bywho,\n      name: rows[0].name,\n      number: rows[0].number,\n      logged: logRows.rows[0].logged\n    }];\n    console.log(result);\n  } catch (err) {\n    console.log(err.stack);\n  }\n\n  return result;\n};\n\nconst editHymn = async (number, newNumber, newName) => {\n  let result = null;\n\n  try {\n    await _db.pool.query(sql`\n      UPDATE log\n        SET id = ${newNumber}\n      WHERE id = ${number}\n      RETURNING *`);\n    const {\n      rows\n    } = await _db.pool.query(sql`\n      UPDATE hymn\n        SET number = ${newNumber}, name = ${newName}\n      WHERE number = ${number}\n      RETURNING *`);\n    result = rows; // result = [\n    //   {\n    //     name: rows[0].name,\n    //     number: rows[0].number,\n    //     logs: logRows,\n    //   },\n    // ];\n  } catch (err) {\n    console.log(err.stack);\n  }\n\n  return result;\n};\n\nconst getAllLogs = async () => {\n  let result = [];\n\n  try {\n    const res = await _db.pool.query(\"SELECT * from log\");\n    result = res.rows;\n  } catch (err) {\n    console.log(err.stack);\n  }\n\n  return result;\n};\n\nconst addLog = async (id, bywho, logged) => {\n  let result = {};\n\n  try {\n    const {\n      rows\n    } = await _db.pool.query(sql`\n      INSERT INTO log (id, logged, bywho)\n      VALUES (${id}, ${logged}, ${bywho})\n      RETURNING *`);\n    result = rows;\n    console.log(result);\n  } catch (err) {\n    console.log(err.stack);\n  }\n\n  return result;\n};\n\nmodule.exports = {\n  getAllHymns,\n  addHymn,\n  editHymn,\n  getAllLogs,\n  addLog\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sR0FBR0MsR0FBRyxDQUFDRyxJQUFiO0FBQ0QsR0FIRCxDQUdFLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxLQUFoQjtBQUNEOztBQUNELFNBQU9SLE1BQVA7QUFDRCxDQVREOztBQVdBLE1BQU1tQixNQUFNLEdBQUcsT0FBT0MsRUFBUCxFQUFXVixLQUFYLEVBQWtCRyxNQUFsQixLQUE2QjtBQUMxQyxNQUFJYixNQUFNLEdBQUcsRUFBYjs7QUFDQSxNQUFJO0FBQ0YsVUFBTTtBQUFFSSxNQUFBQTtBQUFGLFFBQVcsTUFBTUYsU0FBS0MsS0FBTCxDQUNyQk4sR0FBSTtBQUNWO0FBQ0EsZ0JBQWdCdUIsRUFBRyxLQUFJUCxNQUFPLEtBQUlILEtBQU07QUFDeEMsa0JBSjJCLENBQXZCO0FBTUFWLElBQUFBLE1BQU0sR0FBR0ksSUFBVDtBQUNBRSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsTUFBWjtBQUNELEdBVEQsQ0FTRSxPQUFPSyxHQUFQLEVBQVk7QUFDWkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csS0FBaEI7QUFDRDs7QUFDRCxTQUFPUixNQUFQO0FBQ0QsQ0FmRDs7QUFpQkFxQixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZnZCLEVBQUFBLFdBRGU7QUFFZlUsRUFBQUEsT0FGZTtBQUdmTSxFQUFBQSxRQUhlO0FBSWZHLEVBQUFBLFVBSmU7QUFLZkMsRUFBQUE7QUFMZSxDQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL21jYy8uL3NyYy9kYi9wcm9jcy5qcz9jYTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvb2wgfSBmcm9tIFwiLi4vVXRpbHMvZGJcIjtcbmNvbnN0IHNxbCA9IHJlcXVpcmUoXCJzcWwtdGVtcGxhdGUtc3RyaW5nc1wiKTtcblxuY29uc3QgZ2V0QWxsSHltbnMgPSBhc3luYyAoKSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBwb29sLnF1ZXJ5KFwiU0VMRUNUICogZnJvbSBoeW1uXCIpO1xuICAgIHJlc3VsdCA9IHJlcy5yb3dzO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBhZGRIeW1uID0gYXN5bmMgKGJ5d2hvLCBuYW1lLCBudW1iZXIsIGxvZ2dlZCkgPT4ge1xuICBsZXQgcmVzdWx0ID0ge307XG4gIHRyeSB7XG4gICAgY29uc3QgbG9nUm93cyA9IGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBzcWxgXG4gICAgICBJTlNFUlQgSU5UTyBsb2cgKGlkLCBsb2dnZWQsIGJ5d2hvKVxuICAgICAgVkFMVUVTICgke251bWJlcn0sICR7bG9nZ2VkfSwgJHtieXdob30pXG4gICAgICBSRVRVUk5JTkcgKmBcbiAgICApO1xuICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgIHNxbGBcbiAgICAgIElOU0VSVCBJTlRPIGh5bW4gKG51bWJlciwgbmFtZSlcbiAgICAgIFZBTFVFUyAoJHtudW1iZXJ9LCAke25hbWV9KVxuICAgICAgUkVUVVJOSU5HICpgXG4gICAgKTtcbiAgICByZXN1bHQgPSBbXG4gICAgICB7XG4gICAgICAgIGJ5d2hvOiBsb2dSb3dzLnJvd3NbMF0uYnl3aG8sXG4gICAgICAgIG5hbWU6IHJvd3NbMF0ubmFtZSxcbiAgICAgICAgbnVtYmVyOiByb3dzWzBdLm51bWJlcixcbiAgICAgICAgbG9nZ2VkOiBsb2dSb3dzLnJvd3NbMF0ubG9nZ2VkLFxuICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGVkaXRIeW1uID0gYXN5bmMgKG51bWJlciwgbmV3TnVtYmVyLCBuZXdOYW1lKSA9PiB7XG4gIGxldCByZXN1bHQgPSBudWxsO1xuICB0cnkge1xuICAgIGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBzcWxgXG4gICAgICBVUERBVEUgbG9nXG4gICAgICAgIFNFVCBpZCA9ICR7bmV3TnVtYmVyfVxuICAgICAgV0hFUkUgaWQgPSAke251bWJlcn1cbiAgICAgIFJFVFVSTklORyAqYFxuICAgICk7XG4gICAgY29uc3QgeyByb3dzIH0gPSBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgICAgc3FsYFxuICAgICAgVVBEQVRFIGh5bW5cbiAgICAgICAgU0VUIG51bWJlciA9ICR7bmV3TnVtYmVyfSwgbmFtZSA9ICR7bmV3TmFtZX1cbiAgICAgIFdIRVJFIG51bWJlciA9ICR7bnVtYmVyfVxuICAgICAgUkVUVVJOSU5HICpgXG4gICAgKTtcbiAgICByZXN1bHQgPSByb3dzO1xuICAgIC8vIHJlc3VsdCA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgbmFtZTogcm93c1swXS5uYW1lLFxuICAgIC8vICAgICBudW1iZXI6IHJvd3NbMF0ubnVtYmVyLFxuICAgIC8vICAgICBsb2dzOiBsb2dSb3dzLFxuICAgIC8vICAgfSxcbiAgICAvLyBdO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRBbGxMb2dzID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcG9vbC5xdWVyeShcIlNFTEVDVCAqIGZyb20gbG9nXCIpO1xuICAgIHJlc3VsdCA9IHJlcy5yb3dzO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBhZGRMb2cgPSBhc3luYyAoaWQsIGJ5d2hvLCBsb2dnZWQpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHt9O1xuICB0cnkge1xuICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeShcbiAgICAgIHNxbGBcbiAgICAgIElOU0VSVCBJTlRPIGxvZyAoaWQsIGxvZ2dlZCwgYnl3aG8pXG4gICAgICBWQUxVRVMgKCR7aWR9LCAke2xvZ2dlZH0sICR7Ynl3aG99KVxuICAgICAgUkVUVVJOSU5HICpgXG4gICAgKTtcbiAgICByZXN1bHQgPSByb3dzO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRBbGxIeW1ucyxcbiAgYWRkSHltbixcbiAgZWRpdEh5bW4sXG4gIGdldEFsbExvZ3MsXG4gIGFkZExvZyxcbn07XG4iXSwibmFtZXMiOlsic3FsIiwicmVxdWlyZSIsImdldEFsbEh5bW5zIiwicmVzdWx0IiwicmVzIiwicG9vbCIsInF1ZXJ5Iiwicm93cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsImFkZEh5bW4iLCJieXdobyIsIm5hbWUiLCJudW1iZXIiLCJsb2dnZWQiLCJsb2dSb3dzIiwiZWRpdEh5bW4iLCJuZXdOdW1iZXIiLCJuZXdOYW1lIiwiZ2V0QWxsTG9ncyIsImFkZExvZyIsImlkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/db/procs.js\n");

/***/ }),

/***/ "./src/pages/api/hymn.js":
/*!*******************************!*\
  !*** ./src/pages/api/hymn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable import/no-anonymous-default-export */\nconst sqlQuery = __webpack_require__(/*! ../../db/procs */ \"./src/db/procs.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  switch (req.method) {\n    case \"GET\":\n      try {\n        const hymns = await sqlQuery.getAllHymns();\n        res.status(200).json({\n          hymns\n        });\n        break;\n      } catch (err) {\n        return res.status(500).json({\n          message: err.message\n        });\n      }\n\n    case \"POST\":\n      try {\n        const {\n          bywho,\n          name,\n          number,\n          logged\n        } = await req.body;\n\n        if (bywho && name && number && logged) {\n          const result = await sqlQuery.addHymn(bywho, name, number, logged);\n          return res.json(result[0]);\n        }\n\n        throw new Error(\"number required\");\n      } catch (err) {\n        return res.status(500).json({\n          message: err.message\n        });\n      }\n\n    case \"PATCH\":\n      try {\n        const {\n          number,\n          newNumber,\n          newName\n        } = await req.body;\n\n        if (number) {\n          const result = await sqlQuery.editHymn(number, newNumber, newName);\n          return res.json(result[0]);\n        }\n\n        throw new Error(\"number required\");\n      } catch (err) {\n        return res.status(500).json({\n          message: err.message\n        });\n      }\n\n    default:\n      return res.status(405).send(\"Method Not Allowed\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2h5bW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsTUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLHlDQUFELENBQXhCOztBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxVQUFRRCxHQUFHLENBQUNFLE1BQVo7QUFDRSxTQUFLLEtBQUw7QUFDRSxVQUFJO0FBQ0YsY0FBTUMsS0FBSyxHQUFHLE1BQU1MLFFBQVEsQ0FBQ00sV0FBVCxFQUFwQjtBQUNBSCxRQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFSCxVQUFBQTtBQUFGLFNBQXJCO0FBQ0E7QUFDRCxPQUpELENBSUUsT0FBT0ksR0FBUCxFQUFZO0FBQ1osZUFBT04sR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUUsVUFBQUEsT0FBTyxFQUFFRCxHQUFHLENBQUNDO0FBQWYsU0FBckIsQ0FBUDtBQUNEOztBQUNILFNBQUssTUFBTDtBQUNFLFVBQUk7QUFDRixjQUFNO0FBQUVDLFVBQUFBLEtBQUY7QUFBU0MsVUFBQUEsSUFBVDtBQUFlQyxVQUFBQSxNQUFmO0FBQXVCQyxVQUFBQTtBQUF2QixZQUFrQyxNQUFNWixHQUFHLENBQUNhLElBQWxEOztBQUNBLFlBQUlKLEtBQUssSUFBSUMsSUFBVCxJQUFpQkMsTUFBakIsSUFBMkJDLE1BQS9CLEVBQXVDO0FBQ3JDLGdCQUFNRSxNQUFNLEdBQUcsTUFBTWhCLFFBQVEsQ0FBQ2lCLE9BQVQsQ0FBaUJOLEtBQWpCLEVBQXdCQyxJQUF4QixFQUE4QkMsTUFBOUIsRUFBc0NDLE1BQXRDLENBQXJCO0FBQ0EsaUJBQU9YLEdBQUcsQ0FBQ0ssSUFBSixDQUFTUSxNQUFNLENBQUMsQ0FBRCxDQUFmLENBQVA7QUFDRDs7QUFDRCxjQUFNLElBQUlFLEtBQUosQ0FBVSxpQkFBVixDQUFOO0FBQ0QsT0FQRCxDQU9FLE9BQU9ULEdBQVAsRUFBWTtBQUNaLGVBQU9OLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVFLFVBQUFBLE9BQU8sRUFBRUQsR0FBRyxDQUFDQztBQUFmLFNBQXJCLENBQVA7QUFDRDs7QUFDSCxTQUFLLE9BQUw7QUFDRSxVQUFJO0FBQ0YsY0FBTTtBQUFFRyxVQUFBQSxNQUFGO0FBQVVNLFVBQUFBLFNBQVY7QUFBcUJDLFVBQUFBO0FBQXJCLFlBQWlDLE1BQU1sQixHQUFHLENBQUNhLElBQWpEOztBQUNBLFlBQUlGLE1BQUosRUFBWTtBQUNWLGdCQUFNRyxNQUFNLEdBQUcsTUFBTWhCLFFBQVEsQ0FBQ3FCLFFBQVQsQ0FBa0JSLE1BQWxCLEVBQTBCTSxTQUExQixFQUFxQ0MsT0FBckMsQ0FBckI7QUFDQSxpQkFBT2pCLEdBQUcsQ0FBQ0ssSUFBSixDQUFTUSxNQUFNLENBQUMsQ0FBRCxDQUFmLENBQVA7QUFDRDs7QUFDRCxjQUFNLElBQUlFLEtBQUosQ0FBVSxpQkFBVixDQUFOO0FBQ0QsT0FQRCxDQU9FLE9BQU9ULEdBQVAsRUFBWTtBQUNaLGVBQU9OLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVFLFVBQUFBLE9BQU8sRUFBRUQsR0FBRyxDQUFDQztBQUFmLFNBQXJCLENBQVA7QUFDRDs7QUFFSDtBQUNFLGFBQU9QLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JlLElBQWhCLENBQXFCLG9CQUFyQixDQUFQO0FBakNKO0FBbUNELENBcENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWNjLy4vc3JjL3BhZ2VzL2FwaS9oeW1uLmpzPzQ0NzUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydCAqL1xuY29uc3Qgc3FsUXVlcnkgPSByZXF1aXJlKFwiLi4vLi4vZGIvcHJvY3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoeW1ucyA9IGF3YWl0IHNxbFF1ZXJ5LmdldEFsbEh5bW5zKCk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaHltbnMgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgfVxuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGJ5d2hvLCBuYW1lLCBudW1iZXIsIGxvZ2dlZCB9ID0gYXdhaXQgcmVxLmJvZHk7XG4gICAgICAgIGlmIChieXdobyAmJiBuYW1lICYmIG51bWJlciAmJiBsb2dnZWQpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWxRdWVyeS5hZGRIeW1uKGJ5d2hvLCBuYW1lLCBudW1iZXIsIGxvZ2dlZCk7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHJlc3VsdFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibnVtYmVyIHJlcXVpcmVkXCIpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgfVxuICAgIGNhc2UgXCJQQVRDSFwiOlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBudW1iZXIsIG5ld051bWJlciwgbmV3TmFtZSB9ID0gYXdhaXQgcmVxLmJvZHk7XG4gICAgICAgIGlmIChudW1iZXIpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWxRdWVyeS5lZGl0SHltbihudW1iZXIsIG5ld051bWJlciwgbmV3TmFtZSk7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHJlc3VsdFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibnVtYmVyIHJlcXVpcmVkXCIpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuc2VuZChcIk1ldGhvZCBOb3QgQWxsb3dlZFwiKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJzcWxRdWVyeSIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJoeW1ucyIsImdldEFsbEh5bW5zIiwic3RhdHVzIiwianNvbiIsImVyciIsIm1lc3NhZ2UiLCJieXdobyIsIm5hbWUiLCJudW1iZXIiLCJsb2dnZWQiLCJib2R5IiwicmVzdWx0IiwiYWRkSHltbiIsIkVycm9yIiwibmV3TnVtYmVyIiwibmV3TmFtZSIsImVkaXRIeW1uIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/hymn.js\n");

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