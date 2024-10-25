import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import '/Users/shafiqaabdat/Downloads/client-main/src/design/design.css';
import html2canvas from 'html2canvas';
import { products, navigateToBedPage } from '/Users/shafiqaabdat/Downloads/client-main/src/BedRoomsLarge/BedRoomsLarge.js'; // Adjust the path as necessary
import { startTransition } from 'react';

import { useScreenshot,createFileName } from 'use-react-screenshot';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';




function CameraController() {
  const { camera, gl } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, 5);
    camera.fov = 75;
    camera.updateProjectionMatrix();
    gl.setSize(window.innerWidth, window.innerHeight);
  }, [camera, gl]);
  return null;
}





function GridBorder({ size = 100, height = 200, color = 'black' }) {
  const points = [
    new THREE.Vector3(-size / 2, 0, size / 2),
    new THREE.Vector3(size / 2, 0, size / 2),
    new THREE.Vector3(size / 2, 0, -size / 2),
    new THREE.Vector3(-size / 2, 0, -size / 2),
    new THREE.Vector3(-size / 2, 0, size / 2),
  ];


  const verticalLines = [
    new THREE.Vector3(-size / 2, 0, size / 2),
    new THREE.Vector3(-size / 2, height, size / 2),

    new THREE.Vector3(size / 2, 0, size / 2),
    new THREE.Vector3(size / 2, height, size / 2),

    new THREE.Vector3(size / 2, 0, -size / 2),
    new THREE.Vector3(size / 2, height, -size / 2),

    new THREE.Vector3(-size / 2, 0, -size / 2),
    new THREE.Vector3(-size / 2, height, -size / 2),
  ];

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const verticalLineGeometry = new THREE.BufferGeometry().setFromPoints(verticalLines);
  const lineMaterial = new THREE.LineBasicMaterial({ color });

  return (
    <>
      <line geometry={lineGeometry} material={lineMaterial} />
      <lineSegments geometry={verticalLineGeometry} material={lineMaterial} />
    </>
  );
}


function Floor({ texturePath }) {
  const texture = useLoader(THREE.TextureLoader, texturePath);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4,4);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}



function Model({ modelPath, position, rotation, scale }) {
  const ref = useRef();
  const gltf = useGLTF(modelPath);


  useFrame(() => {
    ref.current.position.set(...position);
    ref.current.rotation.set(...rotation);
    ref.current.scale.set(scale, scale, scale);
  });
  return <primitive ref={ref} object={gltf.scene} />;

}


function Helpers() {

  return (
    <>
    
      <gridHelper args={[10, 10, 'white', 'white']} />
      <GridBorder size={10} color={'black'} />
      <axesHelper args={[30]} />

    </>
  );
}

function WindowModel({ modelPath, position, rotation, scale, visible }) {
  const { scene } = useGLTF(modelPath, true);
  if (!visible) return null;
  return <primitive object={scene} position={position} rotation={rotation} scale={scale} />;
}



function Design() {




  const location = useLocation();
  const { product } = location.state || {}; 

  const navigate = useNavigate();


  const [activeObject, setActiveObject] = useState(null);
  const [objects, setObjects] = useState({});
  const [showHelpers, setShowHelpers] = useState(false);
  const [floorTexturePath, setFloorTexturePath] = useState(); // Default texture path
  const [showFloorUpload, setShowFloorUpload] = useState(false); // State to toggle floor upload pop-up
  const [showWallUpload, setShowWallUpload] = useState(false);


const capture= () => {
  html2canvas(document.body).then(function(canvas){

var a=document.createElement('a');
a.href=canvas.toDataURL("/Users/shafiqaabdat/Downloads/client-main/src/images/VEGA.jpeg").replace("image/jpeg","image/octet-stream");
a.download='shafiqa.jpg';
a.click();
  });
};

  
  const handleFloorUpload = event => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFloorTexturePath(url);
      setShowFloorUpload(false); 
    }
  };

  const toggleFloorUpload = () => setShowFloorUpload(!showFloorUpload);


  const handleWallUpload = event => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      document.body.style.backgroundImage = `url(${url})`;
      document.body.style.backgroundSize = 'cover'; 
      document.body.style.backgroundPosition = 'center'; 
      setShowWallUpload(false); 
    }
  };
  


  const handleModelUpload = event => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const modelName = file.name.split('.')[0];
      setObjects(prev => ({
        ...prev,
        [modelName]: { modelPath: url, position: [0, 0, 0], rotation: [0, 0, 0], scale: 1 },
      }));
      setActiveObject(modelName);
    }
  };

  const updatePosition = (axis, distance) => {
    if (!activeObject) return;
    setObjects(prev => ({
      ...prev,
      [activeObject]: {
        ...prev[activeObject],
        position: prev[activeObject].position.map((value, index) => index === axis ? value + distance : value),
      },
    }));
  };

  const updateRotation = (axis, angle) => {
    if (!activeObject) return;
    setObjects(prev => ({
      ...prev,
      [activeObject]: {
        ...prev[activeObject],
        rotation: prev[activeObject].rotation.map((value, index) => index === axis ? value + angle : value),
      },
    }));
  };

  const handleChangeObject = event => {
    setActiveObject(event.target.value);
  };

  const [showWindow, setShowWindow] = useState(false);

  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error accessing the camera", err);
    }
  };

  const deleteActiveObject = () => {
    if (!activeObject) return;
    setObjects(prev => {
      const newState = { ...prev };
      delete newState[activeObject];
      return newState;
    });
    setActiveObject(null); 
  };


  const [windowModel, setWindowModel] = useState({
     modelPath :process.env.PUBLIC_URL + '/Users/shafiqaabdat/Downloads/client-main/public/uploads-files-3101237-PM_Baked_Window.glb',
    position: [0, 0, 0], 
    rotation: [0, 0, 0], 
    scale: 0.24, 
    visible: false, 
  });

  useEffect(() => {
    document.body.classList.add('customBodyStyle2');
  //console.log('--');
    return () => {
      document.body.classList.remove('customBodyStyle2');
    };
  }, []);
 

  useEffect(() => {
    
    const product = location.state?.product1;
    if (product) {
      const initialObjects = {
        khazana: { 
          modelPath: product.khzana_obj, 
          position: [0, 0, 0], 
          rotation: [0, 0, 0], 
          scale: 2, 
        },
        bedFrame: { 
          modelPath: product.objblue, // Assuming obj1 is a property containing the model path for the bed frame
          position: [2, 0, 0], // Customize as needed
          rotation: [0, Math.PI / 2, 0], // Customize as needed
          scale: 2, // Customize as needed
        },
        follow: { 
          modelPath: product.folowobj, 
          position: [-2, 0, 0], // Customize as needed
          rotation: [0, 0, 0], // Customize as needed
          scale: 2, // Customize as needed
        },
        comedena:{

          modelPath: product.comedenaobj, 
          position: [-2, 0, 0], // Customize as needed
          rotation: [0, 0, 0], // Customize as needed
          scale: 1, // Customize as needed

        },
        comedena2:{

          modelPath: product.comedenaobj2, 
          position: [-2, 0, 0], // Customize as needed
          rotation: [0, 0, 0], // Customize as needed
          scale: 1, // Customize as needed

        }
      ,
      mirror:{
       
        modelPath: product.mirrorobj, 
        position: [-2, 0, 0], // Customize as needed
        rotation: [0, 0, 0], // Customize as needed
        scale: 1, // Customize as needed

        
      }


        
      };
  
      //jk
      setObjects(initialObjects);
    }
  }, [location.state]);
  







 
  const addProductFlowerToScene = () => {
    if (product?.obj1) {
      console.log("Adding flower to scene", product.obj1);
      const flowerObject = {
        modelPath: product.obj1.modelPath,
        position: product.obj1.position || [0, 0, 0],
        rotation: product.obj1.rotation || [0, 0, 0],
        scale: product.obj1.scale || 1,
      };

      

      setObjects(prevObjects => ({
        ...prevObjects,
        obj1: flowerObject,
      }));
    } else {
      console.error("Product.flower is undefined");
    }
  };






  return (
    
    <div className="app-container">
 
         {showFloorUpload && (
        <div className="control-panel" style={{ position: 'absolute', top: '490px', left: '140px', zIndex: 100, background: 'white', padding: '20px' }}>
          <input type="file" onChange={handleFloorUpload} accept=".jpg,.jpeg,.png" />
          <button onClick={() => setShowFloorUpload(false)}>Cancel</button>
        </div>
      )}


      <button onClick={toggleFloorUpload} style={{ position: 'absolute', top: '510px', left: '20px', zIndex: 100 ,width:'150px'}}>
        Floor
      </button>
      {/* <p>Product Name: {product?.name}</p>
      <p>Product Name: {product?.kind}</p> */}

      <button onClick={() => setShowWallUpload(true)} style={{ position: 'absolute', top: '555px', left: '20px', zIndex: 100 ,width:'150px'}}>Wall</button>

      
      <video ref={videoRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }} autoPlay muted />
      <button onClick={startCamera} style={{ position: 'absolute', zIndex: 100,top: '780px', left: '20px' ,width:'150px'}}>Camera</button>
     

      
      <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }  }>
        <CameraController />
        <ambientLight intensity={1} />
        <spotLight position={[5, 5, 10]} angle={0.3} intensity={0.3} />
        {Object.entries(objects).map(([key, obj]) => (
    <Model key={key} modelPath={obj.modelPath} position={obj.position} rotation={obj.rotation} scale={obj.scale} />
  ))}

      




      <Helpers/>
        {floorTexturePath && <Floor texturePath={floorTexturePath} />}
        <OrbitControls />
      </Canvas>

    



      <div style={{ position: 'absolute', top: '10px', left: '20px' }}>
      <h2 >
          U CAN DESIGN UR CHOSEN PRODUCTS HERE !
        </h2>
        
        <button onClick={() => updatePosition(0, 0.1)} style={{width:'150px'}}>Right</button>
        <br/>
        <button onClick={() => updatePosition(0, -0.1)} style={{width:'150px'}}>Left</button>
        <br/>
        <button onClick={() => updatePosition(1, 0.1)} style={{width:'150px'}}>Up</button>
        <br/>
        <button onClick={() => updatePosition(1, -0.1)} style={{width:'150px'}}>Down</button>
        <br/>
        <button onClick={() => updatePosition(2, 0.1)} style={{width:'150px'}}>Forward</button>
        <br/>
        <button onClick={() => updatePosition(2, -0.1)} style={{width:'150px'}}>Backward</button>
        <br/>
        <button onClick={() => updateRotation(0, Math.PI / 8)} style={{width:'150px'}}>Rotate X</button>
        <br/>
        <button onClick={() => updateRotation(1, Math.PI / 8)} style={{width:'150px'}}>Rotate Y</button>
        <br/>
        <button onClick={() => updateRotation(2, Math.PI / 8)} style={{width:'150px'}}>Rotate Z</button>


    <br></br>
    <br></br>
    <br></br>
    
      
      <div style={{ position: 'absolute', top: '690px', left: '10px', zIndex: 100 }}>
        <input type="file" onChange={handleModelUpload} accept=".glb,.gltf,.usdz" />
      </div>
      
      <select value={activeObject || ''} onChange={handleChangeObject} style={{ position: 'absolute',top: '640px',left: '7px',width:'100px' ,zIndex: 100,width:'150px' }}>
        {Object.keys(objects).map(modelName => (
          <option key={modelName} value={modelName}>{modelName}</option>
        ))}

      </select>
      <br/>
    <button onClick={deleteActiveObject} style={{ position: 'absolute', top: '590px', left: '2px', zIndex: 100,width:'150px' }}>Delete</button> 

    <button className='btn btn-deafult'id='button' onClick={capture} style={{ position: 'absolute', top: '720px', left: '2px', zIndex: 100 ,width:'150px'}}>  
     screen
     </button>

     {/* <button onClick={addProductFlowerToScene} style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 100 }}>
        Add Flower
      </button> */}
 <br/>
    {/* {windowModel.visible && (
  <WindowModel
    modelPath={windowModel.modelPath}
    position={windowModel.position}
    rotation={windowModel.rotation}
    scale={windowModel.scale}
    visible={windowModel.visible}
  />
)}
<button onClick={addWindowModel} style={{ position: 'absolute', zIndex: 100, top: '650px', left: '20px' }}>
  Add Window
</button> */}


  {/* <buttin>
    add window
  </buttin> */}
    <br></br>  <br></br> 

    <>
  {showWallUpload && (
    <div style={{ position: 'absolute', top: '510px', left: '120px', zIndex: 100, background: 'white', padding: '20px', width:'240px'}}>
        <input type="file" onChange={handleWallUpload} accept="image/jpeg, image/png" />
      <button onClick={() => setShowWallUpload(false)}>Cancel</button>
    </div>
  )}
</>

      </div>
    </div>
    
  );
}



export default Design;