"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PinContainer } from "./3d-pin";
import Image from "next/image";

interface ParallaxScrollProps {
  items: { image: string; link: string; text: string }[];
  className?: string;
}

export const ParallaxScroll = ({ items, className }: ParallaxScrollProps) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll();

  const translateFirst = useTransform(scrollYProgress, [0, 1], [-500, 400]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [500, -400]);

  const firstPart = items.slice(0, 3);
  const secondPart = items.slice(3);

  return (
    <div className={cn("flex justify-center w-full", className)} ref={gridRef}>
      <div className="flex flex-col max-w-[90%] w-full mx-auto">
        <div className="flex flex-row justify-center gap-5">
          {firstPart.map((item, index) => (
            <motion.div
              key={`grid-1-${index}`}
              style={{ x: translateFirst }}
              className="rounded-lg"
            >
              <ContentCard {...item} />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-row justify-center gap-5">
          {secondPart.map((item, index) => (
            <motion.div
              key={`grid-2-${index}`}
              style={{ x: translateSecond }}
              className="rounded-lg"
            >
              <ContentCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ContentCardProps {
  image: string;
  link: string;
  text: string;
}

function ContentCard({ image, link, text }: ContentCardProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div className="cursor-pointer relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between">
        <PinContainer title={link} href={link} className="relative">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <p className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              {text}
            </p>
            <Image src={image} alt="image" layout="fill" objectFit="cover" />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
