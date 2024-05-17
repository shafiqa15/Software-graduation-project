import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Top from '../PAGES/Top';
import '../Offers/Offers.css';

const OfferDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const ipdevice = '192.168.88.8';
  const [offer, setOffer] = useState(state?.offer || {});
  const [additionalDetails, setAdditionalDetails] = useState(null);
 
  return (
    <div>
      <Top />
      <br /> <br /> <br /> <br /> <br />
      <h1>{offer.description}</h1>
      <img src={offer.image} alt={offer.title} style={{ width: '400px', height: '400px' }} />
      <div>Price: {`${offer.price} ₪`}</div>
      <div>{`Has more than ${offer.numberOfPieces} products`}</div>
      <div>End Date: <span style={{ color: 'green' }}> {new Date(offer.endDate).toLocaleDateString()}</span></div>
      <div>End Time: {new Date(offer.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>

      {/* <div className="fading-images">
        {[...Array(offer.numberOfPieces)].map((_, index) => (
          <img
            key={index}
            src={offer.image}
            alt={`${offer.title} ${index + 1}`}
            className="fade-image"
          />
        ))}
      </div> */}


      // Rest of your component code...
<div className="fading-images">
  {offer.images && Array.isArray(offer.images) && offer.images.map((imageUrl, index) => (
    <img
      key={index}
      src={imageUrl}
      alt={`${offer.title} ${index + 1}`}
      className="fade-image"
      style={{width:'300px',height:'250px'}}
    />
  ))}
</div>




      {additionalDetails && (
        <div>
          <h2>Additional Details</h2>
          <p>{additionalDetails.moreInfo}</p>
        </div>
      )}
    </div>
  );
};

export default OfferDetails;
