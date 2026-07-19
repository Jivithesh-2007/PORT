import { motion } from 'motion/react';
import { Award, Code, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo } from '../data';

export function About() {
  const stats = [
    { value: "9.35", label: "Academic Grade (CGPA)", icon: GraduationCap, color: "text-slate-400" },
    { value: "3+", label: "Completed Internships", icon: Briefcase, color: "text-slate-400" },
    { value: "8+", label: "Personal Projects", icon: Code, color: "text-slate-400" },
    { value: "2", label: "Years in CSE", icon: Award, color: "text-slate-400" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 transition-colors duration-1000 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Section Heading Panel */}
        <div id="about-heading" className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4"
          >
            About <span className="text-slate-400">Me</span>
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
            GETTING TO KNOW ME BETTER
          </motion.p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Glass Artwork Portrait Image */}
          <motion.div
            id="about-portrait-card-parent"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              {/* Outer decorative gradient border */}
              <div 
                id="portrait-glow-border"
                className="absolute inset-0 bg-gradient-to-tr from-slate-500 to-gray-600 opacity-65 rounded-3xl scale-102 group-hover:scale-105 transition-transform duration-500 blur-sm"
              />
              {/* Actual Image container */}
              <div id="portrait-img-frame" className="relative w-full h-full rounded-2xl overflow-hidden bg-[#121212]">
                <img
                  id="portrait-img"
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-108 transition-all duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glassmorphic overlay */}
                <div 
                  id="portrait-glass-caption"
                  className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#121212]/90 backdrop-blur-md border border-white/10 text-white shadow-lg"
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[8px] text-emerald-400 font-bold uppercase tracking-widest">
                      Available for Opportunities
                    </span>
                  </div>
                  <p className="font-serif font-black text-base leading-tight">
                    {personalInfo.name}
                  </p>
                  <p className="font-mono text-[9px] text-zinc-400 mt-2">
                    IP: 142.250.190.46 // PROTOCOL: TRUE
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Details and Quick Stats Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-serif font-extrabold text-white tracking-tight leading-tight"
            >
              Full Stack Developer & <span className="text-slate-400 italic">Web Developer</span>.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-zinc-300 leading-relaxed text-base font-sans"
            >
              I am a 2nd-year Computer Science and Engineering student at Karunya Institute of Technology & Sciences, passionate about web development, programming, and learning new technologies through hands-on projects.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-zinc-300 leading-relaxed text-base font-sans"
            >
              Currently building my foundation in programming with languages like C and Python, exploring web development with HTML, CSS, and JavaScript. Always eager to learn and take on new challenges that help me grow as a developer.
            </motion.p>

            {/* Micro Stats Bento-style layout */}
            <div id="about-stats-bento" className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    id={`about-stat-card-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="p-5 rounded-2xl bg-[#121212] border border-white/5 hover:border-slate-500/30 hover:shadow-2xl hover:shadow-slate-500/5 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className={`p-2.5 rounded-xl bg-[#050505] border border-white/5 shadow-sm ${stat.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-mono font-black text-white leading-none">
                        {stat.value}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1.5 font-medium tracking-wide font-sans">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
