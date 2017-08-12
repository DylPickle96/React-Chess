import React from 'react';
import WhiteRook from '../images/White_Rook.png';
import BlackRook from '../images/Black_Rook.png';

const Rook = ({color}) => {

  let rook = null;

  if (color === 'White') {
    rook = <img src={WhiteRook} alt={`${color} Rook`} ></img>
  } else if (color === 'Black') {
    rook = <img src={BlackRook} alt={`${color} Rook`} ></img>
  }
  return (
    rook
  );
}

export default Rook;
