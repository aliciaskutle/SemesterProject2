import React, { useState } from "react";
import "../styles/dice.css";

function Dice() {
  const [eyes, setEyes] = useState(1);

  const handleDiceThrow = () => {
    setEyes(Math.floor(Math.random() * 6 + 1));
  };

  return (
    <div>
      <button onClick={handleDiceThrow}>Roll dice</button>
      <img className="dice" src={`images/${eyes}.svg`} alt="dice" />
    </div>
  );
}

export default Dice;
