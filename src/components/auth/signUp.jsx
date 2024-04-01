import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import s from './signUp.module.css'
import { NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function register(e) {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    if (!copyPassword) {
      setError("Confirm Password is required");
      return;
    }

    if (copyPassword !== password) {
      setError("Passwords didn't match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError("");
        setEmail("");
        setCopyPassword("");
        setPassword("");
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to create an account");
      });
  }

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setAuthUser(null);
      })
      .catch((e) => console.log(e));
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.registerBox}>
      <form className={s.register} onSubmit={register}>
        <h1 className={s.h1}>Create an account</h1>
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
          <input
            placeholder="Please enter your password again"
            value={copyPassword}
            onChange={(e) => setCopyPassword(e.target.value)}
            type="password"
          />
        </div>
        <button className={s.button}>Create</button>
        {error ? <p style={{ color: "red" }}>{error}</p> : <NavLink to='/' />}
        <div className={s.login}>
          Have you already had an account? <NavLink className={s.link} to='/login'>Login</NavLink>
        </div>
      </form>

      {/* Модульное окно */}
      {authUser ? (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <p>{`Signed in as ${authUser.email}`}</p>
            <button onClick={userSignOut}>Sign Out</button>
          </div>
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default SignUp;
