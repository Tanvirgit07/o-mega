import { banner } from "@/Constant";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { GoArrowRight } from "react-icons/go";

function Banner() {
  return (
    <div className="bg-[#115061] py-20 text-white">
      <div className="max-w-[1140px] mx-auto px-4 flex flex-col gap-5 md:flex-row md:items-center justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-base font-semibold">{banner?.priceText}</p>
          <h2 className="text-5xl font-bold max-w-[500px]">{banner?.title}</h2>
          <p className="text-lg font-bold">
            {banner?.textOne} <span className="text-yellow-100 mx-1">{banner?.offerPrice}</span>
            {banner?.textTwo}
          </p>
          <Button href={banner?.buttonLink} className="flex items-center gap-1 bg-gray-200 text-black rounded-md w-32 px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-white py-3 border border-transparent hover:border-white/40 duration-200">Shop Now <GoArrowRight className="text-lg mt-[3px]"/>
          </Button>
        </div>
        <div>
            <Image src={banner?.images} alt="images" width={500} height={300} priority/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
