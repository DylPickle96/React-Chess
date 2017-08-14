import React, { Component } from 'react';
import Pawn from './Pawn';
import Rook from './Rook';
import Knight from './Knight';
import Bishop from './Bishop';
import Queen from './Queen';
import King from './King';

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

class Square extends Component {

  render () {
    // extracting props
    const { piece, pieceColour, squareNumber, handleMove } = this.props;

    // chess components
    const chessPieces = {'Pawn':Pawn, 'Rook':Rook, 'Knight':Knight, 'Bishop':Bishop, 'Queen':Queen, 'King':King }

    // square
    const { squareStyle, pieceStyle } = styles;
    let square;

    // If a piece is supposed to exist on that square the div with the piece is added
    if (piece !== null) {

      square = <div style={squareStyle} onClick={handleMove.bind(this, squareNumber, piece)}>
                  <div style={pieceStyle}>
                    {React.createElement(chessPieces[piece], {color: pieceColour} )}
                  </div>
               </div>
    }
    // otherwise just return a blank square
    else {
      square = <div style={squareStyle} onClick={handleMove.bind(this, squareNumber, piece)}></div>
    }

    return (
      square
    );
  }
}

export default Square;
