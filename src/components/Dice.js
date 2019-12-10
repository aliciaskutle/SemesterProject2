import React, { useState, useEffect } from "react";
import "../styles/dice.css";

function Dice(props) {
  const [eyes, setEyes] = useState(1);

  const handleDiceThrow = () => {
    const diceRoll = Math.floor(Math.random() * 6 + 1);
    setEyes(diceRoll);

    if (props.player === "1") {
      props.setPlayers(
        props.selectedPlayers.map((player, index) => {
          if (index === 0) {
            const newPosition = player.position + diceRoll;
            if (newPosition >= 33) {
              props.setGameState("finished");
            }
            return { ...player, position: newPosition };
          } else {
            return player;
          }
        })
      );
    }

    if (props.player === "2") {
      props.setPlayers(
        props.selectedPlayers.map((player, index) => {
          if (index === 1) {
            const newPosition = player.position + diceRoll;
            if (player.position >= 33) {
              props.setGameState("finished");
            }
            return { ...player, position: newPosition };
          } else {
            return player;
          }
        })
      );
    }
  };

  return (
    <div>
      <img className="dice" src={`images/${eyes}.svg`} alt="dice" />
      <button onClick={handleDiceThrow}>Roll dice</button>
    </div>
  );
}

export default Dice;
