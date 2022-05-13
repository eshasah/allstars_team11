import React, { useState } from "react";
import VaccineCard from "./VaccineBody";
import backendServer from "../WebConfig";

export default function BookAppointment(){

    const [isSlot, setSlot] = useState(false);

    const [availableSlots, setAvailableSlots] = useState([]);
    const [city, setCity] = useState('');
    const [doseType, setDoseType] = useState('');
    const [doseCompany, setDoseCompany] = useState('');
    const [slotDate, setSlotDate] = useState('');

    console.log("user_id: " + localStorage.getItem("user_id"));

    const searchSlots = () =>{
        console.log("city: " + city);
        console.log("type: " + doseType);
        console.log("company: " + doseCompany);
        console.log("date: " + slotDate);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(backendServer + "/api/v1/slot/?date=" + slotDate + "&city=" + city + "&dose_type=" + doseType + "&dose_company=" + doseCompany , requestOptions)
        .then(function(response) {
      return response.json();
    })
        .then(function(data) {
      //var userid = JSON.parse(data);
      console.log(data);
      setAvailableSlots(data);
      if(availableSlots.length !== 0){
          setSlot(true);
        }
        else{
            setSlot(false);
        }
      console.log(availableSlots);
      
    })
        .catch(error => console.log('error', error));
    }



    var current_page = 1;
var obj_per_page = 2;
function totNumPages()
{
    return Math.floor(availableSlots.length / obj_per_page);
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
        listing_table.innerHTML += availableSlots[i].number + "<br>";
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

    return(
        <div className="MainDashboardContainer">         
            <div className="filterDiv">
                <div className='filter-inputs'>
                    <label className='filter-label'>City: </label>
                    <select name="city" id="city-select" onChange={e=>setCity(e.target.value)}>
                        <option value="">--Please choose a City--</option>
                        <option value="San Jose">San Jose</option>
                        <option value="Sunnyvale">Sunnyvale</option>
                    </select>
                </div>
                <div className='filter-inputs'>
                    <label className='filter-label'>Dose type: </label>
                    <select name="dose" id="dose-select" onChange={e=>setDoseType(e.target.value)}>
                        <option value="">--Please choose Dose type--</option>
                        <option value="Dose - 1">Dose - 1</option>
                        <option value="Dose - 2">Dose -2</option>
                        <option value="Booster">Booster</option>
                    </select>
                </div>
                <div className='filter-inputs'>
                    <label className='filter-label'>Vaccine Type: </label>
                    <select name="vaccine" id="vaccine-select" onChange={e=>setDoseCompany(e.target.value)}>
                        <option value="">--Please choose Vaccine Type--</option>
                        <option value="Pfizer-BioNTech">Pfizer-BioNTech</option>
                        <option value="Moderna">Moderna</option>
                    </select>
                </div>
                <div className='filter-inputs'>
                    <label className='filter-label'>Date: </label>
                    <input
                        className='filter-input'
                        type='date'
                        name='apt-date'
                        onChange={e => setSlotDate(e.target.value)}
                    />
                </div>
                <div className='filter-inputs'>
                    <button type='submit' className="vaccine-book-btn" onClick={searchSlots}>
                        Search
                    </button>
                </div>
            </div>
            <div id="TableList">
                {
                    availableSlots.map(item => 
                        <VaccineCard title={item.dose_company + " - " + item.dose_type} address={item.street + ", " + item.city + ", " + item.state + " " + item.zip_code}
                         datetime={item.start_time} place={item.place} slotData={item}/>)

                }
                <a href="#" id="btn_prev" onClick={prevPage}>Prev</a>&nbsp;
                <a href="#" id="btn_next" onClick={nextPage}>Next</a><br/>
                page: <span id="page">1</span>
                {
                    isSlot && 
                    <div>
                        <h3>Modify filter to see slots</h3>
                    </div>
                }
            </div>

        </div>
        
    )
}