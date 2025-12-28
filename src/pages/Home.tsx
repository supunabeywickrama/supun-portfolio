import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Education } from '../components/sections/Education';
import { Leadership } from '../components/sections/Leadership';
import { Contact } from '../components/sections/Contact';
export function Home() {
  return <div className="bg-navy-900 min-h-screen text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>;
}