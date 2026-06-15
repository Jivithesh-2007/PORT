import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X, ArrowUpRight, ArrowRight, Layers } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter categories helper
  const filterCategories = ['All', 'SaaS', 'Web3', 'Interactive'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'SaaS') return project.category.toLowerCase().includes('saas');
    if (activeFilter === 'Web3') return project.category.toLowerCase().includes('web3') || project.category.toLowerCase().includes('fintech');
    if (activeFilter === 'Interactive') return project.category.toLowerCase().includes('interactive');
    return true;
  });

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 transition-colors duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading Panel */}
        <div id="projects-heading" className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4"
          >
            Digital <span className="text-[#F27D26]">Creations</span>
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
            CRAFTED WITH PRECISION AND FLUID OPTIMIZATION
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
                  ? 'bg-[#F27D26] text-black font-extrabold shadow-md shadow-[#F27D26]/20'
                  : 'bg-[#121212] text-[#A1A1AA] hover:text-white border border-white/5'
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden bg-[#121212] border border-white/5 transition-all duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Glass Header overlay containing Category */}
                <div id="project-card-badge" className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-xl bg-[#121212]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-[#F27D26] uppercase tracking-widest shadow-sm">
                  {project.category}
                </div>

                {/* Aspect Ratio Image Container */}
                <div id="project-card-image-box" className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-slate-950/20 z-10 group-hover:bg-slate-950/10 transition-colors" />
                  <img
                    id={`project-thumb-${project.id}`}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle live hover preview indicator panel */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950/70 to-transparent z-15 flex items-end justify-between translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white/90 text-xs font-mono font-medium tracking-wide flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> EXPLORE SPECIFICATION
                    </span>
                    <div className="p-2 rounded-full bg-[#F27D26] text-black shadow">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Info and Tag Details Footer */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-sans font-extrabold text-white tracking-tight group-hover:text-[#F27D26] duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-zinc-800 text-[11px] font-mono font-medium text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 rounded-lg bg-[#F27D26]/12 text-[#F27D26] text-[11px] font-mono font-medium">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />

              {/* Central Details Glassmorphic card */}
              <motion.div
                id="modal-content-card"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative w-full max-w-3xl max-h-[85vh] bg-[#0c0c0c] rounded-3xl shadow-2xl overflow-y-auto border border-white/10 z-10"
              >
                {/* Top Action controls */}
                <div id="modal-close-tray" className="absolute top-5 right-5 z-20">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2.5 rounded-full bg-[#121212] hover:bg-white/10 text-white transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Hero banner of modal */}
                <div className="relative aspect-[21/10] bg-slate-950">
                  <img
                    id="modal-hero-banner"
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-8 right-8 text-white">
                    <span className="font-mono text-xs text-[#F27D26] uppercase font-bold tracking-widest block mb-1">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight">
                      {selectedProject.title}
                    </h2>
                  </div>
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
                            className="flex-1 py-3 px-4 rounded-xl bg-[#F27D26] hover:bg-[#F27D26]/90 text-black font-extrabold text-sm flex items-center justify-center gap-2 tracking-wide block transition-all duration-300"
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
