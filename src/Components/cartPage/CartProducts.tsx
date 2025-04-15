"use client";
import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";
import Link from "next/link";
import CartProduct from "./CartProduct";
import CartSummery from "./CartSummery";

const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.shofy);
  // console.log(cart);
  return (
    <div className="max-w-[1140px] mx-auto px-4">
      {cart?.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shoping Cart
          </h1>
          <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
            <section className="lg:col-span-7">
                <div className="divide-y divide-gray-200 border-b border-t border-gray-200">
                    {cart?.map((product) => (<CartProduct key={product?.id} product={product}/>))}
                </div>
            </section>
            <CartSummery cart={cart}/>
          </div>
        </>
      ) : (
        <div className="bg-white h-96 my-10 flex flex-col gap-4 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shoping Cart
          </h1>
          <p className="text-base max-w-[700px] text-center text-gray-600 tracking-wide leading-6">
            Your cart is empty. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos praesentium magni optio dolore dolorem
            iure libero maiores quis error, impedit, expedita saepe, sunt nihil
            suscipit eaque! Officia dolor voluptates quia!
          </p>
          <Link
            href="/"
            className="bg-sky-500 text-gray-100 px-10 py-4 rounded-md hover:bg-sky-400 duration-200 uppercase text-sm font-semibold tracking-wide"
          >
            Go Back To Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartProducts;
