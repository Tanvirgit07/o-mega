"use client";
import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateType } from "../../type";
import { addToFavorite } from "@/redux/shofySlice";
import toast from "react-hot-toast";

function Sidebar({product}:{product:ProductType}) {
  const { favorite } = useSelector((state: StateType) => state?.shofy);
  const dispatch = useDispatch()
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );

  useEffect(() => {
    const availableProduct = favorite?.find((item) => item?.id === product?.id);

    if(availableProduct){
      setExistingProduct(availableProduct);
    }else{
      setExistingProduct(null);
    }
  },[favorite, product?.id])
  const handleFavorite = () => {
      dispatch(addToFavorite(product));
      if(existingProduct){
        toast.success("Removed form favorite!")
      }else{
        toast.success("Added to favorite!");
      }
  }
  return (
    <div className="absolute right-2 bottom-44 border flex flex-col text-2xl border-gray-200 bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40">
      <button className="p-2 hover:bg-blue-700 hover:text-blue-400 duration-200 ">
        <FiShoppingCart />
      </button>
      <button className="p-2 hover:bg-blue-700 hover:text-blue-400 duration-200 ">
        <LuEye />
      </button>
      <button onClick={handleFavorite} className="p-2 hover:bg-blue-700 hover:text-blue-400 duration-200 ">
        {existingProduct? <MdFavorite className="text-sky-500"/> : <MdFavoriteBorder />}
      </button>
    </div>
  );
}

export default Sidebar;
