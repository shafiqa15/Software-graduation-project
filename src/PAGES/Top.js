import '/Users/shafiqaabdat/Downloads/client-main/src/home/home.css'; // Ensure this path is correct
import home_img from '/Users/shafiqaabdat/Downloads/client-main/src/images/cash_.webp'; // Ensure this path is correct
import axios from 'axios';
import '../PAGES/Top.css';
import { useEffect } from 'react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUp from '../signup/SignUp';
const Top = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  useEffect(() => {
    const handler = () => {
        console.log("Event!");
    };

    document.addEventListener("click", handler);

    // Cleanup function
    return () => {
        document.removeEventListener("click", handler);
    };
}, []); // Ensure dependencies are correctly listed



  const handleLogin = async (event) => {
    event.preventDefault();
    if (formData.email === 'shafiqa@gmail.com' && formData.password === '12345' ||formData.email === 's12027801@stu.najah.edu' ) {
      setIsAdmin(true); // Set admin state
      navigate('/Admin'); // Redirect to admin dashboard
    } else {
      const userData = {
        email: formData.email,
        password: formData.password
      };
      try {
        const response = await axios.post('http://192.168.88.5:9000/signin', userData);
        if (response.data) {
          navigate('/Home1'); // Redirect to admin dashboard
        } else {
          setLoginError(true);
        }
      } catch (error) {
        console.error(error);
        setLoginError(true);
      }
    }
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container" style={{marginRight:'90px'}}>
          <a href="/Home1" className="nav__logo">
            <img src={home_img} alt="Logo" style={{ margin: '0px', borderRadius: '50%', width: '90px', height: '90px', marginRight:'10px' }} />
            <span className="nav__logo-text" style={{fontSize:'14px'}}>Cach Bblash</span>
          </a>
          <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list" style={{marginRight:'-70px',marginTop:'-55px'}}>
            <li className="nav__item"><a href="/Contact" className="nav__link" >Contact </a></li>
            {/* <li className="nav__item"><a href="#" className="nav__link">About Us</a></li> */}

    
              <li className="nav__item">
              <a href="#" className="nav__link">Bedrooms</a>
              
              <ul className="dropdown">
      <li><Link className="nav__link" to="/BedRoomsLarge">Full Bedrooms</Link></li>
      <li><a href="/Kidsbedrooms" className="nav__link">Kids Bedrooms</a></li>
      {/* <li><a href="#" className="nav__link">King Bedrooms</a></li> */}
    </ul>
  </li>
              
           
              <li className="nav__item"><a href="#" className="nav__link">Tables</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Setting Rooms</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Electronics</a></li>
              <li className="nav__item"><Link className="nav__link" to="/Decore">Design</Link>
              
              
              <ul className="dropdown">
      <li><Link className="nav__link" to="/Decore">Your own design</Link></li>
      <li><a href="/Decore2" className="nav__link">Existing desgins</a></li>
      {/* <li><a href="#" className="nav__link">King Bedrooms</a></li> */}
    </ul>
    </li>
              <li className="nav__item"><a href="#" className="nav__link">Offers</a></li>
              <li className="nav__item"><a href="/ReelsPage" className="nav__link">Reels</a></li>
              <li className="nav__item"><a href="/Cart" className="nav__link">Cart🛒</a></li>
              <li className="nav__item"><a href="/favorites" className="nav__link" style={{marginLeft:'-30px'}}>♡</a></li>
              {/* <li className="nav__item"><a href="#" className="nav__link">Videos</a></li> */}
              {/* <a href="/favorites" className="nav__link">Bedrooms</a> */}

              <div className="nav__actions">
            <i className="ri-search-line nav__search" id="search-btn" onClick={() => setShowSearch(true)}></i>
            <i className="ri-user-line nav__login" id="login-btn" onClick={() => setShowLogin(true)}></i>


            <Link to="/NavigationBar">
                <i className="ri-account-circle-line nav__profile"></i>  {/* Profile icon */}
              </Link>

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
        <form action="" className="login__form" onSubmit={handleLogin}>
          <h2 className="login__title">Log In</h2>
          <div className="login__group">
            <div>
              <label htmlFor="email" className="login__label"><p style={{color:'black'}}>Email : </p></label>
              <input
               type="email" 
               name="email"
               placeholder="Write your email" 
               className="login__input"
               value={formData.email}
               onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="login__label" > <p style={{color:'black'}}>Password :</p> </label>
              <input
               type="password"
               name="password"
               placeholder="Enter your password" 
               className="login__input"
               value={formData.password}
               onChange={handleInputChange}
              />
            </div>
          </div>
    <p>Already have an account ? <a href='/SignUp'> signup</a></p> 
          <button type="submit" className="login__button" style={{justifyContent:'center',height:'50px'}}><p style={{color:'white',justifyContent:'center'}}> Log In</p></button>
          {loginError && <p className="error">Invalid email or password.</p>}
        </form>
        <i className="ri-close-line login__close" id="login-close" onClick={() => setShowLogin(false)}></i>
      </div>
    </>
  );
}

export default Top;
