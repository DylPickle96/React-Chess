export const knightMovement = (startingPosition, destination) => {

  // If you're going up the board and your destination is offset return true
  if (destination === startingPosition - 16 + 1 || destination === startingPosition - 16  - 1) {
    return true;
  }
  // If you're going down the board and your destination is offset return true
  else if (destination === startingPosition + 16 + 1 || destination === startingPosition + 16 + - 1) {
    return true;
  }
  // If you're going left on the board and your destination is offset return true
  else if (destination === (startingPosition - 2) - 8 || destination === (startingPosition - 2) + 8) {
    return true;
  }
   // If you're going right on the board and your destination is offset return true
  else if (destination === (startingPosition + 2) - 8 || destination === (startingPosition + 2) + 8) {
    return true;
  }
  else {
    return false;
  }

  // Knight Movement was easy because it did not need to be capped. The Knight can jump pieces
}
