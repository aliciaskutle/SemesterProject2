import React, { useState } from "react";
import "../styles/dice.css";

function Dice(props) {
  const [eyes, setEyes] = useState(1);

  const handleDiceThrow = () => {
    const diceRoll = Math.floor(Math.random() * 6 + 1);
    setEyes(diceRoll);
    // Player 1 = props.players[0]
    // Player 2 = props.players[1]

    if (props.player === "1") {
      props.setPlayers(
        props.selectedPlayers.map((player, index) => {
          if (index === 0) {
            return { ...player, position: player.position + diceRoll };
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
            return { ...player, position: player.position + diceRoll };
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
