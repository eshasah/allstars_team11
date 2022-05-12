import React from "react";
import axios from 'axios'
import Header from './header'
//import Sidebar from "./user_sidebar";
class VaccinationHistory extends React.Component {
  state = {
    size: 0,
    getVaccineData: [],
    header: ["Dose", "Vaccination Name", "Reference Id", "Date of Vaccination", "Registered Mobile Number"],
    vaccineHistory: [
      {"dose": "1", "vaccinationName": "Covaccine", "referenceId": 1, "dateOfVaccination": "12/03/2022", "mobileNo": 9999999999},
      {"dose": "2", "vaccinationName": "Covaccine", "referenceId": 2, "dateOfVaccination": "12/06/2022", "mobileNo": 9999999999},
      {"dose": "4", "vaccinationName": "Covaccine", "referenceId": 3, "dateOfVaccination": "12/09/2022", "mobileNo": 9999999999},
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
            <img class="d-block mx-auto" src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/02/aarogya.png?fit=1200%2C630&ssl=1" alt="New York" width="1100" height="600px" margin="10px" />
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
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  {this.state.header.map(head => {
                    return <th scope="col">{head}</th>;
                  })}
                </tr>
              </thead>
              <tbody>

              <>
              { this.state.vaccineHistory.length > 0 ?
              <>{this.state.vaccineHistory.map(vaccine => {
                return (
                  <tr>
                  <td>{vaccine.dose}</td>
                  <td>{vaccine.vaccinationName}</td>
                  <td>{vaccine.referenceId}</td>
                  <td>{vaccine.dateOfVaccination}</td>
                  <td>{vaccine.mobileNo}</td>
                </tr>
                );
            
            })}</>
              : 
                      <div style={{display: 'flex',  testAlign:'center', alignSelf:'center'}}>
            <h1>There is no Vaccine History for you !! </h1>
        </div>
              }
            </>
                
              </tbody>
            </table>

          </div></></>
    )
}

}

export default VaccinationHistory;