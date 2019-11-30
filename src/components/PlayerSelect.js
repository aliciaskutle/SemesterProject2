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
      <PlayerCard id="63" />
      <PlayerCard id="66" />
      <PlayerCard id="69" />
      <PlayerCard id="22" />
    </div>
  );
}

export default PlayerSelect;

//Arya Stark - 148
//Lysa Arryb - 688
//Petyr Baelish - 823
//Stannis Baratheon - 1963
//Walder Frey - 1090
//Cersei Lannister - 238
//Oberyn Nymeros Martell - 1770
//Daenerys Targaryen - 271
//Brynden Tully - 223
//Margaery Tyrell - 16
