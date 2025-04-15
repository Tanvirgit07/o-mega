import { auth } from "@/app/api/auth/[...nextauth]/route";
import { navigation } from "@/Constant";
import Link from "next/link";
import React from "react";
import SignOut from "../SignOut";



const BottomHeader = async() =>{
  const session = await auth()
  console.log(session);
  return (
    <div className="border-b border-b-gray-400">
      <div className="max-w-[1140px] mx-auto px-4 flex items-center justify-between py-1">
        <div className="text-xs md:text-sm font-medium flex items-center md:gap-5 gap-2">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item?.href}
              className="hover:text-blue-500 duration-200"
            >
              {item.title}
            </Link>
          ))}
          {session?.user ?<SignOut key={session?.user?.id}/> :<Link className="hover:text-blue-500 duration-200" href="/signin">
            Please signin to view cart
          </Link>}
          
        </div>

        <p className="hidden md:inline-flex text-xs text-gray-400 font-medium">
          {" "}
          HotLine: <span className="text-black">+880 1232432435</span>
        </p>
      </div>
    </div>
  );
}

export default BottomHeader;
