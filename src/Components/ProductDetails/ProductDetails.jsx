import React, { useEffect, useState } from 'react';
import styles from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';




export default function ProductDetails() {
  function getProductDetails(id){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  let {isLoading , isError , data} = useQuery(`productDetails` ,()=> getProductDetails(params.id) );
  let params = useParams();
  
  return <>
  {data?.data.data? <div className='row py-2 align-items-center'>
  <Helmet>
    <meta name='description' content=''/>
    <title> {data?.data.data.title}</title>
  </Helmet>

    <div className='col-md-4'>
      <img className='w-100' src={data?.data.data.imageCover } alt=''/>

    </div>
    <div className='col-md-8'>
      <h2 className='h5'>{data?.data.data.title}</h2>
      <p>{data?.data.data.description}</p>
      <h6 className='text-main'>{data?.data.data.category?.name}</h6>
      <h6 className='text-main'>Price : {data?.data.data.price} EGP</h6>
      <div className='d-flex justify-content-between'>
          <span>ratingsQuantity :{data?.data.data.ratingsQuantity}</span>
          <span> <i className='fas fa-star rating-color'></i> {data?.data.data.ratingsAverage}</span>

      </div>
      <button className='btn bg-main text-white w-100 mt-2'>Add to cart</button>


    </div>


  </div> : ''}
    <h1>ProductDetails</h1>
  </>
}
