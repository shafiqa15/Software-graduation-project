// import React, { useState } from 'react';
// import '/Users/shafiqaabdat/Downloads/client-main/src/home/home.css'; // Ensure this path is correct
// import home_img from '/Users/shafiqaabdat/Downloads/client-main/src/images/cash_.webp'; // Ensure this path is correct
// import { Link } from 'react-router-dom';

// const Top = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
//       <header className="header" id="header">
//         <nav className="nav container">
//           <a href="#" className="nav__logo">
//             <img
//               src={home_img}
//               alt="Logo"
//               style={{
//                 margin: '0px',
//                 borderRadius: '50%',
//                 width: '105px',
//                 height: '105px',
//               }}
//             />
//             <span className="nav__logo-text">Cach Bblash</span>
//           </a>

//           <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
//             <ul className="nav__list">
//               <li className="nav__item">
//                 <Link className="nav__link" to="/SignUp">Home</Link>
//               </li>
//               <li className="nav__item"><a href="#" className="nav__link">About Us</a></li>
//               <li className="nav__item"><a href="#" className="nav__link">Services</a></li>
//               <li className="nav__item"><a href="#" className="nav__link">Featured</a></li>
//               <li className="nav__item"><a href="#" className="nav__link">Contact Us</a></li>
//             </ul>

//             <div className="nav__close" id="nav-close" onClick={() => setShowMenu(false)}>
//               <i className="ri-close-line"></i>
//             </div>
//           </div>

//           <div className="nav__actions">
//             <i className="ri-search-line nav__search" id="search-btn" onClick={() => setShowSearch(true)}></i>
//             <i className="ri-user-line nav__login" id="login-btn" onClick={() => setShowLogin(true)}></i>
//             <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(true)}>
//               <i className="ri-menu-line"></i>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <div className={`search ${showSearch ? 'show-search' : ''}`} id="search">
//         <form action="" className="search__form">
//           <i className="ri-search-line search__icon"></i>
//           <input type="search" placeholder="What are you looking for?" className="search__input" />
//         </form>
//         <i className="ri-close-line search__close" id="search-close" onClick={() => setShowSearch(false)}></i>
//       </div>

//       <div className={`login ${showLogin ? 'show-login' : ''}`} id="login">
//         <form action="" className="login__form">
//           <h2 className="login__title">Log In</h2>
//           <div className="login__group">
//             <div>
//               <label htmlFor="email" className="login__label">Email</label>
//               <input type="email" placeholder="Write your email" id="email" className="login__input" />
//             </div>
//             <div>
//               <label htmlFor="password" className="login__label">Password</label>
//               <input type="password" placeholder="Enter your password" id="password" className="login__input" />
//             </div>
//           </div>

//           <div>
//             <p className="login__signup">
//               You do not have an account? <a href="/signup">Sign up</a>
//             </p>
//             <a href="#" className="login__forgot">Forgot your password?</a>
//             <button type="submit" className="login__button">Log In</button>
//           </div>
//         </form>
//         <i className="ri-close-line login__close" id="login-close" onClick={() => setShowLogin(false)}></i>
//       </div>

   
//     </>
//   );
// }

// export default Top;
