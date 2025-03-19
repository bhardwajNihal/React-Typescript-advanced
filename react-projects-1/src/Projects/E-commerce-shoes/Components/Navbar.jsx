
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Products from '../db/data';


export const Navbar = ({setProducts}) => {

function handleChange(e){

  const filter = Products.filter(p => p.title.startsWith(e.target.value));

  setProducts(filter)

}


  return (
    <div className='h-[8%] w-full flex justify-between  gap-4 items-center px-8'>
        
        <input onChange={handleChange} type="text" className='rounded placeholder:pl-2 bg-gray-800 p-1 w-96' placeholder='Search shoes...'/>

        <div className="options flex gap-4 text-2xl">
        <CiHeart className='hover:bg-gray-800 rounded cursor-pointer'/>
        <CiShoppingCart className='hover:bg-gray-800 rounded cursor-pointer'/>
        <CiUser className='hover:bg-gray-800 rounded cursor-pointer'/>

        </div>


    </div>
  )
}
