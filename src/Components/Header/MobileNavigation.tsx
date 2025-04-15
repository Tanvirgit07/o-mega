"use client";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Dialog, DialogPanel } from '@headlessui/react'
import { MdClose } from "react-icons/md";
import { navigation } from "@/Constant";
import Link from "next/link";
import SocilLink from "../SocilLink";

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(true);
  }
  return (
    <>
      <div>
        <RiMenu3Fill onClick={toggleMenu} className="text-2xl md:hidden text-gray-500 hover:text-blue-500 duration-200 cursor-pointer" />
      </div>
      <Dialog open={isOpen} as="div" className="relative z-50 md:hidden text-white/80" onClose={()=> (setIsOpen(false))}>
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/90">
          
            <DialogPanel
              transition
              className="w-[94%] space-y-4 p-6 border border-gray-500 rounded-md absolute top-10 m-5 bg-black"
            >
              <div className="flex items-center justify-between gap-5">
                <h2>Navigation manu</h2>
                <button onClick={() => setIsOpen(false)} className="text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/40 cursor-pointer">
                    <MdClose />
                </button>
              </div>

              <div>
                {
                    navigation.map((item) => (
                        <Link onClick={() => setIsOpen(false)} href={item.href} key={item.title} className="hover:text-blue-400 relative flex items-center group gap-2 mb-5">
                            <span className="w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-blue-400"/>
                                {item.title}
                            <span className="absolute w-full h-[1px] bg-white/80 left-0 -bottom-1 group-hover:bg-sky-500 duration-200"/>
                        </Link>
                    ))
                }
              </div>

              <SocilLink />
              
            </DialogPanel>
          
        </div>
      </Dialog>
    </>
  );
}

export default MobileNavigation;
