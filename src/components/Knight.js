import React from 'react';
import WhiteKnight from '../images/White_Knight.png';
import BlackKnight from '../images/Black_Knight.png';

const Knight = ({color}) => {

  let knight = null;

  if (color === 'White') {
    knight = <img src={WhiteKnight} alt={`${color} Knight`} ></img>
  } else if (color === 'Black') {
    knight = <img src={BlackKnight} alt={`${color} Knight`} ></img>
  }
  return (
    knight
  );
}

export default Knight;
