import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import SingleProduct from "./SingleProduct";
import { getDetails } from "../redux/features/details/detailsSlice";

import SingleProduct from "./SingleProduct";
import "../styles/All.css"

function Details() {

    const params = useParams(); 

    const dispatch = useDispatch();

    const navigate = useNavigate()
    
    
    const handeBack = () => {
            navigate(-1);
      };

   
    useEffect(() => {
        dispatch(getDetails(params.id));
    }, [dispatch, params.id]);

    const productDetails = useSelector(state => state.detailsReducer.value);

    const loading = useSelector(state => state.detailsReducer.loading);

    return (
        <div>
            <h1 id="details-heading">PRODUCT DETAILS</h1>
            {/* <SingleProduct productDetails={productDetails} /> */}

            {loading ? <div style={{ textAlign: "center", marginTop: "200px" }}>Loading...</div> : <SingleProduct productDetails={productDetails} />}
            

            <div className='buttonparent'>
      <button onClick={handeBack} className='backbutton'>Back</button>
      </div>
        </div>
            
         
    )
};

export default Details;
