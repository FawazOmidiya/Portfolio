"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}
