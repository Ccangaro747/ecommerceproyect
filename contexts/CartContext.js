"use client"
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item !== product));
  };

  const isInCart = (product) => {
    return cart.some((item) => item === product);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    return `$${total.toFixed(2)}`;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
