import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import SingleProduct from "./SingleProduct";
import { getDetails } from "../redux/features/details/detailsSlice";
import { add } from "../redux/features/navbar/navbarSlice";


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
            <h1 id="details-heading">DETAILS</h1>
            {/* <SingleProduct productDetails={productDetails} /> */}

            {loading ? <div style={{ textAlign: "center", marginTop: "200px" }}>Loading...</div> : 
            <div id="single-product-container">

            <div className="flex-item">
                <img src={productDetails.image} alt="product" width={100} height={100}/>
            </div>

            <div id="details" className="flex-item">
                {/* <h2 id="brand">{props.productDetails.name}</h2> */}
                <h2 id="title">{productDetails.name}</h2>
                <ul>
            <li>{productDetails.f1}</li>
            <li>{productDetails.f2}</li>
            <li>{productDetails.f3}</li>
            <li>{productDetails.f4}</li>
            <li>{productDetails.f5}</li>
          </ul>
                <div id="price-container">
                    <h2 id="price">
                        <span>₹</span>
                        {productDetails.price}
                    </h2>
                </div>

                <button onClick={() => dispatch(add(productDetails))}>Add to cart</button> 
            </div>

            <div className='buttonparent'>
      <button onClick={handeBack} className='backbutton'>Back</button>
      </div>
        </div>
            
            }

        </div>
    )
};

export default Details;
