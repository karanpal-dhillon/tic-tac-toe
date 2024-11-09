import { useState } from "react";

const Player = ({ name, symbol, setPlayer, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        value={name}
        onChange={(e) => setPlayer(e.target.value)}
      />
    );
  }

  const handleClick = () => {
    setIsEditing((editing) => !editing);
  };

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
};

export default Player;
