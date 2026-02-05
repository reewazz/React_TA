import { RiInsertColumnRight } from 'react-icons/ri'
import './Hero.css'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import axios from 'axios'
export function Hero (){
    
const [news,setNews] = useState([])
const [file,setFile] = useState([])


useEffect(()=>{
    const firstNews = localStorage.getItem("news")
const value  = firstNews && JSON.parse(firstNews)
  setNews(value)
},[])




const upload = async ()=> {

    const formdata = new FormData()

for(let i =0; i<file.length; i++){
    formdata.append("image", file[i])
}
    const res = await axios.post('http://localhost:8000/upload',formdata)
    console.log(res)
}

console.log(news,"news in hero")

return (
    <div className = 'h-screen p-8'>
        <input type="file"   multiple accept="image/*" onChange={(e)=>setFile(e.target.files)} />
<button className='bg-blue-400' onClick={upload}>addd</button>


   


   

    </div>
)
}