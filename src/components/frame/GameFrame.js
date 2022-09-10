import React from "react";
import "./frameStyle.css";

let numbers = [
  [0, 0, 0, 0],
  [0, 0, 3, 0],
  [0, 0, 2, 0],
  [0, 0, 0, 0],
];

function GameFrame() {
  return (
    <div className="gameFrame">
      {numbers.map((row) =>
        row.map((number) => (
          <div className="cell">
            <label className="cellNumber">{number}</label>
          </div>
        ))
      )}
    </div>
  );
}

export default GameFrame;
