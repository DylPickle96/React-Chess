import {pawnMovement} from './pawn-movement';
import {rookMovement} from './rook-movement';

export const pieceRouter = (piece, startingPosition, destination, currentBoardState) => {

  let pieceName;
  let pieceColour;
  // piece name and colour
  if (piece !== null) {
    pieceName = piece.split(' ')[1];
    pieceColour = piece.split(' ')[0];
  }

  switch(pieceName) {
    case 'Pawn':
      return pawnMovement(startingPosition, destination, pieceColour);
    case 'Rook':
      return rookMovement(startingPosition, destination, currentBoardState);
    case 'Knight':
      return true;
    case 'Bishop':
      console.log(pieceName);
      break;
    case 'Queen':
      console.log(pieceName);
      break;
    case 'King':
      console.log(pieceName);
      break;
    default:
      return;
  }
}
