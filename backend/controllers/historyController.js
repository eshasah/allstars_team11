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
let searchQuery = "SELECT * FROM appointment app INNER JOIN vaccine_recipient User ON app.user_id = User.user_id where app.user_id = ?";
       connection.query(
        searchQuery,
         [user_id],
          (error, row) => {
            connection.release();

            if(!error) {
              res.status(200).send(row);
            }
            else {
              console.log(error);
            }

            }
          
         );
    });
  }