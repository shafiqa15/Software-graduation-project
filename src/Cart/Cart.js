// CartPage.js
import { useCart } from '../Cart/CartContext'; // Adjust the import path as necessary
import '/Users/shafiqaabdat/Downloads/client-main/src/Cart/Cart.css';
import Top from '../PAGES/Top';
import Top1 from './Top1';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useLocation } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';
import Footer from '../footer/Footer';
import React, { useState } from 'react';
import ShoppingAssistance from './ShoppingAssistance';
import visaImage from '../Cart/webimage-ED81074F-347A-430E-AC7CC0A3429D9570.jpg';
import StripeContainer from './StripeContainer';
import cashImage from '/Users/shafiqaabdat/Downloads/client-main/src/images/cash_.webp';

import Test from '../decore/Test';
const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleQuantityChange = (itemId, quantity) => {
    updateQuantity(itemId, quantity);
  };

  const handleRemoveClick = (itemId) => {
    setSelectedItemId(itemId);
    setModalOpen(true);
  };

  const handleRemoveConfirm = () => {
    removeItem(selectedItemId);
    setModalOpen(false);
  };

  const handleRemoveCancel = () => {
    setModalOpen(false);
  };
  const navigate = useNavigate(); // Create the navigate function

  const onVisaClick = () => {
    setShowItem(true);  // This will trigger the component to re-render and show StripeContainer

  };
  const location = useLocation();
    const { userId, email, name, password, phone, address, location: userLocation } = location.state || {};
    const [userInfo, setUserInfo] = useState({ email, name, password, phone, address, location: userLocation });
    const handleChange = (e) => {
      setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Calculate the total for each item (price * quantity)
  const itemTotals = cartItems.map(item => item.price * item.quantity);

  // Calculate the overall total cost for the cart
  const cartTotal = itemTotals.reduce((acc, curr) => acc + curr, 0);
  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const paymentMethodsSection = (
    <div className="payment-methods">
      <h3>Payment Methods</h3>
      <img src={visaImage} alt="Visa" style={{width:'70px',height:'50px',marginLeft:'10px'}} onClick={onVisaClick} />
      {/* <img src={cashImage} alt="Cash" style={{width:'70px',height:'50px'}} /> */}
    </div>
  );
      const [showItem, setShowItem] = useState(false);
    // const amount = 100000; // Amount in cents for Stripe (₪15.00)
    const amount = itemTotals+"00";


  return (
    <div>
      <Top />
      
      <ShoppingAssistance />
      {/* <Test width={300} height={10} top={100} left={100} /> */}
      {/* <p>{name}'s Profile</p> */}

      <div className="cart-header">
        <Top1 itemCount={totalItemCount} />
        <h1 style={{marginTop:'100px',marginRight:'20px'}}>Your Cart</h1>
        {cartItems.map((item, index)  => (
  <div key={item.id} className="cart-item" style={{width:'800px',marginLeft:'300px'}}>
    <img className='photo' src={item.imageUrl} alt={item.name} />
    <div className="item-details">
      <h3>{item.name} {item.details ? `(Detailed)` : ''}</h3>
      <p>Price: {item.price} ₪</p>
      {item.dimensions && (
        <>
          <p>Bed Dimensions: {item.dimensions.img1.width}cm x {item.dimensions.img1.height}cm x {item.dimensions.img1.depth}cm</p>
          <p>Comedenas Dimensions: {item.dimensions.comedena1.width}cm x {item.dimensions.comedena1.height}cm x {item.dimensions.comedena1.depth}cm</p>
          <p>Mirror Dimensions: {item.dimensions.mirror.width}cm x {item.dimensions.mirror.height}cm x {item.dimensions.mirror.depth}cm</p>
          <p>Khzana Dimensions: {item.dimensions.khzana.width}cm x {item.dimensions.khzana.height}cm x {item.dimensions.khzana.depth}cm</p>
          <p>Follow Dimensions: {item.dimensions.folo.width}cm x {item.dimensions.folo.height}cm x {item.dimensions.folo.depth}cm</p>
        </>
      )}
      <p>
        Quantity: 
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
          min="1"
        />
      </p>
      <p>Total: {itemTotals[index].toFixed(2)} ₪</p>
    </div>
    <button className="button-remove" onClick={() => handleRemoveClick(item.id)}>
      Remove
    </button>
  </div>
))}







            <div className="cart-total">Total Cart Value: {cartTotal.toFixed(2)} ₪</div>
        
      </div>
      {paymentMethodsSection}
      <ConfirmModal 
        isOpen={isModalOpen} 
        onCancel={handleRemoveCancel} 
        onConfirm={handleRemoveConfirm}
      >
        Are you sure you want to remove this item from the cart?
      </ConfirmModal>
      <br/>
      {showItem ? (
                <StripeContainer amount={amount} />
            ) : (
                <>
                    {/* <h3>{amount}</h3> */}
                    {/* <img src={spatula} alt='Spatula' /> */}
                    <br/>
                    {/* <button onClick={() => setShowItem(true)}>Purchase Spatula</button> */}
                </>
            )}
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <Footer />
    </div>
  );
};

export default Cart;
