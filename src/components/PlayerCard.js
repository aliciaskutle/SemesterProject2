import React, { useState, useEffect } from "react";
import "../styles/playercard.css";

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

  return (
    <div className="player-container">
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h3>{person.name}</h3>
          <img src={`images/${props.id}.svg`} alt="house shield"></img>
        </>
      )}
    </div>
  );
}

export default PlayerCard;
