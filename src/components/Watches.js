import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from '../redux/features/navbar/navbarSlice';
import { FaCartPlus } from 'react-icons/fa';


const Watches = () => {
  
  const products = useSelector(state => state.productsReducer.value); 

  const navigate = useNavigate();

  const dispatch = useDispatch();

  


  return (
    <div>
      <h2>This is Watches</h2>

      <div id="flex-container">
                {/* {products.length > 0 && products.map((eachProduct, index) => { */}
                {products.length > 0 && products.filter((item)=>item.id >40 && item.id<52).map((eachProduct, index) => {
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
    </div>
  )
}

export default Watches
