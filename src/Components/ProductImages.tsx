"use client";
import Image from "next/image";
import React, { useState } from "react";
interface Props {
    imagesArray: string[]
  image: string
}


const ProductImages = ({ imagesArray,image }: Props) => {
  const [currentImage, setCurrentImage] = useState(image);
  console.log(imagesArray);
  return (
    <div className="flex">

      <div>
        {/* ai jigi map kora image bosate hoba but image extra na thkai single image bosno */}

        {imagesArray.map((item,index) => (
            <Image
            key={index}
            className="w-24 h-24 object-contain cursor-pointer opacity-80 hover:opacity-100 duration-200 border-gray-200 border-2 mb-1 p-1"
            src={item}
            alt="productImages"
            width={200}
            height={200}
            onClick={()=> setCurrentImage(item)}
          />
        ))}
      </div>

      <div className="bg-gray-100 rounded-md ml-5 w-full max-h-[550px]">
        <Image
          className="w-full h-full object-contain"
          src={currentImage}
          alt="productImages"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ProductImages;
