import React from "react";
import Header from '../common/header';
import Confirmation from '../appointment/Confirmation';

class BookingConfirmation extends React.Component {
  render() {

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
          <Confirmation/>
        </div>
        </div>

        </>
    );
  }
}

export default BookingConfirmation;