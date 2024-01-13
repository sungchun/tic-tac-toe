import Board from "./Board";
import Move from "./Moves";
import { useState } from 'react';


function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])    
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0
    const currentTiles = history[currentMove]

    function moves(){
      const sliced_history = history.slice(1, currentMove+1)
      for (const board of sliced_history.entries){
        return(
          board[1] ? <Move board={board[1]} move={board[0]}/> : <></>
        )
      }
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
            />
            <div className="game-info">
                <ul>
                  {
                    history.slice(0, currentMove+1).map((board) => {
                      return board ? <Move board={board} setCurrentMove={setCurrentMove}/> : <></>
                    })   
                  }
                </ul>
            </div>
        </div>
      );
}

export default Game; 