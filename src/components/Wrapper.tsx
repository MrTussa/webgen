import Image from "next/image";
import { ReactNode } from "react";

interface WrapperProps {
  header?: boolean;
  children: ReactNode;
}

const Wrapper = ({ header, children }: WrapperProps) => {
  return (
    <div>
      <div className="absolute w-full h-24 z-10">
        <Image src="/border-top.svg" alt="" fill className="object-cover" />
      </div>
      {children}
      <div className="absolute w-full h-24 z-10 top-[90%]">
        <Image src="/border-bottom.svg" alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Wrapper;
