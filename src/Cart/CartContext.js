import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartItems, setCartItems] = useState([]);
const addToCart = (productToAdd) => {
  setCartItems((currentItems) => {
    const itemIndex = currentItems.findIndex((item) => item._id === productToAdd._id);
    if (itemIndex > -1) {
      const newItems = [...currentItems];
      newItems[itemIndex] = {
        ...newItems[itemIndex],
        quantity: newItems[itemIndex].quantity + 1,
      };
      return newItems;
    } else {
      return [...currentItems, {...productToAdd, quantity: 1}]; // Initialize with quantity 1
    }
  });
};

const updateQuantity = (productId, quantity) => {
    setCartItems(prevItems => prevItems.map(item => item._id === productId ? {...item, quantity} : item));
};


const removeItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
};


    // return (
    //     <CartContext.Provider value={{cartItems, addToCart, updateQuantity, removeItem }}>
    //         {children}
    //     </CartContext.Provider>
    // );
    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
    };



export const useCart = () => useContext(CartContext);
