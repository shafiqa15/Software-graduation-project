import React, { useState } from 'react';
import '/Users/shafiqaabdat/Downloads/client-main/src/home/home.css'; // Ensure this path is correct
import home_img from '/Users/shafiqaabdat/Downloads/client-main/src/images/cash_.webp'; // Ensure this path is correct
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../PAGES/Top.css';
// import '/Users/shafiqaabdat/Downloads/client-main/src/PAGES/Top.css'
const Top = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  
  
  const [showSignup, setShowSignup] = useState(false);
  
  const [flageerror, setflageerror] = useState(false);
  const [flage, setflage] = useState(false);
  const [formData, setFormData] = useState({

    email:'',
    password: '',
   
});
  const handleLogin = () => {
    setflageerror(true);
    // Implement your login logic here
    const userData={
      email:formData.email,
      password:formData.password
    };
    // console.log('Login submitted:', { username, password });
    axios.post('http://192.168.1.12:9000/signin',userData)
    .then( res =>{ 
      res.data? <Link className="nav__link" to="/Home"></Link>:setflage(true);
     

    // <Text style={styles.passwordMatchMessage}>Passwords do not match.</Text>
    }
    )
    .catch( e =>{console.log(e);
    // console.log(flage);
  });
    
    // Here you would typically include a call to your API for the login
  };
  return (
    <>
     
     <header className="header" id="header">
        <nav className="nav container" style={{marginRight:'90px'}}>
          <a href="/Home1" className="nav__logo">
            <img src={home_img} alt="Logo" style={{ margin: '0px', borderRadius: '50%', width: '90px', height: '90px',marginRight:'10px' }} />
            <span className="nav__logo-text">Cach Bblash</span>
            
          </a>

          <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list" style={{marginRight:'-70px',marginTop:'-55px'}}>
            <li className="nav__item"><a href="#" className="nav__link">Contact Us</a></li>
            {/* <li className="nav__item"><a href="#" className="nav__link">About Us</a></li> */}

    
              <li className="nav__item">
              <a href="#" className="nav__link">Bedrooms</a>
              
              <ul className="dropdown">
      <li><Link className="nav__link" to="/BedRoomsLarge">Full Bedrooms</Link></li>
      <li><a href="#" className="nav__link">Kids Bedrooms</a></li>
      {/* <li><a href="#" className="nav__link">King Bedrooms</a></li> */}
    </ul>
  </li>
              
           
              <li className="nav__item"><a href="#" className="nav__link">Tables</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Setting Rooms</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Electronics</a></li>
              <li className="nav__item"><Link className="nav__link" to="/Decore">Design</Link>
              
              
              <ul className="dropdown">
      <li><Link className="nav__link" to="/Decore">Your own design</Link></li>
      <li><a href="#" className="nav__link">Existing desgins</a></li>
      {/* <li><a href="#" className="nav__link">King Bedrooms</a></li> */}
    </ul>
    </li>
              <li className="nav__item"><a href="#" className="nav__link">Offers</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Videos</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Cart🛒</a></li>
              {/* <li className="nav__item"><a href="#" className="nav__link">Videos</a></li> */}
              <div className="nav__actions">
            <i className="ri-search-line nav__search" id="search-btn" onClick={() => setShowSearch(true)}></i>
            <i className="ri-user-line nav__login" id="login-btn" onClick={() => setShowLogin(true)}></i>
            <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(true)}>
              <i className="ri-menu-line"></i>
            </div>
          </div>

              {/* <li className="nav__item"><a href="#" className="nav__link">About Us</a></li> */}
            </ul>

            <div className="nav__close" id="nav-close" onClick={() => setShowMenu(false)}>
              <i className="ri-close-line"></i>
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
              <input
               type="email" 
              placeholder="Write your email" 
              id="email"
              className="login__input" 
              // value={formData.email}
              onChange={handleLogin}


              />

     {/* {formData.email==='' &&flageerror&&<p className='errormsg'>Email is required.</p>} */}



            </div>
            <div>
              <label htmlFor="password" className="login__label">Password</label>
              <input
               type="password"
                placeholder="Enter your password" 
                id="password" 
                className="login__input"
                // value={formData.password}
                onChange={handleLogin} 

                />
  {/* {formData.password==='' &&flageerror&&<p className='errormsg'>Password is required.</p>} */}

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

  
<div>
</div>
   
    </>
  );
}

export default Top;
