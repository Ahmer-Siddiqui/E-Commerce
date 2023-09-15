import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin= async()=>{
        let result = await fetch("http://localhost:5000/login",{
          method: 'post',
          body: JSON.stringify({email,password}),
          headers: {
            'Content-Type': 'application/json',
             authorization: JSON.parse(localStorage.getItem("token"))
          },
        })
        result = await result.json()
        if(result.auth){
          localStorage.setItem("user",JSON.stringify(result.user))
          localStorage.setItem("token",JSON.stringify(result.auth))
          navigate('/')
        }else{
          alert("Enter Correct Details")
        }
      }
      useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
          navigate("/")
        }
      },[])
  return (
    <div className="login">
      <h1>Login</h1>
      <input type="email" className="inputBox" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <input
        type="password"
        className="inputBox"
        placeholder="Enter Password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
      />
      <button type="button" className="appButton" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
