import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to update quantity
    const updateQuantity = (itemId, quantity) => {
        setCartItems(currentItems => currentItems.map(item =>
            item.id === itemId ? { ...item, quantity: quantity } : item
        ));
    };

    // Function to add an item to the cart
    const addToCart = (product) => {
        setCartItems(currentItems => {
            const itemExists = currentItems.find(item => item.id === product.id);
            if (itemExists) {
                return currentItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                );
            } else {
                return [...currentItems, product];
            }
        });
    };

    // Function to remove an item from the cart
    const removeItem = (itemId) => {
        setCartItems(currentItems => currentItems.filter(item => item.id !== itemId));
    };

    // The value object provided to the context consumers
    const value = { 
        cartItems, 
        updateQuantity, 
        addToCart, 
        removeItem
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
