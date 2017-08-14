import React, { Component } from 'react';
import WhiteQueen from '../images/White_Queen.png';
import BlackQueen from '../images/Black_Queen.png';

class Queen extends Component {

  render () {
    let queen = null;

    if (this.props.color === 'White') {
      queen = <img src={WhiteQueen} alt={`${this.props.color} Queen`} ></img>
    } else if (this.props.color === 'Black') {
      queen = <img src={BlackQueen} alt={`${this.props.color} Queen`} ></img>
    }

    return (
      queen
    );
  }
}

export default Queen;
