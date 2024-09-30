import Hero from "@/components/Hero";
import OurAdvantages from "@/components/OurAdvantages";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-black-main ">
      <Hero />
      <Services />
      <OurAdvantages />
    </div>
  );
}
