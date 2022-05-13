import React from "react";
import axios from 'axios'
import Header from './header'
import VaccineCard from "../appointment/VaccineHistory";
//import Sidebar from "./user_sidebar";



class VaccinationHistory extends React.Component {
  state = {
    size: 0,
    getVaccineData: [],
    header: ["Dose", "Vaccination Name", "Reference Id", "Date of Vaccination", "Registered Mobile Number"],
    vaccineHistory: [
      {"dose": "1", "vaccinationName": "Moderna", "referenceId": 1, "dateOfVaccination": "12/03/2022", "mobileNo": 678463891},
      {"dose": "2", "vaccinationName": "Pfizer-BioNTech", "referenceId": 2, "dateOfVaccination": "12/06/2022", "mobileNo": 938916784},
      {"dose": "3", "vaccinationName": "Moderna", "referenceId": 3, "dateOfVaccination": "12/09/2022", "mobileNo": 7676576788},
    ]
  }


  // componentDidMount() {
  //   const url = 'http://localhost:5000/api/v1/vaccineHistory'  // Vaccination History API
  //   const user_id = localStorage.getItem('user_id')
  //   axios.post(url, { user_id }).then((result) => {
  //     if (result.status == 200) {
  //       console.log(result)
  //       this.setState({
  //         vaccineHistory: result.data,
  //       })
  //     }
  //   })
  // }
render() {

    return (

      <><Header/> <br></br>
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
      </div><><br></br>
      
          <h1 className="text-center">Vaccination History</h1>
          <br></br>
          <h3 className="text-center"><b>This tab allows you to see the vaccination history.</b> </h3>
          <br></br><div className="container">
          <div>
                {
                    this.state.vaccineHistory.map(vaccine => 
                        <VaccineCard VaccineName={vaccine.vaccinationName} Dose={vaccine.dose} date={vaccine.dateOfVaccination} Mobile={vaccine.mobileNo}/>)
                }
            </div>

          </div></></>
    )
}

}

export default VaccinationHistory;