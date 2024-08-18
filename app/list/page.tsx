import React from 'react'
import Image from 'next/image'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'

const ListPage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
      {/* campaign */}
      <div className='hidden bg-pink-50 px-4 sm:flex justify-between h-64'>
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
        <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grab up to 30% off on Selected Products</h1>
        <button className='rounded-3xl bg-banner text-white w-max px-5 py-3 text-sm'>Buy Now</button>
        </div>
        <div className="relative w-1/3">
          <Image src='/woman.png' alt='' fill className='object-contain' />
        </div>
      </div>
      {/* filter */}
      <Filter />
      {/* products */}
      <h1 className='mt-12 text-xl font-semibold'>Blouses for You!</h1>
      <ProductList />
    </div>
  )
}

export default ListPage