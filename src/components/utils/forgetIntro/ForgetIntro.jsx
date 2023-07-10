import React from "react";
import style from "./forgetIntro.module.css";
import lock from "../../../assets/locksvg.svg";
const ForgetIntro = ({ title, desc }) => {
  return (
    <div className="mt-5 d-flex flex-column align-items-center gap-5">
      <img loading="lazy" src={lock} alt="lock/img" className={style.lock} />
      <div className="d-flex flex-column align-items-center">
        <p className={`${style.title} m-0 p-0`}>{title}</p>
        <p className={`${style.desc} m-0 p-0`}>{desc}</p>
      </div>
    </div>
  );
};

export default ForgetIntro;
