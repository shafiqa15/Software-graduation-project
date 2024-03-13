import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '/Users/shafiqaabdat/Downloads/client-main/src/App.css';
import Home1 from './home/Home1.js';
import Slider from './slider/Slider.js';
import Footer from './footer/Footer.js';
import Design from './design/Design.js';
import SignUp from './signup/SignUp.js';
import Service from '/Users/shafiqaabdat/Downloads/client-main/src/services/Service.js';
import Trending from './home/Trending/Trending.js';
import ProductCard from './home/Trending/ProductCard.js';
import BedRoomsLarge from './BedRoomsLarge/BedRoomsLarge.js';
import ImageUpload from './IMAGE/ImageUpload.js';
import BedPage from './BedRoomsLarge/BedPage.js';
import Decore from './decore/Decore.js';
import Wardrobe from './decore/Wardrobe.js';
const App = () => {
  return (
    <Router> 
      <div>
        <Routes>    
          <Route index element={<Wardrobe/>}/>
          <Route path="/Home1" element={<Home1/>}/>
          <Route path="/Slider" element={<Slider/>}/> 
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Footer" element={<Footer/>}/>
          <Route path='/Design' element={<Design/>}/> 
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Trending' element={<Trending/>}/>
          <Route path='/ProductCard' element={<ProductCard/>}/>
          <Route path='/BedRoomsLarge' element={<BedRoomsLarge/>}/>
          <Route path='/ImageUpload' element={<ImageUpload/>}/>
          <Route path="/product/:id" element={<BedPage />} /> {/* Ensure this path matches */}
          <Route path="/bedpage/:id" element={<BedPage />} />
          <Route path="/Decore" element={<Decore/>} />
          {/* <Route path='/Mode' element={<Mode/>}/> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import React, { useState, useEffect, useRef } from 'react';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import * as THREE from 'three';
// import '/Users/shafiqaabdat/Downloads/client-main/src/App.css';

// import { startTransition } from 'react';



// // function VideoTexturePlane() {
// //   const videoRef = useRef();
// //   const [videoTexture, setVideoTexture] = useState();

// //   useEffect(() => {
// //     navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
// //       const video = videoRef.current;
// //       video.srcObject = stream;
// //       video.play();
// //       const texture = new VideoTexture(video);
// //       setVideoTexture(texture);
// //     });
// //   }, []);

// //   return videoTexture ? (
// //     <mesh>
// //       <planeBufferGeometry attach="geometry" args={[1.6, 0.9]} />
// //       <meshBasicMaterial attach="material" map={videoTexture} toneMapped={false} />
// //     </mesh>
// //   ) : null;
// // }



// function CameraController() {
//   const { camera, gl } = useThree();
//   useEffect(() => {
//     camera.position.set(0, 0, 5);
//     camera.fov = 75;
//     camera.updateProjectionMatrix();
//     gl.setSize(window.innerWidth, window.innerHeight);
//   }, [camera, gl]);
//   return null;
// }


// function GridBorder({ size = 100, height = 200, color = 'black' }) {
//   const points = [
//     new THREE.Vector3(-size / 2, 0, size / 2),
//     new THREE.Vector3(size / 2, 0, size / 2),
//     new THREE.Vector3(size / 2, 0, -size / 2),
//     new THREE.Vector3(-size / 2, 0, -size / 2),
//     new THREE.Vector3(-size / 2, 0, size / 2),
//   ];


//   const verticalLines = [
//     new THREE.Vector3(-size / 2, 0, size / 2),
//     new THREE.Vector3(-size / 2, height, size / 2),

//     new THREE.Vector3(size / 2, 0, size / 2),
//     new THREE.Vector3(size / 2, height, size / 2),

//     new THREE.Vector3(size / 2, 0, -size / 2),
//     new THREE.Vector3(size / 2, height, -size / 2),

//     new THREE.Vector3(-size / 2, 0, -size / 2),
//     new THREE.Vector3(-size / 2, height, -size / 2),
//   ];

//   const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
//   const verticalLineGeometry = new THREE.BufferGeometry().setFromPoints(verticalLines);
//   const lineMaterial = new THREE.LineBasicMaterial({ color });

//   return (
//     <>
//       <line geometry={lineGeometry} material={lineMaterial} />
//       <lineSegments geometry={verticalLineGeometry} material={lineMaterial} />
//     </>
//   );
// }


// // function Floor() {
// //   const texture = useLoader(THREE.TextureLoader, "/floor.jpeg"); // Ensure the path and file are correct
// //   texture.wrapS = THREE.RepeatWrapping;
// //   texture.wrapT = THREE.RepeatWrapping;
// //   texture.repeat.set(4, 4); 

// //   return (
// //     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0 ,0, 0]}> {/* Adjust position to match room */}
// //       <planeGeometry args={[10, 10]} /> {/* Adjust size to match room */}
// //       <meshStandardMaterial map={texture} />
// //     </mesh>
// //   );
// // }

// function Floor({ texturePath }) {
//   const texture = useLoader(THREE.TextureLoader, texturePath);
//   texture.wrapS = THREE.RepeatWrapping;
//   texture.wrapT = THREE.RepeatWrapping;
//   texture.repeat.set(4,4);

//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
//       <planeGeometry args={[10, 10]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// }



// function Model({ modelPath, position, rotation, scale }) {
//   const ref = useRef();
//   const gltf = useGLTF(modelPath);
//   useFrame(() => {
//     ref.current.position.set(...position);
//     ref.current.rotation.set(...rotation);
//     ref.current.scale.set(scale, scale, scale);
//   });
//   return <primitive ref={ref} object={gltf.scene} />;
// }


// function Helpers() {
//   return (
//     <>
    
//       <gridHelper args={[10, 10, 'white', 'white']} />
//       <GridBorder size={10} color={'black'} />
//       <axesHelper args={[30]} />
//     </>
//   );
// }

// function WindowModel({ modelPath, position, rotation, scale, visible }) {
//   const { scene } = useGLTF(modelPath, true);
//   if (!visible) return null;
//   return <primitive object={scene} position={position} rotation={rotation} scale={scale} />;
// }



// function App() {

//   const [activeObject, setActiveObject] = useState(null);
//   const [objects, setObjects] = useState({});
//   const [showHelpers, setShowHelpers] = useState(false);
//   const [floorTexturePath, setFloorTexturePath] = useState(); // Default texture path
//   const [showFloorUpload, setShowFloorUpload] = useState(false); // State to toggle floor upload pop-up
//   const [showWallUpload, setShowWallUpload] = useState(false);


  

  
  
//   const handleFloorUpload = event => {
//     const file = event.target.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setFloorTexturePath(url);
//       setShowFloorUpload(false); // Close the pop-up after setting the texture
//     }
//   };

//   const toggleFloorUpload = () => setShowFloorUpload(!showFloorUpload);


//   const handleWallUpload = event => {
//     const file = event.target.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       document.body.style.backgroundImage = `url(${url})`;
//       document.body.style.backgroundSize = 'cover'; // Cover the entire page
//       document.body.style.backgroundPosition = 'center'; // Center the background image
//       setShowWallUpload(false); // Hide the upload input after setting the background
//     }
//   };
  


//   const handleModelUpload = event => {
//     const file = event.target.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       const modelName = file.name.split('.')[0];
//       setObjects(prev => ({
//         ...prev,
//         [modelName]: { modelPath: url, position: [0, 0, 0], rotation: [0, 0, 0], scale: 1 },
//       }));
//       setActiveObject(modelName);
//     }
//   };

//   const updatePosition = (axis, distance) => {
//     if (!activeObject) return;
//     setObjects(prev => ({
//       ...prev,
//       [activeObject]: {
//         ...prev[activeObject],
//         position: prev[activeObject].position.map((value, index) => index === axis ? value + distance : value),
//       },
//     }));
//   };

//   const updateRotation = (axis, angle) => {
//     if (!activeObject) return;
//     setObjects(prev => ({
//       ...prev,
//       [activeObject]: {
//         ...prev[activeObject],
//         rotation: prev[activeObject].rotation.map((value, index) => index === axis ? value + angle : value),
//       },
//     }));
//   };

//   const handleChangeObject = event => {
//     setActiveObject(event.target.value);
//   };

//   const [showWindow, setShowWindow] = useState(false);

//   const videoRef = useRef(null);

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//       }
//     } catch (err) {
//       console.error("Error accessing the camera", err);
//     }
//   };

//   const deleteActiveObject = () => {
//     if (!activeObject) return;
//     setObjects(prev => {
//       const newState = { ...prev };
//       delete newState[activeObject];
//       return newState;
//     });
//     setActiveObject(null); // Optionally reset active object
//   };


//   const [windowModel, setWindowModel] = useState({
//      modelPath :process.env.PUBLIC_URL + '/Users/shafiqaabdat/Downloads/client-main/public/uploads-files-3101237-PM_Baked_Window.glb',
//     position: [0, 0, 0], // Default position, update as necessary
//     rotation: [0, 0, 0], // Default rotation, update as necessary
//     scale: 0.24, // Scale value
//     visible: false, // Window visibility
//   });
  
//   const addWindowModel = () => {
//     startTransition(() => {
//       setWindowModel(prev => ({
//         ...prev,
//         visible: true,
//       }));
//     });
//   };


//   return (
    
//     <div className="app-container">
//          {showFloorUpload && (
//         <div className="control-panel" style={{ position: 'absolute', top: '670px', left: '140px', zIndex: 100, background: 'white', padding: '20px' }}>
//           <input type="file" onChange={handleFloorUpload} accept=".jpg,.jpeg,.png"  />
//           <button onClick={() => setShowFloorUpload(false)}>Cancel</button>
//         </div>
//       )}

//       {/* Floor button */}
//       <button onClick={toggleFloorUpload} style={{ position: 'absolute', top: '684px', left: '20px', zIndex: 100 }}>
//         Floor
//       </button>

      
//       <video ref={videoRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }} autoPlay muted />
//       <button onClick={startCamera} style={{ position: 'absolute', zIndex: 100,top: '490px', left: '20px' }}>Camera</button>
      
//       <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }  }>
//       {/* position: 'absolute', top: '520px', left: '30px', zIndex: 100 */}
//     {/* <Helpers/> */}
//         <CameraController />


//         <ambientLight intensity={1.5} />
//         <spotLight position={[5, 5, 10]} angle={0.3} intensity={1.5} />
//         {Object.entries(objects).map(([name, { modelPath, position, rotation, scale }]) => (
//           <Model key={name} modelPath={modelPath} position={position} rotation={rotation} scale={0.01} />
//         ))}
        
// {/* <Floor></Floor> */}
// <Helpers/>
// {floorTexturePath && <Floor texturePath={floorTexturePath} />}

//         <OrbitControls />
//       </Canvas>

    
//       <div style={{ position: 'absolute', top: '10px', left: '20px' }}>
//       <h2 >
//           U CAN DESIGN UR CHOSEN PRODUCTS HERE !
//         </h2>
//         <button onClick={() => updatePosition(0, 0.1)}>Right</button>
//         <br/>
//         <button onClick={() => updatePosition(0, -0.1)}>Left</button>
//         <br/>
//         <button onClick={() => updatePosition(1, 0.1)}>Up</button>
//         <br/>
//         <button onClick={() => updatePosition(1, -0.1)}>Down</button>
//         <br/>
//         <button onClick={() => updatePosition(2, 0.1)}>Forward</button>
//         <br/>
//         <button onClick={() => updatePosition(2, -0.1)}>Backward</button>
//         <br/>
//         <button onClick={() => updateRotation(0, Math.PI / 8)}>Rotate X</button>
//         <br/>
//         <button onClick={() => updateRotation(1, Math.PI / 8)}>Rotate Y</button>
//         <br/>
//         <button onClick={() => updateRotation(2, Math.PI / 8)}>Rotate Z</button>
  




//     <br></br>
//     <br></br>
//     <br></br>
//     <p> -----------------</p>



//       <div style={{ position: 'absolute', top: '560px', left: '15px', zIndex: 100 }}>
//         <input type="file" onChange={handleModelUpload} accept=".glb,.gltf,.obj,.JPG,.max" />
//       </div>
      
//       <div style={{ position: 'absolute', top: '560px', left: '15px', zIndex: 100 }}>
//         <input type="file" onChange={handleModelUpload} accept=".glb,.gltf,.obj,.JPG,.max" />
//       </div>
      
//       <select value={activeObject || ''} onChange={handleChangeObject} style={{ position: 'absolute',top: '590px',left: '7px',width:'100px' ,zIndex: 100 }}>
//         {Object.keys(objects).map(modelName => (
//           <option key={modelName} value={modelName}>{modelName}</option>
//         ))}
//       </select>
//       <br/>
//     <button onClick={deleteActiveObject} style={{ position: 'absolute', top: '630px', left: '2px', zIndex: 100 }}>Delete</button> 



// {/*  <select value={activeObject || ''} onChange={handleChangeObject} style={{ position: 'absolute',top: '590px',left: '7px',width:'100px' ,zIndex: 100 }}>
//     {Object.keys(objects).map(modelName => (
//       <option key={modelName} value={modelName}>{modelName}</option>
//     ))}
//   </select>
//   <button onClick={deleteActiveObject} style={{ position: 'absolute', top: '620px', left: '20px', zIndex: 100 }}>Delete Object</button> */}
//     <br></br>

//     <br></br>
//     <br></br>  <br></br>  <br></br>
//     {/* {windowModel.visible && (
//   <WindowModel
//     modelPath={windowModel.modelPath}
//     position={windowModel.position}
//     rotation={windowModel.rotation}
//     scale={windowModel.scale}
//     visible={windowModel.visible}
//   />
// )}
// <button onClick={addWindowModel} style={{ position: 'absolute', zIndex: 100, top: '650px', left: '20px' }}>
//   Add Window
// </button> */}


//   {/* <buttin>
//     add window
//   </buttin> */}
//     <br></br>  <br></br> 

//     <>



//   <button onClick={() => setShowWallUpload(true)}>Wall</button>
//   {showWallUpload && (
//     <div style={{ position: 'absolute', top: '690px', left: '120px', zIndex: 100, background: 'white', padding: '20px' }}>
//         <input type="file" onChange={handleWallUpload} accept="image/jpeg, image/png" />
//       <button onClick={() => setShowWallUpload(false)}>Cancel</button>
//     </div>
//   )}
// </>

//       </div>
//     </div>
    
//   );
// }

// export default App;