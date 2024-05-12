export default function GameOver({winner, handleRematch, hasDraw}) {
    return(
        <div id = 'game-over'>
            <h2>
                Game Over!
            </h2>
            {hasDraw            ?
             <p>Game Drawn!</p> :
            <p>
                
                {winner} won!
                {console.log('here')}
            </p>}
            <p><button onClick={handleRematch}>Rematch!</button></p>
        </div>
    )
}