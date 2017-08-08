import React from 'react';
import WhiteQueen from '../images/White_Queen.png';
import BlackQueen from '../images/Black_Queen.png';

const Queen = ({color}) => {
  const style = {
    width: '25px',
    height: '25px',
    zIndex: '1',
    position: 'relative',
    top: '0px',
    left: '19px'
  }

  let queen = null;

  if (color === 'White') {
    queen = <img src={WhiteQueen} alt={`${color} Queen`} style={style}></img>
  } else if (color === 'Black') {
    queen = <img src={BlackQueen} alt={`${color} Queen`} style={style}></img>
  }
  return (
    queen
  );
}

export default Queen;
