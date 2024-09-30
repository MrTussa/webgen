import { AuroraBackground } from "./ui/aurora-background";
import Wrapper from "./Wrapper";
import { TextFade } from "./TextFade";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <Wrapper>
        <AuroraBackground>
          <div className=" flex flex-row items-center justify-end gap-5 relative min-h-screen w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8">
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
              <h1 className="text-gray-100 text-6xl">
                Открой новые возможности
                <br />
                для своего дела!
              </h1>
            </TextFade>
          </div>
        </AuroraBackground>
      </Wrapper>
    </section>
  );
};

export default Hero;
