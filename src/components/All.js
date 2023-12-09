import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from '../redux/features/navbar/navbarSlice';
import { FaCartPlus } from 'react-icons/fa';
import "../styles/All.css";
import Footer from '../SliderCompo/Footer';

const All = () => {
  const products = useSelector(state => state.productsReducer.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(9);

  
  const shuffleProducts = (array) => {
    let currentIndex = array.length, randomIndex;
    const newArray = [...array];

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]
      ];
    }

    return newArray;
  };

  
  useEffect(() => {
    if (products.length > 0) {
      const shuffled = shuffleProducts(products.filter(item => item.id > 0));
      setShuffledProducts(shuffled);
    }
  }, [products]);

  const loadMore = () => {
    setDisplayedItems(prevCount => prevCount + 9);
  };

  return (
    <>

<div className="poster poster5">
      {/* Content inside the poster */}
    </div>

   
    <div className="page-header">
      <h1>STORE</h1>
    </div>

      <div id="flex-container">
        {shuffledProducts.slice(0, displayedItems).map((eachProduct, index) => (
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
        ))}
      </div>

      {displayedItems < shuffledProducts.length && (
        <button className='loadButton' onClick={loadMore}>Load More</button>
      )}

      <Footer />
    </>
  );
};

export default All;
