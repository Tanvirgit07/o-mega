import Link from "next/link";
import React from "react";

interface Props {
    children: React.ReactNode;
    className: string;
    href: string;
}

function Button({ children, href }:Props) {
  return (
    <>
      {href ? (
        <Link href={href} className="bg-blue-500 text-white py-2 px-6 hover:text-blue-700 cursor-pointer duration-200 max-w-[150px] flex items-center justify-center gap-2">{children}</Link>
      ) : (
        <button className="bg-blue-500 text-white py-2 px-6 hover:text-blue-700 cursor-pointer duration-200">{children}</button>
      )}
    </>
  );
}

export default Button;
