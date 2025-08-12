"use client";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

export function Homepage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#181d25] px-4">
      <div className="w-full bg-gradient-to-r from-gradient-start to-gradient-end rounded-xl mt-6 text-center">
        <div className="flex flex-col gap-4 pt-12">
          <h3 className="text-gray-600 dark:text-gray-300 text-base font-normal">Feel the quality Sound</h3>
          <p className="text-gray-900 dark:text-white font-semibold text-[34px]">
            Headphone <br />
            ProMax
          </p>
          <button>
            Shop now <GoArrowUpRight />
          </button>
        </div>
        <Image
          src="images/headphone.svg"
          alt="Headphone"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    </div>
  );
}
