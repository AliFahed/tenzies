import React from "react";

const Game = () => {
  return (
    <main className="main">
      <div className="game-container">
        <div className="header-container">
          <h1 className="title">Tenzies</h1>
          <p className="game-details">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className="dice-container">
          <div className="upper-dice">
            <div className="dice">1</div>
            <div className="dice">1</div>
            <div className="dice">1</div>
            <div className="dice">1</div>
            <div className="dice">1</div>
          </div>
          <div className="bottom-dice">
            <div className="dice">1</div>
            <div className="dice">1</div>
            <div className="dice">1</div>
            <div className="dice">1</div>
            <div className="dice">1</div>
          </div>
        </div>
        <div className="button-container">
          <button className="roll-btn">Roll</button>
        </div>
      </div>
    </main>
  );
};

export default Game;
