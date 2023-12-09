import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/features/navbar/navbarSlice";

import "../styles/SingleProduct.css";
// import { useNavigate } from "react-router-dom";


function SearchedItem(props) {

    // console.log(props.productDetails);
    // const navigate = useNavigate()
    const dispatch = useDispatch();
    
    
    return (

        <div id="single-product-container">

            <div className="flex-item">
                <img src={props.SearchedDetails[0]?.image} alt="product" width={100} height={100}/>
            </div>

            <div id="details" className="flex-item">
                {/* <h2 id="brand">{props.productDetails.name}</h2> */}
                <h2 id="title">{props.SearchedDetails[0]?.name}</h2>
                <ul>
            <li>{props.SearchedDetails[0]?.f1}</li>
            <li>{props.SearchedDetails[0]?.f2}</li>
            <li>{props.SearchedDetails[0]?.f3}</li>
            <li>{props.SearchedDetails[0]?.f4}</li>
            <li>{props.SearchedDetails[0]?.f5}</li>
          </ul>
                <div id="price-container">
                    <h2 id="price">
                        <span>₹</span>
                        {props.SearchedDetails[0]?.price}
                    </h2>
                </div>

                <button onClick={() => dispatch(add(props.SearchedDetails))}>Add to cart</button> 
            </div>

           
        </div>
    )
};

export default SearchedItem;