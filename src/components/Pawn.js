import React, { Component } from 'react';
import WhitePawn from '../images/White_Pawn.png';
import BlackPawn from '../images/Black_Pawn.png';

class Pawn extends Component {

  render () {
    let pawn = null;

    if (this.props.color === 'White') {
      pawn = <img src={WhitePawn} alt={`${this.props.color} Pawn`} ></img>
    }
    else if (this.props.color === 'Black') {
      pawn = <img src={BlackPawn} alt={`${this.props.color} Pawn`} ></img>
    }

    return (
      pawn
    );
  }
}

export default Pawn;
