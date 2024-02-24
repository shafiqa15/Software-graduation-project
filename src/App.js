import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
// Ensure the path is correct for your CSS file
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
  const texture = useLoader(THREE.TextureLoader, "/flo.jpeg");
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

// function Helpers() {
//   return (
//     <>
//       <gridHelper args={[10, 10, 'white', 'grey']} />
//       <axesHelper args={[5]} />
//     </>
//   );
// }

// function updatefloor(){
  
//   const texture = useLoader(THREE.TextureLoader, "/floor.jpeg");
//   texture.wrapS = THREE.RepeatWrapping;
//   texture.wrapT = THREE.RepeatWrapping;
//   texture.repeat.set(1, 1);

//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
//       <planeGeometry args={[10, 10]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// }

function Helpers() {
  return (
    <>
  
      <gridHelper args={[10, 10, 'white', 'white']} />
      <GridBorder size={10} color={'black'} />
      <axesHelper args={[20]} />
    </>
  );
}

function App() {
  const [activeObject, setActiveObject] = useState(null);
  const [objects, setObjects] = useState({});

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

  return (
    <div className="app-container">
    
      <Canvas>
        <CameraController />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        {Object.entries(objects).map(([name, { modelPath, position, rotation, scale }]) => (
          <Model key={name} modelPath={modelPath} position={position} rotation={rotation} scale={0.01} />
        ))}
{/* <Floor></Floor> */}
        <Helpers  />
        
        <OrbitControls />
      </Canvas>
     
      <div style={{ position: 'absolute', top: '50px', left: '20px' }}>
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
    <button >NewFloor</button>



      </div>

      <div style={{ position: 'absolute', top: '520px', left: '30px', zIndex: 100 }}>
        <input type="file" onChange={handleModelUpload} accept=".glb,.gltf,.obj,.JPG" />
      </div>
      <select value={activeObject || ''} onChange={handleChangeObject} style={{ position: 'absolute',top: '550px',left: '25px',width:'100px' ,zIndex: 100 }}>
        {Object.keys(objects).map(modelName => (
          <option key={modelName} value={modelName}>{modelName}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
