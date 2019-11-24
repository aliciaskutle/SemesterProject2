import React from "react";
import MyLogo from "../images/logo.svg";
import "../styles/logo.css";

function Logo() {
  return (
    <div className="logo-container">
      <img src={MyLogo} alt="gameLogo" className="logo"></img>
    </div>
  );
}

export default Logo;
