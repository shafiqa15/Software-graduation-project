import React from 'react';
import '../Cart/ShoppingAssistance.css'; // Ensure the CSS file path is correct

const ShoppingAssistance = () => {
  return (
    <div className="shopping-assistance">
      <div className="shopping-assistance-content">
        <h2 className='advanced-glow'>Shopping Assistance</h2>
        <p>Have questions before you check out? We're here to help!</p>
      </div>
      <div className="shopping-assistance-actions">
        <button className="button-call">
          {/* Call icon SVG */}
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a1.08 1.08 0 01-1.18.95A19.79 19.79 0 015.09 5.09 1.08 1.08 0 016.05 4h3a1.08 1.08 0 011 .73c.1.38-.08.78-.29 1.11L8.09 7.91a16.13 16.13 0 007.92 7.92l1.09-1.66c.33-.21.73-.39 1.11-.29.44.11.73.6.73 1v3z"></path>
          </svg>
          Call Us
        </button>
        <button className="button-chat">
          {/* Chat icon SVG */}
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path>
          </svg>
          Chat Now
        </button>
      </div>
    </div>
  );
};

export default ShoppingAssistance;
