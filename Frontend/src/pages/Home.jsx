import Features from "../components/home/Features.jsx";
import Hero from "../components/home/Hero.jsx";
import Navbar from "../components/home/Navbar.jsx";
import Stats from "../components/home/Stats.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
    </>
  );
}
