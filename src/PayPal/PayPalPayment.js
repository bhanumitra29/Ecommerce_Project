import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react'
// import { useDispatch } from 'react-redux';

import { toast } from "react-hot-toast";
import { useSelector } from 'react-redux';
const PayPalPayment = () => {

    // const dispatch = useDispatch()
    const productsInShoppingCart = useSelector((state) => state.navbarReducer.value); 
    const createOrder = (data) => {
        // Order is created on the server and the order id is returned
        return fetch("http://localhost:2926/payment/create-paypal-order", {
          method: "POST",
           headers: {
            "Content-Type": "application/json",
          },
          // use the "body" param to optionally pass additional order information
          // like product skus and quantities
          body: JSON.stringify({
            productsInShoppingCart
            // cart: [
            //   {
            //     sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
            //     quantity: "YOUR_PRODUCT_QUANTITY",
            //   },
            // ],
          }),
        })
        .then((response) => response.json())
        .then((order) => order.id);
      };
      const onApprove = (data) => {
         // Order is captured on the server and the response is returned to the browser
         return fetch("http://localhost:2926/payment/capture-paypal-order", {
          method: "POST",
           headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: data.orderID
          })
        })
        .then((response) => {
            return response.json()
        })

        .then((data) => {
            console.log(data)
            console.log(data.status);
            if (data.status === "COMPLETED") {
                toast.success("Order Placed Successfully!\nAmount paid completed!");
                // dispatch(reset());
            }
        });
      };

      
      return (
        <PayPalButtons
          createOrder={(data,actions) => createOrder(data, actions)}
          onApprove={(data,actions) => onApprove(data, actions)}
        />
  )
}

export default PayPalPayment
