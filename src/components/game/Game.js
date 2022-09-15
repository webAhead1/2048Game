import React from "react";
import keyHandlers from "../../utils/keyHandler";
import gameUtils from "../../utils/gameUtils";
import "./frameStyle.css";
import Message from "../message/Message";

let cellId = 0;
let gameOver = false;
let gameWon = false;
function GameFrame(props) {
  React.useEffect(() => {
    props.updateNumbers(gameUtils.startNewGame());
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        console.log(event.key);
        props.updateNumbers(keyHandlers.arrowDown(props.numbers));
      } else if (event.key == "ArrowUp") {
        props.updateNumbers(keyHandlers.arrowUp(props.numbers));
      } else if (event.key == "ArrowRight") {
        props.updateNumbers(keyHandlers.arrowRight(props.numbers));
      } else if (event.key == "ArrowLeft") {
        props.updateNumbers(keyHandlers.arrowLeft(props.numbers));
      }
      if (gameUtils.gameWon(props.numbers)) {
        gameWon = true;
      }
      if (gameUtils.getEmptyCells(props.numbers).length === 0) {
        if (!gameUtils.hasMoreSteps(props.numbers)) gameOver = true;
      } else if (
        event.key === "ArrowDown" ||
        event.key == "ArrowUp" ||
        event.key == "ArrowRight" ||
        event.key == "ArrowLeft"
      ) {
        props.updateNumbers(gameUtils.addRandomCell(props.numbers));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const cleanup = () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    return cleanup;
  });

  return gameWon ? (
    <Message style="winMessage">Game Won</Message>
  ) : gameOver ? (
    <Message style="loseMessage">Game Over</Message>
  ) : (
    <div className="gameFrame">
      {props.numbers.map((row) =>
        row.map((number) => (
          <div className="cell" key={cellId++}>
            <label className="cellNumber">{number > 0 ? number : null}</label>
          </div>
        ))
      )}
    </div>
  );
}

export default GameFrame;
