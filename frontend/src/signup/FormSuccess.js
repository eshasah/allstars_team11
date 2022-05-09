import React from 'react';
import './signup.css';

const FormSuccess = ({ setLoginClicked, setIsSubmitted }) => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <span className='form-success'>
          Login <a href='#' onClick={() => {
            setLoginClicked(true);
            setIsSubmitted(false);
            }}>here</a> to get started
      </span>
    </div>
  );
};

export default FormSuccess;
