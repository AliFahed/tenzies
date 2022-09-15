import React from "react";

const Die = (props) => {
  const styles = {
    background: props.isHeld ? "#59e391" : "#fff",
  };

  return (
    <div className="dice" style={styles} onClick={props.holdDice}>
      {props.value}
    </div>
  );
};

export default Die;
