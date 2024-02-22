import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
// Ensure this path is correct for your project structure
import '/Users/shafiqaabdat/Downloads/client-main/src/App.css';

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

function Model({ modelPath, position, rotation, scale }) {
  const ref = useRef();
  const { scene } = useLoader(GLTFLoader, modelPath);
  useFrame(() => {
    ref.current.position.set(...position);
    ref.current.rotation.set(...rotation);
    ref.current.scale.set(scale, scale, scale);
  });
  return <primitive ref={ref} object={scene} />;
}

function Floor() {
  const texture = useLoader(THREE.TextureLoader, "/floor.jpeg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
// function GridBorder({ size = 100 }) {
//   const points = [
//     new THREE.Vector3(-size / 2, 0, size / 2),
//     new THREE.Vector3(size / 2, 0, size / 2),
//     new THREE.Vector3(size / 2, 0, -size / 2),
//     new THREE.Vector3(-size / 2, 0, -size / 2),
//     new THREE.Vector3(-size / 2, 0, size / 2),
//   ];
//   const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
//   const lineMaterial = new THREE.LineBasicMaterial({ color: 'black' });
//   return <lineLoop geometry={lineGeometry} material={lineMaterial} />;
// }
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

function Helpers() {
  return (
    <>
  
      <gridHelper args={[10, 10, 'white', 'white']} />
      <GridBorder size={10} color={'black'} />
      <axesHelper args={[5]} />
    </>
  );
}





function App() {
  const [activeObject, setActiveObject] = useState('sofa');
  const [modelUrl, setModelUrl] = useState(null); // Add this line

  const [objects, setObjects] = useState({
    sofa: { position: [0, 0, 0], rotation: [0, 0, 0], scale: 0.01 },
    table: { position: [2, 0, 0], rotation: [0, 0, 0], scale: 0.01 },
  });

  const updatePosition = (axis, distance) => {
    setObjects(prevObjects => ({
      ...prevObjects,
      [activeObject]: {
        ...prevObjects[activeObject],
        position: prevObjects[activeObject].position.map((value, index) => index === axis ? value + distance : value),
      },
    }));
  };

    const handleModelUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setModelUrl(url); // This function is now correctly defined
    }
    
  };
  useEffect(() => {
  // Cleanup function to revoke the URL
  return () => {
    if (modelUrl) {
      URL.revokeObjectURL(modelUrl);
    }
  };
}, [modelUrl]); // Dependency array to run cleanup when modelUrl changes


  const updateRotation = (axis, angle) => {
    setObjects(prevObjects => ({
      ...prevObjects,
      [activeObject]: {
        ...prevObjects[activeObject],
        rotation: prevObjects[activeObject].rotation.map((value, index) => index === axis ? value + angle : value),
      },
    }));
  };

  const handleChangeObject = event => {
    setActiveObject(event.target.value);
  };

  return (
    <div className="app-container">
      <select value={activeObject} onChange={handleChangeObject} style={{ position: 'absolute', zIndex: 100 }}>
        <option value="sofa">Sofa 1</option>
        <option value="table">Sofa 2</option>

      </select>
      <Canvas>
        <CameraController />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
       {/* < modelUrl  <Model modelPath={modelUrl} {...objects.sofa} /> */}
        <Model modelPath='/uploads-files-3170821-Red_sofa_glb.glb' {...objects.sofa} />
        <Model modelPath='/uploads-files-3170821-Red_sofa_glb2.glb' {...objects.table} />
          {modelUrl && <Model modelPath={modelUrl} position={[1, 0, 1]} rotation={[0, 0, 0]} scale={0.01} />}
 
        <Floor />
     
        <Helpers />
        <OrbitControls />
      </Canvas>
      <div style={{ position: 'absolute', top: '100px', left: '20px', zIndex: 100 }}>
    <input type="file" onChange={handleModelUpload} accept=".glb,.gltf" />
  </div>
      <div style={{ position: 'absolute', top: '50px', left: '20px' }}>
        <button onClick={() => updatePosition(0, 0.1)}>Right يمين</button>
        <button onClick={() => updatePosition(0, -0.1)}>Left يسار</button>
        <button onClick={() => updatePosition(1, 0.1)}>Up فوق</button>
        <button onClick={() => updatePosition(1, -0.1)}>Down تحت </button>
        <button onClick={() => updatePosition(2, 0.1)}>Forward للامام </button>
        <button onClick={() => updatePosition(2, -0.1)}>Backward للخلف</button>
        <button onClick={() => updateRotation(0, Math.PI / 8)}>Rotate X</button>
        <button onClick={() => updateRotation(1, Math.PI / 8)}>Rotate Y</button>
        <button onClick={() => updateRotation(2, Math.PI / 8)}>Rotate Z</button>
      </div>
  
    </div>
  
  
  );
}

export default App;
