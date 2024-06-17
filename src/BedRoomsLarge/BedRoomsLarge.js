

// export default BedRoomsLarge;
import React, { useState, useEffect } from 'react';
import '/Users/shafiqaabdat/Downloads/client-main/src/BedRoomsLarge/BedRoomsLarge.css';
import Top from '../PAGES/Top';
import bedFrameImage from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/firstbedimage.png';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; 
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'; 

import { Link } from 'react-router-dom';


import bed2 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/Screenshot 2024-02-28 at 22.05.01.png';
import bed3 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/Screenshot 2024-02-28 at 22.05.15.png';
import bed4 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/Screenshot 2024-02-28 at 22.05.24.png';
import bed1 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/Screenshot 2024-02-28 at 22.05.33.png';
import room1 from '../images/decore/Screenshot 2024-03-26 at 00.09.43.png';
import room2 from '../images/decore/Screenshot 2024-03-26 at 00.09.11.png';
import room3 from '../images/decore/Screenshot 2024-03-26 at 00.02.13.png';
import room4 from '../images/decore/Screenshot 2024-03-26 at 00.01.53.png';
import room5 from '../images/decore/Screenshot 2024-03-25 at 23.57.27.png';
import room6 from '../images/decore/Screenshot 2024-03-25 at 23.57.04.png';
import room7 from '../images/decore/Screenshot 2024-03-25 at 23.56.52.png';
import room8 from '../images/decore/Screenshot 2024-03-25 at 23.56.26.png';
import room9 from '../images/decore/Screenshot 2024-03-26 at 04.37.25.png';
import room10 from '../images/decore/Screenshot 2024-03-26 at 04.36.20.png';
import room11 from '../images/decore/Screenshot 2024-03-26 at 04.39.30.png';


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
import axios from 'axios';

const obj1 = '/SESSION_1709059176_2562448_mesh.gltf';
const obj2='/SESSION_1709322881_5313601_mesh.gltf'
const khzana_obj='/SESSION_1709322029_4794408_mesh.gltf';
const folowobj='/SESSION_1709431540_7920988_preview.gltf';
const comedenaobj ='/SESSION_1709473701_3541317_preview.gltf';
const mirrorobj='/SESSION_1709338570_8496202_preview.gltf';
const comedenaobj2='/shafiqa.gltf';

const products = [
  { id: 1,available:5,number_of_pieces:5, name: 'Bed Frame', price: 1000,imageUrl: room2,kind:"Imported manufacturing",obj:obj1 ,img1:bed2,img2:bed2,img3:bed1,img4:bed4,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",bed1black:black1,bed2black:black2,bed3black:black3,bed4black:black4,khzana:khzana,follow:folo ,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,comedenaobj2:comedenaobj2,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,kindd:'bedroom',img1Dimensions: { width: 50, height: 20, depth: 10 },comedena1Dimensions:{ width: 50, height: 20, depth: 10 },mirrorDimensions:{ width: 50, height: 20, depth: 10 },khzanaDimensions:{ width: 50, height: 20, depth: 10 },foloDimensions:{ width: 50, height: 20, depth: 10 }},
  { id: 2,available:3, number_of_pieces:10,name: 'Mattress', price: 2000 ,imageUrl: room1,kind:"Local manufacturing " ,obj:obj1,img1:bed2,img2:bed2,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,comedenaobj2:comedenaobj2,kindd:'bedroom',img1Dimensions: { width: 50, height: 20, depth: 10 },comedena1Dimensions:{ width: 50, height: 20, depth: 10 },mirrorDimensions:{ width: 50, height: 20, depth: 10 },khzanaDimensions:{ width: 50, height: 20, depth: 10 },foloDimensions:{ width: 50, height: 20, depth: 10 }},
  { id: 3,available:4, number_of_pieces:7,name: 'Duvet Cover', price: 500,imageUrl: bedFrameImage,kind:"Local manufacturing" ,obj:obj1,img1:bedFrameImage,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,comedenaobj2:comedenaobj2,kindd:'bedroom',img1Dimensions: { width: 160, height: 190, depth: 50 },comedena1Dimensions:{ width: 100, height: 100, depth: 10 },mirrorDimensions:{ width: 100, height: 170, depth: 10 },khzanaDimensions:{ width: 220, height: 220, depth: 10 },foloDimensions:{ width: 200, height: 180, depth: 10 }},
  { id: 4,available:10,number_of_pieces:5, name: 'Pillow', price: 2300 ,imageUrl: room3,kind:"Imported manufacturing",obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,comedenaobj2:comedenaobj2,kindd:'bedroom',img1Dimensions: { width: 50, height: 20, depth: 10 },comedena1Dimensions:{ width: 50, height: 20, depth: 10 },mirrorDimensions:{ width: 50, height: 20, depth: 10 },khzanaDimensions:{ width: 50, height: 20, depth: 10 },foloDimensions:{ width: 50, height: 20, depth: 10 }},
  { id: 5,available:2, number_of_pieces:11,name: 'Pillow', price: 2500 ,imageUrl: room4,kind:"Imported manufacturing" ,obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,comedenaobj2:comedenaobj2,kindd:'bedroom',img1Dimensions: { width: 50, height: 20, depth: 10 },comedena1Dimensions:{ width: 50, height: 20, depth: 10 },mirrorDimensions:{ width: 50, height: 20, depth: 10 },khzanaDimensions:{ width: 50, height: 20, depth: 10 },foloDimensions:{ width: 50, height: 20, depth: 10 }},
  { id: 6,available:1,number_of_pieces:7, name: 'Pillow', price: 2500 ,imageUrl: room5,kind:"Local manufacturing" ,obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,comedenaobj2:comedenaobj2,kindd:'bedroom',img1Dimensions: { width: 50, height: 20, depth: 10 },comedena1Dimensions:{ width: 50, height: 20, depth: 10 },mirrorDimensions:{ width: 50, height: 20, depth: 10 },khzanaDimensions:{ width: 50, height: 20, depth: 10 },foloDimensions:{ width: 50, height: 20, depth: 10 }},
  { id: 7,available:3,number_of_pieces:8,name: 'Pillow', price: 2500,imageUrl: room6 ,kind:"Imported manufacturing" ,obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,comedenaobj2:comedenaobj2,kindd:'bedroom',img1Dimensions: { width: 50, height: 20, depth: 10 },comedena1Dimensions:{ width: 50, height: 20, depth: 10 },mirrorDimensions:{ width: 50, height: 20, depth: 10 },khzanaDimensions:{ width: 50, height: 20, depth: 10 },foloDimensions:{ width: 50, height: 20, depth: 10 }},
  { id: 8,available:4,number_of_pieces:6, name: 'Pillow', price: 2500 ,imageUrl: room7,kind:"Imported manufacturing",obj:obj1 ,img1:bed2,img2:bed2,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,comedenaobj2:comedenaobj2,kindd:'bedroom',img1Dimensions: { width: 50, height: 20, depth: 10 },comedena1Dimensions:{ width: 50, height: 20, depth: 10 },mirrorDimensions:{ width: 50, height: 20, depth: 10 },khzanaDimensions:{ width: 50, height: 20, depth: 10 },foloDimensions:{ width: 50, height: 20, depth: 10 }},
  { id: 9,available:7,number_of_pieces:7,name: 'Pillow', price: 2000 ,imageUrl: room8,kind:"Imported manufacturing" ,obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,comedenaobj2:comedenaobj2,kindd:'bedroom',img1Dimensions: { width: 50, height: 20, depth: 10 },comedena1Dimensions:{ width: 50, height: 20, depth: 10 },mirrorDimensions:{ width: 50, height: 20, depth: 10 },khzanaDimensions:{ width: 50, height: 20, depth: 10 },foloDimensions:{ width: 50, height: 20, depth: 10 }},
  { id: 10,available:8,number_of_pieces:8, name: 'Pillow', price: 2750 ,imageUrl: room9,kind:"Local manufacturing" ,obj:obj1,img1:bed2,img2:bed2,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,comedenaobj2:comedenaobj2,kindd:'bedroom',img1Dimensions: { width: 50, height: 20, depth: 10 },comedena1Dimensions:{ width: 50, height: 20, depth: 10 },mirrorDimensions:{ width: 50, height: 20, depth: 10 },khzanaDimensions:{ width: 50, height: 20, depth: 10 },foloDimensions:{ width: 50, height: 20, depth: 10 }},
  { id: 11,available:9,number_of_pieces:10,name: 'Pillow', price: 2750 ,imageUrl: room10,kind:"Imported manufacturing",obj:obj1,img1:bed2,img2:bedFrameImage,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,comedenaobj2:comedenaobj2,kindd:'bedroom',img1Dimensions: { width: 50, height: 20, depth: 10 },comedena1Dimensions:{ width: 50, height: 20, depth: 10 },mirrorDimensions:{ width: 50, height: 20, depth: 10 },khzanaDimensions:{ width: 50, height: 20, depth: 10 },foloDimensions:{ width: 50, height: 20, depth: 10 }},
  { id: 12,available:10, number_of_pieces:10,name: 'Pillow', price: 2450 ,imageUrl: room11,kind:"Local manufacturing" ,obj:obj1,img1:bed2,img2:bed2,img3:bed3,img4:bedFrameImage,upadte1:bed0coloreblue,update2:bed1coloreblue,upadte3:bed2coloreblue,update4:bed3coloreblue,update5:bed4coloreblue,color:"brown",khzana:khzana,follow:folo,mirror:mirror,objblue:obj2,khzana_obj:khzana_obj,Khzana2:khazana2,khzana3:khazana3,khzana4:khazana4,follow2:folo2,folowobj:folowobj,folo3:folo3,comedena1:comedena1,comedena2:comedena2,comedena3:comedena3,comedena4:comedena4,comedenaobj:comedenaobj,mirror2:mirror2,mirror3:mirror3,mirror4:mirror4,mirrorobj:mirrorobj,comedenaobj2:comedenaobj2,kindd:'bedroom',img1Dimensions: { width: 50, height: 20, depth: 10 },comedena1Dimensions:{ width: 50, height: 20, depth: 10 },mirrorDimensions:{ width: 50, height: 20, depth: 10 },khzanaDimensions:{ width: 50, height: 20, depth: 10 },foloDimensions:{ width: 50, height: 20, depth: 10 }},
];
export { products };


const BedRoomsLarge = () => {

const ipdevice='192.168.88.6';

  const [product1,setProduct1]= useState([]);
  
  const [isSorted, setIsSorted] = useState(false); // Track if data is sorted

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
});


  const fetchProductData = () => {
    axios.post(`http://${ipdevice}:9000/viewkind`,{kind:"bedroom"})
      .then(result => {
        setProduct1(result.data);


        
      })
      .catch(e => console.log(e));
  };


  const navigate = useNavigate();


  useEffect(() => {
    fetchProductData();
  }, []);



  const updateLikeFalse= (productId, likeStatus,index) =>{
 
    axios.put(`http://${ipdevice}:9000/updateLikeFalse/${productId}`)
    .then(result => { fetchProductData();
    
    })
    .catch( e =>console.log(e))
  }

  const updateLikeTrue= (productId, likeStatus,index) =>{
   
    axios.put(`http://${ipdevice}:9000/updateLikeTrue/${productId}`)
    .then(response => {fetchProductData();
   
    })
    .catch( e =>console.log(e))
  }



  const sorting_inc= () => {
    axios.get(`http://${ipdevice}:9000/viewAllProductsortINC`)
      .then(result => {
        setProduct1(result.data.product);
        setIsSorted(true);



   
      })
      .catch(e => console.log(e));
  };
 


  const sorting_dec= () => {
    axios.get(`http://${ipdevice}:9000/viewAllProductsortDEC`)
      .then(result => {
        setProduct1(result.data.product);
        setIsSorted(true); 



   
      })
      .catch(e => console.log(e));
  };



 const toggleFavorite = (product) => {
  const isFavorite = favorites.includes(product._id);
  const updatedFavorites = isFavorite
    ? favorites.filter(id => id !== product._id) 
    : [...favorites, product._id]; 

  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  setFavorites(updatedFavorites);

  if (isFavorite) {
    updateLikeFalse(product._id);
  } else {
    updateLikeTrue(product._id);
  }
};


const navigateToBedPage = (productId, product) => {
  navigate(`/product/${productId}`, { state: { product } });
};




useEffect(() => {
  if (!isSorted) {
    const interval = setInterval(() => {
      fetchProductData();
    }, 50000);
    return () => clearInterval(interval);
  }
}, [isSorted]); 


  const handleSortChange = (e) => {
    const sortType = e.target.value;
    if (sortType === 'priceLowToHigh') {
      sorting_inc();
    } else if (sortType === 'priceHighToLow') {
      sorting_dec();
    } else {
      fetchProductData(); 
    }
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

     

<br></br>
      <div className="sorting-options">
 
      
          <select onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="priceLowToHigh">Price Low to High</option>
          <option value="priceHighToLow">Price High to Low</option>
     
          <option >Imported manufacturing</option>
          <option >Local manufacturing</option>
         
        </select>
      </div>

      <div className="ProductList">

        {product1.map((product) => (
          <div className="ProductCard" key={product._id} >
          {/* <div>{product._id}  </div> */}
  <img className="ProductImage" src={product.image} alt={product.name} />
  <div className="ProductInfo">
    <div className="ProductName" style={{width:'200px'}}>Name: {product.name}</div>
    <div className="ProductPrice">Price :{` ${product.price} ₪`}</div>
    <div className="ProductPrice">{` ${product.count} rooms remain `}</div>
    <div className="ProductPrice">{` ${product.numberPieces} pieces `}</div>
  </div>
  <div className="ProductFooter">
    {/* <div className="ProductKind">{product.kind}</div> */}
    <div className="ProductName" style={{width:'200px'}}>{product.type} manufacturing</div>


        <FontAwesomeIcon 
  color={favorites.includes(product._id) ? 'red' : 'black'}
  icon={favorites.includes(product._id) ? fasHeart : farHeart}
  className={`heart-icon ${favorites.includes(product._id) ? 'favorited' : ''}`}
  onClick={() => toggleFavorite(product)}
/>
{/* <Link to="/favorites">View Favorites</Link> */}


{/* <a to="/favorites">View Favorites</Link> */}

<button className="AddToCartButton" onClick={() => navigateToBedPage(product._id, product)}>Details</button>
  </div>
</div>










        ))}
      </div>
      <br/>    <br/>    <br/>    <br/>
      <Footer></Footer>
    </div>



  );
};

export default BedRoomsLarge;