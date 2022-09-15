import React from "react";
import "./Message.scss";

function Message(props) {
  return (
    <div className={props.gameState != "inProgress" ? "show" : "hide"}>
      <h1 className={props.style}>{props.children}</h1>
    </div>
  );
}
export default Message;
