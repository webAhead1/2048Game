import React from "react";
import keyHandlers from "../../utils/keyHandler";
import gameUtils from "../../utils/gameUtils";
import "./frameStyle.css";
import Message from "../message/Message";
import Score from "../../components/score/Score";

let cellId = 0;

function GameFrame(props) {
  React.useEffect(() => {
    props.updateNumbers(gameUtils.startNewGame());
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        const arr = keyHandlers.arrowDown(props.numbers, props.scoreState[0]);
        props.updateNumbers(arr.array);
        props.updateScore([arr.score, props.scoreState[1]]);
      } else if (event.key == "ArrowUp") {
        const arr = keyHandlers.arrowUp(props.numbers, props.scoreState[0]);
        props.updateNumbers(arr.array);
        props.updateScore([arr.score, props.scoreState[1]]);
      } else if (event.key == "ArrowRight") {
        const arr = keyHandlers.arrowRight(props.numbers, props.scoreState[0]);
        props.updateNumbers(arr.array);
        props.updateScore([arr.score, props.scoreState[1]]);
      } else if (event.key == "ArrowLeft") {
        const arr = keyHandlers.arrowLeft(props.numbers, props.scoreState[0]);
        props.updateNumbers(arr.array);
        props.updateScore([arr.score, props.scoreState[1]]);
      }
      if (gameUtils.gameWon(props.numbers)) {
        props.updateGameState("gameWon");
        document.body.style.zoom = "82%";
      }
      if (gameUtils.getEmptyCells(props.numbers).length === 0) {
        if (!gameUtils.hasMoreSteps(props.numbers)) {
          props.updateGameState("gameOver");
          document.body.style.zoom = "82%";
        }
      } else if (
        event.key === "ArrowDown" ||
        event.key == "ArrowUp" ||
        event.key == "ArrowRight" ||
        event.key == "ArrowLeft"
      ) {
        props.updateNumbers(gameUtils.addRandomCell(props.numbers));
      }
      if (gameUtils.score(props.numbers) !== props.scoreState[0]) {
        let newScore = [];
        newScore.push(gameUtils.score(props.numbers));
        newScore.push(props.scoreState[1]);
        props.updateScore(newScore);
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
      <Score scoreState={props.scoreState} />
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
