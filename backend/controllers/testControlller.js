const mysql = require("mysql");
const pool = require("./../databaseConnection");

exports.getAllUsers = (req, res) => {
  pool.getConnection((error, connection) => {
    console.log("all users");
    if (error) {
      throw error;
    }
    console.log(`Connect to database as ${connection.threadId}`);

    connection.query("SELECT * from vaccine_recipient", (error, rows) => {
      connection.release();

      if (!error) {
        res.send(rows);
      } else {
        console.log(error);
      }
    });
  });
};
