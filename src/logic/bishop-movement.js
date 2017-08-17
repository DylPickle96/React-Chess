const blockageFinder = (currentBoardState, startingPosition, destination) => {

  let stepsBetweenPieces;

  // movement is up and left
  if (Math.abs((startingPosition - destination) % 9) === 0 && startingPosition > destination) {

    // this value will be divisible by 9
    stepsBetweenPieces = Math.abs(startingPosition - destination);

    // comparing the squares between the startingPosition and destination
    while (stepsBetweenPieces > 0) {
      // if we find a piece return true;
      if (currentBoardState[startingPosition - stepsBetweenPieces] !== null) {
        return true;
      }
      stepsBetweenPieces = stepsBetweenPieces - 9;
    }
    // return false if there is no blockage
    return false;
  }
  // down and right movement is the opposite of the previous statement
  else if (Math.abs((startingPosition - destination) % 9) === 0 && startingPosition < destination) {

    stepsBetweenPieces = Math.abs(startingPosition - destination);

    while (stepsBetweenPieces > 0) {
      // we add instead of subtract here
      if (currentBoardState[startingPosition + stepsBetweenPieces] !== null) {
        return true;
      }
      stepsBetweenPieces = stepsBetweenPieces - 9;
    }
    return false;
  }
  // if the movement is up and right we need to use 7 and values that are divisible by 7
  else if (Math.abs((startingPosition - destination) % 7) === 0 && startingPosition > destination) {
    console.log('up & right');
    stepsBetweenPieces = Math.abs(startingPosition - destination);

    while (stepsBetweenPieces > 0) {
      if (currentBoardState[startingPosition - stepsBetweenPieces] !== null) {
        return true;
      }
      stepsBetweenPieces = stepsBetweenPieces - 7;
    }
    return false
  }
  // movement is down and left
  else if (Math.abs((startingPosition - destination) % 7) === 0 && startingPosition < destination) {
    console.log('down & left');
    stepsBetweenPieces = Math.abs(startingPosition - destination);

    while (stepsBetweenPieces > 0) {
      if (currentBoardState[startingPosition + stepsBetweenPieces] !== null) {
        return true;
      }
      stepsBetweenPieces = stepsBetweenPieces - 7;
    }
    return false
  }
}

export const bishopMovement = (startingPosition, destination, currentBoardState) => {

  let blockage;
  // up & left and down & right movement
  // startingPosition - destination modulo 9 confirms the squares are diagonal
  // from one another
  if (Math.abs((startingPosition - destination) % 9) === 0) {

    blockage = blockageFinder(currentBoardState, startingPosition, destination);

    if (!blockage) {
      return true;
    }
  }
  // up & right and down & left movement
  // startingPosition - destination modulo 7 confirms the squares are diagonal
  // from one another
  else if (Math.abs((startingPosition - destination) % 7) === 0) {

    blockage = blockageFinder(currentBoardState, startingPosition, destination);

    if (!blockage) {
      return true;
    }
  }
  else {
    return false;
  }
}
