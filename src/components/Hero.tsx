import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data';

export function Hero() {
  const [typedTitle, setTypedTitle] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Computer Science Student",
    "Web Developer",
    "Programming Enthusiast",
    "Problem Solver"
  ];

  // Typing effect loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullRole = roles[roleIndex];
    
    const tick = () => {
      if (!isDeleting) {
        setTypedTitle(currentFullRole.substring(0, typedTitle.length + 1));
        if (typedTitle === currentFullRole) {
          // Stay static for a bit before starting deletion
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(tick, 100);
        }
      } else {
        setTypedTitle(currentFullRole.substring(0, typedTitle.length - 1));
        if (typedTitle === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          timer = setTimeout(tick, 50);
        }
      }
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [typedTitle, isDeleting, roleIndex]);

  // Subtle scroll parallax effect using motion
  const { scrollY } = useScroll();
  const orbY1 = useTransform(scrollY, [0, 600], [0, 100]);
  const orbY2 = useTransform(scrollY, [0, 600], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollToSelector = (selector: string) => {
    const element = document.getElementById(selector);
    if (element) {
      const offset = 80;
      const pos = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 bg-[#050505] dark:bg-[#050505] light:bg-[#F9FAFB] transition-colors duration-1000 pt-20"
    >
      {/* Decorative Grid SVG background */}
      <div 
        id="hero-grid-pattern"
        className="absolute inset-0 dark:bg-[radial-gradient(rgba(242,125,38,0.06)_1px,transparent_1px)] light:bg-[radial-gradient(rgba(107,114,128,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
      />

      {/* Floating Gradient Orbs */}
      <motion.div
        id="hero-orb-1"
        style={{ y: orbY1 }}
        className="absolute top-1/4 left-1/12 w-72 h-72 md:w-[400px] md:h-[400px] rounded-full bg-slate-500/10 blur-3xl pointer-events-none"
      />
      <motion.div
        id="hero-orb-2"
        style={{ y: orbY2 }}
        className="absolute bottom-1/3 right-1/12 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-gray-600/8 blur-3xl pointer-events-none"
      />

      {/* Hero Core Content Layout */}
      <motion.div
        id="hero-content"
        style={{ opacity: heroOpacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Intro Chip Accent */}
        <motion.div
          id="hero-chip"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-slate-500/20 text-slate-400 text-xs font-mono font-semibold tracking-wider mb-8 shadow-sm"
        >
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
          OPEN TO OPPORTUNITIES
        </motion.div>

        {/* Display Typography Title */}
        <h1 
          id="hero-title"
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight dark:text-white light:text-[#111827] leading-[1.12] mb-6"
        >
          Hi, I am <span className="text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-slate-400 dark:via-gray-500 dark:to-slate-400 light:bg-gradient-to-r light:from-gray-700 light:via-gray-600 light:to-gray-700">{personalInfo.name}</span>
        </h1>

        {/* Dynamic Typing Subtitle */}
        <div id="hero-tagline-container" className="h-10 sm:h-12 flex items-center justify-center mb-8">
          <p className="text-xl sm:text-2xl font-mono font-medium dark:text-slate-300 light:text-gray-700">
            I am a <span className="dark:text-slate-400 light:text-gray-600 border-r-2 dark:border-slate-400 light:border-gray-600 animate-pulse pr-0.5">{typedTitle}</span>
          </p>
        </div>

        {/* Narrative Description Statement */}
        <p 
          id="hero-intro-bio"
          className="max-w-2xl text-base sm:text-lg dark:text-[#A1A1AA] light:text-[#6B7280] leading-relaxed font-sans mb-12 text-center"
        >
          {personalInfo.tagline} {personalInfo.bio}
        </p>

        {/* Dynamic Call To Action Buttons */}
        <div id="hero-cta-group" className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button
            id="hero-cta-projects"
            onClick={() => scrollToSelector('projects')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl dark:bg-slate-500 dark:hover:bg-slate-600 light:bg-gray-700 light:hover:bg-gray-800 dark:text-white light:text-white font-extrabold flex items-center justify-center gap-2 group shadow-lg dark:shadow-slate-500/10 light:shadow-gray-700/10 transition-all duration-300 cursor-pointer text-sm tracking-wide"
          >
            View My Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            id="hero-cta-contact"
            onClick={() => scrollToSelector('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#121212] hover:bg-white/5 text-white font-semibold border border-white/15 flex items-center justify-center transition-all duration-300 cursor-pointer text-sm tracking-wide"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Connection Rows */}
        <div id="hero-socials" className="flex items-center gap-6">
          <a
            id="hero-social-github"
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#121212] hover:bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all duration-300 shadow-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            id="hero-social-linkedin"
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#121212] hover:bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all duration-300 shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            id="hero-social-twitter"
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#121212] hover:bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      {/* Smooth Down indicator arrow */}
      <motion.div
        id="hero-scroll-indicator"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 1.8, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10"
        onClick={() => scrollToSelector('about')}
      >
        <span className="text-xs font-mono font-medium tracking-widest text-[#A1A1AA] uppercase">
          SCROLL DOWN
        </span>
        <ArrowDown className="w-4 h-4 text-[#A1A1AA]" />
      </motion.div>
    </section>
  );
}
