import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Top from '../PAGES/Top';
import '../Offers/Offers.css';
import { useCart } from '../Cart/CartContext'; // Adjust the import path based on your file structure
import { useNavigate } from 'react-router-dom';

const OfferDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [offer, setOffer] = useState(state?.offer || {});
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [relatedImages, setRelatedImages] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');

  const handleImageClick = (index) => {
    console.log('Clicked image index:', index);
    console.log('Colors for this product:', offer.Colors?.[index]);

    setSelectedImageIndex(index);
    setRelatedImages(offer.relatedImages?.[index] || []);
    const initialColor = Array.isArray(offer.Colors?.[index]) ? offer.Colors[index][0] : '';
    setSelectedColor(initialColor);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleCloseDetails = () => {
    setSelectedImageIndex(null);
    setRelatedImages([]);
    setSelectedColor('');
  };

  const { addToCart } = useCart();
  const navigate = useNavigate();

const handleAddToCartClick = () => {
    const product = {
        id: offer.id,
        name: offer.productname,
        price: offer.price,
        image: offer.image,
        quantity: 1,
        color: selectedColor,
        source: 'offer' ,// Add this property
        offer: {
            ...offer,
            isOffer: true
        }
    };
    console.log("Adding product:", product);
    addToCart(product);

    navigate('/cart');
};



  return (
    <div>
      <Top />
      <br /> <br /> <br /> <br /> <br />
      <h1>{offer.description}</h1>
      <h2 style={{ marginLeft: '350px' }}>
        This offer {`Has more than ${offer.numberOfPieces} products`}
      </h2>
      <div>Price: {`${offer.price} ₪`}</div>
      <div>
        End Date: <span style={{ color: 'green' }}>{new Date(offer.endDate).toLocaleDateString()}</span>
      </div>
      <div>
        End Time: {new Date(offer.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
      </div>
      <a href='/ReelsPage'>Click on this link to can see the reel realted to this offer! </a>
      <p style={{ color: 'red' }}>Click on each product to know more details about it!</p>
      <button className='madimi-one-regular buttoncart' onClick={handleAddToCartClick} style={{ width: '200px' }}>
        Add to Cart 🛒
      </button>
      <br />      <br />
      <div className="fading-images" style={{marginLeft:'120px'}}>
        {offer.images &&
          offer.products &&
          offer.images.map((imageUrl, index) => (
            <div key={index} className="fade-image-container" onClick={() => handleImageClick(index)}>
              <img
                src={imageUrl}
                alt={`${offer.products[index]} ${index + 1}`}
                className="fade-image"
                style={{ width: '300px', height: '250px', marginLeft: '30px' }}
              />
              <p className="fade-image-text">{offer.products[index]}</p>
            </div>
          ))}
      </div>
      <br />
      {selectedImageIndex !== null && (
        <div className="image-details-overlay" onClick={handleCloseDetails}>
          <div className="image-details-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button CenteredButton2" onClick={handleCloseDetails}>Close</button>
            <br /> <br />
            <h2>{offer.products[selectedImageIndex]}</h2>
            <p>{offer.descriptionn[selectedImageIndex]}</p>
            <div>
              <p> <label htmlFor="color-select">Select a color:</label></p>
              <select id="color-select" value={selectedColor} onChange={handleColorChange} style={{width:'200px'}}>
                {Array.isArray(offer.Colors?.[selectedImageIndex]) &&
                  offer.Colors[selectedImageIndex].map((color, index) => (
                    <option key={index} value={color}>{color}</option>
                  ))}
              </select>
            </div>
            <img
              src={offer.images[selectedImageIndex]}
              alt="Selected"
              className="selected-image fade-image-container"
              style={{ width: '500px', height: '400px' }}
            />
            <div className="related-images">
              <div className="related-images-grid">
                {relatedImages.map((relatedImage, index) => (
                  <img
                    key={index}
                    src={relatedImage}
                    alt={`Related ${index + 1}`}
                    className="related-image"
                    style={{ width: '100px', height: '100px', margin: '10px' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferDetails;