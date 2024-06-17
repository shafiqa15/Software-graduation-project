import { useParams, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { products } from './BedRoomsLarge.js';
import React, { useState } from 'react';
import Top from '../PAGES/Top.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '/Users/shafiqaabdat/Downloads/client-main/src/BedRoomsLarge/bedpage.css';
import ReviewStars from './ReviewStars.js';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MeshStandardMaterial } from 'three';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext.js'; // Adjust the import path based on your file structure
import axios from 'axios';

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

const obj1 = '/SESSION_1709059176_2562448_mesh.gltf';
const obj2='/SESSION_1709322881_5313601_mesh.gltf';
const khzana_obj='/SESSION_1709322029_4794408_mesh.gltf';
const folowobj='/SESSION_1709431540_7920988_preview.gltf';
const comedenaobj ='/SESSION_1709473701_3541317_preview.gltf';
const mirrorobj='/SESSION_1709338570_8496202_preview.gltf';
const comedenaobj2='/shafiqa.gltf';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }


const BedPage = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Default to an empty object if state is undefined

  const navigate = useNavigate();



  const id=1;
  const query = useQuery();
  const imageUrl = query.get('imageUrl');
   const product1 = products.find(product1 => product1.id.toString() === id);

  function Scene1Model({ modelPath, scale = 1 }) {
    const { scene } = useGLTF(modelPath);
    scene.scale.set(scale, scale, scale); // Apply uniform scaling
    return <primitive object={scene} />;
  }
  

  const handleAddToCartClick = (product) => {
    console.log("Adding product:", product);  // Ensure this logs the correct product data
    addToCart({ ...product, quantity: 1 });
    
    navigate('/cart'); 
    
};



// const handleAddToCartClick = (product) => {

//   addToCart({ ...product, quantity: 1 });
//   navigate('/cart'); // Assuming '/cart' is your cart page's path
// };
// Test this inside your component or directly in your addToCart function
// useEffect(() => {
//   addToCart({ id: 1, name: "Test Product 1", price: 100, quantity: 1 });
//   addToCart({ id: 2, name: "Test Product 2", price: 200, quantity: 1 });
// }, []);





  const scene1Path = '/SESSION_1709059176_2562448_preview-2.glb';
  const [mainImageUrl, setMainImageUrl] = useState(bed2);
  const [mainImageUrl2, setMainImageUrl2] = useState(product?.upadte1 || product?.img1);
  const [mainImageUrlkhzana, setMainImageUrlkhzana] = useState(khazana2);
  const [mainImageUrlkfloow, setMainImageUrlkfolow] = useState(folo2);
  const [mainImageUrlcomedena, setMainImageUrlcomedena] = useState(comedena1);
  const [mainImageUrlmirror, setMainImageUrlmirror] = useState(mirror);




  
const { addToCart } = useCart(); // This is how you access addToCart now

const [userId, setUserId] = useState(''); // Assuming you get this from user session or context
const [cart, setCart] = useState(null);
const [error, setError] = useState('');
const ipdevice='192.168.88.11';


  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0); // To implement a hover effect, optional
const StarRating = ({ rating, interactive = true, onRatingChange }) => {





  const [product,setProduct]=useState([])
  useEffect( () => {
  
    axios.get('http://192.168.88.6:3001/viewAllProduct')
    .then(result=>{ setProduct(result.data.product)
      window.confirm(result.data);
    })
  
  
    .catch( e =>console.log(e));
  
},[])









//   axios.post(`http://${ipdevice}:9000/addToCart`)




  return (
    
    <div>



      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                onRatingChange(ratingValue); // Notify parent component
              }}
              style={{ display: 'none' }}
            />
            <span
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              style={{ cursor: 'pointer', color: ratingValue <= (hover || rating) ? 'yellow' : 'gray' }}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
};


   const [userRating, setUserRating] = useState(0); // Track the user's rating

   const handleReviewSubmit = (event) => {
    event.preventDefault();
    const newRating = userRating; // Assuming userRating is captured via state from StarRating component
    const reviewText = event.target.reviewText.value; // Capture review text from a form field if available

    // Update the reviews state with the new review
    setReviews([...reviews, { rating: newRating, text: reviewText }]);
    // Reset form and rating state if needed
};

  const [reviews, setReviews] = useState([]);
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length || 0;
  const numberOfReviews = reviews.length;
  



  

  // Function to change the main image
  const changeMainImage = (newImageUrl) => {
    setMainImageUrl(newImageUrl);
  };

  const changeMainImagekhzana = (newImageUrl) => {
    setMainImageUrlkhzana(newImageUrl);
  };

  const changeMainImagefoloow= (newImageUrl) => {
    setMainImageUrlkfolow(newImageUrl);
  };
  const changeMainImagecomedena= (newImageUrl) => {
    setMainImageUrlcomedena(newImageUrl);
  };


  const changeMainImagemirror= (newImageUrl) => {
    setMainImageUrlmirror(newImageUrl);
  };
  const navigateToDesignPage = (productId) => {
    // Assuming 'products' is accessible here and contains all your product data
    const productToPass = products.find(product1 => product1.id === productId);
    if (productToPass) {
      navigate('/design', { state: { product1: productToPass } });
    } else {
      console.error('Product not found');
      // Optionally, handle the case where the product is not found, such as showing a user notification
    }
  };
  
  


  const handleButtonClick = () => {
    setShowButton(!showButton);
    setShowFirstImages(!showFirstImages);
    setShowButton3(showButton3);

  };

  
  const [showFirstImages, setShowFirstImages] = useState(true);

  const [showButton, setShowButton] = useState(false);
  const [showButton3, setShowButton3] = useState(true);
  const [showButton4, setShowButton4] = useState(false);

  const handleCircleButtonClick = (buttonNumber) => {
    console.log(`Clicked on Circle Button ${buttonNumber}`);

    setShowButton(!showButton);
    setShowFirstImages(!showFirstImages);
    setShowButton3(showButton3);

    
  };


  const [showCanvas, setShowCanvas] = useState(false);

  const toggleCanvas = () => {
    setShowCanvas(!showCanvas);
    setShowCanvas2(showCanvas2);
  };
  const [showCanvas2, setShowCanvas2] = useState(false);

  const toggleCanvas2 = () => {
    setShowCanvas2(!showCanvas2);
    setShowCanvas(showCanvas);
  };

  const [showCanvas3, setShowCanvas3] = useState(false);
  const toggleCanvas22 = () => {
    setShowCanvas3(!showCanvas3);
    setShowCanvas2(showCanvas2);
    setShowCanvas(showCanvas);
  };

  const [showCanvas5, setShowCanvas5] = useState(false);

  const toggleCanvas5 = () => {
    setShowCanvas5(!showCanvas5);
    setShowCanvas(showCanvas);
  };


  const [showCanvas7, setShowCanvas7] = useState(false);

  const toggleCanvas7 = () => {
    setShowCanvas7(!showCanvas7);
    setShowCanvas(showCanvas);
  };

  const [showCanvas9, setShowCanvas9] = useState(false);

  const toggleCanvas9 = () => {
    setShowCanvas9(!showCanvas9);
    setShowCanvas(showCanvas);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      // Update state with the selected file
      setSelectedImage(event.target.files[0]);
    }
  };
  


  const [quantity, setQuantity] = useState(1); // Default to 1, assuming users want at least one item

  
  const navigateToDetailingPage = () => {
    navigate('/detailing', { state: { product } });
  };

  return (
    <>
    <Top></Top>

  

    <div className="main-container_beds">


<p className='madimi-one-regular' style={{marginTop:'100px',fontWeight:'bold',fontSize:'30px',marginLeft:'40px'}}> One of the amazing {product.type} manufactured in the website that has <span style={{color:'InfoText'}}>{product.numberPieces} </span>peices </p>
<div style={{marginLeft: '1100px', marginTop: '20px', display: 'block', width: '150px'}}>
  <p>{product.count} rooms remain</p>
  <input
    type="number"
    value={quantity}
    onChange={(e) => setQuantity(Math.max(1, Math.min(e.target.value, product.count)))} // Ensure the value is between 1 and the maximum available
    min="1"
    max={product.count}
    className="quantity-input"
    style={{width: '100%', marginBottom: '10px'}}
  />
  

  <br/>  
  
  <button className='madimi-one-regular buttoncart' onClick={() => handleAddToCartClick({ ...product, quantity })} style={{ width: '100%' }}>
  <FontAwesomeIcon icon={faShoppingCart}/> Add to Cart
</button>
{/* <button onClick={() => handleAddToCartClick(product)}>Add to Cart</button> */}

    {/* <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => handleAddToCartClick(product)}>Add to Cart</button>
        </div>
      ))}
    </div> */}



  <br/>  <br/>  <br/>  <br/><br/>  <br/><br/>  <br/>
</div>


    <div className='sora111' style={{   backgroundColor:'rgb(221, 215, 205)',marginTop:'-200px'}}>



      <img style={{  marginLeft: '10px'}} className='photo' src={bed2} alt="Photo 1" />

      <img className='photo' src={khzana} alt="Photo 2" />
      <img className='photo' src={comedena1} alt="Photo 3" />
      <img className='photo' src={mirror} alt="Photo 4" />
      <img className='photo' src={folo2} alt="Photo 5" />

    

    </div>




    <p className='madimi-one-regular' style={{ marginRight: '20px' }}>
    <span style={{ marginLeft: '50px' }}>1 Bed</span>
       <span style={{ marginLeft: '150px' }}>1 Wardrobe</span>
      <span style={{ marginLeft: '100px' }}>2 Nightstands</span>
      <span style={{ marginLeft: '130px' }}> 1 Mirror</span>
      <span style={{ marginLeft: '100px' }}> 1 bed following</span>
    </p> 
    
      



      {showFirstImages && showButton3&&(

      <div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-400px'}}>
      
        <div className='main-image-container' style={{ marginRight: '20px' }}>
          {/* Main image */}
          <img  className='main-image'  src={mainImageUrl} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
        </div>
        <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Iterate over the smaller images */}
          {[bed1, bed2, bed3, bed4].map((img, index) => img && (
            <img
            className="img-zoom"
              key={index}
              src={img}
              alt={`Product Detail ${index + 1}`}
              style={{ cursor: 'pointer', width: '100px', height: '100px' }}
              onClick={() => changeMainImage(img)}
            />
          ))}
        </div>
        
      </div>
      
      )}
  


      {showButton && (
        <div className='product-display-container' style={{ display: 'flex', marginTop: '50px', marginLeft: '-400px' }}>
          <div className='main-image-container' style={{ marginRight: '20px' }}>
            <img className='main-image' src={mainImageUrl} alt='Main Product' style={{ width: '450px', height: '450px', display: 'block' }} />
          </div>
          <div className='small-images-container' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[bed0coloreblue,bed1coloreblue, bed2coloreblue, bed4coloreblue].map((img, index) =>
              img && (
                <img
                  className='img-zoom'
                  key={index}
                  src={img}
                  alt={`Product Detail ${index + 1}`}
                  style={{ cursor: 'pointer', width: '100px', height: '100px' }}
                  onClick={() => changeMainImage(img)}
                />
              )
            )}
          </div>
        </div>
      )}



      {showButton4 && (
        <div className='product-display-container' style={{ display: 'flex', marginTop: '50px', marginLeft: '-550px' }}>
          <div className='main-image-container' style={{ marginRight: '20px' }}>
            <img className='main-image' src={mainImageUrl} alt='Main Product' style={{ width: '450px', height: '450px', display: 'block' }} />
          </div>
          <div className='small-images-container' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[black1, black2,black3, black4].map((img, index) =>
              img && (
                <img
                  className='img-zoom'
                  key={index}
                  src={img}
                  alt={`Product Detail ${index + 1}`}
                  style={{ cursor: 'pointer', width: '100px', height: '100px' }}
                  onClick={() => changeMainImage(img)}
                />
              )
            )}
          </div>

        </div>

      )}
      <p style={{marginTop:'-20px',color:'red'}}> Click on the images on the right to  see more Details.</p>


   {/* Right side content */}
   <div className="right-side-content" style={{marginTop:'-500px'}}>
        {/* Circle buttons */}


       <p>-{product.type} bed  which is manufactured on Palestine.</p>  <p style={{marginTop:'10px'}}>-The wood kind is snopar{product.wood_kind}.</p>
       <p>-Colors available:Dark blue,brown and black.</p>
       
       <button className="circle-button" onClick={(e) => { handleButtonClick(); toggleCanvas2(); }}>
  {/* Your button content here */}
</button>

<span> Dark Blue</span>
        <div >
          {[1].map((buttonNumber) => (
            
            <div >
              {/* You can customize the circle button's appearance and behavior */}
              <button className="circle-buttons" onClick={(e) => {handleCircleButtonClick(buttonNumber);toggleCanvas(); }}></button>
             <span>   Dark Brown</span>
              <button className="circle-buttons3" onClick={() => handleCircleButtonClick(buttonNumber)}></button>
              <span>  Black</span>
            </div>
            
          ))}
        </div>


        {/* Description */}

        <div className="description">
        
          {/* Add your description content here */}
          <p> width : 2000cm, hight: 2000cm,length:2000cm</p>
          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px',fontSize:'14px'}}> U can see the 3d model of you chosen product to see all it's details .
</p>
        </div>
      </div>

      <button className="circle-button5" onClick={toggleCanvas}><p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'20px'}}> 3D</p> </button>

{showCanvas && (
        <div style={{ position: 'absolute', top: '450px', left: '800px', width: '500px', height: '100%' }}>
          <Canvas>
            <ambientLight intensity={1.5} />
            <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
            <Scene1Model modelPath={obj1} scale={4} />
            <OrbitControls />
          </Canvas>
        </div>
      )}

 



      {showCanvas5 &&(
        <div style={{ position: 'absolute', top: '1500px', left: '700px', width: '500px', height: '100%' }}>
          <Canvas>
            <ambientLight intensity={1.5} />
            <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
            <Scene1Model modelPath={comedenaobj} scale={4} />
            <OrbitControls />
          </Canvas>
        </div>
      )}



      {showCanvas9&&(
        <div style={{ position: 'absolute', top: '2550px', left: '800px', width: '500px', height: '100%' }}>
          <Canvas>
            <ambientLight intensity={1.5} />
            <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
            <Scene1Model modelPath={folowobj} scale={4.4} />
            <OrbitControls />
          </Canvas>
        </div>
      )}




{showCanvas3 && (
        <div style={{ position: 'absolute', top: '1000px', left: '700px', width: '500px', height: '100%' }}>    <Canvas>
      <ambientLight intensity={1.5} />
      <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
      <Scene1Model modelPath={khzana_obj} scale={4} material={<meshStandardMaterial color="white" />} />
      <OrbitControls />
    </Canvas>
  </div>
)}


{showCanvas7 && (
        <div style={{ position: 'absolute', top: '2000px', left: '800px', width: '500px', height: '100%' }}>    <Canvas>
      <ambientLight intensity={1.5} />
      <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
      <Scene1Model modelPath={mirrorobj} scale={4.3} material={<meshStandardMaterial color="white" />} />
      <OrbitControls />
    </Canvas>
  </div>
)}






      {showCanvas2 && !showCanvas&&(
        <div style={{ position: 'absolute', top: '450px', left: '800px', width: '500px', height: '100%' }}>
          <Canvas>
            <ambientLight intensity={1.5} />
            <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
            <Scene1Model modelPath={obj2} scale={4} />
            <OrbitControls />
          </Canvas>
        </div>
      )}

  
    <br/>  <br/>  <br/>  <br/>  <br/>  <br/>

  
<div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-400px'}}>
  <div className='main-image-container' style={{ marginRight: '20px' }}>
    {/* Main image */}
    <img  className='main-image'  src={mainImageUrlkhzana} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
  </div>
  <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {/* Iterate over the smaller images */}
    {[khzana,khazana2 ,khazana3, khazana4].map((img, index) => img && (
      <img
      className="img-zoom"
        key={index}
        src={img}
        alt={`Product Detail ${index + 1}`}
        style={{ cursor: 'pointer', width: '100px', height: '100px' }}
        onClick={() => changeMainImagekhzana(img)}
      />
    ))}
  </div>
</div>
 <p style={{marginTop:'-450px',marginLeft:'700px'}}> -{product.type} Wardrobe  which is manufactured on Palestine.</p>  <p style={{marginTop:'10px',marginLeft:'700px'}}>-The wood kind is snopar{product.wood_kind}.</p>
       <p style={{marginTop:'-10px',marginLeft:'700px'}}>-Colors available:Only off-white.</p>
        <button className="circle-buttons6" onClick={() => {handleCircleButtonClick() }}></button>
          <div className="description" style={{marginTop:'170px',marginLeft:'700px'}}>
          <p> width : 2000cm, hight: 2000cim,length:2000cm</p>

          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px',fontSize:'14px'}}> U can see the 3d model of you chosen product to see all it's details .
          
</p>
       
      </div>      <button className="circle-button5" onClick={toggleCanvas22}><p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'20px'}}> 3D</p> </button>



<br/>  <br/>  <br/>  <br/>  <br/>  <br/>  

<div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-400px'}}>
  <div className='main-image-container' style={{ marginRight: '20px' }}>
    {/* Main image */}
    <img  className='main-image'  src={mainImageUrlcomedena} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
  </div>
  <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {/* Iterate over the smaller images */}
    {[comedena1, comedena2, comedena3, comedena4].map((img, index) => img && (
      <img
      className="img-zoom"
        key={index}
        src={img}
        alt={`Product Detail ${index + 1}`}
        style={{ cursor: 'pointer', width: '100px', height: '100px' }}
        onClick={() => changeMainImagecomedena(img)}
      />
    ))}
  </div>
</div>



<p style={{marginTop:'-450px',marginLeft:'700px'}}> -{product.type} Wardrobe  which is manufactured on Palestine.</p>  <p style={{marginTop:'10px',marginLeft:'700px'}}>-The wood kind is snopar{product.wood_kind}.</p>
<p style={{marginLeft:'700px'}}>-2 peices.</p>
       <p style={{marginTop:'-10px',marginLeft:'700px'}}>-Colors available:Only off-white.</p>
 
    
        <button className="circle-buttons6" onClick={() => {handleCircleButtonClick() }}></button>
          <div className="description" style={{marginTop:'130px',marginLeft:'700px'}}>
          <p> width : 2000cm, hight: 2000cim,length:2000cm</p>

          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px',fontSize:'14px'}}> U can see the 3d model of you chosen product to see all it's details .
          
</p>
       
      </div>  
<button className="circle-buttons7" onClick={toggleCanvas5}><p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'10px'}}> 3D</p> </button>






<br/>  <br/>  <br/>  <br/>  <br/>  <br/> 


<div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-400px'}}>
  <div className='main-image-container' style={{ marginRight: '20px' }}>
    {/* Main image */}
    <img  className='main-image'  src={mainImageUrlmirror} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
  </div>
  <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {/* Iterate over the smaller images */}
    {[mirror, mirror2,mirror3,mirror4].map((img, index) => img && (
      <img
      className="img-zoom"
        key={index}
        src={img}
        alt={`Product Detail ${index + 1}`}
        style={{ cursor: 'pointer', width: '100px', height: '100px' }}
        onClick={() => changeMainImagemirror(img)}
      />
    ))}
  </div>
</div>

<p style={{marginTop:'-450px',marginLeft:'700px'}}> -{product.type} Wardrobe  which is manufactured on Palestine.</p>  <p style={{marginTop:'10px',marginLeft:'700px'}}>-The wood kind is snopar {product.wood_kind}.</p>

       <p style={{marginTop:'-10px',marginLeft:'700px'}}>-Colors available:</p>
 
    
        <button className="circle-buttons9999" onClick={() => {handleCircleButtonClick() }}></button>
          <div className="description" style={{marginTop:'180px',marginLeft:'700px'}}>
          <p> width : 2000cm, hight: 2000cim,length:2000cm</p>

          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px',fontSize:'14px'}}> U can see the 3d model of you chosen product to see all it's details .
          
</p>
       
      </div>  
<button className="circle-buttons8" onClick={toggleCanvas7}><p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'20px'}}> 3D</p> </button>










<br/><br/><br/><br/><br/><br/>


<div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-400px'}}>
  <div className='main-image-container' style={{ marginRight: '20px' }}>
    {/* Main image */}
    <img  className='main-image'  src={mainImageUrlkfloow} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
  </div>
  <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {/* Iterate over the smaller images */}
    {[folo2, folo, folo3,folo2].map((img, index) => img && (
      <img
      className="img-zoom"
        key={index}
        src={img}
        alt={`Product Detail ${index + 1}`}
        style={{ cursor: 'pointer', width: '100px', height: '100px' }}
        onClick={() => changeMainImagefoloow(img)}
      />
    ))}
  </div>
</div>
 <p style={{marginTop:'-450px',marginLeft:'700px'}}> -{product.kind} bed following  which is manufactured on Palestine.</p>  <p style={{marginTop:'10px',marginLeft:'700px'}}>-The wood kind is snopar{product.wood_kind}.</p>
       <p style={{marginTop:'-10px',marginLeft:'700px'}}>-Colors available:Only off-white.</p>
        <button className="circle-buttons6" onClick={() => {handleCircleButtonClick() }}></button>
          <div className="description" style={{marginTop:'170px',marginLeft:'700px'}}>
          <p> width : 2000cm, hight: 2000cim,length:2000cm</p>

          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px',fontSize:'14px'}}> U can see the 3d model of you chosen product to see all it's details .
          
</p>
       
      </div>  


<button className="circle-buttons9" onClick={toggleCanvas9}><p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'20px'}}> 3D</p> </button>






<br/><br/><br/><br/><br/><br/><br/><br/><br/>
    {/* <div style={{ position: 'absolute', top: '390px', left: '800px', width: '400px', height: '100%'}}>
        <Canvas >
          <ambientLight intensity={1.5} />
          <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
          <Scene1Model modelPath={product.obj} scale={2} />
          <OrbitControls />
        </Canvas>
      </div> */}
 



      <form onSubmit={handleReviewSubmit} style={{marginLeft:'1100px' ,width:'200px',marginTop:'-3100px'}}>
      <p className='animated-text_bed madimi-one-regular ' style={{marginLeft:'10px'}}> Price is {product.price}₪ </p>
 
        <StarRating onRatingChange={(rating) => setUserRating(rating)} />

        <label htmlFor="reviewImage" className='madimi-one-regular'>Upload Image:</label>
        <input type="file" id="reviewImage" name="reviewImage" accept=".png" onChange={handleImageChange} className='madimi-one-regular' />
        <textarea name="reviewText" required className='madimi-one-regular' />
        <button type="submit" className='madimi-one-regular'>Submit Review</button>
        {reviews.map((review, index) => (
            <div key={index}>
                <StarRating rating={review.rating} />
                <p>username:{review.text}</p>
            </div>
        ))}
{/* Image preview */}
{selectedImage && (
  <div>
    <img src={URL.createObjectURL(selectedImage)} alt="Preview" style={{width: '100px', height: '100px'}} />
  </div>
)}

        
      </form>

    

      <button
  style={{marginLeft:'1100px', marginTop: '20px', display: 'block', width:'200px'}}
  className="AddToCartButton madimi-one-regular"
  onClick={() => navigateToDesignPage(1)}  // Pass '1' directly to the function
>
  Design This Bedroom
</button>
      <button style={{marginLeft:'1100px', marginTop: '20px', display: 'block',width:'200px'}} className="AddToCartButton madimi-one-regular" onClick={() => navigateToDetailingPage(product._id, product)}>Put it to detailing page</button>
      {/* <button className="AddToCartButton" onClick={() => navigateToBedPage(product._id, product)}>Details</button> */}

      {/* <button onClick={navigateToDetailingPage}>Go to Detailing Page</button> */}

      </div>
    </>
  );
};

export default BedPage;
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const BedPage = () => {
//   const location = useLocation();
//   const { product } = location.state || {}; // Default to an empty object if state is undefined

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <img src={product.image} alt={product.name} />
//       <p>Price: {product.price}</p>
//       <p>Description: {product.description}</p>
//       {/* Add more product details here */}
//     </div>
//   );
// };

// export default BedPage;
