import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { IoBagHandleOutline } from "react-icons/io5";


export const ProductsCard = ({image,title,star,prevPrice,newPrice}) => {
  
  return (
    <div className='border border-gray-300 h-56 w-48 rounded-xl p-2'>

      <div className="image-part h-1/2 w-full hover:scale-150 duration-200">
        <img className='rounded-lg h-full w-full object-cover hover:object-contain' src={image} alt="" />
      </div>

      <div className="details-part">

        <div className="title font-semibold my-2">{title}</div>
        <div className="rating flex items-center  text-sm">
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <h2 className="ml-2 text-xs">{star}</h2>
        </div>

        <div className='flex justify-between pr-4 mt-2 items-center '>
          <div className="price">$<del>{prevPrice}</del> {newPrice}</div>
          <div className="bag hover:bg-gray-800 rounded p-1 cursor-pointer"><IoBagHandleOutline /></div>
        </div>

      </div>
    </div>

  )
}
