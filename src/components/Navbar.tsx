import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel at the top is not intersecting, the page has scrolled down
        setScrolled(!entry.isIntersecting);
      },
      { threshold: [1.0] }
    );

    const sentinel = document.getElementById('top-sentinel');
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#vision-demo', label: 'Vision Sandbox' },
    { href: '#research', label: 'Research' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-border/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-8">
          
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center space-x-2.5 text-sm font-semibold tracking-tight text-neutral-100 hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-none bg-accent transition-transform group-hover:scale-125" />
            <span className="font-sans font-medium text-neutral-100">{PERSONAL_INFO.name}</span>
            <span className="hidden sm:inline font-mono text-xs text-neutral-500 font-normal">/ AI Engineer</span>
          </a>

          {/* Desktop Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-6 text-xs font-mono text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-neutral-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Mobile Button */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.resumePdf}
              download
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-sm bg-surface border border-border hover:border-neutral-500 text-neutral-200 hover:text-white text-xs font-mono transition-colors"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-sm bg-surface border border-border text-neutral-300 hover:text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-b border-border px-4 py-4 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-mono text-neutral-300 hover:text-white hover:bg-surface rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-border/60">
            <a
              href={PERSONAL_INFO.resumePdf}
              download
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-mono text-accent"
            >
              <span>Download Resume PDF</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
