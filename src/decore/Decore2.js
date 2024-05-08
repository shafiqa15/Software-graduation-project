// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Top from '../PAGES/Top';
// import './Decore2.css'; 
// import { useCart } from '../Cart/CartContext'; 
// import { useNavigate } from 'react-router-dom';
// import { bed2 } from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/Screenshot 2024-02-28 at 22.05.01.png';

// const Decore2 = () => {
//   const location = useLocation();
//   const { addToCart } = useCart(); 

//   // const { numberOfPieces, name, price, imageUrl, kind, dimensions, img1, comedena1, mirror, khzana,folo,
//   //         img1Dimensions, comedena1Dimensions, mirrorDimensions, khzanaDimensions,foloDimensions } = location.state || {};

//   // State to handle updated dimensions
//   const img1Dimensions=product.pieces[0].width;
//   const comedena1Dimensions=product.pieces[1].width;
//   const mirrorDimensions=product.pieces[2].width;
//   const khzanaDimensions=product.pieces[3].width;
//   const foloDimensions=product.pieces[4].width;

//   const [updatedImg1Dimensions, setUpdatedImg1Dimensions] = useState(img1Dimensions);
//   const [updatedComedena1Dimensions, setUpdatedComedena1Dimensions] = useState(comedena1Dimensions);
//   const [updatedMirrorDimensions, setUpdatedMirrorDimensions] = useState(mirrorDimensions);
//   const [updatedKhzanaDimensions, setUpdatedKhzanaDimensions] = useState(khzanaDimensions);
//   const [updatedfoloDimensions, setUpdatedfoloDimensions] = useState(foloDimensions);


 
  
//   const navigate = useNavigate();
//   const { product } = location.state || {}; // Default to an empty object if state is undefined


//  const handleDimensionChange = (setter, dimensions, key, value) => {
//   setter({ ...dimensions, [key]: parseFloat(value) });
// };

// const calculatePriceIncrease = () => {
//   const dimensionsList = [img1Dimensions, comedena1Dimensions, mirrorDimensions, khzanaDimensions, foloDimensions];
//   const updatedDimensionsList = [updatedImg1Dimensions, updatedComedena1Dimensions, updatedMirrorDimensions, updatedKhzanaDimensions, updatedfoloDimensions];
//   let extraPrice = 0;

//   dimensionsList.forEach((original, index) => {
//     const updated = updatedDimensionsList[index];
//     if (original && updated) {
//       const widthDiff = updated.width - original.width;
//       const heightDiff = updated.height - original.height;
//       const depthDiff = updated.depth - original.depth;
//       const totalDiff = widthDiff + heightDiff + depthDiff;
//       extraPrice += totalDiff * 2; // $2 for each 1 cm increase
//     }
//   });

//   return extraPrice;
// };



//   const handleSubmit = () => {
//   const extraPrice = calculatePriceIncrease();
//   const finalPrice = product.price + extraPrice;

//   const productToAdd = {
//     id: product.name + new Date().toISOString(),
//     name:product.name,
//     price: finalPrice, 
//     imageUrl:{bed2},
//     quantity: 1,
//     details: "Updated Dimensions",
//     dimensions: {
//       img1: updatedImg1Dimensions,
//       comedena1: updatedComedena1Dimensions,
//       mirror: updatedMirrorDimensions,
//       khzana: updatedKhzanaDimensions,
//       folo: updatedfoloDimensions
//     }
//   };

//   addToCart(productToAdd);
//   navigate('/cart');
// };






// useEffect(() => {
//   alert(product.name);

// })
//   return (
//     <div className="container11111_1">
//       <Top />
//       <br/> <br/> <br/> <br/> 
//       <h1 className="section-heading" style={{marginRight:'200px'}}>Design Page</h1>
//       <div className="product-details">
//       {/* {product.name} */}
     
//       {product ? (
//          <div>
//           <h2>{product.name}</h2>
//          <p>{product.details}</p>
//       </div>
//        ) : (
//         <p>No product details available.</p>
//        )} 

//         <h2 className="product-name">{product.name} - {product.kind}</h2>
//         <p className="price">Price: {product.price}₪</p>
//         <p className="number-of-pieces">Number of Pieces: {product.numberPieces}</p>
//         <p>W: Width , H: Height, D: Depth</p>
//         <p style={{color:'red'}}>For every additional fifty cm (50 cm),100 ₪ will be added to the price </p>
//       </div>
      
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         handleSubmit();
//       }}>
//         {/* <div className="image-container"> */}


//       <div className='container11111_1'>
//         <div style={{ display: 'flex', alignItems: 'center' }}>

//           {img1 && <img src={img1} alt={name} className="image" />}
//           {updatedImg1Dimensions && (
//             <div className="dimension-container">
//               <p style={{width:'500px'}}>Original Dimensions: W: {img1Dimensions.width} cm, H: {img1Dimensions.height} cm, D: {img1Dimensions.depth} cm</p>
            
//               <div style={{marginTop:'20px'}}>
              
//               <input type="number" value={updatedImg1Dimensions.width} onChange={(e) => handleDimensionChange(setUpdatedImg1Dimensions, updatedImg1Dimensions, 'width', e.target.value)} className="dimension-input" /> cm
//               <input type="number" value={updatedImg1Dimensions.height} onChange={(e) => handleDimensionChange(setUpdatedImg1Dimensions, updatedImg1Dimensions, 'height', e.target.value)} className="dimension-input" /> cm
//               <input type="number" value={updatedImg1Dimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedImg1Dimensions, updatedImg1Dimensions, 'depth', e.target.value)} className="dimension-input" /> cm
//             </div>
//             </div>
//           )}
//           </div>

//         <div style={{ display: 'flex', alignItems: 'center' }}>
//         {comedena1 && <img src={comedena1} alt={name}  className="image" />}
//         {updatedComedena1Dimensions && (
//           <div className="dimension-container">
//           <p style={{width:'500px'}}>Original Dimensions: W: {comedena1Dimensions.width} cm, H: {comedena1Dimensions.height} cm, D: {comedena1Dimensions.depth} cm</p>
//             <div style={{marginTop:'20px'}}>
//             <input type="number" value={updatedComedena1Dimensions.width} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'width', e.target.value)} className="dimension-input"/> cm
//             <input type="number" value={updatedComedena1Dimensions.height} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'height', e.target.value)} className="dimension-input"/> cm
//             <input type="number" value={updatedComedena1Dimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'depth', e.target.value)} className="dimension-input"/> cm
//           </div>
//           </div>
//         )}
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {comedena1 && <img src={comedena1} alt={name}  className="image" />}
//         {updatedComedena1Dimensions && (
//           <div className="dimension-container">
//           <p style={{width:'500px'}}>Original Dimensions:W: {comedena1Dimensions.width} cm, H: {comedena1Dimensions.height} cm, D: {comedena1Dimensions.depth} cm</p>
//             <div style={{marginTop:'20px'}}>
//             <input type="number" value={updatedComedena1Dimensions.width} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'width', e.target.value)} className="dimension-input"/> cm
//             <input type="number" value={updatedComedena1Dimensions.height} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'height', e.target.value)} className="dimension-input"/> cm
//             <input type="number" value={updatedComedena1Dimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedComedena1Dimensions, updatedComedena1Dimensions, 'depth', e.target.value)} className="dimension-input"/> cm
//           </div>
//           </div>
//         )}
//       </div>

//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {mirror && <img src={mirror} alt={name}  className="image" />}
//         {updatedMirrorDimensions && (
//           <div className="dimension-container">
//           <p style={{width:'500px'}}>Original Dimensions: W: {mirrorDimensions.width} cm, H: {mirrorDimensions.height} cm, D: {mirrorDimensions.depth} cm</p>
//             <div style={{marginTop:'20px'}}>
//             <input type="number" value={updatedMirrorDimensions.width} onChange={(e) => handleDimensionChange(setUpdatedMirrorDimensions, updatedMirrorDimensions, 'width', e.target.value)} className="dimension-input"/> cm
//             <input type="number" value={updatedMirrorDimensions.height} onChange={(e) => handleDimensionChange(setUpdatedMirrorDimensions, updatedMirrorDimensions, 'height', e.target.value)} className="dimension-input"/> cm
//             <input type="number" value={updatedMirrorDimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedMirrorDimensions, updatedMirrorDimensions, 'depth', e.target.value)} className="dimension-input"/> cm
//           </div>
//           </div>
//         )}
//       </div>

//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {folo && <img src={folo} alt={name}  className="image" />}
//         {updatedfoloDimensions && (
//           <div className="dimension-container">
//           <p style={{width:'500px'}}>Original Dimensions:W: {foloDimensions.width} cm, H: {foloDimensions.height} cm, D: {foloDimensions.depth} cm</p>
//             <div style={{marginTop:'20px'}}>
//             <input type="number" value={updatedfoloDimensions.width} onChange={(e) => handleDimensionChange(setUpdatedfoloDimensions, updatedfoloDimensions, 'width', e.target.value)} className="dimension-input"/> cm
//             <input type="number" value={updatedfoloDimensions.height} onChange={(e) => handleDimensionChange(setUpdatedfoloDimensions, updatedfoloDimensions, 'height', e.target.value)} className="dimension-input"/>cm
//             <input type="number" value={updatedfoloDimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedfoloDimensions, updatedfoloDimensions, 'depth', e.target.value)} className="dimension-input"/> cm
//           </div>
//           </div>
//         )}
//       </div>




//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {khzana && <img src={khzana} alt={name}  className="image" />}
//         {updatedKhzanaDimensions && (
//           <div className="dimension-container">
//           <p style={{width:'500px'}}>Original Dimensions:
//              W: {khzanaDimensions.width} cm, H: {khzanaDimensions.height} cm, D: {khzanaDimensions.depth} cm</p>
//              <div style={{marginTop:'20px'}}>
//             <input type="number" value={updatedKhzanaDimensions.width} onChange={(e) => handleDimensionChange(setUpdatedKhzanaDimensions, updatedKhzanaDimensions, 'width', e.target.value)} className="dimension-input"/> cm
//             <input type="number" value={updatedKhzanaDimensions.height} onChange={(e) => handleDimensionChange(setUpdatedKhzanaDimensions, updatedKhzanaDimensions, 'height', e.target.value)} className="dimension-input"/> cm
//             <input type="number" value={updatedKhzanaDimensions.depth} onChange={(e) => handleDimensionChange(setUpdatedKhzanaDimensions, updatedKhzanaDimensions, 'depth', e.target.value)} className="dimension-input"/> cm
//           </div>
//           </div>
//         )}
//       </div>

//         <div className="overall-dimensions">
//           {dimensions && (
//             <div>
//               <h3 className="section-heading">Overall Dimensions</h3>
//               <p>Width: {dimensions.width} cm</p>
//               <p>Height: {dimensions.height} cm</p>
//               <p>Depth: {dimensions.depth} cm</p>
//             </div>
//           )}
//         </div>
//           </div>
//         <button type="submit" className="button"><p style={{color:"white",marginTop:'10px',fontSize:'15px'}}> Save Changes and Add to Cart 🛒</p></button>
//       </form>
      
//     </div>
 
//   );
// };

// export default Decore2;


// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const DetailingPage = () => {
//   const location = useLocation();
//   const { product } = location.state || {}; // Default to an empty object if state is undefined

//   return (
//     <div>
//       <h1>Product Detailing Page</h1>
//       {product ? (
//         <div>
//           <h2>{product.name}</h2>
//           <p>{product.details}</p>
//         </div>
//       ) : (
//         <p>No product details available.</p>
//       )}
//     </div>
//   );
// };

// export default DetailingPage;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Top from '../PAGES/Top';
import './Decore2.css'; 
import { useCart } from '../Cart/CartContext'; 
import bed2 from '../images/VEGA.jpeg';
const Decore2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  const { product } = location.state || {};

  // Function to safely extract dimension data
  const getDimensions = (index) => {
    const piece = product.pieces && product.pieces[index];
    return piece ? { width: piece.width || 0, length: piece.length || 0, depth: piece.depth || 0 } : { width: 0, length: 0, depth: 0 };
  };

  // Corrected state to handle updated dimensions with no duplicate keys
  const [updatedDimensions, setUpdatedDimensions] = useState({
    img1: getDimensions(0), // Assuming this is a valid index
    comedena1: getDimensions(1), // Assuming this is a valid index
    mirror: getDimensions(2), // Assuming this is a valid index
    khzana: getDimensions(3), // Assuming this is a valid index
    folo: getDimensions(4) // Assuming this is a valid index
  });

  // handle dimension changes
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
  
      // Check if original dimensions are valid
      if (!original || isNaN(original.width) || isNaN(original.length) || isNaN(original.depth)) {
        console.error('Invalid original dimensions:', original);
        return; // Skip this iteration if data is invalid
      }
  
      // Calculate increases only if the change exceeds 50 cm
      const widthIncrease = Math.abs(updated.width - original.width);
      const lengthIncrease = Math.abs(updated.length - original.length);
      const depthIncrease = Math.abs(updated.depth - original.depth);
  
      // Add 100 ₪ for each dimension that increases by at least 50 cm
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
    const basePrice = parseFloat(product.price) || 0; // Fallback to 0 if initial price is undefined or not a number
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
  

  // Alert product name on mount
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
          <div key={index} className="dimension-container">
            <img src={bed2} alt={product.name} className="image" />
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

