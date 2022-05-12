const mysql = require("mysql");
const pool = require("./../databaseConnection");

exports.bookSlot = (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log(`Connect to database as ${connection.threadId}`);

    const params = req.body;
    const slot_id = params.slot_id;
    const dose_id = params.dose_id;
    

    console.log(params);
    

    var bookSlotQuery = "INSERT INTO appointment SET ? ;";
    bookSlotQuery = bookSlotQuery + " UPDATE available_slot set number_of_slots = number_of_slots - 1 WHERE slot_id = ? and dose_id = ? ;"

    console.log(bookSlotQuery);
    
    connection.query("INSERT INTO appointment SET ?", [params, slot_id, dose_id], (error, rows) => {
      connection.release();

      if (!error) {
        res.status(200).send({
          status: 200,
          message: "Appointment has been added succesfully",
          data: rows
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
      console.log(req.params);
      console.log(req.query);
      
      const date = req.query.date;
      const city = req.query.city;
      const dose_type = req.query.dose_type;
      const dose_company = req.query.dose_company;
      
      console.log("city: " + city);
        console.log("type: " + dose_type);
        console.log("company: " + dose_company);
        console.log("date: " + date);
      
let searchQuery = "select * from available_slot a "
                  + "inner join slot s on s.slot_id = a.slot_id "
                  + "inner join dose d on d.dose_id = a.dose_id "
                  + "where a.number_of_slots > 0 ";

if(date){
  searchQuery = searchQuery + "and CAST(s.start_time as date) = ?";
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

console.log(searchQuery);
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