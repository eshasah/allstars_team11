import React, { useState } from "react";
import Header from './header';
import VaccineHistory from "../appointment/VaccineHistory";


export default function VaccinationHistory() {
  

  const [vaccineHistory, setVaccineHistory] = useState([]);

  if(vaccineHistory.length > 0){
    console.log("ok");
  }
  else{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const user_id = localStorage.getItem("user_id");

    fetch("http://localhost:5000/api/v1/history/" + user_id, requestOptions)
      .then(function(response) {
      return response.json();
    })
      .then(function(result){
        console.log(result);
        setVaccineHistory(result);
      })
      .catch(error => console.log('error', error));
  }
  


    return (
      
      <><div>
        
        <div></div>
        <Header/><br></br>
        <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
        </ul>

        <div className="carousel-inner banner" style={{ height: '200px' }}>
          <div class="d-block mx-auto" className="carousel-item active">
            <img class="d-block mx-auto" src="https://c.ndtvimg.com/2020-06/k5890kk8_covid19-vaccine-generic-reuters-650_625x300_10_June_20.jpg?im=Resize=(1230,900)" alt="Chicago" width="1100" height="600" margin="10px" />
          </div>
          <div className="carousel-item">
            <img class="d-block mx-auto" src="https://c.files.bbci.co.uk/D505/production/_115033545_gettyimages-1226314512.jpg" alt="New York" width="1100" height="600px" margin="10px" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
        <div className="text-center"><br></br>

        <h3>Vaccine History</h3>
          {
                    vaccineHistory.map(item => 
                        <VaccineHistory title={item.dose_company + " - " + item.dose_type} address={item.street + ", " + item.city + ", " + item.state + " " + item.zip_code}
                         datetime={item.start_time} place={item.place} slotData={item}/>)
                }
        </div>
        </div>

        </>
    );
}

