import React, { useState, useEffect } from "react";
import "../styles/playercard.css";
/*import PlayerSelect from "./PlayerSelect";*/

function PlayerCard(props) {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/characters/${props.id}`)
      .then(response => response.json())
      .then(personData => {
        setPerson(personData);
        setLoading(false);
      });
  }, [props.id]);

  const isSelected = props.selectedPlayers.find(p => p.url === person.url);

  const handleClick = () => {
    if (props.selectedPlayers.length < 2 && !isSelected) {
      props.setPlayers([...props.selectedPlayers, person]);
    }
  };

  return (
    <div
      className={
        isSelected ? "player-container player-selected" : "player-container"
      }
      onClick={handleClick}
    >
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div className="player-info">
            <div className="info-1">
              <h3>{person.name}</h3>
            </div>
            <div className="info-2">
              <img src={`images/${props.id}.svg`} alt="house shield"></img>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PlayerCard;
