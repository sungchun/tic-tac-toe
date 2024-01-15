import Board from "./Board";
import Move from "./Moves";
import { useState } from 'react';


function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])    
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0
    const currentTiles = history[currentMove]
    const boardList = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ]
    return (
        <div>
            <Board 
                boardList={boardList}
                xIsNext={xIsNext}
                tiles={currentTiles}
                history={history}
                setHistory={setHistory} 
                currentMove={currentMove}
                setCurrentMove={setCurrentMove}
            />
            <div className="game-info">
                <ul>
                  {
                    history.slice(0, currentMove+1).map((board, index) => {
                      return board ? <Move board={board} boardList={boardList} setCurrentMove={setCurrentMove} index={index}/> : <></>
                    })   
                  }
                </ul>
            </div>
        </div>
      );
}

export default Game; 