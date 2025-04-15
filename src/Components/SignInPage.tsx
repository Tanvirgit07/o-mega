"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { LiaUser } from "react-icons/lia";

const SignInPage = () => {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <div
          onClick={() => signOut()}
          className="flex items-center gap-2 text-sm cursor-pointer "
        >
          <div className="border-2 border-gray-400 rounded-full w-10 h-10">
            <Image
              src={session?.user?.image || ""}
              alt="userImage"
              width={200}
              height={200}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs">Hello, Guests</p>
            <p>Logout</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="flex items-center gap-2 text-sm cursor-pointer"
        >
          <div className="border-2 border-gray-700 p-1.5 rounded-full">
            <LiaUser />
          </div>
          <div>
            <p className="text-xs">Hello, Guests</p>
            <p>Login / Register</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInPage;
