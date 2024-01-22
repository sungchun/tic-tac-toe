import Board from "./Board";
import Move from "./Moves";
import Gamelog from "./Gamelog";
import { useState, useEffect, useRef} from 'react';
import {boardList} from './constants'
import GameModeSelect from "./GameModeSelect";

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])    
    const [currentMove, setCurrentMove] = useState(0)
    const currentTiles = history[currentMove]
    const [gameHistory, setGameHistory] = useState([])
    const firstRender = useRef(false)
    const [winningLine, setWinningLine] = useState([])
    const [gameMode, setGameMode] = useState(0)

    useEffect(() => {
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
    }, [currentMove])

    useEffect(() => {
     if(firstRender.current){
      window.sessionStorage.setItem("game-history", JSON.stringify(gameHistory))
     } 
     firstRender.current = true
    }, [gameHistory]);

    function playAgain(){
      if(gameHistory == []){
        setGameHistory([[history]])
      }else{
        setGameHistory([...gameHistory, [history]])
      }
      setCurrentMove(0)
      setHistory([Array(9).fill(null)])
      setWinningLine([])
    }

    function replayButton(){
      if(!currentTiles.includes(null) || winningLine.length > 0){
        return(
          <button onClick={playAgain}>Play Again</button>
        )
      }else{
        return (
          <></>
        )
      }
    }

    return (
        <div>
            <GameModeSelect setGameMode={setGameMode}/> 
            <Board 
                tiles={currentTiles}
                history={history}
                setHistory={setHistory} 
                currentMove={currentMove}
                setCurrentMove={setCurrentMove}
                winningLine={winningLine}
                setWinningLine={setWinningLine}
                gameMode={gameMode}
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
            {replayButton()}
            <div className="games-history">
                 {
                  gameHistory ? (gameHistory.map((game, index) => {
                      return <Gamelog key={index} index={index} game={game}/>
                    })) : (<></>)
                 } 
            </div>
        </div>
      );
}

export default Game; 