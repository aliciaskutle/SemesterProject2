import React from "react";
import "../styles/boardgame.css";
import Logo from "./Logo";
import Dice from "./Dice";

function Boardgame(props) {
  return (
    <div>
      <Logo />
      <div className="board-content">
        <div className="player-container">
          <h2>Player 1</h2>
          <div className="dice1">
            <Dice />
          </div>
          <div className="player1"></div>
        </div>

        <div className="board-container">
          <div className="board-field">Start</div>
          <div className="board-field">1</div>
          <div className="board-field">2</div>
          <div className="board-field">3</div>
          <div className="board-field">4</div>
          <div className="board-field">5</div>
          <div className="board-field">6</div>
          <div className="board-field">7</div>
          <div className="board-field">8</div>
          <div className="board-field">9</div>
          <div className="board-field">10</div>
          <div className="board-field">11</div>
          <div className="board-field">12</div>
          <div className="board-field">13</div>
          <div className="board-field">14</div>
          <div className="board-field">15</div>
          <div className="board-field">16</div>
          <div className="board-field">17</div>
          <div className="board-field">18</div>
          <div className="board-field">19</div>
          <div className="board-field">20</div>
          <div className="board-field">21</div>
          <div className="board-field">22</div>
          <div className="board-field">23</div>
          <div className="board-field">24</div>
          <div className="board-field">25</div>
          <div className="board-field">26</div>
          <div className="board-field">27</div>
          <div className="board-field">28</div>
          <div className="board-field">29</div>
          <div className="board-field">30</div>
          <div className="board-field">31</div>
          <div className="board-field">32</div>
          <div className="board-field">33</div>
          <div className="board-field">End</div>
        </div>

        <div className="player-container">
          <h2>Player 2</h2>
          <div className="dice2">
            <Dice />
          </div>
          <div className="player2"></div>
        </div>
      </div>
    </div>
  );
}

export default Boardgame;
