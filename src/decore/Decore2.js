import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Top from '../PAGES/Top';
import './Decore2.css'; 
import { useCart } from '../Cart/CartContext'; 
import { useNavigate } from 'react-router-dom';

const Decore2 = () => {
  const location = useLocation();
  const { addToCart } = useCart(); 

  const { numberOfPieces, name, price, imageUrl, kind, dimensions, img1, comedena1, mirror, khzana,folo,
          img1Dimensions, comedena1Dimensions, mirrorDimensions, khzanaDimensions,foloDimensions } = location.state || {};

  // State to handle updated dimensions
  const [updatedImg1Dimensions, setUpdatedImg1Dimensions] = useState(img1Dimensions);
  const [updatedComedena1Dimensions, setUpdatedComedena1Dimensions] = useState(comedena1Dimensions);
  const [updatedMirrorDimensions, setUpdatedMirrorDimensions] = useState(mirrorDimensions);
  const [updatedKhzanaDimensions, setUpdatedKhzanaDimensions] = useState(khzanaDimensions);
  const [updatedfoloDimensions, setUpdatedfoloDimensions] = useState(foloDimensions);


  // Function to handle dimension change
  const handleDimensionChange = (setter, dimensions, key, value) => {
    setter({ ...dimensions, [key]: parseFloat(value) });
  };
  
  const navigate = useNavigate();

  // Function to calculate price increase based on dimensions change, proportionally
const calculatePriceIncrease = () => {
  const dimensionsList = [img1Dimensions, comedena1Dimensions, mirrorDimensions, khzanaDimensions, foloDimensions];
  const updatedDimensionsList = [updatedImg1Dimensions, updatedComedena1Dimensions, updatedMirrorDimensions, updatedKhzanaDimensions, updatedfoloDimensions];
  let extraPrice = 0;

  dimensionsList.forEach((original, index) => {
    const updated = updatedDimensionsList[index];
    if (original && updated) {
      const widthDiff = updated.width - original.width;
      const heightDiff = updated.height - original.height;
      const depthDiff = updated.depth - original.depth;
      const totalDiff = widthDiff + heightDiff + depthDiff;
      extraPrice += totalDiff * 2; // $2 for each 1 cm increase
    }
  });

  return extraPrice;
};



  const handleSubmit = () => {
  const extraPrice = calculatePriceIncrease();
  const finalPrice = price + extraPrice;

  const productToAdd = {
    id: name + new Date().toISOString(),
    name,
    price: finalPrice, // now uses the proportionally adjusted price
    imageUrl,
    quantity: 1,
    details: "Updated Dimensions",
    dimensions: {
      img1: updatedImg1Dimensions,
      comedena1: updatedComedena1Dimensions,
      mirror: updatedMirrorDimensions,
      khzana: updatedKhzanaDimensions,
      folo: updatedfoloDimensions
    }
  };

  addToCart(productToAdd);
  navigate('/cart');
};

  return (
    <div className="container11111_1">
      <Top />
      <br/> <br/> <br/> <br/> 
      <h1 className="section-heading" style={{marginRight:'200px'}}>Design Page</h1>
      <div className="product-details">
        <h2 className="product-name">{name} - {kind}</h2>
        <p className="price">Price: {price}₪</p>
        <p className="number-of-pieces">Number of Pieces: {numberOfPieces}</p>
        <p>W: Width , H: Height, D: Depth</p>
        <p style={{color:'red'}}>For every additional fifty cm (50 cm),100 ₪ will be added to the price </p>
      </div>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        {/* <div className="image-container"> */}


      <div className='container11111_1'>
        <div style={{ display: 'flex', alignItems: 'center' }}>

          {img1 && <img src={img1} alt={name} className="image" />}
          {updatedImg1Dimensions && (
            <div className="dimension-container">
              <p style={{width:'500px'}}>Original Dimensions: W: {img1Dimensions.width} cm, H: {img1Dimensions.height} cm, D: {img1Dimensions.depth} cm</p>
            
              <div style={{marginTop:'20px'}}>
              
              <input type="number" value={updatedImg1Dimensions.width} onChange={(e) => handleDimensionChange(setUpdatedImg1Dimensions, updatedImg1Dimensions, 'width', e.target.value)} className="dimension-input" /> cm
              <input type="number" value={updatedImg1Dimensions.height} onChange={(e) => handleDimensionChange(setUpdatedImg1Dimensions, updatedImg1Dimensions, 'height', e.target.value)} className="dimension-input" /> cm
              <input type="number" value={updatedImg1Dimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedImg1Dimensions, updatedImg1Dimensions, 'depth', e.target.value)} className="dimension-input" /> cm
            </div>
            </div>
          )}
          </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
        {comedena1 && <img src={comedena1} alt={name}  className="image" />}
        {updatedComedena1Dimensions && (
          <div className="dimension-container">
          <p style={{width:'500px'}}>Original Dimensions: W: {comedena1Dimensions.width} cm, H: {comedena1Dimensions.height} cm, D: {comedena1Dimensions.depth} cm</p>
            <div style={{marginTop:'20px'}}>
            <input type="number" value={updatedComedena1Dimensions.width} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'width', e.target.value)} className="dimension-input"/> cm
            <input type="number" value={updatedComedena1Dimensions.height} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'height', e.target.value)} className="dimension-input"/> cm
            <input type="number" value={updatedComedena1Dimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'depth', e.target.value)} className="dimension-input"/> cm
          </div>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {comedena1 && <img src={comedena1} alt={name}  className="image" />}
        {updatedComedena1Dimensions && (
          <div className="dimension-container">
          <p style={{width:'500px'}}>Original Dimensions:W: {comedena1Dimensions.width} cm, H: {comedena1Dimensions.height} cm, D: {comedena1Dimensions.depth} cm</p>
            <div style={{marginTop:'20px'}}>
            <input type="number" value={updatedComedena1Dimensions.width} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'width', e.target.value)} className="dimension-input"/> cm
            <input type="number" value={updatedComedena1Dimensions.height} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'height', e.target.value)} className="dimension-input"/> cm
            <input type="number" value={updatedComedena1Dimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'depth', e.target.value)} className="dimension-input"/> cm
          </div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {mirror && <img src={mirror} alt={name}  className="image" />}
        {updatedMirrorDimensions && (
          <div className="dimension-container">
          <p style={{width:'500px'}}>Original Dimensions: W: {mirrorDimensions.width} cm, H: {mirrorDimensions.height} cm, D: {mirrorDimensions.depth} cm</p>
            <div style={{marginTop:'20px'}}>
            <input type="number" value={updatedMirrorDimensions.width} onChange={(e) => handleDimensionChange(setUpdatedMirrorDimensions, updatedMirrorDimensions, 'width', e.target.value)} className="dimension-input"/> cm
            <input type="number" value={updatedMirrorDimensions.height} onChange={(e) => handleDimensionChange(setUpdatedMirrorDimensions, updatedMirrorDimensions, 'height', e.target.value)} className="dimension-input"/> cm
            <input type="number" value={updatedMirrorDimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedMirrorDimensions, updatedMirrorDimensions, 'depth', e.target.value)} className="dimension-input"/> cm
          </div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {folo && <img src={folo} alt={name}  className="image" />}
        {updatedfoloDimensions && (
          <div className="dimension-container">
          <p style={{width:'500px'}}>Original Dimensions:W: {foloDimensions.width} cm, H: {foloDimensions.height} cm, D: {foloDimensions.depth} cm</p>
            <div style={{marginTop:'20px'}}>
            <input type="number" value={updatedfoloDimensions.width} onChange={(e) => handleDimensionChange(setUpdatedfoloDimensions, updatedfoloDimensions, 'width', e.target.value)} className="dimension-input"/> cm
            <input type="number" value={updatedfoloDimensions.height} onChange={(e) => handleDimensionChange(setUpdatedfoloDimensions, updatedfoloDimensions, 'height', e.target.value)} className="dimension-input"/>cm
            <input type="number" value={updatedfoloDimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedfoloDimensions, updatedfoloDimensions, 'depth', e.target.value)} className="dimension-input"/> cm
          </div>
          </div>
        )}
      </div>




      <div style={{ display: 'flex', alignItems: 'center' }}>
        {khzana && <img src={khzana} alt={name}  className="image" />}
        {updatedKhzanaDimensions && (
          <div className="dimension-container">
          <p style={{width:'500px'}}>Original Dimensions:
             W: {khzanaDimensions.width} cm, H: {khzanaDimensions.height} cm, D: {khzanaDimensions.depth} cm</p>
             <div style={{marginTop:'20px'}}>
            <input type="number" value={updatedKhzanaDimensions.width} onChange={(e) => handleDimensionChange(setUpdatedKhzanaDimensions, updatedKhzanaDimensions, 'width', e.target.value)} className="dimension-input"/> cm
            <input type="number" value={updatedKhzanaDimensions.height} onChange={(e) => handleDimensionChange(setUpdatedKhzanaDimensions, updatedKhzanaDimensions, 'height', e.target.value)} className="dimension-input"/> cm
            <input type="number" value={updatedKhzanaDimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedKhzanaDimensions, updatedKhzanaDimensions, 'depth', e.target.value)} className="dimension-input"/> cm
          </div>
          </div>
        )}
      </div>

        <div className="overall-dimensions">
          {dimensions && (
            <div>
              <h3 className="section-heading">Overall Dimensions</h3>
              <p>Width: {dimensions.width} cm</p>
              <p>Height: {dimensions.height} cm</p>
              <p>Depth: {dimensions.depth} cm</p>
            </div>
          )}
        </div>
          </div>
        <button type="submit" className="button"><p style={{color:"white",marginTop:'10px',fontSize:'15px'}}> Save Changes and Add to Cart 🛒</p></button>
      </form>
      
    </div>
 
  );
};

export default Decore2;
