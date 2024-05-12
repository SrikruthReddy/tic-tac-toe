import React, {useState} from 'react';
export default function Player({playerName, playerSymbol, activePlayerStatus, handlePlayerNameChange}) {
    //let buttonContent = 'edit'

    const [editedPlayerName, setEditedPlayerName] = useState(playerName)
    const [editing, setEditing] = useState(false)
    function handleEdit() {
        if(editing) {
            handlePlayerNameChange({[playerSymbol]: editedPlayerName});
        }
        setEditing(edit => !edit);
    }
    function handleInput(event) {
        setEditedPlayerName(event.target.value);
    }
    return(
         <li className= {activePlayerStatus ? 'active' : undefined}>
            <span className="player">
              {
                editing ? <input type = "text" defaultValue={editedPlayerName} onChange = {handleInput}></input> : <span className="player-name">{editedPlayerName}</span>
              }
              <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick = {handleEdit}>{editing ? 'save' : 'edit'}</button> 
          </li>
    )
}