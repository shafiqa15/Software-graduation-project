import React from "react";
// import bed1 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/firstbedimage.png';
import { motion } from "framer-motion"; 
import  '/Users/shafiqaabdat/Downloads/client-main/src/home/Trending/Trending.css';

import { Col } from "reactstrap";



const Trending = ({ image, productName, category, price }) => {
  return (
    <Col lg="3" md="6" sm="12">
      <div className="product__item">
        <div className="pro_img">
          <img src={image} alt={productName} />
        </div>
        <h3 className="pro_name">{productName}</h3>
        <span>{category}</span>
        <div className="pro_card">
          <span className="price">{price}</span>
          <div className="cart-icons">
            <i className="ri-add-line"></i>
            <i className="ri-subtract-line"></i>
          </div>
          <span className="add-to-cart">
            <i className="fas fa-shopping-cart"></i>
          </span>
        </div>
      </div>
    </Col>
  );
};

export default Trending;

