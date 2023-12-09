import React, { useState } from "react";
import "../styles/All.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";


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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    axios
      .post('http://localhost:2926/api/login', data)
      .then((res) => {
        alert(res.data.msg);

        if (res.data.msg === "User login successfully") {
          localStorage.setItem('token', res.data.token);
          navigate("/shoppingCart");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Login failed, please try again");
      });

    // Clear the form data after submission
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <h1>LOGIN HERE</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <br />
        <br />
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
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginCompo;
