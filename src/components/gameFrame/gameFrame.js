import React from "react";
import "./gameFrame.css";

let numbers = [
  [0, 0, 0, 0],
  [0, 0, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
function GameFrame() {
  return (
    <div className="gameFrame">
      {numbers.forEach((row) => {
        row.forEach((num) => {
          <div className="cell">
            <label>{num > 0 ? num : null}</label>
          </div>;
        });
      })}
    </div>
  );
}
