import React, { useState } from "react";
import "../styles/All.css"
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";



const LoginCompo = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!data.email || !data.password) {
    //   alert("Please fill in all fields before submitting.");
    //   return;
    // }

    axios
      .post('https://ecommerce-project-backend-w01h.onrender.com/user/login', data)
      .then((res) => {
        // console.log(res.data)
        // alert(res.data.msg);
        

        if (res.data.msg === "User login successfully") {
          localStorage.setItem('token', res.data.token);
          alert(res.data.msg)
          navigate("/shoppingCart");
        }
        else{
          alert(res.data.msg)
        }
      })
      .catch((error) => {
        console.log(error);
        // alert("Login failed, please try again");
      });

    // Clear the form data after submission
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="reglogback">
      
      <form onSubmit={handleSubmit}>
      <h1 className="formheading">LOGIN HERE</h1>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange} required
        />
        <br />
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange} required
        />
        <br />
       
        <br />
        <button type="submit">Login</button>


        <div className="regdiv">
    <NavLink className='registerbutton' to="/register">Not Registered? Register Here</NavLink>
    </div>
      </form>
    
      
    </div>
  );
};

export default LoginCompo;
