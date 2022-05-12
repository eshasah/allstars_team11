const mysql = require("mysql");
const pool = require("./../databaseConnection");

exports.vaccineHistory = (req, res)=>{
    pool.getConnection((error,connection) => {
        console.log("get slot");
      if (error) throw error;
      console.log('Connection to database as ${connection.threadId}');
      const user_id = req.query.user_id;
      
       if(user_id==null){
         console.log('Enter a valid value');
       }
let searchQuery = "SELECT dose.dose_id, dose.dose_status, app.vaccination_center FROM Dose JOIN application app ON dose.application_id=app.application_id JOIN vaccine_recipient vacc on app.user_id = vacc.user_id where vacc.user_id = ?";
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