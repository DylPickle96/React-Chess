import {pawnMovement} from './pawn-movement';
import {rookMovement} from './rook-movement';
import {knightMovement} from './knight-movement';
import {bishopMovement} from './bishop-movement';
import {queenMovement} from './queen-movement';
import {kingMovement} from './king-movement';

export const pieceRouter = (piece, startingPosition, destination, currentBoardState) => {

  // piece name and colour
  if (piece !== null) {
    const pieceName = piece.split(' ')[1];
    const pieceColour = piece.split(' ')[0];

    switch(pieceName) {
      case 'Pawn':
        return pawnMovement(startingPosition, destination, pieceColour, currentBoardState);
      case 'Rook':
        return rookMovement(startingPosition, destination, currentBoardState);
      case 'Knight':
        return knightMovement(startingPosition, destination);
      case 'Bishop':
        return bishopMovement(startingPosition, destination, currentBoardState);
      case 'Queen':
        return queenMovement(startingPosition, destination, currentBoardState);
      case 'King':
        return kingMovement(startingPosition, destination);
      default:
        return;
    }
  }


}
