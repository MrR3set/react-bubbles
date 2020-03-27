import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials,setCredentials] = useState({
    username:"",
    password:""
  })
  

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      
    });
  };

  const handlelogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        //history.push('/colorlist');
      })
      .catch(err => console.log(err.response));
  };
  return (
    <>
      <form onSubmit={handlelogin}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
