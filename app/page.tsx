import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToActions";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testinomials";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
