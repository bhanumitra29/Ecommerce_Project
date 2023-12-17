import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import "../styles/All.css";
import SearchedItem from './SearchedItem';
import LoginButton from './LoginButton';
const MobileDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const closeMenu = () => {
    setIsOpen(false);
  };

  const dropdownMenuStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div className='mainMobiledrop'>
    <div className="mobile-menu1">
      <button className="menu-toggle-button" onClick={toggleMenu}>
        {/* Menu */}
        <FaBars />
      </button>
      </div>
      <div className="mobile-dropdown-menu" style={dropdownMenuStyle}>
        <LoginButton />
        <SearchedItem />
        <NavLink to='/all' className="mobile-menu-link" onClick={closeMenu}>All</NavLink>
        <NavLink to='/mobiles' className="mobile-menu-link" onClick={closeMenu}>Mobiles</NavLink>
        <NavLink to='/electronics' className="mobile-menu-link" onClick={closeMenu}>Electronics</NavLink>
        <NavLink to='/watches' className="mobile-menu-link" onClick={closeMenu}>Watches</NavLink>
        <NavLink to='/accesories' className="mobile-menu-link" onClick={closeMenu}>Accesories</NavLink>
        {/* <NavLink to='/food' className="mobile-menu-link" onClick={closeMenu}>Food</NavLink> */}
        
      </div>
    

    </div>
  );
};

export default MobileDropdownMenu;