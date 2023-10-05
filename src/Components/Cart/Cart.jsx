import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { CartContext } from '../../Context/CartContext';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';





export default function Cart() {
  let {getLoggedUserCart , removeCartItem , updateProductQuantity} = useContext(CartContext);
  const [cartDetails, setCartDetails] = useState(null);


  async function updateCount(id , count)
  {
    let {data} = await updateProductQuantity(id , count);
    setCartDetails(data);
  }

  async function removeItem(id)
  {
      let {data} = await removeCartItem(id);
      setCartDetails(data);

  }
  async function getCart()
  {
    let {data} = await getLoggedUserCart();
    setCartDetails(data);
  }

  useEffect(() => {
    getCart();
  }, []);
  return <>
  {cartDetails ?  <div className="w-75 my-3 mx-auto p-2 bg-main-light">
        <h3>Shopping Cart</h3>
        <h6 className='text-main fw-bolder'>Cart Items : {cartDetails.numOfCartItems} </h6>
        <h6 className='text-main fw-bolder mb-4'>Total Cart Price : {cartDetails.data.totalCartPrice} EGP</h6>
            {cartDetails.data.products.map((product) => <div key={product.product.id} className="row px-2 py-2 border-bottom">

                  <div className="col-md-1">
                    <img className='w-100' src={product.product.imageCover} alt='' />
                  </div>

                  <div className="col-md-11">
                    <div className="d-flex justify-content-between align-items-center">

                      <div>
                        <h3 className='h6'> {product.product.title.split(' ').slice(0,3).join(' ')}</h3>
                        <h6 className='text-main'>Price : {product.price} EGP</h6>
                      </div>
                      
                      <div>
                        <button onClick={()=> updateCount(product.product.id , product.count + 1)} className='brdr-main btn p-1'>+</button>
                        <span className='mx-2'>{product.count}</span>
                        <button onClick={()=> updateCount(product.product.id , product.count - 1)} className='brdr-main btn p-1'>-</button>
                      </div>

                    </div>

                    <button onClick={() => removeItem(product.product.id)} className='btn p-0'> <i className='text-danger font-sm fas fa-trash-can'></i> Remove </button>
                  </div>

                        </div> )} 


                <Link to={'/address'} className='btn bg-main w-25 mx-2 text-white mt-4'> Online Payment</Link>
                <button className='btn bg-main w-25 mx-4 text-white mt-4'> Cash on Delivery</button>




                </div> : <section id='loading' className='d-flex justify-content-center align-items-center'>
                  
                <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
              />

                  </section>}

  </>
}
 