
// export default App;
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
 import '/Users/shafiqaabdat/Downloads/client-main/src/App.css';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { useDrag } from '@react-three/drei';

import * as THREE from 'three';
import { useState } from 'react';
function CarModel() {
  const { scene } = useGLTF("/bmw.glb"); // حدد مسار النموذج
  return <primitive object={scene} scale={[0.7, 0.7, 0.7]} />;
}

// function RoomModel() {
//   const { scene } = useGLTF("/room.glb"); // حدد مسار النموذج
//   return <primitive object={scene} scale={[1, 1, 1]} />;
// }

// function Column({ position }) {
//   return (
//     <mesh position={position}>
//       <cylinderGeometry args={[0.2, 0.2, 3, 32]} />
//       <meshStandardMaterial color={'gray'} />
//     </mesh>
//   );
// }
function Floor() {
  const texture = useLoader(THREE.TextureLoader, "/flo.jpeg"); // حدد مسار الصورة هنا
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(5, 5); // يمكن تعديل هذه القيم لتغيير كثافة تكرار البلاط

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[100, 100]} /> // يمكن تعديل هذه الأبعاد لتناسب حجم الغرفة
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

// function UploadControl({ onFileLoad }) {
//   const handleFileChange = event => {
//     console.log("File input changed"); // للتأكد من تشغيل الحدث
//     const file = event.target.files[0];
//     if (file) {
//       console.log("File loaded:", file.name); // للتأكد من تحميل الملف
//       onFileLoad(file);
//     }
//   };

//   return <input type="file"className='file1'  onChange={handleFileChange} style={{ display: 'block' }} />;
// }

function UploadControl({ onFileLoad }) {
  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      onFileLoad(file);
    }
  };

  // أضف أسلوب CSS هنا لوضع الزر في الجانب الأيمن
  const uploadButtonStyle = {
    position: 'fixed',
    right: '100px',
    top: '30px',
    zIndex: 100
  };

  return <input type="file" onChange={handleFileChange} style={uploadButtonStyle} />;
}



function GridBorder({ size = 100, height = 200, color = 'black' }) {
  // Points for the base square border
  const points = [
    new THREE.Vector3(-size / 2, 0, size / 2),
    new THREE.Vector3(size / 2, 0, size / 2),
    new THREE.Vector3(size / 2, 0, -size / 2),
    new THREE.Vector3(-size / 2, 0, -size / 2),
    new THREE.Vector3(-size / 2, 0, size / 2),
  ];

  // Add vertical lines at each corner
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
      <gridHelper args={[100, 100, 'white', 'white']} />
      <GridBorder size={100} color={'black'} />
      <axesHelper args={[5]} />
    </>
  );
}


function Scene() {
  return (
    <Suspense fallback={null}>
        <Floor />
      {/* <RoomModel /> */}
      <CarModel />
      {/* <Column position={[-2, 1.5, -2]} />
      <Column position={[2, 1.5, -2]} />
      <Column position={[-2, 1.5, 2]} />
      <Column position={[2, 1.5, 2]} /> */}
    </Suspense>
  );
}

// Other imports remain the same
export default function App() {
  const [object, setObject] = useState();

  const handleFileLoad = file => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      const loader = new GLTFLoader();
      loader.parse(reader.result, '', (gltf) => {
        setObject(gltf.scene);
      });
    };
  };

  return (
    
    <div style={{ height: '100vh', width: '75vw' }}>
      <UploadControl onFileLoad={handleFileLoad} />
    
       <Canvas camera={{ position: [10, 10, 20], fov: 80 }}>
  <ambientLight intensity={0.5} />
  <spotLight position={[10, 15, 10]} angle={0.3} />
  {object && <primitive object={object} />} // تأكد من وضع الكائن هنا
  <Scene />
  <Helpers />
  <OrbitControls />
</Canvas>

    </div>
  );
}

