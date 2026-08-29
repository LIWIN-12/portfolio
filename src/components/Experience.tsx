import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 bg-background border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Experience & Education
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Professional internship work and academic degree foundation in Artificial Intelligence and Data Science.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl space-y-8 relative pl-6 sm:pl-8 border-l border-border ml-2 sm:ml-4">
          {EXPERIENCE_ITEMS.map((item, idx) => {
            const isEducation = item.type === 'education';

            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative space-y-3"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 bg-background border border-accent flex items-center justify-center text-accent">
                  {isEducation ? <GraduationCap className="w-3 h-3" /> : <Briefcase className="w-3 h-3" />}
                </div>

                <div className="bg-surface border border-border p-6 sm:p-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-100">
                        {item.role}
                      </h3>
                      <p className="text-xs font-mono text-neutral-400">
                        {item.company}
                      </p>
                    </div>
                    <span className="px-2.5 py-0.5 bg-background border border-border text-[11px] font-mono text-accent">
                      {item.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-accent/60 flex-shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[10px] text-neutral-400">
                    {item.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 bg-background border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
