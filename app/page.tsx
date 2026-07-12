import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/sections/Navigation";
import Acting from "@/components/sections/Acting";
import Writing from "@/components/sections/Writing";
import Voice from "@/components/sections/Voice";
import Stories from "@/components/sections/Stories";
import VisualPortfolio from "@/components/sections/VisualPortfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <Navigation />
      <Hero />
      <About />
      <Acting />
      <Writing />
      <Voice />
      <Stories />
      <VisualPortfolio />
      <Contact />
      <Footer />
    </main>
  );
}