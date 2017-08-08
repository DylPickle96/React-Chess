import React from 'react';

const Square = ({number, piece}) => {
  const {squareStyle} = styles
  return (
    <div style={squareStyle}>
      {number}
      <div>
        {piece}
      </div>
    </div>
  );
}

export default Square;

const styles = {
  squareStyle: {
    display: 'inline-block',
    width: '62.5px',
    height: '62.5px',
    marginBottom: '-5px',
    zIndex: '-1'
  }
};
