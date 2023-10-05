import React, { useContext, useEffect, useState } from 'react';
import styles from './FeaturedProducts.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import { BallTriangle } from 'react-loader-spinner';
import ProductDetails from '../ProductDetails/ProductDetails';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';







export default function FeaturedProducts() {
  
  let {addToCart} = useContext(CartContext);

  async function addProduct(productId){
      let response = await addToCart(productId);
      if(response.data.status === 'success')
      {
        toast.success('product successfully added' , {
          duration: 4000,
          position: 'top-center',
        })
      }
      else
      {
        toast.error('error adding product');
      }
    }


  function getFeaturedProducts()
  {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }

  let {isLoading , isError , data , isFetched} = useQuery('featureProducts' , getFeaturedProducts)


  return <>
  {isLoading? <div className='w-100 pt-5 d-flex justify-content-center'>
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
      </div>: <div className="container py-2">
      <h2>Featured Products</h2>
      <div className='row'>
          {data?.data.data.map((products)=> <div key={products._id} className='col-md-2'>



              <div className='product py-3 px-2'>
                <Link to={`/productdetails/${products._id}`}>

                    <img className='w-100' src={products.imageCover} alt={products.title}/>

                    <span className='text-main font-sm fw-bolder'>{products.category.name}</span>
                    <h3 className='h6'>{products.title.split(" ").slice(0,2).join(' ')}</h3>

                    <div className='d-flex justify-content-between mt-3'>
                      <span>{products.price} EGP</span>

                      <span> <i className='fas fa-star rating-color'></i>{products.ratingsAverage}</span>
                    </div>
                  {/* <button onClick={ ()=> addProduct(products._id)} className='btn bg-main text-white w-100 btn-sm mt-2'>add to cart</button> */}
                  </Link>
                  <button onClick={ ()=> addProduct(products._id)} className='btn bg-main text-white w-100 btn-sm mt-2'>add to cart</button>

              </div>
            </div>)}
      </div>
    </div> }
      

  </>
}



