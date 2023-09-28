import React, { useEffect, useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../features/user/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {result} = useSelector((state) => state.user)
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
  };
  
  const onLoginHandler = async () => {
    dispatch(userLogin(loginData));
  };

  useEffect(()=>{
    if(result.auth){
      localStorage.setItem("user",JSON.stringify(result.user))
      localStorage.setItem("token",JSON.stringify(result.auth))
      navigate('/')
    }
  },[result])
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
      <button type="button" className="appButton" onClick={onLoginHandler}>
        Login
      </button>
    </div>
  );
};

export default Login;
