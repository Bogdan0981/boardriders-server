const { Pool } = require("pg");
const config = require("./config");

const pool = new Pool(config);

pool.on("connect", () => {
  console.log("Connected to the database");
});

const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};
