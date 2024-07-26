'use client';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <GiHamburgerMenu onClick={() => setIsMenuOpen((prev) => !prev)} />
      {isMenuOpen && (
        <nav className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 z-100 text-xl'>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Shop</Link>
          <Link href='/'>Deals</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>Logout</Link>
          <Link href='/'>Cart(1)</Link>
        </nav>
      )}
    </div>
  );
};

export default Menu;
