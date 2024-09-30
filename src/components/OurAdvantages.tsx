import React from "react";
import Wrapper from "./Wrapper";

const OurAdvantages = () => {
  return (
    <div>
      <Wrapper>
        <section className="pt-24 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-black bg-grid-white/[0.2]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <h2 className="text-7xl mb-4">Наши Преимущества</h2>
          <div></div>
        </section>
      </Wrapper>
    </div>
  );
};

export default OurAdvantages;
