import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { RadioLabel } from './radioInput';
import Products from '../db/data';


export const Sidebar = ({ setProducts }) => {

  const [filteredProducts, setFilteredProducts] = useState()

  function handleCategory(category) {
    if (category == "All") {
      setProducts(Products)
      return
    }
    setFilteredProducts(Products.filter(p => p.category == category))
    if (filteredProducts) setProducts(filteredProducts)
  }

  function handlePrice(price) {
      if(price=='All'){
        setProducts(Products)
        return;
      }

      setFilteredProducts(Products.filter(p => p.newPrice == price))
      if (filteredProducts) setProducts(filteredProducts)
  }


  function handleColor(color) {
    if (color == "All") {
      setProducts(Products)
      return
    }
    setFilteredProducts(Products.filter(p => p.color == color))
    if (filteredProducts) setProducts(filteredProducts)
  }


  return (
    <div className='h-full w-full border border-l-gray-400 p-2  md:p-6 md:pl-12'>

      <div className="logo text-3xl flex items-center gap-1 mb-8">
        <FaCartShopping />
        <h1 className='text-xl font-semibold'>ShopIt</h1>
      </div>


      <div className='flex flex-col gap-4'>
        <div className="category flex flex-col text-sm">
          <h2 className='font-bold mb-1'>Categories</h2>
          <div onClick={() => handleCategory('All')}><RadioLabel name='category' title='All' /></div>
          <div onClick={() => handleCategory('sneakers')}><RadioLabel name='category' title='Sneakers' /></div>
          <div onClick={() => handleCategory('flats')}><RadioLabel name='category' title='Flats' /></div>
          <div onClick={() => handleCategory('sandals')}><RadioLabel name='category' title='Sandals' /></div>
          <div onClick={() => handleCategory('heels')}><RadioLabel name='category' title='Heels' /></div>
        </div>

        <div className="price flex flex-col text-sm">
          <h2 className='font-bold mb-1'>Prices</h2>
          <div onClick={()=>handlePrice('All')}><RadioLabel name='price' title='All' /></div>
          <div onClick={()=>handlePrice(50)}><RadioLabel name='price' title='$ 0-50' /></div>
          <div onClick={()=>handlePrice(100)}><RadioLabel name='price' title='$ 51-100' /></div>
          <div onClick={()=>handlePrice(200)}><RadioLabel name='price' title='$ 100-200' /></div>
          <div onClick={()=>handlePrice(200)}><RadioLabel name='price' title='$ Over 200' /></div>
        </div>

        <div className="color flex flex-col text-sm">
          <h2 className='font-bold mb-1'>Colors</h2>
          <div onClick={()=>handleColor('All')}><RadioLabel name='color' title='All' /></div>
          <div onClick={()=>handleColor('black')}><RadioLabel name='color' title='Black' /></div>
          <div onClick={()=>handleColor('blue')}><RadioLabel name='color' title='Blue' /></div>
          <div onClick={()=>handleColor('red')}><RadioLabel name='color' title='Red' /></div>
          <div onClick={()=>handleColor('green')}><RadioLabel name='color' title='Green' /></div>
          <div onClick={()=>handleColor('white')}><RadioLabel name='color' title='White' /></div>
        </div>
      </div>

    </div>
  )
}
