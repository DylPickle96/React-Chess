import React, { Component } from 'react';
import WhiteRook from '../images/White_Rook.png';
import BlackRook from '../images/Black_Rook.png';

class Rook extends Component {

  render () {
    let rook = null;

    if (this.props.color === 'White') {
      rook = <img src={WhiteRook} alt={`${this.props.color} Rook`} ></img>
    } else if (this.props.color === 'Black') {
      rook = <img src={BlackRook} alt={`${this.props.color} Rook`} ></img>
    }
    return (
      rook
    );
  }
}

export default Rook;
