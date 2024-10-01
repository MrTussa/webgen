import React from "react";
import HeaderText from "./HeaderText";
import { ParallaxScroll } from "./ui/parallax-scroll";

const items = [
  { image: "/border-bottom.svg", link: "/page1", text: "Card 1" },
  { image: "/border-bottom.svg", link: "/page2", text: "Card 2" },
  { image: "/border-bottom.svg", link: "/page3", text: "Card 3" },
  { image: "/border-bottom.svg", link: "/page4", text: "Card 4" },
  { image: "/border-bottom.svg", link: "/page5", text: "Card 5" },
  { image: "/border-bottom.svg", link: "/page6", text: "Card 6" },
];

const Projects = () => {
  return (
    <section className="bg-black-secondary z-0 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-dot-black -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)]" />
      <HeaderText text="Наши Работы" />
      <ParallaxScroll items={items} />
    </section>
  );
};

export default Projects;
