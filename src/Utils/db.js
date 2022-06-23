const { Pool } = require("pg");

export const pool = new Pool({
  max: 20,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
});

let Client = null;
pool.connect((err, client, release) => {
  Client = client;
});

export { Client };
