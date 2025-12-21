import './Hero.css'
import { ProductCard } from './ProductCard'
export const Products  = ()=>{
    const productValues = {
image: "https://demo.templatesjungle.com/ultras/images/product-item1.jpg",
name : "Full sleeve cover shirt",
price : 400
    }
      const productValues2 = {
image: "https://demo.templatesjungle.com/ultras/images/product-item2.jpg",
name : "Half sleeve cover shirt",
price : 200
    }
    
    return(
        <>
        <div className="products">

       <div className="cards">
         {/* <div className="card">
            <div className='image-border'>
            <img src="https://demo.templatesjungle.com/ultras/images/product-item1.jpg" alt="" />

            </div>
            <h2>Full sleeve cover shirt</h2>
            <h4>$ 30.00</h4>
        </div> <div className="card">
            <div className='image-border'>
            <img src="https://demo.templatesjungle.com/ultras/images/product-item1.jpg" alt="" />

            </div>
            <h2>Full sleeve cover shirt</h2>
            <h4>$ 30.00</h4>
        </div> <div className="card">
            <div className='image-border'>
            <img src="https://demo.templatesjungle.com/ultras/images/product-item1.jpg" alt="" />

            </div>
            <h2>Full sleeve cover shirt</h2>
            <h4>$ 30.00</h4>
        </div>
         <div className="card">
            <div className='image-border'>
            <img src="https://demo.templatesjungle.com/ultras/images/product-item1.jpg" alt="" />

            </div>
            <h2>Full sleeve cover shirt</h2>
            <h4>$ 30.00</h4>
        </div> */}
        <ProductCard value = {productValues}/>
        <ProductCard value = {productValues2}/>
        <ProductCard value = {productValues}/>
        <ProductCard value = {productValues2}/>
       
        {/* <ProductCard value = {productValues}/>
        <ProductCard value = {productValues}/> */}
        
       </div>
        </div>
       
        </>
    )
}