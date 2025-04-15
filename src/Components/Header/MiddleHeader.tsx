import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import SignInPage from "../SignInPage";
import HeaderIcon from "./HeaderIcon";

function MiddleHeader() {
  return (
    <div className="border-b-[1px] border-b-gray-400">
      <div className="max-w-[1140px] mx-auto px-4 py-5 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="images"
            width={100}
            height={50}
            className="w-28"
            priority
          />
        </Link>

        <SearchInput />

        <div className="hidden md:inline-flex items-center gap-3">
            <SignInPage />
            <HeaderIcon />
        </div>
        <MobileNavigation />
      </div>
    </div>
  );
}

export default MiddleHeader;
