import React from "react";
import "./NewGame.css";

function NewGame(props) {
  return (
    <button className="restart-button" onClick={(e) => props.updateNumbers([])}>
      New Game
    </button>
  );
}
export default NewGame;
