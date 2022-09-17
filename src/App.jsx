import "./App.css";
import React from "react";
import Game from "./components/game/Game";
import Heading from "./components/Heading/Heading";
import LogOut from "./components/LogOut/LogOut";
import NewGame from "./components/newGame/NewGame";
import Instructions from "./components/game_instructions/Instructions";

function App() {
  const [scoreState, updateScore] = React.useState([0, 0]);
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
        scoreState={scoreState}
        updateScore={updateScore}
      />
      <LogOut />
      <NewGame updateNumbers={updateNumbers} />
      <Instructions />
      <NewGame
        updateNumbers={updateNumbers}
        updateGameState={updateGameState}
        updateScore={updateScore}
        scoreState={scoreState}
      />
    </main>
  );
}

export default App;
