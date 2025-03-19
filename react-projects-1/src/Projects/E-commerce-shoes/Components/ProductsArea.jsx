import React from 'react'
import { ProductsCard } from './ProductsCard'

export const ProductsArea = () => {
  return (
    <div className='w-full h-[92%]' >

    <div className="heading w-full h-[12%]  px-8">
      <h2 className='font-medium'>Recommended</h2>
      <div>
        <button className='border border-gray-300 py-1 px-4 mr-1'>All Products</button>
        <button className='border border-gray-300 py-1 px-4 mr-1'>Nike</button>
        <button className='border border-gray-300 py-1 px-4 mr-1'>Adidas</button>
        <button className='border border-gray-300 py-1 px-4 mr-1'>Puma</button>
        <button className='border border-gray-300 py-1 px-4 mr-1'>Vans</button>
      </div>
    </div>

    <div className="cardsArea px-8 py-4 h-[88%] overflow-hidden overflow-y-auto flex flex-wrap gap-4 ">
    <ProductsCard/>
    </div>


    </div>
  )
}
