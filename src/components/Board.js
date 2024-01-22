import Tile from "./Tile";
import React, { useState, useEffect } from 'react';
import { boardList } from "./constants";

function Board({history, setHistory, currentMove, setCurrentMove, winningLine, setWinningLine}) {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [status, setStatus] = useState("X's turn")
    const xIsNext = currentMove % 2 === 0

    useEffect(() => {
        setTiles(history[currentMove])
        setWinningLine([])
    }, [currentMove]);

    useEffect(() => {
        const victor = checkWinner(tiles)
        if(victor){
           setStatus(`${victor} is the winner!`) 
        }else{
            setStatus(`${xIsNext ? 'X' : 'O'}'s turn.`)
        }
    }, [tiles]);

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
              setWinningLine(lines[i])
              return tiles[a];
            }
          }
          return null
    }    

    function update(new_tiles){
        const updatedHistory = [...history.slice(0, currentMove+1), new_tiles]
        setTiles(new_tiles)
        setHistory(updatedHistory)
        setCurrentMove(updatedHistory.length-1)
    }
    
    function handleClick(i){
        if(winningLine.length !== 0 || tiles[i]){
            return
        }
        const newTiles = tiles.slice() 
        if(xIsNext){
            newTiles[i] = 'X'
        }else{
            newTiles[i] = 'O'
        }
        update(newTiles)
    }
    
    return (
        <>
            <h2>{status}</h2>
            {
                boardList.map((row, i) => (                                                                                                      
                    <div key={i} className="row">
                        {row.map((num) =>(
                            winningLine.includes(num) ? (
                                <Tile key={num} value={tiles[num]} handleClick={() => handleClick(num)} winning={true}/>) : (
                                <Tile key={num} value={tiles[num]} handleClick={() => handleClick(num)} winning={false}/>)
                        ))}
                    </div>
                ))
            } 
        </>
      );
}

export default Board