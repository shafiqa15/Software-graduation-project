
    import React, { useRef, useEffect, useState } from 'react';
    import ReactModal from 'react-modal';

    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    import Top from '../PAGES/Top';
    import '../decore/decore.css';


    import image2 from '../images/decore/Screenshot 2024-03-20 at 02.58.49.png';
    import image3 from '../images/decore/Screenshot 2024-03-20 at 02.55.56.png';
    import image4 from '../images/decore/Screenshot 2024-04-03 at 01.07.56.png';
    import image5 from '../images/decore/tv.webp';


    import image1 from '../images/decore/tv.webp';
    import img1 from '../images/decore/DALL·E 2024-03-20 03.16.26 - An elegant shoe cupboard designed for a modern home interior. The cupboard should have a sleek white finish with minimalist handles. It must feature s.webp';
    import img2 from '../images/decore/3d413bcd-c785-4023-b151-345449ab9f16.webp';
    import img3 from '../images/decore/Screenshot 2024-03-20 at 03.24.42.png';

    

    import example1 from '../images/decore/Screenshot 2024-04-07 at 14.37.06.png';
    import example2 from '../images/decore/Screenshot 2024-04-07 at 13.51.38.png';
  
    import example3 from '../images/decore/Screenshot 2024-04-07 at 15.00.55.png';
    


    function Decore() {
      const mountRef = useRef(null);
      const objectsRef = useRef([]);
      const sceneRef = useRef(new THREE.Scene()); // Use a ref for the scene to access it outside of useEffect
      const [color, setColor] = useState(0xffffff); // Default color is white
      const [material, setMaterial] = useState(new THREE.MeshPhongMaterial({ color: color }));
      const [boxDimensions, setBoxDimensions] = useState({ width: 1, height: 1, depth: 1 });
      const [boxWidth, setBoxWidth] = useState(1);
      const [currentModel, setCurrentModel] = useState('defaultModel');
      const [modelWidth, setModelWidth] = useState('');
      const [modelHeight, setModelHeight] = useState('');
      const [designDescription, setDesignDescription] = useState('');
      const [textureFile, setTextureFile] = useState(null);


  useEffect(() => {
  objectsRef.current.forEach(obj => {
    if (!obj.isLock && !obj.isMiddleLine) { // Exclude locks and the middle line
      const newMaterial = new THREE.MeshPhongMaterial({ color: color });
      obj.material = newMaterial;
    }
  });
}, [color]);

useEffect(() => {
  objectsRef.current.forEach(obj => {
    if (!obj.isLock && !obj.isMiddleLine) { // Again, exclude locks and the middle line
      obj.material = material;
    }
  });
}, [material]);

        

     useEffect(() => {
        const scene = sceneRef.current;
        const width = mountRef.current.clientWidth;
        const height = 500; // Set a fixed height for the renderer
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height); // Use the width and height determined above
      
        // Append the renderer to the DOM
        mountRef.current.appendChild(renderer.domElement);
        renderer.setClearColor(0xFAF9F6
          ); // You can also use new THREE.Color('#b0955b') if you prefer

        // Add controls
        const controls = new OrbitControls(camera, renderer.domElement);
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        scene.add(new THREE.DirectionalLight(0xffffff, 0.5));
      
        // Set the initial creation of objects
        createObjects(); 
        camera.position.z = 5;
      
        // Start the rendering loop
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      
        // This will run when the component unmounts
        return () => {
          mountRef.current.removeChild(renderer.domElement);
        };
      }, []);
      
    

      const createSimpleBox = (offsetX = 0, offsetY = 0) => {
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
      
      
      
    const [lastObjectDetails, setLastObjectDetails] = useState({ x: 0, y: 0, width: 1, height: 1 });
    const gapBetweenModels = 0; // This is an example value, in whatever units you are using (typically meters in 3D spaces)
 

      const createObjects = (offsetX = 0, offsetY = 0) => {
   
        if (currentModel === 'simpleBox') {
          createSimpleBox(offsetX, offsetY, 0); // Adjust these values and parameters as needed
          
                setLastObjectDetails({ x: offsetX, y: offsetY, width: 1, height: 1 }); // Update these dimensions based on actual sizes

        } 
        else if(currentModel=='createBoxWithDoorsAndLock'){
          createBoxWithDoorsAndLock(0 + offsetX, 0.5+ offsetY, 0); // Adjust these values as needed
      setLastObjectDetails({ x: offsetX, y: offsetY, width: 1, height: 1}); // Update these dimensions based on actual sizes

        }
        else if(currentModel=='createCupboardWithDoubleDoors'){

          createCupboardWithDoubleDoors( 0+ offsetX, 0.5+ offsetY, 0);
          setLastObjectDetails({ x: offsetX-0.5, y: offsetY-0.5, width: 1, height: 1}); // Update these dimensions based on actual sizes
          
          
                    
                  }
        else  {
          
      createBoxWithDoorsAndLock(0 + offsetX, 0.5+ offsetY, 0); // Adjust these values as needed
      }
      };




      const createObjects2 = (offsetX = 0, offsetY = 0) => {
        if (currentModel === 'simpleBox') {
             createSimpleBox(offsetX-0.9, offsetY-0.2, 0); // Adjust these values and parameters as needed
          
                setLastObjectDetails({ x: offsetX, y: offsetY+ 1, width: 1, height: 1 }); // Update these dimensions based on actual sizes

        } 
        else if(currentModel=='createBoxWithDoorsAndLock'){
          createBoxWithDoorsAndLock(0 + offsetX, 0.5+ offsetY, 0); // Adjust these values as needed
      setLastObjectDetails({ x: offsetX, y: offsetY, width: 1, height: 1}); // Update these dimensions based on actual sizes

        }


        else if(currentModel=='createCupboardWithDoubleDoors'){

createCupboardWithDoubleDoors(0 + offsetX-0.4,  offsetY-0.1, 0);
setLastObjectDetails({ x: offsetX, y: offsetY+0.2, width: 1, height: 1}); // Update these dimensions based on actual sizes


          
        }
        else  {
          
      createBoxWithDoorsAndLock(0 + offsetX, 0.5+ offsetY, 0); // Adjust these values as needed
      }
      };


      const createObjects3 = (offsetX = 0, offsetY = 0) => {
        if (currentModel === 'simpleBox') {
             createSimpleBox(offsetX+0.04, offsetY-0.1, 0); // Adjust these values and parameters as needed
          
                setLastObjectDetails({ x: offsetX, y: offsetY+ 1, width: 1, height: 1 }); // Update these dimensions based on actual sizes

        } 
        else if(currentModel=='createBoxWithDoorsAndLock'){
       createBoxWithDoorsAndLock(0 + offsetX, 0.1+ offsetY, 0); // Adjust these values as needed
      setLastObjectDetails({ x: offsetX, y: offsetY, width: 1, height: 1}); // Update these dimensions based on actual sizes

        }
        else if(currentModel=='createCupboardWithDoubleDoors'){

          createCupboardWithDoubleDoors(0 + offsetX, 0.5+ offsetY, 0);
          setLastObjectDetails({ x: offsetX, y: offsetY, width: 1, height: 1}); // Update these dimensions based on actual sizes
          
          
                    
                  }
        else  {
          
      createBoxWithDoorsAndLock(0 + offsetX,0.6+ offsetY, 0); // Adjust these values as needed

      }
      };

  const handleModelChange = (modelName) => {
  setCurrentModel(modelName); 
};
        
   
    
      const addModelAbove = () => {
         const { x, y, height } = lastObjectDetails;
         const newY = y -0.05+ height + gapBetweenModels; 
         const newModelHeight = 1; 
         createObjects(x, newY, 0); 
         setLastObjectDetails({ x, y: newY, width: boxWidth, height: newModelHeight });
      };

      


      const addModelToRight = () => {
        
        if (objectsRef.current.length > 0) {
          const lastAddedObject = objectsRef.current[objectsRef.current.length - 1];   
          const lastObjectPosition = lastAddedObject.position;
          const lastObjectSize = lastAddedObject.geometry.parameters;
          const gap = 0.9; 
          const newModelX = lastObjectPosition.x + (lastObjectSize.width / 2) + gap + (boxDimensions.width / 2);
          createObjects2(newModelX, lastObjectPosition.y+0.1, lastAddedObject.position.z);
          setLastObjectDetails({ x: newModelX, y: lastObjectPosition.y, width: boxDimensions.width, height: boxDimensions.height });
        } else {
          createObjects(0, 0); 
          setLastObjectDetails({ x: 0, y: 0, width: boxDimensions.width, height: boxDimensions.height });
        }
      };


     
      const addModelToLeft = () => {
        if (objectsRef.current.length > 0) {
          const lastAddedObject = objectsRef.current[objectsRef.current.length - 1];  
          const lastObjectSize = lastAddedObject.geometry.parameters;
          const gap = 0; 
          const newModelX = lastAddedObject.position.x - (lastObjectSize.width / 2) - gap - (boxDimensions.width / 2);
          const newY = lastAddedObject.position.y;
          createObjects3(newModelX, newY, lastAddedObject.position.z);
          setLastObjectDetails({ x: newModelX, y: newY, width: boxDimensions.width, height: boxDimensions.height });
        } else {
          createObjects(0, 0);
          setLastObjectDetails({ x: 0, y: 0, width: boxDimensions.width, height: boxDimensions.height });
        }
      };
      
      
   
      const addModelToBottom = () => {
        const { x, y, height } = lastObjectDetails;
        // Assuming the positive Y direction is upwards and you want to add the model below the current one,
        // you should subtract the height and gap to find the newY.
        const newY = y - height - gapBetweenModels; // Adjust this calculation based on your coordinate system
        const newModelHeight = 1; // You may adjust this based on the specific model being added
        
        // Assuming createObjects function can handle the placement based on the newX and newY,
        // if your implementation varies, adjust accordingly.
        createObjects(x, newY, 0); 
        setLastObjectDetails({ x, y: newY, width: boxWidth, height: newModelHeight });
      };
      

      

    
    
   const changeModel = (modelName) => {
  setCurrentModel(modelName);
  if (modelName === 'model1') {
    objectsRef.current.forEach(obj => {
      if (obj.isLock || obj.isDoor) {
        obj.visible = false; 
      }
    });
  } else {

    objectsRef.current.forEach(obj => {
      if (obj.isLock || obj.isDoor) {
        obj.visible = true; 
      }
    });
  }
  // ... additional code to update the middle model
};


useEffect(() => {
  if (textureFile) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const texture = new THREE.TextureLoader().load(e.target.result);
      setMaterial(new THREE.MeshPhongMaterial({ map: texture }));
    };
    reader.readAsDataURL(textureFile);
  }
}, [textureFile]);
      



const createCupboardWithDoubleDoors = (offsetX = 0, offsetY = 0, offsetZ = 0) => {
  const scene = sceneRef.current;
  const cupboardWidth = 1;
  const cupboardHeight = 1;
  const cupboardDepth = 1;
  const cupboardGeometry = new THREE.BoxGeometry(cupboardWidth, cupboardHeight, cupboardDepth);
  const cupboardMaterial = new THREE.MeshPhongMaterial({ color: 0xFF5733 });
  const cupboardMesh = new THREE.Mesh(cupboardGeometry, cupboardMaterial);
  cupboardMesh.position.set(offsetX, offsetY, offsetZ);
  scene.add(cupboardMesh);
  objectsRef.current.push(cupboardMesh);

  // Doors
  const doorWidth = cupboardWidth / 2;
  const doorHeight = cupboardHeight;
  const doorDepth = 0; // Thickness of the door
  const doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, doorDepth);
  const doorMaterial = new THREE.MeshPhongMaterial({ color: 0xFF5733, side: THREE.DoubleSide });

  // Left door
  const leftDoorMesh = new THREE.Mesh(doorGeometry, doorMaterial);
  leftDoorMesh.position.set(offsetX - doorWidth / 2, offsetY, offsetZ + cupboardDepth / 2 + doorDepth / 2);
  scene.add(leftDoorMesh);
  objectsRef.current.push(leftDoorMesh);

  // Locks
  const lockGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.1, 32);
  const lockMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff }); // Locks' color changed to white for visibility

  // Create and position the left lock
  const leftLockMesh = new THREE.Mesh(lockGeometry, lockMaterial);
  leftLockMesh.rotation.x = Math.PI / 2;
  leftLockMesh.position.set(offsetX - doorWidth / 2, offsetY, 0.05+offsetZ + cupboardDepth / 2);
  leftLockMesh.isLock = true; // Mark as lock
  scene.add(leftLockMesh);
  objectsRef.current.push(leftLockMesh);

  // Create and position the right lock
  const rightLockMesh = new THREE.Mesh(lockGeometry, lockMaterial);
  rightLockMesh.rotation.x = Math.PI / 2;
  rightLockMesh.position.set(offsetX + doorWidth / 2, offsetY, 0.05+offsetZ + cupboardDepth / 2);
  rightLockMesh.isLock = true; // Mark as lock
  scene.add(rightLockMesh);
  objectsRef.current.push(rightLockMesh);

  // Right door
  const rightDoorMesh = new THREE.Mesh(doorGeometry, doorMaterial);
  rightDoorMesh.position.set(offsetX + doorWidth / 2, offsetY, offsetZ + cupboardDepth / 2 + doorDepth / 2);
  scene.add(rightDoorMesh);
  objectsRef.current.push(rightDoorMesh);

  // // Top door
  // const topDoorMesh = new THREE.Mesh(new THREE.BoxGeometry(cupboardWidth, doorDepth, cupboardDepth), doorMaterial);
  // topDoorMesh.position.set(offsetX, offsetY + doorDepth , offsetZ);
  // scene.add(topDoorMesh);
  // objectsRef.current.push(topDoorMesh);

  //  const edgeMaterial = new THREE.LineBasicMaterial({ color: 'white' });
  //  const edges = new THREE.EdgesGeometry(cupboardGeometry);
  //  const line = new THREE.LineSegments(edges, edgeMaterial);
  //  cupboardMesh.add(line); // This will add the line as a child of the box mesh

  // Middle line
  const middleLineGeometry = new THREE.PlaneGeometry(0.01, cupboardHeight);
  const middleLineMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide }); // Middle line material set to double-sided
  const middleLineMesh = new THREE.Mesh(middleLineGeometry, middleLineMaterial);
  middleLineMesh.position.set(offsetX, offsetY, offsetZ + cupboardDepth / 2 + doorDepth); // Adjusted to be in front of the doors
  middleLineMesh.isMiddleLine = true;
  scene.add(middleLineMesh);
  objectsRef.current.push(middleLineMesh);





  const edgeMaterial = new THREE.LineBasicMaterial({ color: 'white' });
  const edges = new THREE.EdgesGeometry(cupboardGeometry);
  const cupboardLine = new THREE.LineSegments(edges, edgeMaterial);
  cupboardMesh.add(cupboardLine); // Add as a child of the cupboard mesh

  // Function to create edges for a given mesh
  const addEdgesToMesh = (mesh, geometry) => {
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, edgeMaterial);
    mesh.add(line);
  };

  // Adding edge lines for the doors
  addEdgesToMesh(leftDoorMesh, doorGeometry);
  addEdgesToMesh(rightDoorMesh, doorGeometry);






  
};



const addSpacer = (offsetX = 0, offsetY = 0, offsetZ = 0) => {
  const scene = sceneRef.current;
  const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1); // Small, effectively invisible
  const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }); // Completely transparent
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(offsetX, offsetY, offsetZ);
  scene.add(mesh);
  objectsRef.current.push(mesh);
  // Update last object details for positioning of the next object
  setLastObjectDetails({ x: offsetX, y: offsetY, width: 0.1, height: 0.1 });
};


const addSpaceAbove = () => {
  const { x, y, height } = lastObjectDetails;
  const newY = y + height + gapBetweenModels; // Update Y position based on the last object's position and height
  addSpacer(x, newY); // Add the spacer at the new position
  setLastObjectDetails({ ...lastObjectDetails, y: newY }); // Update lastObjectDetails to reflect the new position
};

const addSpaceToRight = () => {
  const { x, width } = lastObjectDetails;
  const newX = x + width + gapBetweenModels; // Update X position based on the last object's position and width
  addSpacer(newX, lastObjectDetails.y); // Add the spacer at the new position
  setLastObjectDetails({ ...lastObjectDetails, x: newX }); // Update lastObjectDetails to reflect the new position
};

const addSpaceToLeft = () => {
  const { x, width } = lastObjectDetails;
  const newX = x - width - gapBetweenModels; // Calculate new X position for the spacer
  addSpacer(newX, lastObjectDetails.y); // Add the spacer at the new position
  setLastObjectDetails({ ...lastObjectDetails, x: newX }); // Update lastObjectDetails to reflect the new position
};

const addSpaceToBottom = () => {
  const { x, y, height } = lastObjectDetails;
  const newY = y - height - gapBetweenModels; // Calculate new Y position for the spacer
  addSpacer(x, newY); // Add the spacer at the new position
  setLastObjectDetails({ ...lastObjectDetails, y: newY }); // Update lastObjectDetails to reflect the new position
};




const [isGuidebookOpen, setIsGuidebookOpen] = useState(false);
const toggleGuidebook = () => {
  setIsGuidebookOpen(!isGuidebookOpen);
}



const [isGuidebookExpanded, setIsGuidebookExpanded] = useState(false);

const toggleGuidebookSection = () => {
  setIsGuidebookExpanded(!isGuidebookExpanded);
}



const [texturePreview, setTexturePreview] = useState(null);


const handleTextureChange = (e) => {
    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setTexturePreview(event.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
        setTextureFile(e.target.files[0]);
    }
};




      return (
    
        <div>
      <Top></Top>
        



  
    
    <div className="image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',marginTop:'90px',marginLeft:'300px'}}>
      <img src={image1} alt="Decor 1" style={{ width: '15%', height: 'auto',paddingRight:'20px' }} />
      <img src={img1} alt="Decor 2" style={{ width: '15%', height: 'auto' ,paddingRight:'20px'}}  />
      {/* <img src={img2} alt="Decor 3" style={{ width: '15%', height: 'auto',paddingRight:'20px' }} /> */}
      <img src={img3} alt="Decor 4" style={{ width: '15%', height: '150px' ,paddingRight:'20px'}} />

      <div style={{ marginLeft: '50px', width:'400px' }}>
            <button onClick={toggleGuidebookSection} style={{ padding: '10px', border: 'none', background: '#b32c04', color: 'white' }}>
                {isGuidebookExpanded ? 'Hide Guidebook' : 'Show Guidebook'}
            </button>
            {isGuidebookExpanded && (
                <div style={{ padding: '10px', background: '#f0f0f0', marginTop: '5px' }}>
                    <h4>How to Use This Page</h4>
                    <p>Here you can find step-by-step instructions on how to interact with the decor options...</p>
                    <button  style={{ padding: '5px 10px', border: 'none', background: '#8b4513', color: 'white', fontSize: '0.8em', cursor: 'pointer', marginTop: '10px' }}>
                     <a href="/Guide"> Go to Guide Page </a>
                    </button>
                </div>
            )}
        </div>
    </div>
    




    {/* <div className="model-display-container"> */}
  <div ref={mountRef} style={{ width: '100%', height: '700px', position: 'relative', top: '50px', border: '2px solid #b0955b',marginLeft:'200px',backgroundColor:'##FAF9F6' }}></div>
      {/* width :
      hight: */}
   

      
  <div style={{ 
  position: 'absolute', 
  top: '45vh', 
  left: '22%', 
  transform: 'translateX(-50%)', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: '10px',
  fontFamily: 'Arial, sans-serif',
}}>
  {/* Existing model addition buttons */}
  <button onClick={addModelAbove} style={{
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#b32c04',
      border: 'none',
      borderRadius: '5px',
      width:'165px',
      cursor: 'pointer',
      outline: 'none',
      transition: 'background-color 0.3s ease',
      fontSize:'15px',
  }} onMouseOver={(e) => e.target.style.backgroundColor = '#cf5532'}
     onMouseOut={(e) => e.target.style.backgroundColor = '#b32c04'}>
    Add Model Above↑
  </button>
  <button onClick={addModelToRight} style={{
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#b32c04',
      border: 'none',
      borderRadius: '5px',
      width:'165px',
      cursor: 'pointer',
      outline: 'none',
      fontSize:'15px',
      transition: 'background-color 0.3s ease',
  }} onMouseOver={(e) => e.target.style.backgroundColor = '#cf5532'}
     onMouseOut={(e) => e.target.style.backgroundColor = '#b32c04'}>
    Add Model to Right →
  </button>
  <button onClick={addModelToLeft} style={{
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#b32c04',
      border: 'none',
      borderRadius: '5px',
      width:'165px',
      cursor: 'pointer',
      outline: 'none',
      fontSize:'15px',
      transition: 'background-color 0.3s ease',
  }} onMouseOver={(e) => e.target.style.backgroundColor = '#cf5532'}
     onMouseOut={(e) => e.target.style.backgroundColor = '#b32c04'}>
    Add Model To Left ←
  </button>
  <button onClick={addModelToBottom} style={{
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#b32c04',
      border: 'none',
      borderRadius: '5px',
      width:'165px',
      cursor: 'pointer',
      outline: 'none',
      fontSize:'15px',
      transition: 'background-color 0.3s ease',
  }} onMouseOver={(e) => e.target.style.backgroundColor = '#cf5532'}
     onMouseOut={(e) => e.target.style.backgroundColor = '#b32c04'}>
    Add Model to Bottom ↓
  </button>

  {/* New spacing addition buttons */}
  <button onClick={addSpaceAbove} style={{
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#b32c04',
      border: 'none',
      borderRadius: '5px',
      width:'165px',
      cursor: 'pointer',
      outline: 'none',
      fontSize:'15px',
      transition: 'background-color 0.3s ease',
  }} onMouseOver={(e) => e.target.style.backgroundColor = '#cf5532'}
     onMouseOut={(e) => e.target.style.backgroundColor = '#b32c04'}>
    Space Above
  </button>
  <button onClick={addSpaceToRight} style={{
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#b32c04',
      border: 'none',
      borderRadius: '5px',
      width:'165px',
      cursor: 'pointer',
      outline: 'none',
      fontSize:'15px',
      transition: 'background-color 0.3s ease',
  }} onMouseOver={(e) => e.target.style.backgroundColor = '#cf5532'}
     onMouseOut={(e) => e.target.style.backgroundColor = '#b32c04'}>
    Space to Right →
  </button>
  <button onClick={addSpaceToLeft} style={{
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#b32c04',
      border: 'none',
      borderRadius: '5px',
      width:'165px',
      cursor: 'pointer',
      outline: 'none',
      fontSize:'15px',
      transition: 'background-color 0.3s ease',
  }} onMouseOver={(e) => e.target.style.backgroundColor = '#cf5532'}
     onMouseOut={(e) => e.target.style.backgroundColor = '#b32c04'}>
    Space to Left ←
  </button>
  <button onClick={addSpaceToBottom} style={{
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#b32c04',
      border: 'none',
      borderRadius: '5px',
      width:'165px',
      cursor: 'pointer',
      outline: 'none',
      fontSize:'15px',
      transition: 'background-color 0.3s ease',
  }} onMouseOver={(e) => e.target.style.backgroundColor = '#cf5532'}
     onMouseOut={(e) => e.target.style.backgroundColor = '#b32c04'}>
    Space to Bottom ↓
  </button>



  <label htmlFor="file-upload" style={{
                padding: '10px 20px',
                color: '#fff',
                backgroundColor: '#b32c04',
                border: 'none',
                borderRadius: '5px',
                fontSize: '15px',
                width: '165px',
                cursor: 'pointer',
                outline: 'none',
                transition: 'background-color 0.3s ease',
                textAlign: 'center',
                display: 'inline-block',
                marginTop: '10px',
            }} onMouseOver={(e) => e.target.style.backgroundColor = '#cf5532'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#b32c04'}>
                Upload Wood Texture
                <input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    onChange={handleTextureChange}
                    style={{ display: 'none' }}
                />
            </label>
            
            {/* ... more JSX code */}

            {/* Image preview section */}
           
            {texturePreview && (
              
                <div style={{
                  marginTop:'500px',
                    position: 'absolute',
                    top: '30%', // Adjust the position as necessary
                    left: '5%',
                    border: '3px dashed #b32c04',
                    borderRadius: '10px',
                    padding: '5px',
                    width: '170px', // Adjust the size as necessary
                    height: '160px', // Adjust the size as necessary
                }}>


                    <img 
                   
                        src={texturePreview} 
                        alt="Wood Texture Preview" 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                    <p style={{fontSize:'14px'}}> Chosen wood shape:</p>
                </div>
                
            )}

    <p> Pick the color u want:</p>
    <input
  
            type="color"
            value={`#${color.toString(16)}`}
            onChange={(e) => setColor(parseInt(e.target.value.substr(1), 16))}
            style={{ position: 'absolute', top: '77vh', left: '50%', transform: 'translateX(-50%)' }}
          />
</div>













               <div  className='avia_prod'>
               <br/>
            <p style={{ fontFamily: 'Mulish' }}>
              Choose the model you want:<br/>
            </p> 
            <div id="messageContainer" style={{ marginLeft:'600px',fontFamily: 'Mulish',marginTop:'140px'}}>
           <h3>You can design ur own product here  😉</h3>
    </div>
    
    







   


            <div onClick={() => handleModelChange('simpleBox')} className="model-selector" >
              <img className='images_prop image-container_decore' src={image2} alt="Model 2" />
            </div>
            <div onClick={() => handleModelChange('createBoxWithDoorsAndLock')} className="model-selector">
              <img className='images_prop image-container_decore' src={image3} alt="Model 3" />
            </div>
            <div onClick={() => handleModelChange('createCupboardWithDoubleDoors')} className="model-selector">
              <img className='images_prop image-container_decore' src={image4} alt="Model 4" />
            </div>
       
            <div>
            ---------------------------------- <br/>
              Here r an examples  <br/>of deatailing models
            </div>
            <div onClick={() => changeModel('model5')} className="model-selector">
              <img className='images_prop image-container_decore' src={example1} alt="Model 5" />
            </div>
            <div onClick={() => changeModel('model1')} className="model-selector">
              <img className='images_prop image-container_decore' src={example2} alt="Model 1" />
            </div>

            <div onClick={() => changeModel('model1')} className="model-selector">
              <img className='images_prop image-container_decore' src={example3} alt="Model 1" />
            </div>


          </div>


          <div style={{ marginTop: '100px', textAlign: 'center', padding: '20px', backgroundColor: '#FAF9F6', border: '1px solid #b0955b', borderRadius: '5px',marginLeft:'200px' }}>
  <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
    <input
      type="text"
      placeholder="Width (e.g., 2.5 meters)"
      value={modelWidth}
      onChange={(e) => setModelWidth(e.target.value)}
      style={{ padding: '10px', width: '200px', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'Arial, sans-serif' }}
    />
    <input
      type="text"
      placeholder="Height (e.g., 1.5 meters)"
      value={modelHeight}
      onChange={(e) => setModelHeight(e.target.value)}
      style={{ padding: '10px', width: '200px', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'Arial, sans-serif' }}
    />
  </div>
  <textarea
    placeholder="Describe your design here... Include all details you think are important."
    value={designDescription}
    onChange={(e) => setDesignDescription(e.target.value)}
    style={{ width: '420px', height: '100px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'Arial, sans-serif', resize: 'none' }}
  ></textarea>
  <button
    onClick={() => {
      console.log(`Width: ${modelWidth}, Height: ${modelHeight}, Description: ${designDescription}`);
      // Additional actions here, like sending data to a server or updating the scene
    }}
    style={{
      display: 'block',
      marginTop: '10px',
      padding: '10px 20px',
      cursor: 'pointer',
      backgroundColor: '#b32c04',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      marginLeft:'500px',
      fontFamily: 'Arial, sans-serif',
      transition: 'background-color 0.3s ease',
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = '#cf5532')}
    onMouseOut={(e) => (e.target.style.backgroundColor = '#b32c04')}
  >
    Submit Design
  </button>
</div>


        </div>



      );
    }
    
    export default Decore;
    