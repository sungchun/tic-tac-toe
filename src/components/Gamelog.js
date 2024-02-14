import DisplayBoard from "./DisplayBoard";
import './gamelog.css'

function Gamelog({index, game}) {
    return (
        <li className="gamelog">
            <h2>Game{index+1}</h2>
            <div className="gamelog-tiles">
            {
                game[0].map((board)=>{
                   return <DisplayBoard board={board}/> 
                })
            }
            </div>
        </li>
    );
}

export default Gamelog;