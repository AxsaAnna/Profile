import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useProfile } from '../../context/ProfileContext';
import { ProjectItem } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { MagneticButton } from '../common/MagneticButton';
import { sound } from '../../utils/sound';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { accentStyles } = useTheme();
  const { profile } = useProfile();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI / Intelligent Systems',
    'Full-Stack Architecture',
    'Creative Tech / WebGL',
    'Cloud & Systems',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? profile.projects
    : profile.projects.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (cat: string) => {
    sound.playClick();
    setSelectedCategory(cat);
  };

  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Selected Works & Case Studies"
          title="Architectural breakthroughs &"
          highlightText="shipped products."
          subtitle="A curated selection of production software spanning autonomous AI systems, distributed edge pipelines, and real-time WebGL graphics."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isSelected
                    ? `bg-white/15 text-white border-white/30 shadow-lg ${accentStyles.border}`
                    : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col group hover:border-white/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Media Preview Container */}
              <div
                className="relative overflow-hidden aspect-[16/9] w-full cursor-pointer bg-slate-900"
                onClick={() => {
                  sound.playClick();
                  onSelectProject(project);
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Badge Overlay */}
                {project.badge && (
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md border ${accentStyles.badge}`}>
                      {project.badge}
                    </span>
                  </div>
                )}

                {/* Case Study prompt on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1.5 rounded-xl bg-black/75 text-white text-xs font-mono backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-lg">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3
                    onClick={() => {
                      sound.playClick();
                      onSelectProject(project);
                    }}
                    className="text-xl sm:text-2xl font-bold font-display text-white mb-2 group-hover:text-white cursor-pointer transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-medium mb-3 text-brand-400">
                    {project.tagline}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact metrics highlight */}
                  <div className="space-y-1.5 mb-6">
                    {project.metrics.slice(0, 2).map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        sound.playClick();
                        onSelectProject(project);
                      }}
                      className={`text-xs sm:text-sm font-semibold flex items-center gap-1.5 ${accentStyles.text} hover:underline`}
                    >
                      <span>Deep Dive Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                          title="Open Live Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

