import React, { useState } from 'react';
import './login.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const FormNew = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
    const defaultValues = {
    fullname: "",
    email: "",
    password: "",
    street: "",
    city: "",
    zip_code: "",
    state: "",
    phone_no: ""
  };

  let [userData, setUserData] = useState(defaultValues);


  function submitForm() {


    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} setUserData={setUserData}/>
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default FormNew;
