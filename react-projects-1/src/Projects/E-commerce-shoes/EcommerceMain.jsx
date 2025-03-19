
import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar'
import { ProductsArea } from './Components/ProductsArea'
import Products from './db/data'
import { useState } from 'react'


export const EcommerceMain = () => {

    const [products,setProducts] = useState(Products);

    return (
        <div className='flex h-screen'>

            <div className='w-[20%]'>
                <Sidebar setProducts={setProducts} />
            </div>
            <div className='w-[80%]'>
                <Navbar setProducts={setProducts} />
                <ProductsArea products={products} setProducts={setProducts}/>
            </div>

        </div>
    )
}
