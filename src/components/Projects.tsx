import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X, ArrowUpRight, ArrowRight, Layers, Cpu, Server, Code2, Terminal } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Filter categories helper
  const filterCategories = ['All', 'Fullstack', 'AI & Robotics', 'Frontend'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Fullstack') {
      return project.category.toLowerCase().includes('fullstack') || project.category.toLowerCase().includes('saas');
    }
    if (activeFilter === 'AI & Robotics') {
      return (
        project.category.toLowerCase().includes('ai') || 
        project.category.toLowerCase().includes('robot') || 
        project.category.toLowerCase().includes('algorithmic')
      );
    }
    if (activeFilter === 'Frontend') {
      return project.category.toLowerCase().includes('frontend') || project.category.toLowerCase().includes('ui');
    }
    return true;
  });

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-6 md:px-12 dark:bg-[#050505] light:bg-[#F9FAFB] dark:border-white/5 light:border-black/5 border-t transition-colors duration-1000"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Section Heading Panel */}
        <div id="projects-heading" className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold tracking-tight dark:text-white light:text-[#111827] mb-4"
          >
            My <span className="dark:text-slate-400 light:text-[#9CA3AF]">Projects</span>
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
            BUILT WITH PASSION AND DEDICATION
          </motion.p>
        </div>

        {/* Filter Selection Panel */}
        <div id="projects-filters" className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat}`}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'dark:bg-slate-500 light:bg-gray-700 text-white font-extrabold shadow-md dark:shadow-slate-500/20 light:shadow-gray-700/20'
                  : 'dark:bg-[#121212] light:bg-white dark:text-[#A1A1AA] light:text-[#6B7280] dark:hover:text-white light:hover:text-[#111827] dark:border-white/5 light:border-black/10 border'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Cards Layout Grid */}
        <motion.div
          layout
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout text-sans">
            {displayedProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                className="p-8 rounded-3xl dark:bg-[#0d0d0d] light:bg-white dark:border-white/5 light:border-black/10 relative group flex flex-col justify-between transition-all duration-300 dark:hover:border-slate-500/25 light:hover:border-gray-400/30 cursor-pointer h-full"
                onClick={() => setSelectedProject(project)}
              >
                {/* Micro bento style header top row */}
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 rounded-2xl dark:bg-[#050505] light:bg-gray-100 dark:border-white/5 light:border-black/10 shadow-sm dark:text-slate-400 light:text-gray-600 group-hover:scale-110 dark:group-hover:text-white light:group-hover:text-[#111827] dark:group-hover:bg-slate-500 light:group-hover:bg-gray-700 transition-all duration-300">
                    {project.category.toLowerCase().includes('robot') || project.category.toLowerCase().includes('ai') ? (
                      <Cpu className="w-5 h-5" />
                    ) : project.category.toLowerCase().includes('fullstack') ? (
                      <Server className="w-5 h-5" />
                    ) : project.category.toLowerCase().includes('frontend') ? (
                      <Code2 className="w-5 h-5" />
                    ) : (
                      <Terminal className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 dark:text-zinc-500 light:text-gray-500 dark:group-hover:text-slate-400 light:group-hover:text-gray-700 transition-colors">
                    <span className="font-mono text-[9px] tracking-widest font-bold uppercase hidden sm:inline">SPEC_0{idx + 1} //</span>
                    <ArrowUpRight className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Main metadata content layout */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-[#F27D26] font-bold tracking-widest block mb-1.5 uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-sans font-extrabold dark:text-white light:text-[#111827] tracking-tight leading-snug mb-3 dark:group-hover:text-slate-400 light:group-hover:text-gray-700 transition-colors line-clamp-2 md:min-h-[56px]">
                      {project.title}
                    </h3>
                    <p className="dark:text-zinc-400 light:text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech specs tag strip */}
                  <div className="mt-4 pt-4 dark:border-white/10 light:border-black/10 border-t flex flex-wrap gap-1.5 overflow-hidden">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded dark:bg-white/[0.02] light:bg-black/[0.03] dark:border-white/5 light:border-black/10 border text-[10px] font-mono dark:text-zinc-400 light:text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded dark:bg-gradient-to-r dark:from-gray-600/10 dark:to-slate-500/10 light:bg-gradient-to-r light:from-gray-200 light:to-gray-300 dark:border-slate-500/10 light:border-gray-400/20 border dark:text-slate-400 light:text-gray-600 text-[10px] font-mono font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {!showAllProjects && filteredProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setShowAllProjects(true)}
              className="px-8 py-3.5 rounded-xl dark:bg-slate-500 dark:hover:bg-slate-600 light:bg-gray-700 light:hover:bg-gray-800 text-white font-bold text-sm flex items-center gap-2 tracking-wide transition-all duration-300 dark:shadow-lg dark:shadow-slate-500/20 light:shadow-lg light:shadow-gray-700/20 dark:hover:dark:shadow-slate-500/40 light:hover:light:shadow-gray-700/40"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* View Less Button */}
        {showAllProjects && filteredProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setShowAllProjects(false)}
              className="px-8 py-3.5 rounded-xl dark:bg-slate-500/20 dark:hover:bg-slate-500/30 light:bg-gray-200 light:hover:bg-gray-300 dark:text-slate-300 light:text-gray-700 font-bold text-sm flex items-center gap-2 tracking-wide transition-all duration-300 dark:border-slate-500/30 light:border-gray-400/30 border"
            >
              Show Less <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
          </motion.div>
        )}

        {/* Modal Popup Panel overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div id="project-detail-modal-root" className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Backing backdrop shadow */}
              <motion.div
                id="modal-backdrop-blur"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 dark:bg-black/85 light:bg-black/40 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />

              {/* Central Details Glassmorphic card */}
              <motion.div
                id="modal-content-card"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative w-full max-w-3xl max-h-[85vh] dark:bg-[#0c0c0c] light:bg-white rounded-3xl shadow-2xl overflow-y-auto dark:border-white/10 light:border-black/10 border z-10"
              >
                {/* Top Action controls */}
                <div id="modal-close-tray" className="absolute top-5 right-5 z-20">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2.5 rounded-full dark:bg-[#121212] light:bg-gray-200 dark:hover:bg-white/10 light:hover:bg-gray-300 dark:text-white light:text-[#111827] transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Hero banner of modal */}
                <div className="relative aspect-[21/10] bg-slate-950 overflow-hidden">
                  {selectedProject.image ? (
                    <>
                      <img
                        id="modal-hero-banner"
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col justify-between p-8 overflow-hidden border-b border-white/5">
                      {/* Grid background effect */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:16px_28px] pointer-events-none" />
                      
                      {/* Terminal-like text mock */}
                      <div className="relative font-mono text-[9px] text-zinc-500 flex justify-between items-center z-10 border-b border-white/5 pb-2">
                        <span>EXPLORING SPECIFICATION // {selectedProject.id.toUpperCase()}_SYSTEM</span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#F27D26] rounded-full animate-pulse" />
                          <span className="text-zinc-500 font-bold uppercase tracking-wider text-[8px]">ACTIVE TELEMETRY</span>
                        </div>
                      </div>
                      
                      {/* Central abstract graphic illustration based on category */}
                      <div className="flex-1 flex items-center gap-5 relative z-10 py-2">
                        <div className="w-14 h-14 rounded-2xl bg-[#F27D26]/5 border border-[#F27D26]/15 flex items-center justify-center text-[#F27D26] shrink-0">
                          {selectedProject.category.toLowerCase().includes('robot') || selectedProject.category.toLowerCase().includes('ai') ? (
                            <Cpu className="w-7 h-7" />
                          ) : selectedProject.category.toLowerCase().includes('fullstack') ? (
                            <Server className="w-7 h-7" />
                          ) : selectedProject.category.toLowerCase().includes('frontend') ? (
                            <Code2 className="w-7 h-7" />
                          ) : (
                            <Terminal className="w-7 h-7" />
                          )}
                        </div>
                        <div>
                          <span className="text-[#F27D26] font-mono text-[9px] uppercase tracking-widest font-black block">{selectedProject.category}</span>
                          <h3 className="text-xl sm:text-2xl font-serif font-black tracking-tight text-white mt-1 leading-tight">{selectedProject.title}</h3>
                        </div>
                      </div>
                      
                      {/* Bottom system status banner */}
                      <div className="relative font-mono text-[8px] text-zinc-500 z-10 pt-2 border-t border-white/5 flex justify-between">
                        <span>STATUS: LIVE // ENGINE: COMPILING</span>
                        <span className="text-zinc-600 hidden sm:inline">DATA PORT: 3000 // ENCRYPTION: SECURE</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent opacity-80" />
                  {selectedProject.image && (
                    <div className="absolute bottom-6 left-8 right-8 text-white z-10">
                      <span className="font-mono text-xs text-[#F27D26] uppercase font-bold tracking-widest block mb-1">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight">
                        {selectedProject.title}
                      </h2>
                    </div>
                  )}
                </div>

                {/* Modal Detail Body */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    
                    {/* Left details pane */}
                    <div className="md:col-span-7">
                      <h4 className="text-xs font-mono font-bold tracking-widest text-[#F27D26] uppercase mb-3">
                        Project Overview
                      </h4>
                      <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                        {selectedProject.detailedDescription}
                      </p>

                      <h4 className="text-xs font-mono font-bold tracking-widest text-[#F27D26] uppercase mt-8 mb-3">
                        Key Features & Architecture
                      </h4>
                      <ul className="space-y-2.5 text-zinc-300 text-sm font-sans animate-fade-in">
                        {selectedProject.keyFeatures.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-[#F27D26] rounded-full shrink-0 mt-1.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right tags and links pane */}
                    <div className="md:col-span-5 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-mono font-bold tracking-widest text-[#F27D26] uppercase mb-3">
                          Tools & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg bg-zinc-800 text-xs font-mono font-semibold text-zinc-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons list */}
                      <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
                        {selectedProject.liveUrl && (
                          <a
                            id="modal-live-link"
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3 px-4 rounded-xl bg-slate-500 hover:bg-slate-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 tracking-wide block transition-all duration-300"
                          >
                            Live Demo <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {selectedProject.githubUrl && (
                          <a
                            id="modal-git-link"
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-[#121212] hover:bg-white/5 border border-white/10 text-white transition-colors flex items-center justify-center"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
