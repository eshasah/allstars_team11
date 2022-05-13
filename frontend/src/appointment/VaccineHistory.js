import React from 'react';
import './appointment.css';

const BookButton = (props) => {
  return(
    <div className='vaccine-book-div'>
        <button type='submit' className="vaccine-book-btn">
            {props.text}
        </button>
    </div>
  )
}

const VaccineName = (props) => {
  return(
    <div className='vaccine-title'>
      <h2>{props.VaccineName}</h2>
    </div>
  )
}

const Dose = (props) => {
  return(
    <div className="vaccine-dose-div">
      <h3> DOSE - {props.Dose}</h3>
    </div>
  )
}

const Date = (props) => {
  return(
    <div className='vaccine-time'>
      <h3> Vaccination Date : {props.date}</h3>
    </div>
  )
}

const Mobile = (props) => {
    return(
      <div className='vaccine-time'>
        <h3> Mobile : {props.Mobile}</h3>
      </div>
    )
  }

const VaccineCard = (props) => {
  return(
    <div className='vaccine-card'>
        <div className='vaccine-details'>
          <VaccineName VaccineName={props.VaccineName}/>
          <div>
            <Date date={props.date}/>
          </div>   
          <div>
            <Mobile Mobile={props.Mobile}/>
          </div>  
        </div>
        <Dose Dose={props.Dose}/>
    </div>
  )
}

export default VaccineCard;