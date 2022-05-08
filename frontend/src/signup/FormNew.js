import React, { useState } from 'react';
import './signup.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import FormLogin from '../login/FormLogin';

const FormNew = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoginClicked, setLoginClicked] = useState(false);
    function submitForm(values) {
        setIsSubmitted(true);
    }
    
    
    return (
        <>
        <div className='form-container'>
            <div className='form-content-left'></div>
            {!isSubmitted && !isLoginClicked &&
            <FormSignup submitForm={submitForm} setLoginClicked={setLoginClicked}/>}
            {!isSubmitted && isLoginClicked &&
            <FormLogin submitForm={submitForm} setLoginClicked={setLoginClicked}/>}
            {isSubmitted && <FormSuccess />}
        </div>
        </>
    );
};

export default FormNew;
