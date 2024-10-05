import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import OurAdvantages from "@/components/OurAdvantages";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-black-main ">
      <Hero />
      <Services />
      <OurAdvantages />
      <Projects />
      <AboutUs />
      <Contact />
    </div>
  );
}
