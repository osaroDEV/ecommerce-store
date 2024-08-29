'use client';
import { useState } from 'react';
import Image from 'next/image';

const images = [
  {
    id: 0,
    url: 'https://images.pexels.com/photos/37158/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 1,
    url: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/59720/pexels-photo-59720.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/106144/rubber-duck-bath-duck-toys-costume-106144.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const ProductImages = () => {
  const [main, setMain] = useState(0);

  return (
    <div className=''>
      <div className='h-[500px] relative'>
        <Image
          src={images[main].url}
          fill
          sizes='50vw'
          className='object-cover rounded-md'
          alt=''
        />
      </div>
      <div className=''>
        <div className='flex flex-col md:flex-row gap-6'>
          {images.map((img, index) => (
            <div key={img.id} className='w-1/4 h-32 relative gap-4 mt-8'>
              <Image
                src={img.url}
                alt=''
                fill
                sizes='30vw'
                className='object-cover rounded-md cursor-pointer'
                onClick={() => setMain(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
