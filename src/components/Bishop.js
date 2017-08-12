import React from 'react';
import WhiteBishop from '../images/White_Bishop.png';
import BlackBishop from '../images/Black_Bishop.png';

const Bishop = ({color}) => {

  let bishop = null;

  if (color === 'White') {
    bishop = <img src={WhiteBishop} alt={`${color} Bishop`} ></img>
  } else if (color === 'Black') {
    bishop = <img src={BlackBishop} alt={`${color} Bishop`} ></img>
  }
  return (
    bishop
  );
}

export default Bishop;
