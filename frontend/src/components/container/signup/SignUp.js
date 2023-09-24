import React, { useEffect, useState } from "react";
import "./signup.css"
import {useNavigate} from 'react-router-dom' 

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    
  })

  const collectData = async()=>{
    console.log(name,email,password);
    let result = await fetch("http://localhost:5000/register",{
      method:'post',
      body: JSON.stringify({
        name,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result.result))
    localStorage.setItem("token",JSON.stringify(result.auth))
    if(result){
      navigate("/")
    }
  }
  return (
    <div className="register signup">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputBox"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" className="appButton" onClick={collectData}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
