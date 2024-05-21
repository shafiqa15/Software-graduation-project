import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Top from '../PAGES/Top';
import axios from 'axios';
import '../Offers/Offers.css';

const OfferPage = () => {
  const ipdevice = '192.168.88.11';
  const [product1, setProduct1] = useState([]);
  const [hoveringId, setHoveringId] = useState(null);
  const navigate = useNavigate();

  const fetchProductData = () => {
    axios.get(`http://${ipdevice}:9000/view`)
      .then(result => {
        setProduct1(result.data.offers);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleImageHover = (id) => {
    setHoveringId(id);
  };

  const handleDetailsClick = (offer) => {
    navigate(`/offer-details/${offer._id}`, { state: { offer } });
  };

  return (
    <div>
      <Top />
      <br /> <br /> <br /> <br /> <br />
      <h1>Cash Bblash Offers</h1>

      <div className="ProductContainer15">
        {product1 && product1.length > 0 && product1.map((product) => (
          <div className="ProductCard15" key={product._id} style={{ marginLeft: '30px', position: 'relative' }}>
            <img
              className="ProductImage15"
              src={product.image}
              alt={product.name}
              style={{ width: '400px', height: '400px', opacity: hoveringId === product._id ? 0.5 : 1 }}
              onMouseEnter={() => handleImageHover(product._id)}
 
            />
            {hoveringId === product._id && (
              <div className="ProductDetailsButton">
                <button onClick={() => handleDetailsClick(product)} className="CenteredButton">View Details 🔥</button>
              </div>
            )}
            <div className="ProductInfo15">
              <div className="ProductName15" style={{ width: '400px', fontWeight: 'bold', fontSize: '20px' }}>{product.title}</div>
              <div className="ProductPrice15">Price: {` ${product.price} ₪`}</div>
              <div className="ProductPrice15">{`Has more than ${product.numberOfPieces} products `}</div>
              <div className="ProductPrice15">End Date: <span style={{ color: 'green' }}> {new Date(product.endDate).toLocaleDateString()}</span></div>
              <div className="ProductPrice15">End Time: {new Date(product.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
