import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px',
};

const ContactUs = (props) => {
  return (
    <div className="contact-us-page">
      <h2>Contact Us</h2>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="google-map">
        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 32.22111, lng: 35.25444 }}
        >
          <Marker position={{ lat: 32.22111, lng: 35.25444 }} />
        </Map>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
})(ContactUs);
