import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Timeline', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when central portion is in view
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => scrollToSection('hero')}
          className="text-lg font-bold font-mono tracking-wider flex items-center gap-2 group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 bg-[#F27D26] rounded-full animate-pulse" />
          <span className="text-white transition-colors duration-300">
            JIVITHESH<span className="text-[#F27D26]">.</span>DEV
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-item-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-1.5 py-1 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-[#F27D26] font-semibold'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F27D26] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-5 w-px bg-white/10" />

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-desktop"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-slate-300 transition-all duration-300 cursor-pointer opacity-80 hover:opacity-100"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-amber-500" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation controls */}
        <div className="flex md:hidden items-center gap-4">
          <button
            id="theme-toggle-mobile"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-slate-300 transition-all duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-amber-500" />
            )}
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-white/10 text-slate-300 hover:bg-white/5 transition-all duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full absolute top-[73px] left-0 bg-[#0c0c0c]/95 backdrop-blur-lg border-b border-white/10 overflow-hidden shadow-xl"
          >
            <nav className="px-6 py-6 pb-8 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      id={`mobile-nav-item-${item.id}`}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left py-2 text-base font-semibold transition-colors duration-300 cursor-pointer flex items-center justify-between ${
                        activeSection === item.id
                          ? 'text-[#F27D26]'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {activeSection === item.id && (
                        <span className="w-1.5 h-1.5 bg-[#F27D26] rounded-full" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
