"use client";

import React, { useRef } from "react";
import { m, useTransform, useScroll, MotionValue } from "framer-motion";

interface ParallaxDivProps {
  children: React.ReactNode;
  distance?: number;
  className?: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ParallaxDiv: React.FC<ParallaxDivProps> = ({
  children,
  distance = 70,
  className,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, distance);

  return (
    <m.div ref={ref} style={{ y }} className={className}>
      {children}
    </m.div>
  );
};

export default ParallaxDiv;
