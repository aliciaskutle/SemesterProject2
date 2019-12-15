import React from "react";
import Logo from "./Logo";
import "../styles/result.css";

function Result(props) {
  const winner = props.selectedPlayers.find(player => player.position >= 33);

  const updateUrl = () => {
    let baseUrl = "https://anapioficeandfire.com/api/characters/";
    let baseUrlWithWWW = "https://www.anapioficeandfire.com/api/characters/";
    return winner.url.replace(baseUrl, "").replace(baseUrlWithWWW, "");
  };

  const handleRestart = () => {
    window.location.reload();
    // props.setGameState("waitingToStart");
  };

  return (
    <div className="result-container">
      <Logo />
      <div className="result-content">
        <button onClick={handleRestart} className="result-button">
          Play again?
        </button>
        <h1 className="winner-h1">The winner of the Board Battle is:</h1>
        <div className="winner-info">
          <h2 className="winner-h2">{winner.name}</h2>
          <img
            className="winner-shield"
            src={`images/${updateUrl()}.svg`}
            alt="house shield pawn"
          />
        </div>
        <img className="rotate-star" src="images/star.svg" alt="star" />
      </div>
    </div>
  );
}

export default Result;
