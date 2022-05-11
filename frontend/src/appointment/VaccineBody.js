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

const Image = (props) => {
  return(
    <img src={props.image} alt="Logo" className="picture">
    </img>
  )
}

const Handle = (props) => {
  return(
    <div className="handle">
      {props.handle}
    </div>
  )
}

const Title = (props) => {
  return(
    <div className='vaccine-title'>
      <h2>{props.title}</h2>
    </div>
  )
}

const Location = (props) => {
  return(
    <div className="vaccine-location">
      <span>{props.address}</span>
    </div>
  )
}

const VaccineCard = (props) => {
    const location = '1 Washington Sq, San Jose'
  return(
    <div className='vaccine-card'>
        <Title title={props.title}/>
        <Location address={props.address}/>
        <BookButton text={'Book'}/>
    </div>
  )
}

export default VaccineCard;