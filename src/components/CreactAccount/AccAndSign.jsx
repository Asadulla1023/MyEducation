import React, { useState } from "react";

import { SignIn } from "./SignIn";

import "./signIn.css";

import avatar from "./userAvatar.png";

export const AccAndSign = () => {
  const [signIn, setSignIn] = useState(false);

  const [btnValue, setBtnValue] = useState("Sign in")

  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("username"));

  const signInOpener = () => {
    setSignIn(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <div className="wqd">
      <div className="efwf">
        <div className="profile">
          <img src={avatar} alt={avatar} width="74px" />
          <div className="aboutUser">
            <h3>User: {isAuth && localStorage.getItem("username")}</h3>
            <h3>Region: {localStorage.getItem("location")}</h3>
          </div>
        </div>
        <div className="signIn">
          <button className="signInBtn" onClick={signInOpener} type="button">
            {btnValue}
          </button>
        </div>
      </div>
      {signIn && (
        <SignIn setSignIn={setSignIn} setBtnValue={setBtnValue} isAuth={isAuth} setIsAuth={setIsAuth} />
      )}
    </div>
  );
};
