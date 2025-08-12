"use client";
import ThemeToggle from "../ThemeToggle";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="w-full">
      {/* Mobile Navigation */}
      <div className="w-full bg-primary p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-6 w-10 flex flex-col justify-between">
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
          </div>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="w-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <CiSearch className="text-2xl text-gray-200" size={30} />
          <div className="w-12 h-12 rounded-full bg-[#333D4C] flex items-center justify-center relative">
            <LuShoppingCart className="text-2xl text-gray-200" size={20} />
            <div className="bg-primary absolute -top-2 -right-4 w-8 h-8 rounded-full flex items-center justify-center">
              <div className=" bg-[#33B36B] text-white w-6 h-6 rounded-full flex items-center justify-center">
                <span className="text-xs font-normal">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
