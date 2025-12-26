import "./Hero.css";
import { ProductCard } from "./ProductCard";
export const Products = ({count}) => {

    const todo = ['wake up','code', 'sleep']
  const products = [
    {
      image: "https://demo.templatesjungle.com/ultras/images/product-item1.jpg",
      name: "Full sleeve cover shirt",
      price: 300,
    },
    {
      image: "https://demo.templatesjungle.com/ultras/images/product-item2.jpg",
      name: "Half sleeve cover shirt",
      price: 200,
    },
      {
      image: "https://demo.templatesjungle.com/ultras/images/product-item3.jpg",
      name: "Hoodie",
      price: 700,
    },
      {
      image: "https://demo.templatesjungle.com/ultras/images/product-item3.jpg",
      name: "Hoodie",
      price: 800,
    },
      {
      image: "https://demo.templatesjungle.com/ultras/images/product-item3.jpg",
      name: "Hoodie",
      price: 400,
    },
      {
      image: "https://demo.templatesjungle.com/ultras/images/product-item3.jpg",
      name: "Hoodie",
      price: 900,
    },
      {
      image: "https://demo.templatesjungle.com/ultras/images/product-item3.jpg",
      name: "Hoodie",
      price: 100,
    },
      {
      image: "https://demo.templatesjungle.com/ultras/images/product-item3.jpg",
      name: "Hoodie",
      price: 400,
    },

  ];

const  isCheap = products.filter((item)=>item.price<500)
  return (
    <>
      <div className="products">
        <div className="cards">

            {/* {[12,33,44,55,"string"].map((item,index)=> (

<h1 key={index}>{item}</h1>
            ))} */}
         
         {products.map((samarpan,index)=>(

 <ProductCard key={index} value={samarpan} count = {count} />
 
         ))}
         
          {/* <ProductCard value={productValues2} />
          <ProductCard value={productValues} />
          <ProductCard value={productValues2} /> */}

          {/* <ProductCard value = {productValues}/>
        <ProductCard value = {productValues}/> */}
        </div>
      </div>
    </>
  );
};
