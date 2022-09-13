import React from "react";
import keyHandlers from "../../utils/keyHandler";
import addRandomCell from "../../utils/gameUtils";
import "./frameStyle.css";

let cellId = 0;

function GameFrame(props) {
  React.useEffect(() =>{
  
let initialNumbers = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

initialNumbers=addRandomCell(initialNumbers);
initialNumbers=addRandomCell(initialNumbers);
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
      if(event.key === "ArrowDown"||event.key=="ArrowUp"||event.key=="ArrowRight"||event.key=="ArrowLeft"){
        props.updateNumbers(addRandomCell(props.numbers));
      }

    };

    window.addEventListener("keydown", handleKeyDown);

    const cleanup = () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    return cleanup;
  });

  return (
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
