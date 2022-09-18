import "./App.css";
import React from "react";
import Game from "./components/game/Game";
import Heading from "./components/Heading/Heading";
import LogOut from "./components/LogOut/LogOut";
import NewGame from "./components/newGame/NewGame";
import Instructions from "./components/game_instructions/Instructions";
import LogIn from "./components/logIn/LogIn";
import Register from "./components/register/Register";

function App() {
  const [scoreState, updateScore] = React.useState([0, 0]);
  const [numbers, updateNumbers] = React.useState([]);
  const [gameState, updateGameState] = React.useState("inProgress"); //inProgress | gameWon | gameOver
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [errorMessages, setErrorMessages] = React.useState({});
  const [page, updatePage] = React.useState("login");

  return (
    <main className="App">
      {page == "game" ? (
        <div>
          <Heading loginData={loginData} />

          <Game
            numbers={numbers}
            updateNumbers={updateNumbers}
            gameState={gameState}
            updateGameState={updateGameState}
            scoreState={scoreState}
            updateScore={updateScore}
            updatePage={updatePage}
          />
          <LogOut updatePage={updatePage}></LogOut>
          <Instructions />
          <NewGame
            updateNumbers={updateNumbers}
            updateGameState={updateGameState}
            updateScore={updateScore}
            scoreState={scoreState}
          />
        </div>
      ) : page == "login" ? (
        <LogIn
          loginData={loginData}
          setLoginData={setLoginData}
          setIsLoggedIn={setIsLoggedIn}
          errorMessages={errorMessages}
          setErrorMessages={setErrorMessages}
          updatePage={updatePage}
        />
      ) : (
        <Register updatePage={updatePage} />
      )}
    </main>
  );
}

export default App;
