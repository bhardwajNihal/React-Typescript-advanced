import React, { useState } from 'react'
import Products from '../db/data'

export const Recommended = ({setProducts}) => {

    function filterProducts(brand){

        const filteredProducts = Products.filter(p => p.company==brand)

        setProducts(filteredProducts)
    }

  return (
    <div className="heading w-full h-[12%]  px-8">
      <h2 className='font-medium'>Recommended</h2>
      <div>
        <button 
        onClick={()=> setProducts(Products)}
        className='border border-gray-400 hover:bg-gray-800 cursor-pointer py-1 px-4 mr-1'>All Products</button>
        <button 
        onClick={()=> filterProducts("Nike")}
        className='border border-gray-400 hover:bg-gray-800 cursor-pointer py-1 px-4 mr-1'>Nike</button>
        <button 
        onClick={()=> filterProducts("Adidas")}
        className='border border-gray-400 hover:bg-gray-800 cursor-pointer py-1 px-4 mr-1'>Adidas</button>
        <button 
        onClick={()=> filterProducts("Puma")}
        className='border border-gray-400 hover:bg-gray-800 cursor-pointer py-1 px-4 mr-1'>Puma</button>
        <button 
        onClick={()=> filterProducts("Vans")}
        className='border border-gray-400 hover:bg-gray-800 cursor-pointer py-1 px-4 mr-1'>Vans</button>
      </div>
    </div>
  )
}
