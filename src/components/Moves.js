import './moves.css'

function Move({index, board,  setCurrentMove}) {

    function jumpTo(){
        console.log(index);
        setCurrentMove(index)
    }

    return (
        <li>
            <div>
                <div className="row">
                    <div className='display_tile'>{board[0]}</div>
                    <div className='display_tile'>{board[1]}</div>
                    <div className='display_tile'>{board[2]}</div>
                </div>
                <div className="row">
                    <div className='display_tile'>{board[3]}</div>
                    <div className='display_tile'>{board[4]}</div>
                    <div className='display_tile'>{board[5]}</div>
                </div>
                <div className="row">
                    <div className='display_tile'>{board[6]}</div>
                    <div className='display_tile'>{board[7]}</div>
                    <div className='display_tile'>{board[8]}</div>
                </div>
            </div>
              <button onClick={jumpTo}>Go to move</button>
        </li>
    );
}

export default Move