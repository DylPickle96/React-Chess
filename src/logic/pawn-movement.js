export const pawnMovement = (startingPosition, destination, pieceColour) => {

  const inRow = startingPosition % 8 === destination % 8;
  let firstTurn;

  if (pieceColour === 'White') {

    for (let i = 48; i < 55; i++) {
      if (startingPosition === (i)) {
        firstTurn = true;
      }
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
    for (let i = 8; i < 15; i++) {
      if (startingPosition === (i)) {
        firstTurn = true;
      }
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
