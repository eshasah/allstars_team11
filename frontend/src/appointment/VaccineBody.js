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



const HistoryButton = (props) => {
  return(
    <div className='vaccine-history-div'>
        <button type='submit' className="vaccine-history-btn">
            {props.text}
        </button>
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

const Timing = (props) => {
  return(
    <div className='vaccine-time'>
      <h5>{props.date}</h5>
      <h5>{props.timing}</h5>
    </div>
  )
}

const VaccineCard = (props) => {
  return(
    <div className='vaccine-card'>
        <div className='vaccine-details'>
          <Title title={props.title}/>
          <div>
            <Location address={props.address}/>
            <Timing timing={props.timing} date={props.date}/>
          </div>      
        </div>
        <BookButton text={'Book'}/>
    </div>
  )
}

export default VaccineCard;