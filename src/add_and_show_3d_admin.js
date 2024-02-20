import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ modelUrl }) {
  const { scene } = useGLTF(modelUrl);
  scene.scale.set(2, 2, 2); // Adjust the scale as needed
  return <primitive object={scene} />;
}

function add_and_show_3d_admin() {
  const [modelUrl, setModelUrl] = useState(null);
  const [showModel, setShowModel] = useState(false);

  const handleModelUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setModelUrl(url);
      setShowModel(false); // Hide the model initially until the "Show" button is clicked
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <div>
        <input type="file" onChange={handleModelUpload} accept=".gltf,.glb" />
        <button onClick={() => setShowModel(true)} style={{ marginLeft: '10px' }}>Show</button>
      </div>
      {showModel && modelUrl && (
        <div style={{ width: '100%', height: '500px', marginTop: '20px' }}>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Model modelUrl={modelUrl} />
              <OrbitControls />
            </Suspense>
          </Canvas>
        </div>
      )}
    </div>
  );
}

export default add_and_show_3d_admin;
