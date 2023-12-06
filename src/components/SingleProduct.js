// import React from "react";
// import { useDispatch } from "react-redux";
// import { add } from "../redux/features/navbar/navbarSlice";

// import "../styles/SingleProduct.css";
// import { useNavigate } from "react-router-dom";


// function SingleProduct(props) {

//     // console.log(props.productDetails);
//     const navigate = useNavigate()
//     const dispatch = useDispatch();
    
//     const handeBack = () => {
//             navigate(-1);
//       };

//     return (

//         <div id="single-product-container">

//             <div className="flex-item">
//                 <img src={props.productDetails.image} alt="product" width={100} height={100}/>
//             </div>

//             <div id="details" className="flex-item">
//                 {/* <h2 id="brand">{props.productDetails.name}</h2> */}
//                 <h2 id="title">{props.productDetails.name}</h2>
//                 <ul>
//             <li>{props.productDetails.f1}</li>
//             <li>{props.productDetails.f2}</li>
//             <li>{props.productDetails.f3}</li>
//             <li>{props.productDetails.f4}</li>
//             <li>{props.productDetails.f5}</li>
//           </ul>
//                 <div id="price-container">
//                     <h2 id="price">
//                         <span>₹</span>
//                         {props.productDetails.price}
//                     </h2>
//                 </div>

//                 <button onClick={() => dispatch(add(props.productDetails))}>Add to cart</button> 
//             </div>

//             <div className='buttonparent'>
//       <button onClick={handeBack} className='backbutton'>Back</button>
//       </div>
//         </div>
//     )
// };

// export default SingleProduct;
