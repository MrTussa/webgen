import { cn } from "@/lib/utils";
import { TextFade } from "../TextFade";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[30rem] sm:auto-rows-[22rem] md:auto-rows-[14rem] 2xl:auto-rows-[20rem] grid-cols-1 md:grid-cols-2 gap-4 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
}) => {
  return (
    <div
      className={cn(
        " row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex space-y-4",
        className
      )}
    >
      <div className="relative flex flex-1 w-full h-full min-h-[3rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        {header}
      </div>

      <div
        className={`group-hover/bento:translate-x-2 transition duration-200 ${
          id === 0 ? "md:w-[100%] sm:w-[55%] w-full" : "sm:w-[55%] w-full"
        }`}
      >
        {icon}
        <TextFade direction="down">
          <div className="font-sans font-bold 2xl:text-4xl xl:text-2xl md:text-lg text-2xl text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
        </TextFade>
        <TextFade direction="up">
          <div className="font-sans font-normal 2xl:text-2xl xl:text-xl md:text-sm  text-lg text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        </TextFade>
      </div>
    </div>
  );
};
