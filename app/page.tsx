import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhatICanBuild } from "@/components/sections/WhatICanBuild";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";
import { HowIWork } from "@/components/sections/HowIWork";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <FeaturedWork />
      <WhatICanBuild />
      <TechnicalSkills />
      <HowIWork />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
