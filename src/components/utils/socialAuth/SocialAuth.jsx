import React from "react";
import style from "./socialAuth.module.css";
import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook 1.svg";
const SocialAuth = ({ intro }) => {
  return (
    <div className="mt-4 d-flex align-items-center gap-4">
      <p className={`m-0 p-0 ${style.intro}`}>{intro}</p>
      <div className={style.box}>
        <img
          loading="lazy"
          alt="google_auth"
          src={google}
          className={style.google}
        />
      </div>
      <div className={style.box}>
        <img
          loading="lazy"
          alt="google_auth"
          src={facebook}
          className={style.google}
        />
      </div>
    </div>
  );
};

export default SocialAuth;
