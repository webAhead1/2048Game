import "./App.css";
import React from "react";
import GameFrame from "./components/frame/GameFrame";
import Heading from "./components/Heading/Heading";
import LogOut from "./components/LogOut/LogOut";

function App() {
  return (
    <main className="App">
        
          <Heading />
       
    
          <GameFrame />
          <LogOut />
   
    
    </main>
  );
}

export default App;
