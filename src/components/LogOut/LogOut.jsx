import React from "react";
import "./LogOut.css";

function LogOut(props) {
  return (
    <button className="logOut-button" onClick={() => props.updatePage("login")}>
      Log Out
    </button>
  );
}
export default LogOut;
