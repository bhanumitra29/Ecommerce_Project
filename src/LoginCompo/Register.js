import React, { useState } from "react";
import "../styles/All.css"
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";


const RegisterCompo = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
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

    // if (!data.name || !data.phone || !data.email || !data.password) {
    //   alert("Please fill in all fields before submitting.");
    //   return;
    // }

    axios
      .post('https://ecommerce-project-backend-w01h.onrender.com/user/register', data)
      .then((res) => {
        // alert(res.data.msg);
        
        

        if (res.data.msg === "User Registered successfully") {
          localStorage.setItem('token', res.data.token);
          console.log("token display",res.data.token)
          navigate('/login');
          // toast.success(res.data.msg)
          alert(res.data.msg)
        }
        else{
          alert(res.data.msg)
        }
      })
      .catch((error) => {
        console.log(error);
        // alert("User registration failed, please try again");
        // toast.remove("User registration failed, please try again")
      });

    // Clear the form data after submission
    setData({
      name: "",
      phone: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="reglogback">
      
      <form onSubmit={handleSubmit}>
      <h1 className="formheading">REGISTER FORM</h1>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange} required
        />
        <br />
        <br />
        <label htmlFor="num">Phone :</label>
        <input
          type="number"
          id="num"
          name="phone"
          value={data.phone}
          onChange={handleChange} required
        />
        <br />
        <br />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange} required
        />
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
        <button type="submit">Register</button>
      
        <div className="regdiv">
    <NavLink className='registerbutton' to="/login">Already have Account? Login Here</NavLink>
    </div>
      
      
      </form>
    </div>
  );
};

export default RegisterCompo;
