const mysql = require("mysql");

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "123456",
//   database: "CMPE280",
//   multipleStatements: true,
// });

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "cmpe280-1.cbfq5i2qqxdz.us-west-1.rds.amazonaws.com",
  port: "3001",
  user: "root",
  password: "pass1234",
  database: "CMPE280",
  multipleStatements: true,
});

module.exports = pool;
