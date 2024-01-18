import DisplayBoard from "./DisplayBoard";
import { boardList } from "./constants";
import './moves.css'

function Gamelog({index, game}) {
    return (
        <li>
            <h2>Game{index+1}</h2>
            <div>
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