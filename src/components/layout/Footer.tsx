import React from 'react';
import { ArrowUp, Heart, Sparkles, Terminal, Code } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useProfile } from '../../context/ProfileContext';
import { sound } from '../../utils/sound';

export const Footer: React.FC = () => {
  const { accentStyles } = useTheme();
  const { profile } = useProfile();

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 pt-16 pb-12 px-4 z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-extrabold text-xs text-white bg-gradient-to-tr ${accentStyles.gradient}`}>
                {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono max-w-sm">
              B.Tech Computer Science & Engineering @ Amal Jyothi College of Engineering • AI & UI/UX Design.
            </p>
          </div>

          {/* Status & Scroll To Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full glass-panel hover:bg-white/15 text-slate-300 hover:text-white transition-all hover:-translate-y-1"
              title="Scroll back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {profile.name}. Designed & engineered with obsessive craft.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Powered by React 19, TypeScript, Tailwind & Web Audio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

