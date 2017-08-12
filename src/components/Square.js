import React from 'react';

const styles = {
  squareStyle: {
    display: 'inline-block',
    width: '60px',
    height: '60px'
  },
  pieceStyle: {
    height: '50px',
    width: '50px',
    zIndex: '1',
    position: 'relative',
    top: '4px',
    left: '5px'
  }
};

const Square = ({ piece, squareNumber, handleMove }) => {

  const { squareStyle, pieceStyle } = styles
  let square;

  // If a piece is supposed to exist on that square the div with the piece is added
  if (piece !== null) {
    square = <div style={squareStyle} onClick={handleMove.bind(this, squareNumber, piece)}>
              <div style={pieceStyle}>
                {piece}
              </div>
             </div>
  }
  // otherwise just return a blank square
  else {
    square = <div style={squareStyle} onClick={handleMove.bind(this, squareNumber, piece) }></div>
  }

  return (
    square
  );
}

export default Square;
