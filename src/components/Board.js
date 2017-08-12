import React, { Component } from 'react';
import '../stylesheets/board.css';
import Square from './Square';
import Pawn from './Pawn';
import Rook from './Rook';
import Knight from './Knight';
import Bishop from './Bishop';
import Queen from './Queen';
import King from './King';

const boardList = {
  0:'Black Rook',
  1:'Black Knight',
  2:'Black Bishop',
  3:'Black Queen',
  4:'Black King',
  5:'Black Bishop',
  6:'Black Knight',
  7:'Black Rook',
  8:'Black Pawn',
  9:'Black Pawn',
  10:'Black Pawn',
  11:'Black Pawn',
  12:'Black Pawn',
  13:'Black Pawn',
  14:'Black Pawn',
  15:'Black Pawn',
  16:null,
  17:null,
  18:null,
  19:null,
  20:null,
  21:null,
  22:null,
  23:null,
  24:null,
  25:null,
  26:null,
  27:null,
  28:null,
  29:null,
  30:null,
  31:null,
  32:null,
  33:null,
  34:null,
  35:null,
  36:null,
  37:null,
  38:null,
  39:null,
  40:null,
  41:null,
  42:null,
  43:null,
  44:null,
  45:null,
  46:null,
  47:null,
  48:'White Pawn',
  49:'White Pawn',
  50:'White Pawn',
  51:'White Pawn',
  52:'White Pawn',
  53:'White Pawn',
  54:'White Pawn',
  55:'White Pawn',
  56:'White Rook',
  57:'White Knight',
  58:'White Bishop',
  59:'White Queen',
  60:'White King',
  61:'White Bishop',
  62:'White Knight',
  63:'White Rook'
};

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
      // have a variable that is based on the current board state that I manipulate
      let board = this.state.boardState;
      // save the piece to move
      let movingPiece = board[this.state.movingPieceNumber];

      // reset it's previous position and set it's new position
      board[this.state.movingPieceNumber] = null;
      board[destination] = movingPiece;

      // update the state of the board and draw the board
      this.setState({boardState: board}, function () {
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
        const componentName = boardState[i].split(' ')[1];
        const componentColour = boardState[i].split(' ')[0];
        //list of all available pieces
        const pieceComponents = [
          <Pawn color={componentColour}/>,
          <Rook color={componentColour}/>,
          <Knight color={componentColour}/>,
          <Bishop color={componentColour}/>,
          <Queen color={componentColour}/>,
          <King color={componentColour}/>
        ];
        //pushes the correct component based on starting positions
        for (let j = 0; j < pieceComponents.length; j++) {
          if (pieceComponents[j].type.name === componentName) {
              //squareNumber is a unique identifier, handleMove is the function used for piece movement
              board.push(<Square key={i} piece={pieceComponents[j]} squareNumber={i} handleMove={this.handleMove} />);
          }
        }
      }
      else {
        //else just a blank square on our board
          board.push(<Square key={i} piece={null} squareNumber={i} handleMove={this.handleMove}/>)
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
