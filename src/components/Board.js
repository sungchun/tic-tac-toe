import Tile from "./Tile";
import React, { useState, useEffect } from 'react';

function Board({xIsNext, history, setHistory, setCurrentMove}) {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [status, setStatus] = useState("X's turn")

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
              return tiles[a];
            }
          }
          return null
    }    

    function update(new_tiles){
        const updatedHistory = [...history, new_tiles]
        setHistory(updatedHistory)
        setCurrentMove(updatedHistory.length-1)
    }
    
    function handleClick(i){
        const newTiles = tiles.slice() 
        if(xIsNext){
            newTiles[i] = 'X'
        }else{
            newTiles[i] = 'O'
        }
        setTiles(newTiles)
        update(newTiles)
    }
    
    return (
        <>
            <h2>{status}</h2>
            
            <div className="row">
                <Tile value={tiles[0]} handleClick={() => handleClick(0)}/>
                <Tile value={tiles[1]} handleClick={() => handleClick(1)}/>
                <Tile value={tiles[2]} handleClick={() => handleClick(2)}/>
            </div>
            <div className="row">
                <Tile value={tiles[3]} handleClick={() => handleClick(3)}/>
                <Tile value={tiles[4]} handleClick={() => handleClick(4)}/>
                <Tile value={tiles[5]} handleClick={() => handleClick(5)}/>
            </div>
            <div className="row">
                <Tile value={tiles[6]} handleClick={() => handleClick(6)}/>
                <Tile value={tiles[7]} handleClick={() => handleClick(7)}/>
                <Tile value={tiles[8]} handleClick={() => handleClick(8)}/>
            </div>
        </>
      );
}

export default Board