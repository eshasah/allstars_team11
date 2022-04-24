const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "sql6.freemysqlhosting.net",
  user: "sql6413031",
  password: "EDjfV3Rl9g",
  database: "sql6413031",
  multipleStatements: true,
});

module.exports = pool;
