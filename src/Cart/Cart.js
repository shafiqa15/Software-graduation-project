// CartPage.js
import { useCart } from '../Cart/CartContext'; // Adjust the import path as necessary
import '/Users/shafiqaabdat/Downloads/client-main/src/Cart/Cart.css';
import Top from '../PAGES/Top';
import Top1 from './Top1';
import ConfirmModal from './ConfirmModal';
import Footer from '../footer/Footer';
import React, { useState } from 'react';
import ShoppingAssistance from './ShoppingAssistance';
import visaImage from '/Users/shafiqaabdat/Downloads/client-main/src/images/cash_.webp';

import cashImage from '/Users/shafiqaabdat/Downloads/client-main/src/images/cash_.webp';


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

  // Calculate the total for each item (price * quantity)
  const itemTotals = cartItems.map(item => item.price * item.quantity);

  // Calculate the overall total cost for the cart
  const cartTotal = itemTotals.reduce((acc, curr) => acc + curr, 0);
  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const paymentMethodsSection = (
    <div className="payment-methods">
      <h3>Payment Methods</h3>
      <img src={visaImage} alt="Visa" style={{width:'100px',height:'100px'}} />
      <img src={cashImage} alt="Cash" style={{width:'100px',height:'100px'}} />
    </div>
  );

  return (
    <div>
      <Top />
      <ShoppingAssistance />
      <div className="cart-header">
        <Top1 itemCount={totalItemCount} />
        <h1 style={{marginTop:'100px'}}>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div style={{marginLeft:'400px',width:'600px'}}>
            {cartItems.map((item, index) => (
              <div key={item.id} className="cart-item">
                <img className='photo' src={item.imageUrl} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: {item.price} ₪</p>
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
                <button 
                  className="button-remove" 
                  onClick={() => handleRemoveClick(item.id)}
                  style={{marginRight:'100px'}}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-total">Total Cart Value: {cartTotal.toFixed(2)} ₪</div>
          </div>
        )}
      </div>
      {paymentMethodsSection}
      <ConfirmModal 
        isOpen={isModalOpen} 
        onCancel={handleRemoveCancel} 
        onConfirm={handleRemoveConfirm}
      >
        Are you sure you want to remove this item from the cart?
      </ConfirmModal>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <Footer />
    </div>
  );
};

export default Cart;
