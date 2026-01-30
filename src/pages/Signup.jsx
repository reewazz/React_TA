import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
    const [user,setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

  const handleChange= (e)=> {
  setUser({
    ...user,
    [e.target.name]: e.target.value,
  });

    }


    const handleSubmit = async()=>{
      try{
          const res = await axios.post("http://localhost:8000/auth/register",user)
       alert("user created succesfully")
       setUser({
        name: "",
        email:"",
        password: ""
       })
      }
      catch(error){
        alert(error)
      }
    }
  
  return (
        
          <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-feilds">
          <input value={user.name} name='name' onChange={(e)=>handleChange(e)} type="text" placeholder="Your Name" />
          <input value={user.email} name='email' type="email" onChange={(e)=>handleChange(e)}  placeholder="Email address" />
          <input value={user.password} name='password' type="Password"  onChange={(e)=>handleChange(e)} placeholder="Password" />
        </div>
        <button onClick={handleSubmit}>Continue</button>
        <p className="loginsignup-login">
          Already Have an Account? <span>Login here</span>{" "}
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing i agree the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
 
  )
}

export default Signup