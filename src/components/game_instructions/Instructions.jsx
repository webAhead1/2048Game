import React from "react";
import "./Instructions.css";

function Instructions() {
  return (
    <div className="Instructions">
      <h1>HOW TO PLAY:</h1>
      <p>
        Use your arrow keys to move the tiles. Tiles with the same number merge
        into one when they touch. Add them up to reach 2048!
      </p>
    </div>
  );
}

export default Instructions;
