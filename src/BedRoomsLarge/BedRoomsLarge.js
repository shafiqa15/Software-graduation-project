

// export default BedRoomsLarge;
import React, { useState, useEffect } from 'react';
import '/Users/shafiqaabdat/Downloads/client-main/src/BedRoomsLarge/BedRoomsLarge.css';
import Top from '../PAGES/Top';
import bedFrameImage from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/firstbedimage.png';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';
import bed2 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/Screenshot 2024-02-28 at 22.05.01.png';
import bed3 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/Screenshot 2024-02-28 at 22.05.15.png';
import bed4 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/Screenshot 2024-02-28 at 22.05.24.png';
import bed1 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/Screenshot 2024-02-28 at 22.05.33.png';


import bed2coloreblue from '../images/bed1/Untitled-5.jpg';
import bed3coloreblue from '../images/bed1/Untitled-2.jpg';
import bed4coloreblue from '../images/bed1/Untitled-3.jpg';
import bed1coloreblue from '../images/bed1/Untitled-4.jpg';
import bed0coloreblue from '../images/bed1/Untitled.jpg';


import black1 from '../images/Screenshot 2024-02-27 at 15.44.00.png';
import black2 from '../images/Screenshot 2024-02-20 at 16.56.49.png';
import black3 from '../images/Screenshot 2024-02-20 at 15.13.32.png';
import black4 from '../images/Screenshot 2024-02-26 at 17.43.26.png';
import khzana from '../images/bed1/Screenshot 2024-03-02 at 16.41.28.png'

import folo from '../images/bed1/Screenshot_2024-03-02_at_02.23.41-removebg-preview.png'
import mirror from '../images/bed1/mirror.png'

import khazana2 from '../images/bed1/Screenshot 2024-03-02 at 16.38.24.png';
import khazana3 from '../images/bed1/Screenshot 2024-03-02 at 16.38.30.png';
import khazana4 from '../images/bed1/Screenshot 2024-03-02 at 16.41.13.png';
import folo2 from '../images/bed1/Screenshot_2024-03-03_at_04.04.33-removebg-preview.png';
import folo3 from '../images/bed1/426294832_1143236580341178_7319021772950498233_n-removebg-preview.png';

import comedena1 from '../images/bed1/Screenshot 2024-03-03 at 15.47.57.png';
import comedena2 from '../images/bed1/Screenshot 2024-03-03 at 15.53.23.png';
import comedena3 from '../images/bed1/Screenshot 2024-03-03 at 15.53.30.png';
import comedena4 from '../images/bed1/Screenshot 2024-03-03 at 15.53.38.png';


import mirror2 from '../images/bed1/Screenshot 2024-03-03 at 16.49.19.png';
import mirror3 from '../images/bed1/Screenshot 2024-03-03 at 16.49.49.png';
import mirror4 from '../images/bed1/Screenshot 2024-03-03 at 16.50.20.png';


const obj1 = '/SESSION_1709059176_2562448_mesh.gltf';
const obj2='/SESSION_1709322881_5313601_mesh.gltf'
const khzana_obj='/SESSION_1709322029_4794408_mesh.gltf';
const folowobj='/SESSION_1709431540_7920988_preview.gltf';
const comedenaobj ='/SESSION_1709473701_3541317_preview.gltf';
const mirrorobj='/SESSION_1709338570_8496202_preview.gltf';


// Combined products array
const products = [
  { id: 1, name: 'Bed Frame', price: 100,imageUrl: bedFrameImage,kind:"Imported manufacturing",obj:obj1 ,img1:bed2,img2:bed2,img3:bed1,img4:bed4,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",bed1black:black1,bed2black:black2,bed3black:black3,bed4black:black4,khzana:khzana,follow:folo ,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
  { id: 2, name: 'Mattress', price: 200 ,imageUrl: bedFrameImage,kind:"Local manufacturing " ,obj:obj1,img1:bed2,img2:bed2,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
  { id: 3, name: 'Duvet Cover', price: 50,imageUrl: bedFrameImage,kind:"Local manufacturing" ,obj:obj1,img1:bedFrameImage,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
  { id: 4, name: 'Pillow', price: 235 ,imageUrl: bedFrameImage,kind:"Imported manufacturing",obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
  { id: 5, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Imported manufacturing" ,obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
  { id: 6, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Local manufacturing" ,obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
  { id: 7, name: 'Pillow', price: 25,imageUrl: bedFrameImage ,kind:"Imported manufacturing" ,obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
  { id: 8, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Imported manufacturing",obj:obj1 ,img1:bed2,img2:bed2,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
  { id: 9, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Imported manufacturing" ,obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
  { id: 10, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Local manufacturing" ,obj:obj1,img1:bed2,img2:bed2,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
  { id: 11, name: 'Pillow', price: 25 ,imageUrl: bedFrameImage,kind:"Imported manufacturing",obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
  { id: 12, name: 'Pillow', price: 2445 ,imageUrl: bedFrameImage,kind:"Local manufacturing" ,obj:obj1,img1:bed2,img2:bed2,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj},
];
export { products };


// const imageUrl2 = query.get('imageUrl');

const BedRoomsLarge = () => {

  // Inside your BedRoomsLarge component

const navigate = useNavigate();

// Update your addToCart function or create a new function for navigation

const navigateToBedPage = (productId, imageUrl) => {
  const encodedImageUrl = encodeURIComponent(imageUrl);
  navigate(`/product/${productId}?imageUrl=${encodedImageUrl}`);
};

  const [cart, setCart] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('priceLowToHigh');
  const [sortedProducts, setSortedProducts] = useState(products);
  useEffect(() => {
    let sorted = [...sortedProducts];
    switch (sortCriteria) {
      case 'priceLowToHigh':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'Imported manufacturing':
        sorted.sort((a, b) => a.kind.localeCompare(b.kind) || a.name.localeCompare(b.name));
        break;
      case 'Local manufacturing':
        sorted.sort((a, b) => b.kind.localeCompare(a.kind) || a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    setSortedProducts(sorted);
  }, [sortCriteria]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Top />
      <div className="sora3">
        <div className="cont">
          <h1>Many categories of bedrooms!</h1>
          <span className='advanced-glow'>Trending product in {new Date().getFullYear()}</span>
        </div>
      </div>

      {/* <div className="Sidebar">
      <p> Sort by:</p>
        <button onClick={() => setSortCriteria('priceLowToHigh')}>Price Low to High</button>
        <button onClick={() => setSortCriteria('priceHighToLow')}>Price High to Low</button>

      </div> */}

<br></br>
      <div className="sorting-options">
        <select onChange={(e) => setSortCriteria(e.target.value)}>
        <option value="name">Sort by</option>
          <option value="priceLowToHigh">Price Low to High</option>
          <option value="priceHighToLow">Price High to Low</option>
          <option value="Imported manufacturing">Imported manufacturing</option>
          <option value="Local manufacturing">Local manufacturing</option>
         
        </select>
      </div>

      <div className="ProductList">
        {sortedProducts.map((product) => (
          <div className="ProductCard" key={product.id}>
            <img className="ProductImage" src={product.imageUrl} alt={product.name} />
            <div className="ProductName">{product.name}</div>
            <div className="ProductPrice">{` ${product.price} ₪`}</div>
            <div className="kind">{` ${product.kind} `}</div>
            {/* n<button className="AddToCartButton" onClick={() => addToCart(product)}>Details</button> */}
            <button className="AddToCartButton" onClick={() => navigateToBedPage(product.id, product.imageUrl)}>Details</button>
          </div>
        ))}
      </div>
      <br/>    <br/>    <br/>    <br/>
      <Footer></Footer>
    </div>



  );
};

export default BedRoomsLarge;
