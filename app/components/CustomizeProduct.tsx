'use client';

const colors = [
  { id: 0, bg: 'bg-black' },
  { id: 1, bg: 'bg-red-500' },
  { id: 2, bg: 'bg-orange-500' },
];

const CustomizeProduct = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className="font-medium">Choose a color</h1>
      <ul className='flex items-center gap-3'>
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500'>
          <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
        </li>
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-green-500'></li>
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-blue-500'><div className='absolute w-10 h-[0.2rem] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div></li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-banner text-banner rounded-md px-4 py-1 cursor-pointer ">Small</li>
        <li className="ring-1 ring-banner text-white bg-banner rounded-md text-sm px-4 py-1 cursor-pointer ">Medium</li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md px-4 py-1 cursor-not-allowed">Large</li>
      </ul>
    </div>
  );
};

export default CustomizeProduct;
