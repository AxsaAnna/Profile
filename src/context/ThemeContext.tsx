import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeColor } from '../types';

interface ThemeContextType {
  colorTheme: ThemeColor;
  setColorTheme: (color: ThemeColor) => void;
  isDark: boolean;
  toggleDarkMode: () => void;
  accentStyles: {
    text: string;
    bg: string;
    border: string;
    gradient: string;
    glow: string;
    glowBg: string;
    badge: string;
  };
}

const colorThemeClasses: Record<ThemeColor, {
  text: string;
  bg: string;
  border: string;
  gradient: string;
  glow: string;
  glowBg: string;
  badge: string;
}> = {
  indigo: {
    text: 'text-indigo-400',
    bg: 'bg-indigo-500',
    border: 'border-indigo-500/30',
    gradient: 'from-indigo-500 via-purple-500 to-cyan-400',
    glow: 'rgba(99, 102, 241, 0.4)',
    glowBg: 'bg-indigo-500/10',
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  },
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500',
    border: 'border-cyan-500/30',
    gradient: 'from-cyan-400 via-teal-400 to-indigo-500',
    glow: 'rgba(6, 182, 212, 0.4)',
    glowBg: 'bg-cyan-500/10',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  emerald: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500',
    border: 'border-emerald-500/30',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    glow: 'rgba(16, 185, 129, 0.4)',
    glowBg: 'bg-emerald-500/10',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  amber: {
    text: 'text-amber-400',
    bg: 'bg-amber-500',
    border: 'border-amber-500/30',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    glow: 'rgba(245, 158, 11, 0.4)',
    glowBg: 'bg-amber-500/10',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  fuchsia: {
    text: 'text-fuchsia-400',
    bg: 'bg-fuchsia-500',
    border: 'border-fuchsia-500/30',
    gradient: 'from-fuchsia-500 via-pink-500 to-violet-500',
    glow: 'rgba(217, 70, 239, 0.4)',
    glowBg: 'bg-fuchsia-500/10',
    badge: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorTheme, setColorThemeState] = useState<ThemeColor>(() => {
    return (localStorage.getItem('portfolio_color_theme') as ThemeColor) || 'indigo';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_dark_mode');
    return saved !== null ? saved === 'true' : true;
  });

  useEffect(() => {
    localStorage.setItem('portfolio_color_theme', colorTheme);
    document.documentElement.setAttribute('data-theme', colorTheme);
  }, [colorTheme]);

  useEffect(() => {
    localStorage.setItem('portfolio_dark_mode', String(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const setColorTheme = (color: ThemeColor) => {
    setColorThemeState(color);
  };

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        setColorTheme,
        isDark,
        toggleDarkMode,
        accentStyles: colorThemeClasses[colorTheme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

