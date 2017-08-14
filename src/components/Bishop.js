import React, { Component } from 'react';
import WhiteBishop from '../images/White_Bishop.png';
import BlackBishop from '../images/Black_Bishop.png';

class Bishop extends Component {

  render () {
    let bishop = null;

    if (this.props.color === 'White') {
      bishop = <img src={WhiteBishop} alt={`${this.props.color} Bishop`} ></img>
    } else if (this.props.color === 'Black') {
      bishop = <img src={BlackBishop} alt={`${this.props.color} Bishop`} ></img>
    }

    return (
      bishop
    );
  }
}

export default Bishop;
