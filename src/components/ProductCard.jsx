import { useContext } from 'react'
import './Hero.css'
import { countContext } from './context/countContext'
export const ProductCard =  ({value})=>{
    console.log(value,"value")
    const countValue = useContext(countContext)
    return (
        <>
         <div className="card">
            <div className='image-border'>
            <img src={value.image} alt="" />

            </div>
            <h2 style={{color:"black"}}>{value.name} </h2>
            <h4>$ {value.price}</h4>
            <h4>{countValue}</h4>
        </div>
        </>
    )
}