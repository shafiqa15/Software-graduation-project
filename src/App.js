import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import '/Users/shafiqaabdat/Downloads/client-main/src/App.css';
// import { TextureLoader, VideoTexture } from 'three';


// function VideoTexturePlane() {
//   const videoRef = useRef();
//   const [videoTexture, setVideoTexture] = useState();

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
//       const video = videoRef.current;
//       video.srcObject = stream;
//       video.play();
//       const texture = new VideoTexture(video);
//       setVideoTexture(texture);
//     });
//   }, []);

//   return videoTexture ? (
//     <mesh>
//       <planeBufferGeometry attach="geometry" args={[1.6, 0.9]} />
//       <meshBasicMaterial attach="material" map={videoTexture} toneMapped={false} />
//     </mesh>
//   ) : null;
// }



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


function Floor() {
  const texture = useLoader(THREE.TextureLoader, "/floor.jpeg"); // Ensure the path and file are correct
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4); 

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0 ,0, 0]}> {/* Adjust position to match room */}
      <planeGeometry args={[10, 10]} /> {/* Adjust size to match room */}
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




function App() {

  const [activeObject, setActiveObject] = useState(null);
  const [objects, setObjects] = useState({});
  const [showHelpers, setShowHelpers] = useState(false);
  const toggleHelpers = () => setShowHelpers(!showHelpers);



 



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

  return (
    
    <div className="app-container">
      
      
      <video ref={videoRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }} autoPlay muted />
      <button onClick={startCamera} style={{ position: 'absolute', zIndex: 100,top: '490px', left: '20px' }}>Turn On Camera</button>
      
      <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }  }>
      {/* position: 'absolute', top: '520px', left: '30px', zIndex: 100 */}
    {/* <Helpers/> */}
        <CameraController />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        {Object.entries(objects).map(([name, { modelPath, position, rotation, scale }]) => (
          <Model key={name} modelPath={modelPath} position={position} rotation={rotation} scale={0.2} />
        ))}
        
<Floor></Floor>
<Helpers/>

        <OrbitControls />
      </Canvas>

    
      <div style={{ position: 'absolute', top: '10px', left: '20px' }}>
      <h2 >
          U CAN DESIGN UR CHOSEN PRODUCTS HERE !
        </h2>
        <button onClick={() => updatePosition(0, 0.1)}>Right</button>
        <br/>
        <button onClick={() => updatePosition(0, -0.1)}>Left</button>
        <br/>
        <button onClick={() => updatePosition(1, 0.1)}>Up</button>
        <br/>
        <button onClick={() => updatePosition(1, -0.1)}>Down</button>
        <br/>
        <button onClick={() => updatePosition(2, 0.1)}>Forward</button>
        <br/>
        <button onClick={() => updatePosition(2, -0.1)}>Backward</button>
        <br/>
        <button onClick={() => updateRotation(0, Math.PI / 8)}>Rotate X</button>
        <br/>
        <button onClick={() => updateRotation(1, Math.PI / 8)}>Rotate Y</button>
        <br/>
        <button onClick={() => updateRotation(2, Math.PI / 8)}>Rotate Z</button>

    <br></br>
    <br></br>
    <br></br>
    <p> -----------------</p>



      <div style={{ position: 'absolute', top: '560px', left: '15px', zIndex: 100 }}>
        <input type="file" onChange={handleModelUpload} accept=".glb,.gltf,.obj,.JPG" />
      </div>
      
      <select value={activeObject || ''} onChange={handleChangeObject} style={{ position: 'absolute',top: '590px',left: '7px',width:'100px' ,zIndex: 100 }}>
        {Object.keys(objects).map(modelName => (
          <option key={modelName} value={modelName}>{modelName}</option>
        ))}
      </select>

    <br></br>

    <br></br>
    <p> -----------------</p>

    <button>
Change floor
    </button>
    <br></br>
    <button>
change the color
    </button>
      </div>
    </div>
    
  );
}

export default App;
