import { RiInsertColumnRight } from 'react-icons/ri'
import './Hero.css'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
export function Hero (){
    const [count,setCount] = useState<number>(0)
    const [show,setShow] = useState(false)
    const [color,setColor] = useState<string>('gray')
const [news,setNews] = useState([])


useEffect(()=>{
    const firstNews = localStorage.getItem("news")
const value  = firstNews && JSON.parse(firstNews)
  setNews(value)
},[])
console.log(news,"news in hero")

return (
    <>
<button onClick={setCount(count+1)}>addd</button>
   


   

    </>
)
}