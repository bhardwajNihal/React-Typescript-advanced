import React from 'react'
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";



export const Navbar = () => {
  return (
    <div className='h-[8%] w-full flex justify-between items-center px-8'>
        
        <input type="text" className='rounded placeholder:pl-2 placeholder:bg-gray-200' placeholder='Search shoes...'/>

        <div className="options flex gap-4 text-2xl">
        <CiHeart className='hover:bg-gray-200 rounded cursor-pointer'/>
        <CiShoppingCart className='hover:bg-gray-200 rounded cursor-pointer'/>
        <CiUser className='hover:bg-gray-200 rounded cursor-pointer'/>

        </div>


    </div>
  )
}
