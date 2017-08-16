export const pawnMovement = (startingPosition, destination, pieceColour, currentBoardState) => {

  const inRow = startingPosition % 8 === destination % 8;
  let firstTurn;

  if (pieceColour === 'White') {

    if (startingPosition  >= 48 && startingPosition <= 56 && currentBoardState[startingPosition - 8] === null) {
      firstTurn = true;
    }

    if (firstTurn && inRow) {
      if (destination - startingPosition === -16 || destination - startingPosition === -8) {
        return true;
      }
      else {
        return false;
      }
    }
    else if (inRow) {
      if (destination - startingPosition === -8) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  else if (pieceColour === 'Black') {

    if (startingPosition >= 8 && startingPosition <= 16 && currentBoardState[startingPosition + 8] === null) {
      firstTurn = true;
    }

    if (firstTurn && inRow) {
      if (destination - startingPosition === 16 || destination - startingPosition === 8) {
        return true;
      }
      else {
        return false;
      }
    }
    else if (inRow) {
      if (destination - startingPosition === 8) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}
