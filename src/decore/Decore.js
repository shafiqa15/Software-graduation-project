
    import React, { useRef, useEffect, useState } from 'react';
    import * as THREE from 'three';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
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
      

  // useEffect(() => {
  //   const scene = sceneRef.current;
    
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   const renderer = new THREE.WebGLRenderer({ antialias: true });
  //   renderer.setSize(window.innerWidth * 0.75, window.innerHeight * 0.75);
  //   renderer.setClearColor(0xffffff);
  //   mountRef.current.appendChild(renderer.domElement);
  //   const controls = new OrbitControls(camera, renderer.domElement);
  //   scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  //   scene.add(new THREE.DirectionalLight(0xffffff, 0.5));
  //   createObjects(); // Initial creation
  //   camera.position.z = 5;
  //   const animate = () => { requestAnimationFrame(animate); controls.update(); renderer.render(scene, camera); };
  //   animate();
  //   return () => { mountRef.current.removeChild(renderer.domElement); };
  // }, []);

  
  
    
      const [boxDimensions, setBoxDimensions] = useState({ width: 1, height: 1, depth: 1 });
    

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
      
  
    
    const [boxWidth, setBoxWidth] = useState(1);
  
    
    
    
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
          createSimpleBox(offsetX, offsetY-0.05, 0); // Adjust these values and parameters as needed
          
                setLastObjectDetails({ x: offsetX, y: offsetY, width: 1, height: 1 }); // Update these dimensions based on actual sizes

        } 
        else if(currentModel=='createBoxWithDoorsAndLock'){
          createBoxWithDoorsAndLock(0 + offsetX, 0.5+ offsetY, 0); // Adjust these values as needed
      setLastObjectDetails({ x: offsetX, y: offsetY, width: 1, height: 1}); // Update these dimensions based on actual sizes

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
        else  {
          
      createBoxWithDoorsAndLock(0 + offsetX, 0.5+ offsetY, 0); // Adjust these values as needed
      }
      };


      const createObjects3 = (offsetX = 0, offsetY = 0) => {
        if (currentModel === 'simpleBox') {
             createSimpleBox(offsetX+0.05, offsetY-0.05, 0); // Adjust these values and parameters as needed
          
                setLastObjectDetails({ x: offsetX, y: offsetY+ 1, width: 1, height: 1 }); // Update these dimensions based on actual sizes

        } 
        else if(currentModel=='createBoxWithDoorsAndLock'){
       createBoxWithDoorsAndLock(0 + offsetX, 0.1+ offsetY, 0); // Adjust these values as needed
      setLastObjectDetails({ x: offsetX, y: offsetY, width: 1, height: 1}); // Update these dimensions based on actual sizes

        }
        else  {
          
      createBoxWithDoorsAndLock(0 + offsetX,0.6+ offsetY, 0); // Adjust these values as needed

      }
      };

  const handleModelChange = (modelName) => {
  setCurrentModel(modelName); // Assuming this sets state that decides which object creation function to use
};
        
   
    
      const addModelAbove = () => {
  const { x, y, height } = lastObjectDetails;
  const newY = y -0.05+ height + gapBetweenModels; 

  const newModelHeight = 1; // Example height of the new model, adjust based on actual model
  createObjects(x, newY, 0); // Adjust parameters as needed for your createObjects function
  
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
          createObjects(0, 0); // or any default position you'd like to start with
          setLastObjectDetails({ x: 0, y: 0, width: boxDimensions.width, height: boxDimensions.height });
        }
      };



      

      
      // const addModelToLeft = () => {
      //   if (objectsRef.current.length > 0) {
      //     const lastAddedObject = objectsRef.current[objectsRef.current.length - 1];
      //     const lastObjectSize = lastAddedObject.geometry.parameters;
      //     const gap = 0; 
      
      //     const newModelX = lastAddedObject.position.x - lastObjectSize.width / 2 - boxDimensions.width / 2 ;
      
      //     createObjects3(newModelX, lastAddedObject.y, lastAddedObject.position.z);
      
      //     setLastObjectDetails({ x: newModelX, y: lastAddedObject.position.y, width: boxDimensions.width, height: boxDimensions.height });
      //   } else {
      //     createObjects(0, 0);
      //     setLastObjectDetails({ x: 0, y: 0, width: boxDimensions.width, height: boxDimensions.height });
      //   }
      // };
      
      const addModelToLeft = () => {
        if (objectsRef.current.length > 0) {
          const lastAddedObject = objectsRef.current[objectsRef.current.length - 1];
          
          // Assuming lastObjectSize stores the dimensions of the last added object correctly
          const lastObjectSize = lastAddedObject.geometry.parameters;
          
          // You might want a gap between the models, even if it's just a small one.
          const gap = 0; // Adjust this value to your needs
      
          // Calculate the new model's X position based on the last object's position, its width, the new object's width, and the gap
          // We subtract half of the last object's width, the gap, and then half of the new object's width
          const newModelX = lastAddedObject.position.x - (lastObjectSize.width / 2) - gap - (boxDimensions.width / 2);
      
          // Correct the Y position to be the same as the last added object if needed
          // Assuming you want to place it directly to the left without changing the vertical position
          const newY = lastAddedObject.position.y;
      
          createObjects3(newModelX, newY, lastAddedObject.position.z);
      
          setLastObjectDetails({ x: newModelX, y: newY, width: boxDimensions.width, height: boxDimensions.height });
        } else {
          // If no objects have been added, create the first object at an initial position
          createObjects(0, 0);
          setLastObjectDetails({ x: 0, y: 0, width: boxDimensions.width, height: boxDimensions.height });
        }
      };
      
      
   
    
    const [currentModel, setCurrentModel] = useState('defaultModel');
    const [modelWidth, setModelWidth] = useState('');
const [modelHeight, setModelHeight] = useState('');
const [designDescription, setDesignDescription] = useState('');

    
   const changeModel = (modelName) => {
  setCurrentModel(modelName);
  if (modelName === 'model1') {
    objectsRef.current.forEach(obj => {
      if (obj.isLock || obj.isDoor) {
        obj.visible = false; // or scene.remove(obj) to completely remove it from the scene
      }
    });
  } else {
    // Code to revert back to the default model with lock and door
    objectsRef.current.forEach(obj => {
      if (obj.isLock || obj.isDoor) {
        obj.visible = true; // or you can re-add them to the scene if you've removed them
      }
    });
  }
  // ... additional code to update the middle model
};

const [textureFile, setTextureFile] = useState(null);


// Use useEffect to update the material when the textureFile changes
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
      
    
      return (
    
        <div>
      <Top></Top>
        
    
    <div className="image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',marginTop:'90px'}}>
      <img src={image1} alt="Decor 1" style={{ width: '15%', height: 'auto',paddingRight:'20px' }} />
      <img src={img1} alt="Decor 2" style={{ width: '15%', height: 'auto' ,paddingRight:'20px'}}  />
      <img src={img2} alt="Decor 3" style={{ width: '15%', height: 'auto',paddingRight:'20px' }} />
      <img src={img3} alt="Decor 4" style={{ width: '15%', height: '190px' ,paddingRight:'20px'}} />
    </div>
    
    {/* <div className="model-display-container"> */}
<div ref={mountRef} style={{ width: '100%', height: '500px', position: 'relative', top: '50px', border: '2px solid #b0955b',marginLeft:'200px',backgroundColor:'##FAF9F6' }}></div>
      {/* width :
      hight: */}
   
  {/* </div> */}
  {/* <div ref={mountRef} style={{ width: '120%', height: '500px', marginTop: '60px', border: '2px solid black' }}></div> */}

   
       <div style={{ 
    position: 'absolute', 
    top: '45vh', 
    left: '22%', 
    transform: 'translateX(-50%)', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '10px',
    fontFamily: 'Arial, sans-serif', // Use a common font for simplicity
}}>
    <button onClick={addModelAbove} style={{
        padding: '10px 20px',
      
        color: '#fff',
        backgroundColor: '#b32c04',
        border: 'none',
        borderRadius: '5px',
        width:'165px',
        cursor: 'pointer',
        outline: 'none',
        transition: 'background-color 0.3s ease',fontSize:'15px',
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
        cursor: 'pointer',
        width:'165px',
        outline: 'none',fontSize:'15px',
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
        outline: 'none',fontSize:'15px',
        transition: 'background-color 0.3s ease',
    }} onMouseOver={(e) => e.target.style.backgroundColor = '#cf5532'}
       onMouseOut={(e) => e.target.style.backgroundColor = '#b32c04'}>
      Add Model To Left ←
    </button>

    <label htmlFor="file-upload" style={{
        padding: '10px 20px',
  
        color: '#fff',
        backgroundColor: '#b32c04',
        border: 'none',
        borderRadius: '5px',fontSize:'15px',
        width:'165px',
        cursor: 'pointer',
        outline: 'none',
        transition: 'background-color 0.3s ease',
        textAlign: 'center',
        display: 'inline-block',
        marginTop: '10px', 
    }} onMouseOver={(e) => e.target.style.backgroundColor = '#cf5532'}
       onMouseOut={(e) => e.target.style.backgroundColor = '#b32c04'}>
        Upload Wood picture
        <input
        type="file"
        id="file-upload"
        accept="image/*"
        onChange={(e) => setTextureFile(e.target.files[0])}
        style={{ 
            display: 'none',
        }}
      />
    </label>
    <p> Pick the color u want:</p>
    <input
  
            type="color"
            value={`#${color.toString(16)}`}
            onChange={(e) => setColor(parseInt(e.target.value.substr(1), 16))}
            style={{ position: 'absolute', top: '42vh', left: '50%', transform: 'translateX(-50%)' }}
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
    
    
   

            <div onClick={() => changeModel('model1')} className="model-selector">
              <img className='images_prop image-container_decore' src={image1} alt="Model 1" />
            </div>
            <div onClick={() => handleModelChange('simpleBox')} className="model-selector" >
              <img className='images_prop image-container_decore' src={image2} alt="Model 2" />
            </div>
            <div onClick={() => handleModelChange('createBoxWithDoorsAndLock')} className="model-selector">
              <img className='images_prop image-container_decore' src={image3} alt="Model 3" />
            </div>
            <div onClick={() => changeModel('model4')} className="model-selector">
              <img className='images_prop image-container_decore' src={image4} alt="Model 4" />
            </div>
            <div onClick={() => changeModel('model5')} className="model-selector">
              <img className='images_prop image-container_decore' src={image5} alt="Model 5" />
            </div>
          </div>


          <div style={{ marginTop: '20px', textAlign: 'center', padding: '20px', backgroundColor: '#FAF9F6', border: '1px solid #b0955b', borderRadius: '5px',marginLeft:'200px' }}>
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
    