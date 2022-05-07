import { useState, useEffect } from 'react';

const useForm = (callback, validate, setUserDetails) => {
  const [values, setValues] = useState({
    fullname: '',
    age: 0,
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    if(name === 'age'){
        setValues({
            ...values,
            [name]: parseInt(value)
        });
    } else{
        setValues({
            ...values,
            [name]: value
        });
    }
    
    
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    createUser();
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  const createUser = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "full_name": values.fullname,
        "age": values.age,
        "email": values.email,
        "password": values.password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/api/v1/users/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error)); 

    }

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;
