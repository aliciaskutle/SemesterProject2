import React, { useState } from "react";
import "./App.css";
import PlayerSelect from "./components/PlayerSelect";
/*import Boardgame from "./components/Boardgame";
import Result from "./components/Result";*/

function App() {
  const [players, setPlayers] = useState([]);
  console.log(players);
  return (
    <div className="App">
      <PlayerSelect selectedPlayers={players} setPlayers={setPlayers} />

      {/*
        <Boardgame />
      <Result /> */}
    </div>
  );
}

export default App;
