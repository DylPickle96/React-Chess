import React from 'react';
import WhiteKing from '../images/White_King.png';
import BlackKing from '../images/Black_King.png';

const King = ({color}) => {
  const style = {
    width: '25px',
    height: '25px',
    zIndex: '1',
    position: 'relative',
    top: '0px',
    left: '19px'
  }

  let king = null;

  if (color === 'White') {
    king = <img src={WhiteKing} alt={`${color} King`} style={style}></img>
  } else if (color === 'Black') {
    king = <img src={BlackKing} alt={`${color} King`} style={style}></img>
  }
  return (
    king
  );
}

export default King;
