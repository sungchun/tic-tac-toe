import Tile from "./Tile";
import React, { useState, useEffect } from 'react';

function Board({xIsNext, history, setHistory, currentMove, setCurrentMove}) {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    
    function update(){
        console.log("update");
        const updatedHistory = [...history.slice(0, currentMove+1), tiles]
        console.log(updatedHistory);
        setHistory(updatedHistory)
        setCurrentMove(updatedHistory.length-1)
    }
    
    function handleClick(i){
        const newTiles = tiles.slice() 
        if(xIsNext){
            console.log("x");
            newTiles[i] = 'X'
        }else{
            console.log("o");
            newTiles[i] = 'O'
        }
        setTiles(newTiles)
        update()
    }
    return (
        <div className="board">
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
        </div>
      );
}

export default Board