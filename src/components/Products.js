import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../redux/features/navbar/navbarSlice";
import { FaShippingFast, FaHandHoldingUsd, FaUserTie, FaCartPlus } from 'react-icons/fa'

import "../styles/Products.css";
import SliderComponent from "../SliderCompo/Slider";
import Footer from "../SliderCompo/Footer";

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  
  while (currentIndex !== 0) {

    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function Products() {
  const products = useSelector(state => state.productsReducer.value); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const shuffledProducts = shuffle(products.filter(item => item.id > 0));

  
  const displayedProducts = shuffledProducts.slice(0, 9);

  return (
    <>
      
      <SliderComponent />
      
      <div className="page-header">
      <h1>BEST SELLER</h1>
    </div>
    
      <div id="flex-container">
        {displayedProducts.map((eachProduct, index) => {
          return (
            <div className="miniContainer" key={index}>
              <div className="Hot">Hot</div>
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

      <div className='mainShippingBox'>
        <div className='shipping'>
          <FaShippingFast className='shippingSymbol'/>
          {/* <img src={} alt='shipping image' height={100} width={100}/> */}
          <h4>FREE SHIPPING</h4>
          <p>Limited-time offer: Free shipping on all orders! No minimum purchase required. This offer 
            is valid for a limited time only. Hurry up and claim amazing offers</p>
        </div>
        <div className='refund'>
          <FaHandHoldingUsd className='shippingSymbol'/>
       
        <h4>100% REFUND</h4>

        <p>100% satisfaction guaranteed, or your money back! We're so confident that you'll 
          love our products that we offer a 100% satisfaction guarantee. If you're not happy 
          with your purchase for any reason, simply return it for a full refund.</p>
        </div>
        <div className='support'>
          <FaUserTie className='shippingSymbol'/>
        <h4>SUPPORT 24/7</h4>
        <p>We're here to help you 24 hours a day, 7 days a week. Whether you have a question 
          about your order or need help troubleshooting a product, we're always happy to assist you.</p>
        </div>
      </div>

      {/* <button onClick={handleClick}>Logout</button> */}
      <Footer />
    </>
  );
}

export default Products;
