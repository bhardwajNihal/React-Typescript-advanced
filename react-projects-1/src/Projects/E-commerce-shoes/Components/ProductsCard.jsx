import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { IoBagHandleOutline } from "react-icons/io5";

export const ProductsCard = () => {
  

  return (
    <div className='border border-gray-300 h-56 w-48 rounded-xl p-2'>

      <div className="image-part h-1/2 w-full">
        <img className='object-cover' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="" />
      </div>

      <div className="details-part">

        <div className="title font-semibold my-2">Nike Air Monarch IV</div>
        <div className="rating flex items-center  text-sm">
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <h2 className="ml-2 text-xs">4</h2>
        </div>

        <div className='flex justify-between pr-4 mt-2 items-center '>
          <div className="price">$<del>140</del> 200</div>
          <div className="bag hover:bg-gray-200 rounded p-1 cursor-pointer"><IoBagHandleOutline /></div>
        </div>

      </div>
    </div>

  )
}
