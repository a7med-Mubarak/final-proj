import React from 'react';
import styles from './Products.module.css';
import { useSelector } from 'react-redux';

export default function Products() {
  let {counter} = useSelector((state)=> state.counter)
  return <>
    <h1>counter: {counter}</h1>
  </>
}
