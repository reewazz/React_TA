import { useContext } from 'react'
import './Hero.css'
import { countContext } from './context/countContext'
import { useDisclosure } from '@mantine/hooks'
export const NewsCard =  ({value})=>{
    console.log(value,"value in news card" )
    const [opened, { open, close }] = useDisclosure(false);
  
    return (
       
        <>
         <div className="newscard">
            <div className=' lg:h-100 lg:w-100 '>
            <img className='h-full w-full object-cover' src={value.urlToImage} alt="" />

            </div>
            <h2 style={{color:"black"}}>{value.title} </h2>
            <h4> {value.description}</h4>
            <h4>{value.author}</h4>
        </div>
        </>
    )
}