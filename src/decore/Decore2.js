

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Top from '../PAGES/Top';
import './Decore2.css'; 
import { useCart } from '../Cart/CartContext'; 
import khzana from '../images/bed1/Screenshot 2024-03-02 at 16.41.28.png'
import folo2 from '../images/bed1/Screenshot_2024-03-03_at_04.04.33-removebg-preview.png';
import mirror from '../images/bed1/mirror.png'
import comedena1 from '../images/bed1/Screenshot 2024-03-03 at 15.47.57.png';
import bed2 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/Screenshot 2024-02-28 at 22.05.01.png';



const partImages = {
  img1: bed2,
  comedena1: comedena1,
  mirror: mirror,
  khzana: khzana,
  folo: folo2
};






const Decore2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  const { product } = location.state || {};

  const getDimensions = (index) => {
    const piece = product.pieces && product.pieces[index];
    return piece ? { width: piece.width || 0, length: piece.length || 0, depth: piece.depth || 0 } : { width: 0, length: 0, depth: 0 };
  };

  const [updatedDimensions, setUpdatedDimensions] = useState({
    img1: getDimensions(0),
    comedena1: getDimensions(1), 
    mirror: getDimensions(2), 
    khzana: getDimensions(3),
    folo: getDimensions(4)
  });


  const handleDimensionChange = (piece, dimension, value) => {
    setUpdatedDimensions(prev => ({
      ...prev,
      [piece]: {
        ...prev[piece],
        [dimension]: parseFloat(value)
      }
    }));
  };

  const calculatePriceIncrease = () => {
    let extraPrice = 0;
    Object.entries(updatedDimensions).forEach(([key, updated]) => {
      const original = getDimensions(parseInt(key));
  
 
      if (!original || isNaN(original.width) || isNaN(original.length) || isNaN(original.depth)) {
        console.error('Invalid original dimensions:', original);
        return; 
      }
  

      const widthIncrease = Math.abs(updated.width - original.width);
      const lengthIncrease = Math.abs(updated.length - original.length);
      const depthIncrease = Math.abs(updated.depth - original.depth);
  

      if (widthIncrease >= 50) {
        extraPrice += 100;
      }
      if (lengthIncrease >= 50) {
        extraPrice += 100;
      }
      if (depthIncrease >= 50) {
        extraPrice += 100;
      }
    });
  
    return extraPrice;
  };
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const extraPrice = calculatePriceIncrease();
    const basePrice = parseFloat(product.price) || 0; 
    const finalPrice = basePrice + extraPrice;
  
    const productToAdd = {
      id: product.name + new Date().toISOString(),
      name: product.name,
      price: finalPrice,
      imageUrl: bed2, 
      quantity: 1,
      details: "Updated Dimensions",
      dimensions: updatedDimensions 
    };
  
    if (isNaN(finalPrice)) {
      console.error('Computed final price is NaN, check input values:', finalPrice);
    } else {
      addToCart(productToAdd); 
      navigate('/cart');
    }
  };
  


  useEffect(() => {
    if (product.name) {
      alert(product.name);
    }
  }, [product.name]);

  
  return (
    <div className="container11111_1">
      <Top />
      <br/> <br/> <br/> <br/>
      <h1 className="section-heading">Design Page</h1>
      {product ? (
        <>
          <h2>{product.name} - {product.kind}</h2>
          <p className="price">Price: {product.price}₪</p>
          <p className="number-of-pieces">Number of Pieces: {product.numberPieces}</p>
          <p style={{color:'red'}}>For every additional fifty cm (50 cm), 100 ₪ will be added to the price</p>
        </>
      ) : (
        <p>No product details available.</p>
      )}
      <form onSubmit={handleSubmit}>
  {Object.entries(updatedDimensions).map(([key, value], index) => (
    <div key={index} className="dimension-container" style={{marginRight:'240px'}} >
      <img src={partImages[key]} alt={product.name + ' ' + key} className="image" />
      <div>
        <p>Original Dimensions: W: {value.width} cm, L: {value.length} cm, D: {value.depth} cm</p>
        <input type="number" value={value.width} onChange={(e) => handleDimensionChange(key, 'width', e.target.value)} className="dimension-input" /> cm (W)
        <input type="number" value={value.length} onChange={(e) => handleDimensionChange(key, 'length', e.target.value)} className="dimension-input" /> cm (L)
        <input type="number" value={value.depth} onChange={(e) => handleDimensionChange(key, 'depth', e.target.value)} className="dimension-input" /> cm (D)
      </div>
    </div>
  ))}
  <button type="submit" className="button">Save Changes and Add to Cart 🛒</button>
</form>

    </div>
  );
};

export default Decore2;

