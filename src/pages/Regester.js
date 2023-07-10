import React from "react";
import AuthImg from "../components/utils/authImg/AuthImg.jsx";
import AuthIntro from "../components/utils/authIntro/AuthIntro.jsx";
import LoginForm from "../components/login/LoginForm.jsx";
import SocialAuth from "../components/utils/socialAuth/SocialAuth.jsx";
import RegForm from "../components/reg/RegForm.jsx";
const Regester = () => {
  return (
    <div className="container pt-2 mt">
      <div className="row justify-content-center gap-2">
        <div className="col-12 col-md-5 mb-md-0">
          <AuthImg />
        </div>
        <div className="col-12 col-md-6  mb-md-0">
          <AuthIntro
            question="already have an account ? "
            link="login"
            path="login"
            title="welcome to fitness!"
            desc="regester your account"
          />
          <RegForm />
          <SocialAuth intro="create account with" />
        </div>
      </div>
    </div>
  );
};

export default Regester;
