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
    const userObject = 
        {
        name: "full sleeve ",
        image: "url",
        price:200
    }
     


  
    return (
        <>
       {/* <Header/> */}
       <Navbar/>
            {/* <ProductCard value = {userObject}/> */}
       {/* <Hero/>  
       <TextUtils/> */}
       {/* <Name  data = "riwaj" count = {count} setCount ={setCount} samarpan = {userObject} /> */}

       {/* <PropsChild>
        <h1 >this is sent from parent </h1>
        <h2>this is also children of propschild</h2>
      

       </PropsChild>

       <h3>this is h3</h3> */}
       <Products/>

        </>
      
    )

       
    
    
       
        
      
    
}

export default App;