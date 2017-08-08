import React from 'react';

const Pawn = () => {
  const style = {
    width: '25px',
    height: '25px',
    borderRadius: '12.5px',
    zIndex: '1',
    backgroundColor: 'cyan',
    position: 'relative',
    top: '0px',
    left: '19px'
  }
  return (
    <div style={style}></div>
  );
}

export default Pawn;
