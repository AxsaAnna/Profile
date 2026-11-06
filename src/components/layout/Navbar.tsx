import React, { useState, useEffect } from 'react';
import { Sparkles, Command, Menu, X, Sliders, Briefcase } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useProfile } from '../../context/ProfileContext';
import { SoundToggle } from '../common/SoundToggle';
import { ThemePicker } from '../common/ThemePicker';
import { MagneticButton } from '../common/MagneticButton';
import { sound } from '../../utils/sound';

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenProfileEditor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommand, onOpenProfileEditor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { accentStyles } = useTheme();
  const { profile } = useProfile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'lab', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'lab', label: 'Playground' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center px-4 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'glass-panel shadow-2xl border-white/10'
              : 'bg-slate-950/40 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Brand Logo & Monogram */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-extrabold text-sm text-white bg-gradient-to-tr ${accentStyles.gradient} shadow-lg ring-2 ring-white/20 group-hover:scale-105 transition-transform`}
              >
                {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              {profile.availableForHire && (
                <span
                  className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950 animate-pulse"
                  title="Available for projects & roles"
                />
              )}
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-white text-sm tracking-tight block group-hover:text-white transition-colors">
                {profile.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 block -mt-0.5">
                {profile.title.split('&')[0].trim()}
              </span>
            </div>
          </button>

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${accentStyles.gradient} opacity-20 -z-10`}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                sound.playChime();
                onOpenCommand();
              }}
              className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white text-xs transition-colors"
              title="Open Command Palette (Ctrl+K / Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono text-[11px]">⌘K</span>
            </button>

            {/* Profile Live Customizer Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenProfileEditor();
              }}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
              title="Customize Profile / Live Edit"
              aria-label="Edit Profile"
            >
              <Sliders className="w-4 h-4 text-slate-300" />
            </button>

            {/* Audio Toggle */}
            <SoundToggle />

            {/* Theme Picker */}
            <ThemePicker />

            {/* Hire Me CTA Button */}
            <MagneticButton
              onClick={() => scrollTo('contact')}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${accentStyles.gradient} shadow-md hover:shadow-lg transition-all hover:brightness-110`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </MagneticButton>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl lg:hidden text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/90 backdrop-blur-xl flex flex-col pt-24 px-6 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="w-full text-left py-3 px-4 rounded-xl text-lg font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}

            <div className="border-t border-white/10 my-4 pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-white/5 text-slate-200"
              >
                <div className="flex items-center gap-2">
                  <Command className="w-4 h-4" />
                  <span>Command Palette</span>
                </div>
                <span className="font-mono text-xs text-slate-400">⌘K</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfileEditor();
                }}
                className="w-full flex items-center gap-2 py-3 px-4 rounded-xl bg-white/5 text-slate-200"
              >
                <Sliders className="w-4 h-4" />
                <span>Customize Portfolio Data</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className={`w-full py-3 rounded-xl text-center font-bold text-white bg-gradient-to-r ${accentStyles.gradient}`}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

