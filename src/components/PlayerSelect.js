import React from "react";
import "../styles/playerselect.css";
import Logo from "./Logo";
import PlayerCard from "./PlayerCard";

function PlayerSelect() {
  return (
    <div className="content">
      <div>
        <Logo />
      </div>
      <div>
        <h1>Select two players</h1>
        <h2>to compete against each other</h2>
      </div>
      <div className="cards-container">
        <div>
          <PlayerCard id="148" />
        </div>
        <div>
          <PlayerCard id="688" />
        </div>
        <div>
          <PlayerCard id="823" />
        </div>
        <div>
          <PlayerCard id="1963" />
        </div>
        <div>
          <PlayerCard id="1090" />
        </div>
        <div>
          <PlayerCard id="238" />
        </div>
        <div>
          <PlayerCard id="326" />
        </div>
        <div>
          <PlayerCard id="271" />
        </div>
        <div>
          <PlayerCard id="223" />
        </div>
        <div>
          <PlayerCard id="16" />
        </div>
      </div>
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
