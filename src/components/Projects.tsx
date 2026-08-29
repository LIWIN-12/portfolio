import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Github, ArrowUpRight, X, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const supportingProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-background border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Selected Engineering Projects
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Production-oriented computer vision detectors, deep learning pipelines, and full-stack software systems built with real-world constraints.
          </p>
        </div>

        {/* Featured Project 1 (Full-Width Asymmetric Horizontal Layout) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-surface border border-border hover:border-neutral-600 transition-colors p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2 text-[11px] font-mono text-accent">
                <span>Featured Project</span>
                <span className="text-neutral-600">/</span>
                <span className="text-neutral-400">ICIRCA 2025 Publication</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100 leading-tight">
                {featuredProject.title}
              </h3>
              
              <p className="text-neutral-400 text-xs sm:text-sm font-mono">
                {featuredProject.subtitle}
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <p>
                  <strong className="text-neutral-200 font-medium">Problem: </strong>
                  {featuredProject.problem}
                </p>
                <p>
                  <strong className="text-neutral-200 font-medium">Solution: </strong>
                  {featuredProject.solution}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-neutral-300">
                {featuredProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-background border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Technical Highlights & Action Box */}
            <div className="lg:col-span-5 bg-background border border-border/80 p-6 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider border-b border-border pb-2">
                  System Architecture Pipeline
                </div>
                <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                  {featuredProject.architecture}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium text-accent hover:underline"
                >
                  <span>Architecture Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-surface hover:bg-neutral-800 text-neutral-300 hover:text-white border border-border transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Supporting Projects (2-Column Grid with Distinct Composition) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportingProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface border border-border hover:border-neutral-600 transition-colors p-6 sm:p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>{project.subtitle}</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-neutral-100 leading-snug">
                  {project.title}
                </h3>

                <div className="space-y-2 text-xs text-neutral-300 leading-relaxed">
                  <p>
                    <span className="text-neutral-400 font-mono text-[10px] uppercase block">Problem</span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="text-neutral-400 font-mono text-[10px] uppercase block">Engineered Approach</span>
                    {project.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-neutral-400 pt-1">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-background border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-accent hover:underline"
                >
                  <span>Technical Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <span className="text-[10px] font-mono text-neutral-500">
                  Open Source
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="bg-surface w-full max-w-2xl border border-neutral-700 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-background border border-border text-neutral-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1.5 pr-8">
                <div className="text-[11px] font-mono text-accent uppercase">
                  Technical Architecture Deep Dive
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-200">
                <div className="p-4 bg-background border border-border space-y-1">
                  <div className="font-mono text-[10px] text-neutral-400 uppercase font-semibold">
                    Problem Context
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{selectedProject.problem}</p>
                </div>

                <div className="p-4 bg-background border border-border space-y-1">
                  <div className="font-mono text-[10px] text-accent uppercase font-semibold">
                    Engineered Solution
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div className="p-4 bg-background border border-border space-y-1">
                  <div className="font-mono text-[10px] text-neutral-400 uppercase font-semibold">
                    Architecture & Dataflow
                  </div>
                  <p className="font-mono text-xs text-neutral-300 leading-relaxed">{selectedProject.architecture}</p>
                </div>

                {selectedProject.impact && (
                  <div className="p-4 bg-background border border-border space-y-1">
                    <div className="font-mono text-[10px] text-neutral-400 uppercase font-semibold">
                      Validation & Results
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{selectedProject.impact}</p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-mono text-neutral-400 uppercase">
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-background border border-border text-xs font-mono text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-accent text-neutral-950 font-medium text-xs font-mono hover:bg-accent-hover transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository on GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-mono text-neutral-400 hover:text-neutral-200"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
