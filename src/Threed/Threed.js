import React, { useState, useEffect } from 'react'; // Assuming you're using React
import axios from 'axios';

const Threed = async () => {
    const baseUrl = "http://api.csm.ai:5566/";

    function sleep(seconds) {
        const ms = seconds * 1000;
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'df1471A10Ab24dDe2dea5D0AF25922F2'
    };

    // Upload Stage
    const uploadObj = {
        "image_url": "/Users/shafiqaabdat/Downloads/client-main/src/images/bed3.jpeg",
        "preview_mesh": "hd",
        "pixel_alignment": "highest",
        "model_resolution": "high",
        "resolution": "high_poly",
        "diffusion_time_steps": 75,
        "auto_gen_3d": true,
        "topology": "quads",
        "texture_resolution": 2048
    }

    const response = await axios.post(`${baseUrl}image-to-3d-sessions`, uploadObj, { headers: headers });
    
    let imageTo3dSession = response.data.data;
    const session_code = imageTo3dSession.session_code;

    await sleep(15 * 60);

    do {
        await sleep(5 * 60);
        const response = await axios.get(`${baseUrl}image-to-3d-sessions/${session_code}`, { headers: headers });
        imageTo3dSession = response.data.data;
    } while (imageTo3dSession.status !== 'preview_done');

    console.log("preview_done", imageTo3dSession);

    const refineResponse = await axios.post(`${baseUrl}image-to-3d-sessions/get-3d/refine/${session_code}`, {}, { headers: headers });
    imageTo3dSession = refineResponse.data.data;

    await sleep(40 * 60);
    do {

        await sleep(5 * 60);
        const response = await axios.get(`${baseUrl}image-to-3d-sessions/${session_code}`, { headers: headers });
        imageTo3dSession = response.data.data;
        console.log(imageTo3dSession);
    } while (imageTo3dSession.status !== 'refine_done')

    return imageTo3dSession;
};

const ThreedComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [imageTo3dSession, setImageTo3dSession] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            
            try {
              
                const sessionData = await Threed();
                alert('kk')
                setImageTo3dSession(sessionData);
                
                // alert(sessionData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : 
            (
                <div>{JSON.stringify(imageTo3dSession)}</div> 
            )}
        </div>
    );
};

export default ThreedComponent;
