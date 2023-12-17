import React from "react";
import "../styles/ShoppingCart.css"
import "../styles/All.css"
function ZeroProduct() {
    return (
        <div>
            {/* <h4>No Product added!</h4> */}
            <img className="zerocartimage" src='https://www.eyecatchers.in/shop-online/images/cart-empty.jpg' alt='not found' />
        </div>
    )
};

export default ZeroProduct;