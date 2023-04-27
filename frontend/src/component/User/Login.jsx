import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // dispatch(loader(true));
      console.log("gellocation");
      const { data } = await axios.post("http://localhost:4000/api/v1/login", {
        email,
        password,
      });

      console.log(`data`, data);
      toast.success("Login Successfull!");
      navigate("/");
      // localStorage.setItem("user", JSON.stringify(data?.user));

      // dispatch(loader(false));
    } catch (error) {
      const msg =
        error?.response?.data?.message || "Sorry Something went wrong!";
      toast.error(msg);
      // dispatch(loader(false));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.loginContainer}>
          <h1>SIGN IN</h1>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">SIGN IN</button>
          <h5>
            DON'T HAVE AN ACCOUNT ? <a href="/signup" className={styles.link}>SIGN UP</a>
          </h5>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
