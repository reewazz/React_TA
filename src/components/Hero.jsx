import { RiInsertColumnRight } from 'react-icons/ri'
import './Hero.css'
import { useEffect, useState } from 'react'
export function Hero (){
    const [count,setCount] = useState(0)
    const [show,setShow] = useState(false)
    const [color,setColor] = useState('gray')
const [news,setNews] = useState([])


useEffect(()=>{
    const firstNews = localStorage.getItem("news")
const value  = firstNews && JSON.parse(firstNews)
  setNews(value)
},[])
console.log(news,"news in hero")

return (
    <>
<div className='sm:flex justify-between p-4 lg:p-16'>
    <h1>Featured Products</h1>
    <h3>View all Products </h3>
</div>
   


   

    </>
)
}