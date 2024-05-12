export default function Log({turns}) {
    return (
        
        <ol id = "log">
            {
                 turns.map((turn, turnIndex) => 
                    <li key = {turnIndex}>
                        {turn.row} {turn.col} clicked by {turn.player}
                    </li>)
            }
        </ol>
       
       
    );
}