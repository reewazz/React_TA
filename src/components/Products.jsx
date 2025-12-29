import { Link } from "react-router";
import "./Hero.css";
import { ProductCard } from "./ProductCard";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
export const Products = ({count}) => {

    const todo = ['wake up','code', 'sleep']
  const products = [
    {
        id:1,
      image: "https://demo.templatesjungle.com/ultras/images/product-item1.jpg",
      name: "Full sleeve cover shirt",
      price: 300,
    },
    {
         id:2,
      image: "https://demo.templatesjungle.com/ultras/images/product-item2.jpg",
      name: "Half sleeve cover shirt",
      price: 200,
    },
      {
         id:3,
      image: "https://demo.templatesjungle.com/ultras/images/product-item3.jpg",
      name: "Hoodie",
      price: 700,
    },
      {
        id:4,
      image: "https://demo.templatesjungle.com/ultras/images/product-item3.jpg",
      name: "Hoodie",
      price: 800,
    },
      {
        id:5,
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

        {[1,2,3,4,5].map((item,index)=>(
            <MdOutlineStarBorderPurple500 />

        ))}
        <div className="cards">

            {/* {[12,33,44,55,"string"].map((item,index)=> (

<h1 key={index}>{item}</h1>
            ))} */}
         
         {products.map((samarpan,index)=>(
    //          {
    //   image: "https://demo.templatesjungle.com/ultras/images/product-item1.jpg",
    //   name: "Full sleeve cover shirt",
    //   price: 300,
    // },

<Link to = {`/product-details/${samarpan.id}?name=${samarpan.name}&price=${samarpan.price}`}>
 <ProductCard key={index} value={samarpan} count = {count} />
 </Link>
 
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
