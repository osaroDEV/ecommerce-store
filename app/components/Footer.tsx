import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaCcDiscover,
  FaCcPaypal,
  FaCcMastercard,
  FaCcVisa,
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='px-4 py-24 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mb-24'>
      {/* top */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* left */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href='/'>
            <div className='text-2xl tracking-wide uppercase'>Sterilo</div>
          </Link>
          <p>
            745 Nottingham Express Way, Point Plaza, Creekbrook, LA 34987,
            United Kingdom
          </p>
          <span className='font-semibold'>admin@code.com</span>
          <span className='font-semibold'>+234 568 469</span>
          <div className='flex gap-6'>
            <FaFacebookF className='text-2xl' />
            <FaInstagram className='text-2xl' />
            <FaPinterestP className='text-2xl' />
            <FaYoutube className='text-2xl' />
            <FaXTwitter className='text-2xl' />
          </div>
        </div>
        {/* center */}
        <div className='hidden lg:flex justify-between w-2/4'>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>COMPANY</h1>
            <div className='flex flex-col gap-6'>
              <Link href=''>About Us</Link>
              <Link href=''>Careers</Link>
              <Link href=''>Affiliates</Link>
              <Link href=''>Blog</Link>
              <Link href=''>Contact Us</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>SHOP</h1>
            <div className='flex flex-col gap-6'>
              <Link href=''>New Arrivals</Link>
              <Link href=''>Assessories</Link>
              <Link href=''>Men</Link>
              <Link href=''>Women</Link>
              <Link href=''>All Products</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>HELP</h1>
            <div className='flex flex-col gap-6'>
              <Link href=''>Customer Service</Link>
              <Link href=''>My Account</Link>
              <Link href=''>Find a Store</Link>
              <Link href=''>Legal & Privacy</Link>
              <Link href=''>Contact Us</Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>Be the first to get the latest trends</p>
          <div className='flex'>
            <input
              type='text'
              placeholder='email address'
              className='p-4 w-3/4'
            />
            <button className='w-1/4 bg-banner text-white'>JOIN</button>
          </div>
          <span className='font-semibold'>Secure Payments</span>
          <div className='flex justify-between'>
            <FaCcDiscover className='text-2xl' />
            <FaCcPaypal className='text-2xl' />
            <FaCcMastercard className='text-2xl' />
            <FaCcVisa className='text-2xl' />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
        <div className="">&copy; 2024 Sterilo Shop</div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="">
            <span className='text-gray-500 mr-4'>Language</span>
            <span className='font-medium'>United Kingdom | English</span>
          </div>
          <div className="">
            <span className='text-gray-500 mr-4'>Currency</span>
            <span className='font-medium'>$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
