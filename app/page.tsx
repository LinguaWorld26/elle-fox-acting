import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Credits from "@/components/sections/Credits";
import Footer from "@/components/sections/Footer";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/sections/Navigation";
import Reel from "@/components/sections/Reel";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <Navigation />
      <Hero />
      <About />
      <Reel />
      <Credits />
      <Gallery />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}