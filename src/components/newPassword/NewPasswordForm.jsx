import React from "react";
import password from "../../assets/password.svg";

const NewPasswordForm = () => {
  return (
    <div>
      <div className="mb-2 auth_inp_container">
        <input
          placeholder="new Password"
          className="auth_inp"
          type="password"
        />

        <img
          alt="authIcon"
          loading="lazy"
          className="auth_Icon"
          src={password}
        />
      </div>
      <div className="mb-2 auth_inp_container">
        <input
          placeholder="confirm password"
          className="auth_inp"
          type="password"
        />

        <img
          alt="authIcon"
          loading="lazy"
          className="auth_Icon"
          src={password}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button className="rounded-pill btn">send</button>
      </div>
    </div>
  );
};

export default NewPasswordForm;
