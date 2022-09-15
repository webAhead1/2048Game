import React from "react";
import keyHandlers from "../../utils/keyHandler";
import gameUtils from "../../utils/gameUtils";
import "./frameStyle.css";
import Message from "../message/Message";

let cellId = 0;

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
        props.updateGameState("gameWon");
      }
      if (gameUtils.getEmptyCells(props.numbers).length === 0) {
        if (!gameUtils.hasMoreSteps(props.numbers))
          props.updateGameState("gameOver");
      } else if (
        event.key === "ArrowDown" ||
        event.key == "ArrowUp" ||
        event.key == "ArrowRight" ||
        event.key == "ArrowLeft"
      ) {
        props.updateNumbers(gameUtils.addRandomCell(props.numbers));
      }
    };

    if (props.gameState === "inProgress")
      window.addEventListener("keydown", handleKeyDown);

    const cleanup = () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    return cleanup;
  });

  return (
    <div className="container">
      {props.gameState == "gameWon" ? (
        <Message style="winMessage">Game Won</Message>
      ) : props.gameState == "gameOver" ? (
        <Message style="loseMessage">Game Over</Message>
      ) : null}
      <div className={props.gameState === "inProgress" ? "show" : "hide"}>
        <div className="gameFrame">
          {props.numbers.map((row) =>
            row.map((number) => (
              <div className="cell" key={cellId++}>
                <label className="cellNumber">
                  {number > 0 ? number : null}
                </label>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default GameFrame;
