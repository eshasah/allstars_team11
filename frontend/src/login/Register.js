import React, { useState } from "react";
//import Alert from "@material-ui/lab/Alert";
//import "react-datepicker/dist/react-datepicker.css";
import {Form, Button} from 'react-bootstrap'
export default function Registration(){
  // Axios.defaults.withCredentials = true;

  // States for registration
  const defaultValues = {
    username: "",
    dateOfBirth: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    zip_code: "",
    state: "",
    country: "",
    identificationNumber: "",
    phone: "",
    tncCheckbox: false,
    enrollMileage : false,
  };

  let [userData, setUserData] = useState(defaultValues);

  let [tncCheckbox, setTncCheckbox] = useState(false);
  const regex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

  let [message, setMessage] = useState("");
  
  const [invalid, setInvalid] = useState({
    username: false,
    dateOfBirth: false,
    password: false,
    firstName: false,
    lastName: false,
    email: false,
    street: false,
    city: false,
    zip_code: false,
    state: false,
    country: false,
    identificationNumber: false,
    phone: false,
    tncCheckbox: false,
  });
  
  
  const handleSubmit = (e) => {
    if (
      userData.username.trim() === " " ||
      userData.password.trim().length < 5 ||
      userData.firstName.trim() === "" ||
      userData.lastName.trim() === "" ||
      userData.country.trim() === "" ||
      userData.email.trim() === "" ||
      userData.dateOfBirth.trim() === "" ||
      userData.phone.trim() === ""||
      userData.identificationNumber.trim() === ""
    ) {
      setMessage("Please fill all required fields");
    } else if (
      userData.email.includes(" ") ||
      userData.password.includes(" ") 
    ) {
      setMessage("Space character not allowed in email_id and/or password");
    } else if ( userData.username.trim().length > 15 ){
      setMessage("Username cannot be more that 15 characters");
    } else if(
      userData.dateOfBirth.includes(" ")
    ) {
      setMessage("Please select a valid date");
    } else if(!(tncCheckbox)) {
      setMessage("Please accept the Terms, Conditions and Policies of our Airlines")
    } else{
        setMessage("Success!");

        debugger;
        var raw = JSON.stringify({
          "username": userData.username,
          "password": userData.password,
          "firstName": userData.firstName,
          "lastName": userData.lastName,
          "dateOfBirth": userData.dateOfBirth,
          "phone": userData.phone,
          "email": userData.email,
          "address": {
              "street": userData.street,
              "city": userData.city,
              "country": userData.country,
              "state": userData.state,
              "zip": userData.zip_code
          },
          "identificationNumber": userData.identificationNumber,
          "mileage": {
                    "balancePoints":0,
                    "miles": 0,
          },
          "role": "USER"
        })

        fetch("http://3.143.245.196:8080/api/users/register",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: raw,
            mode: 'cors'
        })
        .then(async response => {
        
          window.location.assign("/");
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
      }
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    </div>
  );
}
