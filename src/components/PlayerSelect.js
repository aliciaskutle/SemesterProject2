import React from "react";
import "../styles/playerselect.css";
import Logo from "./Logo";
import PlayerCard from "./PlayerCard";

function PlayerSelect(props) {
  const handleReselect = () => {
    props.setPlayers([]);
  };

  const handleStart = () => {
    props.setGameState("started");
  };

  return (
    <div className="content">
      <div>
        <Logo />
      </div>
      <div>
        <h1>Select two players</h1>
        <h2>to compete against each other</h2>
        {props.selectedPlayers.length === 2 ? (
          <div>
            <button onClick={handleStart}>Start game</button>
            <button onClick={handleReselect}>Select new players</button>
          </div>
        ) : null}
      </div>
      <div className="cards-container">
        <div>
          <PlayerCard
            id="148"
            selectedPlayers={props.selectedPlayers}
            setPlayers={props.setPlayers}
          />
        </div>
        <div>
          <PlayerCard
            id="688"
            selectedPlayers={props.selectedPlayers}
            setPlayers={props.setPlayers}
          />
        </div>
        <div>
          <PlayerCard
            id="823"
            selectedPlayers={props.selectedPlayers}
            setPlayers={props.setPlayers}
          />
        </div>
        <div>
          <PlayerCard
            id="1963"
            selectedPlayers={props.selectedPlayers}
            setPlayers={props.setPlayers}
          />
        </div>
        <div>
          <PlayerCard
            id="1090"
            selectedPlayers={props.selectedPlayers}
            setPlayers={props.setPlayers}
          />
        </div>
        <div>
          <PlayerCard
            id="238"
            selectedPlayers={props.selectedPlayers}
            setPlayers={props.setPlayers}
          />
        </div>
        <div>
          <PlayerCard
            id="326"
            selectedPlayers={props.selectedPlayers}
            setPlayers={props.setPlayers}
          />
        </div>
        <div>
          <PlayerCard
            id="271"
            selectedPlayers={props.selectedPlayers}
            setPlayers={props.setPlayers}
          />
        </div>
        <div>
          <PlayerCard
            id="223"
            selectedPlayers={props.selectedPlayers}
            setPlayers={props.setPlayers}
          />
        </div>
        <div>
          <PlayerCard
            id="16"
            selectedPlayers={props.selectedPlayers}
            setPlayers={props.setPlayers}
          />
        </div>
      </div>
    </div>
  );
}

export default PlayerSelect;

//Characters
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
