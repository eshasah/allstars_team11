import React from "react";
import { Button, Modal, Dropdown } from 'react-bootstrap';
import BookAppointment from "../appointment/BookAppointment";
import VaccineCard from "../appointment/VaccineBody";
import axios from 'axios'
import Header from './header'
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

class Home extends React.Component {
  state = {
    slots:[],
    getCities: [],
    getSlots: ["11.00 - 12:00 P.M", "2.00 - 4.00 P.M", "4.00 - 6.00 P.M"],
    isOpen: false,
    isBooking: false,
    isVaccineHistory: false,
    isCitiesAvailble: false,
  }

  

  closeModal = () => this.setState({ isOpen: false });
  openModal = () => this.setState({ isOpen: true });

  bookSlot = () => this.setState({
    isOpen: true
  });

  createBooking = () => this.setState({ isBooking: true, isVaccineHistory: false });
  getVaccineHistory = () => this.setState({ isBooking: false, isVaccineHistory: true, isCitiesAvailble: false });


  handle_vaccine_history() {
    //alert("Vaccine History")
    window.location.assign('/vaccineHistory')
  }

  // componentDidMount() {
  //   const url = 'http://localhost:5000/api/v1/getAvaliableSlots'  // Vaccination History API
  //   axios.get(url).then((result) => {
  //     if (result.status == 200) {
  //       console.log(result)
  //       this.setState({
  //         slots: result.data,
  //       })
  //     }
  //   })
  // }

  bookNow = () => {
    this.setState({ isOpen: false });
    alert('Booked Successfully!!!!')
  }
  getCitiesByPincode = (event) => {
    this.setState({
      isCitiesAvailble: true,
      getCities: ["San Jose", "Fremont", "Milpitas", "Sunnyvale", "San Francisco"]
    })
  }
  render() {

    return (
      
      <><div>
        
        <div
      ></div>
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
            <img class="d-block mx-auto" src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/02/aarogya.png?fit=1200%2C630&ssl=1" alt="New York" width="1100" height="600px" margin="10px" />
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
                    <button type='submit' className="vaccine-history-btn" onClick={this.handle_vaccine_history.bind(this)}>
                        Show History
                    </button>
                </div>
            </div>
            <div>
              
                {
                    available_slots.map(item => <div> <VaccineCard title={item.title} address={item.address} date={item.date} timing={item.timing} /></div>) 
                }
            </div>

        </div>

        </div>
        </div>

        </>
    );
  }
}

export default Home;