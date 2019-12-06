import React from "react";
import "../styles/playerpawn.css";

function PlayerPawn(props) {
  const updateUrl = () => {
    let baseUrl = "https://anapioficeandfire.com/api/characters/";
    return props.id.replace(baseUrl, "");
  };

  return (
    <div>
      <img
        className="pawn-img"
        src={`images/${updateUrl()}.svg`}
        alt="house shield pawn"
      />
    </div>
  );
}

export default PlayerPawn;
