import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { skillGroups } from '../data';

// Custom render map to convert string identifier to Lucide component
const getIconComponent = (name: string) => {
  const Icon = (LucideIcons as any)[name];
  if (Icon) return Icon;
  return LucideIcons.Cpu; // Default fallback icon
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 transition-colors duration-1000 overflow-hidden"
    >
      {/* Dynamic Background visual details */}
      <div 
        id="skills-linear-glow"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F27D26]/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading Panel */}
        <div id="skills-heading" className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4"
          >
            Technical <span className="text-[#F27D26]">Inventory</span>
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
            className="text-sm font-mono tracking-widest text-[#F27D26] uppercase"
          >
            Capabilities and proficiencies
          </motion.p>
        </div>

        {/* Categories Grid (Modular architecture) */}
        <div id="skills-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              id={`skill-category-${groupIdx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * groupIdx, duration: 0.6 }}
              className="p-8 rounded-3xl bg-[#121212] border border-white/5 hover:border-[#F27D26]/20 transition-all duration-300 relative group flex flex-col h-full"
            >
              {/* Box Top Glow Bar of groups */}
              <div id="skill-glow-indicator" className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#F27D26] to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-full" />
              
              {/* Category Header */}
              <div className="mb-8">
                <span className="font-mono text-[10px] text-[#F27D26] font-bold tracking-wider uppercase block mb-1">
                  MODULE {groupIdx + 1}
                </span>
                <h3 className="text-lg font-sans font-bold text-white tracking-tight">
                  {group.category}
                </h3>
              </div>

              {/* Skill Progress Items */}
              <div className="space-y-6 flex-1">
                {group.skills.map((skill, skillIdx) => {
                  const IconComp = getIconComponent(skill.iconName);
                  return (
                    <div 
                      key={skill.name} 
                      id={`skill-item-${groupIdx}-${skillIdx}`}
                      className="group/skill relative"
                    >
                      {/* Flex header */}
                      <div className="flex items-center justify-between mb-2 font-sans">
                        <div className="flex items-center gap-2.5 font-sans">
                          {/* Glow background around icon */}
                          <div id={`skill-icon-glow-${groupIdx}-${skillIdx}`} className="p-2 rounded-lg bg-[#1a1a1a] text-[#F27D26] border border-white/5 group-hover/skill:bg-[#F27D26] group-hover/skill:text-black group-hover/skill:border-transparent transition-all duration-300">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-zinc-300 group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-semibold text-[#F27D26]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden relative">
                        {/* Shimmer effect inside loading track */}
                        <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-2/3 -translate-x-full group-hover/skill:animate-shimmer" />
                        
                        <motion.div
                          id={`skill-loading-bar-${groupIdx}-${skillIdx}`}
                          className="h-full bg-gradient-to-r from-[#F27D26] to-amber-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill visual tags - Orbiting tags alternative */}
        <div id="skills-floating-chips" className="mt-20 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {["Webpack", "Vite", "Drizzle ORM", "Auth0", "PWA Mechanics", "Git", "Cypress", "SEO Core", "Tailwind v4", "Babel", "Vercel Cloud", "Jest Engine"].map((keyword, index) => (
            <motion.div
              key={keyword}
              id={`orbiting-badge-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              whileHover={{ 
                scale: 1.06, 
                backgroundColor: 'rgba(242, 125, 38, 0.12)',
                borderColor: '#F27D26'
              }}
              className="px-4 py-2 rounded-xl text-xs font-mono font-medium text-zinc-400 border border-white/5 bg-[#121212] backdrop-blur-sm cursor-default transition-all duration-300"
            >
              {keyword}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
