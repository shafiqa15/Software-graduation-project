
    import React, { useRef, useEffect, useState } from 'react';
    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    import { useLoader } from '@react-three/fiber';
    import { TextureLoader } from 'three';
    import Top from '../PAGES/Top';
    import '../decore/decore.css';


    import image2 from '../images/decore/Screenshot 2024-03-20 at 02.58.49.png';
    import image3 from '../images/decore/Screenshot 2024-03-20 at 02.55.56.png';
    import image4 from '../images/decore/tv.webp';
    import image5 from '../images/decore/tv.webp';



    import image1 from '../images/decore/tv.webp';
    import img1 from '../images/decore/DALL·E 2024-03-20 03.16.26 - An elegant shoe cupboard designed for a modern home interior. The cupboard should have a sleek white finish with minimalist handles. It must feature s.webp';
    import img2 from '../images/decore/3d413bcd-c785-4023-b151-345449ab9f16.webp';
    import img3 from '../images/decore/Screenshot 2024-03-20 at 03.24.42.png';

    

    function Decore() {
      const mountRef = useRef(null);
      const objectsRef = useRef([]);
      const sceneRef = useRef(new THREE.Scene()); // Use a ref for the scene to access it outside of useEffect
    
      const [color, setColor] = useState(0xffffff); // Default color is white
      const [material, setMaterial] = useState(new THREE.MeshPhongMaterial({ color: color }));
    
      useEffect(() => {
        objectsRef.current.forEach(obj => {
          // التحقق إذا كان الكائن ليس القفل
          if (!obj.isLock) {
            // إنشاء مادة جديدة باللون الجديد وتعيينها للكائن
            const newMaterial = new THREE.MeshPhongMaterial({ color: color });
            obj.material = newMaterial;
          }
        });
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
      createObjects(); // Initial creation
      camera.position.z = 5;
      const animate = () => { requestAnimationFrame(animate); controls.update(); renderer.render(scene, camera); };
      animate();
      return () => { mountRef.current.removeChild(renderer.domElement); };
    }, []);
    
    
      const [boxDimensions, setBoxDimensions] = useState({ width: 1, height: 1, depth: 1 });
    
    
      
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
  
    
    const [boxWidth, setBoxWidth] = useState(1);
    const [boxHeight, setBoxHeight] = useState(1);
    
    
    
    const createBoxWithDoorsAndLock = (offsetX = 0, offsetY = 0, offsetZ = 0, totalWidth = 1, totalDepth = 1) => {
    
        const scene = sceneRef.current;
      
        // إنشاء الخزانة الرئيسية
        const boxWidth = 1; // Width of the box
        const boxHeight = 1; // Height of the box
        const boxDepth = 1; // Depth of the box
        const boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const boxMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(offsetX, offsetY, offsetZ);
        scene.add(boxMesh);
        objectsRef.current.push(boxMesh);
    
        
      
        // Create lines to highlight the front edges of the box
        const edgeMaterial = new THREE.LineBasicMaterial({ color: 'white' });
        const edges = new THREE.EdgesGeometry(boxGeometry);
        const line = new THREE.LineSegments(edges, edgeMaterial);
        boxMesh.add(line); // This will add the line as a child of the box mesh
      
        // إنشاء الأبواب
        const doorGeometry = new THREE.PlaneGeometry(0.5, 1);
        const doorMaterial = new THREE.MeshPhongMaterial({ color: 0x6B8E23, side: THREE.DoubleSide });
        
        // الباب الأيسر
        const leftDoorMesh = new THREE.Mesh(doorGeometry, doorMaterial);
        leftDoorMesh.position.set(offsetX - 0.25, offsetY, offsetZ + 0.51);
        scene.add(leftDoorMesh);
        objectsRef.current.push(leftDoorMesh);
        
        // الباب الأيمن
        const rightDoorMesh = new THREE.Mesh(doorGeometry, doorMaterial);
        rightDoorMesh.position.set(offsetX + 0.25, offsetY, offsetZ + 0.51);
        scene.add(rightDoorMesh);
        objectsRef.current.push(rightDoorMesh);
      
        // إنشاء القفل
        const lockGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.04, 32);
        const lockMaterial = new THREE.MeshPhongMaterial({ color: 'white' });
        const lockMesh = new THREE.Mesh(lockGeometry, lockMaterial);
        lockMesh.isLock = true;
        lockMesh.position.set(offsetX, offsetY, offsetZ + 0.6);
        lockMesh.rotation.x = Math.PI / 2;
        scene.add(lockMesh);
        objectsRef.current.push(lockMesh);
    
        const addLine = (start, end, color = 'white') => {
          const material = new THREE.LineBasicMaterial({ color });
          const points = [];
          points.push(start.clone());
          points.push(end.clone());
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, material);
          scene.add(line);
        };
    
    
        const edgeOffset = 0.5; // half the size of the box to get to the edges
        const frontZ = offsetZ + edgeOffset + 0.01; // slightly in front of the box to avoid z-fighting
      
        // Horizontal line
        const startHorizontal = new THREE.Vector3(offsetX - edgeOffset, offsetY+0.5, frontZ);
        const endHorizontal = new THREE.Vector3(offsetX + edgeOffset, offsetY+0.5, frontZ);
        addLine(startHorizontal, endHorizontal);
      
    
    
        const startVerticalRight = new THREE.Vector3(offsetX + edgeOffset, offsetY - edgeOffset, frontZ);
        const endVerticalRight = new THREE.Vector3(offsetX + edgeOffset, offsetY + edgeOffset, frontZ);
        addLine(startVerticalRight, endVerticalRight);
       
      
       
        const startVerticalLeft = new THREE.Vector3(offsetX - edgeOffset, offsetY - edgeOffset, frontZ);
        const endVerticalLeft = new THREE.Vector3(offsetX - edgeOffset, offsetY + edgeOffset, frontZ);
        addLine(startVerticalLeft, endVerticalLeft);
    
        
    // Add legs at the bottom corners
    const legHeight = 0.2; // Define the height of the legs
    const legThickness = 0.1; // Define the thickness of the legs
    const legGeometry = new THREE.BoxGeometry(legThickness, legHeight, legThickness);
    const legMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    
    // Calculate positions for the legs
    const legOffsetX = totalWidth / 2 - legThickness / 2;
    const legOffsetZ = totalDepth / 2 - legThickness / 2;
    const legPosY = offsetY - 0.5 - legHeight / 2; // Position the legs at the bottom of the box
    
    // Right leg
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(offsetX + legOffsetX, legPosY, offsetZ + legOffsetZ);
    scene.add(rightLeg);
    objectsRef.current.push(rightLeg);
    
    // Left leg
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(offsetX - legOffsetX, legPosY, offsetZ + legOffsetZ);
    scene.add(leftLeg);
    objectsRef.current.push(leftLeg);
    
    
    };
      
      
      
    
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
        topFrame.position.set(0 + offsetX,0.5 + offsetY, 0);
        scene.add(topFrame);
        objectsRef.current.push(topFrame);
    
        const bottomFrame = new THREE.Mesh(bottomFrameGeom, material);
        bottomFrame.position.set(0 + offsetX, 0.1 + offsetY, 0);
        scene.add(bottomFrame);
        objectsRef.current.push(bottomFrame);
        createBoxWithDoorsAndLock(0 + offsetX, 0.5+ offsetY, 0); // Adjust these values as needed
    
      };
    
        
    const handleIncreaseWidth = () => setBoxWidth(prevWidth => prevWidth + 0.1);
    const handleIncreaseHeight = () => setBoxHeight(prevHeight => prevHeight + 0.1);
    
    
      const columnHeights = [1]; // Start with one column, height 1 (for the initial model)
    
    const addModelToRight = () => {
      let maxX = -Infinity;
      objectsRef.current.forEach(obj => {
        maxX = Math.max(maxX, obj.position.x);
      });
      // Assuming 1 unit is the width of the model, and 0.5 is the gap between models
      createObjects(maxX + 0.55, 0); 
      columnHeights.push(1); // Add a new column with height 1
    };
    
    const addModelAbove = () => {
      if (columnHeights.length === 0) {
        // If there are no columns, add the first one
        createObjects(0, 0);
        columnHeights.push(1);
      } else {
        // Find the rightmost column to add the model above
        const columnIndex = columnHeights.length - 1;
        const columnHeight = columnHeights[columnIndex];
        // Assuming the x position of the rightmost column is columnIndex * (model width + gap)
        const xPosition = columnIndex ; 
        createObjects(xPosition, columnHeight);
        columnHeights[columnIndex]++; // Increment the height of this column
      }
    };
    
    
      const [currentModel, setCurrentModel] = useState('defaultModel');
    
      const changeModel = (modelName) => {
        setCurrentModel(modelName);
        // ... additional code to update the middle model
      };
   
      
    
      return (
    
        <div>
      <Top></Top>
        
    
    <div className="image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',marginTop:'90px'}}>
      <img src={image1} alt="Decor 1" style={{ width: '15%', height: 'auto',paddingRight:'20px' }} />
      <img src={img1} alt="Decor 2" style={{ width: '15%', height: 'auto' ,paddingRight:'20px'}} />
      <img src={img2} alt="Decor 3" style={{ width: '15%', height: 'auto',paddingRight:'20px' }} />
      <img src={img3} alt="Decor 4" style={{ width: '15%', height: '190px' ,paddingRight:'20px'}} />
    </div>
    
            <div ref={mountRef} style={{ width: '75vw', height: '75vh',marginTop:'210px' }}></div>
    
          <input
            type="color"
            value={`#${color.toString(16)}`}
            onChange={(e) => setColor(parseInt(e.target.value.substr(1), 16))}
            style={{ position: 'absolute', top: '85vh', left: '50%', transform: 'translateX(-50%)' }}
          />
          
          <button onClick={addModelAbove} style={{ position: 'absolute', top: '90vh', left: '30%', transform: 'translateX(-50%)' }}>
            Add Model Above
          </button>
          <button onClick={addModelToRight} style={{ position: 'absolute', top: '90vh', left: '70%', transform: 'translateX(-50%)' }}>
            Add Model to Right
          </button>
       
    

    
          <button onClick={handleIncreaseWidth} style={{ position: 'absolute', top: '95vh', left: '30%' }}>
            Increase Width
          </button>
          <button onClick={handleIncreaseHeight} style={{ position: 'absolute', top: '95vh', left: '70%' }}>
            Increase Height
          </button>
    
    
    
               <div  className='avia_prod'>
               <br/>
            <p style={{ fontFamily: 'Mulish' }}>
              Available Components to be <br/> designed:
            </p> 
            <div id="messageContainer" style={{ marginLeft:'500px',fontFamily: 'Mulish',marginTop:'100px'}}>
      <h3>You can design ur own product here   😉</h3>
    </div>
    
    
    
            <div onClick={() => changeModel('model1')} className="model-selector">
              <img className='images_prop image-container_decore' src={image1} alt="Model 1" />
            </div>
            <div onClick={() => changeModel('model2')} className="model-selector">
              <img className='images_prop image-container_decore' src={image2} alt="Model 2" />
            </div>
            <div onClick={() => changeModel('model3')} className="model-selector">
              <img className='images_prop image-container_decore' src={image3} alt="Model 3" />
            </div>
            <div onClick={() => changeModel('model4')} className="model-selector">
              <img className='images_prop image-container_decore' src={image4} alt="Model 4" />
            </div>
            <div onClick={() => changeModel('model5')} className="model-selector">
              <img className='images_prop image-container_decore' src={image5} alt="Model 5" />
            </div>
          </div> 
        </div>
      );
    }
    
    export default Decore;
    