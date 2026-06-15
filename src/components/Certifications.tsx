import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data';

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 transition-colors duration-1000 overflow-hidden"
    >
      {/* Subtle details background orbs */}
      <div className="absolute left-1/3 bottom-0 w-72 h-72 bg-[#F27D26]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading Panel */}
        <div id="certifications-heading" className="flex flex-col items-center text-center mb-20">
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
            className="text-sm font-mono tracking-widest text-[#F27D26] uppercase"
          >
            Verified credentials and verified achievements
          </motion.p>
        </div>

        {/* Layout list grids */}
        <div id="certifications-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((item, index) => (
            <motion.div
              key={item.id}
              id={`cert-card-${item.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -6,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="p-8 rounded-3xl bg-[#121212] border border-white/5 relative group flex flex-col justify-between transition-all duration-300 hover:border-[#F27D26]/25"
            >
              {/* Card top graphical vector */}
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 rounded-2xl bg-[#050505] border border-white/5 shadow-sm text-[#F27D26] group-hover:scale-110 group-hover:text-black group-hover:bg-[#F27D26] transition-all duration-300">
                  <Award className="w-5 h-5" />
                </div>
                {item.link && (
                  <a
                    id={`cert-link-${item.id}`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-zinc-400 hover:text-[#F27D26] transition-colors"
                    aria-label="Verify credential details"
                  >
                    <ExternalLink className="w-4.5 h-4.5" />
                  </a>
                )}
              </div>

              {/* Main Metadata descriptive text */}
              <div>
                <span className="font-mono text-[10px] text-[#F27D26] font-bold tracking-widest block mb-1">
                  {item.issuer.toUpperCase()}
                </span>
                <h3 className="text-lg font-sans font-extrabold text-white tracking-tight leading-snug mb-3">
                  {item.title}
                </h3>
              </div>

              {/* Timestamp block at the bottom */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>YEAR: {item.date}</span>
                {item.credentialId && (
                  <span className="max-w-[150px] truncate">
                    ID: {item.credentialId}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
