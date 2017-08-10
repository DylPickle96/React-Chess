import React from 'react';
import WhitePawn from '../images/White_Pawn.png';
import BlackPawn from '../images/Black_Pawn.png';

const Pawn = ({color}) => {
  const style = {
    width: '25px',
    height: '25px',
    zIndex: '1',
    position: 'relative',
    top: '0px',
    left: '19px'
  }

  let pawn = null;

  if (color === 'White') {
    pawn = <img src={WhitePawn} alt={`${color} Pawn`} style={style}></img>
  } else if (color === 'Black') {
    pawn = <img src={BlackPawn} alt={`${color} Pawn`} style={style}></img>
  }
  return (
    pawn
  );
}

export default Pawn;
