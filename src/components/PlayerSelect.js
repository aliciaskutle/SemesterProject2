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
      <PlayerCard id="148" />
      <PlayerCard id="688" />
      <PlayerCard id="823" />
      <PlayerCard id="1963" />
      <PlayerCard id="1090" />
      <PlayerCard id="238" />
      <PlayerCard id="326" />
      <PlayerCard id="271" />
      <PlayerCard id="223" />
      <PlayerCard id="16" />
    </div>
  );
}

export default PlayerSelect;

//Arya Stark - 148
//Lysa Arryn - 688
//Petyr Baelish - 823
//Stannis Baratheon - 1963
//Walder Frey - 1090
//Cersei Lannister - 238
//Doran Martell - 326
//Daenerys Targaryen - 271
//Brynden Tully - 223
//Margaery Tyrell - 16
