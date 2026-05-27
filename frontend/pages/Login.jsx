import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const login=async () => {
    const response =await axios.post("http://localhost:5000/login",{email,password});
    console.log(response);
    alert(response.data.message);
  } 
  return (
    <div>
      <h1>Login page</h1>
      <input type="text" placeholder='Enter your mail'  onChange={(e)=>{
        // console.log(e)
        setEmail(e.target.value);
      }}/>

<br />
<br />

       <input type="password" placeholder='Enter your password'  onChange={(e)=>{
        // console.log(e)
        setPassword(e.target.value);
      }}/>

      {/* <h1>{password}</h1> */}

      <br /> <br />
      <button  onClick={login}>Login</button>  
      <p>Don't have an account

         <Link to="/signin">Sign in</Link>
      </p>
       

    </div>
  )
}

export default Login