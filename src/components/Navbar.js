import React, { useEffect, useState } from "react";
import { BsHandbag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// import { TbBrandHexo } from 'react-icons/tb';
import "../styles/All.css"
import "../styles/Navbar.css";
import { FaStore, FaUser } from "react-icons/fa";
import SearchBar from "./SearchBar";
import axios from "axios";


function Navbar() {

    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenuOpen1, setSubMenuOpen1] = useState(false);
    const products = useSelector(state => state.navbarReducer.value); 
    const navigate = useNavigate();

    const onHover = () => {
      setSubMenuOpen(true);
    };
  
    const onLeave = () => {
      setSubMenuOpen(false);
    };

    const onHover1 = () => {
      setSubMenuOpen1(true);
    };
  
    const onLeave1 = () => {
      setSubMenuOpen1(false);
    };

    

    
    function numberOfProducts() {
        let number = 0;
        for (let i = 0; i < products.length; i++) {
            number += products[i].quantity;
        }
        return number;
    }

    

    function handleClickIcon() {
        navigate("/");
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    const HandleClickHandBag=()=> {
    
      navigate("/shoppingCart");
      window.scroll({ top: 0, behavior: 'smooth' });
        }

// const HandleAthentication=()=>{
  const token = localStorage.getItem("token");
  useEffect(() => {
if (token) {
    axios.get("http://localhost:2926/user/auth", { headers: { "authorization": `Bearer ${token}` } }) 
        .then((res) => {
            console.log(res.data);
            navigate("/login")

           
        })
        .catch(err => console.log(err))
    }
    else {
    alert("Please login to view cart page!");
    navigate("/login");
    }
  }, [token,navigate])
  


    // }

    const subMenu1 = (
      <div className="subroutes1">
      <ul>
        <li>
        <NavLink to="/login">Login</NavLink>
        </li>
        <li>
        <NavLink to="/register">SignUp</NavLink>
        </li>
      </ul>
      </div>
    )
     
    

    const subMenu = (
  <div className="subroutes">
    <div>
    <NavLink className="h4tag" to="/mobiles"><h4>Mobiles</h4></NavLink>
      <ul>
        <li>
          <NavLink to="/samsung">Samsung</NavLink>
        </li>
        <li>
          <NavLink to="/apple">Apple</NavLink>
        </li>
        <li>
          <NavLink to="/google">Google</NavLink>
        </li>
      </ul>
    </div>

    <div>
    <NavLink className="h4tag" to="/electronics"><h4>Electronics</h4></NavLink>
      <ul>
        <li>
          <NavLink to="/mouses">Mouses</NavLink>
        </li>
        <li>
          <NavLink to="/keyboard">Keyboard</NavLink>
        </li>
        <li>
          <NavLink to="/laptop">Laptop</NavLink>
        </li>
        <li>
          <NavLink to="/audio">Audio</NavLink>
        </li>
      </ul>
    </div>

    <div>
    <NavLink className="h4tag" to="/watches"><h4>Watches</h4></NavLink>
      <ul>
        <li>
          <NavLink to="/fossil">Fossil</NavLink>
        </li>
        <li>
          <NavLink to="/applew">Apple Watches</NavLink>
        </li>
        <li>
          <NavLink to="/samsungw">Samsung Watches</NavLink>
        </li>
      </ul>
    </div>

    <div>
    <NavLink className="h4tag" to="/accesories"><h4>Accessories</h4></NavLink>
      <ul>
        <li>
          <NavLink to="/charger">Chargers</NavLink>
        </li>
        <li>
          <NavLink to="/cases">Cases</NavLink>
        </li>
      </ul>
    </div>
  </div>
);


    return (
        
        <div id="navbar-container">
            {/* <div id="icon"><TbBrandHexo id="icon-in-div" onClick={handleClickIcon} /></div> */}
            <div className="NavbarLinks">
            <div className="logo" onClick={handleClickIcon}>
            <FaStore className="logo-icon" /> <span className="logo-icon logo-text">E-CART</span>
            </div>

           
            {/* <NavLink to="/" className="link" activeClassName="active-link">
            Home
            </NavLink> */}

            <div className="profile">
            <NavLink to="/all" className="link" onMouseEnter={onHover} onMouseLeave={onLeave} style={({isActive}) => ({color: isActive ? "#57A6EA" : "white"})}>
            All
            {subMenuOpen && subMenu}
            </NavLink>
            </div>


            <NavLink to="/mobiles" className="link" style={({isActive}) => ({color: isActive ? "#57A6EA" : "white"})}>
            Mobiles
            </NavLink>

            

            <NavLink to="/electronics" className="link" style={({isActive}) => ({color: isActive ? "#57A6EA" : "white"})}>
             Electronics
            </NavLink>
            <NavLink to="/watches" className="link" style={({isActive}) => ({color: isActive ? "#57A6EA" : "white"})}>
            Watches
            </NavLink>
            <NavLink to="/accesories" className="link" style={({isActive}) => ({color: isActive ? "#57A6EA" : "white"})}>
            Accesories
            </NavLink>
            
            
        <div className="search">
        <SearchBar />
        </div>

            <NavLink
              
              className="link"
              onMouseEnter={onHover1}
              onMouseLeave={onLeave1}
            >
             <FaUser /> My Profile
              {subMenuOpen1 && subMenu1}
            </NavLink>
            </div>
            
            <BsHandbag id="hand-bag" onClick={HandleClickHandBag} />
            <div id="number-of-products">{numberOfProducts()}</div>
            
        </div>
    )
};

export default Navbar;
