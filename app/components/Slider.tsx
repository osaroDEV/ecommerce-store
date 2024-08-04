'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const slidesData = [
  {
    id: 0,
    title: 'Harmattan Sale Collections!',
    description: 'Sale! Up to 30% off',
    img: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '/',
    bg: 'bg-gradient-to-br from-purple-500 to-pink-500 h-32',
  },
  {
    id: 1,
    title: 'Sunny Sale Collections!',
    description: 'Bonanza! Up to 70% off',
    img: 'https://images.pexels.com/photos/210662/pexels-photo-210662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-500 to-transparent via-yellow-500 bg-gradient-to-b from-yellow-500 to-transparent via-yellow-500 h-32',
  },
  {
    id: 2,
    title: 'Rainy Sale Collections!',
    description: 'Offer! 10% off',
    img: 'https://images.pexels.com/photos/45056/pexels-photo-45056.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: '/',
    bg: 'bg-gradient-to-br from-purple-500 to-pink-500 h-32',
  },
  {
    id: 3,
    title: 'Dry Sale Collections!',
    description: 'Bonus! Up to 40% off',
    img: 'https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-500 to-green-500 h-32',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
      <div
        className='w-max h-full flex transition-all ease-in-out duration-700'
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slidesData.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 lg:flex-row`}
            key={slide.id}
          >
            {/* text */}
            <div className='h-1/2 lg:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
              <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>
                {slide.description}
              </h2>
              <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className='rounded-md bg-black text-white px-4 py-3'>
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* image */}
            <div className='h-1/2 lg:w-1/2 lg:h-full relative'>
              <Image
                src={slide.img}
                alt=''
                fill
                sizes='100%'
                className='object-cover'
              />
            </div>
          </div>
        ))}
      </div>
      <div className='absolute m-auto left-1/2 flex bottom-8 gap-4'>
        {slidesData.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? 'scale-150' : ''
            } `}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className='w-[6px] h-[6px] bg-gray-600 rounded-full'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
