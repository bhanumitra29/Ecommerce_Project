import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/products/productsSlice";
// Components
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Products from "../components/Products";
import Details from "../components/Details";
import ShoppingCart from "../components/ShoppingCart";

import { Routes, Route } from "react-router-dom";

import { Toaster } from 'react-hot-toast';



import "../styles/App.css";
// import Home from "../components/Home";
import All from "../components/All";
import Mobiles from "../components/Mobiles";
import Electronics from "../components/Electronics";
import Watches from "../components/Watches";
import Accesories from "../components/Accesories";
import Samsung from "../SubRoutes/Samsung";
import Apple from "../SubRoutes/Apple";
import Google from "../SubRoutes/Google";
// import MobileBrand from "../components/MobileBrand";


function MainRoutes() {

  const dispatch = useDispatch();

  // Sayfa yüklendiğinde ürünler axios ile çekilecek.
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const loading = useSelector(state => state.productsReducer.loading);

  return (
<>
  

      <Toaster />

      <Navbar />

      <Routes>
        <Route path="/" element={loading ? <Loading /> : <Products />} />
        <Route path="/details/:id" element={<Details />} />
        

        <Route path="/shoppingCart" element={<ShoppingCart />} />
      
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/all" element={<All />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/accesories" element={<Accesories />} />

        {/* <Route path="/item/:id" element={<DynamicContent />} /> */}

        {/* <Route path="/mobiles/:cat" element={<MobileBrand />} /> */}


        <Route path="/samsung" element={<Samsung />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/google" element={<Google />} />
      </Routes>

      </>
  )
};

export default MainRoutes;
