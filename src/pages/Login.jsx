import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../store/authSlice';
import { Button, MultiSelect, PasswordInput, Text, TextInput } from '@mantine/core';
import { IconBase } from 'react-icons';
import { FaCediSign } from 'react-icons/fa6';
import { BiArrowToRight } from 'react-icons/bi';

const Login = () => {
    const [user,setUser] = useState({
        email: "",
        password: ""
    })
 
    const navigate = useNavigate()

  const handleChange= (e)=> {
  setUser({
    ...user,
    [e.target.name]: e.target.value,
  });

    }
 const dispatch = useDispatch()
    const handleSubmit = async()=>{
      try{
          const res = await axios.post("http://localhost:8000/auth/login",user)
          console.log(res.data)
        
dispatch(
    login({
        token: res.data.token,
        name: res.data.user.name,
        email: res.data.user.email
    })
)

       alert("user login succesfully")
       setUser({
        email:"",
        password: ""
       })
       navigate("/dashboard")
     
      }
      catch(error){
        alert(error)
      }
    }

    console.log(user)

    // const fetchBlogs = async()=> {
    //     const res = await axios.get("http://localhost:8000/blog/get")
    //     console.log(res)
    // }
    const fetchBlogs = async () => {
  try {
    const token = localStorage.getItem("token"); 

    const res = await axios.get("http://localhost:8000/blog/get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(res.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};

    useEffect(()=>{
        fetchBlogs()
    },[])
  
  return (
        <>
      
          <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-feilds">
            
          <input value={user.email} name='email' type="email" onChange={(e)=>handleChange(e)}  placeholder="Email address" />
          <input value={user.password} name='password' type="Password"  onChange={(e)=>handleChange(e)} placeholder="Password" />
        </div>
        <button onClick={handleSubmit}>Login</button>
        <p className="loginsignup-login">
          Register a new Account
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing i agree the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
      {/* <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte','Vanilla js']}
    /> */}

     <Button variant="outline" color="violet">Button</Button>
      <Button rightSection={<BiArrowToRight className='text-red-400' />} variant="default">Button</Button>
        <div className='w-1/4'>
               <Text truncate="end" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequuntur sit fugit iste corporis aliquid! Quam quod corrupti numquam temporibus beatae amet doloremque repudiandae ex fuga perspiciatis reiciendis in adipisci modi deserunt iusto magni id ipsum placeat, praesentium rerum. Eveniet expedita voluptatum excepturi totam illum iure commodi architecto voluptas! Quae.
           </Text>
        </div>
      </>
 
  )
}

export default Login