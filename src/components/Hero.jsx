import './Hero.css'
import { useState } from 'react'
export function Hero (){
    const [count,setCount] = useState(0)
    const [show,setShow] = useState(false)


return (
    <>
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
    </>
)
}