const mysql = require("mysql");
const pool = require("./../databaseConnection");

exports.getHistory = (req, res)=>{
    pool.getConnection((error,connection) => {
        console.log("get slot");
      if (error) throw error;
      console.log('Connection to database as ${connection.threadId}');
      const user_id = req.params.id;
      console.log(user_id);
       if(user_id==null){
         console.log('Enter a valid value');
       }
let searchQuery = "SELECT app.*, d.*, s.* FROM appointment app INNER JOIN vaccine_recipient User ON app.user_id = User.user_id INNER JOIN dose d ON d.dose_id = app.dose_id INNER JOIN slot s ON s.slot_id = app.slot_id where app.user_id = ?";
       connection.query(
        searchQuery,
         [user_id],
          (error, row) => {
            connection.release();

            if(!error) {
              res.send(row);
            }
            else {
              console.log(error);
            }

            }
          
         );
    });
  }