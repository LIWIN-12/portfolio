import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 text-neutral-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-border pt-8">
          
          {/* Identity & Focus */}
          <div className="space-y-1">
            <div className="text-sm font-sans font-semibold text-neutral-200">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-neutral-500 text-xs font-sans">
              Computer Vision & Machine Learning Engineer · Tamil Nadu, India
            </p>
          </div>

          {/* Social Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-neutral-100 transition-colors"
            >
              Email
            </a>
            <a
              href={PERSONAL_INFO.resumePdf}
              download
              className="hover:text-accent transition-colors"
            >
              Resume PDF
            </a>
          </div>

          {/* Copyright */}
          <div className="text-neutral-500 text-[11px]">
            © {new Date().getFullYear()} J.K. Liwin Jose
          </div>

        </div>
      </div>
    </footer>
  );
};
