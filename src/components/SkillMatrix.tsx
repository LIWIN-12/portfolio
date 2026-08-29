import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillMatrix: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 bg-background border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Skills & Technical Competencies
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Core toolkit organized across computer vision pipelines, deep learning frameworks, programming languages, and software automation.
          </p>
        </div>

        {/* 3-Column Structured Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-surface border border-border p-6 space-y-4"
            >
              <div className="border-b border-border/80 pb-3 flex items-center justify-between">
                <h3 className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                  {group.category}
                </h3>
                <span className="font-mono text-[10px] text-neutral-500">
                  {group.skills.length} tools
                </span>
              </div>

              <ul className="space-y-2.5 text-xs text-neutral-300 font-sans">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center space-x-2">
                    <span className="w-1 h-1 bg-neutral-600 rounded-none flex-shrink-0" />
                    <span className="leading-snug">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
