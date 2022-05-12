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
      const city = req.query.city;
      const dose_type = req.query.dose_type;
      const dose_company = req.query.dose_company;
      
let searchQuery = "select * from available_slot a "
                  + "inner join slot s on s.slot_id = a.slot_id "
                  + "inner join dose d on d.dose_id = a.dose_id "
                  + "where a.number_of_slots > 0 ";

if(date){
  searchQuery = searchQuery + "and CAST(s.start_time as date) = '" + date + "'";
}

if(city){
  searchQuery = searchQuery + "and s.city = ? ";
}

if(dose_type){
  searchQuery = searchQuery + "and d.dose_type = ? ";
}

if(dose_company){
  searchQuery = searchQuery + "and d.dose_company like ? ";
}

       connection.query(
         searchQuery,
         [date, city, dose_type, dose_company],
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