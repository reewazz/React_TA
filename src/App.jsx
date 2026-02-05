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
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import PrivateRoutes from "./helpers/PrivateRoutes.js";
import AddBlogs from "./components/dashboard/AddBlogs.jsx";
import AddCategory from "./components/dashboard/AddCategory.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

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
  

  
   
      <Routes>
        <Route path="/" element={<AppLayout />} >
        <Route path="hero" element= {<Hero/>}/>
          <Route path="products" element={<Products />} />
          <Route path="news" element={<News />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path = "/form" element = {<Todolist/>} >

        <Route path = "kishor" element = {<Todolist/>} />
        <Route path = "samarpan" element = {<Head/>} />

        </Route>
        <Route path="/admin" element = {<h1>this is admin </h1>}/>

        <Route path = "/login" element = {<Login/>} />
        <Route path = "/signup" element = {<Signup/>} />

        
        <Route path = "/*" element = {<NotFound/>}/>
        </Route>



        <Route path="/dashboard" element={<AdminLayout/>} >


<Route path = "createblog" element = {<AddBlogs/>}/>
<Route path = "category" element = {<AddCategory/>}/>
            </Route>
      
        
      </Routes>

    </>
  );
}

export default App;
