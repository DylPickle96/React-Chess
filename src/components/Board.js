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
  0:'black Rook',
  1:'black Knight',
  2:'black Bishop',
  3:'black Queen',
  4:'black King',
  5:'black Bishop',
  6:'black Knight',
  7:'black Rook',
  8:'black Pawn',
  9:'black Pawn',
  10:'black Pawn',
  11:'black Pawn',
  12:'black Pawn',
  13:'black Pawn',
  14:'black Pawn',
  15:'black Pawn',
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
  48:'white Pawn',
  49:'white Pawn',
  50:'white Pawn',
  51:'white Pawn',
  52:'white Pawn',
  53:'white Pawn',
  54:'white Pawn',
  55:'white Pawn',
  56:'white Rook',
  57:'white Knight',
  58:'white Bishop',
  59:'white Queen',
  60:'white King',
  61:'white Bishop',
  62:'white Knight',
  63:'white Rook'
};

const pieceComponents = [
  <Pawn />,
  <Rook />,
  <Knight />,
  <Bishop />,
  <Queen />,
  <King />
];

class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      board: [],
      boardState: boardList
    };
  }
  componentWillMount () {
    for (let i = 0; i < 64; i++) {

      if (this.state.boardState[i] !== null) {
        const componentName = this.state.boardState[i].split(' ')[1];

        for (let j = 0; j < pieceComponents.length; j++) {
          if (pieceComponents[j].type.name === componentName) {
            this.state.board.push(<Square key={i} number={i} piece={pieceComponents[j]} />);
          }
        }


      } else {
        this.state.board.push(<Square key={i} number={i} />)
      }
    }
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
