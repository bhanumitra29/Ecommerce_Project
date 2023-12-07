import React, { useState } from "react";
import { BsHandbag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// import { TbBrandHexo } from 'react-icons/tb';
import "../styles/All.css"
import "../styles/Navbar.css";
import { FaStore, FaUser } from "react-icons/fa";
import SearchBar from "./SearchBar";


function Navbar() {

    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const onHover = () => {
      setSubMenuOpen(true);
    };
  
    const onLeave = () => {
      setSubMenuOpen(false);
    };

    const products = useSelector(state => state.navbarReducer.value); 

    
    function numberOfProducts() {
        let number = 0;
        for (let i = 0; i < products.length; i++) {
            number += products[i].quantity;
        }
        return number;
    }

    const navigate = useNavigate();

    function handleClickIcon() {
        navigate("/");
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    function handleClickHandBag() {
        navigate("/shoppingCart");
        window.scroll({ top: 0, behavior: 'smooth' });
    }



    const subMenu = (
        <ul className="sub-menu1">
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
            <NavLink to="/all" className="link" style={({isActive}) => ({color: isActive ? "#57A6EA" : "white"})}>
            All
            </NavLink>

            <div className="profile">
            <NavLink to="/mobiles" className="link" onMouseEnter={onHover} onMouseLeave={onLeave} style={({isActive}) => ({color: isActive ? "#57A6EA" : "white"})}>
            Mobiles
            {subMenuOpen && subMenu}
            </NavLink>
            </div>

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
              to="/register"
              className="link"
            //   onMouseEnter={onHover}
            //   onMouseLeave={onLeave}
            >
             <FaUser /> My Profile
              {/* {subMenuOpen && subMenu} */}
            </NavLink>
            </div>
            
            <BsHandbag id="hand-bag" onClick={handleClickHandBag} />
            <div id="number-of-products">{numberOfProducts()}</div>
            
        </div>
    )
};

export default Navbar;
