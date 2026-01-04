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

    {news?.map((item,index)=>(
        <div key={index} style={{margin:"16px 64px"}}>
         <div>
               {item.title}
         </div>

<img src={item.image} alt="" />
        <div>
                {item.description}
        </div>
       <div>
             {item.author}
       </div>
         <div>
               {item.category}
         </div>

            </div>
    ))
}

    <div className="hero">
      
       <div className='counter'>
        <button onClick={()=>setCount(count-1)}>-</button>
  <h1>  {count}</h1> 
  <button onClick={()=>setCount(count+1)} >+</button>
  <button onClick={()=>setCount(0)}>reset</button>

       </div>
       <div>
       </div>
    </div>
        <input type={show ? "text" : "password"} />
        <button onClick={()=>setShow(!show)}> 
            {
                show ? "hide" : "show"
            }
        </button>

        <div style={{height:"80px",width:"80px" , borderRadius: "50%", background:`${color}`}}></div>
        <button onClick={()=>setColor('red')}>red</button>
        <button onClick={()=>setColor('blue')}>blue</button>
        <button onClick={()=>setColor('yellow')}>yellow</button>
    </>
)
}