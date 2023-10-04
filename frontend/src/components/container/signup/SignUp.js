import React, { useEffect, useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../../features/user/userSlice";

const SignUp = () => {
  document.title = "Sign Up"
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.user);
  console.log(result);
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  const collectData = async () => {
    dispatch(userRegister(signUp));
  };

  useEffect(() => {
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.result));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    }
  }, [result]);
  return (
    <div className="mainSize">
      <div className="signup">
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
          <button type="button" className="clickBtn" onClick={collectData}>
            Sign Up
          </button>
      </div>
    </div>
  );
};

export default SignUp;
