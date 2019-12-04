import React, { useState } from "react";
import "./App.css";
import PlayerSelect from "./components/PlayerSelect";
import Boardgame from "./components/Boardgame";
import Result from "./components/Result";

function App() {
  const [players, setPlayers] = useState([]);
  const [gameState, setGameState] = useState("waitingToStart");

  let component = null;

  if (gameState === "waitingToStart") {
    component = (
      <PlayerSelect
        selectedPlayers={players}
        setPlayers={setPlayers}
        setGameState={setGameState}
      />
    );
  }

  if (gameState === "started") {
    component = <Boardgame />;
  }

  if (gameState === "finished") {
    component = <Result />;
  }

  return <div className="App">{component}</div>;
}

export default App;
