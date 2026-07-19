import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, ArrowRight } from 'lucide-react';
import { certifications } from '../data';

export function Certifications() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 10);
  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 px-6 md:px-12 dark:bg-[#050505] light:bg-[#F9FAFB] dark:border-white/5 light:border-black/5 border-t transition-colors duration-1000"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Section Heading Panel */}
        <div id="certifications-heading" className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold tracking-tight dark:text-white light:text-[#111827] mb-4"
          >
            Certifications & <span className="dark:text-slate-400 light:text-[#9CA3AF]">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-slate-500 rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm font-mono tracking-widest dark:text-slate-400 light:text-[#9CA3AF] uppercase"
          >
            Credentials earned through learning and skill development
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          layout
          id="certifications-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="p-6 rounded-2xl dark:bg-[#0d0d0d] light:bg-white dark:border-white/5 light:border-black/10 dark:hover:border-slate-500/25 light:hover:border-gray-400/30 transition-all duration-300 group flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-lg dark:bg-slate-500/10 light:bg-gray-200 dark:text-slate-400 light:text-gray-700 dark:group-hover:bg-slate-500 dark:group-hover:text-white light:group-hover:bg-gray-700 light:group-hover:text-white transition-all duration-300">
                  <Award className="w-5 h-5" />
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg dark:bg-slate-500/10 light:bg-gray-200 dark:text-slate-400 light:text-gray-700 dark:hover:bg-slate-500 dark:hover:text-white light:hover:bg-gray-700 light:hover:text-white transition-all duration-300"
                    aria-label="View Certificate"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-base font-semibold dark:text-white light:text-[#111827] mb-1.5 line-clamp-2 dark:group-hover:text-slate-300 light:group-hover:text-gray-700 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm dark:text-slate-400 light:text-[#6B7280] mb-3">
                  {cert.issuer}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="dark:text-zinc-500 light:text-gray-600">{cert.date}</span>
                  {cert.credentialId && (
                    <span className="dark:text-slate-500 light:text-[#9CA3AF] font-mono text-[10px] dark:bg-white/5 light:bg-black/5 px-2 py-1 rounded">
                      ID: {cert.credentialId.slice(0, 8)}...
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {!showAllCerts && certifications.length > 10 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAllCerts(true)}
              className="px-8 py-3.5 rounded-xl dark:bg-slate-500 dark:hover:bg-slate-600 light:bg-gray-700 light:hover:bg-gray-800 text-white font-bold text-sm flex items-center gap-2 tracking-wide transition-all duration-300 dark:shadow-lg dark:shadow-slate-500/20 light:shadow-lg light:shadow-gray-700/20 dark:hover:dark:shadow-slate-500/40 light:hover:light:shadow-gray-700/40"
            >
              View All Certifications <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* View Less Button */}
        {showAllCerts && certifications.length > 10 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAllCerts(false)}
              className="px-8 py-3.5 rounded-xl dark:bg-slate-500/20 dark:hover:bg-slate-500/30 light:bg-gray-200 light:hover:bg-gray-300 dark:text-slate-300 light:text-gray-700 font-bold text-sm flex items-center gap-2 tracking-wide transition-all duration-300 dark:border-slate-500/30 light:border-gray-400/30 border"
            >
              Show Less <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
          </motion.div>
        )}

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 p-6 rounded-2xl dark:bg-[#121212] light:bg-white dark:border-white/5 light:border-black/10 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="w-5 h-5 dark:text-slate-400 light:text-gray-700" />
            <h4 className="text-sm font-mono dark:text-slate-400 light:text-[#6B7280] uppercase tracking-wide">Total Certifications</h4>
          </div>
          <p className="text-4xl font-black dark:text-white light:text-[#111827]">
            {certifications.length}
          </p>
          <p className="text-xs dark:text-zinc-500 light:text-gray-600 mt-2">
            Completed and verified credentials
          </p>
        </motion.div>

      </div>
    </section>
  );
}
