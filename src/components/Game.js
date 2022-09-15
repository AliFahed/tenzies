import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

const Game = () => {
  const allNewDice = () => {
    const arr = [];
    const min = 1;
    const max = 6;
    let randomNum;

    // generate 10 random numbers between 1 - 6
    for (let i = 1; i <= 10; i++) {
      randomNum = Math.floor(Math.random() * (max - min + 1) + min);
      arr.push({
        value: randomNum,
        isHeld: false,
        id: nanoid(),
      });
    }

    return arr;
  };

  const [dice, setDice] = React.useState(allNewDice());

  const rollDice = () => {
    setDice(allNewDice());
  };

  const holdDice = (id) => {
    console.log(id);
  };

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

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
        <div className="dice-container">{diceElements}</div>
        <div className="button-container">
          <button className="roll-btn" onClick={rollDice}>
            Roll
          </button>
        </div>
      </div>
    </main>
  );
};

export default Game;
