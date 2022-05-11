const mysql = require("mysql");
const pool = require("./../databaseConnection");

exports.bookSlot = (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log(`Connect to database as ${connection.threadId}`);

    const params = req.body;

    connection.query("INSERT INTO slot SET ?", params, (error, rows) => {
      connection.release();

      if (!error) {
        res.status(200).send({
          status: 200,
          message: "Slot has been booked succesfully",
        });
      } else {
        console.log(error);
      }
    });
  });
};

  exports.getSlot = (req, res)=>{
    pool.getConnection((error,connection) => {
        console.log("get slot");
      if (error) throw error;
      console.log('Connection to database as ${connection.threadId}');
      
      const date = req.query.date;
      const street = req.query.street;
      const zip_code = req.query.zip_code;
      const city = req.query.city;
      const state = req.query.state;
      
       if(date==null || street==null || zip_code== null|| city==null|| state==null){
         console.log('Enter a valid value');
       }
let searchQuery = "SELECT * from appointment WHERE ";

if(date){
  searchQuery = searchQuery + "date = ";
}

       connection.query(
         "SELECT * from appointment WHERE date = ? AND street =? AND zip_code=? AND city=? AND state=?",
         [date, street, zip_code, city, state],
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