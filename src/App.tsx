/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Initialize theme from storage or preferences on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('portfolio-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('portfolio-theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans selection:bg-[#F27D26] selection:text-black overflow-hidden transition-colors duration-1000">
      {/* Precision custom interactive mouse cursor */}
      <CustomCursor />

      {/* Dynamic interactive math-friction particles background */}
      <ParticleBackground isDark={isDark} />

      {/* Main Orchestrator layout framework */}
      <div id="app-root-frame" className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky menu heading */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        {/* Modular portfolio view sections list */}
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>

        {/* Bottom standard micro-links */}
        <Footer />
      </div>
    </div>
  );
}

