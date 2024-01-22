import Board from "./Board";
import Move from "./Moves";
import Gamelog from "./Gamelog";
import { useState, useEffect, useRef} from 'react';
import {boardList} from './constants'

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])    
    const [currentMove, setCurrentMove] = useState(0)
    const currentTiles = history[currentMove]
    const [gameHistory, setGameHistory] = useState([])
    const firstRender = useRef(false)

    useEffect(() => {
      console.log("session storage", window.sessionStorage.getItem("history"))
      if (window.sessionStorage.getItem("history") !== null){
        setHistory(JSON.parse(window.sessionStorage.getItem("history")))      
        setCurrentMove(window.sessionStorage.getItem("current-move"))
        setGameHistory(JSON.parse(window.sessionStorage.getItem("game-history")))
      }
    }, []);

    useEffect(() => {
      if(firstRender.current){
        window.sessionStorage.setItem("current-move", currentMove)
        window.sessionStorage.setItem("history", JSON.stringify(history))
      }
    }, [currentMove]);

    useEffect(() => {
     console.log("store game history")
     if(firstRender.current){
      window.sessionStorage.setItem("game-history", JSON.stringify(gameHistory))
     } 
     firstRender.current = true
    }, [gameHistory]);

    function playAgain(){
      setGameHistory([...gameHistory, [history]])
      setCurrentMove(0)
      setHistory([Array(9).fill(null)])
    }

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
            <button onClick={playAgain}>Play Again</button>
            <div className="games-history">
                 {console.log('game history', gameHistory)}
                 {
                    gameHistory.map((game, index) => {
                      return <Gamelog key={index} index={index} game={game}/>
                    })
                 } 
            </div>
        </div>
      );
}

export default Game; 