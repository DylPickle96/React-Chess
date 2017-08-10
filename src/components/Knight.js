import React from 'react';
import WhiteKnight from '../images/White_Knight.png';
import BlackKnight from '../images/Black_Knight.png';

const Knight = ({color}) => {
  const style = {
    width: '25px',
    height: '25px',
    zIndex: '1',
    position: 'relative',
    top: '0px',
    left: '19px'
  }

  let knight = null;

  if (color === 'White') {
    knight = <img src={WhiteKnight} alt={`${color} Knight`} style={style}></img>
  } else if (color === 'Black') {
    knight = <img src={BlackKnight} alt={`${color} Knight`} style={style}></img>
  }
  return (
    knight
  );
}

export default Knight;
