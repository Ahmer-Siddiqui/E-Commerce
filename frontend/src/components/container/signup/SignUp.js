import React, { useEffect, useState } from "react";
import "./signup.css"
import {useNavigate} from 'react-router-dom' 
import { useDispatch } from "react-redux";
import { userRegister } from "../../../features/user/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (e)=>{
    const {name, value} = e.target;
    setSignUp({
      ...signUp,
      [name]: value
    })
  }

  const collectData = async()=>{
    dispatch(userRegister(signUp))
    // let result = await fetch("http://localhost:5000/register",{
    //   method:'post',
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     password
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // result = await result.json();
    // console.log(result);
    // localStorage.setItem("user",JSON.stringify(result.result))
    // localStorage.setItem("token",JSON.stringify(result.auth))
    // if(result){
    //   navigate("/")
    // }
  }
  return (
    <div className="register signup">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        name="name"
        value={signUp.name}
        onChange={onChangeHandler}
      />
      <input
        className="inputBox"
        type="email"
        placeholder="Enter Email"
        name="email"
        value={signUp.email}
        onChange={onChangeHandler}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        name="password"
        value={signUp.password}
        onChange={onChangeHandler}
      />
      <button type="button" className="appButton" onClick={collectData}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
