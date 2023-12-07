import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { add } from "../redux/features/navbar/navbarSlice";



import "../styles/Products.css";
import { FaCartPlus } from "react-icons/fa";

function Mobiles() {

    const products = useSelector(state => state.productsReducer.value); // products is an array

    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <>
            {/* <Hero /> */}

            <h1>PRODUCTS</h1>

            {/* <ul>
        {products.length > 0 && products.filter((item)=>item.cat==="samsung").map((eachProduct,index)=>(
          <li key={index}>
            <NavLink to={`/mobiles/${products.cat}`}>samsung</NavLink>
          </li>
        ))}
      </ul> */}

            <div id="flex-container">
           

                {/* {products.length > 0 && products.map((eachProduct, index) => { */}
                {products.length > 0 && products.filter((item)=>item.id >0 && item.id<30
                
                ).map((eachProduct, index) => {
                    return (
                        <div className="miniContainer" key={index}>
                           
                            
                                <img onClick={() => navigate(`/details/${eachProduct.id}`)}
                                    src={eachProduct.image} // thumbnail: küçük resim
                                    alt={eachProduct.id + " image"} width={100} height={100}>
                                </img>

                                <h2>{eachProduct.name}</h2>
                            

                           
                                <h2>
                                    <span id="dolar-span">₹</span>
                                    {eachProduct.price}
                                </h2>

                                {/* <PiShoppingCart id="shopping-cart" onClick={() => dispatch(add(eachProduct))} />  */}
                                <button onClick={() => dispatch(add(eachProduct))}><FaCartPlus /> Add to Cart</button>

                               
                            </div>
                       
                    );
                })}
            </div>
        </>
    )
};

export default Mobiles;
