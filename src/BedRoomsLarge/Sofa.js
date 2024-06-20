

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




const Sofa = () => {

const ipdevice='192.168.88.6';

  const [product1,setProduct1]= useState([]);
  
  const [isSorted, setIsSorted] = useState(false); // Track if data is sorted

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
});


  const fetchProductData = () => {
    axios.post(`http://${ipdevice}:9000/viewkind`,{kind:"sofa"})
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
  navigate(`/products/${productId}`, { state: { product } });
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
    <div className="ProductPrice">{` ${product.count} sofa sets remain `}</div>
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

export default Sofa;