import React from "react";
import style from "./authIntro.module.css";
import { Link } from "react-router-dom";
const AuthIntro = ({ question, link, path, title, desc }) => {
  return (
    <div>
      <div className="d-flex gap-1 justify-content-end py-5 mb-5">
        <span className={`mx-0  p-0 mt-0 ${style.question} `}>{question}</span>
        <Link to={`/${path}`} className={style.link}>
          {link}
        </Link>
      </div>
      <h3 className={`mx-0 p-0 mt-0 mb-2 ${style.title}`}>{title}</h3>
      <span className={`d-inline-block ${style.desc} mx-0 mt-0 mb-5 p-0 `}>
        {desc}
      </span>
    </div>
  );
};

export default AuthIntro;
