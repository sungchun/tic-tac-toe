import './moves.css'

function Move({index, board, boardList, setCurrentMove, history, setHistory}) {

    function jumpTo(){
        setCurrentMove(index)
        setHistory(history.slice(0,index+1))
    }

    return (
        <ul className='move'>
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
              <button onClick={jumpTo}>{index === 0 ? "Reset Game": "Go to move " + index}</button>
        </ul>
    );
}

export default Move