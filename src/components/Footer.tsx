import { ArrowUp, Github, Linkedin, Twitter, Dribbble, Heart } from 'lucide-react';
import { personalInfo } from '../data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      id="portfolio-footer"
      className="bg-[#050505] border-t border-white/5 py-12 md:py-16 px-6 md:px-12"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 lg:px-24">
        
        {/* Brand visual panel */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-sm font-mono font-bold tracking-wider flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[#F27D26] rounded-full" />
            <span className="text-white">
              JIVITHESH<span className="text-[#F27D26]">.</span>DEV
            </span>
          </div>
          <p className="text-xs text-zinc-500 max-w-sm">
            Handcrafted with extreme precision and structural motion standards.
          </p>
        </div>

        {/* Social channels and links */}
        <div className="flex items-center gap-4">
          {personalInfo.socials.github && (
            <a
              id="footer-social-github"
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/5 text-zinc-500 hover:text-[#F27D26] hover:border-[#F27D26]/25 transition-all duration-300 bg-[#121212]"
              aria-label="GitHub Link"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {personalInfo.socials.linkedin && (
            <a
              id="footer-social-linkedin"
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/5 text-zinc-500 hover:text-[#F27D26] hover:border-[#F27D26]/25 transition-all duration-300 bg-[#121212]"
              aria-label="LinkedIn Link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {personalInfo.socials.twitter && (
            <a
              id="footer-social-twitter"
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/5 text-zinc-500 hover:text-[#F27D26] hover:border-[#F27D26]/25 transition-all duration-300 bg-[#121212]"
              aria-label="Twitter Link"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {personalInfo.socials.dribbble && (
            <a
              id="footer-social-dribbble"
              href={personalInfo.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/5 text-zinc-500 hover:text-[#F27D26] hover:border-[#F27D26]/25 transition-all duration-300 bg-[#121212]"
              aria-label="Dribbble Link"
            >
              <Dribbble className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Copyright & Back to Top controls */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <p className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 order-2 sm:order-1">
            <span>© {new Date().getFullYear()} JIVITHESH. ALL RIGHTS RESERVED.</span>
            <span className="flex items-center gap-1">
              MADE BY <Heart className="w-3 h-3 text-rose-500 animate-pulse fill-rose-500" />
            </span>
          </p>

          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#121212] border border-white/5 text-zinc-400 hover:text-[#F27D26] hover:border-[#F27D26]/20 shadow-sm transition-all duration-300 cursor-pointer order-1 sm:order-2 group"
            aria-label="Scroll back to topmost header"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
