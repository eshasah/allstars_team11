import React from 'react';
import validateLogin from './validateLogin';
import useFormLogin from '../login/useFormLogin';
import '../signup//signup.css';

const FormLogin = ({ submitForm, setLoginClicked }) => {
  const { handleChange, handleSubmit, values, errors } = useFormLogin(
    submitForm,
    validateLogin
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Login using below details.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Log in
        </button>
        <span className='form-input-login'>
          Don't have an account? Signup <a href='#' onClick={() => setLoginClicked(false)}>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;
