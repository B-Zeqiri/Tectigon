import React, { useEffect, useState } from 'react';
import ax from '../axios.js';
import './fun.css';

const Functionality = () => {
const[city, setCity]=useState([]);

const getCity=()=>{
    ax.get('/city')
    .then((res)=>(
        setCity(res.data)
     )).catch((err)=>console.log(err));
}
useEffect(()=>{
    getCity();
},[]);
    
  return (
    <div className='funWrapper'>
        <h1>Functionality</h1>
        <div className='cities'>
        {
        city.map((c,i)=>(
            <p className='para'  key={i}>{c.city}</p>
        ))
       }
        </div>
       
    </div>
  )
}

export default Functionality