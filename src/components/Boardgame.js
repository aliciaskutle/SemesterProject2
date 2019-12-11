import React from "react";
import "../styles/boardgame.css";
import Logo from "./Logo";
import Dice from "./Dice";
import PlayerPawn from "./PlayerPawn";

function Boardgame(props) {
  return (
    <div>
      <Logo />
      <div className="board-content">
        <div className="player-container ">
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
            />
          </div>
        </div>
        <div className="board-container">
          {Array(35)
            .fill()
            .map((_, index) => index)
            .map((_, index) => (
              <div key={index} className="board-field">
                {index === 0
                  ? "Start"
                  : index === 4
                  ? "Red wedding"
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

        <div className="player-container">
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boardgame;
