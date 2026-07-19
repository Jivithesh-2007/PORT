import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experienceItems } from '../data';

export function Experience() {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'education'>('all');

  const filteredItems = experienceItems.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 transition-colors duration-1000 overflow-hidden"
    >
      {/* Decorative timeline graphic elements */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-[slate-500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Section Heading Panel */}
        <div id="experience-heading" className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4"
          >
            Journey & <span className="text-[slate-500]">Timeline</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-[slate-500] rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm font-mono tracking-widest text-[slate-500] uppercase"
          >
            My education and professional background
          </motion.p>
        </div>

        {/* Tab Selection Filter */}
        <div id="timeline-tabs" className="flex items-center justify-center gap-2 mb-16">
          {(['all', 'work', 'education'] as const).map((tab) => (
            <button
               key={tab}
               id={`timeline-tab-${tab}`}
               onClick={() => setActiveTab(tab)}
               className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                 activeTab === tab
                   ? 'bg-[slate-500] text-black font-extrabold shadow-md shadow-[slate-500]/20'
                   : 'bg-[#121212] text-[#A1A1AA] hover:text-white border border-white/5'
               }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Timeline main container track centered and sized nicely */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-white/10 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12">
          {filteredItems.map((item, idx) => {
            const isWork = item.type === 'work';
            const Icon = isWork ? Briefcase : GraduationCap;

            return (
              <motion.div
                key={item.id}
                id={`timeline-node-${item.id}`}
                viewport={{ once: true, margin: "-100px" }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div id={`timeline-dot-${item.id}`} className={`absolute -left-[45px] sm:-left-[61px] top-1 w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center transition-all duration-300 ${
                  isWork 
                    ? 'bg-[#1a1a1a] text-[slate-500] group-hover:border-[slate-500]' 
                    : 'bg-[#1a1a1a] text-slate-500 group-hover:border-slate-500'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Info Card Layout */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/5 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-[slate-500]/10">
                  {/* Meta tag label */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold tracking-widest uppercase ${
                      isWork 
                        ? 'bg-[slate-500]/12 text-[slate-500]' 
                        : 'bg-slate-500/12 text-slate-400'
                    }`}>
                      {item.type}
                    </span>
                    
                    {/* Period */}
                    <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl font-sans font-black tracking-tight text-white mb-1.5 transition-colors group-hover:text-[slate-500] duration-300">
                    {item.role}
                  </h3>

                  {/* Company and location subheader */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-6 text-sm text-zinc-400 font-medium">
                    <span className="text-zinc-200 font-semibold">{item.company}</span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {item.location}
                    </span>
                  </div>

                  {/* Description text block */}
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullet accomplishments list */}
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, kIdx) => (
                      <li 
                        key={kIdx} 
                        id={`timeline-bullet-${item.id}-${kIdx}`}
                        className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed"
                      >
                        <ChevronRight className="w-4 h-4 text-[slate-500] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      </div>
    </section>
  );
}
