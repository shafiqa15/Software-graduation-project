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
import NavigationBar from './PAGES/NavigationBar.js';
import Admin from './Admin/Admin.js';
import Dashboard from './Admin/Dashboard.js';
import Threed from './Threed/Threed.js';
import ThreedComponent from './Threed/Threed.js';
import OfferPage from './Offers/OfferPage.js';
import OfferDetails from './Offers/OfferDetails.js';
import Three from './Admin/Three.js';
import Addoffer from './Admin/Addoffer.js';
import Sofa from './BedRoomsLarge/Sofa.js';
import Sofabed from './BedRoomsLarge/Sofabed.js';
import EmailRestAPI from './signup/EmailRestAPI.js';
// import AddAndShow3DAdmin from '/Users/shafiqaabdat/Downloads/client-main/src/Admin/Admin_convert3d.js';

import AddAndShow3DAdmin from './add_and_show_3d_admin';
 const App = () => {
  return (
    <CartProvider>
    <Router> 
      <div>
        <Routes>    
          <Route index element={<Home1/>}/>
          <Route path="/Home1" element={<Home1/>}/>
          <Route path="/Three" element={<Three/>}/>
          <Route path="/Sofa" element={<Sofa/>}/>
          <Route path="/Sofa" element={<Sofa/>}/>
          <Route path="/Addoffer" element={<Addoffer/>}/>
          <Route path="/EmailRestAPI" element={<EmailRestAPI/>}/>
          <Route path="/AddAndShow3DAdmin" element={<AddAndShow3DAdmin />}/>
          <Route path="/ThreedComponent" element={<ThreedComponent/>}/>
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
          {/* <Route path="/favorites" element={<FavoritesPage products={products} />} /> */}
          <Route path="/favorites" element={<FavoritesPage />} />

          <Route path="/ReelsPage" element={<ReelsPage/>} />
          <Route path="/Kidsbedrooms" element={<Kidsbedrooms />} />
          <Route path="/Visa" element={<Visa />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/NavigationBar" element={<NavigationBar />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          {/* <Route path="/product/:productId" element={<BedPage />} /> */}

          {/* <Route path="/" element={<BedRoomsLarge />} /> */}
        <Route path="/product/:productId" element={<BedPage />} />
        <Route path="/products/:productId" element={<Sofabed/>}/>
        {/* <Route path="/BedPage" element={<BedPage />} /> */}
        {/* <Route path="/product1/:productId" element={<Decore2 />} /> */}
        <Route path="/detailing" element={<Decore2 />} />

        <Route path="/OfferPage" element={<OfferPage />} />
        <Route path="/offer-details/:id" element={<OfferDetails />} />

          {/* <Route path="/" exact component={BedRoomsLarge} /> */}
           {/* <Route path="/product/:productId" component={BedPage} /> */}

        </Routes>
      </div>
    </Router>
    </CartProvider>

  );
}

export default App;
