import React from "react";
import email from "../../assets/email.svg";
const ForgetForm = () => {
  return (
    <form>
      <div className="mb-2 auth_inp_container">
        <input placeholder="email" className="auth_inp" type="email" />

        <img alt="authIcon" loading="lazy" className="auth_Icon" src={email} />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="rounded-pill btn">send</button>
      </div>
    </form>
  );
};

export default ForgetForm;
