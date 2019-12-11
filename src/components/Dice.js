import React, { useState } from "react";
import "../styles/dice.css";

function Dice(props) {
  const [eyes, setEyes] = useState(1);

  //Traps:  4, 9, 19, 24, 29

  const handleDiceThrow = () => {
    const diceRoll = Math.floor(Math.random() * 6 + 1);
    setEyes(diceRoll);

    //Shorten down code
    if (props.player === "1") {
      props.setPlayers(
        props.selectedPlayers.map((player, index) => {
          if (index === 0) {
            const newPosition = player.position + diceRoll;
            if (newPosition === 4) {
              alert(
                "You accidentally entered The Red Wedding and where sent back two steps!"
              );
              return { ...player, position: newPosition - 2 };
            }
            if (newPosition === 9) {
              alert(
                "You where attacked by Daenerys Dragons - move back 4 steps!"
              );
              return { ...player, position: newPosition - 4 };
            }
            if (newPosition === 19) {
              alert(
                "The Night King is coming and you have to hide - go back one step to find a safe place to hide!"
              );
              return { ...player, position: newPosition - 1 };
            }
            if (newPosition === 24) {
              alert(
                "The Red Woman has cursed you - unfortunately you are moved back 3 steps!"
              );
              return { ...player, position: newPosition - 3 };
            }
            if (newPosition === 29) {
              alert(
                "Cersei Lannister has demanded Qyburn to let all his wildfire out in King's Landing - you are moved back 7 steps to avoid the fire!"
              );
              return { ...player, position: newPosition - 7 };
            }
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
            if (newPosition === 4) {
              alert(
                "You accidentally entered The Red Wedding and where sent back two steps!"
              );
              return { ...player, position: newPosition - 2 };
            }
            if (newPosition === 9) {
              alert(
                "You where attacked by Daenerys Dragons - move back 4 steps!"
              );
              return { ...player, position: newPosition - 4 };
            }
            if (newPosition === 19) {
              alert(
                "The Night King is coming and you have to hide - go back one step to find a safe place to hide!"
              );
              return { ...player, position: newPosition - 1 };
            }
            if (newPosition === 24) {
              alert(
                "The Red Woman has cursed you - unfortunately you are moved back 3 steps!"
              );
              return { ...player, position: newPosition - 3 };
            }
            if (newPosition === 29) {
              alert(
                "Cersei Lannister has demanded Qyburn to let all his wildfire out in King's Landing - you are moved back 7 steps to avoid the fire!"
              );
              return { ...player, position: newPosition - 7 };
            }
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

    if (diceRoll !== 6) {
      props.setActivePlayer(props.player === "1" ? "2" : "1");
    }
  };

  return (
    <div>
      <img className="dice" src={`images/${eyes}.svg`} alt="dice" />
      <button
        className="dice-button"
        onClick={handleDiceThrow}
        disabled={props.player !== props.activePlayer}
      >
        Roll dice
      </button>
    </div>
  );
}

export default Dice;
