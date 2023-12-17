// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import "../styles/All.css"

const LoginButton = () => {
    const [loginout, setloginout] = useState(true);
    const navigate = useNavigate();
    // const token = localStorage.getItem("token");
  // console.log(token)
 
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setloginout(false)
    }
    else{
      setloginout(true)
    }
},[])

const seelogout=()=>{
    setloginout(true)
    localStorage.removeItem("value");
    localStorage.removeItem("token");
    navigate('/')
    window.location.reload(false);
}


  return (
    <div>
      {loginout ? <div>
                
                <button className='loginbutton'><NavLink className='loginout' to="/login"><FaSignInAlt />Login</NavLink></button>
                </div>
              : 
              <div>
                  <button className='loginbutton'><NavLink className='loginout' to="/" onClick={seelogout} ><FaSignOutAlt/>Logout</NavLink></button>
              </div>}
    </div>
  )
}

export default LoginButton
