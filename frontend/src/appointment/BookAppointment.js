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
                        <option value="Johnson &amp; Johnson">Johnson &amp; Johnson</option>
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
                        <VaccineCard title={item.title} address={item.address} date={item.date} timing={item.timing} place={item.place}/>)
                }
            </div>

        </div>
        
    )
}