// CartPage.js
import React from 'react';
import { useCart } from '../Cart/CartContext'; // Adjust the import path as necessary
import '/Users/shafiqaabdat/Downloads/client-main/src/Cart/Cart.css';
const Cart = () => {
    const { cartItems, updateQuantity, removeItem } = useCart();

    const handleQuantityChange = (itemId, quantity) => {
        updateQuantity(itemId, quantity);
    };

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    // Calculate the total for each item (price * quantity)
    const itemTotals = cartItems.map(item => item.price * item.quantity);

    // Calculate the overall total cost for the cart
    const cartTotal = itemTotals.reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="cart-container">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            <div>
                {cartItems.map((item, index) => (
                    <div key={item.id} className="cart-item">
                        <img className='photo' src={item.imageUrl} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>
                                Quantity: 
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    min="1"
                                />
                            </p>
                            <p>Total: ${itemTotals[index].toFixed(2)}</p>
                            <button className="button-remove" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
                <div className="cart-total">Total Cart Value: ${cartTotal.toFixed(2)}</div>
            </div>
        )}
    </div>
    
    );
};

export default Cart;
