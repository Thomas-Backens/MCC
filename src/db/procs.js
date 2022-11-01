import { pool } from "../Utils/db";
const sql = require("sql-template-strings");

const getAllHymns = async () => {
  let result = [];
  try {
    const res = await pool.query("SELECT * from hymn");
    result = res.rows;
  } catch (err) {
    console.log(err.stack);
  }
  return result;
};

const addHymn = async (bywho, name, number, logged) => {
  let result = {};
  try {
    const logRows = await pool.query(
      sql`
      INSERT INTO log (id, logged, bywho)
      VALUES (${number}, ${logged}, ${bywho})
      RETURNING *`
    );
    const { rows } = await pool.query(
      sql`
      INSERT INTO hymn (number, name)
      VALUES (${number}, ${name})
      RETURNING *`
    );
    result = [
      {
        bywho: logRows.rows[0].bywho,
        name: rows[0].name,
        number: rows[0].number,
        logged: logRows.rows[0].logged,
      },
    ];
    console.log(result);
  } catch (err) {
    console.log(err.stack);
  }
  return result;
};

const editHymn = async (number, newNumber, newName) => {
  let result = null;
  try {
    await pool.query(
      sql`
      UPDATE log
        SET id = ${newNumber}
      WHERE id = ${number}
      RETURNING *`
    );
    const { rows } = await pool.query(
      sql`
      UPDATE hymn
        SET number = ${newNumber}, name = ${newName}
      WHERE number = ${number}
      RETURNING *`
    );
    result = rows;
  } catch (err) {
    console.log(err.stack);
  }
  return result;
};

const getAllLogs = async () => {
  let result = [];
  try {
    const res = await pool.query("SELECT * from log");
    result = res.rows;
  } catch (err) {
    console.log(err.stack);
  }
  return result;
};

const addLog = async (id, bywho, logged) => {
  let result = {};
  try {
    const check = await pool.query(
      sql`
      SELECT * from log WHERE id = ${id} AND logged = ${logged}
      `
    );
    if (check.rows.length > 0) {
      return;
    }
    const { rows } = await pool.query(
      sql`
      INSERT INTO log (id, logged, bywho)
      VALUES (${id}, ${logged}, ${bywho})
      RETURNING *`
    );
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
  addLog,
};
