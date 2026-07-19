import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data';

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 transition-colors duration-1000"
    >
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
            Certifications & <span className="text-slate-400">Achievements</span>
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
            className="text-sm font-mono tracking-widest text-slate-400 uppercase"
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
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-slate-500/25 transition-all duration-300 group flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-slate-500/10 text-slate-400 group-hover:bg-slate-500 group-hover:text-white transition-all duration-300">
                  <Award className="w-5 h-5" />
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-500/10 text-slate-400 hover:bg-slate-500 hover:text-white transition-all duration-300"
                    aria-label="View Certificate"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-base font-semibold text-white mb-1.5 line-clamp-2 group-hover:text-slate-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-400 mb-3">
                  {cert.issuer}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500">{cert.date}</span>
                  {cert.credentialId && (
                    <span className="text-slate-500 font-mono text-[10px] bg-white/5 px-2 py-1 rounded">
                      ID: {cert.credentialId.slice(0, 8)}...
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 p-6 rounded-2xl bg-[#121212] border border-white/5 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="w-5 h-5 text-slate-400" />
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wide">Total Certifications</h4>
          </div>
          <p className="text-4xl font-black text-white">
            {certifications.length}
          </p>
          <p className="text-xs text-zinc-500 mt-2">
            Completed and verified credentials
          </p>
        </motion.div>

      </div>
    </section>
  );
}
