// "use client";
import ProductImages from "@/Components/ProductImages";
import { getData } from "@/helpers";
import { ProductType } from "../../../../type";
import ProductPrice from "@/Components/ProductPrice";
import { MdStar } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import PriceFormate from "@/Components/PriceFormate";
import AddToCart from "@/Components/AddToCartButton";
import Image from "next/image";

interface Props {
  params: {
    id: number;
  };
}

const imagesArray = [
  "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
  "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
  "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
];

const singleProduct = async ({ params }: Props) => {
  //   const { id } = params;
  const endpoint = `https://dummyjson.com/products/${params.id}`;
  const product: ProductType = await getData(endpoint);
  return (
    <div className="max-w-[1140px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <ProductImages imagesArray={imagesArray} image={product?.images[0]} />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <div className="flex items-center justify-between gap-5">
          <ProductPrice item={product} />
          <div>
            <div className="text-base text-gray-400 flex items-center">
              {Array.from({ length: 5 }).map((_, index) => {
                const filled = index + 1 <= Math.floor(product?.rating);
                const halfFilled =
                  index + 1 > Math.floor(product?.rating) &&
                  index < Math.ceil(product?.rating);
                return (
                  <MdStar
                    className={`${
                      filled
                        ? "text-[#fa8900]"
                        : halfFilled
                        ? "text-[#f7ca00]"
                        : "text-gray-600"
                    }`}
                    key={index}
                  />
                );
              })}
            </div>
            <p className="text-base font-semibold">{`(${product?.rating?.toFixed(
              1
            )})reviews`}</p>
          </div>
        </div>
        <p className="flex items-center ">
          <FaRegEye className="mr-1 "/>
          <span className="font-semibold mr-1">250+</span>people are viewing this right now
        </p>
        <p>You are saving <PriceFormate amount={(product?.price * product?.discountPercentage) / 100}/> upon purchase</p>
        <div>
          <p className="text-sm tracking-wide">{product?.description}</p>
          <p className="text-base">{product?.warrantyInformation}</p>
        </div>
        <p>Brand: <span className="font-medium">{product?.brand}</span></p>
        <p>Category: <span className="font-medium capitalize">{product?.category}</span></p>
        <p>Tags: {product?.tags.map((item,index) => (
          <span className="font-medium capitalize" key={index}>{item}{index < product?.tags?.length - 1 && ", "}</span>
        ))}</p>
        <AddToCart product={product}/>
        <div className="w-[60%] mx-auto">
          <Image className="w-full" src="/images/payment.webp" width={300} height={300} alt="payment"/>
          <p className="text-center font-semibold mt-2">Guaranteed safe & secure checkout</p>
        </div>
      </div>
      <div className="bg-[#f7f7f7] md:col-span-2 flex items-center gap-10 p-10">
        {
          product?.reviews?.map((item) => (
            <div key={item?.reviewerName} className="bg-white/80 border-[1px] border-black/50 rounded-md hover:border-black hover:bg-white duration-200 flex flex-col gap-1 p-8">
              <p className="text-base font-semibold">{item?.comment}</p>
              <div className="text-xs">
                <p className="font-semibold">{item?.reviewerName}</p>
                <p className="">{item?.reviewerEmail}</p>
              </div>
              <div className="text-base text-gray-400 flex items-center">
              {Array.from({ length: 5 }).map((_, index) => {
                const filled = index + 1 <= Math.floor(product?.rating);
                const halfFilled =
                  index + 1 > Math.floor(product?.rating) &&
                  index < Math.ceil(product?.rating);
                return (
                  <MdStar
                    className={`${
                      filled
                        ? "text-[#fa8900]"
                        : halfFilled
                        ? "text-[#f7ca00]"
                        : "text-gray-600"
                    }`}
                    key={index}
                  />
                );
              })}
            </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default singleProduct;
