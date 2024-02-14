import { useState } from "react";

export default function Player({initialName, symbol}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    setIsEditing(editing => !editing);
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  let btnLabel = "Edit"

  if (isEditing === true) {
    editablePlayerName = (
      <input type="text" onChange={handleChange} required value={playerName}></input>
    )
    btnLabel = "Save"
  }

  return(
    <li>
      {
        <span className="player">
          {editablePlayerName}   
          <span className="player-symbol">{symbol}</span>
        </span>
      }
      <button onClick={handleClick}>{btnLabel}</button>
    </li>
  );
}