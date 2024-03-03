import { useParams, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { products } from './BedRoomsLarge.js';
import React, { useState } from 'react';
import Top from '../PAGES/Top.js';
// import Imageslider  from '/Users/shafiqaabdat/Downloads/client-main/src/BedRoomsLarge/Imageslider.js';
import '/Users/shafiqaabdat/Downloads/client-main/src/BedRoomsLarge/bedpage.css';


import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MeshStandardMaterial } from 'three';


// Define the useQuery hook
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }


const BedPage = () => {
  const {id } = useParams();
  const query = useQuery();
  const imageUrl = query.get('imageUrl');
  const product = products.find(product => product.id.toString() === id);

  function Scene1Model({ modelPath, scale = 1 }) {
    const { scene } = useGLTF(modelPath);
    scene.scale.set(scale, scale, scale); // Apply uniform scaling
    return <primitive object={scene} />;
  }
  


  const scene1Path = '/SESSION_1709059176_2562448_preview-2.glb';
  const [mainImageUrl, setMainImageUrl] = useState(product?.imageUrl || product?.img1);
  const [mainImageUrl2, setMainImageUrl2] = useState(product?.upadte1 || product?.img1);
  const [mainImageUrlkhzana, setMainImageUrlkhzana] = useState(product?.khzana);
  const [mainImageUrlkfloow, setMainImageUrlkfolow] = useState(product?.follow2);
  const [mainImageUrlcomedena, setMainImageUrlcomedena] = useState(product?.comedena1);
  const [mainImageUrlmirror, setMainImageUrlmirror] = useState(product?.mirror);


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
    // Add your logic for handling circle button clicks
    console.log(`Clicked on Circle Button ${buttonNumber}`);

    setShowButton(!showButton);
    setShowFirstImages(!showFirstImages);
    setShowButton3(showButton3);

    
    // You can replace this with your specific logic
  };

  const handleCircleButtonClick2 = (buttonNumber) => {
    // Add your logic for handling circle button clicks
    console.log(`Clicked on Circle Button ${buttonNumber}`);

    setShowButton(!showButton);
    setShowFirstImages(!showFirstImages);
    setShowButton3(!showButton3);
   
    // You can replace this with your specific logic
  };

  const handleCircleButtonClick3 = (buttonNumber) => {
    // Add your logic for handling circle button clicks
    console.log(`Clicked on Circle Button ${buttonNumber}`);

    setShowButton(showButton);
    setShowFirstImages(!showFirstImages);
    setShowButton3(!showButton3);
    setShowButton4(!showButton4);
    // You can replace this with your specific logic
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






  // const IMAGES = [
  //   { url: product.bed1black, alt: "Car One" },
  //   { url: product.bed1black, alt: "Car Two" },
  //   { url: product.bed1black, alt: "Car Three" },
  //   { url: product.bed1black, alt: "Car Four" },
  //   { url: product.bed1black, alt: "Car Five" },
  // ]
  return (
    <>
    <Top></Top>
 

<p className='madimi-one-regular' style={{marginTop:'100px',fontWeight:'bold',fontSize:'30px',marginLeft:'200px'}}> One of the amazing {product.kind} in the website that has <span style={{color:'InfoText'}}>7 </span>peices </p>
    <div className='sora111' style={{   backgroundColor:'rgb(221, 215, 205)'

}}>
      <img style={{  marginLeft: '200px'}} className='photo' src={product.img1} alt="Photo 1" />

      <img className='photo' src={product.khzana} alt="Photo 2" />
      <img className='photo' src={product.comedena1} alt="Photo 3" />
      <img className='photo' src={product.mirror} alt="Photo 4" />
      <img className='photo' src={product.follow2} alt="Photo 5" />
    </div>

    <p className='madimi-one-regular' style={{ marginRight: '20px' }}>
    <span style={{ marginLeft: '300px' }}>1 Bed</span>
       <span style={{ marginLeft: '150px' }}>1 Wardrobe</span>
      <span style={{ marginLeft: '100px' }}>2 Bed Followings</span>
      <span style={{ marginLeft: '110px' }}> 1 Mirror</span>
      <span style={{ marginLeft: '140px' }}> 1 Comedena</span>
    </p> 

    {/* <Imageslider images={IMAGES} /> */}
      {/* <p>This is the product page for product ID: {product.name}</p> */}
 


     
      {showFirstImages && showButton3&&(

      <div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-550px'}}>
        <div className='main-image-container' style={{ marginRight: '20px' }}>
          {/* Main image */}
          <img  className='main-image'  src={mainImageUrl} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
        </div>
        <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Iterate over the smaller images */}
          {[product.img1, product.img2, product.img3, product.img4].map((img, index) => img && (
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
        <div className='product-display-container' style={{ display: 'flex', marginTop: '50px', marginLeft: '-550px' }}>
          <div className='main-image-container' style={{ marginRight: '20px' }}>
            <img className='main-image' src={mainImageUrl} alt='Main Product' style={{ width: '450px', height: '450px', display: 'block' }} />
          </div>
          <div className='small-images-container' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[product.upadte1, product.update2, product.upadte3, product.update4].map((img, index) =>
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
            {[product.bed1black, product.bed2black, product.bed3black, product.bed4black].map((img, index) =>
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


       -{product.kind} bed  which is manufactured on Palestine. <p style={{marginTop:'10px'}}>-The wood kind is {product.name}.</p>
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
          <p> width : 2000cm, hight: 2000cim,length:2000cm</p>
          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px'}}> U can see the 3d model of you chosen product to see all it's details .
</p>
        </div>
      </div>

      <button className="circle-button5" onClick={toggleCanvas}><p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'20px'}}> 3D</p> </button>

{showCanvas && (
        <div style={{ position: 'absolute', top: '300px', left: '900px', width: '500px', height: '100%' }}>
          <Canvas>
            <ambientLight intensity={1.5} />
            <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
            <Scene1Model modelPath={product.obj} scale={2} />
            <OrbitControls />
          </Canvas>
        </div>
      )}




      {showCanvas5 &&(
        <div style={{ position: 'absolute', top: '1300px', left: '900px', width: '500px', height: '100%' }}>
          <Canvas>
            <ambientLight intensity={1.5} />
            <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
            <Scene1Model modelPath={product.comedenaobj} scale={2} />
            <OrbitControls />
          </Canvas>
        </div>
      )}




{showCanvas3 && (
        <div style={{ position: 'absolute', top: '850px', left: '840px', width: '500px', height: '100%' }}>    <Canvas>
      <ambientLight intensity={1.5} />
      <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
      <Scene1Model modelPath={product.khzana_obj} scale={2} material={<meshStandardMaterial color="white" />} />
      <OrbitControls />
    </Canvas>
  </div>
)}


{showCanvas7 && (
        <div style={{ position: 'absolute', top: '1870px', left: '950px', width: '500px', height: '100%' }}>    <Canvas>
      <ambientLight intensity={1.5} />
      <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
      <Scene1Model modelPath={product.mirrorobj} scale={2} material={<meshStandardMaterial color="white" />} />
      <OrbitControls />
    </Canvas>
  </div>
)}






      {showCanvas2 && !showCanvas&&(
        <div style={{ position: 'absolute', top: '300px', left: '900px', width: '500px', height: '100%' }}>
          <Canvas>
            <ambientLight intensity={1.5} />
            <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
            <Scene1Model modelPath={product.objblue} scale={2} />
            <OrbitControls />
          </Canvas>
        </div>
      )}

  
    <br/>  <br/>  <br/>  <br/>  <br/>  <br/>

  
<div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-550px'}}>
  <div className='main-image-container' style={{ marginRight: '20px' }}>
    {/* Main image */}
    <img  className='main-image'  src={mainImageUrlkhzana} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
  </div>
  <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {/* Iterate over the smaller images */}
    {[product.khzana, product.Khzana2, product.khzana3, product.khzana4].map((img, index) => img && (
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
 <p style={{marginTop:'-450px',marginLeft:'800px'}}> -{product.kind} Wardrobe  which is manufactured on Palestine.</p>  <p style={{marginTop:'10px',marginLeft:'800px'}}>-The wood kind is {product.name}.</p>
       <p style={{marginTop:'-10px',marginLeft:'800px'}}>-Colors available:Only off-white.</p>
        <button className="circle-buttons6" onClick={() => {handleCircleButtonClick() }}></button>
          <div className="description" style={{marginTop:'210px',marginLeft:'800px'}}>
          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px'}}> U can see the 3d model of you chosen product to see all it's details .
          
</p>
       
      </div>      <button className="circle-button5" onClick={toggleCanvas22}><p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'20px'}}> 3D</p> </button>



<br/>  <br/>  <br/>  <br/>  <br/>  <br/>  

<div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-550px'}}>
  <div className='main-image-container' style={{ marginRight: '20px' }}>
    {/* Main image */}
    <img  className='main-image'  src={mainImageUrlcomedena} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
  </div>
  <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {/* Iterate over the smaller images */}
    {[product.comedena1, product.comedena2, product.comedena3, product.comedena4].map((img, index) => img && (
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



<p style={{marginTop:'-450px',marginLeft:'800px'}}> -{product.kind} Wardrobe  which is manufactured on Palestine.</p>  <p style={{marginTop:'10px',marginLeft:'800px'}}>-The wood kind is {product.name}.</p>
<p style={{marginLeft:'800px'}}>-2 peices.</p>
       <p style={{marginTop:'-10px',marginLeft:'800px'}}>-Colors available:Only off-white.</p>
 
    
        <button className="circle-buttons6" onClick={() => {handleCircleButtonClick() }}></button>
          <div className="description" style={{marginTop:'160px',marginLeft:'800px'}}>
          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px'}}> U can see the 3d model of you chosen product to see all it's details .
          
</p>
       
      </div>  
<button className="circle-buttons7" onClick={toggleCanvas5}><p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'20px'}}> 3D</p> </button>






<br/>  <br/>  <br/>  <br/>  <br/>  <br/> 


<div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-550px'}}>
  <div className='main-image-container' style={{ marginRight: '20px' }}>
    {/* Main image */}
    <img  className='main-image'  src={mainImageUrlmirror} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
  </div>
  <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {/* Iterate over the smaller images */}
    {[product.mirror, product.mirror2, product.mirror3, product.mirror4].map((img, index) => img && (
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

<p style={{marginTop:'-450px',marginLeft:'800px'}}> -{product.kind} Wardrobe  which is manufactured on Palestine.</p>  <p style={{marginTop:'10px',marginLeft:'800px'}}>-The wood kind is {product.name}.</p>

       <p style={{marginTop:'-10px',marginLeft:'800px'}}>-Colors available:</p>
 
    
        <button className="circle-buttons9999" onClick={() => {handleCircleButtonClick() }}></button>
          <div className="description" style={{marginTop:'230px',marginLeft:'800px'}}>
          <p style={{color:'red'}}>Pick the color you want to see the changes ! </p>
          <p style={{marginTop:'-20px'}}> U can see the 3d model of you chosen product to see all it's details .
          
</p>
       
      </div>  
<button className="circle-buttons8" onClick={toggleCanvas7}><p style={{fontFamily:'fantasy',fontWeight:'bold',color:'black',fontSize:'40px',marginTop:'20px'}}> 3D</p> </button>










<br/><br/><br/><br/><br/><br/>


<div className='product-display-container' style={{ display: 'flex', marginTop: '50px' ,marginLeft:'-550px'}}>
  <div className='main-image-container' style={{ marginRight: '20px' }}>
    {/* Main image */}
    <img  className='main-image'  src={mainImageUrlkfloow} alt="Main Product"  style={{ width: '450px', height: '450px',display:'block' }} />
  </div>
  <div className='"small-images-container"' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {/* Iterate over the smaller images */}
    {[product.follow, product.follow2, product.folo3, product.follow].map((img, index) => img && (
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


    {/* <div style={{ position: 'absolute', top: '390px', left: '800px', width: '400px', height: '100%'}}>
        <Canvas >
          <ambientLight intensity={1.5} />
          <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
          <Scene1Model modelPath={product.obj} scale={2} />
          <OrbitControls />
        </Canvas>
      </div> */}

    </>
  );
};

export default BedPage;
