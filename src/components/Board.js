import React, { Component } from 'react';
import '../stylesheets/board.css';

const Square = (props) => {
  const style = {
    display: 'inline-block',
    width: '75px',
    height: '75px',
    marginBottom: '-5px'
  };
  return (
    <div style={style}></div>
  );
}

class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      board: []
    };
  }
  render () {

    for (let i = 0; i < 64; i++) {
      this.state.board.push(<Square />);
    }

    return (
      <div className='board'>
        {this.state.board}
      </div>
    );
  }
}

export default Board;
