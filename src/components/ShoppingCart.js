import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ZeroProduct from "./ZeroProduct.js";
import { FaCreditCard, FaTrashAlt } from "react-icons/fa";
import { add, remove, removeOne } from "../redux/features/navbar/navbarSlice.js";
import { useNavigate } from "react-router-dom";

import "../styles/ShoppingCart.css";
// import PayPalPayment from "../PayPal/PayPalPayment.js";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import "../styles/All.css"


function ShoppingCart() {
  const productsInShoppingCart = useSelector((state) => state.navbarReducer.value); 
  // console.log(productsInShoppingCart)

  
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


  const token = localStorage.getItem("token");
  console.log(token)
  useEffect(() => {
    if (token) {
        axios.get("https://ecommerce-project-backend-w01h.onrender.com/user/auth", { headers: { "authorization": `Bearer ${token}` } }) 
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }
    else {
        alert("Please login to view cart page!");
        navigate("/login");
    }
},[token,navigate])
// console.log(productsInShoppingCart)
const MakePayment=(async ()=>{
  // const makePayment=async ()=>{
    console.log(productsInShoppingCart)
    const stripe=await loadStripe("pk_test_51OMERySJb30zHYKXhazWu96YHeq9esM7jjoHRU5Yl6OsFBFrIqAN4l6DR432lstZ8S1BEgMXk05yGcoIoqcZQ0FJ00fJW2eWVM")
    const body={
      products:productsInShoppingCart
    }
    const headers={
      "content-Type":"application/json"
    }
    const response=await fetch("https://ecommerce-project-backend-w01h.onrender.com/user/createcheckout1",
    // const response=await fetch("http://localhost:2926/user/createcheckout1",
    {method:"POST",
  headers:headers,
body:JSON.stringify(body),

}
    );
    const session=await response.json();
    console.log(session)
    const result=stripe.redirectToCheckout({
      sessionId:session.id
    });  
    localStorage.removeItem("value")
    // navigate("/Success")
    
    if(result.error){
      console.log( result.error);
}
})

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

<button className="paynow" onClick={MakePayment}><FaCreditCard /> Pay Now</button>
         {/* <PayPalPayment /> */}
        </>
      )}
    </>
  );
}


export default ShoppingCart;
