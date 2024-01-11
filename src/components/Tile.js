import React, { useState } from 'react';
import './styles.css'

function Tile({value, handleClick}) {
    return (
        <button className="tile" onClick={handleClick}>{value}</button>
      );
}

export default Tile