import React from "react";
import "../styles/dice.css";

function Dice(props) {
  return (
    <div>
      <button onClick={() => props.setEyes((Math.random() + 1) * 6)}>
        Roll
      </button>
      <img src={props.imageUrl} />
    </div>
  );
}

/* 
import Dice from './Dice';

function App() {
	const [eyes, setEyes] = useState(null)
	return (
		<Board eyes={eyes}/>
		<Dice imageUrl={`/img/${eyes}.jpg`} setEyes={setEyes} />
	)
}
*/

export default Dice;
