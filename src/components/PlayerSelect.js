import React from "react";
import "../styles/playerselect.css";
import Logo from "./Logo";
import PlayerCard from "./PlayerCard";

function PlayerSelect() {
  return (
    <div className="content">
      <Logo />
      <h1>Select two players</h1>
      <h2>to compete against each other</h2>
      <PlayerCard />
    </div>
  );
}

export default PlayerSelect;
