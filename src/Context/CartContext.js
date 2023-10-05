import axios from "axios";
import { createContext } from "react";



export let CartContext = createContext();

function getLoggedUserCart(){
 return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {
     headers,
  })
  .then((response) => response)
  .catch((error) => error);
}

function removeCartItem(productId){
   return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {headers})
  .then((response) => response)
  .catch((error) => error);
}
function updateProductQuantity(productId , count){
   return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
    {count} , {headers})
    .then((response) => response)
    .catch((error) => error);
}
function onlinePayment(cartId , url , values){
  return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}` ,
   {
     shippingAddress:values
   } , {headers})
   .then((response) => response)
   .catch((error) => error);
}

let userToken = localStorage.getItem('userToken');
let headers = {
  token: userToken
}

export default function CartContextProvider(props) {
 

    function addToCart(productId) {
        return axios
          .post(
            `https://ecommerce.routemisr.com/api/v1/cart`,
            {
              productId,
            },
            {
              headers,
            }
          )
          .then((response) => response)
          .catch((error) => error);
      }
    return <CartContext.Provider value={{addToCart , onlinePayment , getLoggedUserCart , removeCartItem , updateProductQuantity}}>
            {props.children}

    </CartContext.Provider>
}