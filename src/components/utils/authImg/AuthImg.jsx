import React from "react";
import style from "./authImg.module.css";
import mainImg from "../../../assets/authImg.png";
const AuthImg = () => {
  return (
    <img
      alt="auth/img"
      loading="lazy"
      src={mainImg}
      className={style.mainImg}
    />
  );
};

export default AuthImg;
