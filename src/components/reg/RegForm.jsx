import React from "react";
import user from "../../assets/user.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import password from "../../assets/password.svg";
const RegForm = () => {
  return (
    <form>
      <div className="mb-2 auth_inp_container">
        <input placeholder="name" className="auth_inp" type="text" />

        <img alt="authIcon" loading="lazy" className="auth_Icon" src={user} />
      </div>
      <div className="mb-2 auth_inp_container">
        <input placeholder="phone number" className="auth_inp" type="number" />

        <img alt="authIcon" loading="lazy" className="auth_Icon" src={phone} />
      </div>
      <div className="mb-2 auth_inp_container">
        <input placeholder="email" className="auth_inp" type="email" />

        <img alt="authIcon" loading="lazy" className="auth_Icon" src={email} />
      </div>
      <div className="mb-2 auth_inp_container">
        <input placeholder="password" className="auth_inp" type="password" />

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

      <div className=" my-2 d-flex justify-content-center a;ign-items-center">
        <button className="btn rounded-pill">sign up</button>
      </div>
    </form>
  );
};

export default RegForm;
