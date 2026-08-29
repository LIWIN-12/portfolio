import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const details = [
    { label: 'Degree', value: 'B.Tech in Artificial Intelligence & Data Science' },
    { label: 'Institution', value: 'Karunya Institute of Technology and Sciences (2021 - 2025)' },
    { label: 'Core Focus', value: 'Computer Vision, Deep Learning, Software Testing & Systems' },
    { label: 'Languages', value: 'Python, Java, SQL' },
    { label: 'Research', value: 'IEEE ICIRCA 2025 Conference Publication on Student Engagement' },
    { label: 'Location', value: 'Kanniyakumari, Tamil Nadu, India (Open to Relocation / Remote)' },
  ];

  return (
    <section id="about" className="py-24 bg-[#0d0d0d] border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Editorial Background Narrative */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
              Engineering intelligent vision systems from research to deployment.
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am an Artificial Intelligence and Data Science graduate with a strong focus on practical computer vision systems, deep learning pipelines, and robust software engineering.
              </p>
              <p>
                My work centers on building high-performance perception systems: training and fine-tuning custom YOLO object detection architectures, integrating real-time facial recognition, and developing automated visual inspection engines with OpenCV.
              </p>
              <p>
                Beyond machine learning models, I value reliable software design. I write clean Python and Java, design scalable relational schemas in PostgreSQL and MySQL, build responsive frontend dashboards, and implement automated QA suites using Playwright and PyTest.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Structured Technical Profile Metadata */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-surface border border-border p-6 sm:p-8 space-y-6"
          >
            <div className="border-b border-border pb-4">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-200">
                Technical Profile
              </h3>
            </div>

            <div className="divide-y divide-border/60 text-xs font-mono">
              {details.map((item, idx) => (
                <div key={idx} className="py-3 first:pt-0 last:pb-0 space-y-1">
                  <div className="text-neutral-500 uppercase tracking-wide text-[10px]">
                    {item.label}
                  </div>
                  <div className="text-neutral-200 font-sans text-xs sm:text-sm font-normal">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
