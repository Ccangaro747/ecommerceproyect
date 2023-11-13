"use client"
import menu from '../../assets/menu-deep.svg';
import Image from 'next/image';
import MenuList from './MenuList';
import { useState } from 'react';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="cursor-pointer"
        onClick={handleMenu}
      >
        <Image
          alt='Menu icon'
          src={menu}
          width={48}
          height={48}
        />
      </div>

      <MenuList open={open} setOpen={setOpen} />
    </>
  );
};

export default Menu;



