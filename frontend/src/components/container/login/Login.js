import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../features/user/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name] : value
    })
    console.log(loginData);
  };

  const handleLogin = async () => {
    dispatch(userLogin());
    let result = await fetch("http://localhost:5000/user/login",{
      method: 'post',
      body: JSON.stringify(loginData),
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
  };
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate("/")
    }
  },[])
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="email"
        className="inputBox"
        placeholder="Enter Email"
        name="email"
        value={loginData.email}
        onChange={onChangeHandler}
      />
      <input
        type="password"
        className="inputBox"
        placeholder="Enter Password"
        name="password"
        value={loginData.password}
        onChange={onChangeHandler}
      />
      <button type="button" className="appButton" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
