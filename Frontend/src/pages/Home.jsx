import CTA from "../components/home/CTA.jsx";
import Features from "../components/home/Features.jsx";
import Footer from "../components/home/Footer.jsx";
import Hero from "../components/home/Hero.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import Navbar from "../components/home/Navbar.jsx";
import Stats from "../components/home/Stats.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}
