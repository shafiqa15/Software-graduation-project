import React from 'react';
import Top from '../PAGES/Top'; 
import '../decore/Guide.css';
import step1 from '../images/decore/Screenshot 2024-04-17 at 22.00.43.png';
import step2 from '../images/decore/Screenshot 2024-04-17 at 22.07.12.png';
import step3 from '../images/decore/Screenshot 2024-04-17 at 22.08.19.png';
import vid from '../images/decore/My Movie 1.mp4';
import Footer from '../footer/Footer';
function Guide() {
    return (
        <div>
              <Top/>
  
        <div className="guide-container" style={{marginTop:'100px'}}>

            <h1 >Welcome to the Decor Page Guide</h1>
            <div className="section">
                <h2>Getting Started</h2>
                <p>This section introduces you to the basics of the decor page, including the layout and the main features.</p>
            </div>
            <div className="section">
                <h2>How to Add Models</h2>
                <p>Learn how to add different models to your decor setup:</p>
                <ol>
                    <li>Click on the model icon to select it.</li>
                    <img src={step1} alt="Adding models"  style={{width:'200px',marginLeft:'-10px'}}/>

                    <li>Use the add buttons to place the model in the desired position.</li>
                    <img src={step2} alt="Adding models"  style={{width:'200px',marginLeft:'-10px'}}/>

                    <li>Adjust the model's properties using the control panel.</li>
                    <img src={step3} alt="Adding models"  style={{width:'200px',marginLeft:'-10px'}}/>

                </ol>
                {/* <img src="" />*/}
            </div>
            <div className="section">
                <h2>Customizing Models</h2>
                <p>Customize models by changing colors, textures, and dimensions:</p>
                <ul>
                    <li>To change the color, select the color picker and choose a new color.</li>
                    <li>To change the texture, upload a new texture file using the upload field.</li>
                    <li>To adjust dimensions, use the dimension inputs to specify width and height.</li>
                </ul>
            </div>
            <div className="section">
                <h2>Saving and Sharing Your Design</h2>
                <p>Once you are satisfied with your design, you can save or share it:</p>
                <ul>
                    <li>Click the 'Save' button to save your design to your profile.</li>
                    <li>Click the 'Share' button to generate a link that you can share with others.</li>
                </ul>
            </div>
            <div className="section video-tutorial">
                <h2>Video Tutorial</h2>
                <p>Watch the video below for a full walkthrough of the decor page features:</p>
                <video controls>
                    <source src={vid}type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <Footer></Footer>

        </div>
    );
    
}

export default Guide;
