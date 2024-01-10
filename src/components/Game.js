import Board from "./Board";
import Move from "./Moves";
import React, { useState } from 'react';


function Game() {
    
    return (
        <div>
            <Board />
            <div className="game-info">
                <ol>{}</ol>
            </div>
        </div>
      );
}

export default Game; 