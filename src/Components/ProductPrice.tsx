"use client"
import React, { useEffect, useState } from 'react'
import { ProductType, StateType } from '../../type'
import PriceFormate from './PriceFormate';
import { useSelector } from 'react-redux';

function ProductPrice({item}:{item: ProductType}) {
  const { cart } = useSelector((state: StateType) => state?.shofy);
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );

  useEffect(() => {
      const availableProduct = cart?.find((product) => product?.id === item?.id);
      if (availableProduct) {
        setExistingProduct(availableProduct);
      }
    }, [cart, item?.id]);
    const regularPrice = item.price;
    const discountPrice = item?.price + item?.discountPercentage/100; 
  return (
    <div>
        <PriceFormate amount = {existingProduct? discountPrice * existingProduct.quantity! : discountPrice}/>
        <PriceFormate amount = {existingProduct? regularPrice*existingProduct.quantity! : regularPrice}/>
    </div>
  )
}

export default ProductPrice