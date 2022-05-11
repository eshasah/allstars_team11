import React from "react";
import { Button, Modal, Dropdown } from 'react-bootstrap';
import BookAppointment from "../appointment/BookAppointment";


class Home extends React.Component {
  state = {
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
        <br></br>
        <div className="container">
        
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner banner" style={{height: '200px'}}>
                <div className="carousel-item active">
                    <div>
                        <h2 className="color-primary text-left">Second booster shot now available for some people</h2>
                        <p>The CDC now recommends a second booster shot for people over 50, those who are immune-compromised, and those who got the Johnson &amp; Johnson vaccine.</p>
                        <p><a href="https://www.cdc.gov/media/releases/2022/s0328-covid-19-boosters.html">See if you’re eligible<span class="ca-gov-icon-external-link link-icon" aria-hidden="true"></span></a>.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://c.ndtvimg.com/2020-06/k5890kk8_covid19-vaccine-generic-reuters-650_625x300_10_June_20.jpg?im=Resize=(1230,900)" alt="Chicago" width="1100" height="600" margin="10px" />
                </div>
                <div className="carousel-item">
                    <img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/02/aarogya.png?fit=1200%2C630&ssl=1" alt="New York" width="1100" height="600px" margin="10px" />
                </div>
                </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>

        </div>
        <div className="text-center"><br></br>

        <BookAppointment/>

        </div>
        </div>
        {/* 
          <button type="button" className="btn btn-info"  onClick={this.createBooking}>Book Vaccine</button>&nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-info"  onClick={this.getVaccineHistory}>Vaccine History</button><br></br><br></br>
         

          {
            this.state.isVaccineHistory ?
              <div className="container">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Dose</th>
                      <th scope="col">Vaccine Name</th>
                      <th scope="col">Reference Id</th>
                      <th scope="col">Date of Vaccination</th>
                      <th scope="col">Registered Mobile Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Covaccine</td>
                      <td>123</td>
                      <td>12/03/2022</td>
                      <td>9999999999</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Covaccine</td>
                      <td>321</td>
                      <td>12/06/2022</td>
                      <td>8888888888</td>
                    </tr>
                  </tbody>
                </table>

              </div>
              :  <div></div>
          }

          {
            this.state.isBooking ? 
            <><div>
                <input type="number" placeholder="Please Enter Pincode" className="form-contro input-fieldl" />&nbsp;&nbsp;
                <button type="button" className="btn btn-success" onClick={this.getCitiesByPincode}>Search</button>
                <br></br>
              </div><br></br></> 
            : <div></div>
          }

          {
            this.state.isCitiesAvailble ?
            <div className="container card-div">
            <div className="card">
              <div className="card-body">
                <div>
                  {this.state.getCities.map(city => {
                    return <span>&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-secondary" onClick={this.bookSlot}>{city}</button></span>;

                  })}
                </div>
              </div>
            </div>

          </div>
          : <div></div>
          }

         



        </div>
      </div>

        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Please Select Slots</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card">
              <div className="card-body">
                <div>
                  {this.state.getSlots.map(city => {
                    return <span>&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-secondary mt-1">{city}</button></span>;
                  })}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.bookNow}>
              Book Now
            </Button>
          </Modal.Footer>
        </Modal> */}

        </>
    );
  }
}

export default Home;