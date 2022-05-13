import React from 'react';
import '../appointment/appointment.css';
import backendServer from "../WebConfig";

const CancelButton = (props) => {
  return(
    <div className='vaccine-book-div'>
        <button type='submit' className="vaccine-book-btn" onClick={props.handleCancel}>
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
    <div className='vaccine-dose-div'>
      <h5>{props.place}</h5>
      <span>{props.address}</span>
    </div>
  )
}

const Timing = (props) => {
  return(
    <div className='vaccine-time'>
      <h5>{props.date} at {props.timing}</h5>
    </div>
  )
}

const dateFormat = (datetime) => {
    return (datetime.getMonth() + 1) + 
    "/" +  datetime.getDate() +
    "/" +  datetime.getFullYear();
}

const timeFormat = (datetime) => {
    return datetime.getHours() + 
    ":" +  datetime.getMinutes();
}

const VaccineCard = (props) => {
  const slotData = props.slotData;
  let timing = new Date(props.datetime);

  const handleCancel = () =>{
    console.log(slotData);

    const user_id = localStorage.getItem("user_id");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "slot_id": slotData.slot_id,
      "dose_id": slotData.dose_id,
      "user_id": user_id,
      "apt_status": "Cancelled"
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(backendServer + "/api/v1/slot/" + props.apt_id , requestOptions)
      .then(response => response.text())
      .then(function(result) {
        window.location.assign("/bookingConfirmation");
      })
      .catch(error => console.log('error', error));
  }
  return(
    <div className='vaccine-card'>
        <div className='vaccine-details'>
          <Title title={props.title}/>
          <div>
            <Location address={props.address} place={props.place}/>
            <Timing date={dateFormat(timing)} timing={timeFormat(timing)}/>
          </div>      
        </div>
    </div>
  )
}

export default VaccineCard;