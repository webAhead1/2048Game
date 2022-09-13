import "./App.css";
import React from "react";
import Game from "./components/game/Game";
import Heading from "./components/Heading/Heading";
import LogOut from "./components/LogOut/LogOut";

function App() {
  const [numbers, updateNumbers] = React.useState([]);
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
