import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import s from './signIn.module.css'
import { NavLink } from "react-router-dom";
import AuthDetails from "./authDetails";

const SignIn = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function logIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
      })
        .catch((error) => {
            console.log(error);
            setError("We can not find this account")
      });
  }
  return (
    <div >
      <form className={s.loginBox}>
        <h1 className={s.h1}>Log in</h1>
        <div className={s.inputs}>
        <input
          placeholder="Please enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          placeholder="Please enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        </div>
        <button className={s.button} onClick={logIn}>Login</button>
        {error ? <p style={{ color: "red" }}>{error}</p> : ""}
        <div className={s.signup}>
          Haven't you had an account? <NavLink className={s.link} to='/registration'>Sign Up</NavLink>
        </div>
      </form>
      <AuthDetails/>
    </div>
  );
};

export default SignIn;