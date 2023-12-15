// import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { add } from "../redux/features/navbar/navbarSlice";
import { FaCartPlus } from "react-icons/fa";
import Footer from "../SliderCompo/Footer";
import '../styles/All.css'

function SearchBar() {
  const products = useSelector((state) => state.productsReducer.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
const param = useParams().search.trim()
console.log(param)
  
  // const [displayedItems, setDisplayedItems] = useState(6); 

  // const loadMore = () => {
    
  //   setDisplayedItems((prevCount) => prevCount + 6); 
  // };

  return (
    <>
      {/* <h1>PRODUCTS</h1> */}

      
      <div id="flex-container">
      {products.filter((item)=>item.name.toLowerCase()===param || item.cat.toLowerCase()===param ).map((eachProduct, index) => {

              return (
                <div className="miniContainer" key={index}>
                  <img
                    onClick={() => navigate(`/details/${eachProduct.id}`)}
                    src={eachProduct.image}
                    alt={`${eachProduct.id}`}
                    width={100}
                    height={100}
                  />
                  <h2>{eachProduct.name}</h2>
                  <h2>
                    <span id="dolar-span">₹</span>
                    {eachProduct.price}
                  </h2>
                  <button onClick={() => dispatch(add(eachProduct))}>
                    <FaCartPlus /> Add to Cart
                  </button>
                </div>
              );
            })}
      </div>

     
      

      <Footer />
    </>
  );
}

export default SearchBar;
