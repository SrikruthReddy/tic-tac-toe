export default function GameBoard({grid, onGridClick}) {
    //console.log(onGridClick);
    
    
    return (
        <ol id="game-board">
            {
                grid.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {
                                row.map((col, colIndex) => (
                                    <li key={colIndex}>
                                        <button onClick = {() => onGridClick(rowIndex, colIndex)} disabled = {col !== null}>{col}</button>
                                    </li>
                                ))
                            }
                        </ol>
                    </li>
                ))
            }
        </ol>
    );
}
