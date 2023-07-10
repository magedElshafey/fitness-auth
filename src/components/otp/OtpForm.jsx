import React from "react";
import style from "./otp.module.css";
const OtpForm = () => {
  return (
    <div>
      <div className="d-flex align-items-center gap-4 justify-content-center mt-3 mb-4">
        <input type="text" className={style.otpInp} />
        <input type="text" className={style.otpInp} />
        <input type="text" className={style.otpInp} />
        <input type="text" className={style.otpInp} />
      </div>
      <div className="d-flex justify-content-center">
        <button className="rounded-pill btn">send</button>
      </div>
    </div>
  );
};

export default OtpForm;
