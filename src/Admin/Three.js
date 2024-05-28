import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import JSZip from 'jszip';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Top from '../PAGES/Top';
import '/Users/shafiqaabdat/Downloads/client-main/src/Admin/Three.css';
// import React, { useState, useEffect, useRef } from 'react';

const baseUrl = "https://api.csm.ai/";

const headers = {
    'Content-Type': 'application/json',
    'x-api-key': '3a21AB838c8422471b7208a29021255f'
};

const uploadObj = {
    "image_url": "https://hips.hearstapps.com/hmg-prod/images/ghk090123homefeature-005-655b97aee4cbc.jpg?crop=0.828xw:1.00xh;0,0&resize=980:*",
    "preview_mesh": "turbo",
    "pixel_alignment": "highest",
    "model_resolution": "high",
    "resolution": "high_poly",
    "diffusion_time_steps": 75,
    "auto_gen_3d": true,
    "topology": "quads",
    "texture_resolution": 2048
};

async function create3DSession(setStatus, setSpinUrl, setProduct) {
    try {
        console.log('Creating 3D session with:', uploadObj);
        setStatus('Creating 3D session...');
        const response = await axios.post(`${baseUrl}image-to-3d-sessions`, uploadObj, { headers });
        console.log('API response:', response.data);
        let imageTo3dSession = response.data.data;
        const session_code = imageTo3dSession.session_code;

        setStatus(`3D session created, session code: ${session_code}. Waiting for preview...`);
        await sleep(15 * 60);

        do {
            setStatus('Checking session status...');
            await sleep(5 * 60);
            const statusResponse = await axios.get(`${baseUrl}image-to-3d-sessions/${session_code}`, { headers });
            imageTo3dSession = statusResponse.data.data;
            console.log('Session status:', imageTo3dSession.status);
        } while (imageTo3dSession.status !== 'preview_done');

        setStatus('Preview done, starting refine job...');
        const refineResponse = await axios.post(`${baseUrl}image-to-3d-sessions/get-3d/refine/${session_code}`, {}, { headers });
        imageTo3dSession = refineResponse.data.data;
        await sleep(40 * 60);

        do {
            setStatus('Checking refine status...');
            await sleep(5 * 60);
            const statusResponse = await axios.get(`${baseUrl}image-to-3d-sessions/${session_code}`, { headers });
            imageTo3dSession = statusResponse.data.data;
            console.log('Refine status:', imageTo3dSession.status);
        } while (imageTo3dSession.status !== 'refine_done');

        setStatus('Refine done!');
        console.log('Refine done:', imageTo3dSession);

        setSpinUrl(imageTo3dSession.spins[0].image_url);
        setProduct(imageTo3dSession);

    } catch (error) {
        setStatus('Error creating 3D session');
        console.error('Error creating 3D session:', error.response ? error.response.data : error.message);
    }
}

async function downloadAndExtractZip(url, setStatus, setFileContent) {
    try {
        setStatus('Downloading ZIP file...');
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        setStatus('Extracting ZIP file...');
        const zip = await JSZip.loadAsync(response.data);
        const usdcFile = zip.file('output.usdc');
        if (!usdcFile) {
            throw new Error('output.usdc not found in the ZIP file');
        }
        const usdcContent = await usdcFile.async('string'); // Read as string
        setFileContent(usdcContent);
        const usdcBlob = await usdcFile.async('blob');
        const usdcUrl = URL.createObjectURL(usdcBlob);
        return usdcUrl;
    } catch (error) {
        setStatus('Error downloading or extracting ZIP file');
        console.error('Error downloading or extracting ZIP file:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function convertUsdcToGltf(usdcUrl, setStatus, setGltfUrl) {
    try {
        setStatus('Converting USDC to GLTF...');
        const response = await axios.post(`${baseUrl}convert-usdc-to-gltf`, { usdc_url: usdcUrl }, { headers });
        console.log('Conversion response:', response.data);
        setGltfUrl(response.data.gltf_url);
        setStatus('Conversion to GLTF done!');
    } catch (error) {
        setStatus('Error converting USDC to GLTF');
        console.error('Error converting USDC to GLTF:', error.response ? error.response.data : error.message);
    }
}

function sleep(seconds) {
    const ms = seconds * 1000;
    return new Promise(resolve => setTimeout(resolve, ms));
}

const Three = () => {
    const [spinUrl, setSpinUrl] = useState('');
    const [status, setStatus] = useState('idle');
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState('');
    const [gltfUrl, setGltfUrl] = useState('');
    const [fileContent, setFileContent] = useState('');
    const containerRef = useRef(null);

    useEffect(() => {
        axios.get('https://api.csm.ai/image-to-3d-sessions/SESSION_1716844421_8983386', { headers })
            .then(result => {
                const sessionData = result.data.data;
                setSpinUrl(sessionData.spins[0].image_url);
                setProduct(result.data.data);
                window.confirm(sessionData.input_image);
            })
            .catch(error => {
                console.error('Error fetching data:', error.response ? error.response.data : error.message);
            });
    }, []);

    useEffect(() => {
        if (gltfUrl) {
            display3DModel(gltfUrl);
        }
    }, [gltfUrl]);

    const handleCreate3DSession = async () => {
        await create3DSession(setStatus, setSpinUrl, setProduct);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleConvertUsdzToGltf = async () => {
        if (!product.preview_mesh_url_usdz) {
            setStatus('No USDZ URL available for conversion');
            return;
        }
        try {
            const usdcUrl = await downloadAndExtractZip(product.preview_mesh_url_usdz, setStatus, setFileContent);
            await convertUsdcToGltf(usdcUrl, setStatus, setGltfUrl);
        } catch (error) {
            console.error('Error in converting USDZ to GLTF:', error);
        }
    };

    const display3DModel = (url) => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5).normalize();
        scene.add(light);

        const loader = new GLTFLoader();
        loader.load(url, (gltf) => {
            scene.add(gltf.scene);
            renderer.render(scene, camera);
        });

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();
    };

    return (
        <div>
            <Top />
            <br/><br/><br/><br/>
            <h1>Here you can convert your products to 3D 🤩✨</h1>
            <input type="file" onChange={handleFileChange} />
            <br/><br/>

            {spinUrl ? (
                <video src={spinUrl} controls autoPlay loop style={{ width
: '500px', height: '400px' }} />
            ) : (
                <p>No spin available</p>
            )}

            <img src={product.image_url} alt="Product" />
            <img src={product.input_image} alt="Product" />
            <p><a href={product.preview_mesh_url_usdz}>Download USDZ</a></p>
            <p><a href={product.mesh_url_glb}>Download GLB</a></p>

            <button onClick={handleCreate3DSession} className='CenteredButton40'>Convert Image to 3D</button>
            <br/><br/>
            <button onClick={handleConvertUsdzToGltf}>Convert USDZ to GLTF</button>
            <br/><br/>
            {gltfUrl && <a href={gltfUrl} download>Download GLTF</a>}
            <br/><br/>
            {fileContent && (
                <div>
                    <h2>File Contents:</h2>
                    <pre>{fileContent}</pre>
                </div>
            )}
            <p>Status: {status}</p>
            <div ref={containerRef} style={{ width: '100%', height: '600px' }}></div>
        </div>
    );
}

export default Three;
