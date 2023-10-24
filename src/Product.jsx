import React from 'react'
import reactimage from "./image/Screenshot 2023-10-22 205717.png"
import "./Home.css"
export default function Product(props) {
  return (
    <>
    <div className='col-md-3 text-center px-5  '>
           <img src={reactimage} alt='image for book' className='book-img'></img>
           <h3>{props.title}</h3>
           <p>{props.desc}</p>
    </div>
    
    </>
  )
}
