"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  items,
  className,
}: {
  items: { image: string; link: string; text: string }[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll(); // Now tracking global scroll

  // Horizontal translations based on page scroll
  const translateFirst = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [500, 0]);

  // Split the items into two groups (3 in each)
  const firstPart = items.slice(0, 3);
  const secondPart = items.slice(3);

  return (
    <div className={cn(" flex justify-center w-full", className)} ref={gridRef}>
      <div className="flex flex-col gap-10 max-w-[90%] w-full mx-auto py-40">
        {/* First part of the items */}
        <div className="flex flex-row justify-center gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ x: translateFirst }} // Apply translateX motion based on scroll
              key={"grid-1" + idx}
              className="rounded-lg overflow-hidden"
            >
              <ContentCard image={el.image} link={el.link} text={el.text} />
            </motion.div>
          ))}
        </div>

        {/* Second part of the items */}
        <div className="flex flex-row justify-center gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ x: translateSecond }} // Apply inverse translateX motion
              key={"grid-2" + idx}
              className="rounded-lg overflow-hidden"
            >
              <ContentCard image={el.image} link={el.link} text={el.text} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

function ContentCard({
  image,
  link,
  text,
}: {
  image: string;
  link: string;
  text: string;
}) {
  return (
    <div className="max-w-xs w-full group/card">
      <Link href={link}>
        <div className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between">
          {/* Use Image component for optimized image loading */}
          <Image
            src={image}
            alt="Thumbnail"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                Manu Arora
              </p>
              <p className="text-sm text-gray-400">2 min read</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {text}
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              Card with Author avatar, complete name and time to read - most
              suitable for blogs.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
