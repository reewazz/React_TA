import { useContext } from 'react'
import './Hero.css'
import { countContext } from './context/countContext'
export const NewsCard =  ({value})=>{
    console.log(value,"value in news card" )
  
    return (
        <>
         <div className="newscard">
            <div className='news-image'>
            <img src={value.urlToImage} alt="" />

            </div>
            <h2 style={{color:"black"}}>{value.title} </h2>
            <h4> {value.description}</h4>
            <h4>{value.author}</h4>
        </div>
        </>
    )
}