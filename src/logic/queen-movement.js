import {linearBlockageFinder} from './rook-movement';
import {diagonalBlockageFinder} from './bishop-movement';

export const queenMovement = (startingPosition, destination, currentBoardState) => {

  const inCol = startingPosition % 8 === destination % 8;
  const inRow = Math.floor(startingPosition / 8) === Math.floor(destination / 8);
  let blockage;

  if (inCol || inRow) {

    blockage = linearBlockageFinder(startingPosition, destination, currentBoardState, inRow, inCol);

    if (!blockage) {
      return true;
    }
  }
  else if (Math.abs((startingPosition - destination) % 9) === 0) {

    blockage = diagonalBlockageFinder(currentBoardState, startingPosition, destination);

    if (!blockage) {
      return true;
    }
  }
  else if (Math.abs((startingPosition - destination) % 7) === 0) {

    blockage = diagonalBlockageFinder(currentBoardState, startingPosition, destination);

    if (!blockage) {
      return true;
    }
  }
  else {
    return false;
  }
}
