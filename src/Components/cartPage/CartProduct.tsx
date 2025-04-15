import React from "react";
import { ProductType } from "../../../type";
import Link from "next/link";
import Image from "next/image";
import PriceFormate from "../PriceFormate";
import AddToCartButton from "../AddToCartButton";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/shofySlice";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";

const CartProduct = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product?.id));
    toast.success(`${product?.title.substring(0, 20)}delete successfully!`);
  };
  return (
    <div className="flex py-6 sm:py-10">
      <Link
        href={{
          pathname: `/products/${product?.id}`,
          query: { id: product?.id },
        }}
        className=""
      >
        <div className="h-24 w-24 sm:h-48 sm:w-48 border border-sky-500">
          <Image
            src={product?.images[0]}
            alt="product iamge"
            width={300}
            height={300}
            className="h-full w-full p-2 rounded-md object-contain bg-[#f7f7f7] hover:scale-110 duration-200"
          />
        </div>
      </Link>
      <div className="ml-4 sm:ml-6 flex flex-1 flex-col justify-between relative">
        <div className="relative pr-9 sm:grid col-span-5">
          <div className="flex flex-col gap-1 col-span-5">
            <h3 className="text-base font-semibold w-full">
              {product?.title.substring(0, 80)}
            </h3>
            <p className="text-xs">
              Brand: <span className="font-medium">{product?.brand}</span>
            </p>
            <p className="text-xs">
              Category: <span>{product?.category}</span>
            </p>
            <div className="flex items-center gap-6 mt-2">
              <PriceFormate amount={product?.price * product.quantity!} />
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:pr-9">
          <div className="absolute right-0 top-0">
            <button
              onClick={handleRemoveProduct}
              className="p-2 text-gray-800 bg-gray-100 hover:bg-gray-200 hover:text-red-700 cursor-pointer"
            >
              <IoClose />
            </button>
          </div>
        </div>

        <div>
          {product?.availabilityStatus && (
            <p className="flex space-x-2 text-sm text-gray-700">
              <FaCheck className="text-lg text-green-600"/><span>In Stock</span>
            </p>
            
          )}
          <p>You are saving <PriceFormate amount={product?.price * (product?.discountPercentage/100) * product.quantity!}/> upon purchase</p>
        </div>

      </div>
    </div>
  );
};

export default CartProduct;
