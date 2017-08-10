import React from 'react';
import WhiteRook from '../images/White_Rook.png';
import BlackRook from '../images/Black_Rook.png';

const Rook = ({color}) => {
  const style = {
    width: '25px',
    height: '25px',
    zIndex: '1',
    position: 'relative',
    top: '0px',
    left: '19px'
  }

  let rook = null;

  if (color === 'White') {
    rook = <img src={WhiteRook} alt={`${color} Rook`} style={style}></img>
  } else if (color === 'Black') {
    rook = <img src={BlackRook} alt={`${color} Rook`} style={style}></img>
  }
  return (
    rook
  );
}

export default Rook;
