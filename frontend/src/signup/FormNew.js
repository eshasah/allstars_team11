import React, { useState } from 'react';
import './signup.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import FormLogin from '../login/FormLogin';

const FormNew = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
        
    function submitForm(values) {
        setIsSubmitted(true);
    }
    
    return (
        <>
        <div className='form-container'>
            <div className='form-content-left'>
            <img className='form-img' src='img/img-2.svg' alt='spaceship' />
            </div>
            {!isSubmitted ? (
            <FormLogin submitForm={submitForm}/>
            ) : (
            <FormSuccess />
            )}
        </div>
        </>
    );
};

export default FormNew;
