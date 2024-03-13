import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function WoodMaterial({ textureUrl }) {
  const texture = useLoader(TextureLoader, textureUrl);
  return <meshStandardMaterial attach="material" map={texture} />;
}


  
function Decore() {
  const mountRef = useRef(null);
//   const [material] = useState(new THREE.MeshPhongMaterial({ color: 0xffffff }));
  const objectsRef = useRef([]);
  const sceneRef = useRef(new THREE.Scene()); // Use a ref for the scene to access it outside of useEffect

  const [color, setColor] = useState(0xffffff); // Default color is white
  const [material, setMaterial] = useState(new THREE.MeshPhongMaterial({ color: color }));

  // Update material when color state changes
  useEffect(() => {
    setMaterial(new THREE.MeshPhongMaterial({ color: color }));
  }, [color]);

  useEffect(() => {
    objectsRef.current.forEach(obj => {
      obj.material = material;
    });
  }, [material]);

  useEffect(() => {
    const scene = sceneRef.current;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth * 0.75, window.innerHeight * 0.75);
    renderer.setClearColor(0xffffff);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.5));

    createObjects(0, 0); // Initial creation with the default material

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []); // The material does not need to be a dependency since it's not expected to change

  // Function to create and add objects to the scene, supporting both horizontal and vertical offsets
  const createObjects = (offsetX = 0, offsetY = 0) => {
    const scene = sceneRef.current;
    const legGeom = new THREE.BoxGeometry(0.1, 1, 0.1);
    const topFrameGeom = new THREE.BoxGeometry(1, 0.1, 1);
    const bottomFrameGeom = new THREE.BoxGeometry(1, 0.1, 1);

    const positions = [
      [-0.45 + offsetX, 0.5 + offsetY, -0.45],
      [0.45 + offsetX, 0.5 + offsetY, -0.45],
      [0.45 + offsetX, 0.5 + offsetY, 0.45],
      [-0.45 + offsetX, 0.5 + offsetY, 0.45],
    ];

    positions.forEach(pos => {
      const mesh = new THREE.Mesh(legGeom, material);
      mesh.position.set(...pos);
      scene.add(mesh);
      objectsRef.current.push(mesh);
    });

    const topFrame = new THREE.Mesh(topFrameGeom, material);
    topFrame.position.set(0 + offsetX, 1 + offsetY, 0);
    scene.add(topFrame);
    objectsRef.current.push(topFrame);

    const bottomFrame = new THREE.Mesh(bottomFrameGeom, material);
    bottomFrame.position.set(0 + offsetX, 0.1 + offsetY, 0);
    scene.add(bottomFrame);
    objectsRef.current.push(bottomFrame);
  };

  const addModelToRight = () => {
    let maxX = 0;
    objectsRef.current.forEach(obj => {
      maxX = Math.max(maxX, obj.position.x);
    });
    createObjects(maxX +0.5, 0); // Assuming 1.1 includes the model's width and a small gap
  };

  const addModelAbove = () => {
    let maxY = 0;
    objectsRef.current.forEach(obj => {
      maxY = Math.max(maxY, obj.position.y);
    });
    createObjects(0, maxY ); // Assuming 1.1 includes the model's height and a small gap
  };

  return (
    <div>
      <input
        type="color"
        value={`#${color.toString(16)}`}
        onChange={(e) => setColor(parseInt(e.target.value.substr(1), 16))}
        style={{ position: 'absolute', top: '85vh', left: '50%', transform: 'translateX(-50%)' }}
      />
      <div ref={mountRef} style={{ width: '75vw', height: '75vh' }}></div>
      <button onClick={addModelAbove} style={{ position: 'absolute', top: '90vh', left: '30%', transform: 'translateX(-50%)' }}>
        Add Model Above
      </button>
      <button onClick={addModelToRight} style={{ position: 'absolute', top: '90vh', left: '70%', transform: 'translateX(-50%)' }}>
        Add Model to Right
      </button>
    </div>
  );
}

export default Decore;
