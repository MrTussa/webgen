import { AuroraBackground } from "./ui/aurora-background";
import Wrapper from "./Wrapper";

import { TextFade } from "./TextFade";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative">
      <Wrapper>
        <AuroraBackground>
          <div className="sm:px-16 h-[calc(100vh-200px)] px-6 w-[98vw] flex flex-row items-center justify-end gap-5 relative">
            <Image
              src="/logo.svg"
              alt="logo"
              width={300}
              height={150}
              className="absolute left-0 top-8"
            />
            <TextFade
              direction="up"
              className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
            >
              <h2 className="text-gray-100 text-6xl">
                Открой новые возможности
                <br />
                для своего дела!
              </h2>
            </TextFade>
          </div>
        </AuroraBackground>
      </Wrapper>
    </section>
  );
};

export default Hero;
