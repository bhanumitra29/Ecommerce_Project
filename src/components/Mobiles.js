import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../redux/features/navbar/navbarSlice";
import { FaCartPlus } from "react-icons/fa";
import Footer from "../SliderCompo/Footer";
import axios from "axios";

function Mobiles() {
  const products = useSelector((state) => state.productsReducer.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const [displayedItems, setDisplayedItems] = useState(9); 

  const loadMore = () => {
    
    setDisplayedItems((prevCount) => prevCount + 9); 
  };

  function handleAddCart(eachProduct) {
    const token = localStorage.getItem("token");
    console.log(token)
    // useEffect(() => {
      if (token) {
          axios.get("http://localhost:2926/user/auth", { headers: { "authorization": `Bearer ${token}` } }) 
              .then((res) => {
                  console.log("welcome@@@@@@@@@@@@@",res.data);
  
                  dispatch(add(eachProduct))
              })
              .catch(err => console.log(err))
      }
      else {
          alert("Please login to view cart page!");
          navigate("/login");
      }
    }

  return (
    <>
      {/* <h1>PRODUCTS</h1> */}

      <div className="poster poster4">
      {/* Content inside the poster */}
    </div>

    <div className="page-header">
      <h1>Mobiles</h1>
    </div>

      <div id="flex-container">
        {products.length > 0 &&
          products
            .filter((item) => item.id > 0 && item.id < 30)
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
                  {/* <button onClick={() => dispatch(add(eachProduct))}> */}
                  <button onClick={() => handleAddCart(eachProduct)}>
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

export default Mobiles;
