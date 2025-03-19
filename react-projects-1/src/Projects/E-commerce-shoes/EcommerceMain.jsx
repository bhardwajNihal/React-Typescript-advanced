import React from 'react'
import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar'
import { ProductsArea } from './Components/ProductsArea'
export const EcommerceMain = () => {
    return (
        <div className='flex h-screen'>

            <div className='w-[20%]'>
                <Sidebar />
            </div>
            <div className='w-[80%]'>
                <Navbar />
                <ProductsArea />
            </div>

        </div>
    )
}
