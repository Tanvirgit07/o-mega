import React from 'react'
import { ProductType } from '../../type'
import ProductCard from './ProductCard'

interface Props {
    products:ProductType[]
}

function ProductsList({products}: Props) {
  return (
    <div className='max-w-[1140px] mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {
            products.map((item) => (
                <ProductCard key={item.id}  item={item}/>
            ))
        }
    </div>
  )
}

export default ProductsList