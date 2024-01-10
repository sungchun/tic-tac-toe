import React, { useState } from 'react';
import './styles.css'

function Tile({value}) {
    const [value, setValue] = useState(null)
    function handleClick(){
        setValue('X')
    }
    return (
        <button className="tile" onClick={handleClick}>{value}</button>
      );
}

export default Tile