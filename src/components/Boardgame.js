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
      <div className="header">
        <div className="header-sidebar sidebar1">
          <h3>Instructions:</h3>
          <p>
            Player 1 has to click the "Roll dice" button to start the game. Then
            the turns will swap - except if you roll a six, then you will get
            another turn.
          </p>
        </div>
        <Logo />
        <div className="header-sidebar sidebar2">
          <h3>Warning!</h3>
          <p>
            Beware of the traps along your way to finish the game. You might be
            unlucky and get a penalty that will delay you towards the goal.
          </p>
        </div>
      </div>
      <div className="board-content">
        <div className="dice-container ">
          <div className="player1">
            <h2>Player 1</h2>
            <h3 className="player-h3">{props.selectedPlayers[0].name}</h3>
            <img
              className="player-shield"
              src={`images/${props.selectedPlayers[0].url
                .replace("https://anapioficeandfire.com/api/characters/", "")
                .replace(
                  "https://www.anapioficeandfire.com/api/characters/",
                  ""
                )}.svg`}
              alt="house shield pawn"
            />
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
            <h3 className="player-h3">{props.selectedPlayers[1].name}</h3>
            <img
              className="player-shield"
              src={`images/${props.selectedPlayers[1].url
                .replace("https://anapioficeandfire.com/api/characters/", "")
                .replace(
                  "https://www.anapioficeandfire.com/api/characters/",
                  ""
                )}.svg`}
              alt="house shield pawn"
            />
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
