import React, { useState } from "react";
import styles from "./signup.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("Submitted:", { email, password, confirmPassword });
     try {
      // dispatch(loader(true));
      const { data } = await axios.post("http://localhost:4000/api/v1/register", {
        email,
        password,
      });

      console.log(`data`, data);
    //   toast.success("Login Successfull!");
      navigate("/");
      // localStorage.setItem("user", JSON.stringify(data?.user));

      // dispatch(loader(false));
    } catch (error) {
      const msg =
        error?.response?.data?.message || "Sorry Something went wrong!";
    //   toast.error(msg);
      // dispatch(loader(false));
    }
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <h1>SIGN UP</h1>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">SIGN UP</button>
        <h5>
          ALREADY HAVE AN ACCOUNT ?{" "}
          <a href="/login" className={styles.link}>
            SIGN IN
          </a>
        </h5>
      </div>
    </form>
  );
};

export default Signup;
