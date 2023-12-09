import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../redux/features/navbar/navbarSlice";
import { FaCartPlus } from "react-icons/fa";
import Footer from "../SliderCompo/Footer";

function Electronics() {
  const products = useSelector((state) => state.productsReducer.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const [displayedItems, setDisplayedItems] = useState(9); 

  const loadMore = () => {
    
    setDisplayedItems((prevCount) => prevCount + 9); 
  };

  return (
    <>
      {/* <h1>PRODUCTS</h1> */}

      <div className="poster poster3">
      {/* Content inside the poster */}
    </div>

    <div className="page-header">
      <h1>ELECTRONICS</h1>
    </div>

      <div id="flex-container">
        {products.length > 0 &&
          products
            .filter((item) => item.id > 66 && item.id < 111)
            .slice(0, displayedItems) 
            .map((eachProduct, index) => {
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

     
      {displayedItems < products.length && (
        <button className='loadButton' onClick={loadMore}>Load More</button>
      )}

      <Footer />
    </>
  );
}

export default Electronics;
