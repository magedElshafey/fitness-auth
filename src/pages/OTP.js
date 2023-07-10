import React from "react";
import AuthImg from "../components/utils/authImg/AuthImg.jsx";
import ForgetIntro from "../components/utils/forgetIntro/ForgetIntro.jsx";
import OtpForm from "../components/otp/OtpForm.jsx";
const OTP = () => {
  return (
    <div className="container pt-2 mt">
      <div className="row justify-content-center gap-2">
        <div className="col-12 col-md-5 mb-md-0">
          <AuthImg />
        </div>
        <div className="col-12 col-md-6  mb-md-0">
          <ForgetIntro
            title="Verfication code"
            desc="enter your Verfication code to continue"
          />
          <OtpForm />
        </div>
      </div>
    </div>
  );
};

export default OTP;
