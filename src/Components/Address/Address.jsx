import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { CartContext } from '../../Context/CartContext';


export default function Address() {


  let {onlinePayment} = useContext(CartContext)


  async function handleAddressSubmit(values){
   let response = await onlinePayment('650935c445ed4b248c0ead71' , 'http://localhost:3000' , values);
    window.location.href = response?.data.session.url;

  }

  let formik = useFormik({
    initialValues:{
      details:'',
      phone:'',
      city:''
    },
    onSubmit: handleAddressSubmit
  })
  return <>
     <div className="container">
        <form onSubmit={formik.handleSubmit}>

          <label htmlFor="details">Details : </label>
          <input value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} type='text' className='form-control mb-2' name='details'id='details'></input>
       
          <label htmlFor="phone">phone : </label>
          <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type='tell' className='form-control mb-2' name='phone'id='phone'></input>
          
          <label htmlFor="city">city : </label>
          <input value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} type='text' className='form-control mb-2' name='city'id='city'></input>

          <button type='submit' className='btn bg-main text-white'>Pay Now</button>
        </form>
     </div>
  </>
}
