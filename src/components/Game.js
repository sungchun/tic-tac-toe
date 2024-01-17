import Board from "./Board";
import Move from "./Moves";
import { useState, useEffect} from 'react';
import {boardList} from './constants'

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])    
    const [currentMove, setCurrentMove] = useState(0)
    const currentTiles = history[currentMove]

    useEffect(() => {
      if (window.sessionStorage.getItem("history") !== null){
        setHistory(JSON.parse(window.sessionStorage.getItem("history")))      
        setCurrentMove(window.sessionStorage.getItem("current-move"))
      }
    }, []);

    useEffect(() => {
      if(currentMove !== 0){
        window.sessionStorage.setItem("current-move", currentMove)
        window.sessionStorage.setItem("history", JSON.stringify(history))
      }
    }, [currentMove]);

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
                      return board ?
                        <Move 
                          key={index}
                          board={board}
                          boardList={boardList}
                          setCurrentMove={setCurrentMove}
                          index={index}
                          history={history}
                          setHistory={setHistory}
                        />
                        : <></>
                    })   
                  }
                </ul>
            </div>
        </div>
      );
}

export default Game; 