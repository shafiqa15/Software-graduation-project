import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '/Users/shafiqaabdat/Downloads/client-main/src/home/home.css'; // Ensure this path is correct
import home_img from '/Users/shafiqaabdat/Downloads/client-main/src/images/cash_.webp'; // Ensure this path is correct
import Slider from '/Users/shafiqaabdat/Downloads/client-main/src/slider/Slider.js';
import Footer from '/Users/shafiqaabdat/Downloads/client-main/src/footer/Footer.js';

const Home1 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    document.body.classList.add('customBodyStyle');
    // Dynamically load the Google Platform Library
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: "843618684207-f392btl1s2c433krt88t3qidmsptb9im.apps.googleusercontent.com", // Replace with your client ID
        callback: handlecallbackresponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"), // This ID should match the div below
        { theme: "outline", size: "large" }, // Customize button appearance
      );
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.body.classList.remove('customBodyStyle');
    };
  }, []);

  const handlecallbackresponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img src={home_img} alt="Logo" style={{ margin: '0px', borderRadius: '50%', width: '90px', height: '90px' }} />
            <span className="nav__logo-text">Cach Bblash</span>
          </a>

          <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><Link className="nav__link" to="/Design">Home</Link></li>
              <li className="nav__item"><a href="#" className="nav__link">About Us</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Services</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Featured</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Contact Us</a></li>
            </ul>

            <div className="nav__close" id="nav-close" onClick={() => setShowMenu(false)}>
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            <i className="ri-search-line nav__search" id="search-btn" onClick={() => setShowSearch(true)}></i>
            <i className="ri-user-line nav__login" id="login-btn" onClick={() => setShowLogin(true)}></i>
            <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(true)}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>

      <div className={`search ${showSearch ? 'show-search' : ''}`} id="search">
        <form action="" className="search__form">
          <i className="ri-search-line search__icon"></i>
          <input type="search" placeholder="What are you looking for?" className="search__input" />
        </form>
        <i className="ri-close-line search__close" id="search-close" onClick={() => setShowSearch(false)}></i>
      </div>

      <div className={`login ${showLogin ? 'show-login' : ''}`} id="login">
        <form action="" className="login__form">
          <h2 className="login__title">Log In</h2>
          <div className="login__group">
            <div>
              <label htmlFor="email" className="login__label">Email</label>
              <input type="email" placeholder="Write your email" id="email" className="login__input" />
            </div>
            <div>
              <label htmlFor="password" className="login__label">Password</label>
              <input type="password" placeholder="Enter your password" id="password" className="login__input" />
            </div>
          </div>
          <div className="login__options">
            <p className="login__signup">
              You do not have an account? <Link to="/SignUp">Sign up</Link>
            </p>
            <a href="#" className="login__forgot">Forgot your password?</a>
          </div>
          <button type="submit" className="login__button">Log In</button>
          <div id="signInDiv"> </div>
        </form>
        {/* <div id="signInDiv"> </div> Google sign-in button will be rendered here */}
        <i className="ri-close-line login__close" id="login-close" onClick={() => setShowLogin(false)}></i>
      </div>

      <div className="content">
        <div className="App">
          <h1>DESIGN YOUR HOUSE</h1>
          {/* <p className="animated-text">Cash Bblash</p> */}
          <Slider></Slider>
        </div>

        {/* <div className="buttons-container">
          <button className="button-style">Learn More↗</button>
        </div> */}
         
      </div>

      <div className="content">
        <div className="App">
         
          <p className="animated-text">Cash Bblash</p>
        </div>
        </div>
          {/* <div className="buttons-container">
          <button className="button-style">Learn More↗</button>
        </div> */}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer></Footer>

    </>
    
  );
}

export default Home1;
