import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ZeroProduct from "./ZeroProduct.js";
import { FaTrashAlt } from "react-icons/fa";
import { add, remove, removeOne } from "../redux/features/navbar/navbarSlice.js";
import { useNavigate } from "react-router-dom";

import "../styles/ShoppingCart.css";
import PayPalPayment from "../PayPal/PayPalPayment.js";


function ShoppingCart() {
  const productsInShoppingCart = useSelector((state) => state.navbarReducer.value); 

  
  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productsInShoppingCart.length; i++) {
      totalPrice += productsInShoppingCart[i].price * productsInShoppingCart[i].quantity; 
    }
    return totalPrice;
  }

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const defaultStyle = {
    color: "#9d174d",
    cursor: "pointer"
  }

  const otherStyle = {
    color: "#dcd9d9",
    cursor: "default"
  }

  return (
    <>
      <h1 id="shoppingHeading">CART</h1>
      {calculateTotalPrice() === 0 ? (
        <ZeroProduct />
      ) : (
        <>
          {productsInShoppingCart.map((eachProduct, index) => (
            <div id="single-cart-container" key={index}>
              <img src={eachProduct.image} alt={"product"} onClick={() => navigate(`/details/${eachProduct.id}`)} width={100} height={100} />

              <div id="details">
                <h3><span id="brand">{eachProduct.name}</span></h3>
                {/* <span id="title">{eachProduct.name}</span> */}
              </div>

              <div id="edit">
                <div id="minus" onClick={() => dispatch(removeOne(eachProduct.id))} style={eachProduct.quantity < 2 ? otherStyle : defaultStyle}>-</div>
                <div id="quantity">{eachProduct.quantity}</div>
                <div id="plus" onClick={() => dispatch(add(eachProduct))}>+</div>
              </div>

              <div id="price">
                <span id="dolar-span">₹</span>
                <span id="price-span">{eachProduct.price * eachProduct.quantity}</span>
                <span
                  id="trash-icon"
                  onClick={() => dispatch(remove(eachProduct.id))}
                >
                  <FaTrashAlt />
                </span>
              </div>

            </div>
          ))}

          <div id="total-price-div">
            <span id="left">Total Price: </span>
            <span id="dolar">₹</span>
            <span id="right">{calculateTotalPrice()}</span>
          </div>

         <PayPalPayment />
        </>
      )}
    </>
  );
}

export default ShoppingCart;
