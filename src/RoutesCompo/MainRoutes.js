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
import Samsung from "../SubRoutes/Mobiles/Samsung";
import Apple from "../SubRoutes/Mobiles/Apple";
import Google from "../SubRoutes/Mobiles/Google";
import Mouses from "../SubRoutes/Electronics/Mouses";
import Keyboard from "../SubRoutes/Electronics/Keyboard";
import Laptop from "../SubRoutes/Electronics/Laptop";
import Audio from "../SubRoutes/Electronics/Audio";
import Fossil from "../SubRoutes/Watches/Fossil";
import Applew from "../SubRoutes/Watches/Applew";
import Samsungw from "../SubRoutes/Watches/Samsungw";
import Charger from "../SubRoutes/Accesories/Charger";
import Cases from "../SubRoutes/Accesories/Cases";

import LoginCompo from "../LoginCompo/Login";
import RegisterCompo from "../LoginCompo/Register";
import SearchBar from "../components/SearchBar";
import Success from "../Stripe/Success";
import Cancel from "../Stripe/Cancel";


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

        <Route path="/login" element={<LoginCompo />} />
        <Route path="/register" element={<RegisterCompo />} />

        {/* <Route path="/item/:id" element={<DynamicContent />} /> */}

        {/* <Route path="/mobiles/:cat" element={<MobileBrand />} /> */}

        {/* subroutes */}

        <Route path="/samsung" element={<Samsung />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/google" element={<Google />} />

        <Route path="/mouses" element={<Mouses />} />
        <Route path="/keyboard" element={<Keyboard />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/audio" element={<Audio />} />

        <Route path="/fossil" element={<Fossil />} />
        <Route path="/applew" element={<Applew />} />
        <Route path="/samsungw" element={<Samsungw />} />

        <Route path="/charger" element={<Charger />} />
        <Route path="/cases" element={<Cases />} />

        {/* subroutes */}

        <Route path="/SearchBar/:search" element={loading ? <loading/> :<SearchBar/>}/>
        <Route path="/Success" element={<Success />} />
        <Route path="/Cancel" element={<Cancel />} />




      </Routes>

      </>
  )
};

export default MainRoutes;
