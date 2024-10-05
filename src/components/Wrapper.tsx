import Image from "next/image";
import { ReactNode } from "react";

interface WrapperProps {
  header?: boolean;
  children: ReactNode;
}

const Wrapper = ({ header, children }: WrapperProps) => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <div className="absolute w-full h-24 z-10">
        <Image
          src="/border-top.svg"
          alt=""
          fill
          className="object-cover svg-shadow-up [mask-image:linear-gradient(to_top,transparent_-40%,black)]"
        />
      </div>
      {children}
      <div className="absolute w-full h-24 z-10 bottom-0">
        <Image
          src="/border-bottom.svg"
          alt=""
          fill
          className="object-cover svg-shadow-down [mask-image:linear-gradient(to_bottom,transparent_-40%,black)]"
        />
      </div>
    </div>
  );
};

export default Wrapper;
