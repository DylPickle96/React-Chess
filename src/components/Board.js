import React, { Component } from 'react';
import '../stylesheets/board.css';
import Square from './Square';
import {pieceRouter} from '../logic/router';
import {boardList} from '../logic/starting-positions';

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

    // this represents where the play wants to move his piece
    let destination = null;
    // if a piece is clicked firstClick is true. We keep track of the moving piece's square number
    if (piece !== null) {
      this.setState({ firstClick: true, movingPieceNumber: squareNumber });
    } // once first click is true and if it's not another piece we can move the selected piece
    else if (this.state.firstClick === true) {

      //destination becomes the number of the that was clicked on
      destination = squareNumber;
      // have a variable that is based on the current board state that I can manipulate
      let board = this.state.boardState;
      // save the piece to move
      let movingPiece = board[this.state.movingPieceNumber];

      if (pieceRouter(movingPiece, this.state.movingPieceNumber, destination, this.state.boardState)) {
        // reset it's previous position and set it's new position
        board[this.state.movingPieceNumber] = null;
        board[destination] = movingPiece;
      }

      // update the state of the board and draw the board
      this.setState({boardState: board, firstClick: false}, function () {
        this.drawBoard(this.state.boardState);
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
