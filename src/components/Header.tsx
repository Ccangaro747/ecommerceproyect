"use client"
import React, { useState } from 'react';
import Container from './Container';
import Logo from './Logo';
import { IoMdCart } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import Menu from './Menu';

const Header = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    return `$${total.toFixed(2)}`;
  };

  return (
    <div className='bg-bodyColor h-20'>
      <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
        <Logo />

        {/* Search Field */}
        <div className='md:w-full bg-white flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group'>
          <FiSearch className='text-gray-500 group-focus-within:text-darkText duration-200' />
          <input
            type='text'
            placeholder='Search for products'
            className='placeholder:text-sm flex-1 outline-none'
          />
        </div>

        {/* Login/Register - Solo visible en dispositivos mayores a 'md' */}
        <div className='hidden md:flex items-center gap-x-1 headerDiv'>
          <AiOutlineUser className='text-2xl' />
          <p className='text-sm font-semibold'>Login/Register</p>
        </div>

        {/* Cart button - Solo visible en dispositivos mayores a 'md' */}
        <div className='hidden md:flex bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative'>
          <IoMdCart className='text-xl' />
          <p className='text-sm font-semibold'>{calculateTotal()}</p>
          <span className='bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black '>
            {cart.length}
          </span>
        </div>

        {/* Desplegable */}
        <Menu />
      </Container>
    </div>
  );
};

export default Header;



