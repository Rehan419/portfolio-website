import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { SectionDivider } from './components/SectionDivider';

export const App: React.FC = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#000000] text-slate-200 relative selection:bg-cyan-500/30 selection:text-cyan-200 tech-grid-bg">
      {/* Background ambient radial glow accents */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-cyan-950/15 via-blue-950/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-0 w-[500px] h-[500px] bg-cyan-950/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-950/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Fixed Navbar */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Single Page Content with Distinct Separated Sections and Section Dividers */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* 1. Hero Section */}
        <Hero />
        <SectionDivider />

        {/* 2. About Section */}
        <About />
        <SectionDivider />

        {/* 3. Work Experience Section */}
        <Experience />
        <SectionDivider />

        {/* 4. Featured Projects Section */}
        <Projects />
        <SectionDivider />

        {/* 5. Certifications Section */}
        <Certifications />
        <SectionDivider />

        {/* 6. Technical Skills Section */}
        <Skills />
        <SectionDivider />

        {/* 7. Education Section */}
        <Education />
        <SectionDivider />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
};

export default App;
