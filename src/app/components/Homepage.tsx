"use client";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoEllipsisVerticalOutline, IoCartOutline } from "react-icons/io5";
import {
  zoomIn,
  fadeInUp,
  fadeInDown,
  staggerChildren,
  fadeIn,
} from "./animations/motion";
import { MdOutlineLocalShipping, MdOutlineMessage } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRepeat } from "react-icons/fa6";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const electronicItems = [
  {
    id: 1,
    name: "Smart Watch Series 7, White",
    price: 449.0,
    comments: 45,
    rating: 5,
    discount: 21,
    discount_price: 430,
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
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-button-primary text-white font-medium text-base rounded-lg flex items-center text-center py-4 w-full justify-center cursor-pointer"
              >
                Shop now <GoArrowUpRight />
              </motion.button>
            </div>
          </div>
          <Image
            src="images/headphone.svg"
            alt="Headphone"
            width={100}
            height={100}
            className="w-full max-w-[300px] mx-auto"
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
          className="w-full bg-cover bg-no-repeat rounded-2xl h-[465px] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundImage: "url('/images/banner.svg')" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
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
                  className="bg-button-primary rounded-md text-white flex items-center py-2 px-4 font-medium text-[12px] cursor-pointer"
                  variants={fadeIn}
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
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
              className="w-full flex items-center gap-4 will-change-transform"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={item.image}
                alt={item.name}
                height={100}
                width={100}
              />
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

      <section className="w-full mt-14">
        <div className="w-full flex items-center justify-between border-b pb-4 border-gray-200 dark:border-gray-700 mb-6">
          <h2 className="font-semibold text-[23px] text-gray-900 dark:text-white">
            Trending Products
          </h2>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 hover:opacity-90 cursor-pointer"
          >
            <Link
              href="#"
              className="text-gray-700 text-base font-medium dark:text-gray-200"
            >
              View All
            </Link>
            <MdKeyboardArrowRight />
          </motion.button>
        </div>
        <div className="grid grid-cols-2 w-full gap-6">
          {electronicItems.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[257px] px-2 flex flex-col gap-4"
            >
              <p className="w-full flex items-center">
                {item.discount && (
                  <span className="font-medium text-[12px] text-white px-3 py-2 bg-button-danger rounded-[4px]">
                    -{item.discount}%
                  </span>
                )}
                <span className="ml-auto flex h-8 w-8 rounded-md hover:bg-slate-700 cursor-pointer items-center justify-center border border-gray-200 dark:border-gray-700 dark:text-gray-200 text-gray-700">
                  <IoEllipsisVerticalOutline />
                </span>
              </p>
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="w-full"
              />
              <div className="flex flex-col gap-2">
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
                    ({item.comments})
                  </p>
                </div>
                <p className="truncate text-gray-900 font-medium text-base dark:text-white">
                  {item.name}
                </p>
                <div className="w-full flex items-center justify-between">
                  <p className="flex flex-col">
                    <span className="text-gray-900 font-semibold text-xl dark:text-white">
                      {" "}
                      $
                      {new Intl.NumberFormat("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(item.price)}
                    </span>
                    {item.discount_price && (
                      <span className="font-normal text-base text-gray-400 line-through dark:text-gray-500">
                        {" "}
                        {new Intl.NumberFormat("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }).format(item.discount_price)}
                      </span>
                    )}
                  </p>
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg hover:opacity-80 cursor-pointer">
                    <IoCartOutline
                      className="text-gray-700 dark:text-gray-200"
                      size={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={zoomIn}
          className="w-full bg-gradient-to-r from-gradient-start to-gradient-end dark:bg-gradient-to-r dark:from-dark-gradient-start dark:to-dark-gradient-end rounded-xl text-center"
        >
          <div className="flex flex-col pt-12">
            <div className="text-gray-900 dark:text-gray-300 text-base font-normal flex items-center justify-center mb-7">
              <h3 className="flex items-center font-semibold text-center gap-2">
                <span className="text-[50px]">20</span>
                <p className="flex flex-col items-start">
                  <span className="text-3xl">%</span>
                  <span className="text-xl">OFF</span>
                </p>
              </h3>
            </div>
            <p className="text-gray-900 dark:text-white font-bold text-[23px] mb-3">
              SEASONAL WEEKLY <br />
              SALE 2025
            </p>
            <p className="text-gray-800 font-normal text-base mb-7 dark:text-gray-100">
              Use code <span className="font-semibold text-gray-800 bg-white px-2 rounded-2xl py-1">Sale 2025</span> to get the best offer
            </p>
          </div>
          <Image
            src="images/weekly-sale.svg"
            alt="Headphone"
            width={100}
            height={100}
            className="w-full max-w-[300px] mx-auto"
          />
        </motion.div>
      </section>
    </div>
  );
}
