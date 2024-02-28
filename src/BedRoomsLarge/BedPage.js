import { useParams, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { products } from './BedRoomsLarge.js';
import React, { useState } from 'react';

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

  // Function to change the main image
  const changeMainImage = (newImageUrl) => {
    setMainImageUrl(newImageUrl);
  };
  return (
    <>
      <p>This is the product page for product ID: {id}</p>
  
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          {/* Main image */}
          <img src={mainImageUrl} alt="Main Product"  style={{ width: '500px', height: '450px',display:'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Iterate over the smaller images */}
          {[product.img1, product.img2, product.img3, product.img4].map((img, index) => img && (
            <img
              key={index}
              src={img}
              alt={`Product Detail ${index + 1}`}
              style={{ cursor: 'pointer', width: '100px', height: '100px' }}
              onClick={() => changeMainImage(img)}
            />
          ))}
        </div>
      </div>
    <div style={{ position: 'absolute', top: '190px', left: '800px', width: '400px', height: '100%',overflow:'hidden',display:'none'}}>
        <Canvas>
          <ambientLight intensity={1.5} />
          <spotLight position={[0, 0, 0]} angle={0.3} intensity={1.5} />
          <Scene1Model modelPath={scene1Path} scale={2} />
          <OrbitControls />
        </Canvas>
      </div>

    </>
  );
};

export default BedPage;
