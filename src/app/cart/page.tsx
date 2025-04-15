import CartProducts from '@/Components/cartPage/CartProducts'
import React from 'react'
import { auth } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';

const CartPage = async() => {
  const session = await auth();
  if(!session?.user){
    redirect("/");
  }
  return (
    <div className=''>
        <CartProducts />
    </div>
  )
}

export default CartPage