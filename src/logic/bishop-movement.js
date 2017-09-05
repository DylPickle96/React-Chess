export const diagonalBlockageFinder = (currentBoardState, startingPosition, destination) => {

  let stepsBetweenPieces;
  let blockingPieces = [];

  // movement is up and left
  if (Math.abs((startingPosition - destination) % 9) === 0 && startingPosition > destination) {

    // this value will be divisible by 9
    stepsBetweenPieces = Math.abs(startingPosition - destination);

    // comparing the squares between the startingPosition and destination
    while (stepsBetweenPieces > 0) {
      // if we find a piece return true;
      if (currentBoardState[destination + stepsBetweenPieces] !== null && destination + stepsBetweenPieces !== startingPosition) {
        blockingPieces.push(destination + stepsBetweenPieces);
        return [true, blockingPieces];
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
      if (currentBoardState[destination - stepsBetweenPieces] !== null && destination - stepsBetweenPieces !== startingPosition) {
        blockingPieces.push(destination - stepsBetweenPieces);
        return [true, blockingPieces];
      }
      stepsBetweenPieces = stepsBetweenPieces - 9;
    }
    return false;
  }
  // if the movement is up and right we need to use 7 and values that are divisible by 7
  else if (Math.abs((startingPosition - destination) % 7) === 0 && startingPosition > destination) {

    // this value will be divisible by 9
    stepsBetweenPieces = Math.abs(startingPosition - destination);

    // comparing the squares between the startingPosition and destination
    while (stepsBetweenPieces > 0) {
      // if we find a piece return true;
      if (currentBoardState[destination + stepsBetweenPieces] !== null && destination + stepsBetweenPieces !== startingPosition) {
        blockingPieces.push(destination + stepsBetweenPieces);
        return [true, blockingPieces];
      }
      stepsBetweenPieces = stepsBetweenPieces - 7;
    }
    // return false if there is no blockage
    return false;
  }
  // movement is down and left
  else if (Math.abs((startingPosition - destination) % 7) === 0 && startingPosition < destination) {

    stepsBetweenPieces = Math.abs(startingPosition - destination);

    while (stepsBetweenPieces > 0) {
      // we add instead of subtract here
      if (currentBoardState[destination - stepsBetweenPieces] !== null && destination - stepsBetweenPieces !== startingPosition) {
        blockingPieces.push(destination - stepsBetweenPieces);
        return [true, blockingPieces];
      }
      stepsBetweenPieces = stepsBetweenPieces - 7;
    }
    return false;
  }
}

export const bishopMovement = (startingPosition, destination, currentBoardState) => {

  let blockageFinder;
  // up & left and down & right movement
  // startingPosition - destination modulo 9 confirms the squares are diagonal
  // from one another
  if (Math.abs((startingPosition - destination) % 9) === 0) {

    blockageFinder = diagonalBlockageFinder(currentBoardState, startingPosition, destination);
    
    if (blockageFinder[1] === destination) {
      return true;
    }
    else if (!blockageFinder[0]) {
      return true;
    }
  }
  // up & right and down & left movement
  // startingPosition - destination modulo 7 confirms the squares are diagonal
  // from one another
  else if (Math.abs((startingPosition - destination) % 7) === 0) {

    blockageFinder = diagonalBlockageFinder(currentBoardState, startingPosition, destination);

    if (blockageFinder[1] === destination) {
      return true;
    }
    else if (!blockageFinder[0]) {
      return true;
    }
  }
  else {
    return false;
  }
}
