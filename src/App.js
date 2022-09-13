import "./App.css";
import React from "react";
import Game from "./components/game/Game";
import Heading from "./components/Heading/Heading";
import LogOut from "./components/LogOut/LogOut";

let rowRand = Math.floor(Math.random() * 4);
let colRand = Math.floor(Math.random() * 4);

let initialNumbers = [
  [2, 2, 2, 0],
  [2, 0, 2, 0],
  [0, 0, 2, 0],
  [0, 0, 2, 0],
];

initialNumbers[rowRand][colRand] = 2;

function App() {
  const [numbers, updateNumbers] = React.useState(initialNumbers);
  console.log(numbers);
  return (
    <main className="App">
      <Heading />

      <Game numbers={numbers} updateNumbers={updateNumbers} />
      <LogOut />
    </main>
  );
}

export default App;
