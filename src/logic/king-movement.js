export const kingMovement = (startingPosition, destination) => {

  if (Math.abs(startingPosition - destination) === 1) {
    return true;
  }
  else if ((startingPosition - 8) === destination || (startingPosition + 8) === destination) {
    return true;
  }
  else if ((startingPosition - 8) - 1 === destination || (startingPosition - 8) + 1 === destination) {
    return true;
  }
  else if ((startingPosition + 8) - 1 === destination || (startingPosition + 8) + 1 === destination) {
    return true;
  }
  else {
    return false;
  }
}
