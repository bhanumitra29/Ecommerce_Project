import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { add } from '../../redux/features/navbar/navbarSlice';

const Cases = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.value); // products is an array

    const navigate = useNavigate();
    return (
        <div id="flex-container">
        {products.length > 0 && products.filter((item)=>item.cat==="cases").map((eachProduct,index)=>(
          
            <div className="miniContainer" key={index}>
               
                
                    <img onClick={() => navigate(`/details/${eachProduct.id}`)}
                        src={eachProduct.image} 
                        alt={eachProduct.id + " image"} width={100} height={100}>
                    </img>
    
                    <h2>{eachProduct.name}</h2>
                
    
               
                    <h2>
                        <span id="dolar-span">₹</span>
                        {eachProduct.price}
                    </h2>
    
                    
                    <button onClick={() => dispatch(add(eachProduct))}><FaCartPlus /> Add to Cart</button>
    
                   
                </div>
           
        
    ))}
    </div>
    )
    
    };

export default Cases;
