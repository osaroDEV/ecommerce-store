import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductList = () => {
  return (
    <div className='mt-12 mb-12 flex gap-x-8 gap-y-16 flex-wrap justify-between'>
      <Link href='tba' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/45056/pexels-photo-45056.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md hover:opacity-0 z-10 transition-opacity duration-300 ease-in-out'
          />
          <Image
            src='https://images.pexels.com/photos/210662/pexels-photo-210662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name:</span>
          <span className='font-semibold'>$34</span>
        </div>
        <p className='text-sm text-gray-500'>My description</p>
        <button className='rounded-2xl ring-1 ring-banner text-banner w-max px-4 py-2 text-xs hover:bg-banner hover:text-white'>Add to Cart</button>
      </Link>
      <Link href='tba' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/45056/pexels-photo-45056.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md hover:opacity-0 z-10 transition-opacity duration-300 ease-in-out'
          />
          <Image
            src='https://images.pexels.com/photos/210662/pexels-photo-210662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name:</span>
          <span className='font-semibold'>$34</span>
        </div>
        <p className='text-sm text-gray-500'>My description</p>
        <button className='rounded-2xl ring-1 ring-banner text-banner w-max px-4 py-2 text-xs hover:bg-banner hover:text-white'>Add to Cart</button>
      </Link>
      <Link href='tba' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/45056/pexels-photo-45056.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md hover:opacity-0 z-10 transition-opacity duration-300 ease-in-out'
          />
          <Image
            src='https://images.pexels.com/photos/210662/pexels-photo-210662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name:</span>
          <span className='font-semibold'>$34</span>
        </div>
        <p className='text-sm text-gray-500'>My description</p>
        <button className='rounded-2xl ring-1 ring-banner text-banner w-max px-4 py-2 text-xs hover:bg-banner hover:text-white'>Add to Cart</button>
      </Link>
      <Link href='tba' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/45056/pexels-photo-45056.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md hover:opacity-0 z-10 transition-opacity duration-300 ease-in-out'
          />
          <Image
            src='https://images.pexels.com/photos/210662/pexels-photo-210662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name:</span>
          <span className='font-semibold'>$34</span>
        </div>
        <p className='text-sm text-gray-500'>My description</p>
        <button className='rounded-2xl ring-1 ring-banner text-banner w-max px-4 py-2 text-xs hover:bg-banner hover:text-white'>Add to Cart</button>
      </Link>
    </div>
  );
}; 

export default ProductList;
