import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Top from '../PAGES/Top';
import videoFile from '/Users/shafiqaabdat/Downloads/client-main/src/Contactus/Screen Recording 2024-06-11 at 03.45.07.mov';
import Footer from '../footer/Footer';
const mapStyles = {
  width: '100%',
  height: '400px',
};

const ContactUs = (props) => {
  return (
    <div className="contact-us-page">
      <Top />
      <br /> <br /> <br /> <br />
      <h2>Contact Us</h2>
      <div className="company-info">
        {/* <h3>Our Company</h3> */}
        <p><strong>Address:</strong> Main Street, Zawata,Palestine</p>
        <p><strong>Phone:</strong> +972 56-605-6600</p>
        <p><strong>Email:</strong> cashbblash2022@gmail.com</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26995.602096363873!2d35.18814336891244!3d32.24596556992265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce0326734551b%3A0xf6e1d6c90e26129b!2sZawata!5e0!3m2!1sen!2s!4v1718053305403!5m2!1sen!2s"
        width="1200" height="600"
        style={{marginLeft:'35px'}}
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

<br />

<div style={{marginLeft:'300px'}}>    
   <video width="600" height="400" controls>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      
      </div>
      <br /><br /><br />
<Footer></Footer>
   
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
})(ContactUs);
