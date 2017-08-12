import React from 'react';
import WhiteKing from '../images/White_King.png';
import BlackKing from '../images/Black_King.png';

const King = ({color}) => {

  let king = null;

  if (color === 'White') {
    king = <img src={WhiteKing} alt={`${color} King`} ></img>
  } else if (color === 'Black') {
    king = <img src={BlackKing} alt={`${color} King`} ></img>
  }
  return (
    king
  );
}

export default King;
