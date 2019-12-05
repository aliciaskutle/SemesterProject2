import React, { useState } from "react";
import "../styles/dice.css";

function Dice() {
  const [eyes, setEyes] = useState(1);

  const handleDiceThrow = () => {
    setEyes(Math.floor(Math.random() * 6 + 1));
  };

  return (
    <div>
      <img className="dice" src={`images/${eyes}.svg`} alt="dice" />
      <button onClick={handleDiceThrow}>Roll dice</button>
    </div>
  );
}

export default Dice;
