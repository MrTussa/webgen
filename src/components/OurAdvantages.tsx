import React from "react";
import Wrapper from "./Wrapper";
import FeaturesSection from "./blocks/features-section";
import HeaderText from "./HeaderText";
import ParallaxDiv from "./ParallaxDiv";

const OurAdvantages = () => {
  return (
    <section>
      <Wrapper>
        <div className="pt-24 pb-24 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-black min-h-screen bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <ParallaxDiv distance={50}>
            <HeaderText text="Наши Преимущества" />
            <FeaturesSection />
          </ParallaxDiv>
        </div>
      </Wrapper>
    </section>
  );
};

export default OurAdvantages;
