import React from "react";
import "./Message.scss";

function Message(props) {
  return <h1 className="message">{props.Message}</h1>;
}
export default Message;
