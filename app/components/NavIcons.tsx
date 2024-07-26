'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CgProfile, CgShoppingCart } from 'react-icons/cg';
import { GrNotification } from 'react-icons/gr';
import { useRouter } from 'next/navigation';
import CartModal from './CartModal';

const NavIcons = () => {
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [isNotifActive, setIsNotifActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);

  const router = useRouter();

  const isLoggedIn = true;
  // const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setIsProfileActive((prev) => !prev);
    }
  };

  const handleCartClick = () => {
    setIsCartActive((prev) => !prev);
  };

  return (
    <div className='flex items-center gap-4 relative'>
      <CgProfile
        className='text-xl md:text-2xl cursor-pointer'
        onClick={handleProfile}
      />
      {isProfileActive && (
        <div className='absolute top-12 rounded-md left-0 p-4 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10'>
          <Link href='/'>Profile</Link>
          <div className='mt-2 cursor-pointer'>Logout</div>
        </div>
      )}
      <GrNotification className='text-xl md:text-2xl cursor-pointer' />
      <div className='cursor-pointer relative'>
        <CgShoppingCart
          className='text-xl md:text-2xl cursor-pointer'
          onClick={handleCartClick}
        />
        <div className='absolute -top-4 -right-4 w-6 h-6 bg-banner text-white rounded-full flex justify-center items-center'>2</div>
      </div>
      {isCartActive && <CartModal />}
    </div>
  );
};

export default NavIcons;
