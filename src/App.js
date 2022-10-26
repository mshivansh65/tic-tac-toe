import "./styles.css";
import { useState, useEffect } from "react";
import Grid from "./Component/Grid";
import hasWon from "./Component/hasWon";

export default function App() {
  const [activeUser, setActiveUser] = useState(1);
  const [gameMatrix, setGameMatrix] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [resetGame, setResetGame] = useState(false);
  const [userWon, setUserWon] = useState(null);
  function resetGameHandler() {
    setActiveUser(1);
    setGameMatrix([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setResetGame(false);
    setUserWon(null);
  }
  function switchUser() {
    const user = (activeUser + 1) % 2;
    setActiveUser(user);
  }
  // intentional i want to evaluate everytime gameMatrix changes it will initlize an new object which will be considered change
  const abc = [...gameMatrix];
  useEffect(() => {
    const userWonCheck = hasWon(abc);
    if (userWonCheck === "X") {
      setUserWon(1);
    }
    if (userWonCheck === "O") {
      setUserWon(2);
    }
    if (!gameMatrix.includes(0) || userWon) {
      setResetGame(true);
    }
  }, [abc, setUserWon, gameMatrix, setResetGame, userWon]);

  function onClickHander(id) {
    if (gameMatrix[id] !== 0) return;
    if (userWon) return; //Prevent users to play after winning
    switchUser();
    setGameMatrix((matrix) => {
      const marker = activeUser === 1 ? "X" : "O";
      const updateMatrix = matrix;
      updateMatrix[id] = marker;
      return updateMatrix;
    });
  }
  return (
    <div className={activeUser === 1 ? "user1" : "user2"}>
      <div className="App">
        <Grid gameMatrix={gameMatrix} onClickHander={onClickHander} />
        {userWon && <p>Player {userWon} has won</p>}
        {/* <button onClick={switchUser}>Switch User</button> */}
        {resetGame && (
          <button className={"btn btn-reset"} onClick={resetGameHandler}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
