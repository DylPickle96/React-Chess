import {pawnMovement} from './pawn-movement';

export const pieceRouter = (piece, startingPosition, destination, currentBoardState) => {

  // piece name and colour
  const pieceName = piece.split(' ')[1];
  const pieceColour = piece.split(' ')[0];

  switch(pieceName) {
    case 'Pawn':
      console.log(pawnMovement(startingPosition, destination, pieceColour));
      return pawnMovement(startingPosition, destination, pieceColour);
    case 'Rook':
      console.log(pieceName);
      break;
    case 'Knight':
      console.log(pieceName);
      break;
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
