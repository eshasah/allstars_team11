import React, { useState } from "react";
import Header from './header';
import VaccineHistory from "../appointment/VaccineHistory";
import backendServer from "../WebConfig";


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

    fetch(backendServer + "/api/v1/history/" + user_id, requestOptions)
      .then(function(response) {
      return response.json();
    })
      .then(function(result){
        console.log(result);
        setVaccineHistory(result);
      })
      .catch(error => console.log('error', error));
  }
  
var current_page = 1;
var obj_per_page = 3;
function totNumPages()
{
    return Math.ceil(vaccineHistory.length / obj_per_page);
}

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        change(current_page);
    }
}
function nextPage()
{
    if (current_page < totNumPages()) {
        current_page++;
        change(current_page);
    }
}
function change(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("TableList");
    var page_span = document.getElementById("page");
    if (page < 1) page = 1;
    if (page > totNumPages()) page = totNumPages();
    listing_table.innerHTML = "";
    for (var i = (page-1) * obj_per_page; i < (page * obj_per_page); i++) {
        listing_table.innerHTML += vaccineHistory[i].number + "<br>";
    }
    page_span.innerHTML = page;
    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }
    if (page == totNumPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
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
                <a href="#" id="btn_prev" onClick={prevPage}>Prev</a>&nbsp;
                <a href="#" id="btn_next" onClick={nextPage}>Next</a><br/>
                page: <span id="page">1</span>
        </div>
        </div>

        </>
    );
}

