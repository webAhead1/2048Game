import React from "react";
import "./Heading.css";

function Heading(props) {
  return (
    <div className="Heading">
      <div className="Player-Name">
        Signed in as <h3>{props.loginData.email}</h3>
      </div>
      <p className="Game-Name">2048</p>
    </div>
  );
}

export default Heading;
