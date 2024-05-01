// Wall.js
import React from 'react';

const Test = ({ width, height, top, left }) => {
  const wallStyle = {
    width: `${width}px`,
    height: `${height}px`,
    position: 'absolute',
    top: `${top}px`,
    left: `${left}px`,
    // additional styling
  };

  return <div style={wallStyle} className="wall"></div>;
};

export default Test;
