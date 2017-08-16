export const pawnMovement = (startingPosition, destination, pieceColour, currentBoardState) => {

  // this variable is set to true or false if the pawn movement is meant to within it's column
  const inCol = startingPosition % 8 === destination % 8;
  let firstTurn;

  if (pieceColour === 'White') {

    // if the the pawn is in it's starting position and there is no piece in front of it we set firstTurn to true
    // This  allows the pawn to move to squares in the beginning of it's movement
    if (startingPosition  >= 48 && startingPosition <= 56 && currentBoardState[startingPosition - 8] === null) {
      firstTurn = true;
    }

    //checking if the move is possible if it's the firstTurn and in column
    if (firstTurn && inCol) {
      if (destination - startingPosition === -16 || destination - startingPosition === -8) {
        return true;
      }
      else {
        return false;
      }
    }
    // else if it's in the column but not it's first turn check if the movement is possible
    else if (inCol) {
      if (destination - startingPosition === -8) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  // this is the same as a white piece just set up for black starting positions
  else if (pieceColour === 'Black') {
    if (startingPosition >= 8 && startingPosition <= 16 && currentBoardState[startingPosition + 8] === null) {
      firstTurn = true;
    }

    if (firstTurn && inCol) {
      if (destination - startingPosition === 16 || destination - startingPosition === 8) {
        return true;
      }
      else {
        return false;
      }
    }
    else if (inCol) {
      if (destination - startingPosition === 8) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}
