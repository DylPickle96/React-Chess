const blockageFinder = (startingPosition, destination, currentBoardState, inRow, inCol) => {

  let blockingPieces = [];

  for (let i = 0; i < currentBoardState.length; i++) {
    if (inCol) {
      if  (i % 8 === startingPosition % 8 && i !== startingPosition && currentBoardState[i] !== null) {
        blockingPieces.push(i);
      }
    }
    else if (inRow){
      if (Math.floor(i / 8) === Math.floor(startingPosition / 8) && i !== startingPosition && currentBoardState[i] !== null) {
        blockingPieces.push(i);
      }
    }
  }

  if (startingPosition > destination) {
    for (let i = 0; i < blockingPieces.length; i++) {
      if (blockingPieces[i] > destination && blockingPieces[i] < startingPosition) {
        return false;
      }
    }
    return true;
  }
  else if (startingPosition < destination) {
    for (let i = 0; i < blockingPieces.length; i++) {
      if (blockingPieces[i] < destination && blockingPieces[i] > startingPosition) {
        return false;
      }
    }
    return true;
  }
}

export const rookMovement = (startingPosition, destination, currentBoardState) => {

  const inCol = startingPosition % 8 === destination % 8;
  const inRow = Math.floor(startingPosition / 8) === Math.floor(destination / 8);
  const blockage = blockageFinder(startingPosition, destination, currentBoardState, inRow, inCol);

  if (inRow || inCol) {
    if (blockage) {
      return true;
    }
  }
}
