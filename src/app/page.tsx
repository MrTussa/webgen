import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import OurAdvantages from "@/components/OurAdvantages";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { domAnimation, LazyMotion } from "framer-motion";

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
