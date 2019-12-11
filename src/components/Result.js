import React from "react";
import Logo from "./Logo";
import "../styles/result.css";
//import PlayerPawn from "./PlayerPawn";

function Result() {
  return (
    <div className="result-container">
      <Logo />
      <div className="result-content">
        <h1 className="winner-h1">The winner of Board Battle is:</h1>
        <h3 className="winner-h2">Arya Stark</h3>
        <img className="rotate-star" src="images/star.svg" alt="star" />
      </div>
    </div>
  );
}

export default Result;
