// import './App.css'
import './SelectAGame.css';
// import React from 'react';

function SelectAGame() {
  return (
    <>
  <div className="main-Select">
    <div className="Title">
      <img src="./image/Select A GAME.png" alt="title" />
    </div>
    <div className="Mode">
      <button
        className="buttone"
        onClick="document.location = 'easymode.html'"
        style={{ color: "white" }}
      >
        โหมดง่าย
      </button>
    </div>
    <div className="Mode">
      <button
        className="buttonn"
        onClick="document.location = 'normalmode.html' "
        style={{ color: "white" }}
      >
        โหมดปกติ
      </button>
    </div>
    <div className="Menu">
      <img
        src="./image/home.png"
        align="right"
        onClick="document.location = 'tenanswers.html'"
      />
    </div>
  </div>
</>
  );
}

export default SelectAGame;
