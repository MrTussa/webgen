"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { PinContainer } from "./3d-pin";
import Image from "next/image";

// TODO: в будущем исправить на useRef aka ref

interface ParallaxScrollProps {
  items: { image: string; link: string; text: string }[];
  className?: string;
}

export const ParallaxScroll = ({ items, className }: ParallaxScrollProps) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Вызов handleResize при монтировании компонента
    handleResize();

    // Добавляем слушатель на изменение размера окна
    window.addEventListener("resize", handleResize);

    // Очищаем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Разделяем элементы на основе ширины экрана
  let firstPart, secondPart, thirdPart;
  let translateFirst, translateSecond, translateThird;

  if (isMobile) {
    firstPart = items.slice(0, 2);
    secondPart = items.slice(2, 4);
    thirdPart = items.slice(4, 6);
    translateFirst = useTransform(scrollYProgress, [0, 1], [-530, 400]);
    translateSecond = useTransform(scrollYProgress, [0, 1], [670, -400]);
    translateThird = useTransform(scrollYProgress, [0, 1], [-780, 400]);
  } else {
    firstPart = items.slice(0, 3);
    secondPart = items.slice(3, 6);
    thirdPart = null;
    translateFirst = useTransform(scrollYProgress, [0, 1], [-500, 400]);
    translateSecond = useTransform(scrollYProgress, [0, 1], [500, -400]);
    translateThird = useTransform(scrollYProgress, [0, 1], [500, -400]);
  }

  return (
    <div className={cn("flex justify-center w-full", className)} ref={gridRef}>
      <div className="flex flex-col max-w-[90%] w-full">
        {/* Первый ряд */}
        <div className="flex flex-row justify-center gap-5 mb-5">
          {firstPart.map((item, index) => (
            <m.div
              key={`grid-1-${index}`}
              style={{ x: translateFirst }}
              className="rounded-lg"
            >
              <ContentCard {...item} />
            </m.div>
          ))}
        </div>

        {/* Второй ряд */}
        <div className="flex flex-row justify-center gap-5 mb-5">
          {secondPart.map((item, index) => (
            <m.div
              key={`grid-2-${index}`}
              style={{ x: translateSecond }}
              className="rounded-lg"
            >
              <ContentCard {...item} />
            </m.div>
          ))}
        </div>

        {/* Третий ряд: отображается только на экранах меньше 768px */}
        {isMobile && thirdPart && (
          <div className="flex flex-row justify-center gap-5">
            {thirdPart.map((item, index) => (
              <m.div
                key={`grid-3-${index}`}
                style={{ x: translateThird }}
                className="rounded-lg"
              >
                <ContentCard {...item} />
              </m.div>
            ))}
          </div>
        )}
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
    <div className="max-w-xs group/card w-[10rem] sm:w-[18rem] md:w-full">
      <div className="cursor-pointer relative card rounded-md shadow-xl mx-auto flex flex-col justify-between">
        <PinContainer title={link} href={link} className="relative">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[10rem] sm:w-[18rem] md:w-[20rem] h-[15rem] sm:h-[20rem]">
            <p className="max-w-xs !pb-2 !m-0 font-light sm:font-semibold text-xs sm:text-base text-slate-100">
              {text}
            </p>
            <div className="relative flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image
                src={image}
                alt="image"
                loading="eager"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
