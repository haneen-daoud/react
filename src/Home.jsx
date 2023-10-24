import React from 'react'
import './Home.css'
import reactimage from "./image/Screenshot 2023-10-22 205717.png"
import the from "./image/the.jpg"
import song from "./image/song.jpg"
import thebig from "./image/THe-BFG.jpg"
import Product from './Product'
export default function Home() {
   const products = [
      {id:1,title:'product one',desc:'this is product one'},
      {id:2,title:'product two',desc:'this is product two'},
      {id:3,title:'product three',desc:'this is product three'},
      {id:4,title:'product four',desc:'this is product four'},
  ];
  return (
   
    <>
   

    <div class="container pb-5 text-center">
    <h2>Welcome to the Cultural Library</h2>
    <h3><strong>Enjoy your reading!</strong></h3>
    </div>
    
   
    <div className='row py-5'>
    {products.map((product)=>{
       
       return <Product {...product} key={product.id}/>
    })}
        
        

    </div>
    </>
  )
}
