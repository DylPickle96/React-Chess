import React, { Component } from 'react';
import '../stylesheets/board.css';
import Square from './Square';
import Pawn from './Pawn';
import Rook from './Rook';
import Knight from './Knight';
import Bishop from './Bishop';
import Queen from './Queen';
import King from './King';

let boardList = {
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
      boardInitialState: boardList,
      boardState: null
    };
    this.drawBoard = this.drawBoard.bind(this);
  }

  drawBoard = (boardState) => {
    //build an array of all 64 squares of a chess board
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
            this.state.board.push(<Square key={i} number={i} piece={pieceComponents[j]} />);
          }
        }
      }
      else {
        //else just a blank square on our board
        this.state.board.push(<Square key={i} number={i} piece={null}/>)
      }
    }
  }

  componentWillMount () {
    this.drawBoard(this.state.boardInitialState);
  }

  componentDidMount () {
    let currentBoardState = boardList;
    currentBoardState[52] = null;
    currentBoardState[36] = 'White Pawn';

    this.setState( {boardState: currentBoardState}, function () {
      this.drawBoard(this.state.boardState);
      console.log(this.state.boardState);
    });
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
