import React from 'react';
import WhiteQueen from '../images/White_Queen.png';
import BlackQueen from '../images/Black_Queen.png';

const Queen = ({color}) => {

  let queen = null;

  if (color === 'White') {
    queen = <img src={WhiteQueen} alt={`${color} Queen`} ></img>
  } else if (color === 'Black') {
    queen = <img src={BlackQueen} alt={`${color} Queen`} ></img>
  }
  return (
    queen
  );
}

export default Queen;
