import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Wardrobe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    // Wardrobe body
    const bodyGeometry = new THREE.BoxGeometry(2, 3, 1);
    const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513, side: THREE.DoubleSide });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    scene.add(body);

    // Wardrobe doors
    const doorGeometry = new THREE.BoxGeometry(1, 2.8, 0.1);
    const doorMaterial = new THREE.MeshBasicMaterial({ color: 0xA0522D, side: THREE.DoubleSide });

    // Left door
    const leftDoor = new THREE.Mesh(doorGeometry, doorMaterial);
    leftDoor.position.set(-0.5, 0, 0.55);
    scene.add(leftDoor);

    // Right door
    const rightDoor = new THREE.Mesh(doorGeometry, doorMaterial);
    rightDoor.position.set(0.5, 0, 0.55);
    scene.add(rightDoor);

    // Positioning camera
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default Wardrobe;
