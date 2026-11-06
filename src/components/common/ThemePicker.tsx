import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeColor } from '../../types';
import { sound } from '../../utils/sound';

export const ThemePicker: React.FC = () => {
  const { colorTheme, setColorTheme, isDark, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const themeOptions: { key: ThemeColor; label: string; colorClass: string; bgHex: string }[] = [
    { key: 'indigo', label: 'Indigo Horizon', colorClass: 'bg-indigo-500', bgHex: '#6366f1' },
    { key: 'cyan', label: 'Cyberpunk Cyan', colorClass: 'bg-cyan-400', bgHex: '#22d3ee' },
    { key: 'emerald', label: 'Matrix Emerald', colorClass: 'bg-emerald-500', bgHex: '#10b981' },
    { key: 'amber', label: 'Sunset Amber', colorClass: 'bg-amber-500', bgHex: '#f59e0b' },
    { key: 'fuchsia', label: 'Hyper Fuchsia', colorClass: 'bg-fuchsia-500', bgHex: '#d946ef' },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectTheme = (theme: ThemeColor) => {
    sound.playClick();
    setColorTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => {
          sound.playHover();
          setIsOpen(!isOpen);
        }}
        className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors border border-white/5 hover:border-white/15 flex items-center gap-1.5"
        title="Customize Theme & Palette"
        aria-label="Customize Theme"
      >
        <Palette className="w-4 h-4" />
        <span
          className="w-2.5 h-2.5 rounded-full inline-block shadow-sm"
          style={{
            backgroundColor:
              colorTheme === 'indigo' ? '#6366f1' :
              colorTheme === 'cyan' ? '#06b6d4' :
              colorTheme === 'emerald' ? '#10b981' :
              colorTheme === 'amber' ? '#f59e0b' : '#d946ef',
          }}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-56 rounded-2xl glass-panel p-3 shadow-2xl z-50 border border-white/15 animate-in fade-in zoom-in-95 duration-150">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2 py-1 mb-2 font-medium">
            Accent Palette
          </div>

          <div className="space-y-1">
            {themeOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => selectTheme(opt.key)}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  colorTheme === opt.key
                    ? 'bg-white/15 text-white font-semibold'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full shadow-inner ring-1 ring-white/20"
                    style={{ backgroundColor: opt.bgHex }}
                  />
                  <span>{opt.label}</span>
                </div>
                {colorTheme === opt.key && <Check className="w-3.5 h-3.5 text-white" />}
              </button>
            ))}
          </div>

          <div className="border-t border-white/10 mt-2.5 pt-2 flex items-center justify-between px-2 text-xs text-slate-400">
            <span>Color Mode</span>
            <button
              onClick={() => {
                sound.playClick();
                toggleDarkMode();
              }}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-200 transition-colors"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

