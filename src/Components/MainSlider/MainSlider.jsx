import React from 'react';
import styles from './MainSlider.module.css';

import slider1 from '../../Assets/images/slider-image-1.jpeg';
import slider2 from '../../Assets/images/slider-image-2.jpeg';
import slider3 from '../../Assets/images/slider-image-3.jpeg';
import blog1 from '../../Assets/images/grocery-banner-2.jpeg';
import blog2 from '../../Assets/images/grocery-banner.png';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  sliderToShow: 1,
  sliderToScroll: 1,
  arrows: false
};

export default function MainSlider() {
  return <>
  <div className="row gx-0">
    <div className="col-md-9">
       <Slider {...settings}>
        <img height={400} className='w-100' src={slider1} alt='a7a7a' />
        <img height={400} className='w-100' src={slider2} alt='a7a7a' />
        <img height={400} className='w-100' src={slider3} alt='a7a7a' />
      </Slider>
    </div>
    <div className="col-md-3">
      <img height={200} className='w-100' src={blog1} alt='a7s77' />
      <img height={200} className='w-100' src={blog2} alt='a7s77' />

    </div>
  </div>


      
  </>
}
