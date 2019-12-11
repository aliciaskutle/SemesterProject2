import React, { useState } from "react";
import "../styles/boardgame.css";
import Logo from "./Logo";
import Dice from "./Dice";
import PlayerPawn from "./PlayerPawn";

function Boardgame(props) {
  const [activePlayer, setActivePlayer] = useState("1");
  const boardFieldClassName = index => {
    return index === 0
      ? "start"
      : index === 4
      ? "trap1"
      : index === 9
      ? "trap2"
      : index === 19
      ? "trap3"
      : index === 24
      ? "trap4"
      : index === 29
      ? "trap5"
      : index === 34
      ? "end"
      : index;
  };

  return (
    <div>
      <Logo />
      <div className="board-content">
        <div className="dice-container ">
          <div className="player1">
            <h2>Player 1</h2>
          </div>
          <div className="dice1">
            <Dice
              player="1"
              setPlayers={props.setPlayers}
              selectedPlayers={props.selectedPlayers}
              gameState={props.gameState}
              setGameState={props.setGameState}
              activePlayer={activePlayer}
              setActivePlayer={setActivePlayer}
            />
          </div>
        </div>
        <div className="board-container">
          {Array(35)
            .fill()
            .map((_, index) => index)
            .map((_, index) => (
              <div
                key={index}
                className={`board-field ${boardFieldClassName(index)}`}
              >
                {index === 0
                  ? "Start"
                  : index === 4
                  ? "The Red wedding"
                  : index === 9
                  ? "Daenery's dragons"
                  : index === 19
                  ? "The Night King"
                  : index === 24
                  ? "The Red Woman"
                  : index === 29
                  ? "Wildfire"
                  : index === 34
                  ? "End"
                  : index}
                {props.selectedPlayers[0].position === index ? (
                  <PlayerPawn id={props.selectedPlayers[0].url} />
                ) : null}
                {props.selectedPlayers[1].position === index ? (
                  <PlayerPawn id={props.selectedPlayers[1].url} />
                ) : null}
              </div>
            ))}
        </div>

        <div className="dice-container">
          <div className="player2">
            <h2>Player 2</h2>
          </div>
          <div className="dice2">
            <Dice
              player="2"
              setPlayers={props.setPlayers}
              selectedPlayers={props.selectedPlayers}
              gameState={props.gameState}
              setGameState={props.setGameState}
              activePlayer={activePlayer}
              setActivePlayer={setActivePlayer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boardgame;
