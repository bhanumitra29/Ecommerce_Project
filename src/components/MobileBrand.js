// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { add } from '../redux/features/navbar/navbarSlice';
// import { FaCartPlus } from 'react-icons/fa';

// const MobileBrand = () => {
//   const { cat } = useParams();
//   const products = useSelector(state => state.productsReducer.value); // Assuming your products are stored in Redux
// const dispatch = useDispatch();
//   const filteredProducts = products.filter(item => item.cat === cat);
// const navigate = useNavigate()


//   return (
//     <div>
//       <h2>{cat}</h2>
//       <div>
//         {filteredProducts.map((eachProduct, index) => (
//            <div className="miniContainer" key={index}>
                           
                            
//            <img onClick={() => navigate(`/details/${eachProduct.id}`)}
//                src={eachProduct.image} // thumbnail: küçük resim
//                alt={eachProduct.id + " image"} width={100} height={100}>
//            </img>

//            <h2>{eachProduct.name}</h2>
       

      
//            <h2>
//                <span id="dolar-span">₹</span>
//                {eachProduct.price}
//            </h2>

//            {/* <PiShoppingCart id="shopping-cart" onClick={() => dispatch(add(eachProduct))} />  */}
//            <button onClick={() => dispatch(add(eachProduct))}><FaCartPlus /> Add to Cart</button>

          
//        </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MobileBrand;
