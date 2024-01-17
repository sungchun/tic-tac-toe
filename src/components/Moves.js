import './moves.css'

function Move({index, board, boardList, setCurrentMove, history, setHistory}) {

    function jumpTo(){
        setCurrentMove(index)
        setHistory(history.slice(0,index+1))
    }

    return (
        <li>
            <div>
            {
                boardList.map((row, i) => (
                    <div key={i} className="row">
                        {row.map((num) =>(
                            <div className='display_tile'>{board[num]}</div>
                        ))}
                    </div>
                ))
            } 
            </div>
              <button onClick={jumpTo}>{index === 0 ? "Reset Game": "Go to move " + index}</button>
        </li>
    );
}

export default Move