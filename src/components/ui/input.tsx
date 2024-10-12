// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, m } from "framer-motion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const HOVER_RADIUS = 100; // Radius of the hover effect
    const [isHovered, setIsHovered] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = React.useCallback(
      ({ currentTarget, clientX, clientY }: any) => {
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      },
      [mouseX, mouseY]
    );

    const inputStyles = cn(
      `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm 
      file:border-0 file:bg-transparent 
      file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
      focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
      disabled:cursor-not-allowed disabled:opacity-50
      dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
      group-hover/input:shadow-none transition duration-400
      `,
      className
    );

    return (
      <m.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${
            isHovered ? HOVER_RADIUS + "px" : "0px"
          } circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input type={type} className={inputStyles} ref={ref} {...props} />
      </m.div>
    );
  }
);
Input.displayName = "Input";

export { Input };
