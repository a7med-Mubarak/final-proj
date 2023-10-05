import React from 'react';
import styles from './CategorySlider.module.css';
import { useQuery } from 'react-query';
import Slider from "react-slick";
import axios from 'axios';


export default function CategorySlider() {

  var settings = {
    dots: true,
    infinite :true,
    speed: 500,
    slidesToShow: 7,
    slidToScroll: 1
  };


  function getCategories()
  {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

  let {isLoading , isError , data} = useQuery(`categorySlider` , getCategories );
  return <>
  
  {data?.data.data ?
  
   <div className='py-4'> <Slider {...settings}>
      
       {data?.data.data.map((caetegory)=> <img height={200} key={caetegory._id} src={caetegory.image} className='w-100'/>)}
       </Slider>
   </div>
      :''}
  </>
}
