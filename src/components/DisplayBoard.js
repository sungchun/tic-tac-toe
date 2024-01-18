import {boardList} from './constants' 
import './moves.css'
function DisplayBoard({board}) {
    return (
        <div className='display-board'>
        {
            boardList.map((row, i) => (                                                                                                      
                <div key={i} className="row">
                    {row.map((num) =>(
                        <div key={num} className='display-tile'>{board[num]}</div>
                    ))}
                </div>
            ))
        }
        </div>
    );
}


export default DisplayBoard;