import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Terminal, FileText, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useProfile } from '../../context/ProfileContext';
import { HeroCanvas } from '../canvas/HeroCanvas';
import { MagneticButton } from '../common/MagneticButton';
import { sound } from '../../utils/sound';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenTerminal }) => {
  const { accentStyles } = useTheme();
  const { profile } = useProfile();

  const titles = [
    "Aspiring Software Engineer",
    "UI/UX Product Designer",
    "Hackathon Competitor & Builder",
    "Amal Jyothi Engineering Fresher"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    sound.playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Interactive Particle Canvas */}
      <HeroCanvas />

      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[130px] pointer-events-none -z-10 opacity-30"
        style={{ background: `radial-gradient(circle, ${accentStyles.glow} 0%, transparent 70%)` }}
      />
      <div className="absolute inset-0 bg-cyber-grid bg-[size:36px_36px] opacity-20 pointer-events-none -z-10" />

      <div className="w-full max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Status Badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs sm:text-sm font-mono backdrop-blur-md mb-8 ${accentStyles.badge} transition-all hover:scale-105 cursor-pointer shadow-lg`}
          onClick={() => scrollTo('contact')}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-slate-200">{profile.statusBadge}</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300 ml-1" />
        </div>

        {/* Dynamic Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white mb-6 leading-[1.08]">
          Crafting software with <br className="hidden sm:inline" />
          <span className={`bg-gradient-to-r ${accentStyles.gradient} bg-clip-text text-transparent inline-block transition-all duration-500`}>
            {titles[currentTitleIndex]}
          </span>
        </h1>

        {/* Headline / Subtitle */}
        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto font-sans font-normal leading-relaxed mb-10 text-balance">
          {profile.headline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <MagneticButton
            onClick={() => scrollTo('projects')}
            className={`px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r ${accentStyles.gradient} shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2`}
          >
            <span>Explore Selected Works</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            onClick={() => {
              sound.playClick();
              onOpenResume();
            }}
            className="px-6 py-3.5 rounded-full text-sm sm:text-base font-medium text-slate-200 glass-panel hover:bg-white/10 hover:text-white border-white/15 transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Interactive CV</span>
          </MagneticButton>

          <MagneticButton
            onClick={() => {
              sound.playClick();
              onOpenTerminal();
            }}
            className="px-5 py-3.5 rounded-full text-sm sm:text-base font-mono text-slate-400 hover:text-white glass-panel hover:bg-white/10 border-white/10 transition-all flex items-center gap-2"
            title="Open Interactive Web Terminal"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Terminal</span>
          </MagneticButton>
        </div>

        {/* Stats Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
          {profile.stats.map((stat) => (
            <div
              key={stat.id}
              className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all text-center group hover:-translate-y-1"
            >
              <div className={`text-2xl sm:text-4xl font-extrabold font-display bg-gradient-to-r ${accentStyles.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5 line-clamp-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs font-mono">
        <button
          onClick={() => scrollTo('about')}
          className="p-2 rounded-full hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

