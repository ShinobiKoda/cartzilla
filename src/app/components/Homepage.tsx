"use client";
import { GoArrowUpRight } from "react-icons/go";
import { useState, useEffect } from "react";
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
  rotateIn,
  bounce,
  scaleOnHover,
} from "./animations/motion";
import { MdOutlineLocalShipping, MdOutlineMessage } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRepeat } from "react-icons/fa6";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import SpecialOffersCarousel, { ElectronicItem } from "./SpecialOffersCarousel";
import { useTheme } from "next-themes";

const electronicItems: ElectronicItem[] = [
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

const logoImages = [
  "/images/apple-logo-light.svg",
  "/images/motorola-logo-light.svg",
  "/images/samsung-logo-light.svg",
  "/images/sony-logo-light.svg",
  "/images/canon-logo-light.svg",
];

const logoImagesDark = [
  "/images/apple-logo-dark.svg",
  "/images/motorola-logo-dark.svg",
  "/images/samsung-logo-dark.svg",
  "/images/sony-logo-dark.svg",
  "/images/canon-logo-dark.svg",
];

export function Homepage() {
  const initialTime = 12 * 60 * 60 + 10 * 60 + 12;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Format Time
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const { resolvedTheme } = useTheme();
  const brandLogos = resolvedTheme === "dark" ? logoImagesDark : logoImages;

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
                variants={scaleOnHover}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                className="bg-button-primary text-white font-medium text-base rounded-lg flex items-center text-center py-4 w-full justify-center cursor-pointer"
              >
                Shop now <GoArrowUpRight />
              </motion.button>
            </div>
          </div>
          <motion.div variants={fadeIn} transition={{ delay: 0.08 }}>
            <Image
              src="images/headphone.svg"
              alt="Headphone"
              width={100}
              height={100}
              className="w-full max-w-[300px] mx-auto"
            />
          </motion.div>
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
              <motion.div variants={fadeIn}>
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
        <motion.div
          className="grid grid-cols-2 w-full gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          {electronicItems.map((item) => (
            <motion.div
              key={item.id}
              className="w-full max-w-[257px] px-2 flex flex-col gap-4 will-change-transform"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="w-full flex items-center">
                {item.discount && (
                  <span className="font-medium text-[12px] text-white px-3 py-2 bg-button-danger rounded-[4px]">
                    -{item.discount}%
                  </span>
                )}
                <motion.span
                  className="ml-auto flex h-8 w-8 rounded-md hover:bg-slate-200 cursor-pointer items-center justify-center border border-gray-200 dark:border-gray-700 dark:text-gray-200 text-gray-700"
                  whileTap={{ scale: 0.9 }}
                >
                  <IoEllipsisVerticalOutline />
                </motion.span>
              </div>
              <motion.div variants={fadeIn}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-full"
                />
              </motion.div>
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
                      $
                      {new Intl.NumberFormat("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(item.price)}
                    </span>
                    {item.discount_price && (
                      <span className="font-normal text-base text-gray-400 line-through dark:text-gray-500">
                        {new Intl.NumberFormat("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }).format(item.discount_price)}
                      </span>
                    )}
                  </p>
                  <motion.div
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg hover:opacity-80 cursor-pointer"
                    variants={scaleOnHover}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                  >
                    <IoCartOutline
                      className="text-gray-700 dark:text-gray-200"
                      size={20}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mt-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={zoomIn}
          className="w-full bg-gradient-to-r from-gradient-start to-gradient-end dark:bg-gradient-to-r dark:from-dark-gradient-start dark:to-dark-gradient-end rounded-xl text-center"
        >
          <motion.div
            variants={staggerChildren}
            className="flex flex-col pt-12"
          >
            <motion.div
              className="text-gray-900 dark:text-gray-300 text-base font-normal flex items-center justify-center mb-7"
              variants={fadeInDown}
            >
              <h3 className="flex items-center font-semibold text-center gap-2">
                <motion.span
                  className="text-[50px] leading-none"
                  variants={rotateIn}
                >
                  20
                </motion.span>
                <p className="flex flex-col items-start leading-none">
                  <motion.span className="text-3xl" variants={bounce}>
                    %
                  </motion.span>
                  <motion.span className="text-xl" variants={fadeInUp}>
                    OFF
                  </motion.span>
                </p>
              </h3>
            </motion.div>
            <motion.p
              className="text-gray-900 dark:text-white font-bold text-[23px] mb-3"
              variants={fadeInUp}
              transition={{ delay: 0.08 }}
            >
              SEASONAL WEEKLY <br />
              SALE 2025
            </motion.p>
            <motion.p
              className="text-gray-800 font-normal text-base mb-7 dark:text-gray-100"
              variants={fadeIn}
              transition={{ delay: 0.15 }}
            >
              Use code{" "}
              <motion.span
                className="font-semibold text-gray-800 bg-white px-2 rounded-2xl py-1"
                variants={scaleOnHover}
                whileHover="hover"
              >
                Sale 2025
              </motion.span>{" "}
              to get the best offer
            </motion.p>
          </motion.div>
          <motion.div
            variants={zoomIn}
            transition={{ delay: 0.05 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="images/weekly-sale.svg"
              alt="Headphone"
              width={100}
              height={100}
              className="w-full max-w-[300px] mx-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="mt-14 w-full">
        <div className="space-y-2 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
          <div className="w-full flex items-center justify-between">
            <h2 className="font-semibold text-[23px] text-gray-900 dark:text-white">
              Special Offers for you
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
          <div className="flex items-center gap-4">
            <div className="rounded-md bg-button-danger text-white font-medium text-base flex items-center justify-center p-2">
              {String(hours).padStart(2, "0")}hrs
            </div>
            <span className="text-gray-400 dark:text-gray-500">:</span>
            <div className="rounded-md bg-button-danger text-white font-medium text-base flex items-center justify-center p-2">
              {String(minutes).padStart(2, "0")}m
            </div>
            <span className="text-gray-400 dark:text-gray-500">:</span>
            <div className="rounded-md bg-button-danger text-white font-medium text-base flex items-center justify-center p-2">
              {String(seconds).padStart(2, "0")}s
            </div>
          </div>
        </div>
        <SpecialOffersCarousel items={electronicItems} />
      </section>

      <section className="mt-14 grid grid-cols-2 gap-4">
        {brandLogos.map((img, index) => (
          <div
            key={index}
            className="w-full border border-gray-200 dark:border-gray-700 rounded-xl p-4 min-h-[96px] flex items-center justify-center"
          >
            <Image
              src={img}
              alt="Brand Logo"
              height={100}
              width={100}
              className="w-full max-w-[150px]"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
