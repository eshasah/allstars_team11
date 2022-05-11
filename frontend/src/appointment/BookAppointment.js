import React from "react";
import VaccineCard from "./VaccineBody";

export default function BookAppointment(){

    const available_slots = [
        {
            title: 'Pfizer-BioNTech - Dose 1',
            address: '344 Tully Rd, San Jose, CA 95111'
        },
        {
            title: 'Pfizer-BioNTech - Dose 2',
            address: '344 Tully Rd, San Jose, CA 95111'
        }
        ,
        {
            title: 'Moderna - Dose 1',
            address: '344 Tully Rd, San Jose, CA 95111'
        }
        ,
        {
            title: 'Moderna - Dose 2',
            address: '344 Tully Rd, San Jose, CA 95111'
        }
        ,
        {
            title: 'Pfizer-BioNTech - Dose 1',
            address: '344 Tully Rd, San Jose, CA 95111'
        }
        ,
        {
            title: 'Pfizer-BioNTech - Dose 1',
            address: '344 Tully Rd, San Jose, CA 95111'
        }
    ]

    return(
        <div calssName="MainDashboardContainer">         
            <div className="filterDiv">
                <div className='filter-inputs'>
                    <label className='filter-label'>City: </label>
                    <select name="city" id="city-select">
                        <option value="">--Please choose a City--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select>
                </div>
                <div className='filter-inputs'>
                    <label className='filter-label'>Zip code: </label>
                    <input
                        className='filter-input'
                        type='text'
                        name='zip-code'
                        placeholder='Enter a zip code'
                        // value={values.email}
                        // onChange={handleChange}
                    />
                </div>
                <div className='filter-inputs'>
                    <label className='filter-label'>Date: </label>
                    <input
                        className='filter-input'
                        type='date'
                        name='apt-date'
                        // placeholder='Enter your password'
                        // value={values.password}
                        // onChange={handleChange}
                    />
                </div>
                <div className='filter-inputs'>
                    <button type='submit' className="vaccine-book-btn">
                        Search
                    </button>
                </div>
            </div>
            <div>
                {
                    available_slots.map(item => <VaccineCard title={item.title} address={item.address}/>)
                }
            </div>

        </div>
        
    )
}