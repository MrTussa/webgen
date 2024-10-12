// import AboutUs from "@/components/AboutUs";
// import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import OurAdvantages from "@/components/OurAdvantages";
// import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { domAnimation, LazyMotion } from "framer-motion";

import dynamic from "next/dynamic"; // Импортируем dynamic

const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
  loading: () => <p>Загрузка...</p>,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
  loading: () => <p>Загрузка...</p>,
});
const AboutUs = dynamic(() => import("@/components/AboutUs"), {
  ssr: false,
  loading: () => <p>Загрузка...</p>,
});

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-black-main ">
        <Hero />
        <Services />
        <OurAdvantages />
        <Projects />
        <AboutUs />
        <Contact />
      </div>
    </LazyMotion>
  );
}
