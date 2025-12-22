import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { TextUtils } from "./components/TextUtils";
import Name from "./Name";
import { PropsChild } from "./PropsChild";
import { Products } from "./components/Products";
import { ProductCard } from "./components/ProductCard";


function App(){
   
    const [count,setCount] = useState(0)
    const name = "riwaj"
    const userObject = 
        {
        name: "full sleeve ",
        image: "url",
        price:200
    }
console.log(name)
    const numbers = [1,2,3,4,5,6]
     
    const double = numbers.map((num)=>num*2)
    console.log(numbers)

    const even = numbers.filter((num)=> num%2 === 0)
    console.log(even)
    



    const fruits = ['apple','banana','mango']
    fruits.push('kiwi')


    return (
        <>
       {/* <Header/> */}
       <Navbar/>
       <h1>{name}</h1>
            {/* <ProductCard value = {userObject}/> */}
       {/* <Hero/>  
       <TextUtils/> */}
       {/* <Name  data = "riwaj" count = {count} setCount ={setCount} samarpan = {userObject} /> */}

       {/* <PropsChild>
        <h1 >this is sent from parent </h1>
        <h2>this is also children of propschild</h2>
      

       </PropsChild>

       <h3>this is h3</h3> */}
       {fruits.map((variableName,index)=>(
      
<div key={index}>
    <h3 style={{color:"red"}}>{variableName} </h3>
    </div>
        

))}

     
       <Products/>

        </>
      
    )

       
    
    
       
        
      
    
}

export default App;