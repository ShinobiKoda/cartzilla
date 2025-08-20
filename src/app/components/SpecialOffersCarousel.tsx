"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { FaStar, FaRegStar } from "react-icons/fa";
import {
  fadeInUp,
  fadeIn,
  staggerChildren,
  scaleOnHover,
} from "./animations/motion";

export type ElectronicItem = {
  id: number;
  name: string;
  price: number;
  comments: number;
  rating: number;
  image: string;
  discount?: number;
  discount_price?: number;
};

export default function SpecialOffersCarousel({
  items,
}: {
  items: ElectronicItem[];
}) {
  const pages = Array.from({ length: Math.ceil(items.length / 2) }, (_, i) =>
    items.slice(i * 2, i * 2 + 2)
  );
  const [carouselIndex, setCarouselIndex] = useState(0);
  const total = pages.length;

  // Measure viewport width to animate in pixels and enable drag snapping
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    const update = () =>
      setContainerWidth(viewportRef.current?.clientWidth ?? 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Animation controls for snapping
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      x: -carouselIndex * containerWidth,
      transition: { type: "spring", stiffness: 220, damping: 28 },
    });
  }, [carouselIndex, containerWidth, controls]);

  // Autoplay with reset on user navigation
  const autoplayDelay = 4000;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resetAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (total > 1) {
      timerRef.current = setInterval(() => {
        setCarouselIndex((i) => (i + 1) % total);
      }, autoplayDelay);
    }
  }, [total, autoplayDelay]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoplay]);

  const prev = () => {
    setCarouselIndex((i) => (i - 1 + total) % total);
    resetAutoplay();
  };
  const next = () => {
    setCarouselIndex((i) => (i + 1) % total);
    resetAutoplay();
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg" ref={viewportRef}>
        <motion.div
          className="flex"
          animate={controls}
          drag="x"
          dragElastic={0.2}
          dragConstraints={{
            left: -Math.max(0, (total - 1) * containerWidth),
            right: 0,
          }}
          onDragEnd={(_, info) => {
            if (!containerWidth) return;
            const { offset, velocity } = info;
            const threshold = Math.min(120, containerWidth * 0.25);
            if (offset.x < -threshold || velocity.x < -300) {
              next();
            } else if (offset.x > threshold || velocity.x > 300) {
              prev();
            } else {
              controls.start({
                x: -carouselIndex * containerWidth,
                transition: { type: "spring", stiffness: 220, damping: 28 },
              });
              resetAutoplay();
            }
          }}
        >
          {pages.map((page, pi) => (
            <div key={pi} className="min-w-full px-1">
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={staggerChildren}
              >
                {page.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <motion.span
                      className="ml-auto flex h-8 w-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer items-center justify-center border border-gray-200 dark:border-gray-700 dark:text-gray-200 text-gray-700"
                      whileTap={{ scale: 0.9 }}
                    >
                      <IoEllipsisVerticalOutline />
                    </motion.span>

                    <motion.div variants={fadeIn}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="w-full mb-3"
                      />
                    </motion.div>

                    <div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) =>
                            i < item.rating ? (
                              <FaStar
                                key={i}
                                size={16}
                                className="text-yellow-400"
                              />
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
                      <p className="truncate text-gray-900 dark:text-white text-sm font-medium">
                        {item.name}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-gray-900 dark:text-white font-semibold text-xl">
                        $
                        {new Intl.NumberFormat("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }).format(item.price)}
                      </span>
                      <motion.button
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-md hover:opacity-90"
                        variants={scaleOnHover}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <IoCartOutline
                          className="text-gray-700 dark:text-gray-200"
                          size={20}
                        />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
                {page.length === 1 && <div className="invisible" />}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="w-full flex items-center justify-center mt-6 gap-3">
        <motion.button
          aria-label="Previous"
          onClick={prev}
          className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 backdrop-blur flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
        >
          <MdChevronLeft
            className="text-gray-900 dark:text-gray-200"
            size={22}
          />
        </motion.button>
        <motion.button
          aria-label="Next"
          onClick={next}
          className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 backdrop-blur flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
        >
          <MdChevronRight
            className="text-gray-900 dark:text-gray-200"
            size={22}
          />
        </motion.button>
      </div>
    </div>
  );
}
