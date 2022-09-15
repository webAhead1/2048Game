import "./App.css";
import React from "react";
import Game from "./components/game/Game";
import Heading from "./components/Heading/Heading";
import LogOut from "./components/LogOut/LogOut";
import NewGame from "./components/newGame/NewGame";

function App() {
  const [numbers, updateNumbers] = React.useState([]);
  return (
    <main className="App">
      <Heading />

      <Game numbers={numbers} updateNumbers={updateNumbers} />
      <LogOut />
      <NewGame updateNumbers={updateNumbers} />
    </main>
  );
}

export default App;
