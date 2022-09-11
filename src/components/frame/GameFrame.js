import React from "react";
import keyHandlers from "../../scripts/keyHandler";
import "./frameStyle.css";

let cellId = 0;

function GameFrame(props) {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        console.log(event.key);
        props.updateNumbers(keyHandlers.arrowDown(props.numbers));
      }
      console.log("key down");
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
