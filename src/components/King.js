import React, { Component } from 'react';
import WhiteKing from '../images/White_King.png';
import BlackKing from '../images/Black_King.png';

class King extends Component {

  render () {
    let king = null;
    
    if (this.props.color === 'White') {
      king = <img src={WhiteKing} alt={`${this.props.color} King`} ></img>
    } else if (this.props.color === 'Black') {
      king = <img src={BlackKing} alt={`${this.props.color} King`} ></img>
    }

    return (
      king
    );
  }
}

export default King;
