import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/shafiqaabdat/Downloads/client-main/src/footer/footer.css'; // Adjust the import path as needed
// import logo_img from './Users/shafiqaabdat/Desktop/demo/src/images/Screenshot_2024-02-20_at_15.13.32-removebg-preview.png'; // Adjust the import path as needed
// Import Font Awesome components and specific icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container_footer">
        <div className="footer__logo">
          <Link to="/">
{/* /  <img src={logo_img} alt="Cash Bblash" style={{ width: '80px', height: '80px' }} /> */}
            Cash Bblash
          </Link>
        </div>
        <div className="footer__nav">
          <Link to="/about" className="footer__link">About Us</Link>
          <Link to="/services" className="footer__link">Services</Link>
          <Link to="/contact" className="footer__link">Contact Us</Link>
        </div>
        <div className="footer__socials">
          <a href="https://facebook.com" className="footer__social">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" className="footer__social">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" className="footer__social">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
       
          <a href="https://youtube.com" className="footer__social">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
        <div className="footer__copy">
          <p>&copy; 2024 Cash Bblash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
