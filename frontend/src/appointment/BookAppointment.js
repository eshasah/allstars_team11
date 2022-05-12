import React from "react";
import VaccineCard from "./VaccineBody";

export default function BookAppointment(){

    
    const available_slots = [
        {
            title: 'Pfizer-BioNTech - Dose 1',
            address: '344 Tully Rd, San Jose, CA 95111',
            date: '05/20/2022',
            timing: '2:00pm'
        },
        {
            title: 'Pfizer-BioNTech - Dose 2',
            address: '344 Tully Rd, San Jose, CA 95111',
            date: '05/20/2022',
            timing: '2:10pm'
        }
        ,
        {
            title: 'Moderna - Dose 1',
            address: '344 Tully Rd, San Jose, CA 95111',
            date: '05/20/2022',
            timing: '2:20pm'
        }
        ,
        {
            title: 'Moderna - Dose 2',
            address: '344 Tully Rd, San Jose, CA 95111',
            date: '05/21/2022',
            timing: '2:00pm'
        }
        ,
        {
            title: 'Pfizer-BioNTech - Dose 1',
            address: '344 Tully Rd, San Jose, CA 95111',
            date: '05/18/2022',
            timing: '1:30pm'
        }
        ,
        {
            title: 'Pfizer-BioNTech - Dose 1',
            address: '344 Tully Rd, San Jose, CA 95111',
            date: '05/20/2022',
            timing: '3:00pm'
        }
      ]
      
    return(
        <div calssName="MainDashboardContainer">         
            <div className="filterDiv">
                <div className='filter-inputs'>
                    <label className='filter-label'>City: </label>
                    <select name="city" id="city-select">
                        <option value="">--Please choose a City--</option>
                        <option value="san-jose">San Jose</option>
                        <option value="santa-clara">Santa Clara</option>
                        <option value="sunnyvale">Sunnyvale</option>
                    </select>
                </div>
                <div className='filter-inputs'>
                    <label className='filter-label'>Dose type: </label>
                    <select name="dose" id="dose-select">
                        <option value="">--Please choose Dose type--</option>
                        <option value="dose-1">Dose - 1</option>
                        <option value="dose-2">Dose -2</option>
                        <option value="booster">Booster</option>
                    </select>
                </div>
                <div className='filter-inputs'>
                    <label className='filter-label'>Date: </label>
                    <input
                        className='filter-input'
                        type='date'
                        name='apt-date'
                    />
                </div>
                <div className='filter-inputs'>
                    <button type='submit' className="vaccine-book-btn">
                        Search
                    </button>
                </div>
                <div className='filter-inputs'>
                    <button type='submit' className="vaccine-history-btn">
                        Show History
                    </button>
                </div>
            </div>
            <div>
                {
                    available_slots.map(item => <VaccineCard title={item.title} address={item.address} date={item.date} timing={item.timing}/>)
                }
            </div>

        </div>
        
    )
}
