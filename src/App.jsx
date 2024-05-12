import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import GameOver from './components/GameOver.jsx';
import {WINNING_COMBINATIONS} from './components/winningCombos.jsx';
import Log from './components/Log.jsx';

const grid = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
//let turns = [];
function deriveActivePlayer(turns) {
  if(turns.length != 0 && turns[0].player === 'X')
    return 'O';
  else
    return 'X';
}
let winner = null;
let hasDraw = false;
function App() {
  
  //const [activePlayer, setActivePlayer] = useState('X');
  //const [gameBoard, setGameBoard] = useState(grid)
  

  const [gameTurns, setGameTurns] = useState([]);
  const [playerNameState, setPlayerNameState] = useState({'X' : 'P1', 'O': 'P2'})
  for(let turn of gameTurns) {
    console.log(turn.row + " " + turn.col);
    
    grid[turn.row][turn.col] = turn.player;
    console.log('Hi');
  }
  for(const combination of WINNING_COMBINATIONS) {
    if (grid[combination[0].row][combination[0].column] &&
        grid[combination[0].row][combination[0].column] === 
        grid[combination[1].row][combination[1].column] &&
        grid[combination[1].row][combination[1].column] ===
        grid[combination[2].row][combination[2].column]
        ){
          //console.log("Hi");
          winner = grid[combination[1].row][combination[1].column];
        }
        
  }
  if(gameTurns.length === 9 && !winner)
    hasDraw = true;
  function handleGridClick(rowIndex, colIndex) {
    console.log(rowIndex + " " + colIndex)
    setGameTurns((gameTurns) => {
      let turns = [{row : rowIndex,
                    col: colIndex,
                    player: deriveActivePlayer(gameTurns)}, ...gameTurns];
      return turns;
    })

  }

  function handleRematch() {
    winner = null;
    hasDraw = false;
    grid[0] = [null, null, null]
    grid[1] = [null, null, null]
    grid[2] = [null, null, null]
    setGameTurns((gameTurns) => {
      let turns = [];
      return turns;
    });
    
  }
  function handlePlayerNameChange(playerObject) {
    setPlayerNameState((playerNameState) => {
      let playerNames = {
        ...playerNameState
      }
      for(const key in playerObject) {
          playerNames[key] = playerObject[key];
      }
      return playerNames;
    })
  }
  
  // function handleActivePlayer() {
  //   setActivePlayer((activePlayer) => activePlayer === 'X' ? 'O' : 'X')
  // }
  let player1Name = 'P1';
  let player2Name = 'P2';
  return (
    <main>
      <div id = "game-container">
        <ol id = "players" className='highlight-player'>
          <Player playerName = {player1Name} playerSymbol = 'X' activePlayerStatus = {deriveActivePlayer(gameTurns)} handlePlayerNameChange = {handlePlayerNameChange}></Player>
          <Player playerName = {player2Name} playerSymbol = 'O' activePlayerStatus = {deriveActivePlayer(gameTurns)} handlePlayerNameChange = {handlePlayerNameChange}></Player>
        </ol>
        {(winner || hasDraw) && <GameOver winner = {playerNameState[winner]} handleRematch={handleRematch} hasDraw = {hasDraw}></GameOver>}
        <GameBoard grid={grid} onGridClick = {handleGridClick}/> 
        
      </div>
      <Log turns = {gameTurns}/>
    </main>
  )
}

export default App
