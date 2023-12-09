import React, { useState } from "react";
import "../styles/All.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.phone || !data.email || !data.password) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    axios
      .post('http://localhost:2926/api/register', data)
      .then((res) => {
        // alert(res.data.msg);
        toast.success(res.data.msg)
        

        if (res.data.msg === "User Registered successfully") {
          localStorage.setItem('token', res.data.token);
          navigate('/login');
          toast.success(res.data.msg)
        }
      })
      .catch((error) => {
        console.log(error);
        alert("User registration failed, please try again");
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
    <>
      <h1>REGISTER FORM</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="num">Phone :</label>
        <input
          type="number"
          id="num"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterCompo;
