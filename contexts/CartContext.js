"use client"
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!product || !product.price || typeof product.price !== 'number') {
      console.error("Producto inválido o precio no numérico:", product);
      return;
    }

    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item !== product));
  };

  const isInCart = (product) => {
    return cart.some((item) => item === product);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, product) => {
      return acc + product.price;
    }, 0);

    return `$${total.toFixed(2)}`;
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    isInCart,
    calculateTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};



