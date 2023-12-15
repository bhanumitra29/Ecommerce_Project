import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../styles/All.css"
import { FaSearch } from 'react-icons/fa';
const SearchedItem = () => {

    const [searchText, setsearchText] = useState(" ");
    // const products = useSelector(state => state.navbarReducer.value); 
    const navigate = useNavigate()
    const handlesearch=(e)=>{
        
  
        navigate(`/SearchBar/${searchText}`);
        // navigate()`/SearchBar/se")
          }
      
          const appdata=(e)=>{
            e.preventDefault();
            setsearchText(e.target.value );
            console.log(searchText)
       };


  return (
    <div>
      <input className='inputsearch'
            type="search"
            placeholder="Search here"
            value={searchText} onChange={appdata}/>
            <button className='searchbutton' onClick={handlesearch}><FaSearch /></button>

    </div>
  )
}

export default SearchedItem
