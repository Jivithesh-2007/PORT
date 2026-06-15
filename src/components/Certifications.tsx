import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, Search, ChevronDown, ChevronUp, Sparkles, Code, Cpu } from 'lucide-react';
import { certifications } from '../data';

export function Certifications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);

  // Group categories to make it friendly
  const categories = [
    { label: 'All', value: 'All' },
    { label: 'AI & GenAI', value: 'ai' },
    { label: 'Python & Data Science', value: 'python' },
    { label: 'DataCamp', value: 'datacamp' },
    { label: 'Google & Cloud', value: 'google' },
    { label: 'Git & Frontend', value: 'frontend' },
  ];

  const filteredCerts = certifications.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.issuer.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (activeFilter === 'All') return true;

    const lowerTitle = item.title.toLowerCase();
    const lowerIssuer = item.issuer.toLowerCase();

    if (activeFilter === 'ai') {
      return (
        lowerTitle.includes('ai') ||
        lowerTitle.includes('machine learning') ||
        lowerTitle.includes('generative') ||
        lowerTitle.includes('prompt') ||
        lowerTitle.includes('gemini') ||
        lowerTitle.includes('copilot') ||
        lowerTitle.includes('claude') ||
        lowerTitle.includes('mindsync')
      );
    }
    if (activeFilter === 'python') {
      return lowerTitle.includes('python') || lowerTitle.includes('data');
    }
    if (activeFilter === 'datacamp') {
      return lowerIssuer.includes('datacamp');
    }
    if (activeFilter === 'google') {
      return (
        lowerIssuer.includes('google') ||
        lowerTitle.includes('google') ||
        lowerTitle.includes('gcp') ||
        lowerTitle.includes('cloud')
      );
    }
    if (activeFilter === 'frontend') {
      return (
        lowerTitle.includes('git') ||
        lowerTitle.includes('web') ||
        lowerTitle.includes('javascript') ||
        lowerTitle.includes('css') ||
        lowerTitle.includes('html') ||
        lowerTitle.includes('hacksprint')
      );
    }

    return true;
  });

  const displayedCerts = filteredCerts.slice(0, visibleCount);
  const hasMore = filteredCerts.length > visibleCount;

  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 transition-colors duration-1000 overflow-hidden"
    >
      {/* Subtle details background orbs */}
      <div className="absolute left-1/3 bottom-0 w-72 h-72 bg-[#F27D26]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 top-20 w-80 h-80 bg-zinc-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Section Heading Panel */}
        <div id="certifications-heading" className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4"
          >
            Certifications & <span className="text-[#F27D26]">Milestones</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-[#F27D26] rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm font-mono tracking-widest text-zinc-400 capitalize max-w-xl mx-auto leading-relaxed"
          >
            A comprehensive list of {certifications.length} verified technical credentials, academic honors, and specialization courses.
          </motion.p>
        </div>

        {/* Search and Filters Hub */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between items-center bg-[#0d0d0d] border border-white/5 p-6 rounded-3xl backdrop-blur-md relative z-10">
          
          {/* Categories Tab Bar */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveFilter(cat.value);
                  setVisibleCount(9);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 border ${
                  activeFilter === cat.value
                    ? 'bg-[#F27D26] text-black border-[#F27D26] font-bold'
                    : 'bg-zinc-950/40 text-zinc-400 border-white/5 hover:border-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search credentials..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(9);
              }}
              className="w-full bg-[#050505] border border-white/5 text-xs text-zinc-300 pl-11 pr-5 py-3 rounded-2xl outline-none focus:border-[#F27D26]/40 focus:ring-0 transition-all font-mono"
            />
          </div>
        </div>

        {/* Layout list grids */}
        <div id="certifications-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((item, index) => (
              <motion.div
                key={item.id}
                id={`cert-card-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ 
                  delay: Math.min(index * 0.03, 0.3), 
                  duration: 0.4,
                  layout: { duration: 0.3 }
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                className="p-8 rounded-3xl bg-[#0d0d0d] border border-white/5 relative group flex flex-col justify-between transition-all duration-300 hover:border-[#F27D26]/25"
              >
                {/* Card top graphical vector */}
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 rounded-2xl bg-[#050505] border border-white/5 shadow-sm text-[#F27D26] group-hover:scale-110 group-hover:text-black group-hover:bg-[#F27D26] transition-all duration-300">
                    {item.title.toLowerCase().includes('ai') || item.title.toLowerCase().includes('copilot') || item.title.toLowerCase().includes('gemini') || item.title.toLowerCase().includes('claude') ? (
                      <Cpu className="w-5 h-5" />
                    ) : item.title.toLowerCase().includes('git') || item.title.toLowerCase().includes('web') || item.title.toLowerCase().includes('python') || item.title.toLowerCase().includes('c programming') ? (
                      <Code className="w-5 h-5" />
                    ) : (
                      <Award className="w-5 h-5" />
                    )}
                  </div>
                  {item.link && (
                    <a
                      id={`cert-link-${item.id}`}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-zinc-500 hover:text-[#F27D26] transition-colors"
                      aria-label="Verify credential details"
                    >
                      <ExternalLink className="w-4.5 h-4.5" />
                    </a>
                  )}
                </div>

                {/* Main Metadata descriptive text */}
                <div>
                  <span className="font-mono text-[10px] text-[#F27D26] font-bold tracking-widest block mb-1 uppercase">
                    {item.issuer}
                  </span>
                  <h3 className="text-base font-sans font-extrabold text-white tracking-tight leading-snug mb-3 min-h-[48px] line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                {/* Timestamp block at the bottom */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>DATE: {item.date.toUpperCase()}</span>
                  {item.credentialId ? (
                    <span className="max-w-[120px] truncate" title={item.credentialId}>
                      ID: {item.credentialId}
                    </span>
                  ) : (
                    <span className="text-zinc-600">VERIFIED ✓</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State Panel if no match */}
        {filteredCerts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-[#0d0d0d] border border-white/5 rounded-3xl text-zinc-500 font-mono text-xs"
          >
            <Sparkles className="w-8 h-8 text-[#F27D26]/20 mx-auto mb-4 animate-pulse" />
            No certifications found matching "{searchQuery}" under this category.
          </motion.div>
        )}

        {/* Show More Actions Panel */}
        {filteredCerts.length > 9 && (
          <div className="mt-16 flex justify-center relative z-10">
            <button
              onClick={() => {
                if (hasMore) {
                  setVisibleCount((prev) => Math.min(prev + 12, filteredCerts.length));
                } else {
                  setVisibleCount(9);
                }
              }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#121212] border border-white/5 hover:border-[#F27D26]/40 hover:text-[#F27D26] text-white text-xs font-mono tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
            >
              {hasMore ? (
                <>
                  <span>LOAD MORE CERTIFICATIONS ({filteredCerts.length - visibleCount} REMAINING)</span>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </>
              ) : (
                <>
                  <span>COLLAPSE TO VIEW LESS</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
