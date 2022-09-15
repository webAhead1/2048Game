import "./App.css";
import React from "react";
import Game from "./components/game/Game";
import Heading from "./components/Heading/Heading";
import LogOut from "./components/LogOut/LogOut";
import NewGame from "./components/newGame/NewGame";
import { react } from "@babel/types";

function App() {
  const [numbers, updateNumbers] = React.useState([]);
  const [gameState, updateGameState] = React.useState("inProgress"); //inProgress | gameWon | gameOver
  return (
    <main className="App">
      <Heading />

      <Game
        numbers={numbers}
        updateNumbers={updateNumbers}
        gameState={gameState}
        updateGameState={updateGameState}
      />
      <LogOut />
      <NewGame
        updateNumbers={updateNumbers}
        updateGameState={updateGameState}
      />
    </main>
  );
}

export default App;
