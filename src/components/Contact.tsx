import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Download, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d0d] border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Outreach Invitation */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
              Get in touch
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-[50ch]">
              I am open to full-time engineering roles, AI research collaborations, and computer vision opportunities. Feel free to reach out directly via email or LinkedIn.
            </p>

            <div className="pt-2">
              <a
                href={PERSONAL_INFO.resumePdf}
                download
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-surface border border-border hover:border-neutral-500 text-neutral-200 hover:text-white text-xs font-mono transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-accent" />
                <span>Download Complete Resume (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Channels */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Email Card with Copy Option */}
            <div className="bg-surface border border-border p-5 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase text-neutral-500">
                  Direct Email
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm sm:text-base font-mono font-medium text-neutral-200 hover:text-accent transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-background border border-border text-xs font-mono text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn & GitHub Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border border-border hover:border-neutral-500 p-5 space-y-2 group transition-colors block"
              >
                <div className="flex items-center justify-between text-neutral-400 group-hover:text-accent">
                  <Linkedin className="w-4 h-4" />
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm font-medium text-neutral-200 group-hover:text-white">
                  LinkedIn Profile
                </div>
                <div className="text-[11px] font-mono text-neutral-500">
                  in/jkliwinjose
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border border-border hover:border-neutral-500 p-5 space-y-2 group transition-colors block"
              >
                <div className="flex items-center justify-between text-neutral-400 group-hover:text-accent">
                  <Github className="w-4 h-4" />
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm font-medium text-neutral-200 group-hover:text-white">
                  GitHub Profile
                </div>
                <div className="text-[11px] font-mono text-neutral-500">
                  github.com/LIWIN-12
                </div>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
