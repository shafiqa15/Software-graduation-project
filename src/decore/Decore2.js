import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Decore2 = () => {
  const location = useLocation();
  const { bedroomSet } = location.state;
  const [pieces, setPieces] = useState([]);
  console.log("Received state:", location.state);

  useEffect(() => {
      if (location.state && location.state.bedroomSet) {
          // logic to set state
      } else {
          console.error('No bedroom set data found');
      }
  }, [location.state]);
  useEffect(() => {
    // Initialize pieces with default dimensions and individual pricing
    const initializedPieces = bedroomSet.map(piece => ({
      ...piece,
      currentHeight: piece.height,
      currentWidth: piece.width,
      currentLength: piece.length,
      currentPrice: piece.price
    }));
    setPieces(initializedPieces);
  }, [bedroomSet]);

  const handleDimensionChange = (index, dimension, value) => {
    const updatedPieces = [...pieces];
    const piece = updatedPieces[index];
    piece[dimension] = value;
    // Recalculate price based on the change in dimensions
    piece.currentPrice = calculatePriceChange(piece, dimension, value);
    setPieces(updatedPieces);
  };

  const calculatePriceChange = (piece, dimension, newValue) => {
    const dimensionDiff = (newValue - piece[dimension]) / 100;
    return piece.price + (dimensionDiff * 50);
  };

  const totalPrice = pieces.reduce((acc, piece) => acc + piece.currentPrice, 0);

  return (
    <div>
        <h1>Detailing Page</h1>
        {location.state && location.state.bedroomSet.map(piece => (
            <div key={piece.name}>
                <p>{piece.name} - Dimensions: {piece.width}x{piece.height}x{piece.length}</p>
            </div>
        ))}
    </div>
);
   
};

export default Decore2;
