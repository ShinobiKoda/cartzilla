"use client";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  zoomIn,
  fadeInUp,
  fadeInDown,
  staggerChildren,
  slideInFromRight,
  fadeIn,
  scaleOnHover,
} from "./animations/motion";
import { MdOutlineLocalShipping, MdOutlineMessage } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRepeat } from "react-icons/fa6";
import { FaStar, FaRegStar } from "react-icons/fa";

const electronicItems = [
  {
    id: 1,
    name: "Smart Watch Series 7, White",
    price: 449.0,
    comments: 45,
    rating: 5,
    image: "/images/smartwatch.svg",
  },
  {
    id: 2,
    name: "VRBO1 Vitual Reality Glasses",
    price: 340.99,
    comments: 123,
    rating: 4,
    image: "/images/vr-glasses.svg",
  },
  {
    id: 3,
    name: "Wireless Bluetooth Heaphones Sony",
    price: 357.0,
    comments: 34,
    rating: 4,
    image: "/images/wireless-headphones.svg",
  },
  {
    id: 4,
    name: "Laptop Apple Macbook Pro 13",
    price: 1200.0,
    comments: 8,
    rating: 5,
    image: "/images/macbook-pro13.svg",
  },
  {
    id: 5,
    name: "Tablet Apple Ipad M1",
    price: 540.0,
    comments: 126,
    rating: 3,
    image: "/images/apple-ipad.svg",
  },
  {
    id: 6,
    name: "Earphones Apple Airpods 2 Pro",
    price: 209.99,
    comments: 340,
    rating: 5,
    image: "/images/apple-earpods.svg",
  },
  {
    id: 7,
    name: "Power Bank PBS 1000mAh",
    price: 49.99,
    comments: 29,
    rating: 4,
    image: "/images/powerbank.svg",
  },
  {
    id: 8,
    name: "Apple iphone 14 128GB White",
    price: 899.0,
    comments: 12,
    rating: 5,
    image: "/images/iphone14.svg",
  },
];

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

      <motion.div
        className="grid grid-cols-2 gap-6 mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren}
      >
        <motion.div
          className="flex flex-col gap-4 items-center justify-start text-center h-full"
          variants={fadeInUp}
        >
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
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 items-center justify-start text-center h-full"
          variants={fadeInUp}
        >
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
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 items-center justify-start text-center h-full"
          variants={fadeInUp}
        >
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
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 items-center justify-start text-center h-full"
          variants={fadeInUp}
        >
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
        </motion.div>
      </motion.div>

      <section className="w-full space-y-6 mt-14">
        <motion.h2
          className="font-semibold text-[23px] text-gray-900 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInDown}
        >
          New Arrivals
        </motion.h2>
        <motion.div
          className="w-full bg-cover bg-no-repeat rounded-2xl h-[465px] flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/images/banner.svg')" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInFromRight}
        >
          <motion.div variants={staggerChildren} className="contents">
            <motion.div variants={zoomIn} transition={{ delay: 0.05 }}>
              <Image
                src="/images/macbook.svg"
                alt="Macbook Image"
                height={100}
                width={100}
                className="w-full max-w-[294px] relative z-20 pt-5"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.12 }}
              className="flex flex-col gap-[14px] relative z-10 -top-14 text-center"
            >
              <h3 className="font-bold text-[40px] text-white">MacBook</h3>
              <p className="font-medium text-base text-gray-300">
                Be Pro Anywhere
              </p>
              <div className="w-full max-w-[121px] mx-auto">
                <motion.button
                  className="bg-button-primary rounded-md text-white flex items-center py-2 px-4 font-medium text-[12px]"
                  variants={fadeIn}
                  whileHover="hover"
                >
                  From $1,119 <GoArrowUpRight />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full grid grid-cols-1 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          {electronicItems.map((item, index) => (
            <motion.div
              key={index}
              className="w-full flex items-center gap-4"
              variants={fadeInUp}
            >
              <motion.div variants={scaleOnHover} whileHover="hover">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={100}
                  width={100}
                />
              </motion.div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < item.rating ? (
                        <FaStar key={i} size={16} className="text-yellow-400" />
                      ) : (
                        <FaRegStar
                          key={i}
                          size={16}
                          className="text-gray-300 dark:text-gray-500"
                        />
                      )
                    )}
                  </div>
                  <p className="text-gray-400 font-normal text-[12px] dark:text-gray-500">
                    {item.comments}
                  </p>
                </div>
                <p className="font-medium text-sm dark:text-white">
                  {item.name}
                </p>
                <p className="font-semibold text-xl text-gray-900 dark:text-white">
                  $
                  {new Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(item.price)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
