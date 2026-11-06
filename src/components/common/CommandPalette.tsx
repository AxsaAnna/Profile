import React, { useState, useEffect, useRef } from 'react';
import { Search, Compass, Terminal, FileText, Mail, Volume2, Sparkles, X, ArrowRight, Palette } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useProfile } from '../../context/ProfileContext';
import { copyToClipboard } from '../../utils/helpers';
import { sound } from '../../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenTerminal,
}) => {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { accentStyles, setColorTheme } = useTheme();
  const { profile } = useProfile();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setCopiedEmail(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          sound.playChime();
          // We trigger open in parent
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToSection = (id: string) => {
    sound.playClick();
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = async () => {
    sound.playSuccess();
    await copyToClipboard(profile.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  const navActions = [
    { id: 'projects', title: 'Explore Featured Projects', category: 'Navigation', icon: Compass, action: () => scrollToSection('projects') },
    { id: 'about', title: 'About & Core Philosophy', category: 'Navigation', icon: Sparkles, action: () => scrollToSection('about') },
    { id: 'skills', title: 'Skills & Tech Stack Radar', category: 'Navigation', icon: Sparkles, action: () => scrollToSection('skills') },
    { id: 'experience', title: 'Work History & Career Timeline', category: 'Navigation', icon: Compass, action: () => scrollToSection('experience') },
    { id: 'lab', title: 'Interactive Playground & Terminal', category: 'Interactive', icon: Terminal, action: () => scrollToSection('lab') },
    { id: 'contact', title: 'Send a Message / Book a Call', category: 'Navigation', icon: Mail, action: () => scrollToSection('contact') },
  ];

  const utilityActions = [
    { id: 'resume', title: 'View & Download Resume / CV', category: 'Utilities', icon: FileText, action: () => { sound.playClick(); onClose(); onOpenResume(); } },
    { id: 'terminal', title: 'Open Interactive Dev Terminal', category: 'Utilities', icon: Terminal, action: () => { sound.playClick(); onClose(); onOpenTerminal(); } },
    { id: 'email', title: copiedEmail ? 'Email Copied to Clipboard!' : `Copy Email (${profile.email})`, category: 'Utilities', icon: Mail, action: handleCopyEmail },
    { id: 'theme-cyan', title: 'Switch to Cyberpunk Cyan Theme', category: 'Themes', icon: Palette, action: () => { sound.playClick(); setColorTheme('cyan'); onClose(); } },
    { id: 'theme-indigo', title: 'Switch to Indigo Horizon Theme', category: 'Themes', icon: Palette, action: () => { sound.playClick(); setColorTheme('indigo'); onClose(); } },
    { id: 'theme-emerald', title: 'Switch to Matrix Emerald Theme', category: 'Themes', icon: Palette, action: () => { sound.playClick(); setColorTheme('emerald'); onClose(); } },
    { id: 'sound-toggle', title: 'Toggle Sound Audio FX', category: 'Utilities', icon: Volume2, action: () => { sound.toggle(); onClose(); } },
  ];

  const allActions = [...navActions, ...utilityActions];
  const filtered = allActions.filter(action =>
    action.title.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl rounded-2xl glass-panel shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-500 text-sm md:text-base font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action list */}
        <div className="overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-sm">
              No matching commands found for "{query}".
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl hover:bg-white/10 text-left group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/15 text-slate-300 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-200 group-hover:text-white">
                        {item.title}
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-white/10 bg-slate-950/40 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Navigate with mouse or keyboard</span>
          <span className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">ESC</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
};

