import React, { Component } from 'react';
import WhiteKnight from '../images/White_Knight.png';
import BlackKnight from '../images/Black_Knight.png';

class Knight extends Component {

  render () {
    let knight = null;

    if (this.props.color === 'White') {
      knight = <img src={WhiteKnight} alt={`${this.props.color} Knight`} ></img>
    } else if (this.props.color === 'Black') {
      knight = <img src={BlackKnight} alt={`${this.props.color} Knight`} ></img>
    }

    return (
      knight
    );
  }
}

export default Knight;
