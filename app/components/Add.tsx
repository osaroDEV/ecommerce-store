'use client';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  // temporary
  const stock = 7

  const handleQuantity = (type: 'inc' | 'dec' ) => {
    if (type === 'dec' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
    if (type === 'inc' && quantity < stock) {
      setQuantity(prev => prev + 1)
    }

  }

  return (
    <div>
      <h4 className='font-medium mb-12'>Choose Quantity</h4>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row justify-between items-center gap-6'>
          <div className='bg-gray-100 px-4 py-2 rounded-3xl flex items-center justify-between w-32 select-none'>
            <FaMinus
              className='cursor-pointer text-xl'
              onClick={() => handleQuantity('dec')}
            />
            <span className='text-2xl'>{quantity}</span>
            <FaPlus
              className='cursor-pointer text-xl'
              onClick={() => handleQuantity('inc')}
            />
          </div>
          <h4 className='text-xs'>
            Only <span className='text-orange-500'>7 items</span> left!
            <br /> Don&apos;t miss it
          </h4>
        </div>
        <button className='w-36 text-sm rounded-3xl ring-1 ring-banner text-banner px-4 py-2 hover:bg-banner hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
