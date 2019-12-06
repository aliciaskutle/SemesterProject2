import React, { useState } from "react";
import "../styles/dice.css";

function Dice(props) {
  const [eyes, setEyes] = useState(1);

  const handleDiceThrow = () => {
    const diceRoll = Math.floor(Math.random() * 6 + 1);
    setEyes(diceRoll);
    props.setPlayers();
    console.log(props.players);
  };

  return (
    <div>
      <img className="dice" src={`images/${eyes}.svg`} alt="dice" />
      <button onClick={handleDiceThrow}>Roll dice</button>
    </div>
  );
}

export default Dice;
