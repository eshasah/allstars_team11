const mysql = require("mysql");
//const { param } = require("../app");
const pool = require("./../databaseConnection");

exports.getUserByEmailAndPass = (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) {
      console.log("user by email and pass");
      throw error;
    }
    console.log(`Connect to database as ${connection.threadId}`);

    console.log(req.params);
    const email = req.params.email;
    const password = req.params.password;

    connection.query(
      "SELECT * from vaccine_recipient WHERE email = ? AND password = ?",
      [email, password],
      (error, row) => {
        connection.release();

        if (!error) {
          res.status(200).send(row);
        } else {
          res.status(400).send({
            status: 'fail',
            message: 'User does not exist!'
          });
        }
      } 
    );
  });
};

exports.getAllUsers = (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) {
      console.log("all users");
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

exports.getUserById = (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log(`Connect to database as ${connection.threadId}`);

    connection.query(
      "SELECT * from vaccine_recipient WHERE user_id = ?",
      [req.params.id],
      (error, rows) => {
        connection.release();

        if (!error) {
          res.status(200).send({ status: 200, result: rows });
        } else {
          console.log(error);
        }
      }
    );
  });
};

exports.deleteUser = (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log(`Connect to database as ${connection.threadId}`);

    connection.query(
      "DELETE from vaccine_recipient WHERE user_id = ?",
      [req.params.id],
      (error, rows) => {
        connection.release();

        if (!error) {
          res.status(200).send({
            status: 200,
            message: "User has been removed succesfully",
          });
        } else {
          console.log(error);
        }
      }
    );
  });
};

exports.createUser = (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log(`Connect to database as ${connection.threadId}`);

    const params = req.body;
    console.log(params);
    connection.query("INSERT INTO vaccine_recipient SET ?", params, (error, rows) => {
      connection.release();

      if (!error) {
        res.status(200).send({
          status: 200,
          message: "User has been added succesfully",
        });
      } else {
        console.log(error);
      }
    });
  });
};

exports.updateUser = (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log(`Connect to database as ${connection.threadId}`);

    const {
      user_id,
      name,
      email,
      password,
      phone_no,
      nid,
      age,
      location,
      occupation,
    } = req.body;

    connection.query(
      "UPDATE vaccine_recipient SET name = ?, email = ?, password = ?, phone_no = ?, nid = ?, age = ?, location = ?, occupation = ? WHERE user_id = ?",
      [
        name,
        email,
        password,
        phone_no,
        nid,
        age,
        location,
        occupation,
        user_id,
      ],

      (error, rows) => {
        connection.release();

        if (!error) {
          res.status(200).send({
            status: 200,
            message: "User has been updated succesfully",
          });
        } else {
          console.log(error);
        }
      }
    );
  });
};
