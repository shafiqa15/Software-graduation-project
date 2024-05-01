import React, { useState,Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '/Users/shafiqaabdat/Downloads/client-main/src/App.css';
import Home1 from './home/Home1.js';
import Slider from './slider/Slider.js';
import Footer from './footer/Footer.js';
import Design from './design/Design.js';
import SignUp from './signup/SignUp.js';
import Service from '/Users/shafiqaabdat/Downloads/client-main/src/services/Service.js';
import Trending from './home/Trending/Trending.js';
import ProductCard from './home/Trending/ProductCard.js';
import BedRoomsLarge from './BedRoomsLarge/BedRoomsLarge.js';
import ImageUpload from './IMAGE/ImageUpload.js';
import BedPage from './BedRoomsLarge/BedPage.js';
import Admin_convert3d from './Admin/Admin_convert3d.js';
import Decore from './decore/Decore.js';
import Guide from './decore/Guide.js';
import ReelsPage from './Reels/ReelsPage.js';
import Cart from './Cart/Cart.js';
import { CartProvider } from './Cart/CartContext.js';
import Contact from '/Users/shafiqaabdat/Downloads/client-main/src/Contactus/Contact.js';
import FavoritesPage from './Fav/FavoritesPage.js';
import { products } from './BedRoomsLarge/BedRoomsLarge.js'; 
import Chat_io from './Chat_io.js';
import Decore2 from './decore/Decore2.js';
import Kidsbedrooms from './Kidsbedrooms/Kidsbedrooms.js';
import Visa from './Cart/Visa.js';
const App = () => {
  return (
    <CartProvider>
    <Router> 
      <div>
        <Routes>    
          <Route index element={<Decore2/>}/>
          <Route path="/Home1" element={<Home1/>}/>
          <Route path="/Admin_convert3d" element={<Admin_convert3d/>}/>
          <Route path="/Chat_io" element={<Chat_io/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Slider" element={<Slider/>}/> 
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Footer" element={<Footer/>}/>
          <Route path='/Design' element={<Design/>}/> 
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Trending' element={<Trending/>}/>
          <Route path='/ProductCard' element={<ProductCard/>}/>
          <Route path='/BedRoomsLarge' element={<BedRoomsLarge/>}/>
          <Route path='/ImageUpload' element={<ImageUpload/>}/>
          <Route path="/product/:id" element={<BedPage />} /> 
          <Route path="/bedpage/:id" element={<BedPage />} />
          <Route path="/Decore" element={<Decore/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/CartProvider" element={<CartProvider/>} />
          <Route path="/Guide" element={<Guide/>} />
          <Route path="/favorites" element={<FavoritesPage products={products} />} />
          <Route path="/ReelsPage" element={<ReelsPage/>} />
          <Route path="/Decore2" element={<Decore2 />} />
          <Route path="/Kidsbedrooms" element={<Kidsbedrooms />} />
          <Route path="/Visa" element={<Visa />} />


        </Routes>
      </div>
    </Router>
    </CartProvider>

  );
}

export default App;

