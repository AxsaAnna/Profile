import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ProfileProvider } from './context/ProfileContext';
import { CustomCursor } from './components/common/CustomCursor';
import { CommandPalette } from './components/common/CommandPalette';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { InteractiveLabSection } from './components/sections/InteractiveLabSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ProjectModal } from './components/modals/ProjectModal';
import { ResumeModal } from './components/modals/ResumeModal';
import { ProfileEditorModal } from './components/modals/ProfileEditorModal';
import { ProjectItem } from './types';

export const AppContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [profileEditorOpen, setProfileEditorOpen] = useState(false);

  const handleOpenTerminal = () => {
    const el = document.getElementById('lab');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-300">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Floating Modern Navbar */}
      <Navbar
        onOpenCommand={() => setCommandPaletteOpen(true)}
        onOpenProfileEditor={() => setProfileEditorOpen(true)}
      />

      {/* Main Sections Flow */}
      <main className="flex-1">
        <HeroSection
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={handleOpenTerminal}
        />
        <AboutSection
          onOpenResume={() => setResumeOpen(true)}
        />
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <SkillsSection />
        <ExperienceSection />
        <InteractiveLabSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={handleOpenTerminal}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ProfileEditorModal
        isOpen={profileEditorOpen}
        onClose={() => setProfileEditorOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ProfileProvider>
        <AppContent />
      </ProfileProvider>
    </ThemeProvider>
  );
};

export default App;

