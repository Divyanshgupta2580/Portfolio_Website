import React, { useState } from 'react';
import { PageWipe } from './components/PageWipe';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Opportunities } from './components/Opportunities';
import { Contact } from './components/Contact';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ThemeToggle } from './components/ThemeToggle';
import { PillNav } from './components/PillNav';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<string>('Internship');
  const [initialDetails, setInitialDetails] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectOpportunity = (opportunityType: string) => {
    setSelectedOpportunity(opportunityType);
    setInitialDetails('');
    setModalOpen(true);
  };

  const handleOpenHireMe = () => {
    setSelectedOpportunity('Internship');
    setInitialDetails('');
    setModalOpen(true);
  };

  const handleRequestCode = (projectName: string) => {
    setSelectedOpportunity('Technical Project / Source Code Request');
    setInitialDetails(`I would like to request access to the source code for ${projectName}.`);
    setModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Intro Page Wipe */}
      <PageWipe />

      {/* Desktop Custom Smooth Cursor */}
      <CustomCursor />

      {/* Background Technical Grid Pattern */}
      <div className="bg-tech-pattern" />

      {/* Top Fixed Header Navbar */}
      <Navbar onOpenHireMe={handleOpenHireMe} />

      {/* Main Portfolio Content */}
      <main style={{ flex: 1 }}>
        <Hero onContactClick={scrollToContact} />
        <Capabilities />
        <About onContactClick={handleOpenHireMe} />
        <Skills />
        <Projects onRequestCode={handleRequestCode} />
        <Journey />
        <Opportunities onSelectOpportunity={handleSelectOpportunity} />
        <Contact selectedOpportunity={selectedOpportunity} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <ScrollProgress />
      <ThemeToggle />
      <PillNav onOpenHireMe={handleOpenHireMe} />

      {/* Strictly Styled Reference Contact / Engineering Inquiry Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setInitialDetails('');
        }}
        initialOpportunity={selectedOpportunity}
        initialDetails={initialDetails}
      />
    </div>
  );
};

export default App;
