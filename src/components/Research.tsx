import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RESEARCH_PAPER } from '../data/portfolioData';
import { BookOpen } from 'lucide-react';

export const Research: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="research" className="py-24 bg-[#0d0d0d] border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Published Research
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Peer-reviewed computer vision and deep learning paper presented at an IEEE-indexed international conference venue.
          </p>
        </div>

        {/* Publication Strip */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface border border-border p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Conference Image */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-3">
              <div className="w-full max-w-[200px] aspect-[4/3] bg-background border border-border overflow-hidden">
                <img
                  src={RESEARCH_PAPER.image}
                  alt={RESEARCH_PAPER.conference}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-background border border-border text-[11px] font-mono text-accent">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{RESEARCH_PAPER.badge}</span>
              </div>
            </div>

            {/* Right: Paper Details */}
            <div className="md:col-span-8 space-y-4">
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-neutral-400">
                  Conference Paper · {RESEARCH_PAPER.year}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 leading-snug">
                  {RESEARCH_PAPER.title}
                </h3>
                <p className="text-xs text-neutral-400 font-mono">
                  {RESEARCH_PAPER.conference} · {RESEARCH_PAPER.location}
                </p>
              </div>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-[65ch]">
                {RESEARCH_PAPER.summary}
              </p>

              {/* Research Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {RESEARCH_PAPER.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 bg-background border border-border text-[11px] font-mono text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
