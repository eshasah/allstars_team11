import { useState, useEffect } from 'react';

const useFormLogin = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
        ...values,
        [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    loginUser();
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  const loginUser = () => {
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

        var getURL = "http://localhost:5000/api/v1/users/" + values.email + "/" + values.password;
        fetch(getURL, requestOptions)
        .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      
            console.log(result.data[0]);
            localStorage.setItem("user_id", result.data[0].user_id);
            localStorage.setItem("isLoggedIn", true);
            window.location.assign("/home");
        })
        .catch(error => console.log('error', error));

    }

    return { handleChange, handleSubmit, values, errors };
};

export default useFormLogin;
