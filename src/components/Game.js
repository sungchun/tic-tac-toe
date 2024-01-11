import Board from "./Board";
import Move from "./Moves";
import { useState } from 'react';


function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])    
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0
    const currentTiles = history[currentMove]

    return (
        <div>
            <Board 
                xIsNext={xIsNext}
                tiles={currentTiles}
                history={history}
                setHistory={setHistory} 
                currentMove={currentMove}
                setCurrentMove={setCurrentMove}
            />
            <div className="game-info">
                <ol>{}</ol>
            </div>
        </div>
      );
}

export default Game; 