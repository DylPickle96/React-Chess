import React from 'react';
import WhitePawn from '../images/White_Pawn.png';
import BlackPawn from '../images/Black_Pawn.png';

const Pawn = ({color, style}) => {
  let pawn = null;

  if (color === 'White') {
    pawn = <img src={WhitePawn} alt={`${color} Pawn`} ></img>
  }
  else if (color === 'Black') {
    pawn = <img src={BlackPawn} alt={`${color} Pawn`} ></img>
  }
  return (
    pawn
  );
}

export default Pawn;
