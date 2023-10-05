import React from 'react';
import styles from './NotFound.module.css';
import error from '../../Assets/images/error.jpg.jpg';

export default function NotFound() {
  return <>
    <img className='w-50 d-flex container py-5' src={error}></img>
  </>
}
