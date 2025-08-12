"use client";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { motion } from "framer-motion";
import { zoomIn } from "./animations/motion";

export function Homepage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#181d25] px-4">
      <div className="w-full pt-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={zoomIn}
          className="w-full bg-gradient-to-r from-gradient-start to-gradient-end dark:bg-gradient-to-r dark:from-dark-gradient-start dark:to-dark-gradient-end rounded-xl text-center"
        >
          <div className="flex flex-col gap-4 pt-12">
            <h3 className="text-gray-600 dark:text-gray-300 text-base font-normal">
              Feel the quality Sound
            </h3>
            <p className="text-gray-900 dark:text-white font-semibold text-[34px]">
              Headphone <br />
              ProMax
            </p>
            <div className="w-full max-w-[150px] mx-auto">
              <button className="bg-button-primary text-white font-medium text-base rounded-lg flex items-center text-center py-4 w-full justify-center">
                Shop now <GoArrowUpRight />
              </button>
            </div>
          </div>
          <Image
            src="images/headphone.svg"
            alt="Headphone"
            width={100}
            height={100}
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
