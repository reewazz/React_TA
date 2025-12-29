import React from 'react'
import { useParams, useSearchParams } from 'react-router'

export const ProductDetails = () => {
    const random = useParams()
  const [searchParams] = useSearchParams()

  const nameFromUrl = searchParams.get('name')
  const priceFromUrl = searchParams.get('price')
  const lang = searchParams.get('lang')
  
  
  
  return (
    <div>
<div className="details-main">
    <img src="https://demo.templatesjungle.com/ultras/images/product-item3.jpg" alt="" />
    <div className='details-text'>
<h1>{random.id}</h1>
<h1>name: {nameFromUrl}</h1>
<h1> price:{priceFromUrl}</h1>

<div className='price'>
    <h2>$54.00</h2>
    <h6 style={{textDecoration: "line-through"}}>$54.00</h6>
</div>

<p>

   {lang === "ch" ? "chinese sabda" 
   : "english" }
</p>
    </div>
</div>
<p>hello hello</p>
    </div>
  )
}
