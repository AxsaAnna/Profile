import React, { useState } from 'react';
import { Search, Sparkles, CheckCircle2, Cpu, Database, Brain, Palette, Cloud, Layers } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useProfile } from '../../context/ProfileContext';
import { SectionHeading } from '../common/SectionHeading';
import { sound } from '../../utils/sound';

export const SkillsSection: React.FC = () => {
  const { accentStyles } = useTheme();
  const { profile } = useProfile();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Frontend',
    'Backend & Cloud',
    'AI & Data',
    'Creative & UI/UX',
    'DevOps & Architecture',
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    'Frontend': <Cpu className="w-4 h-4" />,
    'Backend & Cloud': <Database className="w-4 h-4" />,
    'AI & Data': <Brain className="w-4 h-4" />,
    'Creative & UI/UX': <Palette className="w-4 h-4" />,
    'DevOps & Architecture': <Cloud className="w-4 h-4" />,
  };

  const filteredSkills = profile.skills.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 px-4 relative z-10 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Technical Mastery & Tooling"
          title="Engineered for"
          highlightText="scale, speed & fidelity."
          subtitle="A comprehensive overview of production competencies, architectural patterns, and specialized frameworks honed over 7+ years of engineering."
        />

        {/* Filter bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    sound.playClick();
                    setSelectedCategory(cat);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border ${
                    isSelected
                      ? `bg-white/15 text-white border-white/20 shadow-md ${accentStyles.border}`
                      : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search filter input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills, libs, tools..."
              className="w-full pl-9 pr-4 py-2 rounded-xl glass-panel text-xs text-white placeholder-slate-500 border border-white/10 focus:outline-none focus:border-white/30"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-white/20 transition-all group hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
            >
              {/* Top Row: Name, Category Icon & Years */}
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg bg-white/5 text-slate-300 ${accentStyles.text}`}>
                    {categoryIcons[skill.category] || <Sparkles className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-white transition-colors font-display">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-slate-200">
                    {skill.level}%
                  </span>
                  <div className="text-[10px] font-mono text-slate-500">
                    {skill.years} {skill.years === 1 ? 'yr' : 'yrs'} exp
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden my-3 border border-white/5">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${accentStyles.gradient} transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm glass-panel rounded-2xl border border-white/10">
            No technical skills found matching "{searchQuery}".
          </div>
        )}

        {/* Arsenal Highlights Banner */}
        <div className="mt-14 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl bg-white/5 text-white ${accentStyles.text}`}>
              <Layers className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-display">
                Continuous Growth: Hackathons, UI/UX Sprints & AI Exploration
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                From participating in state AI conclaves to designing high-fidelity Figma prototypes and coding responsive React apps, every project is a stepping stone of active hands-on engineering.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${accentStyles.badge}`}>
              AJCE B.Tech CSE Fresher
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

