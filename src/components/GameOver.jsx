import React from "react";

export default function GameOver({ winner, reset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>The winner is {winner}</p>}
      {!winner && <p>It's a draw</p>}
      <button onClick={() => reset()}>Start again</button>
    </div>
  );
}
