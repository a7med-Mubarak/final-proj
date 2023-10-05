import React, { useContext, useState } from 'react';
import Style from  "./Login.module.css";
import { useFormik } from 'formik';
import * as yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { UserContext } from '../../Context/UserContext';


export default function Login() {
  let {setUserToken , setUserData} = useContext(UserContext);
  let navigate = useNavigate();
  const [error , setError] = useState(null);
  const [loading , setLoading] = useState(false);
  
  async function Loginsubmit(values){
    setLoading(true)
   let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" , values)
   .catch((error) => {
    setError(error.response.data.message);
    setLoading(false);
   })
   if(data.message === "success"){
    setLoading(false);
    localStorage.setItem('userToken' , data.token);
    setUserToken(data.token);
    setUserData(data.user);
    navigate("/");
   }
  }
  let validationSchema = yup.object({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().matches(/^[a-zA-Z][a-zA-Z0-9]{5,10}$/, "Password must start with a letter and its length from 6 to 11 characters, including at least one uppercase letter").required("Password is required"),
  })
  
  let formik = useFormik({
    initialValues:{
      email:"",
      password:"",
          },
    validationSchema,
    onSubmit:Loginsubmit
  })
  return <>
      <div className="w-75 mx-auto py-4">
        <h3>Login Now</h3>
        {error? <div className="alert alert-danger mt-2 p-2">{error}</div>:""}
        <form onSubmit={formik.handleSubmit}>
          
          <label htmlFor="email">Email</label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="form-control mb-3" id="email" name="email" type="email" />
          {formik.errors.email && formik.touched.email? <div className="alert alert-danger mt-2 p-2">{formik.errors.email}</div>:""}
 
          <label htmlFor="password">Passowrd</label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="form-control mb-3" id="password" name="password" type="password" />
          {formik.errors.password && formik.touched.password? <div className="alert alert-danger mt-2 p-2">{formik.errors.password}</div>:""}

          {!loading ?<button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn bg-main text-white form-btn">Login</button> : <button disabled={!(formik.isValid && formik.dirty)} type="submit" className={`btn form-btn ${Style.wider}`}><i className={`fas fa-spinner fa-spin`}></i></button>} <Link className='btn bg-body-secondary mx-2' to={'/register'}>Register Now</Link>
        
        </form>
      </div>
  </>
}
