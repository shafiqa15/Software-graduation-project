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


import sofa_main1 from '../BedRoomsLarge/images_sofa/tempImageYAd6Le.png';
import sofa_main2 from '../BedRoomsLarge/images_sofa/tempImageWctYIc.png';
import sofa_main3 from '../BedRoomsLarge/images_sofa/tempImageQP52QY.png';
import sofa_main4 from '../BedRoomsLarge/images_sofa/tempImagetYC7a6.png';


import sofa0 from '../BedRoomsLarge/images_sofa/tempImageYAd6Le.png';
import sofa1 from '../BedRoomsLarge/images_sofa/tempImageQP52QY.png';
import sofa2 from '../BedRoomsLarge/images_sofa/segmented_image-2-2.png';
import sofa3 from '../BedRoomsLarge/images_sofa/segmented_image-3-2.png';
import sofa4 from '../BedRoomsLarge/images_sofa/segmented_image-5.png';


import kind3_0 from '../BedRoomsLarge/images_sofa/tempImageRpprGy.png';
import kind3_1 from '../BedRoomsLarge/images_sofa/kind1.png';
import kind3_2 from '../BedRoomsLarge/images_sofa/tempImage2DuuEt.png';



import kind2_0 from '../BedRoomsLarge/images_sofa/Screenshot_2024-06-19_at_18.58.37-removebg-preview.png';
import kind2_1 from '../BedRoomsLarge/images_sofa/Screenshot_2024-06-19_at_19.00.21-removebg-preview.png';
import kind2_2 from '../BedRoomsLarge/images_sofa/Screenshot 2024-06-19 at 19.03.00.png';

import kind1_2 from '../BedRoomsLarge/images_sofa/Screenshot 2024-06-19 at 18.50.43.png';
import kind1_1 from '../BedRoomsLarge/images_sofa/tempImageCBvl2E-removebg-preview.png';
import kind1_0 from '../BedRoomsLarge/images_sofa/tempImagetYC7a6.png';





import mirror from '../images/bed1/mirror.png'

import comedena1 from '../images/bed1/Screenshot 2024-03-03 at 15.47.57.png';
import comedena2 from '../images/bed1/Screenshot 2024-03-03 at 15.53.23.png';
import comedena3 from '../images/bed1/Screenshot 2024-03-03 at 15.53.30.png';
import comedena4 from '../images/bed1/Screenshot 2024-03-03 at 15.53.38.png';


import mirror2 from '../images/bed1/Screenshot 2024-03-03 at 16.49.19.png';
import mirror3 from '../images/bed1/Screenshot 2024-03-03 at 16.49.49.png';
import mirror4 from '../images/bed1/Screenshot 2024-03-03 at 16.50.20.png';

const obj2='/SESSION_1709322881_5313601_mesh.gltf';
const folowobj='/SESSION_1714244406_4855505_preview.gltf';
const comedenaobj ='/SESSION_1709473701_3541317_preview.gltf';



const sof1_obj='/SESSION_1713821750_4971628_preview-4.gltf';
const sof2_obj='/SESSION_1714244406_4855505_preview.gltf';
const sof3_obj='/SESSION_1713818309_5562008_preview-2.gltf';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }


const Sofabed = () => {
  const location = useLocation();
  const { product } = location.state || {}; 
  const navigate = useNavigate();

  const id=1;
  const query = useQuery();


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





  const scene1Path = '/SESSION_1709059176_2562448_preview-2.glb';
  const [mainImageUrl, setMainImageUrl] = useState(sofa_main2);
  const [mainImageUrl2, setMainImageUrl2] = useState(product?.upadte1 || product?.img1);
  const [mainImageUrlkhzana, setMainImageUrlkhzana] = useState(sofa1);
  const [mainImageUrlkfloow, setMainImageUrlkfolow] = useState(sofa2);
  const [mainImageUrlcomedena, setMainImageUrlcomedena] = useState(sofa3);
  const [mainImageUrlmirror, setMainImageUrlmirror] = useState(sofa4);




  
const { addToCart } = useCart(); // This is how you access addToCart now

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






  return (
    
    <div style={{marginTop:'80px'}}>
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
                onRatingChange(ratingValue);
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
   const [userRating, setUserRating] = useState(0); 
   const handleReviewSubmit = (event) => {
    event.preventDefault();
    const newRating = userRating; 
    const reviewText = event.target.reviewText.value;
    setReviews([...reviews, { rating: newRating, text: reviewText }]);
    
};

  const [reviews, setReviews] = useState([]);

  const changeMainImage = (newImageUrl) => {
    setMainImageUrl(newImageUrl);
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
    const productToPass = products.find(product1 => product1.id === productId);
    if (productToPass) {
      navigate('/design', { state: { product1: productToPass } });
    } else {
      console.error('Product not found');
    }
  };
  


  const handleButtonClick = () => {
    setShowButton(!showButton);
    setShowFirstImages(!showFirstImages);
    setShowButton3(showButton3);

  };

  function Model({ url }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
  }
  const [showFirstImages, setShowFirstImages] = useState(true);

  const [showButton, setShowButton] = useState(false);
  const [showButton3, setShowButton3] = useState(true);

  const handleCircleButtonClick = (buttonNumber) => {
    console.log(`Clicked on Circle Button ${buttonNumber}`);

    setShowButton(!showButton);
    setShowFirstImages(!showFirstImages);
    setShowButton3(showButton3);

    
  };


  const [showCanvas, setShowCanvas] = useState(false);


  const [showCanvas2, setShowCanvas2] = useState(false);



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
      setSelectedImage(event.target.files[0]);
    }
  };
  


  const [quantity, setQuantity] = useState(1); 

  
  const navigateToDetailingPage = () => {
    navigate('/detailing', { state: { product } });
  };

  return (
    <>
    <Top></Top>

  

    <div className="main-container_beds">


<p className='madimi-one-regular' style={{marginTop:'1100px',fontWeight:'bold',fontSize:'27px',marginLeft:'40px'}}> One of the amazing {product.type} manufactured {product.kind} in the website that has <span style={{color:'InfoText'}}>{product.numberPieces} </span>peices🤩 </p>
<div style={{marginLeft: '1080px', marginTop: '-50px', display: 'block', width: '200px'}}>
  {/* <p>{product.count} Sofa sets remain</p> */}

  

  <br/>  
  
  <button className='madimi-one-regular buttoncart' onClick={() => handleAddToCartClick({ ...product, quantity })} style={{ width: '100%'}}>
  <FontAwesomeIcon icon={faShoppingCart}/> Add to Cart
</button>



  <br/>  <br/>  <br/>  <br/><br/>  <br/><br/>  <br/>
</div>


    <div className='sora111' style={{   backgroundColor:'rgb(221, 215, 205)',marginTop:'-200px'}}>



      <img style={{  marginLeft: '10px'}} className='photo' src={sofa0} alt="Photo 1" />

      <img className='photo' src={sofa1} alt="Photo 2" />
      <img className='photo' src={sofa2} alt="Photo 3" />
      <img className='photo' src={sofa3} alt="Photo 4" />
      <img className='photo' src={sofa4} alt="Photo 5" />

    

    </div>




    <p className='madimi-one-regular' style={{ marginRight: '20px' }}>

      <span style={{ marginLeft: '500px' }}>first piece</span>
      <span style={{ marginLeft: '100px' }}> second piece</span>
      <span style={{ marginLeft: '100px' }}> third piece </span>
    </p> 
    
      



      {showFirstImages && showButton3&&(
      <div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-300px'}}>
        <div className='main-image-container' style={{ marginRight: '20px' }}>
          <img  className='main-image'  src={mainImageUrl} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
        </div>
        <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[sofa_main1, sofa_main2, sofa_main3, sofa_main4].map((img, index) => img && (
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
  

   <div className="right-side-content" style={{marginTop:'-500px'}}>
       <p>-{product.type} {product.kind} set which is manufactured on Palestine.</p>  <p style={{marginTop:'10px'}}>-The wood kind is sandwich{product.wood_kind}.</p>
       <p>-Colors available: Dark Blue.</p>
       
       <button className="circle-button" >
       <span style={{marginTop:'-2px',marginLeft:'150px',width:'300px'}}> Dark Blue</span>
</button>


        



        <div className="description">
          <p>Description :</p>
          <p> width : 2000cm </p> 
          <p>hight: 2000cm</p>
          <p>length:2000cm</p>
          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px',fontSize:'14px'}}> U can see the 3d model of you chosen product to see all it's details .
</p>
        </div>
      </div>


{showCanvas7 && (
        <div style={{ position: 'absolute', top: '-500px', left: '800px', width: '500px', height: '100%' }}>
          <Canvas>
            <ambientLight intensity={1.5} />
            <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
            <Scene1Model modelPath={sof2_obj} scale={4} />
            <OrbitControls />
          </Canvas>
        </div>
      )}

 



      {showCanvas5 &&(
        <div style={{ position: 'absolute', top: '1200px', left: '700px', width: '500px', height: '100%' }}>
          <Canvas>
            <ambientLight intensity={2} />
            <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
            <Scene1Model modelPath={sof1_obj} scale={4} />
            <OrbitControls />
          </Canvas>
        </div>
      )}



      {showCanvas9&&(
        <div style={{ position: 'absolute', top: '2550px', left: '800px', width: '500px', height: '100%' }}>
          <Canvas>
            <ambientLight intensity={2} />
            <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
            <Scene1Model modelPath={sof3_obj} scale={4.4} />
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

  
    <br/> 




<br/>  

<div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-400px'}}>
  <div className='main-image-container' style={{ marginRight: '20px' }}>
    <img  className='main-image'  src={mainImageUrlcomedena} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
  </div>
  <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {[sofa3, kind1_1, kind1_0, kind1_2].map((img, index) => img && (
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


<p style={{marginTop:'-450px',marginLeft:'700px'}}> </p> 
    
          <div className="description" style={{marginTop:'20px',marginLeft:'700px'}}>
          <p>Description :</p>
          <p> width : 2000cm </p> 
          <p>hight: 2000cm</p>
          <p>length:2000cm</p>

          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px',fontSize:'14px'}}> U can see the 3d model of you chosen product to see all it's details .
          
</p>
       
      </div>  
<button className="circle-buttons7" onClick={toggleCanvas5}><p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'10px'}}> 3D</p> </button>


{showCanvas && (
          <Canvas style={{ height: '500px', width: '100%' }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Model url={sof1_obj} />
            <OrbitControls />
          </Canvas>
        )}



<br/>  <br/>  <br/>  <br/>  <br/>  <br/> 
<br/>  <br/>  <br/>  <br/>  <br/>  <br/> <br/>  <br/>  <br/>  <br/>  <br/>  <br/> 


<div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-400px'}}>
  <div className='main-image-container' style={{ marginRight: '20px' }}>
    {/* Main image */}
    <img  className='main-image'  src={mainImageUrlmirror} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
  </div>
  <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {/* Iterate over the smaller images */}
    {[sofa4, kind2_0,kind2_1,kind2_2].map((img, index) => img && (
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

<p style={{marginTop:'-650px',marginLeft:'700px'}}></p> 
 
    
          <div className="description" style={{marginTop:'180px',marginLeft:'700px'}}>
          <p>Description :</p>
          <p> width : 2000cm </p> 
          <p>hight: 2000cm</p>
          <p>length:2000cm</p>

          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px',fontSize:'14px'}}> U can see the 3d model of you chosen product to see all it's details .
          
</p>
       
      </div>  
<button className="circle-buttons8" onClick={toggleCanvas7} style={{marginLeft:'900px'}}>

<p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'20px',marginLeft:'10px'}}>
 3D 
</p>
 </button>










<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/>


<div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-400px'}}>
  <div className='main-image-container' style={{ marginRight: '20px' }}>
    {/* Main image */}
    <img  className='main-image'  src={mainImageUrlkfloow} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
  </div>
  <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {/* Iterate over the smaller images */}
    {[sofa2, kind3_0, kind3_1,kind3_2].map((img, index) => img && (
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
 <p style={{marginTop:'-650px',marginLeft:'700px'}}> </p>
          <div className="description" style={{marginTop:'170px',marginLeft:'700px'}}>
          <p>Description :</p>
          <p> width : 2000cm </p> 
          <p>hight: 2000cm</p>
          <p>length:2000cm</p>

          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px',fontSize:'14px'}}> U can see the 3d model of you chosen product to see all it's details .
          
</p>
       
      </div>  


<button className="circle-buttons9" onClick={toggleCanvas9}><p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'20px'}}> 3D</p> </button>






<br/><br/><br/><br/><br/><br/><br/><br/><br/>
 
  
 



      <form onSubmit={handleReviewSubmit} style={{marginLeft:'1070px' ,width:'200px',marginTop:'-3200px'}}>
      <p className='animated-text_bed madimi-one-regular ' style={{marginLeft:'10px',marginTop:'170px'}}> Price is {product.price}₪ </p>
 
        <StarRating onRatingChange={(rating) => setUserRating(rating)} />

        <label htmlFor="reviewImage" className='madimi-one-regular'>Upload Image:</label>
        <input type="file" id="reviewImage" name="reviewImage" accept=".png" onChange={handleImageChange} className='madimi-one-regular' />
        <textarea name="reviewText" required className='madimi-one-regular' />
        <button type="submit" className='madimi-one-regular'>Submit Review</button>
        {reviews.map((review, index) => (
            <div key={index}>
                <StarRating rating={review.rating} />
                <p>Shafiqa15:{review.text}</p>
            </div>
        ))}

{selectedImage && (
  <div>
    <img src={URL.createObjectURL(selectedImage)} alt="Preview" style={{width: '100px', height: '100px'}} />
  </div>
)}

        
      </form>

    

      <button
  style={{marginLeft:'1080px', marginTop: '20px', display: 'block', width:'200px'}}
  className="AddToCartButton madimi-one-regular"
  onClick={() => navigateToDesignPage(1)} 
>
  Design This Bedroom
</button>
      <button style={{marginLeft:'1080px', marginTop: '20px', display: 'block',width:'200px'}} className="AddToCartButton madimi-one-regular" onClick={() => navigateToDetailingPage(product._id, product)}>Put it to detailing page</button>

{/* <footer></footer> */}
      </div>
    </>
  );
};

export default Sofabed;
