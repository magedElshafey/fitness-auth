import React from "react";
import AuthImg from "../components/utils/authImg/AuthImg.jsx";
import AuthIntro from "../components/utils/authIntro/AuthIntro.jsx";
import LoginForm from "../components/login/LoginForm.jsx";
import SocialAuth from "../components/utils/socialAuth/SocialAuth.jsx";
const Login = () => {
  return (
    <div className="container pt-2 mt">
      <div className="row justify-content-center gap-2">
        <div className="col-12 col-md-5 mb-md-0">
          <AuthImg />
        </div>
        <div className="col-12 col-md-6  mb-md-0">
          <AuthIntro
            question="don't have an account ? "
            link="regester"
            path="reg"
            title="welcome back!"
            desc="sign in to your account"
          />
          <LoginForm />
          <SocialAuth intro="sign in with" />
        </div>
      </div>
    </div>
  );
};

export default Login;
