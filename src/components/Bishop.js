import React from 'react';
import WhiteBishop from '../images/White_Bishop.png';
import BlackBishop from '../images/Black_Bishop.png';

const Bishop = ({color}) => {
  const style = {
    width: '25px',
    height: '25px',
    zIndex: '1',
    position: 'relative',
    top: '0px',
    left: '19px'
  }

  let bishop = null;

  if (color === 'White') {
    bishop = <img src={WhiteBishop} alt={`${color} Bishop`} style={style}></img>
  } else if (color === 'Black') {
    bishop = <img src={BlackBishop} alt={`${color} Bishop`} style={style}></img>
  }
  return (
    bishop
  );
}

export default Bishop;
