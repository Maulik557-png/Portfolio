import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="blueprint-grid">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
