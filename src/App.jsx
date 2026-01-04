import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { TextUtils } from "./components/TextUtils";
import Name from "./Name";
import { PropsChild } from "./PropsChild";
import { Products } from "./components/Products";
import { ProductCard } from "./components/ProductCard";
import { Head } from "./components/Head";
import { Todolist } from "./components/Todolist";
import { countContext } from "./components/context/countContext.js";
import { Route, Routes } from "react-router";
import { Footer } from "./Footer.jsx";
import { NotFound } from "./components/NotFound.jsx";
import { Todo } from "./components/Todo.jsx";
import { ProductDetails } from "./components/ProductDetails.jsx";
import TryCatch from "./TryCatch.jsx";
import News from "./components/News.jsx";
import NewsForm from "./components/NewsForm.jsx";

function App() {
  const [count, setCount] = useState(0);
  const name = "riwaj";
  const userObject = {
    name: "full sleeve ",
    image: "url",
    price: 200,
  };
  

  return (
    <>
    <Navbar/>
    {/* <TryCatch/> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/news" element={<News />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path = "/form" element = {<NewsForm/>} >

        <Route path = "kishor" element = {<Todolist/>} />
        <Route path = "samarpan" element = {<Head/>} />

        </Route>
        
        <Route path = "/*" element = {<NotFound/>}/>
      </Routes>
     <Footer/>
    </>
  );
}

export default App;
