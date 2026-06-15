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
import { WelcomeIntro } from './components/WelcomeIntro';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [introCompleted, setIntroCompleted] = useState(false);

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
      {/* Absolute gatekeeper welcome controller loader */}
      <AnimatePresence mode="wait">
        {!introCompleted && (
          <motion.div
            key="welcome-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100]"
          >
            <WelcomeIntro onComplete={() => setIntroCompleted(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Precision custom interactive mouse cursor */}
      <CustomCursor />

      {/* Dynamic interactive math-friction particles background */}
      <ParticleBackground isDark={isDark} />

      {/* Main Orchestrator layout framework */}
      <motion.div 
        id="app-root-frame" 
        className="relative z-10 flex flex-col min-h-screen"
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
        animate={introCompleted ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      >
        {/* Sticky menu heading */}
        {introCompleted && <Navbar isDark={isDark} toggleTheme={toggleTheme} />}

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

