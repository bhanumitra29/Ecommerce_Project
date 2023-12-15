import React, { useState } from "react";
import { BsHandbag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// import { TbBrandHexo } from 'react-icons/tb';
import "../styles/All.css"
import "../styles/Navbar.css";
import { FaStore } from "react-icons/fa";

// import axios from "axios";
import LoginButton from "./LoginButton";
import SearchedItem from "./SearchedItem";



function Navbar() {

    const [subMenuOpen, setSubMenuOpen] = useState(false);
    // const [loginout, setloginout] = useState(true);
    // const [searchText, setsearchText] = useState(" ");
    const products = useSelector(state => state.navbarReducer.value); 
    const navigate = useNavigate();
    

    const onHover = () => {
      setSubMenuOpen(true);
    };
  
    const onLeave = () => {
      setSubMenuOpen(false);
    };

    // const onHover1 = () => {
    //   setSubMenuOpen1(true);
    // };
  
    // const onLeave1 = () => {
    //   setSubMenuOpen1(false);
    // };

//     const seelogout=()=>{
//       setloginout(true)
//       localStorage.removeItem("value");
//       localStorage.removeItem("token");
      
     
//       navigate('/')
//       window.location.reload(false);
// }


//   const token = localStorage.getItem("token");
//   console.log(token)
 
//   useEffect(() => {
//     if (token) {
//         axios.get("http://localhost:2926/user/auth", { headers: { "authorization": `Bearer ${token}` } }) 
//             .then((res) => {
//                 // console.log("welcome@@@@@@@@@@@@@",res.data);
//                 setloginout(false)
               
//             })
//             .catch(err => console.log(err))
//     }
//     else {
//       // console.log("-----------------------------------------")
//         alert("Please login to view cart page!");
//         navigate("/login");
//     }
// },[token,navigate])



    
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


        
  


    // }

    // const subMenu1 = (
    //   <div className="subroutes1">
    //   <ul>
    //     <li>
    //     <NavLink to="/login">Login</NavLink>
    //     </li>
    //     <li>
    //     <NavLink to="/register">SignUp</NavLink>
    //     </li>
    //   </ul>
    //   </div>
    // )
     
    

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


// const handlesearch=(e)=>{
  
//   navigate(`/SearchBar/${searchText}`);
//   // navigate()`/SearchBar/se")
//     }

//     const appdata=(e)=>{
//       e.preventDefault();
//       setsearchText(e.target.value );
//       console.log(searchText)
//  };

    return (
     
      <>
        {/* <input className="searchbar-1"
            type="search"
            placeholder="Search here"
            value={searchText} onChange={appdata}/>
            <button onClick={handlesearch}>Search</button> */}
           
 <div className="NavbarSearchP">

           
            <div className="logo" onClick={handleClickIcon}>
            <FaStore className="logo-icon" /> <span className="logo-icon logo-text">E-CART</span>
            </div>


            <div className="NavbarSearch1">

           <div>
          <SearchedItem />
          </div>   

          <LoginButton />

            <BsHandbag id="hand-bag" onClick={HandleClickHandBag} />
            <div id="number-of-products">{numberOfProducts()}</div>
            
            </div>  

            </div>


        
        <div id="navbar-container">
            {/* <div id="icon"><TbBrandHexo id="icon-in-div" onClick={handleClickIcon} /></div> */}
            

           
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
            
            
            
        {/* <input className="searchbar-1"
            type="search"
            placeholder="Search here"
            value={searchText} onChange={appdata}/>
            <button onClick={handlesearch}>Search</button> */}
            

            {/* <NavLink to="/login">
             <FaUser /> Login
              
            </NavLink> */}
{/* {loginout ? <div>
                
                <button><NavLink to="/login">Login</NavLink></button>
                </div>
              : 
              <div>
                  <button><NavLink  to="/" onClick={seelogout} >Logout</NavLink></button>
              </div>} */}

              {/* <LoginButton /> */}


            
            </div>
            
            
       


        </>
    )
};

export default Navbar;
