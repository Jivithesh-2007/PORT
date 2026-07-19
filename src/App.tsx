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
import { motion } from 'motion/react';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Initialize theme from storage or preferences on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('portfolio-theme', 'dark');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        localStorage.setItem('portfolio-theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-1000 ${
      isDark 
        ? 'bg-[#050505] text-white' 
        : 'bg-[#F9FAFB] text-[#111827]'
    } font-sans selection:bg-gray-400 selection:text-white`}>
      {/* Precision custom interactive mouse cursor */}
      <CustomCursor />

      {/* Dynamic interactive math-friction particles background */}
      <ParticleBackground isDark={isDark} />

      {/* Main Orchestrator layout framework */}
      <motion.div 
        id="app-root-frame" 
        className="relative z-10 flex flex-col min-h-screen"
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
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
      </motion.div>
    </div>
  );
}

