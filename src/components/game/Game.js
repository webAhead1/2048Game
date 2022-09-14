import React from "react";
import keyHandlers from "../../utils/keyHandler";
import gameUtils from "../../utils/gameUtils";
import "./frameStyle.css";
import Message from "../message/Message";

let cellId = 0;
let gameOver= false;
let gameWon= false;
function GameFrame(props) {
  React.useEffect(() =>{
  
let initialNumbers = [
  [1, 2, 3, 4],
  [3, 5, 6, 5],
  [0, 0, 8, 11],
  [3, 7, 9, 7],
];

initialNumbers=gameUtils.addRandomCell(initialNumbers);
initialNumbers=gameUtils.addRandomCell(initialNumbers);
props.updateNumbers(initialNumbers);
  } ,[])

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      
      if (event.key === "ArrowDown") {
        console.log(event.key);
        props.updateNumbers(keyHandlers.arrowDown(props.numbers));
      }
      else if (event.key=="ArrowUp"){
        props.updateNumbers(keyHandlers.arrowUp(props.numbers));
      }
      else if(event.key=="ArrowRight"){
        props.updateNumbers(keyHandlers.arrowRight(props.numbers));
      }
      else if(event.key=="ArrowLeft"){
        props.updateNumbers(keyHandlers.arrowLeft(props.numbers));
      }
      if(gameUtils.gameWon(props.numbers)){
        gameWon=true;
      }
      if(gameUtils.getEmptyCells(props.numbers).length===0){
        if(!gameUtils.hasMoreSteps(props.numbers))
            gameOver=true;
      }
      else if(event.key === "ArrowDown"||event.key=="ArrowUp"||event.key=="ArrowRight"||event.key=="ArrowLeft"){
        props.updateNumbers(gameUtils.addRandomCell(props.numbers));
      }


    };

    window.addEventListener("keydown", handleKeyDown);

    const cleanup = () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    return cleanup;
  });

  return (
    gameWon ? <Message Message="Game Won" />:
    gameOver ? <Message Message="Game Over" /> :
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
