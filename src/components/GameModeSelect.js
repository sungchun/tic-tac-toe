function GameModeSelect({setGameMode}) {
    function changeGameMode(object){
        setGameMode(object.target.value)
        console.log("trigger")
    }
    return (
        <div className="game-mode-select">
            <h3>Player 1 VS.</h3>
            <select onChange={changeGameMode}>
                <option value="0">Player 2</option>
                <option value="1">Computer</option>
            </select>
        </div>
    )
}

export default GameModeSelect;