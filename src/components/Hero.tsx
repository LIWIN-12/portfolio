import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] pt-24 md:pt-28 pb-16 flex items-center bg-background border-b border-border/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Positioning */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7"
          >
            {/* 1. Status Eyebrow */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1 bg-surface border border-border text-[11px] font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-none bg-accent" />
              <span>Available for AI/ML & Software Engineering Roles</span>
            </div>

            {/* 2. Headline & Role */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-100 leading-[1.08]">
                J.K. Liwin Jose
              </h1>
              <p className="font-mono text-sm sm:text-base text-accent font-medium tracking-tight">
                Computer Vision & Deep Learning Engineer
              </p>
            </div>

            {/* 3. Subtext (concise, believable, under 25 words) */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-[54ch]">
              Artificial Intelligence and Data Science graduate with practical experience in custom YOLO detectors, real-time computer vision pipelines, and full-stack software development.
            </p>

            {/* Core Tech Stack Strip */}
            <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
              {['Python', 'PyTorch', 'YOLOv11', 'OpenCV', 'Java', 'MySQL', 'Playwright', 'FastAPI'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-surface border border-border text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 4. CTAs (Max 2 with distinct intent) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-sm bg-accent text-neutral-950 font-medium text-xs font-mono hover:bg-accent-hover transition-colors"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-sm bg-surface border border-border text-neutral-200 hover:text-white hover:border-neutral-500 text-xs font-mono transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-5 pt-2 text-neutral-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-mono hover:text-neutral-100 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-mono hover:text-neutral-100 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center space-x-1.5 text-xs font-mono hover:text-neutral-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Profile Frame */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm bg-surface border border-border p-3">
              <div className="aspect-[4/5] bg-neutral-950 overflow-hidden relative border border-border/80">
                <img
                  src={PERSONAL_INFO.profilePhoto}
                  alt="J.K. Liwin Jose"
                  className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Caption & Location Metadata */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] font-mono text-neutral-400 border-t border-border mt-3">
                <span className="text-neutral-300 font-medium">{PERSONAL_INFO.name}</span>
                <span className="flex items-center space-x-1 text-neutral-500">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span>Tamil Nadu, India</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
