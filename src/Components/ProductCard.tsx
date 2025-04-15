import React from "react";
import { ProductType } from "../../type";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import ProductPrice from "./ProductPrice";
import AddToCart from "./AddToCartButton";

function ProductCard({ item }: { item: ProductType }) {
  return (
    <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md group overflow-hidden relative">
      <Link href={{
        pathname: `/products/${item.id}`,
        query: {id: item.id}
      }}>
      <Image
        src={item?.images[0]}
        alt="product-images"
        width={500}
        height={500}
        priority={true}
        className="w-full h-64 object-contain hover:scale-110 duration-300"
      />

<p className="absolute top-2 right-2 bg-orange-500 text-white py-1 px-2 text-xs rounded-lg">{item?.discountPercentage}%</p>
      </Link>
      <Sidebar product={item}/>
      <div className="border-t border-t-cyan-50 py-2 px-4 flex flex-col justify-between h-40">
        <div>
          <p className="text-sm font-medium text-gray-500 capitalize">{item.category}</p>
          <h1 className="font-semibold text-base line-clamp-2">{item.title}</h1>
          <ProductPrice item = {item}/>

        </div>

        <AddToCart product={item}/>
      </div>
    </div>
  );
}

export default ProductCard;
