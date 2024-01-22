import './styles.css'

function Tile({value, handleClick, winning}) {
    return (
        <>
          {
            winning ? (
              <button className="tile-winning" onClick={handleClick}>{value}</button>) : (
              <button className="tile" onClick={handleClick}>{value}</button>)
          }
        </>
      );
}

export default Tile