import Board from "./Board";
import Move from "./Moves";
import { useState } from 'react';
import {boardList} from './constants'

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])    
    const [currentMove, setCurrentMove] = useState(0)
    const currentTiles = history[currentMove]

    return (
        <div>
            <Board 
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