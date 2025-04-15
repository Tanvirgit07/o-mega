import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";

function TopHeader() {
  return (
    <div className="bg-[#010f1c] text-gray-200">
      <div className="max-w-[1140px] mx-auto px-4 py-1 flex justify-between items-center">
        {/* top header part one */}
        <div className="flex gap-2 items-center">
          <CiDeliveryTruck className="text-4xl text-yellow-300" />
          <p>Free Express shipping on orders $570+</p>
        </div>

        <div className="hidden md:inline-flex items-center text-sm text-white">
          <p className="headerTopMenu">
            Enlish <IoChevronDownSharp className="mt-[1px]"/>{" "}
          </p>
          <p className="headerTopMenu">
            USD <IoChevronDownSharp className="mt-[1px]"/>{" "}
          </p>
          <p className="headerTopMenu">
            Settings <IoChevronDownSharp className="mt-[1px]"/>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
