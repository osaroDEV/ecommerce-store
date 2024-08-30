'use client';

import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';
import Slider from './components/Slider';
import { useEffect } from 'react';
import { useWixClient } from './hooks/useWixClient';

const HomePage = () => {
  const wixClient = useWixClient();

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res);
    };
    getProducts();
  }, [wixClient]);

  return (
    <div className=''>
      <h1 className='font-bold'>
        <Slider />
        <div className='mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
          <h1 className='text-2xl'>Featured Products</h1>
          <ProductList />
        </div>
        <div className='mt-24'>
          <h1 className='text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12footer'>
            Categories
          </h1>
          <CategoryList />
        </div>
        <div className='mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
          <h1 className='text-2xl'>New Products</h1>
          <ProductList />
        </div>
      </h1>
    </div>
  );
};

export default HomePage;
