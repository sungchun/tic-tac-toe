import Board from "./Board";
import Move from "./Moves";
import { useState } from 'react';


function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])    
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0
    const currentTiles = history[currentMove]

    function checkWinner(tiles){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
              return tiles[a];
            }
          }
          return null
    }

    return (
        <div>
            <Board 
                xIsNext={xIsNext}
                tiles={currentTiles}
                history={history}
                setHistory={setHistory} 
                currentMove={currentMove}
                setCurrentMove={setCurrentMove}
                checkWinner={checkWinner}
            />
            <div className="game-info">
                <ol>{}</ol>
            </div>
        </div>
      );
}

export default Game; 