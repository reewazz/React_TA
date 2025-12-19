import { useState } from "react"
import './Hero.css'

export const TextUtils = ()=> {
    const [text,setText] = useState("")
   
    const handleUpperCase = ()=> {
        let newText = text.toUpperCase()
        setText(newText)
    }

    return (
        <div style={{padding:"80px"}}>
        <h1>Text Utils </h1>
        <textarea  rows={8}  cols={60} value={text} onChange={(e)=>setText(e.target.value)} ></textarea>
        <button onClick={()=>handleUpperCase()}>Convert to uppercase</button>
        </div>
    )
}