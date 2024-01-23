function GameModeSelect({setGameMode, currentMove, gameMode}) {
    const modes = ["Player 2", "Computer"]    

    function changeGameMode(object){
        setGameMode(parseInt(object.target.value))
    }
    return (
        <div className="game-mode-select">
            <h3>Player 1 VS.</h3>
            {
                currentMove > 0 ? (
                    <h3>{modes[gameMode]}</h3>
                ) : (
                    <select onChange={changeGameMode}>
                        <option value="0">Player 2</option>
                        <option value="1">Computer</option>
                    </select>
                )
            }
        </div>
    )
}

export default GameModeSelect;