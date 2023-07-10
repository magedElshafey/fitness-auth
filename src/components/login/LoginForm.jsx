import React, { useState } from "react";
import style from "./loginForm.module.css";
import user from "../../assets/user.svg";
import passwordImg from "../../assets/password.svg";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [password, setPassword] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Regular expression for email or phone validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]+$/;

    // Validate the input value against the regex patterns
    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <form>
      <div className="mb-3 auth_inp_container">
        <input
          placeholder="phone number or email"
          value={inputValue}
          onChange={handleChange}
          className="auth_inp"
          type="text"
        />
        {!isValid && (
          <p className="error">Please enter a valid email or phone number.</p>
        )}
        <img alt="authIcon" loading="lazy" className="auth_Icon" src={user} />
      </div>
      <div className="mb-3 auth_inp_container">
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth_inp"
          type="password"
        />
        {!isValid && (
          <p className="error">Please enter a valid email or phone number.</p>
        )}
        <img
          alt="authIcon"
          loading="lazy"
          className="auth_Icon"
          src={passwordImg}
        />
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/forget" className={style.forget}>
          forget password ?
        </Link>
      </div>
      <div className=" my-3 d-flex justify-content-center a;ign-items-center">
        <button className="btn rounded-pill">sign in</button>
      </div>
    </form>
  );
};

export default LoginForm;
