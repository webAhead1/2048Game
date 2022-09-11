import React from "react";
import "./frameStyle.css";
let rowRand = Math.floor(Math.random()*4);
let colRand = Math.floor(Math.random()*4);

let numbers = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
numbers[rowRand][colRand]=2;
function GameFrame() {
  return (
    <div className="gameFrame">
      {numbers.map((row) =>
        row.map((number) => (
          <div className="cell">
            <label className="cellNumber">{number>0 ? number : null}</label>
          </div>
        ))
      )}
    </div>
  );
}

export default GameFrame;
