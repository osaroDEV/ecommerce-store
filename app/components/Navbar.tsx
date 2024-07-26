import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import { PiLastfmLogoFill } from 'react-icons/pi';
import NavIcons from './NavIcons';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
      {/* mobile */}
      <div className='h-full flex items-center justify-between md:hidden'>
        <Link href='/'>
          <div className='text-2xl tracking-wide uppercase'>Sterilo</div>
        </Link>
        <Menu />
      </div>
      {/* larger screens */}
      <div className='hidden md:flex items-center justify-between h-full gap-8'>
        {/* left */}
        <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
          <Link href='/' className='flex gap-3 items-center'>
            <PiLastfmLogoFill className='text-[30px] md:text-[45px]' />
            <div className='text-2xl tracking-wide uppercase'>Sterilo</div>
          </Link>
          <div className='hidden md:flex gap-4'>
            <Link href='/'>Homepage</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
            <Link href='/'>Logout</Link>
            <Link href='/'>Cart(1)</Link>
          </div>
        </div>
        {/* right */}
        <div className='w-2/3 xl:w-1/2 flex justify-between items-center gap-8'>
          <Searchbar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
