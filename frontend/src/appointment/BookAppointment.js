import React, { useState } from "react";
import VaccineCard from "./VaccineBody";

export default function BookAppointment(){

    // const available_slots = [
    //     {
    //         title: 'Pfizer-BioNTech - Dose 1',
    //         address: '344 Tully Rd, San Jose, CA 95111',
    //         date: '05/20/2022',
    //         timing: '2:00pm'
    //     },
    //     {
    //         title: 'Pfizer-BioNTech - Dose 2',
    //         address: '344 Tully Rd, San Jose, CA 95111',
    //         date: '05/20/2022',
    //         timing: '2:10pm'
    //     }
    //     ,
    //     {
    //         title: 'Moderna - Dose 1',
    //         address: '344 Tully Rd, San Jose, CA 95111',
    //         date: '05/20/2022',
    //         timing: '2:20pm'
    //     }
    //     ,
    //     {
    //         title: 'Moderna - Dose 2',
    //         address: '344 Tully Rd, San Jose, CA 95111',
    //         date: '05/21/2022',
    //         timing: '2:00pm'
    //     }
    //     ,
    //     {
    //         title: 'Pfizer-BioNTech - Dose 1',
    //         address: '344 Tully Rd, San Jose, CA 95111',
    //         date: '05/18/2022',
    //         timing: '1:30pm'
    //     }
    //     ,
    //     {
    //         title: 'Pfizer-BioNTech - Dose 1',
    //         address: '344 Tully Rd, San Jose, CA 95111',
    //         date: '05/20/2022',
    //         timing: '3:00pm'
    //     }
    // ]

    const [availableSlots, setAvailableSlots] = useState([]);
    const [city, setCity] = useState('');
    const [doseType, setDoseType] = useState('');
    const [doseCompany, setDoseCompany] = useState('');
    const [slotDate, setSlotDate] = useState('');

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

        fetch("http://localhost:5000/api/v1/slot/?date=" + slotDate + "&city=" + city + "&dose_type=" + doseType + "&dose_company=" + doseCompany , requestOptions)
        .then(function(response) {
      return response.json();
    })
        .then(function(data) {
      //var userid = JSON.parse(data);
      console.log(data);
      setAvailableSlots(data);
      console.log(availableSlots);
      
    })
        .catch(error => console.log('error', error));
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
            <div>
                {
                    availableSlots.map(item => 
                        <VaccineCard title={item.dose_company + " - " + item.dose_type} address={item.street + ", " + item.city + ", " + item.state + " " + item.zip_code}
                         datetime={item.start_time} place={item.place}/>)
                }
            </div>

        </div>
        
    )
}