
import { ProductsCard } from './ProductsCard'
import Products from '../db/data'
import { Recommended } from './Recommended'

export const ProductsArea = ({products,setProducts}) => {

  return (
    <div className='w-full h-[92%]' >

    <Recommended setProducts={setProducts}/>

    <div className="cardsArea px-8 py-4 h-[88%] overflow-hidden overflow-y-auto flex flex-wrap gap-4 ">

    {products.map(p => <ProductsCard key={Math.random()} image={p.img} title={p.title} star={p.star} prevPrice={p.prevPrice} newPrice={p.newPrice}  />)}

    </div>


    </div>
  )
}
