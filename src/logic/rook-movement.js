export const linearBlockageFinder = (startingPosition, destination, currentBoardState, inRow, inCol) => {

  let blockingPieces = [];

  // Checks if the movement is within a row or a col
  // based on those booleans the loop finds pieces within that given row or col and we call these blocking pieces
  for (let i = 0; i < currentBoardState.length; i++) {

    const excludeSelectedPiece = i !== startingPosition;
    const isPiece = currentBoardState[i] !== null;
    const colBlockage = i % 8 === startingPosition % 8;
    const rowBlockage = Math.floor(i / 8) === Math.floor(startingPosition / 8);

    if (inCol) {
      if  (colBlockage && excludeSelectedPiece && isPiece) {
        blockingPieces.push(i);
      }
    }
    else if (inRow) {
      if (rowBlockage && excludeSelectedPiece && isPiece) {
        blockingPieces.push(i);
      }
    }
  }

  // If our movement is up or left
  if (startingPosition > destination) {
    // if we find a piece that is both greater than our destination and less than our startingPosition
    // we call that a blocking piece
    for (let i = 0; i < blockingPieces.length; i++) {
      if (blockingPieces[i] > destination && blockingPieces[i] < startingPosition) {
        return true;
      }
    }
    return false;
  }
  // else if our movement is down or right
  else if (startingPosition < destination) {
    // if we find a piece that is both less than our destination and greater than our startingPosition
    // we call that a blocking piece
    for (let i = 0; i < blockingPieces.length; i++) {
      if (blockingPieces[i] < destination && blockingPieces[i] > startingPosition) {
        return true;
      }
    }
    return false;
  }
}

export const rookMovement = (startingPosition, destination, currentBoardState) => {

  // true or false if the movement is in a column or a row
  const inCol = startingPosition % 8 === destination % 8;
  const inRow = Math.floor(startingPosition / 8) === Math.floor(destination / 8);
  // a function which finds pieces that might block a rook's path to it's destination
  const blockage = linearBlockageFinder(startingPosition, destination, currentBoardState, inRow, inCol);

  // returns true if there is no blockage and the movement is linear (I.E. in a row or column)
  if (inRow || inCol) {
    if (!blockage) {
      return true;
    }
  }
  else {
    return false;
  }
}
