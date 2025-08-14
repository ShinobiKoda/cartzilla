"use client";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { motion } from "framer-motion";
import { zoomIn } from "./animations/motion";
import { MdOutlineLocalShipping, MdOutlineMessage } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRepeat } from "react-icons/fa6";

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

      <div className="grid grid-cols-2 gap-6 mt-14">
        <div className="flex flex-col gap-4 items-center justify-start text-center h-full">
          <div className="w-[86px] h-[86px] rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
            <MdOutlineLocalShipping size={32} />
          </div>
          <div className="flex-1 flex flex-col justify-start">
            <p className="font-semibold text-base text-gray-900 dark:text-white min-h-[48px] flex items-center justify-center">
              Free Shipping & Returns
            </p>
            <p className="font-normal text-sm text-gray-600 dark:text-gray-300 min-h-[40px] flex items-center justify-center">
              For all orders over ₦200,000
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-start text-center h-full">
          <div className="w-[86px] h-[86px] rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
            <CiCreditCard1 size={32} className="dark:text-white" />
          </div>
          <div className="flex-1 flex flex-col justify-start">
            <p className="font-semibold text-base text-gray-900 dark:text-white min-h-[48px] flex items-center justify-center">
              Secure Payment
            </p>
            <p className="font-normal text-sm text-gray-600 dark:text-gray-300 min-h-[40px] flex items-center justify-center">
              We ensure secure payment
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-start text-center h-full">
          <div className="w-[86px] h-[86px] rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
            <FaRepeat size={32} />
          </div>
          <div className="flex-1 flex flex-col justify-start">
            <p className="font-semibold text-base text-gray-900 dark:text-white min-h-[48px] flex items-center justify-center">
              Money Back Guarantee
            </p>
            <p className="font-normal text-sm text-gray-600 dark:text-gray-300 min-h-[40px] flex items-center justify-center">
              Returning money after 30 days
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-start text-center h-full">
          <div className="w-[86px] h-[86px] rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
            <MdOutlineMessage size={32} className="dark:text-white" />
          </div>
          <div className="flex-1 flex flex-col justify-start">
            <p className="font-semibold text-base text-gray-900 dark:text-white min-h-[48px] flex items-center justify-center">
              24/7 Customer Support
            </p>
            <p className="font-normal text-sm text-gray-600 dark:text-gray-300 min-h-[40px] flex items-center justify-center">
              Friendly customer support
            </p>
          </div>
        </div>
      </div>

      <section>
        <h2>New Arrivals</h2>
      </section>
    </div>
  );
}
