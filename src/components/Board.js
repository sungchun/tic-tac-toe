import Tile from "./Tile";
import React, { useState } from 'react';

function Board() {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    return (
        <div className="board">
            <div className="row">
                <Tile values={tiles[1]}/>
                <Tile values={tiles[2]}/>
                <Tile values={tiles[3]}/>
            </div>
            <div className="row">
                <Tile values={tiles[4]}/>
                <Tile values={tiles[5]}/>
                <Tile values={tiles[6]}/>
            </div>
            <div className="row">
                <Tile values={tiles[7]}/>
                <Tile values={tiles[8]}/>
                <Tile values={tiles[9]}/>
            </div>
        </div>
      );
}

export default Board