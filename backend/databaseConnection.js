const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "CMPE280",
  multipleStatements: true,
});

module.exports = pool;
