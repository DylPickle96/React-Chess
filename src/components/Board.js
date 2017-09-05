import React, { Component } from 'react';
import '../stylesheets/board.css';
import Square from './Square';
import { pieceRouter } from '../logic/router';
import { boardList } from '../logic/starting-positions';

const isFriendly = (movingPiece, destinationPiece) => {

  if (destinationPiece !== null) {
    const isFriendlyColour = movingPiece.split(' ')[0] === destinationPiece.split(' ')[0];
    if (isFriendlyColour) {
      return false;
    }
    else {
      return true;
    }
  }
  else {
    return true;
  }
}

class Board extends Component {

  constructor (props) {
    super(props);

    this.state = {
      board: [],
      boardState: boardList,
      firstClick: false,
      movingPieceNumber: null
    };
    this.drawBoard = this.drawBoard.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }

  handleMove = (squareNumber, piece) => {

    const { firstClick, boardState, movingPieceNumber } = this.state;

    // this represents where the play wants to move his piece
    let destination = null;
    // if a piece is clicked firstClick is true. We keep track of the moving piece's square number
    if (piece !== null && firstClick === false) {
      this.setState({ firstClick: true, movingPieceNumber: squareNumber });
    } // once first click is true and if it's not another piece we can move the selected piece
    else if (firstClick === true) {

      // destination becomes the number of the square that was clicked on
      destination = squareNumber;
      // have a variable that is based on the current board state that I can manipulate
      let board = boardState;
      // save the piece to move
      let movingPiece = board[movingPieceNumber];
      let destinationPiece = board[destination];
      // this function returns true or false if the piece can move or not

      const isFriendlyPiece = isFriendly(movingPiece, destinationPiece);
      const canMove = pieceRouter(movingPiece, movingPieceNumber, destination, boardState);

      if (canMove && isFriendlyPiece) {
        // reset it's previous position and set it's new position
        board[movingPieceNumber] = null;
        board[destination] = movingPiece;
      }

      // update the state of the board and draw the board
      this.setState({boardState: board, firstClick: false}, function () {
        this.drawBoard(boardState);
      });
    }
  }

  drawBoard = (boardState) => {
    //build an array of all 64 squares of a chess board
    let board = [];
    for (let i = 0; i < 64; i++) {
      if (boardState[i] !== null) {
        //these values help determine where the piece sits and what colour it is
        const piece = boardState[i].split(' ')[1];
        const pieceColour = boardState[i].split(' ')[0];

        //pushes the correct component based on the state of the board
        board.push(<Square
                      key={i}
                      piece={piece}
                      pieceColour={pieceColour}
                      squareNumber={i}
                      handleMove={this.handleMove}
                    />);
      }
      else {
        //else just a blank square on our board
        board.push(<Square
                      key={i}
                      piece={null}
                      squareNumber={i}
                      handleMove={this.handleMove}
                    />)
      }
    }
    this.setState({board: board});
  }

  componentWillMount () {
    this.drawBoard(this.state.boardState);
  }

  render () {
    return (
      <div className='board'>
        {this.state.board}
      </div>
    );
  }
}

export default Board;
