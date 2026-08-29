import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillMatrix } from './components/SkillMatrix';
import { Projects } from './components/Projects';
import { VisionSimulator } from './components/VisionSimulator';
import { Research } from './components/Research';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-background text-neutral-200">
      {/* Sentinel element at top for navbar scroll state */}
      <div id="top-sentinel" className="absolute top-0 left-0 w-full h-8 pointer-events-none" />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillMatrix />
        <Projects />
        <VisionSimulator />
        <Research />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
